import React from "react";

interface GradeTabsProps {
  activeGrade?: string;
  onSelectGrade?: (grade: string) => void;
}

const GRADES = [
  "Lớp 12",
  "Lớp 11",
  "Lớp 10",
  "Lớp 9",
  "Lớp 8",
  "Lớp 7",
  "Lớp 6",
  "Lớp 5",
  "Lớp 4",
  "Lớp 3",
  "Lớp 2",
  "Lớp 1",
];

export default function GradeTabs({ activeGrade = "Lớp 12", onSelectGrade }: GradeTabsProps) {
  return (
    <div className="w-full bg-[#fdfaf5] border-b border-amber-100/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 overflow-x-auto scrollbar-none py-2 flex items-center justify-start sm:justify-center gap-1 sm:gap-4 text-xs sm:text-sm font-semibold">
        {GRADES.map((grade) => {
          const isActive = activeGrade === grade;
          return (
            <button
              key={grade}
              onClick={() => onSelectGrade?.(grade)}
              className={`px-2.5 py-1 rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                isActive
                  ? "text-blue-700 font-bold underline underline-offset-4 decoration-2 decoration-blue-600 bg-blue-50/60"
                  : "text-blue-900/80 hover:text-blue-700 hover:bg-amber-50/80"
              }`}
            >
              {grade}
            </button>
          );
        })}
      </div>
    </div>
  );
}
