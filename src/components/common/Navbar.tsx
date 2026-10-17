import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BookOpen, History, GraduationCap, Phone, MapPin, Sparkles } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isHistory = location.pathname === "/history";

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
      {/* Top PR Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white text-[11px] sm:text-xs py-1.5 px-4 font-semibold">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <Sparkles className="w-3.5 h-3.5 text-amber-200 shrink-0" />
            <span>
              Lớp Tiếng Anh <strong>Mrs. Ngọc (Hồ Thị Bích Ngọc)</strong> — GV trường THPT Nguyễn Dục, Phú Ninh, Đà Nẵng
            </span>
          </div>
          <div className="flex items-center gap-4 text-amber-100 text-[11px]">
            <a
              href="tel:0984562696"
              className="hover:text-white transition-colors flex items-center gap-1 font-bold"
              title="Gọi ngay để tư vấn lớp học"
            >
              <Phone className="w-3 h-3 text-amber-300" />
              <span>0984 562 696</span>
            </a>
            <span className="hidden md:inline text-amber-300">|</span>
            <span className="hidden md:flex items-center gap-1">
              <MapPin className="w-3 h-3 text-amber-300" />
              <span>54 Điện Biên Phủ, Tam Kỳ, Quảng Nam</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#ea580c] to-amber-500 flex items-center justify-center text-white shadow-md shadow-orange-600/20 group-hover:scale-105 transition-transform">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-[#ea580c] transition-colors">
                Testrix<span className="text-[#ea580c]">.vn</span>
              </span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">
                Mrs. Ngọc
              </span>
            </div>
            <span className="text-[11px] font-medium text-slate-500 -mt-0.5 hidden sm:inline">
              GV THPT Nguyễn Dục • 54 Điện Biên Phủ, Tam Kỳ
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-1.5 sm:gap-2">
          <Link
            to="/"
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              isHome
                ? "bg-amber-50 text-[#ea580c] font-bold border border-amber-200"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Kho Đề Thi</span>
          </Link>

          <Link
            to="/history"
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              isHistory
                ? "bg-amber-50 text-[#ea580c] font-bold border border-amber-200"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <History className="w-4 h-4" />
            <span>Lịch Sử Bài Thi</span>
          </Link>

          <a
            href="tel:0984562696"
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 hover:bg-emerald-100 transition-colors ml-1"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span>Hotline: 0984 562 696</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
