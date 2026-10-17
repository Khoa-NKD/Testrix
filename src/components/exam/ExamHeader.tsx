import React from "react";
import { Clock, BookOpen, ChevronLeft, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface ExamHeaderProps {
  title: string;
  subject: string;
  grade?: string;
  durationMinutes: number;
  totalQuestions: number;
}

export default function ExamHeader({
  title,
  subject,
  grade,
  durationMinutes,
  totalQuestions,
}: ExamHeaderProps) {
  return (
    <div className="w-full bg-white border-b border-slate-200/80 shadow-xs mb-4">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Left actions */}
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-[#ea580c] transition-colors p-1.5 rounded-lg hover:bg-slate-100"
            title="Quay lại danh sách đề thi"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Danh sách đề</span>
          </Link>
          <span className="text-slate-300">|</span>
          <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200">
            {subject}
          </span>
          {grade && (
            <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-semibold">
              {grade}
            </span>
          )}
        </div>

        {/* Big Orange Center Title + Mrs. Ngoc Brand subtitle */}
        <div className="text-center flex-1 px-2">
          <h1 className="text-base sm:text-lg md:text-xl font-black text-[#d97706] tracking-tight uppercase leading-snug">
            {title}
          </h1>
          <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
            Lớp Tiếng Anh <strong>Mrs. Ngọc (Hồ Thị Bích Ngọc)</strong> — GV trường THPT Nguyễn Dục, Phú Ninh, Đà Nẵng • Hotline:{" "}
            <a href="tel:0984562696" className="font-bold text-amber-700 hover:underline">
              0984 562 696
            </a>{" "}
            • 54 Điện Biên Phủ, Tam Kỳ
          </p>
        </div>

        {/* Right meta */}
        <div className="hidden lg:flex items-center gap-3 text-xs text-slate-500 font-medium shrink-0">
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" /> {durationMinutes} phút
          </span>
          <span className="inline-flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5 text-slate-400" /> {totalQuestions} câu hỏi
          </span>
        </div>
      </div>
    </div>
  );
}
