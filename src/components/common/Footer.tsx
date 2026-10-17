import React from "react";
import { Phone, MapPin, GraduationCap, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 pt-10 pb-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-800">
          {/* Column 1: Teacher & Slogan */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#ea580c] flex items-center justify-center text-white font-bold text-sm">
                MN
              </div>
              <h3 className="font-extrabold text-base sm:text-lg text-white tracking-tight">
                LỚP TIẾNG ANH MRS. NGỌC (HỒ THỊ BÍCH NGỌC)
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              Kho tài liệu luyện thi và ôn tập Tiếng Anh dành cho học sinh của Mrs. Ngọc (Hồ Thị Bích Ngọc) — Đồng hành cùng các em học sinh bứt phá điểm số trong các kỳ thi THPT Quốc gia, thi học kỳ và các kỳ thi học sinh giỏi.
            </p>
            <div className="text-xs text-amber-400 font-semibold pt-1">
              ⭐ Nền tảng thi thử trực tuyến độc quyền • Cấu trúc chuẩn Bộ GD&ĐT • Lưu bài làm tự động.
            </div>
          </div>

          {/* Column 2: Direct Contact & Address */}
          <div className="md:col-span-6 space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Thông tin Liên hệ & Địa chỉ Lớp học
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2.5">
                <GraduationCap className="w-4 h-4 text-[#ea580c] shrink-0" />
                <span>
                  <strong>Giáo viên:</strong> Mrs. Hồ Thị Bích Ngọc — Giáo viên trường THPT Nguyễn Dục, Phú Ninh, Đà Nẵng
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
                <span>
                  <strong>Địa chỉ lớp học:</strong> 54 Điện Biên Phủ, TP. Tam Kỳ, Tỉnh Quảng Nam
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#ea580c] shrink-0" />
                <span>
                  <strong>Điện thoại / Zalo tư vấn:</strong>{" "}
                  <a href="tel:0984562696" className="text-amber-400 font-bold hover:underline">
                    0984 562 696
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <GraduationCap className="w-4 h-4 text-[#ea580c] shrink-0" />
                <span>
                  <strong>Chương trình:</strong> Luyện thi THPT Quốc gia khối 10 - 11 - 12, Ngữ pháp chuyên sâu & Luyện đề chuẩn.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center sm:text-left">
          <p>
            © 2026 Lớp Tiếng Anh Mrs. Ngọc (Hồ Thị Bích Ngọc) • 54 Điện Biên Phủ, Tam Kỳ, Quảng Nam.
          </p>
          <p className="font-semibold text-slate-300">
            Hotline đăng ký học:{" "}
            <a href="tel:0984562696" className="text-amber-400 hover:underline">
              0984 562 696
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
