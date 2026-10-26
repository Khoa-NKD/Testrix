import { Exam } from "@/types/exam";
import rawExams from "./exams.json";

export const defaultExams: Exam[] = (rawExams as Exam[]).map((exam) => ({
  ...exam,
  questions: (exam.questions || []).map((q, idx) => ({
    ...q,
    id: q.id || `${exam.id}-q${q.index !== undefined ? q.index : idx + 1}`,
  })),
}));

export function getAllExams(): Exam[] {
  return defaultExams;
}

export function getExamById(id: string): Exam | undefined {
  return defaultExams.find((exam) => exam.id === id);
}

export function getExamsBySubject(subject: string): Exam[] {
  if (!subject || subject === "Tất cả") return defaultExams;
  return defaultExams.filter((e) => e.subject.toLowerCase() === subject.toLowerCase());
}

export function getExamsByGrade(grade: string): Exam[] {
  if (!grade || grade === "Tất cả") return defaultExams;
  return defaultExams.filter((e) => e.grade === grade);
}

export function getExamsByCategory(category: string): Exam[] {
  if (!category || category === "Tất cả") return defaultExams;
  const norm = category.toLowerCase();
  return defaultExams.filter(
    (e) =>
      (e.categories && e.categories.some((c) => c.toLowerCase() === norm)) ||
      (e.category && e.category.toLowerCase() === norm) ||
      (e.tags && e.tags.some((t) => t.toLowerCase() === norm))
  );
}

