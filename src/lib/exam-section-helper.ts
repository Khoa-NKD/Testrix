import { Exam, ExamSection, Question } from "@/types/exam";

export interface ResolvedSection {
  section: ExamSection;
  questions: Question[];
  startIndex: number;
  endIndex: number;
  questionCount: number;
  rangeText: string;
}

/**
 * Format range text, e.g. "Câu 1 - Câu 5 (5 câu)" or "Câu 1 (1 câu)"
 */
export function formatQuestionRange(indices: number[]): string {
  if (!indices || indices.length === 0) return "";
  const sorted = [...indices].sort((a, b) => a - b);
  const min = sorted[0];
  const max = sorted[sorted.length - 1];
  const count = sorted.length;
  if (min === max) {
    return `Câu ${min} (1 câu)`;
  }
  return `Câu ${min} - Câu ${max} (${count} câu)`;
}

/**
 * Resolves sections for any exam:
 * 1. If exam has explicit sections, map questions to each section accurately by sectionId or question.index.
 * 2. Any orphan questions not covered by sections are added to a clean extra section.
 * 3. If exam has NO sections, automatically generates logical sections based on question count.
 */
export function resolveExamSections(exam: Exam): ResolvedSection[] {
  if (!exam || !exam.questions || exam.questions.length === 0) {
    return [];
  }

  const allQuestions = exam.questions;
  const claimedQuestionIds = new Set<string>();
  const resolved: ResolvedSection[] = [];

  // Case 1: Exam has explicit sections defined
  if (exam.sections && exam.sections.length > 0) {
    exam.sections.forEach((sec) => {
      // Find all questions belonging to this section
      const secQuestions = allQuestions.filter((q) => {
        if (q.sectionId && q.sectionId === sec.id) return true;
        if (sec.questionIndices && sec.questionIndices.includes(q.index)) return true;
        return false;
      });

      if (secQuestions.length > 0) {
        secQuestions.forEach((q) => claimedQuestionIds.add(q.id));

        const indices = secQuestions.map((q) => q.index || 1).sort((a, b) => a - b);
        const min = indices[0];
        const max = indices[indices.length - 1];

        resolved.push({
          section: {
            ...sec,
            questionIndices: indices,
          },
          questions: secQuestions,
          startIndex: min,
          endIndex: max,
          questionCount: secQuestions.length,
          rangeText: formatQuestionRange(indices),
        });
      }
    });

    // Check if there are any remaining/orphan questions
    const unclaimed = allQuestions.filter((q) => !claimedQuestionIds.has(q.id));
    if (unclaimed.length > 0) {
      const indices = unclaimed.map((q) => q.index || 1).sort((a, b) => a - b);
      const min = indices[0];
      const max = indices[indices.length - 1];

      resolved.push({
        section: {
          id: "sec-unclaimed",
          title: "PHẦN CÂU HỎI BỔ SUNG",
          instruction: "Chọn phương án đúng nhất cho các câu hỏi sau:",
          questionIndices: indices,
        },
        questions: unclaimed,
        startIndex: min,
        endIndex: max,
        questionCount: unclaimed.length,
        rangeText: formatQuestionRange(indices),
      });
    }

    return resolved;
  }

  // Case 2: Exam does NOT have explicit sections
  // If <= 10 questions, make 1 clean section
  if (allQuestions.length <= 10) {
    const indices = allQuestions.map((q, idx) => q.index || idx + 1);
    resolved.push({
      section: {
        id: "sec-default-all",
        title: "PHẦN I. CÂU HỎI TRẮC NGHIỆM TỔNG HỢP",
        instruction: "Đọc kỹ nội dung từng câu hỏi và chọn một phương án trả lời đúng nhất (A, B, C hoặc D).",
        questionIndices: indices,
      },
      questions: allQuestions,
      startIndex: indices[0],
      endIndex: indices[indices.length - 1],
      questionCount: allQuestions.length,
      rangeText: formatQuestionRange(indices),
    });
    return resolved;
  }

  // If > 10 questions, group into logical blocks of 10 or 15 questions
  const chunkSize = allQuestions.length > 30 ? 10 : 10;
  const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

  for (let i = 0; i < allQuestions.length; i += chunkSize) {
    const chunk = allQuestions.slice(i, i + chunkSize);
    const chunkIndices = chunk.map((q, idx) => q.index || i + idx + 1);
    const roman = romanNumerals[Math.floor(i / chunkSize)] || `${Math.floor(i / chunkSize) + 1}`;
    const min = chunkIndices[0];
    const max = chunkIndices[chunkIndices.length - 1];

    resolved.push({
      section: {
        id: `sec-auto-${i}`,
        title: `PHẦN ${roman}. CÂU HỎI TRẮC NGHIỆM (${min} - ${max})`,
        instruction: "Chọn phương án trả lời đúng nhất cho các câu hỏi bên dưới.",
        questionIndices: chunkIndices,
      },
      questions: chunk,
      startIndex: min,
      endIndex: max,
      questionCount: chunk.length,
      rangeText: formatQuestionRange(chunkIndices),
    });
  }

  return resolved;
}
