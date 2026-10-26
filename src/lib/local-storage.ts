import { QuizAttempt } from "@/types/exam";

const DRAFT_PREFIX = "testrix_draft_";
const FLAGS_PREFIX = "testrix_flags_";
const ATTEMPTS_KEY = "testrix_local_attempts";

// Lưu nháp câu trả lời
export function saveDraftAnswers(examId: string, answers: Record<string, string>): void {
  if (typeof window === "undefined") return;
  try {
    const clean: Record<string, string> = {};
    for (const [k, v] of Object.entries(answers)) {
      if (k && k !== "undefined" && k !== "null" && v !== undefined && v !== null) {
        clean[k] = v;
      }
    }
    localStorage.setItem(`${DRAFT_PREFIX}${examId}`, JSON.stringify(clean));
  } catch (err) {
    console.error("Lỗi lưu nháp bài thi:", err);
  }
}

export function loadDraftAnswers(examId: string): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(`${DRAFT_PREFIX}${examId}`);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    const clean: Record<string, string> = {};
    for (const [k, v] of Object.entries(parsed)) {
      if (k && k !== "undefined" && k !== "null" && typeof v === "string") {
        clean[k] = v;
      }
    }
    return clean;
  } catch {
    return {};
  }
}

export function clearDraftAnswers(examId: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(`${DRAFT_PREFIX}${examId}`);
  } catch (err) {
    console.error("Lỗi xóa nháp bài thi:", err);
  }
}

// Lưu nháp các câu đánh dấu cần kiểm tra lại (màu tím)
export function saveDraftFlags(examId: string, flags: Record<string, boolean>): void {
  if (typeof window === "undefined") return;
  try {
    const clean: Record<string, boolean> = {};
    for (const [k, v] of Object.entries(flags)) {
      if (k && k !== "undefined" && k !== "null") {
        clean[k] = Boolean(v);
      }
    }
    localStorage.setItem(`${FLAGS_PREFIX}${examId}`, JSON.stringify(clean));
  } catch (err) {
    console.error("Lỗi lưu câu hỏi phân vân:", err);
  }
}

export function loadDraftFlags(examId: string): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(`${FLAGS_PREFIX}${examId}`);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    const clean: Record<string, boolean> = {};
    for (const [k, v] of Object.entries(parsed)) {
      if (k && k !== "undefined" && k !== "null") {
        clean[k] = Boolean(v);
      }
    }
    return clean;
  } catch {
    return {};
  }
}

export function clearDraftFlags(examId: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(`${FLAGS_PREFIX}${examId}`);
  } catch (err) {
    console.error("Lỗi xóa cờ đánh dấu:", err);
  }
}

// Lưu lịch sử bài thi đã nộp
export function saveLocalAttempt(attempt: QuizAttempt): void {
  if (typeof window === "undefined") return;
  try {
    const existing = getLocalAttempts();
    const updated = [attempt, ...existing.filter((a) => a.id !== attempt.id)];
    localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(updated.slice(0, 50))); // Tối đa 50 bài thi
    window.dispatchEvent(new Event("storage"));
  } catch (err) {
    console.error("Lỗi lưu kết quả bài thi vào LocalStorage:", err);
  }
}

export function getLocalAttempts(): QuizAttempt[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(ATTEMPTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function getLocalAttemptById(id: string): QuizAttempt | null {
  const attempts = getLocalAttempts();
  return attempts.find((a) => a.id === id) || null;
}
