const fs = require('fs');
const path = require('path');

/**
 * XÂY DỰNG 2 ĐỀ CƯƠNG ÔN TẬP GIỮA KÌ 1 LỚP 10 (TEST 1 & TEST 2 - UNIT 1: FAMILY LIFE)
 * Nguồn: Trường THPT Nguyễn Dục - Sở GD&ĐT TP. Đà Nẵng (Năm học 2026 - 2027)
 * Đầy đủ phần Trắc nghiệm, Bài đọc hiểu, Đục lỗ, Sắp xếp câu và Phần TỰ LUẬN HỌC SINH TỰ GÕ CÂU (text_input).
 */

// ============================================================================
// ĐỀ 1: TEST 1 - UNIT 1: FAMILY LIFE
// ============================================================================
const test1Sections = [
  {
    id: 'sec-l10-t1-1',
    title: 'I. LANGUAGE',
    instruction: 'Mark the letter A, B, C, or D on your answer sheet to indicate the correct answer to each of the following questions.',
    questionIndices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  {
    id: 'sec-l10-t1-2',
    title: 'II. READING - PART 1: CLOZE TEST',
    passageTitle: 'Working Mothers in the Modern Family',
    instruction: 'Read the following passage carefully and then choose the best option to fit each numbered blank (from 11 to 15).',
    passage: `In the United States today, more than half of mothers with young children work, compared to about one third in the 1970s. Women have been moving into the workforce not only for career satisfaction (11) ______ for the income.

In many families today, mothers continue to work because they have careers that they have spent years developing. Some women return to work soon after giving birth because they know that most employers are not sympathetic to working mothers (12) ______ wish to take time off to be with their young children.

Some people still think that a “good mother” is one who gives (13) ______ work to stay home with her children. However, no scientific evidence says children are harmed when their mothers work. A child who is emotionally well adjusted, well loved, and well cared for will thrive regardless of whether the mother works outside the home.

In most families with working mothers, each person (14) ______ a more active role in the household. The children tend to look after one another and help in other ways. The father as a breadwinner is more likely to help with household chores and child rearing. These positive outcomes are most likely when the working mother feels valued and (15) ______ by family, friends, and co-workers.
(Adapted from giainhanh.vn)`,
    questionIndices: [11, 12, 13, 14, 15]
  },
  {
    id: 'sec-l10-t1-3',
    title: 'II. READING - PART 2: READING COMPREHENSION',
    passageTitle: 'The Value of Household Chores for Children',
    instruction: 'Read the following passage and mark the letter A, B, C, or D on your answer sheet to indicate the correct answer to each of the questions.',
    passage: `Chores are not only housework, they also help children grow. When kids do chores, they learn important life skills and feel good about themselves. Helping at home shows them that their work has value and that they are part of the family. This gives them more <u>confidence</u>.

Doing chores also teaches children how to plan, organize, and finish tasks. For example, setting the table or sorting clothes helps <u>them</u> practice following steps and managing time. Chores also train kids to wait for rewards. Instead of playing right away, they finish cleaning and then enjoy a tidy room. This builds self-control and patience.

Chores are also good for mental health. When children see the result of their work, they feel proud and happy. They understand that their help makes a difference. In the long run, chores prepare kids for the future. They learn how to cook, clean, and take care of themselves, which makes them ready for independent life as adults.

Parents can start with simple jobs for toddlers, like putting toys away, and give harder tasks as kids grow. It is important to give praise, focus on effort, and make chores fun. With this support, chores become a way to build confidence, responsibility, and independence.
(Adapted from Brighthorizons.com)`,
    questionIndices: [16, 17, 18, 19, 20]
  },
  {
    id: 'sec-l10-t1-4',
    title: 'III. WRITING - PART 1: SENTENCE ARRANGEMENT',
    instruction: 'Mark the letter A, B, C or D to indicate the best arrangement of utterances or sentences to make a meaningful exchange or text in each of the following questions.',
    questionIndices: [21, 22]
  },
  {
    id: 'sec-l10-t1-5',
    title: 'III. WRITING - PART 2: TỰ LUẬN (SENTENCE TRANSFORMATION)',
    instruction: 'Rewrite each of the following sentences in such a way that it means the same as the given sentence. (Học sinh tự gõ câu viết lại vào ô trống bên dưới).',
    questionIndices: [23, 24, 25, 26]
  }
];

const test1Questions = [
  // SECTION 1: LANGUAGE (1 - 10)
  {
    index: 1,
    sectionId: 'sec-l10-t1-1',
    type: 'single_choice',
    questionText: 'Mark the letter A, B, C, or D to indicate the word that differs from the other three in the position of primary stress.',
    options: [
      { id: 'A', text: 'grocery' },
      { id: 'B', text: 'character' },
      { id: 'C', text: 'develop' },
      { id: 'D', text: 'homemaker' }
    ],
    correctAnswer: 'C',
    explanation: 'develop có trọng âm rơi vào âm tiết thứ 2 (/dɪˈveləp/), các từ còn lại có trọng âm rơi vào âm tiết thứ nhất: grocery (/ˈɡrəʊsəri/), character (/ˈkærəktər/), homemaker (/ˈhəʊmmeɪkər/).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 2,
    sectionId: 'sec-l10-t1-1',
    type: 'single_choice',
    questionText: 'Mark the letter A, B, C, or D to indicate the word that differs from the other three in the position of primary stress.',
    options: [
      { id: 'A', text: 'routine' },
      { id: 'B', text: 'laundry' },
      { id: 'C', text: 'household' },
      { id: 'D', text: 'picnic' }
    ],
    correctAnswer: 'A',
    explanation: 'routine có trọng âm rơi vào âm tiết thứ 2 (/ruːˈtiːn/), các từ còn lại có trọng âm rơi vào âm tiết thứ nhất: laundry (/ˈlɔːndri/), household (/ˈhaʊshəʊld/), picnic (/ˈpɪknɪk/).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 3,
    sectionId: 'sec-l10-t1-1',
    type: 'single_choice',
    questionText: 'Jim _____________ a book at the moment.',
    options: [
      { id: 'A', text: 'is reading' },
      { id: 'B', text: 'had read' },
      { id: 'C', text: 'reads' },
      { id: 'D', text: 'has read' }
    ],
    correctAnswer: 'A',
    explanation: 'Dấu hiệu thời gian "at the moment" (ngay lúc này) chỉ hành động đang diễn ra tại thời điểm nói -> dùng thì Hiện tại tiếp diễn: S + am/is/are + V-ing (Jim is reading).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 4,
    sectionId: 'sec-l10-t1-1',
    type: 'single_choice',
    questionText: 'Bich sometimes ____________chicken noodle soup for breakfast.',
    options: [
      { id: 'A', text: 'are having' },
      { id: 'B', text: 'is having' },
      { id: 'C', text: 'have' },
      { id: 'D', text: 'has' }
    ],
    correctAnswer: 'D',
    explanation: 'Trạng từ tần suất "sometimes" diễn tả thói quen lặp đi lặp lại -> thì Hiện tại đơn. Chủ ngữ "Bich" là ngôi thứ 3 số ít nên động từ have chia thành has.',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 5,
    sectionId: 'sec-l10-t1-1',
    type: 'single_choice',
    questionText: 'My mother____________the responsibility for running the household.',
    options: [
      { id: 'A', text: 'holds' },
      { id: 'B', text: 'takes' },
      { id: 'C', text: 'runs' },
      { id: 'D', text: 'bears' }
    ],
    correctAnswer: 'B',
    explanation: 'Cụm từ cố định (collocation): "take the responsibility for (doing) sth" = chịu trách nhiệm làm việc gì (quán xuyến gia đình).',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 6,
    sectionId: 'sec-l10-t1-1',
    type: 'single_choice',
    questionText: 'I\'m lucky to have such a(n)__________ brother who always gives me help when I need it.',
    options: [
      { id: 'A', text: 'support' },
      { id: 'B', text: 'Supporting' },
      { id: 'C', text: 'supported' },
      { id: 'D', text: 'supportive' }
    ],
    correctAnswer: 'D',
    explanation: 'Vị trí cần điền đứng trước danh từ "brother" cần một tính từ miêu tả tính cách. "supportive" (adj) mang nghĩa luôn sẵn lòng hỗ trợ, ủng hộ người khác.',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 7,
    sectionId: 'sec-l10-t1-1',
    type: 'single_choice',
    questionText: 'Doing chores as a family will help strengthen ____________.',
    options: [
      { id: 'A', text: 'family bonds' },
      { id: 'B', text: 'generation gap' },
      { id: 'C', text: 'family trees' },
      { id: 'D', text: 'family values' }
    ],
    correctAnswer: 'A',
    explanation: 'Collocation trọng tâm Unit 1: "strengthen family bonds" = thắt chặt / gắn kết tình cảm gia đình. (generation gap: khoảng cách thế hệ; family trees: phả hệ; family values: giá trị gia đình).',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 8,
    sectionId: 'sec-l10-t1-1',
    type: 'single_choice',
    questionText: 'My eldest son is strong enough to do the___________ for the family.',
    options: [
      { id: 'A', text: 'heavy lifting' },
      { id: 'B', text: 'household chores' },
      { id: 'C', text: 'cooking' },
      { id: 'D', text: 'laundry' }
    ],
    correctAnswer: 'A',
    explanation: 'Collocation: "do the heavy lifting" = làm công việc nặng nhọc đòi hỏi thể lực. Cụm "strong enough" (đủ khoẻ) bổ trợ chỉ việc mang vác nặng.',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 9,
    sectionId: 'sec-l10-t1-1',
    type: 'single_choice',
    questionText: 'Mark the letter A, B, C, or D to indicate the word(s) CLOSEST in meaning to the underlined word(s): <u>Domestic</u> chores will no longer be a burden thanks to the inventions of laborsaving devices.',
    options: [
      { id: 'A', text: 'Official' },
      { id: 'B', text: 'Household' },
      { id: 'C', text: 'Foreign' },
      { id: 'D', text: 'Schooling' }
    ],
    correctAnswer: 'B',
    explanation: 'domestic (adj: thuộc về trong nhà, gia đình) đồng nghĩa với household. "Domestic chores" = "Household chores" (việc nhà). (Official: chính thức; Foreign: nước ngoài; Schooling: học vấn).',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 10,
    sectionId: 'sec-l10-t1-1',
    type: 'single_choice',
    questionText: 'Mark the letter A, B, C, or D to indicate the word(s) OPPOSITE in meaning to the underlined word(s): When having days off, he always helps his wife <u>tidy up</u> the house.',
    options: [
      { id: 'A', text: 'clear up' },
      { id: 'B', text: 'look up' },
      { id: 'C', text: 'cheer up' },
      { id: 'D', text: 'mess up' }
    ],
    correctAnswer: 'D',
    explanation: 'tidy up (dọn dẹp ngăn nắp, gọn gàng) trái nghĩa với mess up (làm bừa bộn, lộn xộn). (clear up: dọn dẹp sạch; look up: tra cứu; cheer up: cổ vũ, làm vui lên).',
    cognitiveLevel: 'Thông hiểu'
  },

  // SECTION 2: READING - PART 1: CLOZE TEST (11 - 15)
  {
    index: 11,
    sectionId: 'sec-l10-t1-2',
    type: 'single_choice',
    questionText: 'Women have been moving into the workforce not only for career satisfaction (11) ______ for the income.',
    options: [
      { id: 'A', text: 'but also' },
      { id: 'B', text: 'but' },
      { id: 'C', text: 'and' },
      { id: 'D', text: 'or' }
    ],
    correctAnswer: 'A',
    explanation: 'Cấu trúc liên từ tương quan: "not only ... but also ..." (không những ... mà còn ...).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 12,
    sectionId: 'sec-l10-t1-2',
    type: 'single_choice',
    questionText: 'Some women return to work soon after giving birth because they know that most employers are not sympathetic to working mothers (12) ______ wish to take time off to be with their young children.',
    options: [
      { id: 'A', text: 'which' },
      { id: 'B', text: 'whose' },
      { id: 'C', text: 'when' },
      { id: 'D', text: 'who' }
    ],
    correctAnswer: 'D',
    explanation: 'Đại từ quan hệ "who" thay thế cho danh từ chỉ người "working mothers" và làm chủ ngữ cho mệnh đề quan hệ phía sau (wish to take time off).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 13,
    sectionId: 'sec-l10-t1-2',
    type: 'single_choice',
    questionText: 'Some people still think that a “good mother” is one who gives (13) ______ work to stay home with her children.',
    options: [
      { id: 'A', text: 'on' },
      { id: 'B', text: 'at' },
      { id: 'C', text: 'up' },
      { id: 'D', text: 'in' }
    ],
    correctAnswer: 'C',
    explanation: 'Cụm động từ: "give up sth" = từ bỏ / ngừng làm việc gì. "give up work" = từ bỏ công việc.',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 14,
    sectionId: 'sec-l10-t1-2',
    type: 'single_choice',
    questionText: 'In most families with working mothers, each person (14) ______ a more active role in the household.',
    options: [
      { id: 'A', text: 'plays' },
      { id: 'B', text: 'does' },
      { id: 'C', text: 'makes' },
      { id: 'D', text: 'works' }
    ],
    correctAnswer: 'A',
    explanation: 'Collocation: "play a role in sth" = đóng vai trò trong việc gì.',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 15,
    sectionId: 'sec-l10-t1-2',
    type: 'single_choice',
    questionText: 'These positive outcomes are most likely when the working mother feels valued and (15) ______ by family, friends, and co-workers.',
    options: [
      { id: 'A', text: 'support' },
      { id: 'B', text: 'supported' },
      { id: 'C', text: 'supporting' },
      { id: 'D', text: 'supportive' }
    ],
    correctAnswer: 'B',
    explanation: 'Cấu trúc song hành với liên từ "and": sau "feels", tính từ / phân từ hai mang nghĩa bị động "valued and supported" (cảm thấy được trân trọng và được ủng hộ).',
    cognitiveLevel: 'Thông hiểu'
  },

  // SECTION 3: READING - PART 2: READING COMPREHENSION (16 - 20)
  {
    index: 16,
    sectionId: 'sec-l10-t1-3',
    type: 'single_choice',
    questionText: 'According to the passage, which of the following is NOT true?',
    options: [
      { id: 'A', text: 'Chores can help children feel proud and happy.' },
      { id: 'B', text: 'Chores help children practice patience and self-control.' },
      { id: 'C', text: 'Chores prepare children for independent life in the future.' },
      { id: 'D', text: 'Chores make children better at playing sports.' }
    ],
    correctAnswer: 'D',
    explanation: 'Bài viết đề cập: đoạn 2 nói về rèn luyện tính kiên nhẫn và tự chủ (B đúng); đoạn 3 nói về cảm thấy tự hào, hạnh phúc (A đúng) và chuẩn bị cho cuộc sống độc lập (C đúng). Bài viết không hề đề cập việc làm việc nhà giúp trẻ chơi thể thao giỏi hơn (D sai).',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 17,
    sectionId: 'sec-l10-t1-3',
    type: 'single_choice',
    questionText: 'The word <u>them</u> in the passage refers to ____.',
    options: [
      { id: 'A', text: 'children' },
      { id: 'B', text: 'tasks' },
      { id: 'C', text: 'chores' },
      { id: 'D', text: 'clothes' }
    ],
    correctAnswer: 'A',
    explanation: 'Từ "them" ở đoạn 2 ("setting the table or sorting clothes helps <u>them</u> practice following steps...") quy chiếu về đối tượng "children" được nhắc ở câu đầu đoạn ("Doing chores also teaches children...").',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 18,
    sectionId: 'sec-l10-t1-3',
    type: 'single_choice',
    questionText: 'The word <u>confidence</u> in the passage is opposite in meaning to____.',
    options: [
      { id: 'A', text: 'fear' },
      { id: 'B', text: 'courage' },
      { id: 'C', text: 'strength' },
      { id: 'D', text: 'bravery' }
    ],
    correctAnswer: 'A',
    explanation: 'confidence (sự tự tin, niềm tin vào bản thân) trái nghĩa với fear (sự sợ hãi, e ngại, thiếu tự tin). (courage, bravery: lòng dũng cảm; strength: sức mạnh).',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 19,
    sectionId: 'sec-l10-t1-3',
    type: 'single_choice',
    questionText: 'According to the passage, which of the following is TRUE about chores?',
    options: [
      { id: 'A', text: 'They give children routines and teach new skills.' },
      { id: 'B', text: 'They only give children simple routines without any skills.' },
      { id: 'C', text: 'They prevent children from feeling proud of themselves.' },
      { id: 'D', text: 'They are too difficult for toddlers to start with.' }
    ],
    correctAnswer: 'A',
    explanation: 'Bài đọc chỉ ra việc làm việc nhà rèn nề nếp và dạy các kỹ năng sống mới ("learn important life skills", "train kids to wait for rewards", "practice following steps and managing time") -> Phương án A đúng. Các phương án B, C, D đều trái ngược với nội dung bài.',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 20,
    sectionId: 'sec-l10-t1-3',
    type: 'single_choice',
    questionText: 'Which of the following is the best title for the passage?',
    options: [
      { id: 'A', text: 'Fun activities for children' },
      { id: 'B', text: 'The importance of chores for kids' },
      { id: 'C', text: 'Family rules and discipline' },
      { id: 'D', text: 'Independent life of adults' }
    ],
    correctAnswer: 'B',
    explanation: 'Toàn bộ bài viết tập trung phân tích những lợi ích toàn diện và tầm quan trọng của việc để con trẻ làm việc nhà đối với sự phát triển nhân cách và kỹ năng ("The importance of chores for kids").',
    cognitiveLevel: 'Vận dụng'
  },

  // SECTION 4: WRITING - PART 1: SENTENCE ARRANGEMENT (21 - 22)
  {
    index: 21,
    sectionId: 'sec-l10-t1-4',
    type: 'single_choice',
    questionText: `Mark the letter A, B, C or D to indicate the best arrangement of utterances to make a meaningful exchange:
a. Jack: That’s great! Helping with chores shows respect and builds strong family bonds.
b. Lucy: Yes, I often do the laundry and tidy up the kitchen. My parents really appreciate it.
c. Jack: Hey Lucy, do you help your parents with the household chores?`,
    options: [
      { id: 'A', text: 'c-a-b' },
      { id: 'B', text: 'b-a-c' },
      { id: 'C', text: 'c-b-a' },
      { id: 'D', text: 'b-c-a' }
    ],
    correctAnswer: 'C',
    explanation: 'Trật tự hội thoại mạch lạc: c (Jack mở lời hỏi Lucy có giúp bố mẹ làm việc nhà không) -> b (Lucy trả lời khẳng định và kể những việc mình làm) -> a (Jack nhận xét tích cực về việc đó).',
    cognitiveLevel: 'Vận dụng'
  },
  {
    index: 22,
    sectionId: 'sec-l10-t1-4',
    type: 'single_choice',
    questionText: `Mark the letter A, B, C or D to indicate the best arrangement of sentences to make a meaningful letter:
Dear Win,
a. I'm incredibly grateful for all the love and laughter they bring into my life.
b. We always have such a great time together, whether we're sharing a meal or just chatting.
c. They are truly my rock and constant source of support. 
d. I hope this letter finds you well. 
e. I was just thinking about how much my family means to me lately. 
I hope you're doing well and enjoying time with your own loved ones too!
Warmly,
Huy`,
    options: [
      { id: 'A', text: 'd-c-e-a-b' },
      { id: 'B', text: 'd-a-b-e-c' },
      { id: 'C', text: 'd-e-c-b-a' },
      { id: 'D', text: 'd-c-b-e-a' }
    ],
    correctAnswer: 'C',
    explanation: 'Trật tự phát triển của lá thư: d (Lời chào hỏi xã giao mở đầu thư) -> e (Nêu suy nghĩ về ý nghĩa gia đình) -> c (Khẳng định gia đình là điểm tựa vững chắc) -> b (Minh hoạ những khoảng thời gian bên nhau) -> a (Bày tỏ lòng biết ơn trước khi kết thúc thư).',
    cognitiveLevel: 'Vận dụng'
  },

  // SECTION 5: WRITING - PART 2: TỰ LUẬN (SENTENCE TRANSFORMATION) (23 - 26) - HỌC SINH TỰ GÕ CÂU
  {
    index: 23,
    sectionId: 'sec-l10-t1-5',
    type: 'text_input',
    inputPrompt: 'They usually',
    questionText: `[TỰ LUẬN] Rewrite each of the following sentences in such a way that it means the same as the given sentence:
Their football games are usually on Saturdays.
→ They usually ________________________________________`,
    options: [],
    correctAnswer: 'They usually play football on Saturdays.',
    acceptableAnswers: [
      'They usually play football on Saturdays.',
      'play football on Saturdays.',
      'They usually play football on Saturdays',
      'play football on Saturdays',
      'they usually play football on Saturdays.',
      'they usually play football on Saturdays'
    ],
    explanation: 'Câu gốc diễn tả trận đấu bóng đá thường diễn ra vào thứ Bảy -> Viết lại dạng hành động thói quen: "They usually play football on Saturdays." Chủ ngữ "They" đi với động từ nguyên thể "play" ở thì Hiện tại đơn.',
    cognitiveLevel: 'Vận dụng'
  },
  {
    index: 24,
    sectionId: 'sec-l10-t1-5',
    type: 'text_input',
    inputPrompt: 'I sometimes',
    questionText: `[TỰ LUẬN] Rewrite each of the following sentences in such a way that it means the same as the given sentence:
Sometimes I leave the room, I forget to turn off the lights.
→ I sometimes ________________________________________`,
    options: [],
    correctAnswer: 'I sometimes forget to turn off the lights when I leave the room.',
    acceptableAnswers: [
      'I sometimes forget to turn off the lights when I leave the room.',
      'forget to turn off the lights when I leave the room.',
      'I sometimes forget to turn off the lights when I leave the room',
      'forget to turn off the lights when I leave the room',
      'I sometimes forget to turn off the lights whenever I leave the room.',
      'forget to turn off the lights whenever I leave the room.',
      'i sometimes forget to turn off the lights when i leave the room.'
    ],
    explanation: 'Cấu trúc: forget to do sth = quên phải làm việc gì. Viết lại kết hợp mệnh đề chỉ thời gian: "I sometimes forget to turn off the lights when I leave the room."',
    cognitiveLevel: 'Vận dụng'
  },
  {
    index: 25,
    sectionId: 'sec-l10-t1-5',
    type: 'text_input',
    inputPrompt: 'While',
    questionText: `[TỰ LUẬN] Rewrite each of the following sentences in such a way that it means the same as the given sentence:
My brothers clean the floor and my sister does the washing up as the same time. (While)
→ While ________________________________________________________`,
    options: [],
    correctAnswer: 'While my brothers are cleaning the floor, my sister is doing the washing up.',
    acceptableAnswers: [
      'While my brothers are cleaning the floor, my sister is doing the washing up.',
      'my brothers are cleaning the floor, my sister is doing the washing up.',
      'While my brothers are cleaning the floor, my sister is doing the washing up',
      'my brothers are cleaning the floor, my sister is doing the washing up',
      'While my sister is doing the washing up, my brothers are cleaning the floor.',
      'my sister is doing the washing up, my brothers are cleaning the floor.',
      'While my sister is doing the washing up, my brothers are cleaning the floor',
      'my sister is doing the washing up, my brothers are cleaning the floor'
    ],
    explanation: 'Diễn tả hai hành động đang diễn ra song song cùng lúc ở hiện tại dùng thì Hiện tại tiếp diễn: "While + S1 + am/is/are + V-ing, S2 + am/is/are + V-ing" -> "While my brothers are cleaning the floor, my sister is doing the washing up."',
    cognitiveLevel: 'Vận dụng cao'
  },
  {
    index: 26,
    sectionId: 'sec-l10-t1-5',
    type: 'text_input',
    inputPrompt: 'While',
    questionText: `[TỰ LUẬN] Rewrite each of the following sentences in such a way that it means the same as the given sentence:
I do my homework and my sister watches TV at the same time. (While)
→ While __________________________________________________________.`,
    options: [],
    correctAnswer: 'While I am doing my homework, my sister is watching TV.',
    acceptableAnswers: [
      'While I am doing my homework, my sister is watching TV.',
      'I am doing my homework, my sister is watching TV.',
      'While I am doing my homework, my sister is watching TV',
      'I am doing my homework, my sister is watching TV',
      'While my sister is watching TV, I am doing my homework.',
      'my sister is watching TV, I am doing my homework.',
      'While my sister is watching TV, I am doing my homework',
      'my sister is watching TV, I am doing my homework'
    ],
    explanation: 'Diễn tả hai hành động diễn ra song song cùng lúc ở hiện tại: "While I am doing my homework, my sister is watching TV."',
    cognitiveLevel: 'Vận dụng cao'
  }
];

const examL10T1 = {
  id: 'de-cuong-on-tap-gk1-lop-10-test-1',
  title: 'Đề Cương Ôn Tập Giữa Kì 1 - Lớp 10 (Test 1: Unit 1 - Family Life)',
  description: 'Đề cương ôn tập kiểm tra giữa kì 1 Tiếng Anh 10 năm học 2026-2027 (Test 1 - Unit 1: Family Life - THPT Nguyễn Dục, Đà Nẵng). Bao gồm đầy đủ các phần: Trọng âm, Ngữ pháp - Từ vựng, Đồng nghĩa - Trái nghĩa (có gạch chân), Đọc đục lỗ, Đọc hiểu và Kỹ năng viết (Sắp xếp câu & Tự luận học sinh tự gõ câu viết lại) kèm đáp án chi tiết.',
  subject: 'Tiếng Anh',
  category: 'Ôn giữa kỳ 1',
  categories: ['Ôn thi giữa kì 1', 'Lớp 10', 'Unit 1'],
  grade: 'Lớp 10',
  durationMinutes: 60,
  totalQuestions: 26,
  originalFileName: 'DE CUONG ON TAP GK1-26-27 TEST 1 UNIT 1 - ANH 10.docx',
  status: 'ready',
  createdAt: '2026-10-23T15:00:00.000Z',
  updatedAt: '2026-10-23T15:00:00.000Z',
  tags: [
    'Lớp 10',
    'Giữa kì 1',
    'Unit 1',
    'Family Life',
    'Trắc nghiệm',
    'Tự luận'
  ],
  sections: test1Sections,
  questions: test1Questions.map(q => ({
    id: `l10-t1-q${q.index}`,
    index: q.index,
    sectionId: q.sectionId,
    questionText: q.questionText,
    type: q.type || 'single_choice',
    options: q.options || [],
    correctAnswer: q.correctAnswer,
    acceptableAnswers: q.acceptableAnswers,
    inputPrompt: q.inputPrompt,
    explanation: q.explanation,
    cognitiveLevel: q.cognitiveLevel,
    points: 10 / 26
  }))
};


// ============================================================================
// ĐỀ 2: TEST 2 - UNIT 1: FAMILY LIFE
// ============================================================================
const test2Sections = [
  {
    id: 'sec-l10-t2-1',
    title: 'I. LANGUAGE',
    instruction: 'Mark the letter A, B, C, or D on your answer sheet to indicate the correct answer to each of the following questions.',
    questionIndices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  {
    id: 'sec-l10-t2-2',
    title: 'II. READING - PART 1: CLOZE TEST',
    passageTitle: 'Living in a Big Family',
    instruction: 'Read the following passage carefully and then choose the best option to fit each numbered blank (from 11 to 15).',
    passage: `My name is Lizzie and I have a big family with 6 people: my parents, me and three brothers. It’s great fun, but it’s not always easy (11) __________ in a large family. In my family, we don’t do many things together on weekdays because we’re very busy. My parents have to leave for work very early, so we never have breakfast as a family. (12) __________, we always eat dinner at home; sometimes we watch TV together. My brothers and I often argue about (13) __________ to watch on TV. My brothers usually win and I watch the things they like, even football. But I’m easygoing and I don’t get upset easily. My parents often come home late, so we share the housework. I do the laundry, hang out clothes and take out the garbage. My big brothers, Matt and Tony set the table and vacuum the carpets. They help me (14) __________ my homework, too. My little brother, Tommy is only six years old, so his only chores are putting his toys away and feeding our cat. Sometimes, he’s very messy, so I often have to clean up in the end. I love him, but I think I’m too (15) __________ with him.`,
    questionIndices: [11, 12, 13, 14, 15]
  },
  {
    id: 'sec-l10-t2-3',
    title: 'II. READING - PART 2: READING COMPREHENSION',
    passageTitle: 'The Meaning of Family and Healthy Relationships',
    instruction: 'Read the following passage and mark the letter A, B, C, or D on your answer sheet to indicate the correct answer to each of the questions.',
    passage: `We first learn about loving and caring relationships from our families. Family is defined as a domestic group of people with some degree of kinship - whether through blood, marriage, or adoption. Ideally, each child is nurtured, respected, and grows up to care for others and develop strong and healthy relationships. This does not mean that it is always easy to make and keep friends; it just means that we share the goal of having strong relationships.

"Family" includes your <u>siblings</u> and parents, as well as relatives who you may not interact with every day, such as your cousins, aunts, uncles, grandparents, and stepparents. These are probably the people you are closest to and with whom you spend the most time. Having healthy relationships with your family members is both important and difficult.

Families in the 21st century come in all shapes and sizes: traditional, single parent, blended (more than one family together in the same house), and gay and lesbian parents - just to name a few. No matter the "type" of family you have, there are going to be highs and lows - good times and bad. Many times, however, families become blocked in their relationships by hurt, anger, mistrust, and confusion. <u>These</u> are natural and normal, and few families do not have at least a few experiences with them. The worst time, for most families, is during a divorce. By making a few simple changes in the way we look at the world and deal with other people, it is possible to create happier, more stable relationships. Families need to be units of mutual caring and support; they can be sources of lifelong strength for all individuals.
(Adapted from pamf.org)`,
    questionIndices: [16, 17, 18, 19, 20]
  },
  {
    id: 'sec-l10-t2-4',
    title: 'III. WRITING - PART 1: SENTENCE ARRANGEMENT',
    instruction: 'Mark the letter A, B, C or D to indicate the best arrangement of utterances or sentences to make a meaningful exchange or text in each of the following questions.',
    questionIndices: [21, 22]
  },
  {
    id: 'sec-l10-t2-5',
    title: 'III. WRITING - PART 2: TỰ LUẬN (SENTENCE TRANSFORMATION)',
    instruction: 'Rewrite the following sentences as long as the meaning is unchanged, using the given words. (Học sinh tự gõ câu viết lại vào ô trống bên dưới).',
    questionIndices: [23, 24, 25, 26]
  }
];

const test2Questions = [
  // SECTION 1: LANGUAGE (1 - 10)
  {
    index: 1,
    sectionId: 'sec-l10-t2-1',
    type: 'single_choice',
    questionText: 'Mark the letter A, B, C, or D to indicate the word that differs from the other three in the position of primary stress.',
    options: [
      { id: 'A', text: 'spotlessly' },
      { id: 'B', text: 'experience' },
      { id: 'C', text: 'society' },
      { id: 'D', text: 'responsible' }
    ],
    correctAnswer: 'A',
    explanation: 'spotlessly có trọng âm rơi vào âm tiết thứ nhất (/ˈspɒtləsli/), các từ còn lại có trọng âm rơi vào âm tiết thứ 2: experience (/ɪkˈspɪəriəns/), society (/səˈsaɪəti/), responsible (/rɪˈspɒnsəbl/).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 2,
    sectionId: 'sec-l10-t2-1',
    type: 'single_choice',
    questionText: 'Mark the letter A, B, C, or D to indicate the word that differs from the other three in the position of primary stress.',
    options: [
      { id: 'A', text: 'similar' },
      { id: 'B', text: 'important' },
      { id: 'C', text: 'atmosphere' },
      { id: 'D', text: 'breadwinner' }
    ],
    correctAnswer: 'B',
    explanation: 'important có trọng âm rơi vào âm tiết thứ 2 (/ɪmˈpɔːtnt/), các từ còn lại có trọng âm rơi vào âm tiết thứ nhất: similar (/ˈsɪmələr/), atmosphere (/ˈætməsfɪər/), breadwinner (/ˈbredwɪnər/).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 3,
    sectionId: 'sec-l10-t2-1',
    type: 'single_choice',
    questionText: 'Listen! Someone ______________.',
    options: [
      { id: 'A', text: 'is singing' },
      { id: 'B', text: 'are singing' },
      { id: 'C', text: 'sings' },
      { id: 'D', text: 'sing' }
    ],
    correctAnswer: 'A',
    explanation: 'Dấu hiệu câu mệnh lệnh cảm thán "Listen!" chỉ hành động đang xảy ra tại thời điểm nói -> thì Hiện tại tiếp diễn. Đại từ bất định "Someone" làm chủ ngữ số ít nên dùng "is singing".',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 4,
    sectionId: 'sec-l10-t2-1',
    type: 'single_choice',
    questionText: 'I usually __________ to school by bus.',
    options: [
      { id: 'A', text: 'went' },
      { id: 'B', text: 'am going' },
      { id: 'C', text: 'go' },
      { id: 'D', text: 'have gone' }
    ],
    correctAnswer: 'C',
    explanation: 'Trạng từ tần suất "usually" diễn tả thói quen thường nhật -> thì Hiện tại đơn. Chủ ngữ "I" đi với động từ nguyên thể: "go".',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 5,
    sectionId: 'sec-l10-t2-1',
    type: 'single_choice',
    questionText: 'My responsibility is to wash the dishes and ______ the rubbish.',
    options: [
      { id: 'A', text: 'take up' },
      { id: 'B', text: 'get out' },
      { id: 'C', text: 'get up' },
      { id: 'D', text: 'put out' }
    ],
    correctAnswer: 'D',
    explanation: 'Cụm động từ: "put out the rubbish" (hoặc take out the rubbish) = đem rác ra ngoài đổ.',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 6,
    sectionId: 'sec-l10-t2-1',
    type: 'single_choice',
    questionText: 'After eating dinner, I have to do the ____________and then do my homework every day.',
    options: [
      { id: 'A', text: 'washing-up' },
      { id: 'B', text: 'wash-up' },
      { id: 'C', text: 'washing-ups' },
      { id: 'D', text: 'washings-up' }
    ],
    correctAnswer: 'A',
    explanation: 'Cụm danh từ cố định: "do the washing-up" (danh từ không đếm được) = việc rửa bát đĩa sau bữa ăn.',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 7,
    sectionId: 'sec-l10-t2-1',
    type: 'single_choice',
    questionText: 'Preparing and cooking meals are some of the essential __________for teens.',
    options: [
      { id: 'A', text: 'soft skills' },
      { id: 'B', text: 'life skills' },
      { id: 'C', text: 'table manners' },
      { id: 'D', text: 'netiquette' }
    ],
    correctAnswer: 'B',
    explanation: 'Từ vựng Unit 1: "life skills" = kỹ năng sống (tự lập, nấu ăn, dọn dẹp). (soft skills: kỹ năng mềm; table manners: quy tắc bàn ăn; netiquette: văn hoá ứng xử trên mạng).',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 8,
    sectionId: 'sec-l10-t2-1',
    type: 'single_choice',
    questionText: 'When I lived in this city, I used to shop for ____________at this supermarket.',
    options: [
      { id: 'A', text: 'heavy lifting' },
      { id: 'B', text: 'groceries' },
      { id: 'C', text: 'housework' },
      { id: 'D', text: 'laundry' }
    ],
    correctAnswer: 'B',
    explanation: 'Cụm từ: "shop for groceries" = đi mua sắm hàng tạp phẩm, thực phẩm gia đình.',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 9,
    sectionId: 'sec-l10-t2-1',
    type: 'single_choice',
    questionText: 'Mark the letter A, B, C, or D to indicate the word(s) CLOSEST in meaning to the underlined word(s): Doing housework at a young age provides children with <u>necessary</u> life skills.',
    options: [
      { id: 'A', text: 'essential' },
      { id: 'B', text: 'extra' },
      { id: 'C', text: 'unimportant' },
      { id: 'D', text: 'useless' }
    ],
    correctAnswer: 'A',
    explanation: 'necessary (cần thiết, thiết yếu) đồng nghĩa với essential. (extra: thêm vào; unimportant: không quan trọng; useless: vô dụng).',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 10,
    sectionId: 'sec-l10-t2-1',
    type: 'single_choice',
    questionText: 'Mark the letter A, B, C, or D to indicate the word(s) OPPOSITE in meaning to the underlined word(s): Showing gratitude for the little things in life <u>strengthens</u> family relationships and promotes a positive atmosphere.',
    options: [
      { id: 'A', text: 'enhances' },
      { id: 'B', text: 'decreases' },
      { id: 'C', text: 'improves' },
      { id: 'D', text: 'destroys' }
    ],
    correctAnswer: 'B',
    explanation: 'strengthen (làm mạnh thêm, củng cố, tăng cường) trái nghĩa với decrease (làm suy giảm, sụt giảm). (enhances, improves: nâng cao, cải thiện - từ đồng nghĩa).',
    cognitiveLevel: 'Thông hiểu'
  },

  // SECTION 2: READING - PART 1: CLOZE TEST (11 - 15)
  {
    index: 11,
    sectionId: 'sec-l10-t2-2',
    type: 'single_choice',
    questionText: 'It’s great fun, but it’s not always easy (11) __________ in a large family.',
    options: [
      { id: 'A', text: 'have' },
      { id: 'B', text: 'to be' },
      { id: 'C', text: 'live' },
      { id: 'D', text: 'to own' }
    ],
    correctAnswer: 'B',
    explanation: 'Cấu trúc: "It is (not) + adj + to-V". Trong 4 phương án, chỉ có "to be" và "to own" có dạng to-infinitive, và "to be in a large family" mang nghĩa sống/ở trong một đại gia đình.',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 12,
    sectionId: 'sec-l10-t2-2',
    type: 'single_choice',
    questionText: '...so we never have breakfast as a family. (12) __________, we always eat dinner at home; sometimes we watch TV together.',
    options: [
      { id: 'A', text: 'Therefore' },
      { id: 'B', text: 'Although' },
      { id: 'C', text: 'However' },
      { id: 'D', text: 'But' }
    ],
    correctAnswer: 'C',
    explanation: 'Trạng từ liên kết "However" (Tuy nhiên) đứng đầu câu sau có dấu phẩy biểu thị ý tương phản giữa việc không ăn sáng cùng nhau và luôn ăn tối cùng nhau.',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 13,
    sectionId: 'sec-l10-t2-2',
    type: 'single_choice',
    questionText: 'My brothers and I often argue about (13) __________ to watch on TV.',
    options: [
      { id: 'A', text: 'which' },
      { id: 'B', text: 'what' },
      { id: 'C', text: 'when' },
      { id: 'D', text: 'that' }
    ],
    correctAnswer: 'B',
    explanation: 'Cấu trúc từ để hỏi + to-V: "what to watch" = xem cái gì trên TV.',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 14,
    sectionId: 'sec-l10-t2-2',
    type: 'single_choice',
    questionText: 'They help me (14) __________ my homework, too.',
    options: [
      { id: 'A', text: 'for' },
      { id: 'B', text: 'in' },
      { id: 'C', text: 'with' },
      { id: 'D', text: 'about' }
    ],
    correctAnswer: 'C',
    explanation: 'Cấu trúc: "help somebody with something" = giúp ai việc gì.',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 15,
    sectionId: 'sec-l10-t2-2',
    type: 'single_choice',
    questionText: 'I love him, but I think I’m too (15) __________ with him.',
    options: [
      { id: 'A', text: 'patience' },
      { id: 'B', text: 'patiently' },
      { id: 'C', text: 'impatient' },
      { id: 'D', text: 'patient' }
    ],
    correctAnswer: 'D',
    explanation: 'Sau "am too" cần tính từ. Cụm: "be patient with somebody" = kiên nhẫn, nhẫn nại với ai. (patience là danh từ; patiently là trạng từ; impatient là thiếu kiên nhẫn).',
    cognitiveLevel: 'Thông hiểu'
  },

  // SECTION 3: READING - PART 2: READING COMPREHENSION (16 - 20)
  {
    index: 16,
    sectionId: 'sec-l10-t2-3',
    type: 'single_choice',
    questionText: 'Ideally, each child is nurtured, respected, and grows up________.',
    options: [
      { id: 'A', text: 'to keep in touch with the people around them.' },
      { id: 'B', text: 'to keep a track of the people around them.' },
      { id: 'C', text: 'to be familiar with the people around them.' },
      { id: 'D', text: 'to be concerned about the people around them.' }
    ],
    correctAnswer: 'D',
    explanation: 'Thông tin trong bài: "...grows up to care for others and develop strong and healthy relationships." Cụm "care for others" đồng nghĩa với "to be concerned about the people around them" (biết quan tâm tới mọi người xung quanh).',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 17,
    sectionId: 'sec-l10-t2-3',
    type: 'single_choice',
    questionText: 'What does the word <u>These</u> in paragraph 3 refer to?',
    options: [
      { id: 'A', text: 'good and bad times' },
      { id: 'B', text: 'feelings' },
      { id: 'C', text: 'relationships' },
      { id: 'D', text: 'highs and lows' }
    ],
    correctAnswer: 'B',
    explanation: 'Trong bài viết: "...families become blocked in their relationships by hurt, anger, mistrust, and confusion. <u>These</u> are natural and normal...". Đại từ "These" thay thế cho các trạng thái cảm xúc (feelings) tiêu cực vừa liệt kê: hurt, anger, mistrust, confusion.',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 18,
    sectionId: 'sec-l10-t2-3',
    type: 'single_choice',
    questionText: 'According to the passage, which example below is probably NOT TRUE about the definition of family?',
    options: [
      { id: 'A', text: 'wife and husband relationship' },
      { id: 'B', text: 'step-father and daughter relationship' },
      { id: 'C', text: 'nanny and baby relationship' },
      { id: 'D', text: 'god-mother and god-son relationship' }
    ],
    correctAnswer: 'C',
    explanation: 'Đoạn 1 nêu: "Family is defined as a domestic group of people with some degree of kinship - whether through blood, marriage, or adoption." Mối quan hệ giữa bảo mẫu (nanny) và em bé (baby) là quan hệ hợp đồng lao động / dịch vụ, không phải quan hệ gia đình (huyết thống, hôn nhân hay con nuôi).',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 19,
    sectionId: 'sec-l10-t2-3',
    type: 'single_choice',
    questionText: 'Which of the following is closest in meaning to <u>siblings</u> in paragraph 2?',
    options: [
      { id: 'A', text: 'brothers and sisters' },
      { id: 'B', text: 'husband and wife' },
      { id: 'C', text: 'children' },
      { id: 'D', text: 'friends' }
    ],
    correctAnswer: 'A',
    explanation: 'sibling (danh từ) = anh chị em ruột (brothers and sisters).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 20,
    sectionId: 'sec-l10-t2-3',
    type: 'single_choice',
    questionText: 'What is the main idea of the passage?',
    options: [
      { id: 'A', text: 'The importance of sharing housework in a family.' },
      { id: 'B', text: 'The importance of having children in a family.' },
      { id: 'C', text: 'The role of members in a family.' },
      { id: 'D', text: 'The healthy relationships among members in a family' }
    ],
    correctAnswer: 'D',
    explanation: 'Bài đọc xuyên suốt tập trung luận bàn về định nghĩa gia đình và việc nuôi dưỡng các mối quan hệ lành mạnh, bền vững giữa các thành viên ("The healthy relationships among members in a family").',
    cognitiveLevel: 'Vận dụng'
  },

  // SECTION 4: WRITING - PART 1: SENTENCE ARRANGEMENT (21 - 22)
  {
    index: 21,
    sectionId: 'sec-l10-t2-4',
    type: 'single_choice',
    questionText: `Mark the letter A, B, C or D to indicate the best arrangement of utterances to make a meaningful exchange:
a. Tom: That sounds unfair. You do all the heavy lifting?
b. Emma: Yes, I cook, clean, and even take care of our dog.
c. Emma: My little brother never helps with the chores.
d. Tom: You should talk to him and ask for equal support. Families should work together.`,
    options: [
      { id: 'A', text: 'c-a-b-d' },
      { id: 'B', text: 'a-b-d-c' },
      { id: 'C', text: 'c-d-b-a' },
      { id: 'D', text: 'a-c-d-b' }
    ],
    correctAnswer: 'A',
    explanation: 'Trật tự đối thoại logic: c (Emma phàn nàn em trai không giúp việc nhà) -> a (Tom ngạc nhiên hỏi bạn phải làm hết việc nặng à) -> b (Emma liệt kê chi tiết các việc mình làm) -> d (Tom khuyên nên chia sẻ công việc công bằng).',
    cognitiveLevel: 'Vận dụng'
  },
  {
    index: 22,
    sectionId: 'sec-l10-t2-4',
    type: 'single_choice',
    questionText: `Mark the letter A, B, C or D to indicate the best arrangement of sentences to make a meaningful letter:
Dear Grandma,
a. Market by teaching English to children and assisting with minor home repairs—seeing their smiles really warms my heart.
b. I’ve been volunteering every Saturday morning with Hearts for Hue, helping local families near Đông Ba.
c. Your advice—“help others as you help your own family”—guides me every time I volunteer.
d. Last week, we delivered donated books and groceries to five households; they appreciated our support and invited us to share a cup of tea. How have you been? 
e. I hope you’re enjoying peaceful walks by the Perfume River and staying well.
f. I would love to bring you along next Saturday; your presence would mean so much to everyone.
Love,
Emma`,
    options: [
      { id: 'A', text: 'b-a-d-e-c-f' },
      { id: 'B', text: 'b-c-f-d-a-e' },
      { id: 'C', text: 'c-a-d-b-e-f' },
      { id: 'D', text: 'c-d-b-e-f-a' }
    ],
    correctAnswer: 'A',
    explanation: 'Phân tích trật tự logic: Câu b nối trực tiếp sang câu a ("helping local families near Đông Ba Market by teaching English...") -> cặp b-a. Tiếp theo kể chi tiết hoạt động tuần trước (d). Lời hỏi thăm bà dạo bộ bên bờ sông Hương (e). Nhắc lại lời dạy quý báu của bà làm kim chỉ nam (c) và ngỏ ý mời bà đi cùng vào thứ 7 tới (f). Trật tự đúng là b-a-d-e-c-f.',
    cognitiveLevel: 'Vận dụng cao'
  },

  // SECTION 5: WRITING - PART 2: TỰ LUẬN (SENTENCE TRANSFORMATION) (23 - 26) - HỌC SINH TỰ GÕ CÂU
  {
    index: 23,
    sectionId: 'sec-l10-t2-5',
    type: 'text_input',
    inputPrompt: 'She often',
    questionText: `[TỰ LUẬN] Rewrite the following sentences as long as the meaning is unchanged, using the given words:
Her lunch is often at 12 o’clock.
→ She often _________________________________________`,
    options: [],
    correctAnswer: 'She often has lunch at 12 o’clock.',
    acceptableAnswers: [
      'She often has lunch at 12 o’clock.',
      'has lunch at 12 o’clock.',
      'She often has lunch at 12 o’clock',
      'has lunch at 12 o’clock',
      'She often has her lunch at 12 o’clock.',
      'has her lunch at 12 o’clock.',
      'She often has her lunch at 12 o’clock',
      'has her lunch at 12 o’clock',
      "She often has lunch at 12 o'clock.",
      "has lunch at 12 o'clock.",
      "She often has lunch at 12 o'clock",
      "has lunch at 12 o'clock",
      "She often has her lunch at 12 o'clock.",
      "has her lunch at 12 o'clock."
    ],
    explanation: 'Chuyển từ cấu trúc danh từ "Her lunch is at..." sang cụm động từ thói quen "have lunch". Với chủ ngữ ngôi thứ ba số ít "She", động từ have chia thành has ở thì Hiện tại đơn: "She often has lunch at 12 o’clock."',
    cognitiveLevel: 'Vận dụng'
  },
  {
    index: 24,
    sectionId: 'sec-l10-t2-5',
    type: 'text_input',
    inputPrompt: 'They seldom',
    questionText: `[TỰ LUẬN] Rewrite the following sentences as long as the meaning is unchanged, using the given words:
They don’t often do exercise at the weekends. 
→ They seldom _________________________________________`,
    options: [],
    correctAnswer: 'They seldom do exercise at the weekends.',
    acceptableAnswers: [
      'They seldom do exercise at the weekends.',
      'do exercise at the weekends.',
      'They seldom do exercise at the weekends',
      'do exercise at the weekends',
      'They seldom do exercise on the weekends.',
      'do exercise on the weekends.',
      'They seldom do exercise on the weekends',
      'do exercise on the weekends',
      'They seldom do exercises at the weekends.',
      'do exercises at the weekends.',
      'They seldom do exercises on the weekends.',
      'do exercises on the weekends.'
    ],
    explanation: 'Chuyển từ thể phủ định tần suất "don\'t often" (không thường xuyên) sang trạng từ bán phủ định "seldom" (hiếm khi) mang nghĩa tương đương: "They seldom do exercise at the weekends."',
    cognitiveLevel: 'Vận dụng'
  },
  {
    index: 25,
    sectionId: 'sec-l10-t2-5',
    type: 'text_input',
    inputPrompt: 'While',
    questionText: `[TỰ LUẬN] Rewrite the following sentences as long as the meaning is unchanged, using the given words:
I cook dinner and my brother sets the table at the same time. (While)
→ While ___________________________________________________________________.`,
    options: [],
    correctAnswer: 'While I am cooking dinner, my brother is setting the table.',
    acceptableAnswers: [
      'While I am cooking dinner, my brother is setting the table.',
      'I am cooking dinner, my brother is setting the table.',
      'While I am cooking dinner, my brother is setting the table',
      'I am cooking dinner, my brother is setting the table',
      'While my brother is setting the table, I am cooking dinner.',
      'my brother is setting the table, I am cooking dinner.',
      'While my brother is setting the table, I am cooking dinner',
      'my brother is setting the table, I am cooking dinner'
    ],
    explanation: 'Sử dụng liên từ "While" để kết hợp hai hành động đang xảy ra song song đồng thời tại thời điểm hiện tại: "While I am cooking dinner, my brother is setting the table."',
    cognitiveLevel: 'Vận dụng cao'
  },
  {
    index: 26,
    sectionId: 'sec-l10-t2-5',
    type: 'text_input',
    inputPrompt: 'While',
    questionText: `[TỰ LUẬN] Rewrite the following sentences as long as the meaning is unchanged, using the given words:
My dad fixes the car and my mom takes care of the garden at the same time. (While)
→ While ___________________________________________________________________.`,
    options: [],
    correctAnswer: 'While my dad is fixing the car, my mom is taking care of the garden.',
    acceptableAnswers: [
      'While my dad is fixing the car, my mom is taking care of the garden.',
      'my dad is fixing the car, my mom is taking care of the garden.',
      'While my dad is fixing the car, my mom is taking care of the garden',
      'my dad is fixing the car, my mom is taking care of the garden',
      'While my mom is taking care of the garden, my dad is fixing the car.',
      'my mom is taking care of the garden, my dad is fixing the car.',
      'While my mom is taking care of the garden, my dad is fixing the car',
      'my mom is taking care of the garden, my dad is fixing the car'
    ],
    explanation: 'Sử dụng "While" để kết hợp hai hành động đang diễn ra song song cùng lúc: "While my dad is fixing the car, my mom is taking care of the garden."',
    cognitiveLevel: 'Vận dụng cao'
  }
];

const examL10T2 = {
  id: 'de-cuong-on-tap-gk1-lop-10-test-2',
  title: 'Đề Cương Ôn Tập Giữa Kì 1 - Lớp 10 (Test 2: Unit 1 - Family Life)',
  description: 'Đề cương ôn tập kiểm tra giữa kì 1 Tiếng Anh 10 năm học 2026-2027 (Test 2 - Unit 1: Family Life - THPT Nguyễn Dục, Đà Nẵng). Bao gồm đầy đủ các phần: Trọng âm, Ngữ pháp - Từ vựng, Đồng nghĩa - Trái nghĩa (có gạch chân), Đọc đục lỗ, Đọc hiểu và Kỹ năng viết (Sắp xếp câu & Tự luận học sinh tự gõ câu viết lại) kèm đáp án chi tiết.',
  subject: 'Tiếng Anh',
  category: 'Ôn giữa kỳ 1',
  categories: ['Ôn thi giữa kì 1', 'Lớp 10', 'Unit 1'],
  grade: 'Lớp 10',
  durationMinutes: 60,
  totalQuestions: 26,
  originalFileName: 'DE CUONG ON TAP GK1-26-27TEST 2 UNIT 1 - ANH 10.docx',
  status: 'ready',
  createdAt: '2026-10-23T15:00:00.000Z',
  updatedAt: '2026-10-23T15:00:00.000Z',
  tags: [
    'Lớp 10',
    'Giữa kì 1',
    'Unit 1',
    'Family Life',
    'Trắc nghiệm',
    'Tự luận'
  ],
  sections: test2Sections,
  questions: test2Questions.map(q => ({
    id: `l10-t2-q${q.index}`,
    index: q.index,
    sectionId: q.sectionId,
    questionText: q.questionText,
    type: q.type || 'single_choice',
    options: q.options || [],
    correctAnswer: q.correctAnswer,
    acceptableAnswers: q.acceptableAnswers,
    inputPrompt: q.inputPrompt,
    explanation: q.explanation,
    cognitiveLevel: q.cognitiveLevel,
    points: 10 / 26
  }))
};

module.exports = {
  examL10T1,
  examL10T2
};
