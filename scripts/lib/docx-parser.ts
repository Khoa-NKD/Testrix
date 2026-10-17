import mammoth from "mammoth";
import { Question } from "@/types/exam";

/**
 * Trích xuất toàn bộ text thô từ buffer file docx
 */
export async function extractTextFromDocx(buffer: Buffer): Promise<{ text: string; rawHtml: string }> {
  try {
    const textResult = await mammoth.extractRawText({ buffer });
    const htmlResult = await mammoth.convertToHtml({ buffer });

    return {
      text: textResult.value || "",
      rawHtml: htmlResult.value || "",
    };
  } catch (error) {
    console.error("Lỗi khi parse file docx với mammoth:", error);
    throw new Error("Không thể đọc nội dung file .docx. Vui lòng kiểm tra lại định dạng file.");
  }
}

/**
 * Trình phân tích Heuristic Regex dành cho đề thi chuẩn tiếng Việt
 * Hỗ trợ nhận diện các mẫu:
 * "Câu 1:", "Câu 01.", "Question 1:"
 * Các đáp án A., B., C., D.
 * Lời giải / Đáp án / Hướng dẫn giải
 */
export function heuristicParseQuestions(rawText: string): Omit<Question, "id">[] {
  const questions: Omit<Question, "id">[] = [];

  // Tách văn bản thành các block câu hỏi
  // Regex tìm "Câu 1", "Câu 2", "Bài 1", "Question 1" ở đầu dòng hoặc sau ngắt đoạn
  const questionSplitRegex = /(?:^|\n)\s*(?:Câu|Question|Bài)\s*(\d+)[\s.:\-)]+/gi;
  const matches = Array.from(rawText.matchAll(questionSplitRegex));

  if (matches.length === 0) {
    return [];
  }

  for (let i = 0; i < matches.length; i++) {
    const currentMatch = matches[i];
    const startIndex = currentMatch.index + currentMatch[0].length;
    const endIndex = i + 1 < matches.length ? matches[i + 1].index : rawText.length;
    const block = rawText.slice(startIndex, endIndex).trim();
    const questionIndex = parseInt(currentMatch[1], 10) || i + 1;

    // Tìm xem có phần Lời giải / Hướng dẫn giải / Đáp án không
    let questionAndOptionsPart = block;
    let explanation = "Lời giải đang được cập nhật.";
    let detectedAnswer = "A";

    const explanationSplit = block.split(/(?:Lời giải|Hướng dẫn giải|Giải chi tiết|HDG|Explanation)[\s.:\-]+/i);
    if (explanationSplit.length > 1) {
      questionAndOptionsPart = explanationSplit[0].trim();
      explanation = explanationSplit.slice(1).join("\n").trim();
    }

    // Tìm đáp án ngắn dạng: "Đáp án: A" hoặc "Chọn A"
    const answerMatch = block.match(/(?:Đáp án|Chọn|Key|Answer)[\s.:\-]+([A-D])/i);
    if (answerMatch) {
      detectedAnswer = answerMatch[1].toUpperCase();
    }

    // Tách các lựa chọn A, B, C, D
    const optionMatches = Array.from(
      questionAndOptionsPart.matchAll(/(?:^|\s|\n)([A-D])[\s.:\-)]([^\n]+?)(?=(?:\s+[A-D][\s.:\-)])|$)/gi)
    );

    let options: { id: "A" | "B" | "C" | "D"; text: string }[] = [];
    let questionText = questionAndOptionsPart;

    if (optionMatches.length >= 2) {
      // Cắt bỏ phần options khỏi questionText
      const firstOptIndex = optionMatches[0].index;
      if (typeof firstOptIndex === "number" && firstOptIndex > 0) {
        questionText = questionAndOptionsPart.slice(0, firstOptIndex).trim();
      }

      options = optionMatches.map((m) => {
        const id = m[1].toUpperCase() as "A" | "B" | "C" | "D";
        const text = m[2].trim();
        return { id, text };
      });
    } else {
      // Fallback nếu không tách được A, B, C, D rõ ràng
      options = [
        { id: "A", text: "Lựa chọn A" },
        { id: "B", text: "Lựa chọn B" },
        { id: "C", text: "Lựa chọn C" },
        { id: "D", text: "Lựa chọn D" },
      ];
    }

    questions.push({
      index: questionIndex,
      questionText: questionText.replace(/\s+/g, " ").trim(),
      type: "single_choice",
      options,
      correctAnswer: detectedAnswer,
      explanation,
      difficulty: questionIndex <= 15 ? "easy" : questionIndex <= 30 ? "medium" : "hard",
      points: 0.25,
    });
  }

  return questions;
}
