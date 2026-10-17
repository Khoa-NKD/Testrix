import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getLocalAttempts } from "@/lib/local-storage";
import { QuizAttempt } from "@/types/exam";
import Navbar from "@/components/common/Navbar";
import GradeTabs from "@/components/common/GradeTabs";
import Footer from "@/components/common/Footer";
import {
  History,
  Trophy,
  Clock,
  BookOpen,
  ArrowRight,
  RotateCcw,
  Trash2,
  Calendar,
} from "lucide-react";

export default function HistoryPage() {
  const [attempts, setAttempts] = useState<QuizAttempt[]>([]);

  useEffect(() => {
    setAttempts(getLocalAttempts());
  }, []);

  const totalAttempts = attempts.length;
  const averageScore =
    totalAttempts > 0
      ? (attempts.reduce((acc, curr) => acc + curr.score, 0) / totalAttempts).toFixed(1)
      : "0.0";

  const totalTimeMinutes =
    totalAttempts > 0
      ? Math.round(attempts.reduce((acc, curr) => acc + curr.timeSpentSeconds, 0) / 60)
      : 0;

  const handleClearHistory = () => {
    if (window.confirm("Bạn có chắc chắn muốn xóa toàn bộ lịch sử làm bài trên thiết bị này?")) {
      localStorage.removeItem("testrix_local_attempts");
      setAttempts([]);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col text-slate-800">
      <Navbar />
      <GradeTabs />

      <main className="max-w-5xl mx-auto w-full px-4 sm:px-6 py-8 flex-1 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
              <History className="w-7 h-7 text-indigo-600" />
              <span>Lịch Sử Bài Thi Trên Máy Này</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Dữ liệu được lưu trữ trực tiếp trên trình duyệt của bạn (Zero-Auth, không cần tài khoản)
            </p>
          </div>

          {totalAttempts > 0 && (
            <button
              onClick={handleClearHistory}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-rose-200 text-rose-600 hover:bg-rose-50 text-xs font-semibold self-start sm:self-auto cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" /> Xóa toàn bộ lịch sử
            </button>
          )}
        </div>

        {/* Stats Summary Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-semibold block">Tổng số bài đã làm</span>
              <span className="text-2xl font-black text-slate-900">{totalAttempts} bài</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-semibold block">Điểm số trung bình</span>
              <span className="text-2xl font-black text-[#ea580c]">{averageScore} / 10</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-semibold block">Tổng thời gian ôn luyện</span>
              <span className="text-2xl font-black text-blue-900">{totalTimeMinutes} phút</span>
            </div>
          </div>
        </div>

        {/* Attempts List */}
        {totalAttempts > 0 ? (
          <div className="space-y-4">
            {attempts.map((att) => (
              <div
                key={att.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs hover:border-slate-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-200/60">
                      {att.subject}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(att.completedAt).toLocaleString("vi-VN")}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {att.examTitle}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                    <span>
                      Đúng: <strong className="text-emerald-600">{att.correctAnswersCount}</strong> / {att.totalQuestions} câu
                    </span>
                    <span>
                      Thời gian: <strong>{Math.floor(att.timeSpentSeconds / 60)} phút {att.timeSpentSeconds % 60} giây</strong>
                    </span>
                  </div>
                </div>

                {/* Score & Buttons */}
                <div className="flex items-center gap-4 self-end sm:self-auto shrink-0">
                  <div className="text-right">
                    <span className="text-2xl sm:text-3xl font-black text-[#ea580c] block">
                      {att.score.toFixed(1)}
                    </span>
                    <span className="text-[10px] text-slate-400 block -mt-1">Thang 10</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      to={`/review/${att.id}`}
                      className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs sm:text-sm transition-colors flex items-center gap-1.5"
                    >
                      <span>Xem lại</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      to={`/exam/${att.examId}`}
                      className="p-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 transition-colors"
                      title="Thi lại đề này"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto">
            <History className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="font-bold text-slate-900 text-base mb-1">Chưa có bài thi nào</h3>
            <p className="text-xs text-slate-500 mb-5">
              Bạn chưa hoàn thành bài thi thử nào trên thiết bị này. Hãy chọn một đề thi để bắt đầu làm bài nhé!
            </p>
            <Link
              to="/"
              className="py-2.5 px-5 rounded-xl bg-[#ea580c] text-white font-bold text-xs sm:text-sm shadow-md inline-block"
            >
              Xem Kho Đề Thi Ngay
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
