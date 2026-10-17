import { Exam } from "@/types/exam";
import rawExams from "./exams.json";

export const defaultExams: Exam[] = rawExams as Exam[];

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
