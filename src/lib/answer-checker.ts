import { Question } from "@/types/exam";

/**
 * Chuẩn hóa câu để so sánh đáp án tự luận (sentence transformation):
 * - Chuyển chữ thường
 * - Chuẩn hóa dấu nháy đơn/kép (12 o’clock -> 12 o'clock)
 * - Loại bỏ ký tự mũi tên đầu câu (nếu học sinh lỡ gõ lại "→ ")
 * - Thu gọn khoảng trắng thừa
 * - Bỏ dấu chấm/phẩy/chấm than ở cuối câu
 */
export function normalizeSentence(str: string): string {
  if (!str) return "";
  return str
    .toLowerCase()
    .trim()
    .replace(/^[→\->\s]+/, "") // Loại bỏ mũi tên dẫn nếu có
    .replace(/[’‘`]/g, "'") // Chuẩn hóa dấu nháy đơn
    .replace(/[“”]/g, '"') // Chuẩn hóa dấu ngoặc kép
    .replace(/\s+/g, " ") // Thu gọn khoảng trắng
    .replace(/[.,!?;:]+$/, "") // Bỏ dấu chấm/phẩy kết câu
    .trim();
}

/**
 * Kiểm tra câu trả lời của học sinh có chính xác không:
 * - Hỗ trợ cả câu trắc nghiệm (single_choice, multiple_choice)
 * - Hỗ trợ câu tự luận (text_input) với độ linh hoạt cao, chấp nhận viết có/không có dấu chấm cuối câu,
 *   chấp nhận viết cả câu hoàn chỉnh hoặc chỉ viết phần tiếp theo sau gợi ý.
 */
export function isAnswerCorrect(
  question: Question,
  userAnswer: string | null | undefined
): boolean {
  if (!userAnswer || !userAnswer.trim()) {
    return false;
  }

  // Trường hợp câu hỏi tự luận tự gõ
  if (question.type === "text_input") {
    const userNorm = normalizeSentence(userAnswer);
    const correctNorm = normalizeSentence(question.correctAnswer);

    if (!userNorm) return false;

    // 1. So khớp trực tiếp với đáp án mẫu
    if (userNorm === correctNorm) {
      return true;
    }

    // 2. So khớp với danh sách các cách viết tương đương được chấp nhận
    if (question.acceptableAnswers && question.acceptableAnswers.length > 0) {
      for (const ans of question.acceptableAnswers) {
        if (userNorm === normalizeSentence(ans)) {
          return true;
        }
      }
    }

    // 3. Nếu câu có từ gợi ý (inputPrompt) mà đáp án bắt đầu bằng từ gợi ý,
    // kiểm tra trường hợp học sinh chỉ gõ phần vị ngữ tiếp nối
    if (question.inputPrompt) {
      const promptNorm = normalizeSentence(question.inputPrompt);
      if (correctNorm.startsWith(promptNorm)) {
        const remainder = correctNorm.slice(promptNorm.length).trim();
        if (userNorm === remainder) {
          return true;
        }
      }
    }

    return false;
  }

  // Trường hợp trắc nghiệm (A, B, C, D)
  return userAnswer.trim().toUpperCase() === question.correctAnswer.trim().toUpperCase();
}
