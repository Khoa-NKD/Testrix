export interface QuestionOption {
  id: "A" | "B" | "C" | "D" | string;
  text: string;
}

export interface Question {
  id: string;
  index: number;
  questionText: string;
  type: "single_choice" | "multiple_choice" | "true_false";
  options: QuestionOption[];
  correctAnswer: string; // "A", "B", "C", "D"
  explanation: string; // Lời giải chi tiết
  difficulty?: "easy" | "medium" | "hard";
  cognitiveLevel?: "Nhận biết" | "Thông hiểu" | "Vận dụng" | "Vận dụng cao" | string;
  sectionId?: string;
  points?: number;
}

export interface ExamSection {
  id: string;
  title: string; // e.g. "I. TRỌNG ÂM (STRESS)", "II. TỪ VỰNG & NGỮ PHÁP", "III. ĐỌC HIỂU"
  instruction?: string; // Hướng dẫn làm bài của phần này
  passage?: string; // Bài đọc (nếu có, e.g. Reading 1, Reading 2)
  passageTitle?: string;
  questionIndices: number[]; // Danh sách các số thứ tự câu hỏi thuộc phần này [1, 2, 3, 4, 5]
}

export interface Exam {
  id: string;
  title: string;
  description: string;
  subject: string; // "Toán", "Vật Lý", "Hóa Học", "Tiếng Anh", "Sinh Học", "Lịch Sử", "Địa Lý", "GDCD", "Khác"
  grade?: string; // "Lớp 10", "Lớp 11", "Lớp 12", "Đại Học"
  durationMinutes: number;
  totalQuestions: number;
  originalFileName?: string;
  rawTextPreview?: string;
  sections?: ExamSection[];
  questions: Question[];
  createdAt: string;
  updatedAt: string;
  status: "ready" | "processing" | "draft";
  tags?: string[];
}

export interface UserAnswerReview {
  questionId: string;
  questionIndex: number;
  selectedOption: string | null;
  correctOption: string;
  isCorrect: boolean;
  explanation: string;
  questionText: string;
  options: QuestionOption[];
  cognitiveLevel?: string;
}

export interface QuizAttempt {
  id: string;
  examId: string;
  examTitle: string;
  subject: string;
  mode: "mock_test" | "practice";
  startedAt: string;
  completedAt: string;
  timeSpentSeconds: number;
  totalQuestions: number;
  correctAnswersCount: number;
  wrongAnswersCount: number;
  unansweredCount: number;
  score: number; // Thang điểm 10
  percentage: number;
  answers: Record<string, string>; // questionId -> selectedOption
  flaggedQuestionIds?: string[]; // Danh sách câu cần kiểm tra lại (màu tím)
  reviews: UserAnswerReview[];
}

export interface AIParseResult {
  title?: string;
  subject?: string;
  durationMinutes?: number;
  questions: Omit<Question, "id">[];
}
