import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import { Trophy, CheckCircle2, XCircle, RotateCcw, Home, Eye, Sparkles } from "lucide-react";
import { QuizAttempt } from "@/types/exam";
import { Link } from "react-router-dom";

interface ResultModalProps {
  attempt: QuizAttempt;
  isOpen: boolean;
  onClose: () => void;
  onRetry: () => void;
}

export default function ResultModal({ attempt, isOpen, onClose, onRetry }: ResultModalProps) {
  useEffect(() => {
    if (isOpen && attempt.score >= 5) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#ea580c", "#4f46e5", "#16a34a", "#9333ea", "#f59e0b"],
        });
      } catch {
        // Fallback
      }
    }
  }, [isOpen, attempt.score]);

  if (!isOpen) return null;

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m} phút ${s < 10 ? "0" : ""}${s} giây`;
  };

  const getVerdict = (score: number) => {
    if (score >= 9) return { text: "Xuất sắc! Phong độ tuyệt vời 🌟", color: "text-emerald-600" };
    if (score >= 7.5) return { text: "Rất tốt! Nắm vững kiến thức trọng tâm 🎯", color: "text-indigo-600" };
    if (score >= 5) return { text: "Khá ổn! Hãy rà soát lại các câu sai nhé 💡", color: "text-amber-600" };
    return { text: "Cần nỗ lực hơn! Hãy xem kỹ lời giải chi tiết bên dưới 📚", color: "text-rose-600" };
  };

  const verdict = getVerdict(attempt.score);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto text-slate-800">
        {/* Banner Header */}
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 p-6 sm:p-8 text-center text-white relative">
          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto mb-3 shadow-lg">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Kết quả Bài thi thử
          </h2>
          <p className="text-sm font-medium text-amber-100 mt-1 max-w-md mx-auto line-clamp-1">
            {attempt.examTitle}
          </p>
          <p className="text-xs sm:text-sm font-bold mt-2 bg-white/20 inline-block px-3 py-1 rounded-full text-white">
            {verdict.text}
          </p>
        </div>

        {/* Score & Statistics */}
        <div className="p-6 sm:p-7">
          <div className="flex items-center justify-center gap-6 bg-slate-50 border border-slate-200/80 rounded-2xl p-5 mb-6 text-center">
            <div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                Điểm số (Thang 10)
              </span>
              <span className="text-4xl sm:text-5xl font-black text-[#ea580c] tracking-tight block mt-1">
                {attempt.score.toFixed(1)}
              </span>
              <span className="text-xs text-slate-500 font-medium">Đạt {attempt.percentage}%</span>
            </div>
            <div className="h-14 w-px bg-slate-200"></div>
            <div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                Thời gian làm bài
              </span>
              <span className="text-xl sm:text-2xl font-bold text-slate-800 block mt-1">
                {formatTime(attempt.timeSpentSeconds)}
              </span>
              <span className="text-xs text-slate-500 font-medium">{attempt.totalQuestions} câu hỏi</span>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-3 mb-6 text-center text-xs">
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
              <span className="text-emerald-700 font-semibold block">Số câu đúng</span>
              <span className="text-xl font-bold text-emerald-700 mt-0.5 block">
                {attempt.correctAnswersCount}
              </span>
            </div>
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200">
              <span className="text-rose-700 font-semibold block">Số câu sai</span>
              <span className="text-xl font-bold text-rose-700 mt-0.5 block">
                {attempt.wrongAnswersCount}
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-100 border border-slate-200">
              <span className="text-slate-600 font-semibold block">Chưa làm</span>
              <span className="text-xl font-bold text-slate-700 mt-0.5 block">
                {attempt.unansweredCount}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-2.5">
            <button
              type="button"
              onClick={onClose}
              className="w-full py-3.5 px-4 rounded-xl bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              <span>Xem lại bài làm & Lời giải chi tiết</span>
            </button>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={onRetry}
                className="flex-1 py-3 px-4 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Làm lại đề này</span>
              </button>
              <Link
                to="/"
                className="flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs sm:text-sm text-center transition-colors flex items-center justify-center gap-2"
              >
                <Home className="w-4 h-4" />
                <span>Về Trang chủ</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
