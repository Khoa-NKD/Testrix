import { GoogleGenAI } from "@google/genai";
import { AIParseResult } from "@/types/exam";
import { heuristicParseQuestions } from "./docx-parser";

const SYSTEM_INSTRUCTION = `
Bạn là Trợ lý AI Chuyên gia Khảo thí và Số hóa Đề thi cho nền tảng Testrix.
Nhiệm vụ của bạn là nhận nội dung thô trích xuất từ tài liệu đề thi (.docx) tiếng Việt và chuẩn hóa thành danh sách câu hỏi trắc nghiệm dạng Quiz có cấu trúc chuẩn xác nhất.

Quy tắc bắt buộc:
1. Đọc kỹ từng câu hỏi, tách rõ ràng:
   - index: Thứ tự câu hỏi (1, 2, 3,...)
   - questionText: Nội dung câu hỏi đầy đủ, giữ nguyên các công thức, thuật ngữ và định dạng.
   - options: Danh sách chính xác 4 phương án [ { id: "A", text: "..." }, { id: "B", text: "..." }, { id: "C", text: "..." }, { id: "D", text: "..." } ].
   - correctAnswer: Đáp án đúng (A, B, C hoặc D). Nếu trong đề đã có đáp án thì lấy đúng đáp án đó, nếu đề chưa có đáp án thì bạn hãy giải bài toán và chọn đáp án chính xác nhất.
   - explanation: Lời giải chi tiết, sư phạm, giải thích từng bước tại sao chọn đáp án này và tại sao các phương án khác sai.
   - difficulty: "easy" (nhận biết), "medium" (thông hiểu/vận dụng), "hard" (vận dụng cao).
2. Tự động nhận diện tiêu đề đề thi (title), môn học (subject: Toán, Vật Lý, Hóa Học, Tiếng Anh, Sinh Học, Lịch Sử, Địa Lý, GDCD, Tin Học, v.v.), và thời gian làm bài đề xuất (durationMinutes: ví dụ 45, 50, 90).
3. Trả về định dạng JSON thuần túy (RFC 8259), không bọc trong markdown code block (không dùng \`\`\`json).
`;

const JSON_SCHEMA = {
  type: "object",
  properties: {
    title: { type: "string", description: "Tiêu đề đề thi" },
    subject: { type: "string", description: "Môn học" },
    durationMinutes: { type: "number", description: "Thời gian làm bài tính bằng phút" },
    questions: {
      type: "array",
      items: {
        type: "object",
        properties: {
          index: { type: "number" },
          questionText: { type: "string" },
          type: { type: "string", enum: ["single_choice", "multiple_choice", "true_false"] },
          options: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: { type: "string", enum: ["A", "B", "C", "D"] },
                text: { type: "string" }
              },
              required: ["id", "text"]
            }
          },
          correctAnswer: { type: "string", enum: ["A", "B", "C", "D"] },
          explanation: { type: "string" },
          difficulty: { type: "string", enum: ["easy", "medium", "hard"] }
        },
        required: ["index", "questionText", "options", "correctAnswer", "explanation"]
      }
    }
  },
  required: ["questions"]
};

export async function generateQuizWithGemini(
  rawText: string,
  userApiKey?: string
): Promise<AIParseResult> {
  const apiKey = userApiKey || process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.warn("Chưa cấu hình GEMINI_API_KEY, chuyển sang bộ phân tích Heuristic dự phòng...");
    const fallbackQuestions = heuristicParseQuestions(rawText);
    return {
      title: "Đề thi trích xuất tự động (Chế độ Heuristic)",
      subject: "Tổng hợp",
      durationMinutes: Math.max(15, fallbackQuestions.length * 2),
      questions: fallbackQuestions,
    };
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    // Trích xuất tối đa 35000 ký tự để phù hợp ngữ cảnh prompt tối ưu
    const trimmedText = rawText.slice(0, 35000);

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `Hãy phân tích nội dung văn bản đề thi dưới đây và trích xuất thành danh sách câu hỏi Quiz kèm lời giải chi tiết:\n\n${trimmedText}`,
            },
          ],
        },
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        responseMimeType: "application/json",
        responseSchema: JSON_SCHEMA,
        temperature: 0.2,
      },
    });

    const responseText = response.text || "";
    const cleanJson = responseText.replace(/```json\n?|```/g, "").trim();
    const parsedData = JSON.parse(cleanJson) as AIParseResult;

    if (!parsedData.questions || parsedData.questions.length === 0) {
      throw new Error("Mô hình AI không tìm thấy câu hỏi nào hợp lệ.");
    }

    return parsedData;
  } catch (error: unknown) {
    console.error("Lỗi khi gọi Gemini API:", error);
    // Fallback nếu API gặp sự cố
    const fallbackQuestions = heuristicParseQuestions(rawText);
    if (fallbackQuestions.length > 0) {
      return {
        title: "Đề thi trích xuất (Dự phòng sau lỗi AI)",
        subject: "Tổng hợp",
        durationMinutes: 45,
        questions: fallbackQuestions,
      };
    }
    throw error;
  }
}
