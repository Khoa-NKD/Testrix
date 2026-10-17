import React from "react";
import { AlertCircle, CheckCircle2, X } from "lucide-react";

interface SubmitConfirmModalProps {
  isOpen: boolean;
  totalQuestions: number;
  answeredCount: number;
  flaggedCount: number;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function SubmitConfirmModal({
  isOpen,
  totalQuestions,
  answeredCount,
  flaggedCount,
  onCancel,
  onConfirm,
}: SubmitConfirmModalProps) {
  if (!isOpen) return null;

  const unansweredCount = totalQuestions - answeredCount;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-7 relative text-slate-800">
        <button
          onClick={onCancel}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Xác nhận nộp bài thi?
            </h3>
            <p className="text-xs text-slate-500">
              Vui lòng kiểm tra lại trước khi hoàn thành bài thi
            </p>
          </div>
        </div>

        {/* Stats card */}
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 mb-5 space-y-2.5 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-slate-600">Tổng số câu hỏi:</span>
            <span className="font-bold text-slate-900">{totalQuestions} câu</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-600">Số câu đã làm:</span>
            <span className="font-bold text-emerald-600">{answeredCount} câu</span>
          </div>
          {unansweredCount > 0 && (
            <div className="flex items-center justify-between text-rose-600 bg-rose-50 p-2 rounded-lg font-semibold">
              <span>Số câu chưa làm:</span>
              <span>{unansweredCount} câu</span>
            </div>
          )}
          {flaggedCount > 0 && (
            <div className="flex items-center justify-between text-purple-700 bg-purple-50 p-2 rounded-lg font-semibold">
              <span>Số câu cần kiểm tra lại:</span>
              <span>{flaggedCount} câu</span>
            </div>
          )}
        </div>

        <p className="text-xs text-slate-500 mb-6 text-center leading-relaxed">
          {unansweredCount > 0
            ? "Bạn vẫn còn câu chưa chọn đáp án. Bạn có chắc chắn muốn nộp bài ngay bây giờ?"
            : "Bạn đã hoàn thành tất cả các câu hỏi! Bấm xác nhận để nhận bảng điểm và lời giải chi tiết."}
        </p>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 py-3 px-4 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-sm transition-colors cursor-pointer"
          >
            Làm tiếp
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="flex-1 py-3 px-4 rounded-xl bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
          >
            Nộp bài ngay
          </button>
        </div>
      </div>
    </div>
  );
}
