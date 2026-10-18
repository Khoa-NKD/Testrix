import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { getAllExams } from "@/data/examRepository";
import { getLocalAttempts } from "@/lib/local-storage";
import Navbar from "@/components/common/Navbar";
import GradeTabs from "@/components/common/GradeTabs";
import Footer from "@/components/common/Footer";
import {
  Search,
  BookOpen,
  Clock,
  Sparkles,
  Play,
  History,
  Phone,
  MapPin,
  GraduationCap,
  Award,
  CheckCircle2,
} from "lucide-react";

const CATEGORIES = [
  "Tất cả",
  "Ôn theo unit",
  "Ôn giữa kỳ 1",
  "Ôn cuối kỳ 1",
  "Ôn giữa kỳ 2",
  "Ôn cuối kỳ 2",
  "Ôn thi HSG",
  "Ôn thi Olympic",
  "Ôn thi Đại học",
];

export default function HomePage() {
  const [selectedGrade, setSelectedGrade] = useState<string>("Lớp 12");
  const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const exams = useMemo(() => getAllExams(), []);
  const recentAttempts = useMemo(() => getLocalAttempts().slice(0, 5), []);

  const filteredExams = useMemo(() => {
    return exams.filter((exam) => {
      const matchGrade = !selectedGrade || selectedGrade === "Tất cả" || exam.grade === selectedGrade;

      const normCategory = selectedCategory.toLowerCase();
      const matchCategory =
        selectedCategory === "Tất cả" ||
        (exam.categories && exam.categories.some((c) => c.toLowerCase() === normCategory)) ||
        (exam.category && exam.category.toLowerCase() === normCategory) ||
        (exam.tags && exam.tags.some((t) => t.toLowerCase() === normCategory)) ||
        exam.title.toLowerCase().includes(normCategory);

      const q = searchQuery.trim().toLowerCase();
      const matchQuery =
        !q ||
        exam.title.toLowerCase().includes(q) ||
        exam.description.toLowerCase().includes(q) ||
        exam.subject.toLowerCase().includes(q) ||
        (exam.category && exam.category.toLowerCase().includes(q)) ||
        (exam.tags && exam.tags.some((t) => t.toLowerCase().includes(q)));

      return matchGrade && matchCategory && matchQuery;
    });
  }, [exams, selectedGrade, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col text-slate-800">
      <Navbar />
      <GradeTabs activeGrade={selectedGrade} onSelectGrade={setSelectedGrade} />

      {/* Hero Section with Mrs. Ngoc PR & Official Slogan */}
      <section className="bg-gradient-to-b from-white via-amber-50/30 to-[#f8fafc] border-b border-slate-200/80 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 text-amber-900 text-xs font-extrabold border border-amber-300 shadow-xs">
                <GraduationCap className="w-4 h-4 text-amber-700" />
                <span>Mrs. Hồ Thị Bích Ngọc — Giáo viên trường THPT Nguyễn Dục, Phú Ninh, Đà Nẵng</span>
              </div>

              {/* Exact user slogan as the main focus */}
              <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Kho tài liệu luyện thi và ôn tập Tiếng Anh dành cho học sinh của{" "}
                <span className="text-[#ea580c] underline decoration-amber-400 decoration-wavy decoration-2">
                  Mrs. Ngọc
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl">
                Hệ thống thi thử trực tuyến độc quyền: Cấu trúc bám sát đề thi Bộ GD&ĐT, giao diện làm bài 2 cột tiêu chuẩn, chấm điểm tức thì và phân tích cặn kẽ từng câu hỏi giúp học sinh nắm vững ngữ pháp, từ vựng và kỹ năng đọc hiểu.
              </p>

              {/* Contact & Location PR Highlights */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm">
                <a
                  href="tel:0984562696"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold shadow-md shadow-orange-600/20 transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>Hotline: 0984 562 696</span>
                </a>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 font-semibold shadow-xs">
                  <MapPin className="w-4 h-4 text-[#ea580c]" />
                  <span>54 Điện Biên Phủ, Tam Kỳ, Quảng Nam</span>
                </div>
              </div>
            </div>

            {/* Right PR Card: Profile / Class Summary */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-3xl border border-amber-200/90 p-6 shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/60 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-3.5 mb-4 pb-4 border-b border-slate-100">
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-[#ea580c] to-amber-500 text-white flex items-center justify-center font-black text-xl shadow-md">
                    MN
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base">
                      Mrs. Hồ Thị Bích Ngọc
                    </h3>
                    <p className="text-xs font-bold text-[#ea580c] leading-snug">
                      Giáo viên trường THPT Nguyễn Dục, Phú Ninh, Đà Nẵng
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">Lớp học: 54 Điện Biên Phủ, Tam Kỳ</p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Luyện thi THPT Quốc gia 10 - 11 - 12</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Hệ thống đề thi chuẩn cấu trúc & lời giải chi tiết</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Làm bài 1 chạm, tự động lưu lịch sử không cần đăng nhập</span>
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 text-center">
                  <a
                    href="tel:0984562696"
                    className="text-xs font-bold text-indigo-700 hover:text-indigo-900 block"
                  >
                    📞 Liên hệ đăng ký học: 0984.562.696 →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Search & Category Filters */}
          <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col md:flex-row gap-3 items-stretch md:items-center">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm đề thi (VD: Unit 1, Unit 2, Giữa kỳ 1, Đọc hiểu, Trọng âm...)"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#ea580c]/20 focus:border-[#ea580c] bg-white text-sm"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#ea580c] text-white shadow-xs"
                        : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex-1 w-full space-y-10">
        {/* Exam Cards Grid */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                Kho Đề Thi {selectedCategory === "Tất cả" ? "Tiếng Anh & Các Chuyên Đề" : selectedCategory} ({filteredExams.length})
              </h2>
              <p className="text-xs text-slate-500">
                Tài liệu ôn tập chính thức của Lớp Tiếng Anh Mrs. Ngọc • {selectedGrade}
              </p>
            </div>
          </div>

          {filteredExams.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredExams.map((exam) => (
                <div
                  key={exam.id}
                  className="bg-white rounded-2xl border border-slate-200/90 hover:border-amber-400 p-5 sm:p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Badges */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200">
                        {exam.category || exam.subject}
                      </span>
                      {exam.grade && (
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-semibold">
                          {exam.grade}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#ea580c] transition-colors line-clamp-2 leading-snug mb-2">
                      {exam.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed font-normal">
                      {exam.description}
                    </p>
                  </div>

                  {/* Metadata & Actions */}
                  <div className="pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-4 font-medium">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {exam.durationMinutes} phút
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                        {exam.totalQuestions} câu hỏi
                      </span>
                    </div>

                    <Link
                      to={`/exam/${exam.id}`}
                      className="w-full py-3 px-4 rounded-xl bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-sm text-center shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Play className="w-4 h-4 fill-white" />
                      <span>Bắt đầu Làm bài thi</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="font-bold text-slate-800 text-base mb-1">Chưa có đề thi cho chuyên đề này</h3>
              <p className="text-xs text-slate-500 mb-4">
                Chuyên đề này đang được Mrs. Ngọc biên soạn và cập nhật thêm trong các buổi học tới.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("Tất cả");
                  setSelectedGrade("Tất cả");
                  setSearchQuery("");
                }}
                className="py-2 px-4 rounded-xl bg-[#ea580c] text-white font-semibold text-xs shadow-xs hover:bg-[#c2410c] cursor-pointer"
              >
                Xem tất cả đề thi
              </button>
            </div>
          )}
        </section>

        {/* LocalStorage Recent History Section */}
        {recentAttempts.length > 0 && (
          <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <History className="w-5 h-5 text-[#ea580c]" />
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  Lịch sử các bài đã làm trên máy này
                </h2>
              </div>
              <Link
                to="/history"
                className="text-xs font-bold text-[#ea580c] hover:text-[#c2410c]"
              >
                Xem tất cả ({recentAttempts.length}) →
              </Link>
            </div>

            <div className="divide-y divide-slate-100">
              {recentAttempts.map((att) => (
                <div
                  key={att.id}
                  className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{att.examTitle}</h4>
                    <p className="text-xs text-slate-500">
                      Nộp bài: {new Date(att.completedAt).toLocaleString("vi-VN")} • Đúng{" "}
                      <strong className="text-emerald-600">
                        {att.correctAnswersCount}/{att.totalQuestions}
                      </strong>{" "}
                      câu
                    </p>
                  </div>
                  <div className="flex items-center gap-3 self-end sm:self-auto">
                    <span className="text-lg font-black text-[#ea580c] px-3 py-1 rounded-lg bg-amber-50 border border-amber-200">
                      {att.score.toFixed(1)} <span className="text-xs font-normal text-slate-500">/ 10</span>
                    </span>
                    <Link
                      to={`/review/${att.id}`}
                      className="py-1.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
                    >
                      Xem lại
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
