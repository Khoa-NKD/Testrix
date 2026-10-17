# Testrix 🚀
> **Nền tảng Luyện thi Trắc nghiệm Trực tuyến Tiếng Anh & Các Môn Học**
> **Kho tài liệu ôn tập dành cho học sinh của Mrs. Ngọc (Hồ Thị Bích Ngọc) — Giáo viên trường THPT Nguyễn Dục, Phú Ninh, Đà Nẵng**
> **Hotline / Zalo:** 0984 562 696 • **Địa chỉ:** 54 Điện Biên Phủ, TP. Tam Kỳ, Quảng Nam

Testrix là nền tảng thi thử và ôn luyện trắc nghiệm trực tuyến chất lượng cao, tối ưu hóa giao diện và trải nghiệm (UI/UX) cho học sinh THPT và giáo viên. Hệ thống hoạt động theo mô hình **Zero-Auth (Không cần tài khoản)**, lưu trữ tiến độ và lịch sử làm bài tức thì ngay trên trình duyệt của người dùng.

---

## 🌟 Tính Năng Nổi Bật

1. **Phòng Thi Thử Chuẩn Bố Cục Bộ GD&ĐT (Split Layout):**
   - Bố cục 2 cột tiêu chuẩn: Cột trái hiển thị đề thi chia theo từng phần rõ ràng (`I. TRỌNG ÂM`, `II. TỪ VỰNG & NGỮ PHÁP`, `III. ĐỌC HIỂU`, `IV. VIẾT CÂU...`).
   - Tự động hiển thị huy hiệu dải câu hỏi (ví dụ: `Câu 1 - Câu 5 (5 câu)`, `Câu 6 - Câu 21 (16 câu)`).
   - Bài đọc hiểu (Reading Comprehension) hiển thị trang nhã trên nền giấy cổ điển dễ đọc.
2. **Phiếu Trả Lời Trắc Nghiệm Tinh Gọn (Answer Sheet):**
   - Chia nhóm câu hỏi theo từng phần kèm tiến độ làm bài thời gian thực (`1/5`, `0/16`...).
   - Nhấp vào số câu hỏi trên phiếu trả lời để cuộn mượt (smooth-scroll) chính xác đến câu hỏi đó.
   - Trạng thái trực quan: 🟢 Đã làm, ⚪ Chưa làm, 🟣 Cần xem lại (đánh dấu câu hỏi khó).
   - Chiều cao được tối ưu công thái học, nút **NỘP BÀI** màu cam nổi bật luôn trong tầm mắt.
3. **Chấm Điểm & Phân Tích Kết Quả Tức Thì:**
   - Chấm điểm chuẩn thang 10, thống kê số câu đúng, câu sai, câu chưa làm và thời gian làm bài.
   - Hộp thoại **"💡 Lời giải chi tiết & Phương pháp giải"** phân tích sư phạm cặn kẽ cho từng câu.
   - Bộ lọc xem lại chi tiết: Tất cả, Câu đúng, Câu sai, Chưa làm.
4. **Lưu Trữ Tự Động & Lịch Sử Làm Bài (Zero-Auth):**
   - Tự động lưu bản nháp đang làm bài: Không sợ mất bài thi khi lỡ tải lại trang.
   - Trang Lịch sử thống kê toàn bộ các bài thi đã hoàn thành trên máy tính cá nhân.
   - Hỗ trợ làm lại bài thi bất cứ lúc nào.

---

## 🛠️ Kiến Trúc Kỹ Thuật (Tech Stack)

- **Frontend Core:** React 19 + TypeScript (Strict Mode)
- **Bundler & Dev Server:** Vite 8 (Hot Module Replacement, Build siêu tốc < 300ms)
- **Routing:** React Router v7
- **Styling:** TailwindCSS v4 + Custom Modern Tokens
- **Icons:** Lucide React
- **Hiệu ứng:** Canvas-confetti, Web Audio API
- **Lưu trữ:** HTML5 LocalStorage Persistence Layer

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Dự Án

### 1. Cài đặt thư viện:
```bash
npm install
```

### 2. Chạy môi trường phát triển (Dev Server):
```bash
npm run dev
```
Truy cập ứng dụng tại: `http://localhost:3000`

### 3. Đóng gói sản phẩm (Production Build):
```bash
npm run build
```
Xem trước bản build:
```bash
npm run preview
```

---

## 📂 Cấu Trúc Thư Mục Chuẩn Clean Architecture

```
Testrix/
├── public/                      # Static assets & Favicon
├── src/
│   ├── components/
│   │   ├── common/              # Navbar, Footer, GradeTabs dùng chung
│   │   └── exam/                # AnswerSheet, ExamHeader, ExamQuestionItem,
│   │                            # ExamSectionView, ResultModal, SubmitConfirmModal
│   ├── data/
│   │   ├── examRepository.ts    # Repository truy xuất dữ liệu đề thi
│   │   └── exams.json           # Ngân hàng đề thi chuẩn cấu trúc
│   ├── lib/
│   │   ├── exam-section-helper.ts # Bộ phân tích & giải mã phần thi tự động
│   │   ├── local-storage.ts     # Tầng lưu trữ nháp & kết quả bài thi
│   │   └── sound.ts             # Âm thanh tương tác Web Audio API
│   ├── pages/
│   │   ├── HomePage.tsx         # Trang chủ & thông tin PR Mrs. Ngọc
│   │   ├── ExamPage.tsx         # Phòng thi trực tuyến 2 cột
│   │   ├── ReviewPage.tsx       # Trang xem lại chi tiết đáp án & lời giải
│   │   └── HistoryPage.tsx      # Nhật ký và lịch sử làm bài thi
│   ├── types/
│   │   └── exam.ts              # Định nghĩa Typescript toàn hệ thống
│   ├── App.tsx                  # Client router chính
│   ├── main.tsx                 # Điểm khởi tạo ứng dụng React
│   └── index.css                # CSS Variables & Tailwind Tokens
├── scripts/                     # Tooling & script xử lý đề thi
├── Exam/                        # Thư mục đề thi mẫu Word (.docx)
├── index.html                   # HTML Entry & SEO Meta Tags
├── vite.config.ts               # Cấu hình Vite & Path Aliases (@/*)
└── tsconfig.json                # Cấu hình TypeScript Strict
```

---

## 📞 Thông Tin Liên Hệ & Đơn Vị Phát Triển

- **Giáo viên phụ trách:** Mrs. Hồ Thị Bích Ngọc — Giáo viên trường THPT Nguyễn Dục, Phú Ninh, Đà Nẵng
- **Địa chỉ lớp học:** 54 Điện Biên Phủ, TP. Tam Kỳ, Quảng Nam
- **Hotline / Zalo:** 0984 562 696
- **Bản quyền:** © 2026 Testrix.vn — Lớp Tiếng Anh Mrs. Ngọc.
