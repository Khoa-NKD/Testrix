# 🎓 Testrix — Nền Tảng Luyện Thi Trắc Nghiệm Trực Tuyến

<div align="center">

[![React](https://img.shields.io/badge/React-19.3.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deployment](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Zero-Auth](https://img.shields.io/badge/Auth-Zero--Auth%20(No%20Login)-10B981?style=for-the-badge)](https://github.com/Khoa-NKD/Testrix)

**Kho tài liệu luyện thi & ôn tập Tiếng Anh chất lượng cao dành cho học sinh THPT**  
*Biên soạn & Giảng dạy bởi **Mrs. Hồ Thị Bích Ngọc** — Giáo viên trường THPT Nguyễn Dục, Phú Ninh, Đà Nẵng*

[🌐 Xem Demo Trực Tuyến](#-triển-khai-nhanh-lên-vercel-1-click) • [✨ Tính Năng Nổi Bật](#-tính-năng-nổi-bật) • [🚀 Cài Đặt Nhanh](#-hướng-dẫn-cài-đặt--chạy-dự-án) • [📝 Thêm Đề Thi Mới](#-hướng-dẫn-thêm--quản-lý-đề-thi-mới) • [📞 Liên Hệ](#-thông-tin-liên-hệ--giáo-viên-phụ-trách)

---

</div>

## 📌 Giới Thiệu Dự Án

**Testrix** là giải pháp phần mềm luyện thi và đánh giá năng lực trắc nghiệm trực tuyến thế hệ mới, được tối ưu hóa đặc biệt theo chương trình GDPT môn Tiếng Anh và quy chuẩn cấu trúc đề thi của Bộ Giáo dục & Đào tạo.

Được xây dựng với triết lý **Zero-Auth (Không cần đăng nhập / Không cần tạo tài khoản)**, học sinh chỉ cần truy cập vào đường link do giáo viên gửi là có thể lập tức bắt đầu làm bài, tự động lưu tiến độ, tra cứu đáp án và xem lời giải phân tích chi tiết.

---

## ✨ Tính Năng Nổi Bật

### 1. 📋 Phòng Thi Chuẩn Cấu Trúc Bộ GD&ĐT (Split-View Layout)
- **Chia phần thi rõ ràng**: Đề thi tự động phân nhóm logic theo từng chuyên đề:
  - `I. TRỌNG ÂM (STRESS)`
  - `II. TỪ VỰNG & NGỮ PHÁP (VOCABULARY AND GRAMMAR)`
  - `III. ĐỌC HIỂU & ĐỌC ĐIỀN TỪ (READING PASSAGES)`
  - `IV. VIẾT & SẮP XẾP CÂU (SENTENCE TRANSFORMATION)`
- **Huy hiệu dải câu tự động**: Hiển thị rõ số lượng câu cho mỗi phần (ví dụ: `Câu 1 - Câu 5 (5 câu)`, `Câu 6 - Câu 21 (16 câu)`).
- **Hộp bài đọc chuyên biệt**: Bài đọc hiểu hiển thị trang nhã trên khung giấy cổ điển, cuộn độc lập bên cạnh câu hỏi, giúp học sinh không phải lật trang tìm kiếm nội dung đoạn văn.

### 2. 🎯 Phiếu Trả Lời Trắc Nghiệm Thông Minh (Smart Answer Sheet)
- **Đếm tiến độ thời gian thực**: Theo dõi số câu đã hoàn thành trên tổng số câu của từng phần (ví dụ: `4/5`, `12/16`).
- **Điều hướng mượt mà (Smooth-Scroll)**: Nhấp vào số câu bất kỳ trên phiếu trả lời để màn hình cuộn mượt đến ngay vị trí câu hỏi tương ứng.
- **Đánh dấu câu hỏi cần xem lại**: Cờ tím (🟣 Purple Flag) giúp học sinh đánh dấu những câu đang phân vân để rà soát trước khi nộp.
- **Màu sắc trạng thái trực quan**:
  - 🟢 **Xanh lục**: Đã trả lời.
  - 🟣 **Tím**: Đã đánh dấu cần xem lại.
  - ⚪ **Trắng/Xám**: Chưa chọn đáp án.

### 3. 💡 Chấm Điểm Chuẩn Xác & Lời Giải Phân Tích Sư Phạm
- Chấm điểm ngay lập tức sau khi nộp bài theo thang điểm 10 chuẩn.
- Thống kê tỷ lệ chính xác, số câu đúng, câu sai, câu bỏ sót và tổng thời gian làm bài.
- Hộp thoại **"💡 Lời giải chi tiết & Phương pháp giải"**: Giải thích rõ tại sao chọn đáp án đó, cung cấp từ vựng, ngữ pháp và cấu trúc câu liên quan.
- **Bộ lọc linh hoạt khi xem lại**: Tất cả, Chỉ xem câu đúng, Chỉ xem câu sai, Chỉ xem câu chưa làm.

### 4. 🔒 Zero-Auth & Lưu Trữ Cục Bộ (Privacy & Zero Barrier)
- Không bắt buộc học sinh phải đăng nhập hay đăng ký tài khoản.
- **Tự động lưu nháp (Auto-Save)**: Tránh trường hợp rớt mạng, vô tình đóng trình duyệt hay bấm F5 tải lại trang.
- **Trang Lịch Sử (History Page)**: Lưu giữ đầy đủ kết quả các lần thi trước để học sinh tự đánh giá sự tiến bộ của mình.

### 5. 📱 Thiết Kế Đáp Ứng Đa Nền Tảng (Fully Responsive)
- Trải nghiệm mượt mà trên cả máy tính để bàn (Desktop), máy tính bảng (iPad/Tablet) và điện thoại di động (Smartphone) với Bottom Drawer vuốt mở phiếu trả lời tiện dụng.

---

## 🛠️ Kiến Trúc Kỹ Thuật (Tech Stack)

| Hạng mục | Công nghệ sử dụng | Mục đích |
| :--- | :--- | :--- |
| **Giao diện (Frontend)** | [React 19](https://react.dev/) + [TypeScript 5](https://www.typescriptlang.org/) | Xây dựng Single Page App hiện đại, Type-safe tuyệt đối |
| **Bộ biên dịch (Bundler)** | [Vite 8](https://vitejs.dev/) | Tốc độ khởi động siêu tốc, HMR tức thì, build < 350ms |
| **Định tuyến (Routing)** | [React Router v7](https://reactrouter.com/) | Quản lý điều hướng SPA linh hoạt |
| **Giao diện & CSS** | [TailwindCSS v4](https://tailwindcss.com/) | Utility-first CSS, tối ưu dung lượng CSS còn ~51 kB |
| **Biểu tượng (Icons)** | [Lucide React](https://lucide.dev/) | Bộ icon vector sắc nét, đồng bộ |
| **Hiệu ứng & Âm thanh** | `canvas-confetti` + Web Audio API | Tạo cảm giác hào hứng khi học sinh hoàn thành bài thi |
| **Tầng lưu trữ dữ liệu** | HTML5 `localStorage` | Lưu trữ client-side nhanh, an toàn, không tốn chi phí database |
| **Nền tảng triển khai** | [Vercel](https://vercel.com/) | Lưu trữ đám mây CDN toàn cầu, tự động build từ Git |

---

## 📂 Cấu Trúc Thư Mục Dự Án

```bash
Testrix/
├── public/                      # Static assets, Favicon, robots.txt, _redirects
├── src/
│   ├── components/
│   │   ├── common/              # Navbar, Footer, GradeTabs dùng chung toàn app
│   │   └── exam/                # AnswerSheet, ExamHeader, ExamQuestionItem,
│   │                            # ExamSectionView, ResultModal, SubmitConfirmModal
│   ├── data/
│   │   ├── examRepository.ts    # Service truy xuất & xử lý dữ liệu ngân hàng đề
│   │   └── exams.json           # File JSON lưu trữ dữ liệu các bộ đề thi
│   ├── lib/
│   │   ├── exam-section-helper.ts # Phân tích logic dải câu và nhóm phần thi tự động
│   │   ├── local-storage.ts     # Tầng quản lý lưu nháp & lịch sử thi cử
│   │   └── sound.ts             # Bộ tạo âm thanh thông báo Web Audio API
│   ├── pages/
│   │   ├── HomePage.tsx         # Trang chủ giới thiệu & danh sách đề thi
│   │   ├── ExamPage.tsx         # Phòng thi trực tuyến chia 2 cột chuẩn
│   │   ├── ReviewPage.tsx       # Trang xem lại chi tiết kết quả & lời giải bài thi
│   │   └── HistoryPage.tsx      # Bảng thống kê lịch sử điểm số của học sinh
│   ├── types/
│   │   └── exam.ts              # Hệ thống kiểu dữ liệu TypeScript chuẩn hóa
│   ├── App.tsx                  # Khởi tạo định tuyến (Router Provider)
│   ├── main.tsx                 # Điểm gắn ứng dụng React vào DOM
│   └── index.css                # CSS Variables & Tailwind Tokens
├── scripts/
│   ├── generate_sample_exam.js  # Script tự động trích xuất đề Word sang exams.json
│   └── lib/                     # Các module bổ trợ đọc định dạng file .docx
├── Exam/                        # Thư mục chứa các file đề thi gốc (Word .docx)
├── index.html                   # Entry point HTML & thẻ Meta SEO
├── vercel.json                  # Cấu hình Vercel rewrite cho Single Page Application
├── vite.config.ts               # Cấu hình Vite & Path Alias (@/*)
├── tsconfig.json                # Cấu hình TypeScript Strict Mode
└── package.json                 # Khai báo thư viện & các lệnh script thực thi
```

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Dự Án

### 1. Yêu cầu hệ thống
- Đã cài đặt **Node.js** phiên bản 18 trở lên (Khuyến nghị Node.js LTS 20+).
- Trình quản lý gói `npm` (hoặc `yarn`, `pnpm`).

### 2. Các bước cài đặt
```bash
# 1. Clone repository về máy tính
git clone https://github.com/Khoa-NKD/Testrix.git

# 2. Di chuyển vào thư mục dự án
cd Testrix

# 3. Cài đặt các gói thư viện
npm install
```

### 3. Khởi chạy môi trường phát triển (Development)
```bash
npm run dev
```
Mở trình duyệt và truy cập vào đường dẫn: **`http://localhost:3000`**

### 4. Đóng gói mã nguồn (Production Build)
```bash
npm run build
```
Để chạy thử bản build sau khi đóng gói:
```bash
npm run preview
```

---

## ☁️ Triển Khai Nhanh Lên Vercel (1-Click)

Dự án đã được cấu hình tối ưu sẵn sàng triển khai trên Vercel:

1. Đăng nhập vào [Vercel](https://vercel.com/) và chọn **"Add New..." ➔ "Project"**.
2. Chọn kho lưu trữ **`Khoa-NKD/Testrix`** từ GitHub và nhấn **Import**.
3. **Cài đặt triển khai (Build and Output Settings)**:
   - **Framework Preset**: Chọn **Vite**.
   - **Build and Output Settings**: **GIỮ NGUYÊN TẮT (KHÔNG CẦN BẬT)** các công tắc gạt vì Vercel đã tự động nhận diện chính xác:
     - *Build Command*: `npm run build`
     - *Output Directory*: `dist`
     - *Install Command*: `npm install`
4. Nhấn nút **Deploy**. Chỉ sau khoảng 30 - 45 giây, website của bạn sẽ hoạt động chính thức với đường link công khai (ví dụ: `https://testrix.vercel.app`).
5. Bạn có thể gắn tên miền tùy chỉnh riêng (Custom Domain) trong phần **Settings ➔ Domains**.

---

## 📝 Hướng Dẫn Thêm & Quản Lý Đề Thi Mới

Khi muốn thêm đề thi mới cho học sinh:

### Cách 1: Thêm trực tiếp vào `src/data/exams.json`
Mỗi đề thi là một object trong mảng `exams` với cấu trúc chuẩn:
```json
{
  "id": "de-thi-giua-ky-2-lop-12",
  "title": "Đề kiểm tra Giữa học kỳ 2 - Môn Tiếng Anh 12",
  "description": "Đề thi thử 50 câu chuẩn format Bộ Giáo dục & Đào tạo...",
  "durationMinutes": 50,
  "totalQuestions": 50,
  "sections": [
    {
      "id": "sec-1",
      "title": "I. TRỌNG ÂM (STRESS)",
      "instruction": "Mark the letter A, B, C, or D...",
      "questionIndices": [1, 2, 3, 4, 5]
    }
  ],
  "questions": [
    {
      "index": 1,
      "text": "Mark the letter A, B, C, or D to indicate the word whose stress...",
      "options": ["A. economic", "B. historic", "C. electronic", "D. scientific"],
      "correctAnswer": "B",
      "explanation": "historic trọng âm rơi vào âm tiết thứ 2, các từ còn lại rơi vào âm tiết thứ 3."
    }
  ]
}
```

### Cách 2: Trích xuất từ file Word (.docx)
1. Thêm file `.docx` vào thư mục `Exam/`.
2. Chạy kịch bản phân tích:
   ```bash
   node scripts/generate_sample_exam.js
   ```
3. Đẩy thay đổi lên GitHub:
   ```bash
   git add .
   git commit -m "feat: add new exam for grade 12"
   git push origin main
   ```
   *Vercel sẽ tự động phát hiện và cập nhật đề mới lên trang web trong vòng 1 phút!*

---

## 📞 Thông Tin Liên Hệ & Giáo Viên Phụ Trách

Mọi thắc mắc về nội dung bài giảng, đề thi hoặc đăng ký khóa học Tiếng Anh xin vui lòng liên hệ:

- **Giáo viên phụ trách:** **Mrs. Hồ Thị Bích Ngọc**
- **Đơn vị công tác:** Giáo viên trường THPT Nguyễn Dục, Phú Ninh, Đà Nẵng
- **Địa chỉ lớp học:** 54 Điện Biên Phủ, TP. Tam Kỳ, Tỉnh Quảng Nam
- **Hotline / Zalo:** [0984 562 696](tel:0984562696)
- **Email:** `bichngocthpt@gmail.com`

---

<div align="center">

**© 2026 Testrix.vn — Bản quyền thuộc về Lớp Tiếng Anh Mrs. Ngọc.**  
*Xây dựng với tâm huyết vì sự tiến bộ của các thế hệ học sinh Việt Nam.*

</div>
