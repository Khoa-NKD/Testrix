import fs from "fs/promises";
import path from "path";
import { Exam, QuizAttempt } from "@/types/exam";

const DATA_DIR = path.join(process.cwd(), "data");
const EXAMS_FILE = path.join(DATA_DIR, "exams.json");
const ATTEMPTS_FILE = path.join(DATA_DIR, "attempts.json");

// Dữ liệu mẫu khởi tạo chất lượng cao
const INITIAL_SAMPLE_EXAMS: Exam[] = [
  {
    id: "exam-toan-thptqg-2026",
    title: "Đề thi thử THPT Quốc Gia 2026 môn Toán - Chuẩn cấu trúc Bộ GD&ĐT",
    description: "Bộ đề ôn tập trọng tâm các chuyên đề: Khảo sát hàm số, Hình học không gian, Mũ - Logarit, Tích phân và Xác suất.",
    subject: "Toán",
    grade: "Lớp 12",
    durationMinutes: 90,
    totalQuestions: 10,
    originalFileName: "De_thi_thu_THPTQG_Toan_2026.docx",
    status: "ready",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ["THPT Quốc Gia", "Toán 12", "Hàm số", "Oxyz"],
    questions: [
      {
        id: "q-toan-1",
        index: 1,
        questionText: "Cho hàm số y = f(x) có bảng biến thiên với f'(x) đổi dấu từ dương sang âm khi qua x = 2. Điểm cực đại của hàm số đã cho là:",
        type: "single_choice",
        options: [
          { id: "A", text: "x = 2" },
          { id: "B", text: "x = -2" },
          { id: "C", text: "y = 2" },
          { id: "D", text: "x = 0" }
        ],
        correctAnswer: "A",
        explanation: "Theo định nghĩa cực trị hàm số: Nếu đạo hàm f'(x) đổi dấu từ dương sang âm khi đi qua điểm x0 thì hàm số đạt cực đại tại x0. Do đó, hàm số đạt cực đại tại x = 2.",
        difficulty: "easy",
        points: 1
      },
      {
        id: "q-toan-2",
        index: 2,
        questionText: "Tập xác định D của hàm số y = log3(2x - 4) là:",
        type: "single_choice",
        options: [
          { id: "A", text: "D = (2; +∞)" },
          { id: "B", text: "D = [2; +∞)" },
          { id: "C", text: "D = (-∞; 2)" },
          { id: "D", text: "D = R \\ {2}" }
        ],
        correctAnswer: "A",
        explanation: "Hàm số loga(u(x)) xác định khi và chỉ khi biểu thức dưới dấu logarit u(x) > 0. Ta có: 2x - 4 > 0 <=> 2x > 4 <=> x > 2. Vậy tập xác định là D = (2; +∞).",
        difficulty: "easy",
        points: 1
      },
      {
        id: "q-toan-3",
        index: 3,
        questionText: "Tính tích phân I = ∫ (từ 0 đến 1) e^(2x) dx:",
        type: "single_choice",
        options: [
          { id: "A", text: "I = (e^2 - 1) / 2" },
          { id: "B", text: "I = e^2 - 1" },
          { id: "C", text: "I = 2(e^2 - 1)" },
          { id: "D", text: "I = (e^2 + 1) / 2" }
        ],
        correctAnswer: "A",
        explanation: "Nguyên hàm của e^(ax) là (1/a)*e^(ax). Do đó: ∫ e^(2x) dx = (1/2)*e^(2x). Thay cận từ 0 đến 1: I = (1/2)*[e^(2*1) - e^(2*0)] = (1/2)*(e^2 - 1) = (e^2 - 1) / 2.",
        difficulty: "medium",
        points: 1
      },
      {
        id: "q-toan-4",
        index: 4,
        questionText: "Trong không gian Oxyz, cho mặt cầu (S): (x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 16. Tọa độ tâm I và bán kính R của mặt cầu là:",
        type: "single_choice",
        options: [
          { id: "A", text: "I(1; -2; 3), R = 4" },
          { id: "B", text: "I(-1; 2; -3), R = 4" },
          { id: "C", text: "I(1; -2; 3), R = 16" },
          { id: "D", text: "I(-1; 2; -3), R = 16" }
        ],
        correctAnswer: "A",
        explanation: "Phương trình mặt cầu dạng tổng quát (x - a)^2 + (y - b)^2 + (z - c)^2 = R^2 có tâm I(a; b; c) và bán kính R. Ở đây a = 1, b = -2, c = 3 và R^2 = 16 => R = 4. Vậy I(1; -2; 3) và R = 4.",
        difficulty: "easy",
        points: 1
      },
      {
        id: "q-toan-5",
        index: 5,
        questionText: "Có bao nhiêu cách chọn 3 học sinh từ một nhóm gồm 10 học sinh để đi làm nhiệm vụ tình nguyện?",
        type: "single_choice",
        options: [
          { id: "A", text: "120" },
          { id: "B", text: "720" },
          { id: "C", text: "30" },
          { id: "D", text: "240" }
        ],
        correctAnswer: "A",
        explanation: "Số cách chọn 3 học sinh từ 10 học sinh (không phân biệt thứ tự nhiệm vụ) là một tổ hợp chập 3 của 10 phần tử: C(10, 3) = 10! / (3! * 7!) = (10 * 9 * 8) / (3 * 2 * 1) = 120 cách.",
        difficulty: "easy",
        points: 1
      },
      {
        id: "q-toan-6",
        index: 6,
        questionText: "Cho hình chóp S.ABC có đáy ABC là tam giác vuông tại B, SA vuông góc với mặt phẳng đáy (ABC). Góc giữa đường thẳng SC và mặt phẳng (ABC) là góc nào?",
        type: "single_choice",
        options: [
          { id: "A", text: "Góc SCA" },
          { id: "B", text: "Góc SCB" },
          { id: "C", text: "Góc SAB" },
          { id: "D", text: "Góc CSA" }
        ],
        correctAnswer: "A",
        explanation: "Vì SA ⊥ (ABC) nên hình chiếu vuông góc của điểm S lên mặt phẳng (ABC) là điểm A. Hình chiếu của điểm C lên (ABC) chính là C. Do đó hình chiếu của đoạn SC lên mặt phẳng (ABC) là đoạn AC. Vậy góc giữa SC và (ABC) là góc SCA.",
        difficulty: "medium",
        points: 1
      },
      {
        id: "q-toan-7",
        index: 7,
        questionText: "Số phức z = 3 - 4i có môđun bằng:",
        type: "single_choice",
        options: [
          { id: "A", text: "5" },
          { id: "B", text: "7" },
          { id: "C", text: "25" },
          { id: "D", text: "1" }
        ],
        correctAnswer: "A",
        explanation: "Môđun của số phức z = a + bi là |z| = √(a^2 + b^2). Với z = 3 - 4i: |z| = √(3^2 + (-4)^2) = √(9 + 16) = √25 = 5.",
        difficulty: "easy",
        points: 1
      },
      {
        id: "q-toan-8",
        index: 8,
        questionText: "Giá trị nhỏ nhất của hàm số f(x) = x^3 - 3x + 2 trên đoạn [0; 2] là:",
        type: "single_choice",
        options: [
          { id: "A", text: "0" },
          { id: "B", text: "2" },
          { id: "C", text: "4" },
          { id: "D", text: "-2" }
        ],
        correctAnswer: "A",
        explanation: "Đạo hàm: f'(x) = 3x^2 - 3. Cho f'(x) = 0 <=> x^2 = 1 <=> x = 1 (thuộc [0; 2]) hoặc x = -1 (loại). Tính các giá trị: f(0) = 2, f(1) = 1 - 3 + 2 = 0, f(2) = 8 - 6 + 2 = 4. Vậy min trên [0; 2] là f(1) = 0.",
        difficulty: "medium",
        points: 1
      },
      {
        id: "q-toan-9",
        index: 9,
        questionText: "Đồ thị hàm số y = (2x + 1) / (x - 1) có đường tiệm cận đứng và tiệm cận ngang lần lượt là:",
        type: "single_choice",
        options: [
          { id: "A", text: "x = 1 và y = 2" },
          { id: "B", text: "x = 2 và y = 1" },
          { id: "C", text: "x = -1 và y = 2" },
          { id: "D", text: "x = 1 và y = -1" }
        ],
        correctAnswer: "A",
        explanation: "Đồ thị hàm phân thức y = (ax + b) / (cx + d) có tiệm cận đứng x = -d/c = 1 và tiệm cận ngang y = a/c = 2/1 = 2.",
        difficulty: "easy",
        points: 1
      },
      {
        id: "q-toan-10",
        index: 10,
        questionText: "Cho một cấp số cộng (un) có u1 = 3 và công sai d = 4. Số hạng thứ 5 của cấp số cộng đó là:",
        type: "single_choice",
        options: [
          { id: "A", text: "19" },
          { id: "B", text: "23" },
          { id: "C", text: "15" },
          { id: "D", text: "12" }
        ],
        correctAnswer: "A",
        explanation: "Công thức số hạng tổng quát của cấp số cộng: un = u1 + (n - 1)*d. Thay n = 5: u5 = 3 + (5 - 1)*4 = 3 + 16 = 19.",
        difficulty: "easy",
        points: 1
      }
    ]
  },
  {
    id: "exam-ly-12-dao-dong-co",
    title: "Đề chuyên đề Vật Lý 12 - Dao động cơ & Sóng cơ học",
    description: "Tuyển chọn các câu hỏi lý thuyết và bài tập trọng điểm về Con lắc lò xo, Con lắc đơn, Sóng dừng và Giao thoa sóng.",
    subject: "Vật Lý",
    grade: "Lớp 12",
    durationMinutes: 45,
    totalQuestions: 6,
    originalFileName: "Chuyen_de_Vat_Ly_Dao_dong_co.docx",
    status: "ready",
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 86400000).toISOString(),
    tags: ["Vật Lý 12", "Dao động điều hòa", "Con lắc lò xo", "Sóng cơ"],
    questions: [
      {
        id: "q-ly-1",
        index: 1,
        questionText: "Một vật dao động điều hòa theo phương trình x = A*cos(ωt + φ). Vận tốc của vật có độ lớn cực đại khi vật ở vị trí nào?",
        type: "single_choice",
        options: [
          { id: "A", text: "Vị trí cân bằng" },
          { id: "B", text: "Vị trí biên dương" },
          { id: "C", text: "Vị trí biên âm" },
          { id: "D", text: "Vị trí có li độ x = A/2" }
        ],
        correctAnswer: "A",
        explanation: "Vận tốc trong dao động điều hòa biến thiên theo phương trình v = -ωA*sin(ωt + φ). Độ lớn vận tốc vmax = ωA khi |sin(ωt + φ)| = 1, tức là khi vật đi qua vị trí cân bằng (x = 0). Tại hai biên vận tốc bằng 0.",
        difficulty: "easy",
        points: 1
      },
      {
        id: "q-ly-2",
        index: 2,
        questionText: "Một con lắc lò xo gồm vật nhỏ khối lượng m và lò xo nhẹ có độ cứng k. Chu kỳ dao động riêng của con lắc là:",
        type: "single_choice",
        options: [
          { id: "A", text: "T = 2π * √(m / k)" },
          { id: "B", text: "T = 2π * √(k / m)" },
          { id: "C", text: "T = (1 / 2π) * √(m / k)" },
          { id: "D", text: "T = 2π * √(g / l)" }
        ],
        correctAnswer: "A",
        explanation: "Tần số góc của con lắc lò xo là ω = √(k/m). Chu kỳ dao động T = 2π / ω = 2π * √(m/k).",
        difficulty: "easy",
        points: 1
      },
      {
        id: "q-ly-3",
        index: 3,
        questionText: "Khoảng cách giữa hai điểm gần nhau nhất trên cùng một phương truyền sóng dao động cùng pha là:",
        type: "single_choice",
        options: [
          { id: "A", text: "Một bước sóng (λ)" },
          { id: "B", text: "Nửa bước sóng (λ/2)" },
          { id: "C", text: "Một phần tư bước sóng (λ/4)" },
          { id: "D", text: "Hai bước sóng (2λ)" }
        ],
        correctAnswer: "A",
        explanation: "Bước sóng λ là quãng đường sóng truyền được trong một chu kỳ, đồng thời cũng chính là khoảng cách giữa hai điểm gần nhau nhất trên cùng một phương truyền sóng mà dao động cùng pha.",
        difficulty: "easy",
        points: 1
      },
      {
        id: "q-ly-4",
        index: 4,
        questionText: "Gia tốc của một chất điểm dao động điều hòa biến thiên:",
        type: "single_choice",
        options: [
          { id: "A", text: "Ngược pha với li độ" },
          { id: "B", text: "Cùng pha với li độ" },
          { id: "C", text: "Vuông pha sớm hơn li độ π/2" },
          { id: "D", text: "Ngược pha với vận tốc" }
        ],
        correctAnswer: "A",
        explanation: "Ta có công thức liên hệ giữa gia tốc và li độ: a = -ω^2 * x. Dấu trừ biểu thị gia tốc biến thiên điều hòa ngược pha với li độ (lệch pha π rad).",
        difficulty: "easy",
        points: 1
      },
      {
        id: "q-ly-5",
        index: 5,
        questionText: "Một sợi dây đàn hồi dài L có hai đầu cố định. Để có sóng dừng trên dây thì chiều dài L phải thỏa mãn điều kiện:",
        type: "single_choice",
        options: [
          { id: "A", text: "L = k * (λ / 2) với k ∈ N*" },
          { id: "B", text: "L = (2k + 1) * (λ / 4) với k ∈ N" },
          { id: "C", text: "L = k * λ với k ∈ N*" },
          { id: "D", text: "L = (2k + 1) * (λ / 2) với k ∈ N" }
        ],
        correctAnswer: "A",
        explanation: "Điều kiện để có sóng dừng trên dây có hai đầu cố định là chiều dài dây bằng một số nguyên lần nửa bước sóng: L = k * (λ/2) (với k là số bó sóng).",
        difficulty: "medium",
        points: 1
      },
      {
        id: "q-ly-6",
        index: 6,
        questionText: "Hiện tượng cộng hưởng xảy ra khi:",
        type: "single_choice",
        options: [
          { id: "A", text: "Tần số của lực cưỡng bức bằng tần số dao động riêng của hệ" },
          { id: "B", text: "Biên độ của lực cưỡng bức lớn nhất" },
          { id: "C", text: "Lực cản của môi trường bằng 0" },
          { id: "D", text: "Chu kỳ lực cưỡng bức lớn hơn chu kỳ riêng của hệ" }
        ],
        correctAnswer: "A",
        explanation: "Hiện tượng biên độ dao động cưỡng bức tăng nhanh đến một giá trị cực đại khi tần số f của lực cưỡng bức tiến đến bằng tần số riêng f0 của hệ dao động được gọi là hiện tượng cộng hưởng cơ.",
        difficulty: "easy",
        points: 1
      }
    ]
  },
  {
    id: "exam-anh-thpt-grammar",
    title: "Đề kiểm tra Tiếng Anh THPT - Cấu trúc Ngữ pháp & Từ vựng Chuyên sâu",
    description: "Đề thi trắc nghiệm tiếng Anh bám sát cấu trúc thi quốc gia: Mệnh đề quan hệ, Câu điều kiện, Phrasal verbs và Collocations.",
    subject: "Tiếng Anh",
    grade: "Lớp 12",
    durationMinutes: 50,
    totalQuestions: 5,
    originalFileName: "English_Mock_Test_Grammar.docx",
    status: "ready",
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    updatedAt: new Date(Date.now() - 172800000).toISOString(),
    tags: ["Tiếng Anh", "Grammar", "Vocabulary", "THPT"],
    questions: [
      {
        id: "q-anh-1",
        index: 1,
        questionText: "If she had studied harder for the entrance exam, she _______ admitted to her dream university now.",
        type: "single_choice",
        options: [
          { id: "A", text: "would be" },
          { id: "B", text: "would have been" },
          { id: "C", text: "will be" },
          { id: "D", text: "had been" }
        ],
        correctAnswer: "A",
        explanation: "Đây là câu điều kiện hỗn hợp (Mixed Conditional Type 3 + Type 2). Mệnh đề If diễn tả điều kiện trái với quá khứ (had studied), mệnh đề chính có trạng từ 'now' chỉ kết quả trái với hiện tại nên dùng công thức 'would + V-inf'. Do đó đáp án chính xác là 'would be'.",
        difficulty: "hard",
        points: 1
      },
      {
        id: "q-anh-2",
        index: 2,
        questionText: "The professor _______ lecture was extremely inspiring has just won an international award.",
        type: "single_choice",
        options: [
          { id: "A", text: "whose" },
          { id: "B", text: "who" },
          { id: "C", text: "whom" },
          { id: "D", text: "which" }
        ],
        correctAnswer: "A",
        explanation: "Cần một đại từ quan hệ chỉ sở hữu đứng trước danh từ 'lecture' (bài giảng của vị giáo sư). Đại từ sở hữu là 'whose' (whose lecture = his lecture).",
        difficulty: "easy",
        points: 1
      },
      {
        id: "q-anh-3",
        index: 3,
        questionText: "The company decided to _______ the launch of their new educational software due to technical glitches.",
        type: "single_choice",
        options: [
          { id: "A", text: "call off" },
          { id: "B", text: "put on" },
          { id: "C", text: "take up" },
          { id: "D", text: "look into" }
        ],
        correctAnswer: "A",
        explanation: "Cụm động từ (Phrasal Verb) 'call off' mang nghĩa là hủy bỏ (cancel). 'put on' là mặc/bật, 'take up' là bắt đầu thói quen/chiếm không gian, 'look into' là điều tra.",
        difficulty: "medium",
        points: 1
      },
      {
        id: "q-anh-4",
        index: 4,
        questionText: "Hardly _______ at the bus stop when the torrential rain began to fall.",
        type: "single_choice",
        options: [
          { id: "A", text: "had we arrived" },
          { id: "B", text: "we had arrived" },
          { id: "C", text: "did we arrive" },
          { id: "D", text: "were we arriving" }
        ],
        correctAnswer: "A",
        explanation: "Cấu trúc đảo ngữ với trạng từ phủ định ở đầu câu: 'Hardly + had + S + V(pII) + when + S + V(quá khứ đơn)'. Nghĩa là: 'Vừa mới... thì...'. Do đó chọn 'had we arrived'.",
        difficulty: "medium",
        points: 1
      },
      {
        id: "q-anh-5",
        index: 5,
        questionText: "The government has implemented strict measures to _______ pollution in urban areas.",
        type: "single_choice",
        options: [
          { id: "A", text: "curb" },
          { id: "B", text: "foster" },
          { id: "C", text: "ignite" },
          { id: "D", text: "boost" }
        ],
        correctAnswer: "A",
        explanation: "Collocation: 'curb pollution' có nghĩa là kiểm soát, hạn chế hoặc kiềm chế ô nhiễm. 'foster' là nuôi dưỡng, 'ignite' là kích hoạt ngọn lửa, 'boost' là thúc đẩy tăng cường.",
        difficulty: "medium",
        points: 1
      }
    ]
  }
];

async function ensureDataFiles(): Promise<void> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    try {
      await fs.access(EXAMS_FILE);
    } catch {
      await fs.writeFile(EXAMS_FILE, JSON.stringify(INITIAL_SAMPLE_EXAMS, null, 2), "utf-8");
    }

    try {
      await fs.access(ATTEMPTS_FILE);
    } catch {
      await fs.writeFile(ATTEMPTS_FILE, JSON.stringify([], null, 2), "utf-8");
    }
  } catch (error) {
    console.error("Lỗi khởi tạo thư mục data:", error);
  }
}

export async function getExams(): Promise<Exam[]> {
  await ensureDataFiles();
  try {
    const raw = await fs.readFile(EXAMS_FILE, "utf-8");
    return JSON.parse(raw) as Exam[];
  } catch (error) {
    console.error("Lỗi đọc danh sách đề thi:", error);
    return INITIAL_SAMPLE_EXAMS;
  }
}

export async function getExamById(id: string): Promise<Exam | null> {
  const exams = await getExams();
  return exams.find((e) => e.id === id) || null;
}

export async function saveExam(exam: Exam): Promise<Exam> {
  await ensureDataFiles();
  const exams = await getExams();
  const existingIndex = exams.findIndex((e) => e.id === exam.id);

  if (existingIndex >= 0) {
    exams[existingIndex] = { ...exam, updatedAt: new Date().toISOString() };
  } else {
    exams.unshift({ ...exam, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
  }

  await fs.writeFile(EXAMS_FILE, JSON.stringify(exams, null, 2), "utf-8");
  return exam;
}

export async function deleteExam(id: string): Promise<boolean> {
  await ensureDataFiles();
  const exams = await getExams();
  const filtered = exams.filter((e) => e.id !== id);
  if (filtered.length === exams.length) return false;

  await fs.writeFile(EXAMS_FILE, JSON.stringify(filtered, null, 2), "utf-8");
  return true;
}

export async function getAttempts(): Promise<QuizAttempt[]> {
  await ensureDataFiles();
  try {
    const raw = await fs.readFile(ATTEMPTS_FILE, "utf-8");
    return JSON.parse(raw) as QuizAttempt[];
  } catch {
    return [];
  }
}

export async function saveAttempt(attempt: QuizAttempt): Promise<QuizAttempt> {
  await ensureDataFiles();
  const attempts = await getAttempts();
  attempts.unshift(attempt);
  await fs.writeFile(ATTEMPTS_FILE, JSON.stringify(attempts, null, 2), "utf-8");
  return attempt;
}
