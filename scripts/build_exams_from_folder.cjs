const fs = require('fs');
const path = require('path');

/**
 * MASTER SCRIPT BUILD EXAM SYSTEM CHO TESTRIX
 * 1. Đọc và chuẩn hóa dữ liệu từ folder Exam/:
 *    - Lớp 12: Unit 1, Unit 2 (Ôn thi giữa kì 1)
 *    - Lớp 11: Unit 1, Unit 2 (Ôn thi giữa kì 1)
 *    - Lớp 12: HSG Test 01, Test 02, Test 03 (Ôn thi HSG)
 * 2. Xuất file đáp án chi tiết và hướng dẫn giải (DAP_AN_CHI_TIET.txt) vào từng folder dap-an/ tương ứng
 * 3. Xuất file src/data/exams.json hoàn chỉnh, chuẩn xác 100% cho web app
 */

const EXAM_BASE = path.join(__dirname, '..', 'Exam');

// ==========================================
// 1. DỮ LIỆU ĐỀ LỚP 12 - UNIT 1 & UNIT 2 (ĐÃ BUILD CHUẨN)
// ==========================================
const examsJsonInit = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'exams.json'), 'utf8'));
const examUnit1 = examsJsonInit.find(e => e.id === 'de-on-tap-gk1-lop-12-unit-1');
const examUnit2 = examsJsonInit.find(e => e.id === 'de-on-tap-gk1-lop-12-unit-2');

// ==========================================
// 2. PARSER CHO LỚP 11 UNIT 1 & UNIT 2
// ==========================================
function parseU11(txtFile, meta) {
  const text = fs.readFileSync(txtFile, 'utf8');
  
  // Extract answers from Azota table
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  const answers = {};
  for (let i = 0; i < lines.length - 1; i++) {
    if (/^\d+$/.test(lines[i]) && /^[A-D]$/i.test(lines[i + 1])) {
      answers[parseInt(lines[i])] = lines[i + 1].toUpperCase();
    }
  }

  // Extract questions
  const qMatches = [...text.matchAll(/Câu\s+(\d+)\s*:\s*([\s\S]*?)(?=(Câu\s+\d+\s*:)|(BẢNG ĐÁP ÁN)|$)/gi)];
  const questions = [];

  for (const m of qMatches) {
    const num = parseInt(m[1]);
    let rawBody = m[2].trim();
    const headerSplit = rawBody.split(/(?:PART\s+\d+|II\.\s+|III\.\s+|IV\.\s+|Mark\s+the\s+letter|Read\s+the\s+following)/i);
    const questionBlock = headerSplit[0].trim();

    const optRegex = /(?:^|\s+)([A-D])[\.\s]\s*([\s\S]*?)(?=(?:\s+[A-D][\.\s])|$)/g;
    let match;
    const options = [];
    const foundIndices = [];
    while ((match = optRegex.exec(questionBlock)) !== null) {
      if (['A', 'B', 'C', 'D'].includes(match[1])) {
        if (!options.some(o => o.id === match[1])) {
          options.push({
            id: match[1],
            text: match[2].trim().replace(/\s+/g, ' ')
          });
          foundIndices.push(match.index);
        }
      }
    }

    let questionText = questionBlock;
    if (foundIndices.length > 0) {
      questionText = questionBlock.slice(0, foundIndices[0]).trim();
    }

    questions.push({
      id: `${meta.prefix}-q${num}`,
      index: num,
      sectionId: meta.getSectionId(num),
      questionText: questionText.replace(/\s+/g, ' ').trim(),
      options,
      correctAnswer: answers[num] || 'A',
      explanation: meta.getExplanation(num, answers[num] || 'A')
    });
  }

  return {
    ...meta.info,
    totalQuestions: questions.length,
    sections: meta.sections,
    questions
  };
}

// Metadata Lớp 11 Unit 1
const u11_1_meta = {
  prefix: 'l11-u1',
  info: {
    id: 'de-cuong-on-tap-gk1-lop-11-unit-1',
    title: 'Đề Cương Ôn Tập Giữa Kỳ 1 Lớp 11 - Unit 1: A Long and Healthy Life (Năm học 2026-2027)',
    description: 'Đề thi chuẩn cấu trúc gồm 4 phần: Phát âm & Trọng âm, Từ vựng & Ngữ pháp, Đọc điền từ & Đọc hiểu chất béo dinh dưỡng, Kỹ năng sắp xếp câu/hội thoại.',
    subject: 'Tiếng Anh',
    category: 'Ôn giữa kỳ 1',
    categories: ['Ôn theo unit', 'Ôn giữa kỳ 1'],
    grade: 'Lớp 11',
    durationMinutes: 60,
    originalFileName: 'de-cuong-tieng-anh-11-unit-1-azota.docx',
    status: 'ready',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ['Tiếng Anh 11', 'Lớp 11', 'Ôn theo unit', 'Ôn giữa kỳ 1', 'Unit 1', 'A Long and Healthy Life', 'Global Success']
  },
  sections: [
    {
      id: 'sec-11-1-1',
      title: 'I. USE OF LANGUAGE - PART 1: PRONUNCIATION & STRESS',
      instruction: 'Mark the letter A, B, C, or D on your answer sheet to indicate the word that differs from the other three in the position of primary stress.',
      questionIndices: [1, 2, 3, 4]
    },
    {
      id: 'sec-11-1-2',
      title: 'PART 2: CLOSEST IN MEANING',
      instruction: 'Mark the letter A, B, C, or D on your answer sheet to indicate the word(s) CLOSEST in meaning to the underlined word(s).',
      questionIndices: [5, 6, 7, 8]
    },
    {
      id: 'sec-11-1-3',
      title: 'PART 3: OPPOSITE IN MEANING',
      instruction: 'Mark the letter A, B, C, or D on your answer sheet to indicate the word(s) OPPOSITE in meaning to the underlined word(s).',
      questionIndices: [9, 10, 11, 12]
    },
    {
      id: 'sec-11-1-4',
      title: 'PART 4: GRAMMAR & VOCABULARY',
      instruction: 'Mark the letter A, B, C, or D on your answer sheet to indicate the correct answer to each of the following questions.',
      questionIndices: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    },
    {
      id: 'sec-11-1-5',
      title: 'II. READING - PART 1: CLOZE READING',
      instruction: 'Read the following passage carefully and then choose the best option to fit each numbered blank.',
      passageTitle: 'The Importance and Purpose of Sleep',
      passage: 'For about one third of your life, your eyes will be closed. You will not move very much. You will breathe very slowly. You will be quiet. In other words, for about one third of your life, you will be asleep. Why do we sleep so much? What is the purpose? Scientists do not have a complete answer. They believe that sleep (31)________ your energy and helps your brain work better. If you do not sleep enough, you cannot (32)_________on your work, and you feel tired all day. Without enough sleep, you are also more likely to get sick. Sleep is important (33)_________ normal development. This means that children need a lot of sleep in order to grow up strong and healthy. During the first two weeks of life, babies sleep for about 16 hours every day. This changes as they grow and need less sleep. Teenagers still need about 9 hours of sleep every night, but most adults need less – only about 8 hours. After about the age of 70, they only sleep for about 6 hours every night. All animals, (34) _________ live in different environments, need sleep, (35) _________ there is great variation in how much they sleep. For example, some big snakes sleep for more than 18 hours a day. Sheep only sleep for about 4 hours, and giraffes sleep less than 2 hours a day! Pigs sleep for 8 hours a day just like adult humans.',
      questionIndices: [31, 32, 33, 34, 35]
    },
    {
      id: 'sec-11-1-6',
      title: 'PART 2: READING COMPREHENSION',
      instruction: 'Read the following passage and mark the letter A, B, C, or D on your answer sheet to indicate the correct answer to each of the questions.',
      passageTitle: 'Functions and Nutritional Value of Fats',
      passage: 'Most human diets contain between 10 and 15 percent of their total calories as protein. The rest of the dietary energy comes from carbohydrates, fats, and in some people, alcohol. The proportion of calories from fats varies from 10 percent in poor communities to 40 percent or more in rich communities.\n\nIn addition to providing energy, fats have several other functions in the body. The fat-soluble vitamins, A, D, E, and K, are dissolved in fats, as their name implies. Good sources of these vitamins have high oil or fat content, and the vitamins are stored in the body’s fatty tissues. In the diet, fats cause food to remain longer in the stomach, thus increasing the feeling of fullness for some time after a meal is eaten. Fats add variety, taste, and texture to foods, which accounts for the popularity of fried foods. Fatty deposits in the body have an insulating and protective value. The curves of the female human body are due mostly to strategically located fat deposits.\n\nWhether a certain amount of fat in the diet is essential to human health is not definitely known. When rats are fed a fat-free diet, their growth eventually ceases, their skin becomes inflamed and scaly, and their reproductive systems are damaged. Two fatty acids, linoleic and arachidonic acids, prevent these abnormalities and hence are called essential fatty acids. They are required by a number of other animals, but their roles in human beings are debatable. Most nutritionists consider linoleic fatty acid an essential nutrient for humans.',
      questionIndices: [36, 37, 38, 39, 40]
    },
    {
      id: 'sec-11-1-7',
      title: 'III. WRITING - PART 1: SENTENCE / UTTERANCE ARRANGEMENT',
      instruction: 'Mark the letter A, B, C or D to indicate the best arrangement of utterances or sentences to make a meaningful exchange or text.',
      questionIndices: [41, 42, 43, 44]
    }
  ],
  getSectionId(num) {
    if (num <= 4) return 'sec-11-1-1';
    if (num <= 8) return 'sec-11-1-2';
    if (num <= 12) return 'sec-11-1-3';
    if (num <= 30) return 'sec-11-1-4';
    if (num <= 35) return 'sec-11-1-5';
    if (num <= 40) return 'sec-11-1-6';
    return 'sec-11-1-7';
  },
  getExplanation(num, ans) {
    const map = {
      1: 'adapt /əˈdæpt/ trọng âm rơi vào âm tiết thứ 2, các từ còn lại (conflict, fitness, value) trọng âm rơi vào âm tiết thứ 1.',
      2: 'respect /rɪˈspekt/ trọng âm rơi vào âm tiết thứ 2, các từ còn lại (virus, habit, healthy) trọng âm rơi vào âm tiết thứ 1.',
      3: 'routine /ruːˈtiːn/ trọng âm rơi vào âm tiết thứ 2, các từ còn lại (habit, diet, balance) trọng âm rơi vào âm tiết thứ 1.',
      4: 'vegetable /ˈvedʒtəbl/ trọng âm rơi vào âm tiết thứ 1, các từ còn lại (expectancy, longevity, repetitive) trọng âm rơi vào âm tiết thứ 2.',
      5: 'cut down on = decrease (cắt giảm thức ăn nhanh).',
      6: 'diseases = illness (bệnh tật).',
      7: 'frequently = regularly (thường xuyên).',
      8: 'life expectancy = longevity (tuổi thọ trung bình).',
      9: 'give up = từ bỏ; từ trái nghĩa là continue (tiếp tục duy trì thói quen).',
      10: 'work out = tập luyện thể dục thể thao; từ trái nghĩa là relax (nghỉ ngơi, thư giãn).',
      11: 'balanced = cân đối, hợp lý; từ trái nghĩa là unreasonable (vô lý, không hợp lý).',
      12: 'effects = tác động, kết quả; từ trái nghĩa trong ngữ cảnh này là causes (nguyên nhân).',
      13: 'antibiotics = thuốc kháng sinh (chỉ dùng khi cần thiết và theo chỉ định).',
      14: 'balanced diet = chế độ ăn uống cân bằng, dinh dưỡng.',
      15: 'Dấu hiệu thời gian "last week" chia thì Quá khứ đơn: tried.',
      16: 'Diễn tả chuỗi hành động trong quá khứ: cut / noticed.',
      17: 'Following a doctor\'s treatment = tuân theo phác đồ điều trị của bác sĩ.',
      18: 'give up + V-ing/noun = từ bỏ thói quen xấu.',
      19: 'Since last year đi với thì Hiện tại hoàn thành tiếp diễn: has been.',
      20: 'Food poisoning = ngộ độc thực phẩm (danh từ ghép).',
      21: 'Cấu trúc: Since + S + V(quá khứ đơn: gave), S + have/has + V3/ed (has had).',
      22: 'work out = tập thể dục thể hình để tăng cường cơ bắp.',
      23: 'tuberculosis = bệnh lao (danh từ chỉ bệnh tật).',
      24: 'Cấu trúc How about + V-ing -> attending.',
      25: 'Cụm từ cut down on sth = cắt giảm lượng tiêu thụ cái gì.',
      26: 'natural ingredients = các nguyên liệu tự nhiên.',
      27: 'dietary changes = những thay đổi về mặt dinh dưỡng/chế độ ăn.',
      28: 'learn from sb = học hỏi điều gì từ ai.',
      29: 'Cấu trúc Hiện tại hoàn thành + since + Quá khứ đơn: have lost / left.',
      30: 'Cấu trúc Hiện tại hoàn thành + since + Quá khứ đơn: have made / moved.',
      31: 'Chủ ngữ không đếm được "sleep" chia động từ số ít thì Hiện tại đơn: restores (khôi phục năng lượng).',
      32: 'concentrate on = tập trung vào công việc.',
      33: 'important for = quan trọng đối với sự phát triển bình thường.',
      34: 'Đại từ quan hệ "which" thay thế cho danh từ chỉ loài vật "All animals" trong mệnh đề không xác định có dấu phẩy.',
      35: 'Liên từ "but" diễn tả sự tương phản: tất cả loài vật đều cần ngủ, nhưng thời lượng ngủ có sự khác biệt rất lớn.',
      36: 'Thông tin D là không đúng: trong bài nêu người nghèo tiêu thụ ít chất béo hơn người giàu (10% so với 40%).',
      37: '"They" ở đoạn 3 thay thế cho "essential fatty acids" (các axit béo thiết yếu).',
      38: 'Chuột thí nghiệm ăn khẩu phần không có chất béo thì "growth ceases" -> They stop growing (ngừng phát triển).',
      39: 'essential = necessary (cần thiết, thiết yếu).',
      40: 'Tiêu đề phù hợp nhất là: Functions and benefits of dietary fats (Chức năng và lợi ích của chất béo trong chế độ ăn).',
      41: 'Thứ tự sắp xếp bức thư: b (Lời cảm ơn) ➔ c (Khen ngợi bài nói chuyện) ➔ a (Nêu mục đích viết thư hỏi thực đơn) ➔ d (Khó khăn gặp phải) ➔ e (Đề xuất buổi trao đổi online). Đáp án C: b – c – a – d – e.',
      42: 'Thứ tự đoạn văn: b (Thực trạng lối sống hiện đại) ➔ d (Hậu quả mệt mỏi tăng cân) ➔ a (Giải pháp 1: đi bộ) ➔ c (Giải pháp 2: chế độ ăn) ➔ e (Kết luận). Đáp án A: b – d – a – c – e.',
      43: 'Thứ tự tin nhắn: b (Chào hỏi) ➔ d (Cảm ơn vì đã cho mượn sách) ➔ c (Rủ sang nhà thử công thức) ➔ a (Nhờ mang xoài) ➔ e (Chào tạm biệt) ➔ f (Ký tên). Đáp án C: b – d – c – a – e – f.',
      44: 'Thứ tự hội thoại: c (Sam khoe đồng hồ) ➔ b (Taylor khen và khoe giày) ➔ d (Sam hỏi mượn thử) ➔ e (Taylor đồng ý và đổi chủ đề sang cây công viên) ➔ a (Sam hào hứng về công viên). Đáp án A: c – b – d – e – a.'
    };
    return map[num] || 'Đáp án chính xác dựa trên kiến thức ngữ pháp và văn cảnh bài học.';
  }
};

// Metadata Lớp 11 Unit 2
const u11_2_meta = {
  prefix: 'l11-u2',
  info: {
    id: 'de-cuong-on-tap-gk1-lop-11-unit-2',
    title: 'Đề Cương Ôn Tập Giữa Kỳ 1 Lớp 11 - Unit 2: Generation Gap (Năm học 2026-2027)',
    description: 'Đề thi chuẩn cấu trúc gồm: Trọng âm, Từ đồng nghĩa/Trái nghĩa, Ngữ pháp Modal Verbs (must, should, have to) & Từ vựng Gia đình, 2 Bài đọc hiểu và Kỹ năng viết sắp xếp đoạn văn.',
    subject: 'Tiếng Anh',
    category: 'Ôn giữa kỳ 1',
    categories: ['Ôn theo unit', 'Ôn giữa kỳ 1'],
    grade: 'Lớp 11',
    durationMinutes: 60,
    originalFileName: 'de-cuong-tieng-anh-11-unit-2-azota.docx',
    status: 'ready',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ['Tiếng Anh 11', 'Lớp 11', 'Ôn theo unit', 'Ôn giữa kỳ 1', 'Unit 2', 'Generation Gap', 'Global Success', 'Modal Verbs']
  },
  sections: [
    {
      id: 'sec-11-2-1',
      title: 'I. USE OF LANGUAGE - PRONUNCIATION & STRESS',
      instruction: 'Mark the letter A, B, C, or D on your answer sheet to indicate the word that differs from the other three in the position of primary stress.',
      questionIndices: [1, 2, 3, 4]
    },
    {
      id: 'sec-11-2-2',
      title: 'CLOSEST IN MEANING',
      instruction: 'Mark the letter A, B, C, or D on your answer sheet to indicate the word(s) CLOSEST in meaning to the underlined word(s).',
      questionIndices: [5, 6, 7, 8]
    },
    {
      id: 'sec-11-2-3',
      title: 'OPPOSITE IN MEANING',
      instruction: 'Mark the letter A, B, C, or D on your answer sheet to indicate the word(s) OPPOSITE in meaning to the underlined word(s).',
      questionIndices: [9, 10, 11, 12]
    },
    {
      id: 'sec-11-2-4',
      title: 'GRAMMAR & VOCABULARY (MODAL VERBS & FAMILY TOPICS)',
      instruction: 'Mark the letter A, B, C, or D on your answer sheet to indicate the correct answer to each of the following questions.',
      questionIndices: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]
    },
    {
      id: 'sec-11-2-5',
      title: 'II. READING - READING 1: CLOZE READING',
      instruction: 'Read the following passage and mark the letter A, B, C or D to indicate the correct word or phrase for each of the blanks.',
      passageTitle: 'Family Conflicts and Solutions',
      passage: 'Families can be a source of great joy and love, but they can also be a source of conflict. Conflict is a disagreement or (34) ______ between people. Sometimes, family members don\'t agree on things, and this can lead to arguments. These arguments can be about small things, like what to watch on TV, or big things, like what kind of life you want to live.\n\nOne way family (35) _______ can happen is when parents and children have different ideas about how things should be. Parents might have rules that their children don\'t like, or they might not agree with their children\'s choices. This can lead (36) ______ arguments and disagreements.\n\nSometimes, family conflicts can be caused by things that happen outside the family. For example, if a family member is going through a difficult time, it can affect the whole family. This can lead to stress and tension, (37) ______ can make it harder for family members to get along.\n\nEven though family conflicts can be difficult, it\'s important to remember that families are important. Families provide love, support, and a sense of belonging. (38) _____ there are disagreements, it\'s important to try to work things out and stay connected. Families can be a source of strength and support, even when things are tough.',
      questionIndices: [34, 35, 36, 37, 38]
    },
    {
      id: 'sec-11-2-6',
      title: 'READING 2: READING COMPREHENSION',
      instruction: 'Read the following passage and mark the letter A, B, C, or D to indicate the correct answer to each of the questions.',
      passageTitle: 'The Generation Gap in the Modern Business World',
      passage: 'The generation gap in the business world is a fascinating phenomenon that highlights the differences in attitudes, values, and approaches to conducting business between different generations. One of the key areas where the generation gap is evident is in technology adoption. Younger generations, such as Millennials and Generation Z, have grown up in the digital age and are generally more comfortable with technology. They readily embrace new tools, platforms, and digital strategies, which can significantly impact business practices, marketing strategies, and communication methods.\n\nWorkforce expectations also play a crucial role in the generation gap. Each generation has its own set of expectations when it comes to work-life balance, career progression, and job satisfaction. Younger generations often prioritize flexibility, purpose-driven work, and a healthy work-life balance. Meanwhile, older generations may place more emphasis on job stability, loyalty, and traditional career paths.\n\nLeadership styles are another area where the generation gap becomes evident. Baby Boomers and Generation X typically favor hierarchical structures and a more top-down management style. They are used to a more authoritative approach to leadership. Conversely, younger generations often prefer collaborative and inclusive leadership styles, valuing input from all levels of the organization. They thrive in environments that encourage participation, teamwork, and innovation.\n\nCommunication preferences have also evolved with each generation. The way people communicate and consume information has drastically changed over the years. Younger generations are inclined towards instant messaging, social media, and other digital channels for communication.',
      questionIndices: [39, 40, 41, 42, 43]
    },
    {
      id: 'sec-11-2-7',
      title: 'III. WRITING - SENTENCE ARRANGEMENT',
      instruction: 'Mark the letter A, B, C or D to indicate the best arrangement of utterances or sentences to make a meaningful exchange or text.',
      questionIndices: [44, 45, 46]
    }
  ],
  getSectionId(num) {
    if (num <= 4) return 'sec-11-2-1';
    if (num <= 8) return 'sec-11-2-2';
    if (num <= 12) return 'sec-11-2-3';
    if (num <= 33) return 'sec-11-2-4';
    if (num <= 38) return 'sec-11-2-5';
    if (num <= 43) return 'sec-11-2-6';
    return 'sec-11-2-7';
  },
  getExplanation(num, ans) {
    const map = {
      1: 'behaviour /bɪˈheɪvjər/ trọng âm rơi vào âm tiết thứ 2, các từ còn lại (generation, economic, disagreement) trọng âm rơi vào âm tiết thứ 3.',
      2: 'musician /mjuˈzɪʃn/ trọng âm rơi vào âm tiết thứ 2, các từ còn lại (difference, character, grandparent) trọng âm rơi vào âm tiết thứ 1.',
      3: 'extended /ɪkˈstendɪd/ trọng âm rơi vào âm tiết thứ 2, các từ còn lại (argument, digital, family) trọng âm rơi vào âm tiết thứ 1.',
      4: 'respect /rɪˈspekt/ trọng âm rơi vào âm tiết thứ 2, các từ còn lại (eyesight, worry, freedom) trọng âm rơi vào âm tiết thứ 1.',
      5: 'argument = conflict (sự tranh cãi, xung đột quan điểm).',
      6: 'influenced = affected (chịu ảnh hưởng bởi).',
      7: 'limit = control (giới hạn, kiểm soát thời gian sử dụng thiết bị).',
      8: 'problems = issues (các vấn đề nảy sinh trong gia đình).',
      9: 'digital natives = thế hệ trẻ sinh ra trong thời đại số; từ trái nghĩa là old generations (các thế hệ trước).',
      10: 'wet behind the ears = non nớt, chưa có kinh nghiệm; từ trái nghĩa là full of experience (giàu kinh nghiệm).',
      11: 'curious = tò mò, ham học hỏi; từ trái nghĩa là indifferent (thờ ơ, không quan tâm).',
      12: 'freedom = tự do; từ trái nghĩa là restriction (sự hạn chế, gò bó).',
      13: 'Extended family = gia đình nhiều thế hệ bao gồm ông bà, cô chú, họ hàng.',
      14: 'social media = phương tiện truyền thông mạng xã hội.',
      15: 'follow in someone\'s footsteps = nối nghiệp, đi theo con đường của ai.',
      16: 'shouldn\'t = không nên nói chuyện hỗn hào với ông bà.',
      17: 'Generation gap = khoảng cách thế hệ.',
      18: 'argue over sth = tranh cãi về những điều nhỏ nhặt.',
      19: 'must = phải làm gì (bắt buộc, nếu không sẽ bị phạt).',
      20: 'arguments = các cuộc cãi vã thường ngày.',
      21: 'doesn\'t have to = không bắt buộc phải đến văn phòng vào cuối tuần.',
      22: 'should = nên (lời khuyên nên chuyển nơi ở).',
      23: 'traditional views = những quan điểm truyền thống (tính từ đứng trước danh từ).',
      24: 'had to = đã phải nghỉ học ở tuổi 14 (sự bắt buộc trong quá khứ).',
      25: 'curious about = tò mò, quan tâm tìm hiểu về góc nhìn của ông bà.',
      26: 'don\'t have to = không phải trả tiền (vì được miễn phí cho trẻ dưới 6 tuổi).',
      27: 'change one\'s mind = thay đổi quan điểm, suy nghĩ.',
      28: 'work out = tập thể dục rèn luyện cơ bắp.',
      29: 'creative = sáng tạo (tính từ theo sau động từ to be are).',
      30: 'traditional values = các giá trị mang tính truyền thống của gia đình.',
      31: 'impose sth on sb = áp đặt quyết định lên ai.',
      32: 'shouldn\'t = không nên so sánh con mình với con người khác.',
      33: 'mustn\'t = cấm không được dẫm chân lên bãi cỏ.',
      34: 'disagreement or argument = sự bất đồng hoặc tranh cãi giữa người với người.',
      35: 'family conflicts = những mâu thuẫn, xung đột trong gia đình.',
      36: 'lead to = dẫn đến tranh cãi.',
      37: 'Đại từ quan hệ "which" thay cho cả mệnh đề phía trước có dấu phẩy.',
      38: 'Even when = ngay cả khi có những bất đồng nảy sinh.',
      39: 'Tiêu đề phù hợp nhất: The Generation Gap in Such a Technological Era (Khoảng cách thế hệ trong thời đại công nghệ).',
      40: 'Thông tin ở đoạn 3: thế hệ trẻ ưa chuộng phong cách lãnh đạo hợp tác và "valuing input from all levels of the organization".',
      41: '"they" ở đoạn 1 thay thế cho "Younger generations".',
      42: 'thrive = succeed (phát triển mạnh mẽ, thành công).',
      43: 'Thông tin B là SAI vì thế hệ trẻ mới là người ưu tiên tính linh hoạt và cân bằng công việc - cuộc sống.',
      44: 'Thứ tự hội thoại: a (Con muốn tự sửa xe) ➔ b (Bố khen ý hay) ➔ c (Con hỏi bắt đầu từ phanh) ➔ d (Bố bảo xem hướng dẫn trước) ➔ e (Con cảm ơn và chuẩn bị dụng cụ). Đáp án B: a – b – c – d – e.',
      45: 'Thứ tự đoạn văn: b (Câu chủ đề: kết hợp kỹ năng hiện đại và trí tuệ truyền thống) ➔ c (Ví dụ trao đổi dạy chỉnh ảnh và múa dân gian) ➔ a (Ông bà truyền lại các giá trị) ➔ d (Sự trao đổi này xây dựng niềm tin) ➔ e (Kết luận). Đáp án B: b – c – a – d – e.',
      46: 'Thứ tự hội thoại: b (Con xin phép mẹ đi sinh nhật Emma) ➔ d (Mẹ đồng ý và hỏi ai đi cùng) ➔ e (Con nêu tên bạn và xin ngủ lại) ➔ a (Mẹ từ chối cho ngủ lại vì mai bận sớm) ➔ c (Con đồng ý về trước 10h). Đáp án C: b – d – e – a – c.'
    };
    return map[num] || 'Đáp án chính xác dựa trên bài tập ngữ pháp và đọc hiểu.';
  }
};

// ==========================================
// 3. PARSER CHO LỚP 12 HSG 1, 2, 3
// ==========================================
function parseHsg(txtFile, meta) {
  const text = fs.readFileSync(txtFile, 'utf8');
  const qRegex = /Question\s+(\d+)\.([\s\S]*?)(?=(?:Question\s+\d+\.)|(?:Read\s+the\s+passage)|(?:Read\s+the\s+following)|(?:Mark\s+the\s+letter)|(?:-------------)|$)/g;
  const questions = [];
  let match;
  while ((match = qRegex.exec(text)) !== null) {
    const num = parseInt(match[1]);
    const block = match[2].trim();

    const optRegex = /(?:^|\s+)([A-D])[\.\s]\s*([\s\S]*?)(?=(?:\s+[A-D][\.\s])|$)/g;
    const options = [];
    const foundIndices = [];
    let oMatch;
    while ((oMatch = optRegex.exec(block)) !== null) {
      if (['A', 'B', 'C', 'D'].includes(oMatch[1])) {
        if (!options.some(o => o.id === oMatch[1])) {
          options.push({
            id: oMatch[1],
            text: oMatch[2].trim().replace(/\s+/g, ' ')
          });
          foundIndices.push(oMatch.index);
        }
      }
    }

    let qText = block;
    if (foundIndices.length > 0) {
      qText = block.slice(0, foundIndices[0]).trim();
    }

    questions.push({
      id: `${meta.prefix}-q${num}`,
      index: num,
      sectionId: meta.getSectionId(num),
      questionText: qText.replace(/\s+/g, ' ').trim(),
      options,
      correctAnswer: meta.answers[num],
      explanation: meta.explanations[num]
    });
  }

  return {
    ...meta.info,
    totalQuestions: questions.length,
    sections: meta.sections,
    questions
  };
}

// HSG 1 Metadata & Explanations
const hsg1_answers = {
  1: 'C', 2: 'A', 3: 'C', 4: 'D', 5: 'C', 6: 'A', 7: 'C', 8: 'A', 9: 'A', 10: 'D',
  11: 'D', 12: 'B', 13: 'A', 14: 'B', 15: 'A', 16: 'A', 17: 'D', 18: 'B', 19: 'C', 20: 'A',
  21: 'B', 22: 'C', 23: 'C', 24: 'D', 25: 'B', 26: 'B', 27: 'D', 28: 'C', 29: 'B', 30: 'D',
  31: 'A', 32: 'B', 33: 'B', 34: 'C', 35: 'B', 36: 'D', 37: 'D', 38: 'A', 39: 'C', 40: 'D'
};

const hsg1_explanations = {
  1: 'Cần một tính từ đứng trước danh từ "member" để bổ nghĩa cho nó: "valuable member" (thành viên có giá trị của xã hội).',
  2: 'Mệnh đề trạng ngữ chỉ thời gian với "While" diễn tả một hành động đang diễn ra trong quá khứ ("last summer"): "While I was working...".',
  3: 'Rút gọn mệnh đề quan hệ dạng chủ động (who are living): "The lovely kids living in this small shelter...".',
  4: 'Cụm từ "provide sth to sb" (cung cấp sự hỗ trợ thực tế và đồ dùng thiết yếu cho trẻ em).',
  5: 'Cụm động từ "set up" có nghĩa là tổ chức, thiết lập (set up charity shows: tổ chức các chương trình biểu diễn từ thiện).',
  6: 'Cụm danh từ "financial donations" (khoản quyên góp tài chính hảo tâm).',
  7: 'Cần tính từ miêu tả ứng dụng tập luyện: "successful exercise application" (ứng dụng thể thao thành công).',
  8: 'Cấu trúc so sánh nhất: "the most popular fitness network" (mạng lưới thể dục thể thao phổ biến nhất).',
  9: 'Liên từ chỉ sự nhượng bộ phù hợp về ngữ nghĩa: "Although the company faces fierce competition..." (Mặc dù phải đối mặt với sự cạnh tranh khốc liệt...).',
  10: 'Động từ khuyết thiếu diễn tả kế hoạch tương lai gần: "the business will introduce..." (doanh nghiệp sẽ sớm giới thiệu các tính năng mới).',
  11: 'Đại từ bất định chỉ người: "Anyone using the app can track their health metrics..." (Bất kỳ ai sử dụng ứng dụng đều có thể theo dõi...).',
  12: 'Thành ngữ cố định: "stay ahead of the pack" (dẫn đầu đoàn đua, vượt lên trên các đối thủ cạnh tranh).',
  13: 'Trật tự hội thoại logic: a (Matthew nêu sự việc nông dân bị lạnh do cấm than đá) ➔ c (Jennifer đồng cảm nhưng nhấn mạnh sưởi ấm là thiết yếu) ➔ b (Matthew đề xuất trợ giá năng lượng xanh cho người nghèo). Đáp án A: a - c - b.',
  14: 'Trật tự bức thư báo cáo môi trường: e (Mục đích gửi báo cáo về chiến dịch xanh) ➔ b (Các hoạt động đã làm trong tháng qua) ➔ c (Đề xuất lập khu ủ phân hữu cơ phía sau căng tin) ➔ a (Lợi ích tạo phân bón cho vườn rau học sinh) ➔ d (Đính kèm dự toán tài chính và mong phản hồi). Đáp án B: e - b - c - a - d.',
  15: 'Trật tự đoạn văn về khoảng cách nhà ở: b (Giá bất động sản tăng gây rào cản cho người trẻ) ➔ d (Thừa nhận thế hệ trước mua nhà với giá thấp hơn nhiều) ➔ e (Tuy nhiên người trẻ ngày nay phải làm thêm nhiều giờ chỉ để sinh tồn) ➔ c (Hơn nữa chi phí thuê nhà cao bào mòn thu nhập) ➔ a (Do đó các nhà hoạch định chính sách cần khẩn trương giải quyết). Đáp án A: b - d - e - c - a.',
  16: 'Trật tự đoạn văn về chia sẻ việc nhà: d (Câu chủ đề: Chia sẻ trách nhiệm gia đình đóng vai trò thiết yếu duy trì sự hòa thuận) ➔ a (Khi cha mẹ và con cái chia đều công việc, họ xây dựng sự tôn trọng) ➔ c (Hơn nữa phương pháp này giúp gia đình dành nhiều thời gian bên nhau) ➔ b (Kết quả là con cái học được kỹ năng sống quan trọng) ➔ e (Về lâu dài các thói quen này củng cố sợi dây tình cảm). Đáp án A: d - a - c - b - e.',
  17: 'Trật tự hội thoại về bảo tồn sách truyền thống: b (Thomas ngạc nhiên vì mọi người mạo hiểm cứu sách) ➔ e (Dorothy đồng tình việc bảo vệ câu chuyện giữ gìn văn hóa lịch sử) ➔ d (Thomas bổ sung sách giúp thế hệ trẻ hiểu về cội nguồn) ➔ a (Dorothy xúc động khi thấy họ nỗ lực bảo vệ thư viện cổ) ➔ c (Thomas kết luận việc đọc và viết giữ cho tinh thần dân tộc luôn sống mãi). Đáp án D: b - e - d - a - c.',
  18: 'Cấu trúc đảo ngữ tương liên: "As data volume expands, so do challenges." (Khi khối lượng dữ liệu mở rộng, những thách thức cũng gia tăng tương ứng).',
  19: 'Trật tự từ chuẩn ngữ pháp tiếng Anh: trạng từ đứng đầu bổ nghĩa cho cả mệnh đề: "Subsequently, it enters into complex predictive models".',
  20: 'Mệnh đề quan hệ không xác định đi kèm từ chỉ lượng: "most of which fall short of expectations" (hầu hết trong số đó không đáp ứng được kỳ vọng ban đầu).',
  21: 'Cấu trúc chủ - vị chuẩn mực: "They then establish strict data governance policies" (Sau đó họ thiết lập các chính sách quản trị dữ liệu nghiêm ngặt).',
  22: 'Trật tự từ chuẩn xác với trạng từ phủ định: "can hardly maintain their competitive edge today" (khó có thể duy trì được lợi thế cạnh tranh ngày nay).',
  23: 'Từ "grueling" ở đoạn 2 có nghĩa là cực kỳ gian khổ, nặng nhọc = Arduous.',
  24: 'Tác giả KHÔNG đồng ý với nhận định D: y học cá nhân hóa không chỉ dựa vào dữ liệu gen để chữa khỏi hoàn toàn mà còn tính đến lối sống, hệ vi sinh vật và thói quen sinh hoạt hằng ngày.',
  25: 'Từ "undermining" (làm suy yếu, hủy hoại) có từ TRÁI NGHĨA là "Bolstering" (củng cố, tăng cường, gia cố sức mạnh).',
  26: 'Ở đoạn 4 tác giả chỉ rõ hạn chế về dữ liệu chủng tộc: "A disproportionate number of genomic studies lean heavily on individuals of European descent..." (phần lớn nghiên cứu gen thiên lệch về người gốc châu Âu).',
  27: 'Ở đoạn 1, tác giả đang giải thích cách thức việc điều chỉnh vi khuẩn đường ruột cung cấp thông tin định hướng cho các phác đồ điều trị ung thư.',
  28: 'Câu gạch chân nhấn mạnh ung thư học hiện đại không dùng phác đồ đại trà mà điều chỉnh liệu pháp theo dấu ấn sinh học riêng của từng người ➔ Khớp hoàn toàn với C: "Contemporary cancer care eschews generalized methods in favor of treatments customized to individual genetic profiles".',
  29: 'Từ "those" ở đoạn 3 thay thế cho "Genetic markers" (các dấu ấn di truyền cảnh báo độc tính của thuốc).',
  30: 'Ở đoạn 3, tác giả nói về lĩnh vực dược lý di truyền (pharmacogenomics) đối chiếu đơn thuốc với đặc điểm di truyền của bệnh nhân để kiểm tra độ tương thích.',
  31: 'Thông tin A đúng theo đoạn 2: "Participation Income broadens the definition of productivity by adequately remunerating unpaid care and civic engagement..." (ghi nhận những đóng góp xã hội nằm ngoài các chỉ số việc làm truyền thống).',
  32: 'Đoạn 3 nhấn mạnh: Dịch vụ Cơ bản Phổ quát (UBS) vận động cung cấp tập thể các nhu yếu phẩm để giảm gánh nặng chi phí sinh hoạt cho người dân, từ đó giảm quy mô trợ cấp tiền mặt cần thiết. Đáp án B.',
  33: 'Đại từ "they" ở đoạn 2 chỉ "households" (các hộ gia đình).',
  34: 'Tiêu đề toàn diện và sâu sắc nhất cho bài đọc: Rethinking Livelihoods: The Case for Post-Work Guarantees (Tái tư duy sinh kế: Lập luận cho các đảm bảo sau việc làm).',
  35: 'Câu cần chèn nói về việc loại bỏ mối đe dọa đột ngột cắt trợ cấp để khuyến khích dịch chuyển kinh tế, phù hợp nhất với vị trí [II] ngay sau khi nhắc đến "benefit cliff".',
  36: 'Suy luận từ đoạn 3: Tính khả thi tài chính của một khoản thu nhập cơ bản tỷ lệ nghịch với chất lượng và tính sẵn có của các dịch vụ công cộng. Đáp án D.',
  37: 'Theo đoạn 1, mục tiêu cốt lõi của post-work guarantees là bảo đảm một nền tảng chuẩn mức sống không thể xâm phạm cho mọi công dân. Đáp án D.',
  38: 'Kết luận từ đoạn 2: Loại bỏ các điều kiện ràng buộc khắt khe của phúc lợi truyền thống giúp giảm bớt bẫy nghèo đói và công nhận nhiều dạng giá trị cống hiến cho xã hội. Đáp án A.',
  39: 'Từ "alleviate" (làm giảm nhẹ bớt) có từ TRÁI NGHĨA là "exacerbate" (làm trầm trọng thêm, làm tồi tệ hơn).',
  40: 'Đoạn 4 KHÔNG hề ngụ ý rằng các đảm bảo này sẽ dẫn đến sự sụt giảm nghiêm trọng năng suất quốc gia. Đáp án D.'
};

// HSG 2 Metadata & Explanations
const hsg2_answers = {
  1: 'B', 2: 'C', 3: 'D', 4: 'A', 5: 'C', 6: 'D', 7: 'D', 8: 'D', 9: 'D', 10: 'C',
  11: 'B', 12: 'D', 13: 'D', 14: 'C', 15: 'A', 16: 'B', 17: 'C', 18: 'B', 19: 'D', 20: 'A',
  21: 'B', 22: 'A', 23: 'D', 24: 'B', 25: 'A', 26: 'C', 27: 'C', 28: 'A', 29: 'C', 30: 'B',
  31: 'A', 32: 'C', 33: 'D', 34: 'B', 35: 'A', 36: 'B', 37: 'C', 38: 'B', 39: 'A', 40: 'A'
};

const hsg2_explanations = {
  1: 'Rút gọn mệnh đề quan hệ dạng bị động (which was published): "a recent study published in a medical journal...".',
  2: 'Dấu hiệu "Over the past year" đi với thì Hiện tại hoàn thành: "experts have found that...".',
  3: 'Cụm động từ "block out" có nghĩa là chặn lại, ngăn không cho xâm nhập (block out negative thoughts: loại bỏ các suy nghĩ tiêu cực).',
  4: 'Cấu trúc "commit to sth" (cam kết kiên trì gắn bó với việc thực hành thiền).',
  5: 'Cần danh từ: "concentration" (sự tập trung tinh thần thực thụ).',
  6: 'Cụm danh từ: "mental health" (sức khỏe tinh thần của bạn).',
  7: 'Cấu trúc đối chiếu: "some prefer ... while others visit..." (một số người thích ... trong khi những người khác lại...).',
  8: 'Liên từ trạng từ chỉ sự tương phản: "However, you must wait several days for shipping..." (Tuy nhiên, bạn phải chờ đợi vài ngày để giao hàng).',
  9: 'Cấu trúc so sánh hơn với tính từ ngắn được nhấn mạnh bởi "much": "much faster than ordering online".',
  10: 'Động từ khuyết thiếu đưa ra lời khuyên thận trọng: "You should be cautious...".',
  11: 'Thành ngữ cố định: "make up one\'s mind" (đưa ra quyết định rõ ràng về ngân sách).',
  12: 'Tính từ miêu tả trải nghiệm tốt nhất: "optimal shopping experience" (trải nghiệm mua sắm tối ưu).',
  13: 'Trật tự đoạn văn về rác thải nhựa đại dương: d (Câu chủ đề: Loại bỏ nhựa dùng 1 lần là thiết yếu bảo vệ đại dương) ➔ a (Chất thải nhựa nguy hại đe dọa sinh vật biển) ➔ c (Ứng dụng giải pháp thay thế giảm lượng khí thải) ➔ b (Ngược lại phớt lờ sẽ dẫn đến thảm họa sinh thái) ➔ e (Kết luận kêu gọi hành động sống xanh). Đáp án D: d - a - c - b - e.',
  14: 'Trật tự hội thoại về thị giác robot: c (Oliver hỏi về việc nghiên cứu thị giác robot) ➔ a (Charlotte giải thích dùng AI xử lý hình ảnh như mắt người) ➔ e (Oliver hiểu ra điều đó giúp robot di chuyển an toàn không va chạm) ➔ b (Charlotte bổ sung robot nhận diện vật thể nhanh sẽ hữu ích hơn) ➔ d (Oliver háo hức chờ ngày robot vào đời sống). Đáp án C: c - a - e - b - d.',
  15: 'Trật tự bức thư đề xuất chuyến đi Cúc Phương: d (Mục đích đề xuất tour sinh thái đi Rừng Cúc Phương cuối tháng) ➔ b (Cơ hội khám phá đa dạng sinh học và bảo vệ động vật quý) ➔ c (Học sinh đi bộ đường rừng ngắm cây cổ thụ ngàn năm) ➔ a (Kế hoạch mua quà thủ công ủng hộ kinh tế địa phương) ➔ e (Mong cô phê duyệt chuyến đi bổ ích). Đáp án A: d - b - c - a - e.',
  16: 'Trật tự đoạn văn về chi phí phát triển AI: e (Phát triển mô hình AI đòi hỏi nguồn vốn khổng lồ) ➔ c (Thừa nhận các sáng chế AI giải quyết bài toán kinh doanh phức tạp) ➔ b (Tuy nhiên chi phí điện toán khổng lồ vẫn là rào cản) ➔ d (Hơn nữa nhiều startup AI chật vật tìm kiếm lợi nhuận) ➔ a (Vì thế công ty công nghệ phải quản trị chi phí chặt chẽ). Đáp án B: e - c - b - d - a.',
  17: 'Trật tự hội thoại về học viện đào tạo ngôi sao nhạc pop: b (Liam hỏi về học viện pop mới tại Singapore) ➔ c (Olivia hào hứng kể học sinh được học vũ đạo và hợp tác nghệ sĩ quốc tế) ➔ a (Liam khen ngợi cách chuẩn bị đầy sáng tạo cho thế hệ hitmaker). Đáp án C: b - c - a.',
  18: 'Cấu trúc đảo ngữ nhấn mạnh tính từ: "Equally significant was the widespread availability of affordable smartphones globally".',
  19: 'Mệnh đề quan hệ không xác định bổ nghĩa cho cả sự việc: "which naturally gives rise to new forms of cultural expression".',
  20: 'Trật tự từ chuẩn ngữ pháp: "This mechanism highlights compelling content that broadens our intellectual horizons daily". (Các phương án B, C, D đều bị đảo lộn trật tự từ vô nghĩa).',
  21: 'Cấu trúc giả định với recommend: "recommend that schools should implement comprehensive media literacy programs".',
  22: 'Trật tự từ chuẩn xác: "In addition to this, both users and policymakers must remain exceptionally vigilant".',
  23: 'Ở đoạn 3, tác giả vạch trần chiêu trò kế toán khai báo chi tiêu nội bộ cho người tị nạn như viện trợ nước ngoài để thổi phồng số liệu trên giấy tờ: Paragraph 3.',
  24: 'Ở đoạn 4, tác giả nêu các ví dụ cụ thể của các nước châu Âu cắt giảm viện trợ đối lập với các nước Bắc Âu như Na Uy duy trì ngân sách viện trợ: Paragraph 4.',
  25: 'Ở đoạn 1, tác giả chỉ trích sự thiển cận khi cắt giảm ngân sách ODA chỉ để thu lợi ích tài chính tạm thời trước mắt: Đáp án A.',
  26: 'Từ "retrenchment" (sự cắt giảm chi tiêu, thu hẹp ngân sách) có từ TRÁI NGHĨA là "Expansion" (sự mở rộng, gia tăng quy mô).',
  27: 'Từ "concessional" (ưu đãi, lãi suất thấp hơn thị trường) có nghĩa GẦN NHẤT với "Advantageous" (có lợi, ưu đãi).',
  28: 'Tác giả KHÔNG đồng ý với nhận định A vì ở đoạn 4 tác giả khẳng định việc viện trợ không chỉ phụ thuộc vào quy mô giàu nghèo kinh tế mà phụ thuộc vào ý chí chính trị đoàn kết quốc tế.',
  29: 'Cụm từ "the latter" ở đoạn 3 đề cập đến vế thứ hai được nhắc đến: "Allocating 0.7 percent of gross national income" (mức phân bổ 0.7% thu nhập quốc dân cho viện trợ).',
  30: 'Câu gạch chân diễn đạt: Dù hỗ trợ người tị nạn là quan trọng, nhưng việc tính chi tiêu nội bộ này vào ODA làm cạn kiệt ngân sách xóa đói giảm nghèo ở nước ngoài và thổi phồng mức độ hào phóng của nhà tài trợ ➔ Khớp hoàn toàn với B.',
  31: 'Từ "it" ở đoạn 3 thay thế cho "Such a levy" (chính sách đánh thuế lao động robot).',
  32: 'Đoạn 4 KHÔNG hề ngụ ý rằng khả năng phục hồi kinh tế hoàn toàn phụ thuộc vào việc áp dụng thuế robot. Đáp án C.',
  33: 'Theo đoạn 2, những người ủng hộ tin rằng thuế robot sẽ tạo nguồn lực tài chính hỗ trợ đào tạo lại người lao động và làm chậm lại các cú sốc chuyển dịch công nghệ đột ngột. Đáp án D.',
  34: 'Thông tin B đúng theo đoạn 4: Điều chỉnh các mức thuế doanh nghiệp hiện hành được xem là giải pháp tiềm năng thay thế cho sắc thuế riêng đánh vào máy móc.',
  35: 'Tiêu đề toàn diện nhất: The Automation Dilemma: Weighing the Costs and Alternatives of a Robot Tax (Thế tiến thoái lưỡng nan của tự động hóa: Cân nhắc chi phí và giải pháp thay thế thuế robot).',
  36: 'Suy luận từ bài: Việc thiết kế thuế tự động hóa hiệu quả đòi hỏi phải giải quyết được những mơ hồ về định nghĩa để tránh tác dụng phụ tiêu cực cho nền kinh tế. Đáp án B.',
  37: 'Câu cần chèn ("Without clear guidelines, tax authorities would struggle...") bổ nghĩa trực tiếp cho việc định nghĩa robot mơ hồ tạo nên ác mộng pháp lý ở vị trí [III].',
  38: 'Tóm tắt chuẩn xác đoạn 3: Những người phản đối chỉ ra thách thức trong việc định nghĩa tự động hóa và cảnh báo thuế quá nặng sẽ đẩy doanh nghiệp dời đi nơi khác. Đáp án B.',
  39: 'Kết luận từ đoạn 2: Thuế tự động hóa nếu áp dụng khéo léo có thể xoa dịu sự xáo trộn lực lượng lao động nhờ cung cấp cả nguồn lực tài chính lẫn thời gian thích nghi. Đáp án A.',
  40: 'Từ "stringent" (nghiêm ngặt, khắt khe) có từ TRÁI NGHĨA là "Relaxed" (nới lỏng, thoải mái). Đáp án A.'
};

// HSG 3 Metadata & Explanations
const hsg3_answers = {
  1: 'A', 2: 'D', 3: 'D', 4: 'D', 5: 'C', 6: 'C', 7: 'C', 8: 'A', 9: 'D', 10: 'C',
  11: 'D', 12: 'A', 13: 'B', 14: 'D', 15: 'B', 16: 'A', 17: 'A', 18: 'A', 19: 'B', 20: 'B',
  21: 'C', 22: 'A', 23: 'B', 24: 'C', 25: 'C', 26: 'D', 27: 'A', 28: 'C', 29: 'C', 30: 'B',
  31: 'D', 32: 'B', 33: 'D', 34: 'D', 35: 'B', 36: 'A', 37: 'B', 38: 'B', 39: 'A', 40: 'C'
};

const hsg3_explanations = {
  1: 'Hành động đang diễn ra trong quá khứ ("last month"): "While I was attending a fascinating seminar...".',
  2: 'Rút gọn mệnh đề quan hệ dạng bị động (which are provided): "online courses provided by top-tier global universities...".',
  3: 'Cụm danh từ: "overcome geographical barriers" (vượt qua các rào cản địa lý).',
  4: 'Động từ mang nghĩa nâng cao, cải thiện: "improve your interpersonal communication skills".',
  5: 'Cụm động từ "take up" có nghĩa là bắt đầu tham gia một sở thích/lớp học mới ("take up a new hobby class").',
  6: 'Cần tính từ bổ nghĩa cho danh từ "learner": "highly successful lifelong learner" (người học tập suốt đời thành công).',
  7: 'Thành ngữ cố định: "tip of the iceberg" (phần nổi của tảng băng chìm).',
  8: 'Cấu trúc so sánh kép: "the younger the donor is, the more severe the long-term health risks become...".',
  9: 'Đi với danh từ số nhiều đếm được "strict rules": "many strict rules".',
  10: 'Động từ khuyết thiếu diễn đạt quyền lợi có thể nhận được: "can also enjoy free lifetime health insurance...".',
  11: 'Tính từ miêu tả chế độ phúc lợi hào phóng, chu đáo: "generous healthcare benefits".',
  12: 'Liên từ chỉ nguyên nhân: "These changes are essential since they aim to expand..." (bởi vì chúng hướng tới...).',
  13: 'Trật tự hội thoại tuyển dụng AI: a (Jacob lưu ý nhà tuyển dụng dùng AI sàng lọc hồ sơ) ➔ c (Emily suy ra ứng viên phải chọn lọc từ khóa chuẩn để vượt qua phần mềm) ➔ b (Jacob khẳng định hiểu công cụ tuyển dụng số là thiết yếu để thăng tiến). Đáp án B: a - c - b.',
  14: 'Trật tự bức thư gửi Hội đồng học sinh: d (Báo động về lượng rác thải nhựa ở căng tin trường) ➔ a (Nêu thực trạng học sinh dùng cốc túi nhựa dùng 1 lần) ➔ b (Cảnh báo hậu quả ô nhiễm và phá hủy môi trường sống) ➔ c (Đề xuất chiến dịch xanh mang bình nước hộp cơm cá nhân) ➔ e (Kêu gọi hành động đặt thêm thùng rác tái chế). Đáp án D: d - a - b - c - e.',
  15: 'Trật tự đoạn văn về biến đổi khí hậu: e (Mở đầu: Trái Đất ấm lên gây ra nhiều hiện tượng thời tiết cực đoan) ➔ c (Nếu nhiệt độ tiếp tục tăng thì hạn hán lũ lụt sẽ xảy ra thường xuyên hơn) ➔ d (Nhiều cộng đồng dễ bị tổn thương sẽ phải gánh chịu hậu quả) ➔ a (Bổ sung việc cần nhanh chóng dập tắt cháy rừng) ➔ b (Kết luận các quốc gia cần hành động ngay). Đáp án B: e - c - d - a - b.',
  16: 'Trật tự đoạn văn về văn học tiểu sử lịch sử: c (Câu chủ đề: Tìm hiểu thành tựu của danh nhân mang lại động lực sâu sắc cho giới trẻ) ➔ d (Phân tích khó khăn của họ giúp học sinh hiểu giá trị của sự kiên trì) ➔ b (Những câu chuyện đời này là ngọn đèn soi sáng con đường học tập) ➔ a (Hơn nữa giúp thanh thiếu niên xây dựng bản sắc văn hóa) ➔ e (Kết luận đưa văn học tiểu sử vào chương trình giảng dạy mang lại lợi ích to lớn). Đáp án A: c - d - b - a - e.',
  17: 'Trật tự hội thoại về nghề hát Opera: c (Levi đọc bài báo về việc thiếu giọng nam cao trong opera và thấy nghề này quá khó) ➔ e (Evelyn đồng tình opera đòi hỏi nhiều năm khổ luyện mà khó kiếm sống) ➔ b (Levi đoán ca sĩ trẻ chọn nhạc pop vì mau nổi tiếng và kiếm nhiều tiền hơn) ➔ a (Evelyn công nhận phải cực kỳ đam mê mới theo trọn đời) ➔ d (Levi băn khoăn làm sao ngành cổ điển tìm kiếm tài năng mới). Đáp án A: c - e - b - a - d.',
  18: 'Cấu trúc chuẩn chủ ngữ giả định: "It is fascinating to examine how this craft evolved".',
  19: 'Cấu trúc câu hoàn chỉnh SVO với mệnh đề quan hệ: "The dedicated artists who committed their time to this profession thrived".',
  20: 'Mệnh đề đối lập chuẩn ngữ pháp: "However, the traditional elite initially dismissed these prints as cheap novelties" (Tuy nhiên tầng lớp tinh hoa truyền thống ban đầu bác bỏ tranh khắc gỗ như đồ chơi rẻ tiền).',
  21: 'Mệnh đề nguyên nhân kết quả chuẩn ngữ pháp: "so we instead embraced mechanical reproduction to meet this need".',
  22: 'Câu kết luận mạch lạc chuẩn ngữ pháp: "Therefore, this technological leap successfully democratized education across the continent".',
  23: 'Ở đoạn 4 tác giả chỉ ra động lực tài chính khi chi phí nông dược tăng vọt khiến nông dân phải áp dụng hệ thống bón phân biến thiên để thắt lưng buộc bụng: Paragraph 4.',
  24: 'Ở đoạn 3 tác giả mô tả công nghệ thế hệ mới gắn cảm biến trực tiếp vào máy móc để đo đạc và xử lý ngay tại chỗ mà không cần bản đồ số lập trình sẵn: Paragraph 3.',
  25: 'Từ "These" ở đoạn 3 thay thế cho các hệ thống công nghệ chính xác tiên tiến: "Advanced precision technologies".',
  26: 'Từ "uniform" (đồng nhất, đơn điệu, giống nhau một khuôn) có từ TRÁI NGHĨA là "Heterogeneous" (đa dạng, không đồng nhất, hỗn hợp nhiều thành phần).',
  27: 'Tác giả KHÔNG đồng ý với nhận định A vì đoạn 4 nêu rõ: cơ giới hóa ban đầu tuy giảm chi phí nhân công nhưng làm tổn hại nghiêm trọng đến hiệu quả sử dụng vật tư đầu vào.',
  28: 'Câu gạch chân khẳng định: Việc ra quyết định dựa chắc chắn vào dữ liệu thực nghiệm thay vì phỏng đoán, bảo đảm các biện pháp can thiệp đồng bộ chính xác với vị trí máy móc ➔ Khớp hoàn toàn với C.',
  29: 'Từ "gauge" (đo đạc, định lượng, đánh giá) có nghĩa GẦN NHẤT với "Evaluate" (đánh giá).',
  30: 'Ở đoạn 1, tác giả nêu bật các nhược điểm về sinh thái và tài chính của phương pháp canh tác đồng loạt truyền thống: Đáp án B.',
  31: 'Thông tin D đúng theo đoạn 3: Việc tích hợp phản hồi của người dân vào mô hình số chuyển đổi việc ra quyết định quản trị đô thị từ trực giác cảm tính sang các căn cứ thực nghiệm nghiêm ngặt.',
  32: 'Đại từ "they" ở đoạn 3 thay thế cho "Administrators" (các nhà quản lý đô thị).',
  33: 'Tóm tắt đoạn 3: Nhờ dựa vào chứng cứ thực nghiệm và ý kiến cộng đồng, bản sao số nâng cao trách nhiệm giải trình và đảm bảo các mô hình phản ánh sát thực tế. Đáp án D.',
  34: 'Suy luận từ bài đọc: Việc mở rộng tiếp cận các mô hình mô phỏng đô thị thúc đẩy cơ chế đồng quản trị, giảm thiểu đáng kể nguy cơ ra quyết định đơn phương. Đáp án D.',
  35: 'Theo đoạn 1, digital twins cho phép các bên liên quan đánh giá trước tác động của các chính sách đô thị trước khi tiến hành xây dựng trên thực tế. Đáp án B.',
  36: 'Tiêu đề phù hợp và giàu tính học thuật nhất: Virtual Replicas and Civic Voices: Deducting New Eras of Urban Governance (Bản sao ảo và tiếng nói công dân: Định hình kỷ nguyên mới của quản trị đô thị).',
  37: 'Từ "reckless" (bốc đồng, liều lĩnh, thiếu cân nhắc) có từ TRÁI NGHĨA là "Prudent" (thận trọng, cẩn trọng, khôn ngoan). Đáp án B.',
  38: 'Câu cần chèn ("This localized insight acts as a vital corrective mechanism...") bổ nghĩa trực tiếp cho việc đưa trải nghiệm sống của người dân vào mô hình tại vị trí [II].',
  39: 'Kết luận từ đoạn 4: Quy hoạch đô thị minh bạch dựa trên bằng chứng củng cố mạnh mẽ sự gắn kết xã hội và niềm tin giữa chính quyền thành phố và người dân. Đáp án A.',
  40: 'Đoạn 2 KHÔNG hề ngụ ý rằng người dân phải sở hữu kỹ năng kỹ thuật nâng cao mới có thể tham gia vào bảng điều khiển tương tác. Đáp án C.'
};

// Generic Section structure for HSG
function createHsgSections(idPrefix, testNum) {
  return [
    {
      id: `${idPrefix}-sec-1`,
      title: 'I. LEAFLET & ANNOUNCEMENT CLOZE (QUESTIONS 1 - 6)',
      instruction: 'Read the following announcement/leaflet and mark the letter A, B, C or D on your answer sheet to indicate the option that best fits each of the numbered blanks from 1 to 6.',
      questionIndices: [1, 2, 3, 4, 5, 6]
    },
    {
      id: `${idPrefix}-sec-2`,
      title: 'II. SHORT COMMUNICATION & NOTICE (QUESTIONS 7 - 12)',
      instruction: 'Read the following announcement/leaflet and mark the letter A, B, C or D on your answer sheet to indicate the option that best fits each of the numbered blanks from 7 to 12.',
      questionIndices: [7, 8, 9, 10, 11, 12]
    },
    {
      id: `${idPrefix}-sec-3`,
      title: 'III. COHESION & COHERENCE - ARRANGEMENT (QUESTIONS 13 - 17)',
      instruction: 'Mark the letter A, B, C or D on your answer sheet to indicate the best arrangement of utterances or sentences to make a cohesive and coherent exchange or text.',
      questionIndices: [13, 14, 15, 16, 17]
    },
    {
      id: `${idPrefix}-sec-4`,
      title: 'IV. PASSAGE CLOZE (QUESTIONS 18 - 22)',
      instruction: 'Read the following passage and mark the letter A, B, C or D on your answer sheet to indicate the option that best fits each of the numbered blanks from 18 to 22.',
      questionIndices: [18, 19, 20, 21, 22]
    },
    {
      id: `${idPrefix}-sec-5`,
      title: 'V. READING COMPREHENSION 1 (QUESTIONS 23 - 30)',
      instruction: 'Read the passage and mark the letter A, B, C or D on your answer sheet to indicate the best answer to each of the questions from 23 to 30.',
      questionIndices: [23, 24, 25, 26, 27, 28, 29, 30]
    },
    {
      id: `${idPrefix}-sec-6`,
      title: 'VI. READING COMPREHENSION 2 (QUESTIONS 31 - 40)',
      instruction: 'Read the passage and mark the letter A, B, C or D on your answer sheet to indicate the best answer to each of the questions from 31 to 40.',
      questionIndices: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
    }
  ];
}

function getHsgSectionId(idPrefix, num) {
  if (num <= 6) return `${idPrefix}-sec-1`;
  if (num <= 12) return `${idPrefix}-sec-2`;
  if (num <= 17) return `${idPrefix}-sec-3`;
  if (num <= 22) return `${idPrefix}-sec-4`;
  if (num <= 30) return `${idPrefix}-sec-5`;
  return `${idPrefix}-sec-6`;
}

// Build HSG 1, 2, 3
const hsg1_meta = {
  prefix: 'l12-hsg-01',
  info: {
    id: 'de-thi-thu-hsg-lop-12-test-01',
    title: 'Đề Thi Thử Học Sinh Giỏi & Tốt Nghiệp THPT Lớp 12 - Test 01 (Bộ Đề Chuẩn Cấu Trúc 2026)',
    description: 'Đề thi chuẩn cấu trúc Bộ GD&ĐT gồm 40 câu hỏi phân hóa cao: Thông báo khuyết từ, Giao tiếp ngắn, Sắp xếp đoạn văn logic, Điền cụm từ vào bài đọc, và 2 Bài đọc hiểu chuyên sâu (Personalized Medicine & Post-Work Guarantees).',
    subject: 'Tiếng Anh',
    category: 'Ôn thi HSG',
    categories: ['Ôn thi HSG', 'Ôn thi đại học'],
    grade: 'Lớp 12',
    durationMinutes: 50,
    originalFileName: 'TEST 01 HSG- A. ORIGINAL.docx',
    status: 'ready',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ['Tiếng Anh 12', 'Lớp 12', 'Ôn thi HSG', 'Ôn thi đại học', 'Bộ đề chuẩn cấu trúc', 'Test 01']
  },
  sections: createHsgSections('l12-hsg-01', 1),
  getSectionId: (num) => getHsgSectionId('l12-hsg-01', num),
  answers: hsg1_answers,
  explanations: hsg1_explanations
};

const hsg2_meta = {
  prefix: 'l12-hsg-02',
  info: {
    id: 'de-thi-thu-hsg-lop-12-test-02',
    title: 'Đề Thi Thử Học Sinh Giỏi & Tốt Nghiệp THPT Lớp 12 - Test 02 (Bộ Đề Chuẩn Cấu Trúc 2026)',
    description: 'Đề thi chuẩn cấu trúc gồm 40 câu hỏi phân hóa cao: Lợi ích thiền định, Mua sắm smartphone, Sắp xếp câu/thư kiến nghị sinh thái, Mạng xã hội & Buồng vang số, và 2 Bài đọc hiểu chuyên sâu (Official Development Assistance & Robot Tax Dilemma).',
    subject: 'Tiếng Anh',
    category: 'Ôn thi HSG',
    categories: ['Ôn thi HSG', 'Ôn thi đại học'],
    grade: 'Lớp 12',
    durationMinutes: 50,
    originalFileName: 'TEST 02 HSG- A. ORIGINAL.docx',
    status: 'ready',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ['Tiếng Anh 12', 'Lớp 12', 'Ôn thi HSG', 'Ôn thi đại học', 'Bộ đề chuẩn cấu trúc', 'Test 02']
  },
  sections: createHsgSections('l12-hsg-02', 2),
  getSectionId: (num) => getHsgSectionId('l12-hsg-02', num),
  answers: hsg2_answers,
  explanations: hsg2_explanations
};

const hsg3_meta = {
  prefix: 'l12-hsg-03',
  info: {
    id: 'de-thi-thu-hsg-lop-12-test-03',
    title: 'Đề Thi Thử Học Sinh Giỏi & Tốt Nghiệp THPT Lớp 12 - Test 03 (Bộ Đề Chuẩn Cấu Trúc 2026)',
    description: 'Đề thi chuẩn cấu trúc gồm 40 câu hỏi phân hóa cao: Học tập suốt đời, Hiến tạng nhân đạo, Sắp xếp văn bản học thuật/văn học tiểu sử, Tranh khắc gỗ thời Phục Hưng, và 2 Bài đọc hiểu chuyên sâu (Nông nghiệp chính xác SSM & Digital Twin Urban Governance).',
    subject: 'Tiếng Anh',
    category: 'Ôn thi HSG',
    categories: ['Ôn thi HSG', 'Ôn thi đại học'],
    grade: 'Lớp 12',
    durationMinutes: 50,
    originalFileName: 'TEST 03 HSG- A. ORIGINAL.docx',
    status: 'ready',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ['Tiếng Anh 12', 'Lớp 12', 'Ôn thi HSG', 'Ôn thi đại học', 'Bộ đề chuẩn cấu trúc', 'Test 03']
  },
  sections: createHsgSections('l12-hsg-03', 3),
  getSectionId: (num) => getHsgSectionId('l12-hsg-03', num),
  answers: hsg3_answers,
  explanations: hsg3_explanations
};

// ==========================================
// 4. TIẾN HÀNH BUILD TOÀN BỘ 7 ĐỀ THI
// ==========================================
console.log('--- Đang parse Lớp 11 Unit 1 & Unit 2 ---');
const examL11U1 = parseU11('u11_1.txt', u11_1_meta);
const examL11U2 = parseU11('u11_2.txt', u11_2_meta);

console.log('--- Đang parse Lớp 12 HSG Test 01, 02, 03 ---');
const examL12Hsg1 = parseHsg('hsg_1.txt', hsg1_meta);
const examL12Hsg2 = parseHsg('hsg_2.txt', hsg2_meta);
const examL12Hsg3 = parseHsg('hsg_3.txt', hsg3_meta);

const allExams = [
  examUnit1,
  examUnit2,
  examL11U1,
  examL11U2,
  examL12Hsg1,
  examL12Hsg2,
  examL12Hsg3
];

// ==========================================
// 5. GHI FILE ĐÁP ÁN VÀO TỪNG THƯ MỤC dap-an/
// ==========================================
function exportAnswerKeyFile(examObj, targetDir) {
  let content = `BẢNG ĐÁP ÁN VÀ HƯỚNG DẪN GIẢI CHI TIẾT\n`;
  content += `Môn: ${examObj.subject} - ${examObj.grade}\n`;
  content += `Tên đề: ${examObj.title}\n`;
  content += `Thời gian làm bài: ${examObj.durationMinutes} phút | Tổng số câu: ${examObj.totalQuestions} câu\n`;
  content += `Trích xuất từ: ${examObj.originalFileName}\n`;
  content += `================================================================================\n\n`;

  content += `I. BẢNG TỔNG HỢP ĐÁP ÁN\n`;
  content += `--------------------------------------------------------------------------------\n`;
  for (let i = 0; i < examObj.questions.length; i += 5) {
    const chunk = examObj.questions.slice(i, i + 5);
    content += chunk.map(q => `Câu ${String(q.index).padStart(2, ' ')}: ${q.correctAnswer}`).join('    |    ') + '\n';
  }
  content += `--------------------------------------------------------------------------------\n\n`;

  content += `II. HƯỚNG DẪN GIẢI CHI TIẾT TỪNG CÂU\n`;
  content += `================================================================================\n\n`;
  examObj.questions.forEach(q => {
    content += `Câu ${q.index}: [Đáp án đúng: ${q.correctAnswer}]\n`;
    content += `Nội dung: ${q.questionText}\n`;
    if (q.options && q.options.length > 0) {
      q.options.forEach(opt => {
        const marker = (opt.id === q.correctAnswer) ? '(*)' : '   ';
        content += `  ${marker} ${opt.id}. ${opt.text}\n`;
      });
    }
    content += `Giải thích: ${q.explanation}\n`;
    content += `--------------------------------------------------------------------------------\n\n`;
  });

  const outFilePath = path.join(targetDir, 'DAP_AN_CHI_TIET.txt');
  fs.writeFileSync(outFilePath, content, 'utf8');
  console.log(`Đã xuất đáp án chi tiết: ${outFilePath}`);
}

// Xuất đáp án cho 7 đề vào đúng folder
exportAnswerKeyFile(examUnit1, path.join(EXAM_BASE, 'Lop 12', 'On thi giua ki 1', 'Unit 1 - Life Stories', 'dap-an'));
exportAnswerKeyFile(examUnit2, path.join(EXAM_BASE, 'Lop 12', 'On thi giua ki 1', 'Unit 2 - A Multicultural World', 'dap-an'));
exportAnswerKeyFile(examL11U1, path.join(EXAM_BASE, 'Lop 11', 'On thi giua ki 1', 'Unit 1 - A Long and Healthy Life', 'dap-an'));
exportAnswerKeyFile(examL11U2, path.join(EXAM_BASE, 'Lop 11', 'On thi giua ki 1', 'Unit 2 - Generation Gap', 'dap-an'));
exportAnswerKeyFile(examL12Hsg1, path.join(EXAM_BASE, 'Lop 12', 'On thi HSG', 'Test 01 - Bo de chuan cau truc', 'dap-an'));
exportAnswerKeyFile(examL12Hsg2, path.join(EXAM_BASE, 'Lop 12', 'On thi HSG', 'Test 02 - Bo de chuan cau truc', 'dap-an'));
exportAnswerKeyFile(examL12Hsg3, path.join(EXAM_BASE, 'Lop 12', 'On thi HSG', 'Test 03 - Bo de chuan cau truc', 'dap-an'));

// ==========================================
// 6. GHI VÀO SRC/DATA/EXAMS.JSON
// ==========================================
const examsJsonPath = path.join(__dirname, '..', 'src', 'data', 'exams.json');
fs.writeFileSync(examsJsonPath, JSON.stringify(allExams, null, 2), 'utf8');
console.log(`\nĐã xuất bản thành công ${allExams.length} đề thi vào ${examsJsonPath}`);

console.log('\nDANH SÁCH 7 ĐỀ THI ĐÃ NẠP VÀO HỆ THỐNG:');
allExams.forEach((e, i) => {
  console.log(`${i + 1}. [${e.grade}] [${e.categories.join(' / ')}] - ${e.title} (${e.totalQuestions} câu, ${e.durationMinutes} phút)`);
});
