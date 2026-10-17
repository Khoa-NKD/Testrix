import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getExamById } from "@/data/examRepository";
import { Exam, QuizAttempt, UserAnswerReview } from "@/types/exam";
import {
  saveDraftAnswers,
  loadDraftAnswers,
  clearDraftAnswers,
  saveDraftFlags,
  loadDraftFlags,
  clearDraftFlags,
  saveLocalAttempt,
} from "@/lib/local-storage";
import Navbar from "@/components/common/Navbar";
import GradeTabs from "@/components/common/GradeTabs";
import ExamHeader from "@/components/exam/ExamHeader";
import ExamQuestionItem from "@/components/exam/ExamQuestionItem";
import ExamSectionView from "@/components/exam/ExamSectionView";
import AnswerSheet from "@/components/exam/AnswerSheet";
import SubmitConfirmModal from "@/components/exam/SubmitConfirmModal";
import ResultModal from "@/components/exam/ResultModal";
import { resolveExamSections } from "@/lib/exam-section-helper";
import { ArrowLeft, BookOpen, RotateCcw } from "lucide-react";

export default function ExamPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [exam, setExam] = useState<Exam | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [flags, setFlags] = useState<Record<string, boolean>>({});
  const [timeLeft, setTimeLeft] = useState<number>(50 * 60);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [showResultModal, setShowResultModal] = useState<boolean>(false);
  const [attempt, setAttempt] = useState<QuizAttempt | null>(null);
  const [isMobileSheetOpen, setIsMobileSheetOpen] = useState<boolean>(false);

  const startTimeRef = useRef<number>(Date.now());

  // Load exam and draft from localStorage
  useEffect(() => {
    if (!id) return;
    const found = getExamById(id);
    if (found) {
      setExam(found);
      const savedAnswers = loadDraftAnswers(id);
      const savedFlags = loadDraftFlags(id);
      setAnswers(savedAnswers);
      setFlags(savedFlags);
      setTimeLeft(found.durationMinutes * 60);
      startTimeRef.current = Date.now();
    } else {
      setExam(null);
    }
  }, [id]);

  // Timer countdown
  useEffect(() => {
    if (isSubmitted || !exam) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleForceSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSubmitted, exam]);

  // Select Option handler
  const handleSelectOption = (questionId: string, optionId: string) => {
    if (isSubmitted || !id) return;
    const newAnswers = { ...answers, [questionId]: optionId };
    setAnswers(newAnswers);
    saveDraftAnswers(id, newAnswers);
  };

  // Toggle Flag handler (Purple flag for questions to review)
  const handleToggleFlag = (questionId: string) => {
    if (isSubmitted || !id) return;
    const newFlags = { ...flags, [questionId]: !flags[questionId] };
    setFlags(newFlags);
    saveDraftFlags(id, newFlags);
  };

  // Scroll to question on left pane
  const handleScrollToQuestion = (index: number) => {
    if (!exam) return;
    const targetQ = exam.questions[index];
    if (targetQ) {
      const el = document.getElementById(`q-item-${targetQ.id}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
    // Close mobile sheet if open
    setIsMobileSheetOpen(false);
  };

  // Calculate & Submit Exam
  const handleConfirmSubmit = () => {
    if (!exam || !id) return;
    setShowConfirmModal(false);

    const timeSpent = Math.max(1, Math.round((Date.now() - startTimeRef.current) / 1000));
    let correctCount = 0;
    const reviews: UserAnswerReview[] = [];

    exam.questions.forEach((q, idx) => {
      const selected = answers[q.id] || null;
      const isCorrect = selected === q.correctAnswer;
      if (isCorrect) correctCount++;

      reviews.push({
        questionId: q.id,
        questionIndex: idx,
        selectedOption: selected,
        correctOption: q.correctAnswer,
        isCorrect,
        explanation: q.explanation,
        questionText: q.questionText,
        options: q.options,
        cognitiveLevel: q.cognitiveLevel,
      });
    });

    const totalQ = exam.questions.length;
    const wrongCount = Object.keys(answers).length - correctCount;
    const unansweredCount = totalQ - Object.keys(answers).length;
    const score = Math.round((correctCount / totalQ) * 10 * 10) / 10;
    const percentage = Math.round((correctCount / totalQ) * 100);

    const flaggedIds = Object.keys(flags).filter((k) => flags[k]);

    const newAttempt: QuizAttempt = {
      id: `attempt_${Date.now()}`,
      examId: exam.id,
      examTitle: exam.title,
      subject: exam.subject,
      mode: "mock_test",
      startedAt: new Date(startTimeRef.current).toISOString(),
      completedAt: new Date().toISOString(),
      timeSpentSeconds: timeSpent,
      totalQuestions: totalQ,
      correctAnswersCount: correctCount,
      wrongAnswersCount: Math.max(0, wrongCount),
      unansweredCount: Math.max(0, unansweredCount),
      score,
      percentage,
      answers,
      flaggedQuestionIds: flaggedIds,
      reviews,
    };

    setAttempt(newAttempt);
    saveLocalAttempt(newAttempt);
    clearDraftAnswers(id);
    clearDraftFlags(id);
    setIsSubmitted(true);
    setShowResultModal(true);
  };

  const handleForceSubmit = () => {
    handleConfirmSubmit();
  };

  // Retry exam
  const handleRetry = () => {
    if (!id || !exam) return;
    clearDraftAnswers(id);
    clearDraftFlags(id);
    setAnswers({});
    setFlags({});
    setIsSubmitted(false);
    setShowResultModal(false);
    setTimeLeft(exam.durationMinutes * 60);
    startTimeRef.current = Date.now();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!exam) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Navbar />
        <GradeTabs />
        <main className="flex-1 max-w-xl mx-auto w-full px-4 flex flex-col items-center justify-center text-center py-16">
          <BookOpen className="w-16 h-16 text-slate-300 mb-4" />
          <h2 className="text-xl font-bold text-slate-900 mb-2">Không tìm thấy đề thi</h2>
          <p className="text-sm text-slate-500 mb-6">
            Đề thi này không tồn tại hoặc đã bị thay đổi đường dẫn.
          </p>
          <button
            onClick={() => navigate("/")}
            className="py-2.5 px-5 rounded-xl bg-indigo-600 text-white font-semibold text-sm shadow-md"
          >
            Quay về Kho đề thi
          </button>
        </main>
      </div>
    );
  }

  const answeredCount = Object.keys(answers).length;
  const flaggedCount = Object.keys(flags).filter((k) => flags[k]).length;
  const resolvedSections = resolveExamSections(exam);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col text-slate-800">
      <Navbar />
      <GradeTabs activeGrade={exam.grade || "Lớp 12"} />

      {/* Exam Header Banner like reference image */}
      <ExamHeader
        title={exam.title}
        subject={exam.subject}
        grade={exam.grade}
        durationMinutes={exam.durationMinutes}
        totalQuestions={exam.totalQuestions}
      />

      {/* Main Split Layout: Left Exam Paper | Right Floating Sticky Answer Sheet */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-3 sm:px-6 pb-16">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* CỘT TRÁI: ĐỀ THI & CÂU HỎI CHIA THEO TỪNG PHẦN (65% width) */}
          <div className="flex-1 min-w-0 w-full space-y-5">
            {resolvedSections.map((resSec) => (
              <div key={resSec.section.id} className="space-y-4">
                <ExamSectionView
                  section={resSec.section}
                  rangeText={resSec.rangeText}
                />
                <div className="space-y-4">
                  {resSec.questions.map((q) => {
                    const qNum = q.index !== undefined ? q.index : exam.questions.findIndex((item) => item.id === q.id) + 1;

                    return (
                      <ExamQuestionItem
                        key={q.id}
                        question={q}
                        questionNumber={qNum}
                        selectedOption={answers[q.id] || null}
                        isFlagged={!!flags[q.id]}
                        onSelectOption={(optId) => handleSelectOption(q.id, optId)}
                        onToggleFlag={() => handleToggleFlag(q.id)}
                        isSubmitted={isSubmitted}
                        showExplanation={isSubmitted}
                      />
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Bottom Actions after all questions */}
            <div className="pt-6 flex items-center justify-between gap-4 border-t border-slate-200">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="inline-flex items-center gap-1.5 py-2.5 px-4 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" /> Về Kho đề thi
              </button>

              {!isSubmitted ? (
                <button
                  type="button"
                  onClick={() => setShowConfirmModal(true)}
                  className="py-3 px-8 rounded-full bg-[#ea580c] hover:bg-[#c2410c] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-md transition-all cursor-pointer"
                >
                  Nộp bài thi
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleRetry}
                  className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm sm:text-base uppercase tracking-wider shadow-md transition-all cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" /> Làm lại đề này
                </button>
              )}
            </div>
          </div>

          {/* CỘT PHẢI: PHIẾU ĐÁP ÁN & ĐỒNG HỒ (Sticky Desktop Sidebar) (35% width) */}
          <aside className="hidden lg:block w-80 lg:w-[350px] shrink-0 sticky top-14">
            <AnswerSheet
              questions={exam.questions}
              sections={resolvedSections.map((r) => r.section)}
              answers={answers}
              flags={flags}
              timeLeftSeconds={timeLeft}
              totalTimeSeconds={exam.durationMinutes * 60}
              onSelectQuestion={handleScrollToQuestion}
              onSubmit={() => setShowConfirmModal(true)}
              onRetry={handleRetry}
              isSubmitted={isSubmitted}
            />
          </aside>
        </div>
      </main>

      {/* Mobile Floating Action Button to view Answer Sheet */}
      <div className="lg:hidden fixed bottom-4 right-4 z-40">
        <button
          type="button"
          onClick={() => setIsMobileSheetOpen(true)}
          className="py-3 px-5 rounded-full bg-[#ea580c] text-white font-bold text-sm shadow-xl flex items-center gap-2 border-2 border-white"
        >
          <span>Phiếu đáp án ({answeredCount}/{exam.questions.length})</span>
        </button>
      </div>

      {/* Mobile Answer Sheet Drawer / Modal */}
      {isMobileSheetOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col justify-end bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-t-3xl max-h-[85vh] overflow-y-auto p-4 sm:p-6 shadow-2xl animate-in slide-in-from-bottom duration-200">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200">
              <h3 className="font-bold text-slate-900 text-base">Phiếu trả lời trắc nghiệm</h3>
              <button
                type="button"
                onClick={() => setIsMobileSheetOpen(false)}
                className="text-slate-400 hover:text-slate-600 font-bold text-sm p-1"
              >
                Đóng ✕
              </button>
            </div>
            <AnswerSheet
              questions={exam.questions}
              sections={resolvedSections.map((r) => r.section)}
              answers={answers}
              flags={flags}
              timeLeftSeconds={timeLeft}
              totalTimeSeconds={exam.durationMinutes * 60}
              onSelectQuestion={handleScrollToQuestion}
              onSubmit={() => {
                setIsMobileSheetOpen(false);
                setShowConfirmModal(true);
              }}
              onRetry={() => {
                setIsMobileSheetOpen(false);
                handleRetry();
              }}
              isSubmitted={isSubmitted}
            />
          </div>
        </div>
      )}

      {/* Modals */}
      <SubmitConfirmModal
        isOpen={showConfirmModal}
        totalQuestions={exam.totalQuestions}
        answeredCount={answeredCount}
        flaggedCount={flaggedCount}
        onCancel={() => setShowConfirmModal(false)}
        onConfirm={handleConfirmSubmit}
      />

      {attempt && (
        <ResultModal
          isOpen={showResultModal}
          attempt={attempt}
          onClose={() => setShowResultModal(false)}
          onRetry={handleRetry}
        />
      )}
    </div>
  );
}
