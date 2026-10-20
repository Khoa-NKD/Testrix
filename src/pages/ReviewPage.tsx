import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getLocalAttemptById } from "@/lib/local-storage";
import { QuizAttempt } from "@/types/exam";
import Navbar from "@/components/common/Navbar";
import GradeTabs from "@/components/common/GradeTabs";
import Footer from "@/components/common/Footer";
import FormattedText from "@/components/common/FormattedText";
import {
  Trophy,
  CheckCircle2,
  XCircle,
  Clock,
  RotateCcw,
  ArrowLeft,
  Sparkles,
  HelpCircle,
  Filter,
} from "lucide-react";

export default function ReviewPage() {
  const { attemptId } = useParams<{ attemptId: string }>();
  const navigate = useNavigate();

  const [attempt, setAttempt] = useState<QuizAttempt | null>(null);
  const [filter, setFilter] = useState<"all" | "correct" | "wrong" | "unanswered">("all");

  useEffect(() => {
    if (attemptId) {
      const found = getLocalAttemptById(attemptId);
      setAttempt(found);
    }
  }, [attemptId]);

  if (!attempt) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex flex-col">
        <Navbar />
        <GradeTabs />
        <main className="flex-1 max-w-xl mx-auto w-full px-4 flex flex-col items-center justify-center text-center py-16">
          <HelpCircle className="w-16 h-16 text-slate-300 mb-4" />
          <h2 className="text-xl font-bold text-slate-900 mb-2">Không tìm thấy bài thi</h2>
          <p className="text-sm text-slate-500 mb-6">
            Dữ liệu bài thi không tồn tại trong bộ nhớ máy tính này.
          </p>
          <button
            onClick={() => navigate("/history")}
            className="py-2.5 px-5 rounded-xl bg-indigo-600 text-white font-semibold text-sm shadow-md"
          >
            Quay lại Lịch sử bài thi
          </button>
        </main>
      </div>
    );
  }

  const filteredReviews = attempt.reviews.filter((r) => {
    if (filter === "correct") return r.isCorrect;
    if (filter === "wrong") return !r.isCorrect && r.selectedOption !== null;
    if (filter === "unanswered") return r.selectedOption === null;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col text-slate-800">
      <Navbar />
      <GradeTabs />

      <main className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-6 sm:py-8 space-y-6 flex-1">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            to="/history"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Quay lại Lịch sử
          </Link>
          <Link
            to={`/exam/${attempt.examId}`}
            className="inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-xl bg-[#ea580c] text-white text-xs font-bold shadow-xs hover:bg-[#c2410c] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Làm lại đề này
          </Link>
        </div>

        {/* Score Summary Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-7 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200/70 mb-2">
                <Trophy className="w-3.5 h-3.5 text-amber-600" /> Bảng điểm chi tiết
              </span>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {attempt.examTitle}
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                Nộp lúc: {new Date(attempt.completedAt).toLocaleString("vi-VN")}
              </p>
            </div>

            {/* Score box */}
            <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 sm:p-5 text-center shrink-0">
              <span className="text-xs font-semibold text-slate-500 block">Điểm số</span>
              <span className="text-4xl sm:text-5xl font-black text-[#ea580c] block mt-0.5">
                {attempt.score.toFixed(1)}
              </span>
              <span className="text-[10px] text-slate-500 block">Thang điểm 10</span>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 text-center text-xs">
            <div className="bg-emerald-50 border border-emerald-200/80 rounded-xl p-3">
              <span className="text-slate-600 font-semibold block">Số câu đúng</span>
              <span className="text-xl font-bold text-emerald-700 mt-0.5 block">
                {attempt.correctAnswersCount} / {attempt.totalQuestions}
              </span>
            </div>
            <div className="bg-rose-50 border border-rose-200/80 rounded-xl p-3">
              <span className="text-slate-600 font-semibold block">Số câu sai</span>
              <span className="text-xl font-bold text-rose-700 mt-0.5 block">
                {attempt.wrongAnswersCount}
              </span>
            </div>
            <div className="bg-slate-100 border border-slate-200 rounded-xl p-3">
              <span className="text-slate-600 font-semibold block">Chưa làm</span>
              <span className="text-xl font-bold text-slate-700 mt-0.5 block">
                {attempt.unansweredCount}
              </span>
            </div>
            <div className="bg-blue-50 border border-blue-200/80 rounded-xl p-3">
              <span className="text-slate-600 font-semibold block">Thời gian làm bài</span>
              <span className="text-base font-bold text-blue-900 mt-1 block">
                {Math.floor(attempt.timeSpentSeconds / 60)} phút {attempt.timeSpentSeconds % 60} giây
              </span>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-indigo-600" />
            <span>Rà soát chi tiết từng câu hỏi ({filteredReviews.length})</span>
          </h2>

          <div className="flex items-center gap-1.5 bg-white border border-slate-200 p-1 rounded-xl text-xs">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                filter === "all" ? "bg-slate-800 text-white" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Tất cả ({attempt.totalQuestions})
            </button>
            <button
              onClick={() => setFilter("correct")}
              className={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                filter === "correct" ? "bg-[#16a34a] text-white" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Đúng ({attempt.correctAnswersCount})
            </button>
            <button
              onClick={() => setFilter("wrong")}
              className={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                filter === "wrong" ? "bg-rose-600 text-white" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Sai ({attempt.wrongAnswersCount})
            </button>
            <button
              onClick={() => setFilter("unanswered")}
              className={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                filter === "unanswered" ? "bg-slate-400 text-white" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Chưa làm ({attempt.unansweredCount})
            </button>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-4">
          {filteredReviews.map((rev) => {
            const isCorrect = rev.isCorrect;
            const isUnanswered = rev.selectedOption === null;

            return (
              <div
                key={rev.questionId}
                className={`bg-white rounded-2xl border p-5 sm:p-6 shadow-xs transition-all ${
                  isCorrect
                    ? "border-emerald-300"
                    : isUnanswered
                    ? "border-slate-200"
                    : "border-rose-300"
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between gap-3 mb-3 pb-2.5 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <span className="text-base sm:text-lg font-black text-slate-900">
                      Câu {rev.questionIndex + 1}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-md text-xs font-bold ${
                        isCorrect
                          ? "bg-emerald-100 text-emerald-800"
                          : isUnanswered
                          ? "bg-slate-100 text-slate-600"
                          : "bg-rose-100 text-rose-800"
                      }`}
                    >
                      {isCorrect ? "✓ Chính xác" : isUnanswered ? "— Chưa làm" : "✗ Chưa đúng"}
                    </span>
                  </div>

                  <div className="text-xs text-slate-500 font-medium">
                    <span>
                      Bạn chọn:{" "}
                      <strong className={isCorrect ? "text-emerald-700" : "text-rose-700"}>
                        {rev.selectedOption || "Trống"}
                      </strong>
                    </span>
                    <span className="mx-2">•</span>
                    <span>
                      Đáp án đúng: <strong className="text-emerald-700">{rev.correctOption}</strong>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <p className="text-slate-800 text-base sm:text-lg font-medium leading-relaxed mb-4">
                  <FormattedText text={rev.questionText} />
                </p>

                {/* Options List */}
                <div className="space-y-2 mb-4">
                  {rev.options.map((opt) => {
                    const isKey = rev.correctOption === opt.id;
                    const isSelected = rev.selectedOption === opt.id;

                    let optStyle = "bg-slate-50 border-slate-200 text-slate-600";
                    if (isKey) {
                      optStyle = "bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-1 ring-emerald-500";
                    } else if (isSelected && !isKey) {
                      optStyle = "bg-rose-50 border-rose-400 text-rose-950 line-through opacity-80";
                    }

                    return (
                      <div
                        key={opt.id}
                        className={`p-3 sm:p-3.5 rounded-xl border text-sm sm:text-base flex items-start gap-3 ${optStyle}`}
                      >
                        <span
                          className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold shrink-0 ${
                            isKey
                              ? "bg-emerald-600 text-white"
                              : isSelected
                              ? "bg-rose-500 text-white"
                              : "bg-slate-200 text-slate-600"
                          }`}
                        >
                          {opt.id}
                        </span>
                        <span className="leading-snug pt-0.5">{opt.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Pedagogical Explanation Box */}
                {rev.explanation && (
                  <div className="p-4 sm:p-5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-slate-800 text-sm leading-relaxed">
                    <div className="flex items-center gap-1.5 text-amber-900 font-bold mb-1.5 text-xs sm:text-sm">
                      <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>💡 Lời giải chi tiết & Phương pháp giải:</span>
                    </div>
                    <div className="whitespace-pre-line text-slate-700 font-medium pl-6">
                      {rev.explanation}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
