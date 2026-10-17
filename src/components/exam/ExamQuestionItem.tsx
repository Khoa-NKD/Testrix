import React from "react";
import { Question } from "@/types/exam";
import { Bookmark, Sparkles, Check, X } from "lucide-react";

interface ExamQuestionItemProps {
  question: Question;
  questionNumber: number;
  selectedOption: string | null;
  isFlagged: boolean;
  onSelectOption: (optionId: string) => void;
  onToggleFlag: () => void;
  isSubmitted?: boolean;
  showExplanation?: boolean;
}

export default function ExamQuestionItem({
  question,
  questionNumber,
  selectedOption,
  isFlagged,
  onSelectOption,
  onToggleFlag,
  isSubmitted = false,
  showExplanation = false,
}: ExamQuestionItemProps) {
  const isCorrect = isSubmitted && selectedOption === question.correctAnswer;
  const isWrong = isSubmitted && selectedOption !== null && selectedOption !== question.correctAnswer;
  const isUnanswered = isSubmitted && selectedOption === null;

  // Level badge (defaulting to "Nhận biết" if not provided)
  const levelText = question.cognitiveLevel || (questionNumber <= 15 ? "Nhận biết" : questionNumber <= 30 ? "Thông hiểu" : "Vận dụng");

  return (
    <div
      id={`q-item-${question.id}`}
      className={`bg-white rounded-2xl p-5 sm:p-6 transition-all border ${
        isSubmitted
          ? isCorrect
            ? "border-emerald-300 shadow-xs bg-emerald-50/20"
            : isWrong
            ? "border-rose-300 shadow-xs bg-rose-50/20"
            : "border-slate-200"
          : isFlagged
          ? "border-purple-300 ring-2 ring-purple-100 shadow-xs"
          : selectedOption
          ? "border-emerald-200 shadow-xs"
          : "border-slate-200/90 hover:border-slate-300 shadow-xs"
      }`}
    >
      {/* Header Bar of Question */}
      <div className="flex items-center justify-between gap-3 mb-3 pb-2.5 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <span className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
            Câu {questionNumber}
          </span>

          {/* Level badge like reference image (Nhận biết) */}
          <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-[#16a34a] text-white shadow-xs">
            {levelText}
          </span>

          {/* Result state tag if submitted */}
          {isSubmitted && (
            <span
              className={`px-2 py-0.5 rounded text-xs font-bold inline-flex items-center gap-1 ${
                isCorrect
                  ? "bg-emerald-100 text-emerald-800"
                  : isWrong
                  ? "bg-rose-100 text-rose-800"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              {isCorrect ? (
                <>
                  <Check className="w-3.5 h-3.5" /> Đúng
                </>
              ) : isWrong ? (
                <>
                  <X className="w-3.5 h-3.5" /> Sai
                </>
              ) : (
                "Chưa làm"
              )}
            </span>
          )}
        </div>

        {/* Flag button (purple) */}
        {!isSubmitted && (
          <button
            type="button"
            onClick={onToggleFlag}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              isFlagged
                ? "bg-purple-100 text-purple-800 border border-purple-300 font-bold"
                : "text-slate-400 hover:text-purple-700 hover:bg-purple-50"
            }`}
            title="Đánh dấu để xem lại câu này sau"
          >
            <Bookmark className={`w-3.5 h-3.5 ${isFlagged ? "fill-purple-600 text-purple-600" : ""}`} />
            <span className="hidden sm:inline">
              {isFlagged ? "Đã đánh dấu" : "Cần kiểm tra lại"}
            </span>
          </button>
        )}
      </div>

      {/* Question Content */}
      <div className="text-slate-800 text-base sm:text-lg font-medium leading-relaxed mb-5 select-text">
        {question.questionText}
      </div>

      {/* Options List */}
      <div className="space-y-2.5">
        {question.options.map((option) => {
          const isSelected = selectedOption === option.id;
          const isKey = isSubmitted && question.correctAnswer === option.id;
          const isWrongSelected = isSubmitted && isSelected && !isKey;

          let containerClass =
            "border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/30 text-slate-700 bg-slate-50/50";
          let radioCircleClass = "border-slate-300 text-transparent";

          if (isSubmitted) {
            if (isKey) {
              containerClass = "border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-500";
              radioCircleClass = "border-emerald-600 bg-emerald-600 text-white";
            } else if (isWrongSelected) {
              containerClass = "border-rose-400 bg-rose-50 text-rose-950 line-through opacity-85";
              radioCircleClass = "border-rose-500 bg-rose-500 text-white";
            } else {
              containerClass = "border-slate-200 bg-slate-50/40 text-slate-400 opacity-60";
              radioCircleClass = "border-slate-300 text-transparent";
            }
          } else if (isSelected) {
            containerClass = "border-indigo-600 bg-indigo-50/70 text-indigo-950 font-semibold ring-2 ring-indigo-500/30 shadow-xs";
            radioCircleClass = "border-indigo-600 bg-indigo-600 text-white";
          }

          return (
            <button
              key={option.id}
              type="button"
              disabled={isSubmitted}
              onClick={() => onSelectOption(option.id)}
              className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all flex items-start gap-3.5 cursor-pointer disabled:cursor-default ${containerClass}`}
            >
              {/* Radio Indicator */}
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 transition-colors ${radioCircleClass}`}
              >
                {isSelected || isKey ? "●" : ""}
              </div>

              {/* Option Letter & Text */}
              <div className="flex-1 text-sm sm:text-base leading-relaxed">
                <span className="font-bold mr-1.5">{option.id}.</span>
                <span>{option.text}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Detailed Pedagogical Explanation Box */}
      {showExplanation && question.explanation && (
        <div className="mt-5 p-4 sm:p-5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-slate-800 text-sm leading-relaxed animate-in fade-in">
          <div className="flex items-center gap-2 text-amber-900 font-bold mb-2 text-xs sm:text-sm">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
            <span>💡 Lời giải chi tiết & Phương pháp giải:</span>
          </div>
          <div className="whitespace-pre-line text-slate-700 font-medium pl-6">
            {question.explanation}
          </div>
        </div>
      )}
    </div>
  );
}
