import React from "react";
import { ExamSection } from "@/types/exam";
import { BookOpen } from "lucide-react";

interface ExamSectionViewProps {
  section: ExamSection;
  rangeText?: string;
}

export default function ExamSectionView({ section, rangeText }: ExamSectionViewProps) {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-xs mb-3">
      {/* Section Title & Question Range Tag */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-5 rounded-full bg-indigo-600 shrink-0"></span>
          <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
            {section.title}
          </h2>
        </div>
        {rangeText && (
          <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-indigo-50 text-indigo-700 border border-indigo-200/70 shrink-0">
            {rangeText}
          </span>
        )}
      </div>

      {/* Instruction */}
      {section.instruction && (
        <p className="text-xs sm:text-sm font-semibold text-slate-700 italic bg-slate-50 p-3 rounded-xl border border-slate-200/60 leading-relaxed">
          {section.instruction}
        </p>
      )}

      {/* Stimulus / Reading Passage */}
      {section.passage && (
        <div className="p-4 sm:p-5 rounded-xl bg-[#fdfbf7] border border-amber-200/60 shadow-inner my-3">
          {section.passageTitle && (
            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-amber-200/60">
              <BookOpen className="w-4 h-4 text-amber-700" />
              <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wide">
                {section.passageTitle}
              </h3>
            </div>
          )}
          <div className="text-slate-800 text-sm sm:text-base leading-relaxed whitespace-pre-line font-serif">
            {section.passage}
          </div>
        </div>
      )}
    </div>
  );
}
