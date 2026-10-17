import React from "react";
import { Question, ExamSection } from "@/types/exam";
import { Send, RotateCcw } from "lucide-react";

interface AnswerSheetProps {
  questions: Question[];
  sections?: ExamSection[];
  answers: Record<string, string>;
  flags: Record<string, boolean>;
  timeLeftSeconds: number;
  totalTimeSeconds: number;
  activeQuestionIndex?: number;
  onSelectQuestion: (index: number) => void;
  onSubmit: () => void;
  onRetry?: () => void;
  isSubmitted?: boolean;
}

export default function AnswerSheet({
  questions,
  sections,
  answers,
  flags,
  timeLeftSeconds,
  onSelectQuestion,
  onSubmit,
  onRetry,
  isSubmitted = false,
}: AnswerSheetProps) {
  const totalCount = questions.length;
  const answeredCount = Object.keys(answers).filter((k) => answers[k] !== undefined && answers[k] !== null).length;

  // Format time as HH:MM:SS or MM:SS
  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
    return `${pad(h)}:${pad(m)}:${pad(s)}`;
  };

  const isTimeLow = timeLeftSeconds <= 300 && !isSubmitted; // Dưới 5 phút

  // Helper to render a question circle button
  const renderQuestionCircle = (q: Question) => {
    const originalIndex = questions.findIndex((item) => item.id === q.id);
    const qNum = q.index !== undefined ? q.index : originalIndex + 1;
    const isAnswered = answers[q.id] !== undefined && answers[q.id] !== null;
    const isFlagged = flags[q.id] === true;

    // Result states if submitted
    const isKey = isSubmitted && answers[q.id] === q.correctAnswer;
    const isWrong = isSubmitted && isAnswered && !isKey;

    let badgeStyle = "bg-white border border-slate-300 text-slate-700 hover:border-slate-400";

    if (isSubmitted) {
      if (isKey) {
        badgeStyle = "bg-[#16a34a] text-white border-transparent font-bold shadow-xs";
      } else if (isWrong) {
        badgeStyle = "bg-rose-600 text-white border-transparent font-bold shadow-xs";
      } else {
        badgeStyle = "bg-slate-100 text-slate-400 border-slate-200";
      }
    } else if (isFlagged) {
      // 🟣 Tím: Câu cần kiểm tra lại
      badgeStyle = "bg-[#9333ea] text-white border-transparent font-bold shadow-xs hover:bg-[#7e22ce]";
    } else if (isAnswered) {
      // 🟢 Xanh lá: Câu đã làm
      badgeStyle = "bg-[#16a34a] text-white border-transparent font-bold shadow-xs hover:bg-[#15803d]";
    }

    return (
      <button
        key={q.id}
        type="button"
        onClick={() => onSelectQuestion(originalIndex)}
        className={`w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full flex items-center justify-center text-xs font-bold transition-all cursor-pointer ${badgeStyle}`}
        title={`Câu ${qNum} ${isAnswered ? "(Đã làm)" : "(Chưa làm)"} ${isFlagged ? "- Cần kiểm tra lại" : ""}`}
      >
        {qNum}
      </button>
    );
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md p-3 sm:p-3.5 flex flex-col text-slate-800">
      {/* Top Stats: Two-column compact layout */}
      <div className="grid grid-cols-2 divide-x divide-slate-200 border-b border-slate-200 pb-2 mb-2.5 text-center">
        {/* Box 1: Số câu đã làm */}
        <div className="px-1">
          <span className="text-[11px] font-semibold text-slate-500 block">
            Số câu đã làm
          </span>
          <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight block">
            {answeredCount}/{totalCount}
          </span>
        </div>

        {/* Box 2: Thời gian còn lại */}
        <div className="px-1">
          <span className="text-[11px] font-semibold text-slate-500 block">
            Thời gian còn lại
          </span>
          <span
            className={`text-xl sm:text-2xl font-black tracking-tight block font-mono ${
              isTimeLow ? "text-rose-600 animate-pulse" : "text-blue-900"
            }`}
          >
            {formatTime(timeLeftSeconds)}
          </span>
        </div>
      </div>

      {/* Question Grid: Divided by sections or flat fallback */}
      <div className="max-h-[260px] overflow-y-auto pr-1 py-0.5 scrollbar-thin">
        {sections && sections.length > 0 ? (
          <div>
            {sections.map((sec, secIdx) => {
              const secQuestions = questions.filter(
                (q) =>
                  (q.sectionId && q.sectionId === sec.id) ||
                  (sec.questionIndices && sec.questionIndices.includes(q.index))
              );

              if (secQuestions.length === 0) return null;

              const answeredInSec = secQuestions.filter(
                (q) => answers[q.id] !== undefined && answers[q.id] !== null
              ).length;
              const isAllDone = answeredInSec === secQuestions.length && secQuestions.length > 0;

              return (
                <div key={sec.id || `sec-${secIdx}`} className="mb-2.5 last:mb-0">
                  {/* Section Title Header */}
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-700 bg-slate-100/90 px-2 py-1 rounded-md mb-1.5 sticky top-0 backdrop-blur-xs z-10 border border-slate-200/60">
                    <div className="flex items-center gap-1.5 min-w-0 pr-1">
                      <span className="w-1.5 h-3 rounded-full bg-indigo-600 shrink-0"></span>
                      <span className="truncate font-extrabold text-slate-900 tracking-tight" title={sec.title}>
                        {sec.title}
                      </span>
                    </div>
                    <span
                      className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded-full shrink-0 ${
                        isAllDone
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-white text-slate-600 border border-slate-200"
                      }`}
                    >
                      {answeredInSec}/{secQuestions.length}
                    </span>
                  </div>

                  {/* Question circles for this section */}
                  <div className="grid grid-cols-6 gap-1.5 px-0.5">
                    {secQuestions.map((q) => renderQuestionCircle(q))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Fallback: Flat 6-column grid if no sections */
          <div className="grid grid-cols-6 gap-1.5">
            {questions.map((q) => renderQuestionCircle(q))}
          </div>
        )}
      </div>

      {/* Action Button (NỘP BÀI) - Compact & Prominent */}
      <div className="mt-3 mb-2.5">
        {!isSubmitted ? (
          <button
            type="button"
            onClick={onSubmit}
            className="w-full py-2.5 px-4 rounded-full bg-[#ea580c] hover:bg-[#c2410c] active:scale-98 text-white font-black text-sm sm:text-base uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>NỘP BÀI</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={onRetry}
            className="w-full py-2.5 px-4 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-black text-sm sm:text-base uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>LÀM LẠI ĐỀ NÀY</span>
          </button>
        )}
      </div>

      {/* Legend underneath - Compact horizontal layout */}
      <div className="pt-2 border-t border-slate-200 text-[11px] font-medium text-slate-600 flex flex-wrap items-center justify-between gap-x-2 gap-y-1">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#16a34a] shrink-0"></span>
          <span>Đã làm</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-white border border-slate-400 shrink-0"></span>
          <span>Chưa làm</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#9333ea] shrink-0"></span>
          <span>Cần xem lại</span>
        </div>
      </div>
    </div>
  );
}
