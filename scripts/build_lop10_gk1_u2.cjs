const fs = require('fs');
const path = require('path');

/**
 * XÂY DỰNG 2 ĐỀ CƯƠNG ÔN TẬP GIỮA KÌ 1 LỚP 10 (TEST 1 & TEST 2 - UNIT 2: HUMANS AND THE ENVIRONMENT)
 * Nguồn: Trường THPT Nguyễn Dục - Sở GD&ĐT TP. Đà Nẵng (Năm học 2026 - 2027)
 * Đầy đủ phần Trắc nghiệm, Bài đọc hiểu, Đục lỗ, Sắp xếp câu và Phần TỰ LUẬN HỌC SINH TỰ GÕ CÂU (text_input).
 */

// ============================================================================
// ĐỀ 1: TEST 1 - UNIT 2: HUMANS AND THE ENVIRONMENT
// ============================================================================
const test1Sections = [
  {
    id: 'sec-l10-u2-t1-1',
    title: 'I. LANGUAGE',
    instruction: 'Mark the letter A, B, C, or D on your answer sheet to indicate the correct answer to each of the following questions.',
    questionIndices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  {
    id: 'sec-l10-u2-t1-2',
    title: 'II. READING - PART 1: CLOZE TEST',
    passageTitle: 'The Importance of Recycling in Today’s World',
    instruction: 'Read the following passage carefully and then choose the best option to fit each numbered blank (from 11 to 15).',
    passage: `Recycling is important in today’s world if we want to leave this planet for future generations. It is good for the environment (11) ___________ we are making new products from the old products which are of no use to us. Recycling begins at home. If you are not throwing (12) ___________ any of your old products and instead utilizing them for something new, then you are actually recycling.

When you think of recycling, you should really think about the whole idea: reduce, reuse and recycle. We’ve been careless up to this point with the way we've treated the Earth, and it’s time to change, not just the way we do things but the way we think. Recycling is good for the environment; in a sense, we are using old and waste products (13) ___________ are of no use and then converting them back to the same new products. Since we are saving resources and sending less trash to landfills, it helps in reducing air and water (14) ___________ .

With each passing day, the population is increasing. With that, the quantity of waste produced is also increasing manifolds. The more waste is produced, the more space is required to (15) ___________ this waste. Now, it must be remembered that the space available on earth is very limited, and it is obviously up to us to use it judiciously.
(Source: conserve-energy-future.com/importance_of_recycling.php)`,
    questionIndices: [11, 12, 13, 14, 15]
  },
  {
    id: 'sec-l10-u2-t1-3',
    title: 'II. READING - PART 2: READING COMPREHENSION',
    passageTitle: 'Soil Degradation and Its Threats to Human Life',
    instruction: 'Read the following passage and mark the letter A, B, C, or D on your answer sheet to indicate the correct answer to each of the questions.',
    passage: `More than a third of the world’s soil is endangered, according to a recent UN report. If we don’t slow the decline, all farmable soil could be gone in 60 years. Since soil grows 95% of our food, and sustains human life in other more surprising ways, that is a huge problem. A single gram of healthy soil might <u>contain</u> 100 million bacteria, as well as other microorganisms such as viruses and fungi, living amid decomposing plants and various minerals.

That means soils do not just grow our food, but are the source of nearly all our existing antibiotics, and could be our best hope in the fight against antibiotic-resistant bacteria. Soil is also an ally against climate change: as microorganisms within soil digest dead animals and plants, they lock in their carbon content, holding three times the amount of carbon as does the entire atmosphere. Soils also store water, preventing flood damage: in the UK, damage to buildings, roads and bridges from floods caused by soil degradation costs £233 million every year.

If the soil loses <u>its</u> ability to perform these functions, the human race could be in big trouble. The danger is not that the soil will disappear completely, but that the microorganisms that give it its special properties will be lost. And once this has happened, it may take the soil thousands of years to recover.
(Adapted from https://www.ieltsfighter.com)`,
    questionIndices: [16, 17, 18, 19, 20]
  },
  {
    id: 'sec-l10-u2-t1-4',
    title: 'III. WRITING - PART 1: SENTENCE ARRANGEMENT',
    instruction: 'Mark the letter A, B, C or D to indicate the best arrangement of utterances or sentences to make a meaningful exchange or text in each of the following questions.',
    questionIndices: [21, 22]
  },
  {
    id: 'sec-l10-u2-t1-5',
    title: 'III. WRITING - PART 2: TỰ LUẬN (SENTENCE TRANSFORMATION)',
    instruction: 'Rewrite each of the following sentences as long as the meaning is unchanged, using the given words. (Học sinh tự gõ câu viết lại vào ô trống bên dưới).',
    questionIndices: [23, 24, 25, 26]
  }
];

const test1Questions = [
  // SECTION 1: LANGUAGE (1 - 10)
  {
    index: 1,
    sectionId: 'sec-l10-u2-t1-1',
    type: 'single_choice',
    questionText: 'Mark the letter A, B, C, or D on your answer sheet to indicate the word that differs from the other three in the position of primary stress.',
    options: [
      { id: 'A', text: 'volleyball' },
      { id: 'B', text: 'appliance' },
      { id: 'C', text: 'recycle' },
      { id: 'D', text: 'polluted' }
    ],
    correctAnswer: 'A',
    explanation: 'volleyball có trọng âm rơi vào âm tiết thứ nhất (/ˈvɑːlibɔːl/), các từ còn lại có trọng âm rơi vào âm tiết thứ 2: appliance (/əˈplaɪəns/), recycle (/ˌriːˈsaɪkl/), polluted (/pəˈluːtɪd/).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 2,
    sectionId: 'sec-l10-u2-t1-1',
    type: 'single_choice',
    questionText: 'Mark the letter A, B, C, or D on your answer sheet to indicate the word that differs from the other three in the position of primary stress.',
    options: [
      { id: 'A', text: 'reduce' },
      { id: 'B', text: 'adopt' },
      { id: 'C', text: 'issue' },
      { id: 'D', text: 'protect' }
    ],
    correctAnswer: 'C',
    explanation: 'issue có trọng âm rơi vào âm tiết thứ nhất (/ˈɪʃuː/), các từ còn lại có trọng âm rơi vào âm tiết thứ 2: reduce (/rɪˈdjuːs/), adopt (/əˈdɑːpt/), protect (/prəˈtekt/).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 3,
    sectionId: 'sec-l10-u2-t1-1',
    type: 'single_choice',
    questionText: 'My bike _______ brown and red by my father.',
    options: [
      { id: 'A', text: 'repaints' },
      { id: 'B', text: 'repainted' },
      { id: 'C', text: 'was repainting' },
      { id: 'D', text: 'was repainted' }
    ],
    correctAnswer: 'D',
    explanation: 'Chủ ngữ "My bike" (chiếc xe đạp của tôi) là danh từ chỉ vật và có tác nhân thực hiện "by my father" nên câu phải chia ở thể bị động (was/were + V3/ed). Thì quá khứ đơn bị động: "was repainted".',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 4,
    sectionId: 'sec-l10-u2-t1-1',
    type: 'single_choice',
    questionText: 'I ____ my parents at the weekend. I already bought a train ticket.',
    options: [
      { id: 'A', text: 'visit' },
      { id: 'B', text: 'am going to visit' },
      { id: 'C', text: 'visited' },
      { id: 'D', text: 'will visit' }
    ],
    correctAnswer: 'B',
    explanation: 'Hành động trong tương lai đã có kế hoạch, dự định từ trước và có bằng chứng cụ thể ("I already bought a train ticket" - Tôi đã mua vé tàu rồi) nên dùng thì tương lai gần (be going to + V): "am going to visit".',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 5,
    sectionId: 'sec-l10-u2-t1-1',
    type: 'single_choice',
    questionText: 'In the UK, poor air quality is responsible ___________ some 40,000 deaths each year.',
    options: [
      { id: 'A', text: 'to' },
      { id: 'B', text: 'for' },
      { id: 'C', text: 'in' },
      { id: 'D', text: 'with' }
    ],
    correctAnswer: 'B',
    explanation: 'Cấu trúc cố định: "be responsible for sth" = chịu trách nhiệm về điều gì / là nguyên nhân gây ra cái gì.',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 6,
    sectionId: 'sec-l10-u2-t1-1',
    type: 'single_choice',
    questionText: 'In the ____ agriculture, farmers try to limit the use of chemicals and fertilizers.',
    options: [
      { id: 'A', text: 'sustainable' },
      { id: 'B', text: 'unsustainable' },
      { id: 'C', text: 'sustainability' },
      { id: 'D', text: 'sustainably' }
    ],
    correctAnswer: 'A',
    explanation: 'Trước danh từ "agriculture" cần một tính từ bổ nghĩa. "sustainable agriculture" (nền nông nghiệp bền vững) là nền nông nghiệp hạn chế dùng phân bón và hóa chất để bảo vệ đất và môi trường.',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 7,
    sectionId: 'sec-l10-u2-t1-1',
    type: 'single_choice',
    questionText: 'Remember to turn off your ___________when they are not used.',
    options: [
      { id: 'A', text: 'household chores' },
      { id: 'B', text: 'household appliances' },
      { id: 'C', text: 'household finance' },
      { id: 'D', text: 'invitations' }
    ],
    correctAnswer: 'B',
    explanation: '"household appliances" = các thiết bị gia dụng (đèn, quạt, tivi, tủ lạnh...). Động từ "turn off" (tắt) đi kèm phù hợp nhất với các thiết bị gia dụng khi không sử dụng để tiết kiệm năng lượng.',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 8,
    sectionId: 'sec-l10-u2-t1-1',
    type: 'single_choice',
    questionText: 'More people _________ a green lifestyle because it is good for the environment.',
    options: [
      { id: 'A', text: 'adopt' },
      { id: 'B', text: 'conclude' },
      { id: 'C', text: 'compose' },
      { id: 'D', text: 'create' }
    ],
    correctAnswer: 'A',
    explanation: 'Cụm từ cố định (collocation): "adopt a green lifestyle" = tiếp nhận / theo đuổi lối sống xanh thân thiện với môi trường.',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 9,
    sectionId: 'sec-l10-u2-t1-1',
    type: 'single_choice',
    questionText: 'Mark the letter A, B, C, or D on your answer sheet to indicate the word(s) CLOSEST in meaning to the underlined word(s): Walking or cycling are activities that can help reduce your carbon footprint and your <u>impact</u> on the environment.',
    options: [
      { id: 'A', text: 'advantage' },
      { id: 'B', text: 'consequence' },
      { id: 'C', text: 'effect' },
      { id: 'D', text: 'circumstance' }
    ],
    correctAnswer: 'C',
    explanation: 'Từ gạch chân "<u>impact</u>" có nghĩa là tác động, ảnh hưởng. Từ đồng nghĩa gần nhất là "effect" (tác động, ảnh hưởng). Advantage = lợi ích; consequence = hậu quả; circumstance = hoàn cảnh.',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 10,
    sectionId: 'sec-l10-u2-t1-1',
    type: 'single_choice',
    questionText: 'Mark the letter A, B, C, or D on your answer sheet to indicate the word(s) OPPOSITE in meaning to the underlined word(s): Bamboo is considered to be one of the most <u>eco-friendly</u> building materials.',
    options: [
      { id: 'A', text: 'ecologically friendly' },
      { id: 'B', text: 'not damaging to the natural environment' },
      { id: 'C', text: 'trying to help the environment' },
      { id: 'D', text: 'harmful to the environment' }
    ],
    correctAnswer: 'D',
    explanation: 'Từ gạch chân "<u>eco-friendly</u>" có nghĩa là thân thiện với môi trường sinh thái. Từ trái nghĩa là "harmful to the environment" (gây hại cho môi trường).',
    cognitiveLevel: 'Thông hiểu'
  },

  // SECTION 2: READING - PART 1: CLOZE TEST (11 - 15)
  {
    index: 11,
    sectionId: 'sec-l10-u2-t1-2',
    type: 'single_choice',
    questionText: 'It is good for the environment (11) ___________ we are making new products from the old products which are of no use to us.',
    options: [
      { id: 'A', text: 'Moreover' },
      { id: 'B', text: 'However' },
      { id: 'C', text: 'Since' },
      { id: 'D', text: 'but' }
    ],
    correctAnswer: 'C',
    explanation: 'Mệnh đề sau giải thích lý do cho mệnh đề trước ("Tại sao việc tái chế lại tốt cho môi trường? Vì chúng ta đang làm ra sản phẩm mới từ đồ cũ..."). Liên từ chỉ lý do phù hợp là "Since" (= Because/As).',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 12,
    sectionId: 'sec-l10-u2-t1-2',
    type: 'single_choice',
    questionText: 'If you are not throwing (12) ___________ any of your old products and instead utilizing them for something new, then you are actually recycling.',
    options: [
      { id: 'A', text: 'out' },
      { id: 'B', text: 'away' },
      { id: 'C', text: 'from' },
      { id: 'D', text: 'into' }
    ],
    correctAnswer: 'B',
    explanation: 'Cụm động từ: "throw away" = vứt đi, bỏ đi.',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 13,
    sectionId: 'sec-l10-u2-t1-2',
    type: 'single_choice',
    questionText: '...in a sense, we are using old and waste products (13) ___________ are of no use and then converting them back to the same new products.',
    options: [
      { id: 'A', text: 'that' },
      { id: 'B', text: 'what' },
      { id: 'C', text: 'where' },
      { id: 'D', text: 'who' }
    ],
    correctAnswer: 'A',
    explanation: 'Đại từ quan hệ thay thế cho danh từ chỉ vật "old and waste products" và đóng vai trò làm chủ ngữ cho mệnh đề quan hệ phía sau là "that" (hoặc "which").',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 14,
    sectionId: 'sec-l10-u2-t1-2',
    type: 'single_choice',
    questionText: 'Since we are saving resources and sending less trash to landfills, it helps in reducing air and water (14) ___________ .',
    options: [
      { id: 'A', text: 'polluted' },
      { id: 'B', text: 'pollute' },
      { id: 'C', text: 'pollutant' },
      { id: 'D', text: 'pollution' }
    ],
    correctAnswer: 'D',
    explanation: 'Sau tính từ "air and water" và động từ giảm bớt "reducing" cần một danh từ để tạo thành cụm danh từ "air and water pollution" (sự ô nhiễm không khí và nguồn nước).',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 15,
    sectionId: 'sec-l10-u2-t1-2',
    type: 'single_choice',
    questionText: 'The more waste is produced, the more space is required to (15) ___________ this waste.',
    options: [
      { id: 'A', text: 'entomb' },
      { id: 'B', text: 'burry' },
      { id: 'C', text: 'hide' },
      { id: 'D', text: 'dump' }
    ],
    correctAnswer: 'D',
    explanation: 'Động từ "dump this waste" = chôn lấp, đổ, thải rác này. "dump waste" là cụm từ chuyên dụng chỉ việc tập kết hoặc xả rác ra các bãi chôn lấp.',
    cognitiveLevel: 'Thông hiểu'
  },

  // SECTION 3: READING - PART 2: READING COMPREHENSION (16 - 20)
  {
    index: 16,
    sectionId: 'sec-l10-u2-t1-3',
    type: 'single_choice',
    questionText: 'According to the second paragraph, soil also helps fight against ________',
    options: [
      { id: 'A', text: 'antibiotic-resistant bacteria' },
      { id: 'B', text: 'climate change' },
      { id: 'C', text: 'antibiotics' },
      { id: 'D', text: 'dead animal and plants' }
    ],
    correctAnswer: 'B',
    explanation: 'Dẫn chứng ở đoạn 2: "Soil is also an ally against climate change: as microorganisms within soil digest dead animals and plants, they lock in their carbon content..." Đất cũng là một đồng minh giúp chống lại biến đổi khí hậu.',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 17,
    sectionId: 'sec-l10-u2-t1-3',
    type: 'single_choice',
    questionText: 'The word “<u>contain</u>” in the first paragraph is closest in meaning to ________',
    options: [
      { id: 'A', text: 'exist' },
      { id: 'B', text: 'live' },
      { id: 'C', text: 'raise' },
      { id: 'D', text: 'has' }
    ],
    correctAnswer: 'D',
    explanation: 'Trong ngữ cảnh "A single gram of healthy soil might contain 100 million bacteria", từ "<u>contain</u>" mang nghĩa là "chứa, có" (= has/holds).',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 18,
    sectionId: 'sec-l10-u2-t1-3',
    type: 'single_choice',
    questionText: 'According to the last paragraph, what is the main danger facing soil?',
    options: [
      { id: 'A', text: 'It will disappear completely from the Earth.' },
      { id: 'B', text: 'The microorganisms that give it its special properties will be lost.' },
      { id: 'C', text: 'It will no longer contain water.' },
      { id: 'D', text: 'It will produce fewer plants and animals.' }
    ],
    correctAnswer: 'B',
    explanation: 'Dẫn chứng ở đoạn cuối: "The danger is not that the soil will disappear completely, but that the microorganisms that give it its special properties will be lost." Mối nguy hiểm không phải là đất biến mất hoàn toàn, mà là các vi sinh vật mang lại các đặc tính đặc biệt cho đất sẽ bị mất đi.',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 19,
    sectionId: 'sec-l10-u2-t1-3',
    type: 'single_choice',
    questionText: 'The word “<u>its</u>” in the third paragraph refers to ________.',
    options: [
      { id: 'A', text: 'the human race' },
      { id: 'B', text: 'degradation’s' },
      { id: 'C', text: 'flood’s' },
      { id: 'D', text: 'soil’s' }
    ],
    correctAnswer: 'D',
    explanation: 'Đoạn 3 có câu: "If the soil loses <u>its</u> ability to perform these functions...", tính từ sở hữu "its" quy chiếu đến "the soil" (soil’s ability - khả năng của đất).',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 20,
    sectionId: 'sec-l10-u2-t1-3',
    type: 'single_choice',
    questionText: 'What is the main idea of the passage?',
    options: [
      { id: 'A', text: 'Soil degradation’s danger to the human race.' },
      { id: 'B', text: 'How bacteria as well as other microorganisms affect human life.' },
      { id: 'C', text: 'Soil’s important roles in human life.' },
      { id: 'D', text: 'What needs to be done to protect natural resources like soil.' }
    ],
    correctAnswer: 'A',
    explanation: 'Bài viết nhấn mạnh thực trạng thoái hóa đất (hơn 1/3 đất trên thế giới đang bị đe dọa) và cảnh báo nguy cơ nghiêm trọng của việc thoái hóa đất đối với sự sống còn của nhân loại ("that is a huge problem", "the human race could be in big trouble"). Vì vậy tiêu đề / ý chính xuyên suốt là: "Soil degradation’s danger to the human race".',
    cognitiveLevel: 'Vận dụng'
  },

  // SECTION 4: WRITING - PART 1: SENTENCE ARRANGEMENT (21 - 22)
  {
    index: 21,
    sectionId: 'sec-l10-u2-t1-4',
    type: 'single_choice',
    questionText: `Mark the letter A, B, C or D to indicate the best arrangement of utterances or sentences to make a meaningful exchange:
a. Jake: That might be greenwashing – it’s just smart marketing.
b. Olivia: This brand says their bottle is eco-friendly.
c. Olivia: I’ll check the label next time and only buy real sustainable products.`,
    options: [
      { id: 'A', text: 'b - c - a' },
      { id: 'B', text: 'a - c - b' },
      { id: 'C', text: 'c - b - a' },
      { id: 'D', text: 'b - a - c' }
    ],
    correctAnswer: 'D',
    explanation: 'Trật tự hợp lý: b (Olivia nêu thông tin về sản phẩm thân thiện môi trường) -> a (Jake nghi ngờ đó là greenwashing/tiếp thị trá hình) -> c (Olivia kết luận lần sau sẽ kiểm tra kỹ nhãn mác để mua sản phẩm bền vững thực sự). Trật tự đúng: b - a - c.',
    cognitiveLevel: 'Vận dụng'
  },
  {
    index: 22,
    sectionId: 'sec-l10-u2-t1-4',
    type: 'single_choice',
    questionText: `Mark the letter A, B, C or D to indicate the best arrangement of utterances or sentences to make a meaningful text:
a. These bottles are used once and thrown away, which leads to a large amount of plastic waste.
b. Although plastic bottles are cheap, they have serious long-term effects.
c. That’s why we should bring our own reusable bottles to protect the environment.
d. In many schools, students still buy plastic bottles every day.
e. Over time, this waste pollutes rivers and oceans, harming fish and sea birds.`,
    options: [
      { id: 'A', text: 'd - b - a - e - c' },
      { id: 'B', text: 'c - b - a - e - d' },
      { id: 'C', text: 'd - a - e - b - c' },
      { id: 'D', text: 'c - d - e - b - a' }
    ],
    correctAnswer: 'C',
    explanation: 'Trật tự phát triển mạch văn logic: d (Nêu thực trạng học sinh mua chai nhựa mỗi ngày) -> a ("These bottles" liên kết với "plastic bottles" - bị vứt sau 1 lần dùng tạo lượng rác khổng lồ) -> e ("this waste" - rác này gây ô nhiễm sông biển hại sinh vật) -> b (Khẳng định tác hại lâu dài của chai nhựa) -> c ("That\'s why" - kết luận giải pháp mang chai dùng nhiều lần). Trật tự: d - a - e - b - c.',
    cognitiveLevel: 'Vận dụng'
  },

  // SECTION 5: WRITING - PART 2: TỰ LUẬN (23 - 26)
  {
    index: 23,
    sectionId: 'sec-l10-u2-t1-5',
    type: 'text_input',
    inputPrompt: 'Children',
    questionText: `[TỰ LUẬN] Rewrite the following sentence as long as the meaning is unchanged, using the given words:
The teacher teaches children how to reduce their carbon footprint. (Change into passive voice)
→ Children _________________________________________________________.`,
    options: [],
    correctAnswer: 'Children are taught how to reduce their carbon footprint by the teacher.',
    acceptableAnswers: [
      'Children are taught how to reduce their carbon footprint by the teacher.',
      'are taught how to reduce their carbon footprint by the teacher.',
      'Children are taught how to reduce their carbon footprint by the teacher',
      'are taught how to reduce their carbon footprint by the teacher',
      'Children are taught by the teacher how to reduce their carbon footprint.',
      'are taught by the teacher how to reduce their carbon footprint.',
      'Children are taught by the teacher how to reduce their carbon footprint',
      'are taught by the teacher how to reduce their carbon footprint',
      'Children are taught how to reduce their carbon footprint.',
      'are taught how to reduce their carbon footprint.',
      'Children are taught how to reduce their carbon footprint',
      'are taught how to reduce their carbon footprint'
    ],
    explanation: 'Chuyển sang câu bị động thì Hiện tại đơn: S + V(s/es) + O + ... -> S(O) + am/is/are + V3/ed + ... + (by O). "The teacher teaches children..." -> "Children are taught how to reduce their carbon footprint by the teacher."',
    cognitiveLevel: 'Vận dụng cao'
  },
  {
    index: 24,
    sectionId: 'sec-l10-u2-t1-5',
    type: 'text_input',
    inputPrompt: 'Trees',
    questionText: `[TỰ LUẬN] Rewrite the following sentence as long as the meaning is unchanged, using the given words:
Some students will plant trees in the community garden next Saturday. (Change into passive voice)
→ Trees _________________________________________________________.`,
    options: [],
    correctAnswer: 'Trees will be planted in the community garden next Saturday by some students.',
    acceptableAnswers: [
      'Trees will be planted in the community garden next Saturday by some students.',
      'will be planted in the community garden next Saturday by some students.',
      'Trees will be planted in the community garden next Saturday by some students',
      'will be planted in the community garden next Saturday by some students',
      'Trees will be planted in the community garden by some students next Saturday.',
      'will be planted in the community garden by some students next Saturday.',
      'Trees will be planted in the community garden by some students next Saturday',
      'will be planted in the community garden by some students next Saturday',
      'Trees will be planted in the community garden next Saturday.',
      'will be planted in the community garden next Saturday.',
      'Trees will be planted in the community garden next Saturday',
      'will be planted in the community garden next Saturday'
    ],
    explanation: 'Chuyển sang câu bị động thì Tương lai đơn: S + will + V-inf + O -> S(O) + will be + V3/ed + [nơi chốn] + [thời gian] + [by O]. "Trees will be planted in the community garden next Saturday by some students."',
    cognitiveLevel: 'Vận dụng cao'
  },
  {
    index: 25,
    sectionId: 'sec-l10-u2-t1-5',
    type: 'text_input',
    inputPrompt: 'Many more trees',
    questionText: `[TỰ LUẬN] Rewrite the following sentence as long as the meaning is unchanged, using the given words:
The local people planted many more trees in the neighbourhood last week. (Change into passive voice)
→ Many more trees _________________________________________________________.`,
    options: [],
    correctAnswer: 'Many more trees were planted in the neighbourhood by the local people last week.',
    acceptableAnswers: [
      'Many more trees were planted in the neighbourhood by the local people last week.',
      'were planted in the neighbourhood by the local people last week.',
      'Many more trees were planted in the neighbourhood by the local people last week',
      'were planted in the neighbourhood by the local people last week',
      'Many more trees were planted in the neighbourhood last week by the local people.',
      'were planted in the neighbourhood last week by the local people.',
      'Many more trees were planted in the neighbourhood last week by the local people',
      'were planted in the neighbourhood last week by the local people',
      'Many more trees were planted in the neighbourhood last week.',
      'were planted in the neighbourhood last week.',
      'Many more trees were planted in the neighbourhood last week',
      'were planted in the neighbourhood last week'
    ],
    explanation: 'Chuyển sang câu bị động thì Quá khứ đơn: S + V2/ed + O -> S(O) + was/were + V3/ed + [nơi chốn] + [by O] + [thời gian]. Vì "trees" là danh từ số nhiều nên dùng "were planted": "Many more trees were planted in the neighbourhood by the local people last week."',
    cognitiveLevel: 'Vận dụng cao'
  },
  {
    index: 26,
    sectionId: 'sec-l10-u2-t1-5',
    type: 'text_input',
    inputPrompt: 'The school playground',
    questionText: `[TỰ LUẬN] Rewrite the following sentence as long as the meaning is unchanged, using the given words:
The students are cleaning the school playground this morning. (Change into passive voice)
→ The school playground _________________________________________________________.`,
    options: [],
    correctAnswer: 'The school playground is being cleaned by the students this morning.',
    acceptableAnswers: [
      'The school playground is being cleaned by the students this morning.',
      'is being cleaned by the students this morning.',
      'The school playground is being cleaned by the students this morning',
      'is being cleaned by the students this morning',
      'The school playground is being cleaned this morning by the students.',
      'is being cleaned this morning by the students.',
      'The school playground is being cleaned this morning by the students',
      'is being cleaned this morning by the students',
      'The school playground is being cleaned this morning.',
      'is being cleaned this morning.',
      'The school playground is being cleaned this morning',
      'is being cleaned this morning'
    ],
    explanation: 'Chuyển sang câu bị động thì Hiện tại tiếp diễn: S + am/is/are + V-ing + O -> S(O) + am/is/are + being + V3/ed + (by O). "The school playground" số ít nên dùng "is being cleaned": "The school playground is being cleaned by the students this morning."',
    cognitiveLevel: 'Vận dụng cao'
  }
];

const examL10U2T1 = {
  id: 'de-cuong-on-tap-gk1-lop-10-unit-2-test-1',
  title: 'Đề Cương Ôn Tập Giữa Kì 1 - Lớp 10 (Test 1: Unit 2 - Humans and the Environment)',
  description: 'Đề cương ôn tập kiểm tra giữa kì 1 Tiếng Anh 10 năm học 2026-2027 (Test 1 - Unit 2: Humans and the Environment - THPT Nguyễn Dục, Đà Nẵng). Đầy đủ các phần: Trọng âm, Ngữ pháp - Từ vựng, Đồng nghĩa - Trái nghĩa (có gạch chân), Bài đọc đục lỗ, Bài đọc hiểu và Kỹ năng viết (Sắp xếp câu & Tự luận câu bị động học sinh tự gõ câu viết lại) kèm đáp án chi tiết.',
  subject: 'Tiếng Anh',
  category: 'Ôn giữa kỳ 1',
  categories: ['Ôn thi giữa kì 1', 'Lớp 10', 'Unit 2'],
  grade: 'Lớp 10',
  durationMinutes: 60,
  totalQuestions: 26,
  originalFileName: 'ĐỀ CƯƠNG ÔN TẬP GK 1 -26-27 TEST 1 UNIT 2-ANH 10.docx',
  status: 'ready',
  createdAt: '2026-10-26T15:00:00.000Z',
  updatedAt: '2026-10-26T15:00:00.000Z',
  sections: test1Sections,
  questions: test1Questions.map(q => ({ id: `l10-u2-t1-q${q.index}`, ...q }))
};


// ============================================================================
// ĐỀ 2: TEST 2 - UNIT 2: HUMANS AND THE ENVIRONMENT
// ============================================================================
const test2Sections = [
  {
    id: 'sec-l10-u2-t2-1',
    title: 'I. LANGUAGE',
    instruction: 'Mark the letter A, B, C, or D on your answer sheet to indicate the correct answer to each of the following questions.',
    questionIndices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  {
    id: 'sec-l10-u2-t2-2',
    title: 'II. READING - PART 1: CLOZE TEST',
    passageTitle: 'Community Efforts for a Clean and Green Environment',
    instruction: 'Read the following passage carefully and then choose the best option to fit each numbered blank (from 11 to 15).',
    passage: `I come from a town where people really care about the environment. We don’t want to live in a place (11) __________ is dirty and full of pollution. So, we try our best to keep it clean. It isn’t always easy, but we do the best we can! There are many places and people that are working together to help make our town and the world better.

At the markets, many of the owners and managers have started to (12) __________ single-use plastics because they cause too much pollution. I think that more and more people are trying to save the environment, which is great. My school has also been trying to reduce the amount of (13) __________ it is causing. All the students and teachers are trying their best. We are all also trying to recycle our trash, so that it doesn’t go to waste. There are still some things we can do better, but I’m happy with how hard we are all trying.

Even at home, we are trying our best. We try to save as much water as we can, and use as little electricity as possible. It isn’t only good (14) ________ the environment, but also for us! If we use less water and electricity, we will save money!

I guess what I’m trying to show you is that the solution to global warming and pollution is working together. We can all do our best individually, (15) __________ as a team we can do an even better job!`,
    questionIndices: [11, 12, 13, 14, 15]
  },
  {
    id: 'sec-l10-u2-t2-3',
    title: 'II. READING - PART 2: READING COMPREHENSION',
    passageTitle: 'Why Is Green Living So Important?',
    instruction: 'Read the following passage and mark the letter A, B, C, or D on your answer sheet to indicate the correct answer to each of the questions.',
    passage: `Many people go through life only thinking about their own well-being and that of those around them. In reality, the well-being of the environment is just as important in certain ways. Without a healthy and sustainable environment, their own health and ability to leave behind a sustainable planet to those who live after them is negatively affected. Therefore, two main environmental benefits can be realised with greener living.

Firstly, people can conserve natural resources. The natural resources that man has been enjoying are beginning to disappear. Due to population growth, it is estimated that the use of natural resources has more than tripled since 1970. At that rate, it is not difficult to see how these same resources will eventually become <u>depleted</u>. It is important to conserve those precious resources so that others after this generation can enjoy the same quality of living on this planet.

Secondly, people can reduce the harmful effects of climate change. Primarily due to human’s reliance on fossil fuels over the years, climate change is a real concern. People continue to release carbon dioxide into the atmosphere, further polluting the air. <u>This</u> is leading to dramatic changes in temperatures that need to be stopped. Greener living aims to do exactly that. For every person who makes an effort to reduce his or her carbon footprint in the world, climate change can begin to become less of a concern over time.
(Adapted from: https://planetrenewed.com/why-is-green-living-so-important-we-find-out)`,
    questionIndices: [16, 17, 18, 19, 20]
  },
  {
    id: 'sec-l10-u2-t2-4',
    title: 'III. WRITING - PART 1: SENTENCE ARRANGEMENT',
    instruction: 'Mark the letter A, B, C or D to indicate the best arrangement of utterances or sentences to make a meaningful exchange or text in each of the following questions.',
    questionIndices: [21, 22]
  },
  {
    id: 'sec-l10-u2-t2-5',
    title: 'III. WRITING - PART 2: TỰ LUẬN (SENTENCE TRANSFORMATION)',
    instruction: 'Rewrite each of the following sentences as long as the meaning is unchanged, using the given words. (Học sinh tự gõ câu viết lại vào ô trống bên dưới).',
    questionIndices: [23, 24, 25, 26]
  }
];

const test2Questions = [
  // SECTION 1: LANGUAGE (1 - 10)
  {
    index: 1,
    sectionId: 'sec-l10-u2-t2-1',
    type: 'single_choice',
    questionText: 'Mark the letter A, B, C, or D on your answer sheet to indicate the word that differs from the other three in the position of primary stress.',
    options: [
      { id: 'A', text: 'greenhouse' },
      { id: 'B', text: 'maintain' },
      { id: 'C', text: 'lifestyle' },
      { id: 'D', text: 'nature' }
    ],
    correctAnswer: 'B',
    explanation: 'maintain có trọng âm rơi vào âm tiết thứ 2 (/meɪnˈteɪn/), các từ còn lại có trọng âm rơi vào âm tiết thứ nhất: greenhouse (/ˈɡriːnhaʊs/), lifestyle (/ˈlaɪfstaɪl/), nature (/ˈneɪtʃər/).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 2,
    sectionId: 'sec-l10-u2-t2-1',
    type: 'single_choice',
    questionText: 'Mark the letter A, B, C, or D on your answer sheet to indicate the word that differs from the other three in the position of primary stress.',
    options: [
      { id: 'A', text: 'awareness' },
      { id: 'B', text: 'difference' },
      { id: 'C', text: 'instrument' },
      { id: 'D', text: 'character' }
    ],
    correctAnswer: 'A',
    explanation: 'awareness có trọng âm rơi vào âm tiết thứ 2 (/əˈweənəs/), các từ còn lại có trọng âm rơi vào âm tiết thứ nhất: difference (/ˈdɪfrəns/), instrument (/ˈɪnstrəmənt/), character (/ˈkærəktər/).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 3,
    sectionId: 'sec-l10-u2-t2-1',
    type: 'single_choice',
    questionText: 'Money ______ to the homeless shelter by Larry.',
    options: [
      { id: 'A', text: 'donated' },
      { id: 'B', text: 'was donating' },
      { id: 'C', text: 'was donated' },
      { id: 'D', text: 'donates' }
    ],
    correctAnswer: 'C',
    explanation: 'Chủ ngữ "Money" (tiền) là danh từ không đếm được chỉ vật, có tác nhân "by Larry" nên phải chia ở thể bị động: was/were + V3/ed. Bị động quá khứ đơn: "was donated".',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 4,
    sectionId: 'sec-l10-u2-t2-1',
    type: 'single_choice',
    questionText: '“Look at those dark clouds!“ - “Yes, it ____ in some minutes.”',
    options: [
      { id: 'A', text: 'will rain' },
      { id: 'B', text: 'is going to rain' },
      { id: 'C', text: 'are going to rain' },
      { id: 'D', text: 'is raining' }
    ],
    correctAnswer: 'B',
    explanation: 'Dự đoán sự việc sắp xảy ra dựa trên bằng chứng / dấu hiệu trực quan ở hiện tại ("Look at those dark clouds!") dùng cấu trúc tương lai gần "be going to + V": "is going to rain".',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 5,
    sectionId: 'sec-l10-u2-t2-1',
    type: 'single_choice',
    questionText: 'You should cut down ________ electricity usage to reduce your carbon footprint.',
    options: [
      { id: 'A', text: 'in' },
      { id: 'B', text: 'on' },
      { id: 'C', text: 'to' },
      { id: 'D', text: 'for' }
    ],
    correctAnswer: 'B',
    explanation: 'Cụm động từ cố định: "cut down on sth" = cắt giảm việc tiêu thụ / sử dụng cái gì (ví dụ: cắt giảm lượng điện tiêu thụ để giảm lượng phát thải carbon).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 6,
    sectionId: 'sec-l10-u2-t2-1',
    type: 'single_choice',
    questionText: 'We buy _______ food at the farmers\' market. It costs a little bit more, but we think it\'s better for our health.',
    options: [
      { id: 'A', text: 'organic' },
      { id: 'B', text: 'non-organic' },
      { id: 'C', text: 'organically' },
      { id: 'D', text: 'inorganic' }
    ],
    correctAnswer: 'A',
    explanation: 'Trước danh từ "food" cần một tính từ. Ngữ cảnh "better for our health" (tốt cho sức khỏe) và "at the farmers\' market" chỉ thực phẩm hữu cơ ("organic food").',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 7,
    sectionId: 'sec-l10-u2-t2-1',
    type: 'single_choice',
    questionText: 'Small changes in your daily habits can help reduce the ___________you produce.',
    options: [
      { id: 'A', text: 'carbon footprint' },
      { id: 'B', text: 'footsteps' },
      { id: 'C', text: 'issues' },
      { id: 'D', text: 'trouble' }
    ],
    correctAnswer: 'A',
    explanation: '"carbon footprint" = dấu chân carbon (tổng lượng khí nhà kính phát thải do các hoạt động của con người). Cụm từ: "reduce the carbon footprint you produce".',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 8,
    sectionId: 'sec-l10-u2-t2-1',
    type: 'single_choice',
    questionText: 'In Singapore, people try to ____ 80% of all waste.',
    options: [
      { id: 'A', text: 'reprocess' },
      { id: 'B', text: 'reclaim' },
      { id: 'C', text: 'recycle' },
      { id: 'D', text: 'reuse' }
    ],
    correctAnswer: 'C',
    explanation: '"recycle waste" = tái chế rác thải (xử lý rác thành vật liệu mới).',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 9,
    sectionId: 'sec-l10-u2-t2-1',
    type: 'single_choice',
    questionText: 'Mark the letter A, B, C, or D on your answer sheet to indicate the word(s) CLOSEST in meaning to the underlined word(s): People should actively participate in environmental events to <u>preserve</u> the planet for future generations',
    options: [
      { id: 'A', text: 'destroy' },
      { id: 'B', text: 'protect' },
      { id: 'C', text: 'collect' },
      { id: 'D', text: 'sort' }
    ],
    correctAnswer: 'B',
    explanation: 'Từ gạch chân "<u>preserve</u>" có nghĩa là bảo tồn, giữ gìn, bảo vệ. Từ đồng nghĩa gần nhất là "protect" (bảo vệ). Destroy = phá hủy; collect = thu gom; sort = phân loại.',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 10,
    sectionId: 'sec-l10-u2-t2-1',
    type: 'single_choice',
    questionText: 'Mark the letter A, B, C, or D on your answer sheet to indicate the word(s) OPPOSITE in meaning to the underlined word(s): The release of <u>harmful</u> chemicals into rivers can have severe consequences for the environment and human health.',
    options: [
      { id: 'A', text: 'refillable' },
      { id: 'B', text: 'damaging' },
      { id: 'C', text: 'beneficial' },
      { id: 'D', text: 'fresh' }
    ],
    correctAnswer: 'C',
    explanation: 'Từ gạch chân "<u>harmful</u>" có nghĩa là độc hại, gây hại. Từ trái nghĩa là "beneficial" (có lợi, hữu ích). Refillable = có thể làm đầy lại; damaging = gây tổn hại; fresh = tươi mới.',
    cognitiveLevel: 'Thông hiểu'
  },

  // SECTION 2: READING - PART 1: CLOZE TEST (11 - 15)
  {
    index: 11,
    sectionId: 'sec-l10-u2-t2-2',
    type: 'single_choice',
    questionText: 'We don’t want to live in a place (11) __________ is dirty and full of pollution.',
    options: [
      { id: 'A', text: 'where' },
      { id: 'B', text: 'who' },
      { id: 'C', text: 'that' },
      { id: 'D', text: 'when' }
    ],
    correctAnswer: 'C',
    explanation: 'Mặc dù từ đứng trước là "a place", nhưng ngay phía sau ô trống là động từ "is dirty", do đó vị trí này cần một đại từ quan hệ đóng vai trò làm chủ ngữ (subject) thay thế cho vật -> dùng "that" (hoặc "which"). "where" là trạng từ quan hệ chỉ nơi chốn, sau "where" phải là một mệnh đề hoàn chỉnh (S + V).',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 12,
    sectionId: 'sec-l10-u2-t2-2',
    type: 'single_choice',
    questionText: 'At the markets, many of the owners and managers have started to (12) __________ single-use plastics because they cause too much pollution.',
    options: [
      { id: 'A', text: 'reuse' },
      { id: 'B', text: 'ban' },
      { id: 'C', text: 'protect' },
      { id: 'D', text: 'allow' }
    ],
    correctAnswer: 'B',
    explanation: 'Vì đồ nhựa dùng một lần gây ra quá nhiều ô nhiễm ("because they cause too much pollution") nên các chủ cửa hàng và quản lý bắt đầu cấm sử dụng ("ban single-use plastics").',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 13,
    sectionId: 'sec-l10-u2-t2-2',
    type: 'single_choice',
    questionText: 'My school has also been trying to reduce the amount of (13) __________ it is causing.',
    options: [
      { id: 'A', text: 'pollute' },
      { id: 'B', text: 'polluted' },
      { id: 'C', text: 'polluting' },
      { id: 'D', text: 'pollution' }
    ],
    correctAnswer: 'D',
    explanation: 'Sau cụm "the amount of" cần một danh từ không đếm được: "pollution" (sự ô nhiễm). Cụm "the amount of pollution it is causing" = lượng ô nhiễm mà trường học gây ra.',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 14,
    sectionId: 'sec-l10-u2-t2-2',
    type: 'single_choice',
    questionText: 'It isn’t only good (14) ________ the environment, but also for us!',
    options: [
      { id: 'A', text: 'at' },
      { id: 'B', text: 'about' },
      { id: 'C', text: 'for' },
      { id: 'D', text: 'to' }
    ],
    correctAnswer: 'C',
    explanation: 'Cấu trúc so sánh tương ứng: "good for sth" (tốt cho cái gì). Vế sau có "but also for us" nên vị trí ô trống dùng "good for the environment".',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 15,
    sectionId: 'sec-l10-u2-t2-2',
    type: 'single_choice',
    questionText: 'We can all do our best individually, (15) __________ as a team we can do an even better job!',
    options: [
      { id: 'A', text: 'so' },
      { id: 'B', text: 'though' },
      { id: 'C', text: 'however' },
      { id: 'D', text: 'but' }
    ],
    correctAnswer: 'D',
    explanation: 'Hai mệnh đề có mối quan hệ tương phản đối lập: từng cá nhân nỗ lực nhưng khi là một tập thể sẽ làm tốt hơn nữa. Liên từ đẳng lập nối hai mệnh đề sau dấu phẩy là "but".',
    cognitiveLevel: 'Thông hiểu'
  },

  // SECTION 3: READING - PART 2: READING COMPREHENSION (16 - 20)
  {
    index: 16,
    sectionId: 'sec-l10-u2-t2-3',
    type: 'single_choice',
    questionText: 'Which of the following can be the best title for the passage?',
    options: [
      { id: 'A', text: 'Natural Resources' },
      { id: 'B', text: 'The Benefits of Green Living' },
      { id: 'C', text: 'The Effects of Climate Change' },
      { id: 'D', text: 'A Healthy Environment' }
    ],
    correctAnswer: 'B',
    explanation: 'Đoạn 1 mở bài dẫn dắt: "Therefore, two main environmental benefits can be realised with greener living." Sau đó đoạn 2 trình bày lợi ích thứ nhất ("Firstly, people can conserve natural resources"), đoạn 3 trình bày lợi ích thứ hai ("Secondly, people can reduce the harmful effects of climate change"). Do đó tiêu đề phù hợp nhất là "The Benefits of Green Living" (Những lợi ích của lối sống xanh).',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 17,
    sectionId: 'sec-l10-u2-t2-3',
    type: 'single_choice',
    questionText: 'The word “<u>depleted</u>” in paragraph 2 is CLOSEST in meaning to ________.',
    options: [
      { id: 'A', text: 'run out' },
      { id: 'B', text: 'picked up' },
      { id: 'C', text: 'filled in' },
      { id: 'D', text: 'searched for' }
    ],
    correctAnswer: 'A',
    explanation: 'Từ gạch chân "<u>depleted</u>" có nghĩa là bị cạn kiệt, suy giảm đến mức hết. Từ đồng nghĩa gần nhất là "run out" (cạn kiệt, hết sạch).',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 18,
    sectionId: 'sec-l10-u2-t2-3',
    type: 'single_choice',
    questionText: 'The word “<u>This</u>” in paragraph 3 refers to________.',
    options: [
      { id: 'A', text: 'the activity of releasing carbon dioxide and causing air pollution' },
      { id: 'B', text: 'the harmful effect of climate change' },
      { id: 'C', text: 'the reliance on fossil fuels' },
      { id: 'D', text: 'green living' }
    ],
    correctAnswer: 'A',
    explanation: 'Đoạn 3 viết: "People continue to release carbon dioxide into the atmosphere, further polluting the air. <u>This</u> is leading to dramatic changes in temperatures that need to be stopped." Từ "<u>This</u>" thay thế cho toàn bộ hành động được nhắc ở câu trước: việc con người tiếp tục xả CO2 và gây ô nhiễm không khí.',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 19,
    sectionId: 'sec-l10-u2-t2-3',
    type: 'single_choice',
    questionText: 'According to paragraph 2, natural resources ________.',
    options: [
      { id: 'A', text: 'are not precious to human on Earth' },
      { id: 'B', text: 'are hard to be conserved' },
      { id: 'C', text: 'has been used more and more since 1970s' },
      { id: 'D', text: 'can not disappear' }
    ],
    correctAnswer: 'C',
    explanation: 'Dẫn chứng ở đoạn 2: "Due to population growth, it is estimated that the use of natural resources has more than tripled since 1970." (Do sự gia tăng dân số, ước tính lượng tài nguyên thiên nhiên được sử dụng đã tăng hơn gấp ba lần kể từ năm 1970) -> tài nguyên thiên nhiên ngày càng được sử dụng nhiều hơn.',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 20,
    sectionId: 'sec-l10-u2-t2-3',
    type: 'single_choice',
    questionText: 'Which of the following is NOT TRUE according to the passage?',
    options: [
      { id: 'A', text: 'The well-being of the environment is as important as that of each person' },
      { id: 'B', text: 'Climate change is a problem because of the reliance on fossil fuels' },
      { id: 'C', text: 'Carbon dioxide contributes to air pollution' },
      { id: 'D', text: 'Climate change can only be stopped by actions of governments' }
    ],
    correctAnswer: 'D',
    explanation: 'Thông tin trong bài ở cuối đoạn 3: "For every person who makes an effort to reduce his or her carbon footprint in the world, climate change can begin to become less of a concern over time." Mỗi cá nhân đều có thể góp phần làm giảm biến đổi khí hậu bằng cách giảm dấu chân carbon của mình, do đó nhận định D (chỉ có thể được ngăn chặn bằng hành động của chính phủ) là SAI so với bài đọc.',
    cognitiveLevel: 'Vận dụng'
  },

  // SECTION 4: WRITING - PART 1: SENTENCE ARRANGEMENT (21 - 22)
  {
    index: 21,
    sectionId: 'sec-l10-u2-t2-4',
    type: 'single_choice',
    questionText: `Mark the letter A, B, C or D to indicate the best arrangement of utterances or sentences to make a meaningful exchange:
a. Liam: Thanks! I’ve also started using refillable containers at home and recycling more carefully.
b. Liam: I bring my own reusable bottle and lunch box every day to avoid plastic waste.
c. Sarah: That’s amazing, Liam! You’re really following a zero-waste lifestyle.`,
    options: [
      { id: 'A', text: 'b - c - a' },
      { id: 'B', text: 'a - c - b' },
      { id: 'C', text: 'c - b - a' },
      { id: 'D', text: 'b - a - c' }
    ],
    correctAnswer: 'A',
    explanation: 'Trật tự hợp lý: b (Liam kể về thói quen mang bình nước và hộp cơm dùng lại để tránh rác thải nhựa) -> c (Sarah khen ngợi lối sống zero-waste của Liam) -> a (Liam cảm ơn và chia sẻ thêm hành động tích cực khác). Trật tự đúng: b - c - a.',
    cognitiveLevel: 'Vận dụng'
  },
  {
    index: 22,
    sectionId: 'sec-l10-u2-t2-4',
    type: 'single_choice',
    questionText: `Mark the letter A, B, C or D to indicate the best arrangement of utterances or sentences to make a meaningful text:
a. To help reduce this, people can bring reusable bags when shopping and use refillable water bottles.
b. Recycling is another important step in living green.
c. These small changes help limit plastic use and protect the environment.
d. It reduces pollution, saves natural resources like water and trees, and gives new life to used materials instead of sending them to landfills.
e. Plastic waste is a serious problem because it takes many years to break down.`,
    options: [
      { id: 'A', text: 'b - a - c - e - d' },
      { id: 'B', text: 'b - c - e - a - d' },
      { id: 'C', text: 'e - a - c - b - d' },
      { id: 'D', text: 'a - e - c - b - d' }
    ],
    correctAnswer: 'C',
    explanation: 'Trật tự phát triển logic: e (Nêu vấn đề rác thải nhựa phân hủy lâu) -> a ("To help reduce this" - biện pháp mang túi tái sử dụng và bình đựng nước) -> c ("These small changes" - tác dụng của những thay đổi nhỏ này) -> b (Chuyển ý sang tái chế: "Recycling is another important step...") -> d ("It" thay cho "Recycling" - nêu lợi ích của việc tái chế). Trật tự đúng: e - a - c - b - d.',
    cognitiveLevel: 'Vận dụng'
  },

  // SECTION 5: WRITING - PART 2: TỰ LUẬN (23 - 26)
  {
    index: 23,
    sectionId: 'sec-l10-u2-t2-5',
    type: 'text_input',
    inputPrompt: 'Important environmental issues',
    questionText: `[TỰ LUẬN] Rewrite the following sentence as long as the meaning is unchanged, using the given words:
They will discuss important environmental issues at the meeting tomorrow. (change into passive voice)
→ Important environmental issues __________________________________________________.`,
    options: [],
    correctAnswer: 'Important environmental issues will be discussed at the meeting tomorrow.',
    acceptableAnswers: [
      'Important environmental issues will be discussed at the meeting tomorrow.',
      'will be discussed at the meeting tomorrow.',
      'Important environmental issues will be discussed at the meeting tomorrow',
      'will be discussed at the meeting tomorrow',
      'Important environmental issues will be discussed at the meeting tomorrow by them.',
      'will be discussed at the meeting tomorrow by them.',
      'Important environmental issues will be discussed at the meeting tomorrow by them',
      'will be discussed at the meeting tomorrow by them',
      'Important environmental issues will be discussed by them at the meeting tomorrow.',
      'will be discussed by them at the meeting tomorrow.',
      'Important environmental issues will be discussed by them at the meeting tomorrow',
      'will be discussed by them at the meeting tomorrow'
    ],
    explanation: 'Bị động của thì Tương lai đơn: S + will + V + O -> S(O) + will be + V3/ed + [nơi chốn] + [thời gian]. "Important environmental issues will be discussed at the meeting tomorrow."',
    cognitiveLevel: 'Vận dụng cao'
  },
  {
    index: 24,
    sectionId: 'sec-l10-u2-t2-5',
    type: 'text_input',
    inputPrompt: 'The artists’ music shows',
    questionText: `[TỰ LUẬN] Rewrite the following sentence as long as the meaning is unchanged, using the given words:
The artists always prepare their music shows carefully every weekend. (change into passive voice)
→ The artists’ music shows __________________________________________________.`,
    options: [],
    correctAnswer: 'The artists’ music shows are always prepared carefully every weekend.',
    acceptableAnswers: [
      'The artists’ music shows are always prepared carefully every weekend.',
      'The artists\' music shows are always prepared carefully every weekend.',
      'are always prepared carefully every weekend.',
      'The artists’ music shows are always prepared carefully every weekend',
      'The artists\' music shows are always prepared carefully every weekend',
      'are always prepared carefully every weekend',
      'The artists’ music shows are always prepared carefully by them every weekend.',
      'The artists\' music shows are always prepared carefully by them every weekend.',
      'are always prepared carefully by them every weekend.',
      'The artists’ music shows are always prepared carefully by them every weekend',
      'The artists\' music shows are always prepared carefully by them every weekend',
      'are always prepared carefully by them every weekend',
      'The artists’ music shows are always prepared carefully by the artists every weekend.',
      'The artists\' music shows are always prepared carefully by the artists every weekend.',
      'are always prepared carefully by the artists every weekend.',
      'The artists’ music shows are always prepared carefully by the artists every weekend',
      'The artists\' music shows are always prepared carefully by the artists every weekend',
      'are always prepared carefully by the artists every weekend',
      'The artists’ music shows are always carefully prepared every weekend.',
      'The artists\' music shows are always carefully prepared every weekend.',
      'are always carefully prepared every weekend.',
      'The artists’ music shows are always carefully prepared every weekend',
      'The artists\' music shows are always carefully prepared every weekend',
      'are always carefully prepared every weekend'
    ],
    explanation: 'Bị động của thì Hiện tại đơn: S(O) + am/is/are + [adv] + V3/ed + ... "The artists\' music shows" là danh từ số nhiều nên dùng "are always prepared carefully every weekend."',
    cognitiveLevel: 'Vận dụng cao'
  },
  {
    index: 25,
    sectionId: 'sec-l10-u2-t2-5',
    type: 'text_input',
    inputPrompt: 'Rubbish',
    questionText: `[TỰ LUẬN] Rewrite the following sentence as long as the meaning is unchanged, using the given words:
We are going to pick up rubbish in the central park this weekend. (change into passive voice)
→ Rubbish __________________________________________________.`,
    options: [],
    correctAnswer: 'Rubbish is going to be picked up in the central park this weekend.',
    acceptableAnswers: [
      'Rubbish is going to be picked up in the central park this weekend.',
      'is going to be picked up in the central park this weekend.',
      'Rubbish is going to be picked up in the central park this weekend',
      'is going to be picked up in the central park this weekend',
      'Rubbish is going to be picked up in the central park this weekend by us.',
      'is going to be picked up in the central park this weekend by us.',
      'Rubbish is going to be picked up in the central park this weekend by us',
      'is going to be picked up in the central park this weekend by us',
      'Rubbish is going to be picked up in the central park by us this weekend.',
      'is going to be picked up in the central park by us this weekend.',
      'Rubbish is going to be picked up in the central park by us this weekend',
      'is going to be picked up in the central park by us this weekend'
    ],
    explanation: 'Bị động của cấu trúc Be going to: S + am/is/are + going to + V + O -> S(O) + am/is/are + going to be + V3/ed + ... "Rubbish" là danh từ không đếm được nên dùng số ít: "Rubbish is going to be picked up in the central park this weekend."',
    cognitiveLevel: 'Vận dụng cao'
  },
  {
    index: 26,
    sectionId: 'sec-l10-u2-t2-5',
    type: 'text_input',
    inputPrompt: 'A campaign',
    questionText: `[TỰ LUẬN] Rewrite the following sentence as long as the meaning is unchanged, using the given words:
The Youth Union will organise a campaign to protect the environment. (change into passive voice)
→ A campaign __________________________________________________.`,
    correctAnswer: 'A campaign will be organised to protect the environment by the Youth Union.',
    options: [],
    acceptableAnswers: [
      'A campaign will be organised to protect the environment by the Youth Union.',
      'will be organised to protect the environment by the Youth Union.',
      'A campaign will be organised to protect the environment by the Youth Union',
      'will be organised to protect the environment by the Youth Union',
      'A campaign to protect the environment will be organised by the Youth Union.',
      'to protect the environment will be organised by the Youth Union.',
      'A campaign to protect the environment will be organised by the Youth Union',
      'to protect the environment will be organised by the Youth Union',
      'A campaign will be organized to protect the environment by the Youth Union.',
      'will be organized to protect the environment by the Youth Union.',
      'A campaign will be organized to protect the environment by the Youth Union',
      'will be organized to protect the environment by the Youth Union',
      'A campaign to protect the environment will be organized by the Youth Union.',
      'to protect the environment will be organized by the Youth Union.',
      'A campaign to protect the environment will be organized by the Youth Union',
      'to protect the environment will be organized by the Youth Union',
      'A campaign will be organised by the Youth Union to protect the environment.',
      'will be organised by the Youth Union to protect the environment.',
      'A campaign will be organised by the Youth Union to protect the environment',
      'will be organised by the Youth Union to protect the environment',
      'A campaign will be organized by the Youth Union to protect the environment.',
      'will be organized by the Youth Union to protect the environment.',
      'A campaign will be organized by the Youth Union to protect the environment',
      'will be organized by the Youth Union to protect the environment'
    ],
    explanation: 'Bị động của thì Tương lai đơn với động từ khuyết thiếu: S + will + V + O -> S(O) + will be + V3/ed + ... Có hai cách diễn đạt viết lại: "A campaign will be organised to protect the environment by the Youth Union" hoặc "A campaign to protect the environment will be organised by the Youth Union."',
    cognitiveLevel: 'Vận dụng cao'
  }
];

const examL10U2T2 = {
  id: 'de-cuong-on-tap-gk1-lop-10-unit-2-test-2',
  title: 'Đề Cương Ôn Tập Giữa Kì 1 - Lớp 10 (Test 2: Unit 2 - Humans and the Environment)',
  description: 'Đề cương ôn tập kiểm tra giữa kì 1 Tiếng Anh 10 năm học 2026-2027 (Test 2 - Unit 2: Humans and the Environment - THPT Nguyễn Dục, Đà Nẵng). Đầy đủ các phần: Trọng âm, Ngữ pháp - Từ vựng, Đồng nghĩa - Trái nghĩa (có gạch chân), Bài đọc đục lỗ, Bài đọc hiểu và Kỹ năng viết (Sắp xếp câu & Tự luận câu bị động học sinh tự gõ câu viết lại) kèm đáp án chi tiết.',
  subject: 'Tiếng Anh',
  category: 'Ôn giữa kỳ 1',
  categories: ['Ôn thi giữa kì 1', 'Lớp 10', 'Unit 2'],
  grade: 'Lớp 10',
  durationMinutes: 60,
  totalQuestions: 26,
  originalFileName: 'ĐỀ CƯƠNG ÔN TẬP GK 1 -26-27 TEST 2 UNIT 2-ANH 10.docx',
  status: 'ready',
  createdAt: '2026-10-26T15:00:00.000Z',
  updatedAt: '2026-10-26T15:00:00.000Z',
  sections: test2Sections,
  questions: test2Questions.map(q => ({ id: `l10-u2-t2-q${q.index}`, ...q }))
};

module.exports = {
  examL10U2T1,
  examL10U2T2
};
