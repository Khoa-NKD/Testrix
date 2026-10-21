const fs = require('fs');
const path = require('path');

/**
 * Xây dựng đề thi 100 câu: "Đề Cương Ôn Tập Toàn Diện Lớp 12 - Unit 2: A Multicultural World (100 Câu Hỏi Phân Hóa)"
 */

const questionsData = [
  // SECTION 1: STRESS (1 - 2)
  {
    index: 1,
    sectionId: 'sec-u2-100-1',
    questionText: 'Mark the letter A, B, C, or D to indicate the word that differs from the other three in the position of primary stress.',
    options: [
      { id: 'A', text: 'cultural' },
      { id: 'B', text: 'popular' },
      { id: 'C', text: 'typical' },
      { id: 'D', text: 'effective' }
    ],
    correctAnswer: 'D',
    explanation: 'effective có trọng âm rơi vào âm tiết thứ 2 (/ɪˈfektɪv/), các từ còn lại có trọng âm rơi vào âm tiết thứ nhất: cultural (/ˈkʌltʃərəl/), popular (/ˈpɒpjələr/), typical (/ˈtɪpɪkl/).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 2,
    sectionId: 'sec-u2-100-1',
    questionText: 'Mark the letter A, B, C, or D to indicate the word that differs from the other three in the position of primary stress.',
    options: [
      { id: 'A', text: 'identity' },
      { id: 'B', text: 'ceremony' },
      { id: 'C', text: 'festivity' },
      { id: 'D', text: 'community' }
    ],
    correctAnswer: 'B',
    explanation: 'ceremony có trọng âm rơi vào âm tiết thứ nhất (/ˈserəməni/), các từ còn lại có hậu tố -ity làm trọng âm rơi vào âm tiết ngay trước nó (âm tiết 2): identity (/aɪˈdentəti/), festivity (/feˈstɪvəti/), community (/kəˈmjuːnəti/).',
    cognitiveLevel: 'Nhận biết'
  },

  // SECTION 2: CLOSEST IN MEANING (3 - 4)
  {
    index: 3,
    sectionId: 'sec-u2-100-2',
    questionText: 'Mark the letter A, B, C, or D to indicate the word CLOSEST in meaning to the underlined word: Taking part in exchange programmes teaches students to respect the <u>diversity</u> of other cultures.',
    options: [
      { id: 'A', text: 'limitation' },
      { id: 'B', text: 'variety' },
      { id: 'C', text: 'similarity' },
      { id: 'D', text: 'agreement' }
    ],
    correctAnswer: 'B',
    explanation: 'diversity (sự đa dạng, phong phú) đồng nghĩa với variety. (limitation: sự giới hạn; similarity: sự tương đồng; agreement: sự đồng thuận).',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 4,
    sectionId: 'sec-u2-100-2',
    questionText: 'Mark the letter A, B, C, or D to indicate the word CLOSEST in meaning to the underlined word: Bun cha and banh my are the two most famous street foods in Vietnam because they are <u>delicious</u>.',
    options: [
      { id: 'A', text: 'insulting' },
      { id: 'B', text: 'unfamiliar' },
      { id: 'C', text: 'spicy' },
      { id: 'D', text: 'tasty' }
    ],
    correctAnswer: 'D',
    explanation: 'delicious (ngon tuyệt, thơm ngon) đồng nghĩa với tasty. (insulting: xúc phạm; unfamiliar: xa lạ; spicy: cay nồng).',
    cognitiveLevel: 'Thông hiểu'
  },

  // SECTION 3: OPPOSITE IN MEANING (5 - 6)
  {
    index: 5,
    sectionId: 'sec-u2-100-3',
    questionText: 'Mark the letter A, B, C, or D to indicate the word OPPOSITE in meaning to the underlined word: Americans often eat turkey at their <u>traditional</u> Thanksgiving dinner.',
    options: [
      { id: 'A', text: 'modern' },
      { id: 'B', text: 'ancient' },
      { id: 'C', text: 'old' },
      { id: 'D', text: 'antique' }
    ],
    correctAnswer: 'A',
    explanation: 'traditional (mang tính truyền thống, lâu đời) trái nghĩa với modern (hiện đại, tân thời).',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 6,
    sectionId: 'sec-u2-100-3',
    questionText: 'Mark the letter A, B, C, or D to indicate the word OPPOSITE in meaning to the underlined word: My cousin has lived in Italy for five years and has learnt the language, but still sounds <u>foreign</u>.',
    options: [
      { id: 'A', text: 'adopted' },
      { id: 'B', text: 'global' },
      { id: 'C', text: 'universal' },
      { id: 'D', text: 'native' }
    ],
    correctAnswer: 'D',
    explanation: 'foreign (ngoại quốc, xa lạ, lơ lớ) trái nghĩa với native (bản xứ, tự nhiên như người bản địa).',
    cognitiveLevel: 'Thông hiểu'
  },

  // SECTION 4: UNIT 2 VOCABULARY (7 - 15)
  {
    index: 7,
    sectionId: 'sec-u2-100-4',
    questionText: 'The UK is a _____ society where different ethnic groups are required to contribute to the country, but can maintain their national identity.',
    options: [
      { id: 'A', text: 'historical' },
      { id: 'B', text: 'popular' },
      { id: 'C', text: 'musical' },
      { id: 'D', text: 'multicultural' }
    ],
    correctAnswer: 'D',
    explanation: 'Cụm danh từ "a multicultural society" có nghĩa là một xã hội đa văn hóa, nơi nhiều nhóm dân tộc cùng chung sống và giữ gìn bản sắc riêng.',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 8,
    sectionId: 'sec-u2-100-4',
    questionText: 'Some people think that globalisation is a threat to _____ cultures.',
    options: [
      { id: 'A', text: 'traditional' },
      { id: 'B', text: 'new' },
      { id: 'C', text: 'modern' },
      { id: 'D', text: 'current' }
    ],
    correctAnswer: 'A',
    explanation: 'Toàn cầu hóa (globalisation) thường được xem là mối đe dọa đối với các nền văn hóa truyền thống (traditional cultures).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 9,
    sectionId: 'sec-u2-100-4',
    questionText: 'The ao dai, the traditional long dress for women, has become a symbol of Vietnamese _____ and culture.',
    options: [
      { id: 'A', text: 'people' },
      { id: 'B', text: 'identity' },
      { id: 'C', text: 'location' },
      { id: 'D', text: 'voice' }
    ],
    correctAnswer: 'B',
    explanation: 'Cụm từ "Vietnamese identity and culture" có nghĩa là bản sắc và văn hóa Việt Nam.',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 10,
    sectionId: 'sec-u2-100-4',
    questionText: 'The _____ lasted four days and included a parade, several concerts, and a dance party.',
    options: [
      { id: 'A', text: 'trends' },
      { id: 'B', text: 'origins' },
      { id: 'C', text: 'festivities' },
      { id: 'D', text: 'attractions' }
    ],
    correctAnswer: 'C',
    explanation: 'festivities (các hoạt động lễ hội, chuỗi sự kiện ăn mừng) kéo dài bốn ngày gồm diễu hành, hòa nhạc và tiệc khiêu vũ.',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 11,
    sectionId: 'sec-u2-100-4',
    questionText: 'To avoid culture shock, learn about the _____ and behaviour of local people in advance.',
    options: [
      { id: 'A', text: 'experiences' },
      { id: 'B', text: 'cultures' },
      { id: 'C', text: 'performances' },
      { id: 'D', text: 'customs' }
    ],
    correctAnswer: 'D',
    explanation: 'customs and behaviour: phong tục tập quán và hành vi ứng xử của người dân bản địa.',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 12,
    sectionId: 'sec-u2-100-4',
    questionText: 'One of the main disadvantages of ________ diversity is that it may create language barriers.',
    options: [
      { id: 'A', text: 'culture' },
      { id: 'B', text: 'cultural' },
      { id: 'C', text: 'culturist' },
      { id: 'D', text: 'cultured' }
    ],
    correctAnswer: 'B',
    explanation: 'Trước danh từ "diversity" cần một tính từ bổ nghĩa: "cultural diversity" (sự đa dạng văn hóa).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 13,
    sectionId: 'sec-u2-100-4',
    questionText: 'As home to people from many countries, London is one of the most culturally ________ cities in the world.',
    options: [
      { id: 'A', text: 'diversity' },
      { id: 'B', text: 'diverse' },
      { id: 'C', text: 'diversification' },
      { id: 'D', text: 'divers' }
    ],
    correctAnswer: 'B',
    explanation: 'Sau trạng từ "culturally" và trước danh từ "cities" cần tính từ: "culturally diverse" (đa dạng về mặt văn hóa).',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 14,
    sectionId: 'sec-u2-100-4',
    questionText: 'Food in Singapore has been influenced by different cultures, so you can find a wide variety of _____ in the city.',
    options: [
      { id: 'A', text: 'languages' },
      { id: 'B', text: 'cuisines' },
      { id: 'C', text: 'cooking' },
      { id: 'D', text: 'views' }
    ],
    correctAnswer: 'B',
    explanation: 'variety of cuisines: sự đa dạng của các nền ẩm thực / các phong cách ẩm thực.',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 15,
    sectionId: 'sec-u2-100-4',
    questionText: 'There are many ways for foreign students to deal with _____ and adjust to the new environment.',
    options: [
      { id: 'A', text: 'globalisation' },
      { id: 'B', text: 'cultural group' },
      { id: 'C', text: 'culture shock' },
      { id: 'D', text: 'youth culture' }
    ],
    correctAnswer: 'C',
    explanation: 'deal with culture shock: đối phó và vượt qua cú sốc văn hóa khi đến môi trường mới.',
    cognitiveLevel: 'Nhận biết'
  },

  // SECTION 5: ARTICLES PART 1 (16 - 20)
  {
    index: 16,
    sectionId: 'sec-u2-100-5',
    questionText: "New Year's Eve is _____ best time of _____ year to celebrate with family and friends.",
    options: [
      { id: 'A', text: 'a – a' },
      { id: 'B', text: 'the – the' },
      { id: 'C', text: 'the – a' },
      { id: 'D', text: 'a - the' }
    ],
    correctAnswer: 'B',
    explanation: 'So sánh nhất dùng "the best time", và cụm danh từ chỉ khoảng thời gian xác định "of the year". Đáp án B: the – the.',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 17,
    sectionId: 'sec-u2-100-5',
    questionText: 'Lily wants to travel around _____ world and experience _____ new cultures.',
    options: [
      { id: 'A', text: 'the – Ø' },
      { id: 'B', text: 'a – Ø' },
      { id: 'C', text: 'the – the' },
      { id: 'D', text: 'a - the' }
    ],
    correctAnswer: 'A',
    explanation: '"around the world" (thế giới là duy nhất nên dùng the). "new cultures" là danh từ số nhiều mang nghĩa chung nên không dùng mạo từ (Ø).',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 18,
    sectionId: 'sec-u2-100-5',
    questionText: 'Charles Lindbergh was _____ first man to fly over _____ Atlantic non-stop and alone.',
    options: [
      { id: 'A', text: 'a – the' },
      { id: 'B', text: 'the - the' },
      { id: 'C', text: 'the – Ø' },
      { id: 'D', text: 'the - an' }
    ],
    correctAnswer: 'B',
    explanation: 'Số thứ tự dùng "the first man", và tên đại dương dùng "the Atlantic" (Đại Tây Dương).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 19,
    sectionId: 'sec-u2-100-5',
    questionText: 'A ticket on _____ commercial flight to _____ moon would cost $20 million.',
    options: [
      { id: 'A', text: 'Ø – the' },
      { id: 'B', text: 'a – Ø' },
      { id: 'C', text: 'the – Ø' },
      { id: 'D', text: 'a – the' }
    ],
    correctAnswer: 'D',
    explanation: '"a commercial flight" (một chuyến bay thương mại bất kỳ được nhắc lần đầu) và "the moon" (vật thể duy nhất).',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 20,
    sectionId: 'sec-u2-100-5',
    questionText: 'George Washington was _____ first president of _____ United States.',
    options: [
      { id: 'A', text: 'the – the' },
      { id: 'B', text: 'a – Ø' },
      { id: 'C', text: 'the – an' },
      { id: 'D', text: 'the - Ø' }
    ],
    correctAnswer: 'A',
    explanation: '"the first president" (số thứ tự đi với the) và "the United States" (tên quốc gia liên bang số nhiều).',
    cognitiveLevel: 'Nhận biết'
  },

  // SECTION 6: SOCIAL EXCHANGES (21 - 22)
  {
    index: 21,
    sectionId: 'sec-u2-100-6',
    questionText: 'Grandson: Grandpa, ______ Luke. We met in our school Chemistry Club and have become good friends since.\nGrandpa: Pleased to meet you, Luke.',
    options: [
      { id: 'A', text: "let's meet my friend" },
      { id: 'B', text: "I'd like you to meet my friend" },
      { id: 'C', text: "I'd like to introduce you" },
      { id: 'D', text: 'you know my friend' }
    ],
    correctAnswer: 'B',
    explanation: 'Mẫu câu lịch sự dùng để giới thiệu bạn bè với người lớn tuổi trong gia đình: "I\'d like you to meet my friend + Tên".',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 22,
    sectionId: 'sec-u2-100-6',
    questionText: "Patrick: Hi Antonio, my name is Patrick. I've heard a lot of good things about you, ______.\nAntonio: Nice to meet you too, Patrick.",
    options: [
      { id: 'A', text: 'Long time no see' },
      { id: 'B', text: "I haven't seen you for a while" },
      { id: 'C', text: 'I still remember the last time I saw you' },
      { id: 'D', text: "It's a pleasure to finally meet you" }
    ],
    correctAnswer: 'D',
    explanation: 'Hai người mới lần đầu gặp mặt ("Nice to meet you too"), sau khi nói đã nghe nhiều điều tốt về đối phương thì câu phù hợp nhất là "It\'s a pleasure to finally meet you" (Rất hân hạnh khi cuối cùng cũng được gặp bạn).',
    cognitiveLevel: 'Thông hiểu'
  },

  // SECTION 7: ADVANCED VOCABULARY & PREPOSITIONS (23 - 29)
  {
    index: 23,
    sectionId: 'sec-u2-100-7',
    questionText: 'Leaving a small tip to a waiter can be deemed rude or even _____ in some cultures.',
    options: [
      { id: 'A', text: 'unique' },
      { id: 'B', text: 'fascinating' },
      { id: 'C', text: 'insulting' },
      { id: 'D', text: 'cultural' }
    ],
    correctAnswer: 'C',
    explanation: 'Cấu trúc "rude or even insulting" (thô lỗ hoặc thậm chí là mang tính xúc phạm / lăng mạ người khác).',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 24,
    sectionId: 'sec-u2-100-7',
    questionText: 'We prefer to buy regional _____ from bricks-and-mortar retailers.',
    options: [
      { id: 'A', text: 'manners' },
      { id: 'B', text: 'occasions' },
      { id: 'C', text: 'specialties' },
      { id: 'D', text: 'norm' }
    ],
    correctAnswer: 'C',
    explanation: 'regional specialties: các món đặc sản vùng miền.',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 25,
    sectionId: 'sec-u2-100-7',
    questionText: 'Despite the _____, he managed to communicate his ideas to the committee.',
    options: [
      { id: 'A', text: 'norm' },
      { id: 'B', text: 'language barrier' },
      { id: 'C', text: 'cuisine' },
      { id: 'D', text: 'anxiety' }
    ],
    correctAnswer: 'B',
    explanation: 'Despite the language barrier: Mặc dù có rào cản ngôn ngữ, anh ấy vẫn truyền tải được ý kiến của mình đến hội đồng.',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 26,
    sectionId: 'sec-u2-100-7',
    questionText: 'We may suffer from _____ when we experience an unfamiliar culture for the first time.',
    options: [
      { id: 'A', text: 'lifestyle' },
      { id: 'B', text: 'bamboo dancing' },
      { id: 'C', text: 'tug of war' },
      { id: 'D', text: 'culture shock' }
    ],
    correctAnswer: 'D',
    explanation: 'suffer from culture shock: trải qua cảm giác sốc văn hóa khi lần đầu tiếp xúc văn hóa xa lạ.',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 27,
    sectionId: 'sec-u2-100-7',
    questionText: 'Foreign tourists are fascinated by a wide variety of traditional Vietnamese _____.',
    options: [
      { id: 'A', text: 'cuisines' },
      { id: 'B', text: 'trends' },
      { id: 'C', text: 'mysteries' },
      { id: 'D', text: 'origins' }
    ],
    correctAnswer: 'A',
    explanation: 'traditional Vietnamese cuisines (các món ăn, nền ẩm thực truyền thống của Việt Nam).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 28,
    sectionId: 'sec-u2-100-7',
    questionText: 'In Vietnam, two, three, or even four generations live _____ one roof.',
    options: [
      { id: 'A', text: 'in' },
      { id: 'B', text: 'over' },
      { id: 'C', text: 'with' },
      { id: 'D', text: 'under' }
    ],
    correctAnswer: 'D',
    explanation: 'Thành ngữ "live under one roof": cùng chung sống dưới một mái nhà.',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 29,
    sectionId: 'sec-u2-100-7',
    questionText: 'Vietnamese cuisine is famous _____ a wide variety of dishes.',
    options: [
      { id: 'A', text: 'with' },
      { id: 'B', text: 'in' },
      { id: 'C', text: 'for' },
      { id: 'D', text: 'of' }
    ],
    correctAnswer: 'C',
    explanation: 'Cấu trúc "be famous for sth": nổi tiếng vì cái gì.',
    cognitiveLevel: 'Nhận biết'
  },

  // SECTION 8: ARTICLES MASTERY 1 (30 - 41)
  {
    index: 30,
    sectionId: 'sec-u2-100-8',
    questionText: 'Who is _____ girl over there with Jimmy?',
    options: [
      { id: 'A', text: 'the' },
      { id: 'B', text: 'a' },
      { id: 'C', text: 'an' },
      { id: 'D', text: 'Ø' }
    ],
    correctAnswer: 'A',
    explanation: 'Danh từ "girl" đã được xác định cụ thể bởi mệnh đề trạng ngữ chỉ vị trí "over there with Jimmy" nên phải dùng mạo từ xác định "the".',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 31,
    sectionId: 'sec-u2-100-8',
    questionText: 'The boss needs an assistant with _____ good knowledge of foreign trade.',
    options: [
      { id: 'A', text: 'a' },
      { id: 'B', text: 'the' },
      { id: 'C', text: 'any' },
      { id: 'D', text: 'Ø' }
    ],
    correctAnswer: 'A',
    explanation: 'Thành ngữ cố định: "have a good knowledge of something" (có hiểu biết tốt/sâu rộng về lĩnh vực gì).',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 32,
    sectionId: 'sec-u2-100-8',
    questionText: 'We are having _____ terrible weather which is quite strange. Usually _____ weather in UK is not this bad.',
    options: [
      { id: 'A', text: 'the – the' },
      { id: 'B', text: 'a – the' },
      { id: 'C', text: 'Ø - the' },
      { id: 'D', text: 'the - a' }
    ],
    correctAnswer: 'C',
    explanation: '"weather" là danh từ không đếm được nói chung nên không dùng "a/an" (vị trí 1 dùng Ø). Vị trí 2 "weather in UK" đã xác định bởi cụm "in UK" nên dùng "the".',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 33,
    sectionId: 'sec-u2-100-8',
    questionText: "Could you please close _____ window? I don't think it is necessary to open all the four.",
    options: [
      { id: 'A', text: 'a' },
      { id: 'B', text: 'the' },
      { id: 'C', text: 'some' },
      { id: 'D', text: 'Ø' }
    ],
    correctAnswer: 'B',
    explanation: 'Cửa sổ trong căn phòng cụ thể mà cả người nói và người nghe đều nhìn thấy/biết rõ nên dùng mạo từ "the".',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 34,
    sectionId: 'sec-u2-100-8',
    questionText: '_____ Gordons is a very interesting family. They like to travel around _____ world.',
    options: [
      { id: 'A', text: 'A – the' },
      { id: 'B', text: 'The - the' },
      { id: 'C', text: 'A – a' },
      { id: 'D', text: 'A - Ø' }
    ],
    correctAnswer: 'B',
    explanation: '"The + Tên họ ở dạng số nhiều" dùng để chỉ toàn bộ một gia đình: "The Gordons". Cụm "around the world" luôn có the vì thế giới là duy nhất.',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 35,
    sectionId: 'sec-u2-100-8',
    questionText: 'To absorb more oil from spring rolls, we can use materials like _____ newspaper to wrap them after frying.',
    options: [
      { id: 'A', text: 'the' },
      { id: 'B', text: 'any' },
      { id: 'C', text: 'Ø' },
      { id: 'D', text: 'a' }
    ],
    correctAnswer: 'C',
    explanation: '"newspaper" ở đây được dùng như danh từ chỉ chất liệu (giấy báo nói chung để thấm dầu), đi sau "materials like" nên không dùng mạo từ (Ø).',
    cognitiveLevel: 'Vận dụng'
  },
  {
    index: 36,
    sectionId: 'sec-u2-100-8',
    questionText: 'After a hard-working day, I went to _____ bed and had _____ most beautiful dream ever.',
    options: [
      { id: 'A', text: 'the - the' },
      { id: 'B', text: 'a – the' },
      { id: 'C', text: 'a – a' },
      { id: 'D', text: 'Ø - the' }
    ],
    correctAnswer: 'D',
    explanation: 'Cụm từ "go to bed" (đi ngủ) không dùng mạo từ. "the most beautiful dream" là dạng so sánh nhất nên bắt buộc phải có "the".',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 37,
    sectionId: 'sec-u2-100-8',
    questionText: 'I have visited _____ Portugal but I have never been to _____ Netherlands.',
    options: [
      { id: 'A', text: 'the – the' },
      { id: 'B', text: 'Ø - the' },
      { id: 'C', text: 'a – the' },
      { id: 'D', text: 'a - a' }
    ],
    correctAnswer: 'B',
    explanation: 'Tên quốc gia thông thường như Bồ Đào Nha không dùng mạo từ: "Portugal" (Ø). Ngược lại, "the Netherlands" (Hà Lan) có dạng số nhiều nên bắt buộc có "the".',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 38,
    sectionId: 'sec-u2-100-8',
    questionText: 'Every week, his mother goes to _____ university to visit him while my mother has never come to visit me since I went to _____ university.',
    options: [
      { id: 'A', text: 'the - Ø' },
      { id: 'B', text: 'the - the' },
      { id: 'C', text: 'Ø - Ø' },
      { id: 'D', text: 'a - the' }
    ],
    correctAnswer: 'A',
    explanation: 'Mẹ đến trường đại học với tư cách là người ngoài/thăm con (không phải để học) thì dùng "the university". Con đi học đại học (đúng mục đích chính) dùng "go to university" không có mạo từ (Ø).',
    cognitiveLevel: 'Vận dụng'
  },
  {
    index: 39,
    sectionId: 'sec-u2-100-8',
    questionText: "He left on _____ 10 o'clock train yesterday to see his father who was taken to _____ hospital last week when he broke _____ right leg.",
    options: [
      { id: 'A', text: 'the - the - the' },
      { id: 'B', text: 'the - a - a' },
      { id: 'C', text: 'a - a - the' },
      { id: 'D', text: 'the - Ø – Ø' }
    ],
    correctAnswer: 'D',
    explanation: '"on the 10 o\'clock train" (chuyến tàu cụ thể có giờ chính xác dùng the). "taken to hospital" (nhập viện chữa bệnh cấp cứu không dùng the). Vị trí thứ 3 là broke his/Ø leg. Đáp án đúng là D: the - Ø – Ø.',
    cognitiveLevel: 'Vận dụng'
  },
  {
    index: 40,
    sectionId: 'sec-u2-100-8',
    questionText: 'I think Tet is _____ most fascinating festival in Vietnam.',
    options: [
      { id: 'A', text: 'the' },
      { id: 'B', text: 'Ø (no article)' },
      { id: 'C', text: 'an' },
      { id: 'D', text: 'a' }
    ],
    correctAnswer: 'A',
    explanation: 'So sánh nhất của tính từ dài: "the most fascinating festival".',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 41,
    sectionId: 'sec-u2-100-8',
    questionText: 'What _____ festivals do Vietnamese people celebrate?',
    options: [
      { id: 'A', text: 'a' },
      { id: 'B', text: 'an' },
      { id: 'C', text: 'Ø (no article)' },
      { id: 'D', text: 'the' }
    ],
    correctAnswer: 'C',
    explanation: 'Sau từ để hỏi "What" đi với danh từ đếm được số nhiều "festivals" mang nghĩa chung thì không dùng mạo từ (Ø).',
    cognitiveLevel: 'Thông hiểu'
  },

  // SECTION 9: ADVANCED ARTICLES & VOCABULARY DRILL (42 - 100)
  {
    index: 42,
    sectionId: 'sec-u2-100-9',
    questionText: '__________ most lively and energetic cultural performances take place in __________ heart of New York City.',
    options: [
      { id: 'A', text: 'A / the' },
      { id: 'B', text: 'The / a' },
      { id: 'C', text: 'The / Ø' },
      { id: 'D', text: 'The / the' }
    ],
    correctAnswer: 'D',
    explanation: '"The most lively..." (so sánh nhất dùng The). "in the heart of..." (thành ngữ cố định chỉ khu vực trung tâm dùng the). Đáp án D: The / the.',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 43,
    sectionId: 'sec-u2-100-9',
    questionText: '__________ interesting cultural shock for travellers in Spain is __________ tradition of siestas in the afternoon.',
    options: [
      { id: 'A', text: 'An / the' },
      { id: 'B', text: 'An / a' },
      { id: 'C', text: 'An / Ø' },
      { id: 'D', text: 'The / Ø' }
    ],
    correctAnswer: 'A',
    explanation: '"interesting" bắt đầu bằng nguyên âm /ɪ/ nên dùng "An". "the tradition of siestas" có cụm "of siestas" xác định nên dùng "the".',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 44,
    sectionId: 'sec-u2-100-9',
    questionText: 'At the food fair, I was given an apple by the shop owner and my friend received two __________ apples.',
    options: [
      { id: 'A', text: 'a' },
      { id: 'B', text: 'an' },
      { id: 'C', text: 'the' },
      { id: 'D', text: 'Ø (no article)' }
    ],
    correctAnswer: 'D',
    explanation: 'Sau từ chỉ số lượng cụ thể "two" không dùng thêm mạo từ trước danh từ số nhiều "apples" (two apples).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 45,
    sectionId: 'sec-u2-100-9',
    questionText: 'Because of __________ , it is the local identity that we should preserve by promoting traditions and sharing them with younger generations.',
    options: [
      { id: 'A', text: 'confusion' },
      { id: 'B', text: 'globalization' },
      { id: 'C', text: 'souvenirs' },
      { id: 'D', text: 'restrictions' }
    ],
    correctAnswer: 'B',
    explanation: 'Because of globalization: Do tác động của toàn cầu hóa, chúng ta cần bảo tồn bản sắc địa phương bằng cách phát huy truyền thống.',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 46,
    sectionId: 'sec-u2-100-9',
    questionText: 'Unless you visit the fair, you won’t see performances too unique to miss, and it is organized to promote __________ .',
    options: [
      { id: 'A', text: 'globalization' },
      { id: 'B', text: 'cultural diversity' },
      { id: 'C', text: 'experience' },
      { id: 'D', text: 'entertainment' }
    ],
    correctAnswer: 'B',
    explanation: 'promote cultural diversity: thúc đẩy và tôn vinh sự đa dạng văn hóa.',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 47,
    sectionId: 'sec-u2-100-9',
    questionText: 'Lighting candles on special occasions is a __________ that has been followed for generations.',
    options: [
      { id: 'A', text: 'fair' },
      { id: 'B', text: 'booth' },
      { id: 'C', text: 'performance' },
      { id: 'D', text: 'custom' }
    ],
    correctAnswer: 'D',
    explanation: 'custom: một phong tục tập quán được truyền thừa qua nhiều thế hệ.',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 48,
    sectionId: 'sec-u2-100-9',
    questionText: 'The food at the festival was so __________ that I couldn’t decide what to try first.',
    options: [
      { id: 'A', text: 'tasty' },
      { id: 'B', text: 'tasting' },
      { id: 'C', text: 'tastily' },
      { id: 'D', text: 'tastic' }
    ],
    correctAnswer: 'A',
    explanation: 'Sau cấu trúc "was so + adj", ta cần tính từ mô tả thức ăn: tasty (ngon miệng).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 49,
    sectionId: 'sec-u2-100-9',
    questionText: 'Living in a __________ city has taught me to appreciate different perspectives.',
    options: [
      { id: 'A', text: 'multicultural' },
      { id: 'B', text: 'culture shock' },
      { id: 'C', text: 'uncultured' },
      { id: 'D', text: 'cultural confusion' }
    ],
    correctAnswer: 'A',
    explanation: 'multicultural city: thành phố đa văn hóa, nơi sinh sống của nhiều sắc tộc.',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 50,
    sectionId: 'sec-u2-100-9',
    questionText: 'The event ended with a friendly match __________ , everyone enjoyed this is a typical folk game of Hanoi.',
    options: [
      { id: 'A', text: 'bamboo dancing' },
      { id: 'B', text: 'tug of war' },
      { id: 'C', text: 'dragon snake' },
      { id: 'D', text: 'stilt walking' }
    ],
    correctAnswer: 'B',
    explanation: 'tug of war: trò chơi kéo co (trò chơi dân gian thi đấu đối kháng tập thể kinh điển).',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 51,
    sectionId: 'sec-u2-100-9',
    questionText: 'After the performance, I waited patiently to get the singer’s __________ .',
    options: [
      { id: 'A', text: 'souvenir' },
      { id: 'B', text: 'present' },
      { id: 'C', text: 'clothes' },
      { id: 'D', text: 'autograph' }
    ],
    correctAnswer: 'D',
    explanation: "get the singer's autograph: xin chữ ký của ca sĩ/nghệ sĩ biểu diễn.",
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 52,
    sectionId: 'sec-u2-100-9',
    questionText: 'Lighting lanterns during the festival is an important __________ in many Asian countries.',
    options: [
      { id: 'A', text: 'belief' },
      { id: 'B', text: 'origin' },
      { id: 'C', text: 'tradition' },
      { id: 'D', text: 'element' }
    ],
    correctAnswer: 'C',
    explanation: 'an important tradition: một nét truyền thống văn hóa quan trọng.',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 53,
    sectionId: 'sec-u2-100-9',
    questionText: '__________ often causes confusion when people from different countries communicate.',
    options: [
      { id: 'A', text: 'Barrier the language' },
      { id: 'B', text: 'The barrier language' },
      { id: 'C', text: 'A barrier language' },
      { id: 'D', text: 'A language barrier' }
    ],
    correctAnswer: 'D',
    explanation: 'Cụm danh từ chuẩn xác trong tiếng Anh là "A language barrier" (Rào cản ngôn ngữ).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 54,
    sectionId: 'sec-u2-100-9',
    questionText: 'Many students struggle to __________ the unfamiliar customs in a foreign country.',
    options: [
      { id: 'A', text: 'keep up with' },
      { id: 'B', text: 'catch on to' },
      { id: 'C', text: 'deal with' },
      { id: 'D', text: 'adapt to' }
    ],
    correctAnswer: 'D',
    explanation: 'adapt to + N: thích nghi, hòa nhập với những phong tục xa lạ ở quốc gia khác.',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 55,
    sectionId: 'sec-u2-100-9',
    questionText: 'It is considered __________ to refuse food in many Asian cultures.',
    options: [
      { id: 'A', text: 'polite' },
      { id: 'B', text: 'rude' },
      { id: 'C', text: 'insulting' },
      { id: 'D', text: 'respectful' }
    ],
    correctAnswer: 'B',
    explanation: 'rude: thô lỗ, khiếm nhã (ở nhiều nước châu Á, việc chủ nhà mời đồ ăn mà từ chối bị coi là thất lễ).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 56,
    sectionId: 'sec-u2-100-9',
    questionText: '__________ culture shock can be challenging for travelers visiting __________ new country for the first time.',
    options: [
      { id: 'A', text: 'A - the' },
      { id: 'B', text: 'An - a' },
      { id: 'C', text: 'Ø - a' },
      { id: 'D', text: 'The - a' }
    ],
    correctAnswer: 'C',
    explanation: '"culture shock" là danh từ không đếm được dùng ở nghĩa chung (vị trí 1 dùng Ø). Vị trí 2 "visiting a new country" là một quốc gia mới bất kỳ nhắc lần đầu dùng "a".',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 57,
    sectionId: 'sec-u2-100-9',
    questionText: '__________ festival celebrating cultural diversity is held every year in our city.',
    options: [
      { id: 'A', text: 'A' },
      { id: 'B', text: 'An' },
      { id: 'C', text: 'The' },
      { id: 'D', text: 'Ø (no article)' }
    ],
    correctAnswer: 'A',
    explanation: 'Một lễ hội tôn vinh sự đa dạng văn hóa được nhắc đến lần đầu dưới dạng giới thiệu: "A festival".',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 58,
    sectionId: 'sec-u2-100-9',
    questionText: 'She bought __________ souvenir to remember her trip to Vietnam.',
    options: [
      { id: 'A', text: 'a' },
      { id: 'B', text: 'an' },
      { id: 'C', text: 'the' },
      { id: 'D', text: 'Ø (no article)' }
    ],
    correctAnswer: 'A',
    explanation: 'bought a souvenir: mua một món quà lưu niệm (danh từ đếm được số ít, bắt đầu bằng phụ âm /s/).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 59,
    sectionId: 'sec-u2-100-9',
    questionText: '__________ Pacific Ocean is the largest ocean on Earth.',
    options: [
      { id: 'A', text: 'A' },
      { id: 'B', text: 'An' },
      { id: 'C', text: 'The' },
      { id: 'D', text: 'Ø (no article)' }
    ],
    correctAnswer: 'C',
    explanation: 'Tên các đại dương luôn đi kèm mạo từ "The": The Pacific Ocean (Thái Bình Dương).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 60,
    sectionId: 'sec-u2-100-9',
    questionText: 'My friend gave me __________ autograph of a famous musician after the concert.',
    options: [
      { id: 'A', text: 'a' },
      { id: 'B', text: 'an' },
      { id: 'C', text: 'the' },
      { id: 'D', text: 'Ø (no article)' }
    ],
    correctAnswer: 'B',
    explanation: '"autograph" bắt đầu bằng nguyên âm /ˈɔː.tə.ɡrɑːf/ nên dùng mạo từ "an".',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 61,
    sectionId: 'sec-u2-100-9',
    questionText: 'The tradition of bamboo dancing is popular in __________ Southeast Asia.',
    options: [
      { id: 'A', text: 'a' },
      { id: 'B', text: 'an' },
      { id: 'C', text: 'the' },
      { id: 'D', text: 'Ø (no article)' }
    ],
    correctAnswer: 'D',
    explanation: 'Tên các khu vực địa lý lục địa như "Southeast Asia" (Đông Nam Á) không dùng mạo từ (Ø).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 62,
    sectionId: 'sec-u2-100-9',
    questionText: '__________ United States has a rich multicultural background.',
    options: [
      { id: 'A', text: 'a' },
      { id: 'B', text: 'an' },
      { id: 'C', text: 'the' },
      { id: 'D', text: 'Ø (no article)' }
    ],
    correctAnswer: 'C',
    explanation: 'Tên các quốc gia có cấu trúc liên bang hoặc danh từ số nhiều luôn dùng "the": The United States.',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 63,
    sectionId: 'sec-u2-100-9',
    questionText: 'Many students join __________ extracurricular activities to broaden their experiences.',
    options: [
      { id: 'A', text: 'a' },
      { id: 'B', text: 'an' },
      { id: 'C', text: 'the' },
      { id: 'D', text: 'Ø (no article)' }
    ],
    correctAnswer: 'D',
    explanation: '"extracurricular activities" là danh từ đếm được số nhiều mang nghĩa chung nên không dùng mạo từ (Ø).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 64,
    sectionId: 'sec-u2-100-9',
    questionText: 'She gave me __________ useful guide to understanding cultural diversity.',
    options: [
      { id: 'A', text: 'a' },
      { id: 'B', text: 'an' },
      { id: 'C', text: 'the' },
      { id: 'D', text: 'Ø (no article)' }
    ],
    correctAnswer: 'A',
    explanation: '"useful" bắt đầu bằng phụ âm /j/ (/ˈjuːs.fəl/), do đó dùng mạo từ "a" chứ không dùng "an".',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 65,
    sectionId: 'sec-u2-100-9',
    questionText: 'A tug of war competition was __________ highlight of __________ cultural fair.',
    options: [
      { id: 'A', text: 'a - Ø' },
      { id: 'B', text: 'an - Ø' },
      { id: 'C', text: 'the - the' },
      { id: 'D', text: 'Ø - the' }
    ],
    correctAnswer: 'C',
    explanation: '"the highlight of the cultural fair": điểm nhấn nổi bật nhất của hội chợ văn hóa (cả 2 đều xác định).',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 66,
    sectionId: 'sec-u2-100-9',
    questionText: 'Visiting a multicultural city gives you __________ opportunity to taste foods from all over the world.',
    options: [
      { id: 'A', text: 'a' },
      { id: 'B', text: 'an' },
      { id: 'C', text: 'the' },
      { id: 'D', text: 'Ø (no article)' }
    ],
    correctAnswer: 'B',
    explanation: '"opportunity" bắt đầu bằng nguyên âm /ˌɒp.əˈtjuː.nə.ti/ nên dùng "an opportunity" (một cơ hội).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 67,
    sectionId: 'sec-u2-100-9',
    questionText: 'Huy Tran admired __________ spicy cuisine at the international food festival.',
    options: [
      { id: 'A', text: 'a' },
      { id: 'B', text: 'an' },
      { id: 'C', text: 'the' },
      { id: 'D', text: 'Ø (no article)' }
    ],
    correctAnswer: 'C',
    explanation: '"spicy cuisine" đã được xác định cụ thể bởi cụm giới từ "at the international food festival" nên dùng "the".',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 68,
    sectionId: 'sec-u2-100-9',
    questionText: '__________ popularity of bamboo dancing has spread across __________ region.',
    options: [
      { id: 'A', text: 'The - a' },
      { id: 'B', text: 'A - an' },
      { id: 'C', text: 'The - the' },
      { id: 'D', text: 'The - Ø' }
    ],
    correctAnswer: 'C',
    explanation: '"The popularity of..." (cấu trúc The + N + of + N) và "across the region" (khắp khu vực đó - đã xác định).',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 69,
    sectionId: 'sec-u2-100-9',
    questionText: 'An open mind is essential when interacting with people from __________ different cultures.',
    options: [
      { id: 'A', text: 'a' },
      { id: 'B', text: 'an' },
      { id: 'C', text: 'the' },
      { id: 'D', text: 'Ø (no article)' }
    ],
    correctAnswer: 'D',
    explanation: '"different cultures" là danh từ số nhiều mang nghĩa khái quát chung nên không dùng mạo từ (Ø).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 70,
    sectionId: 'sec-u2-100-9',
    questionText: 'The professional dancer captivated __________ audience with her performance.',
    options: [
      { id: 'A', text: 'a' },
      { id: 'B', text: 'an' },
      { id: 'C', text: 'the' },
      { id: 'D', text: 'Ø (no article)' }
    ],
    correctAnswer: 'C',
    explanation: '"the audience": toàn bộ khán giả có mặt trong khán phòng buổi biểu diễn (đối tượng xác định trong ngữ cảnh).',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 71,
    sectionId: 'sec-u2-100-9',
    questionText: 'Understanding a belief or custom of another __________ culture fosters mutual respect.',
    options: [
      { id: 'A', text: 'a' },
      { id: 'B', text: 'an' },
      { id: 'C', text: 'the' },
      { id: 'D', text: 'Ø (no article)' }
    ],
    correctAnswer: 'D',
    explanation: 'Sau từ hạn định "another" là danh từ số ít trực tiếp "culture", tuyệt đối không dùng thêm mạo từ sau "another" (Ø).',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 72,
    sectionId: 'sec-u2-100-9',
    questionText: 'The crowd at __________ cultural fair was excited to see traditional performances.',
    options: [
      { id: 'A', text: 'a' },
      { id: 'B', text: 'an' },
      { id: 'C', text: 'the' },
      { id: 'D', text: 'Ø (no article)' }
    ],
    correctAnswer: 'C',
    explanation: 'Hội chợ văn hóa nơi đám đông đang tụ tập là đối tượng xác định trong ngữ cảnh nên dùng "the cultural fair".',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 73,
    sectionId: 'sec-u2-100-9',
    questionText: 'Tran Thien Huy found __________ spring roll to be the tastiest dish at __________ multicultural food market.',
    options: [
      { id: 'A', text: 'a - the' },
      { id: 'B', text: 'an - a' },
      { id: 'C', text: 'the - the' },
      { id: 'D', text: 'Ø - Ø' }
    ],
    correctAnswer: 'C',
    explanation: '"the spring roll" (món chả giò/nem rán cụ thể được đem so sánh nhất) và "the multicultural food market" (khu chợ ẩm thực đa văn hóa xác định).',
    cognitiveLevel: 'Vận dụng'
  },
  {
    index: 74,
    sectionId: 'sec-u2-100-9',
    questionText: 'A language barrier often causes confusion when people from __________ different countries communicate.',
    options: [
      { id: 'A', text: 'a' },
      { id: 'B', text: 'an' },
      { id: 'C', text: 'the' },
      { id: 'D', text: 'Ø (no article)' }
    ],
    correctAnswer: 'D',
    explanation: '"different countries" là danh từ số nhiều dùng ở nghĩa chung chung nên không dùng mạo từ (Ø).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 75,
    sectionId: 'sec-u2-100-9',
    questionText: 'My teacher taught me how to deal with __________ culture shock during my study abroad.',
    options: [
      { id: 'A', text: 'a' },
      { id: 'B', text: 'an' },
      { id: 'C', text: 'the' },
      { id: 'D', text: 'Ø (no article)' }
    ],
    correctAnswer: 'D',
    explanation: '"culture shock" là hiện tượng tâm lý, danh từ không đếm được mang nghĩa chung nên không dùng mạo từ (Ø).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 76,
    sectionId: 'sec-u2-100-9',
    questionText: 'They discussed __________ globalization of traditions and its impact on local identity.',
    options: [
      { id: 'A', text: 'a' },
      { id: 'B', text: 'an' },
      { id: 'C', text: 'the' },
      { id: 'D', text: 'Ø (no article)' }
    ],
    correctAnswer: 'C',
    explanation: 'Cấu trúc xác định "The + N + of + N": "the globalization of traditions" (sự toàn cầu hóa các truyền thống).',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 77,
    sectionId: 'sec-u2-100-9',
    questionText: 'The reflection of multicultural values can be seen in food, art, and fashion around __________ world.',
    options: [
      { id: 'A', text: 'a' },
      { id: 'B', text: 'an' },
      { id: 'C', text: 'the' },
      { id: 'D', text: 'Ø (no article)' }
    ],
    correctAnswer: 'C',
    explanation: 'Cụm thành ngữ cố định "around the world" (trên khắp thế giới, thế giới là duy nhất).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 78,
    sectionId: 'sec-u2-100-9',
    questionText: '__________ cultural festival attracted thousands of visitors from around the world.',
    options: [
      { id: 'A', text: 'A' },
      { id: 'B', text: 'An' },
      { id: 'C', text: 'The' },
      { id: 'D', text: 'Ø (no article)' }
    ],
    correctAnswer: 'C',
    explanation: '"The cultural festival" (Lễ hội văn hóa cụ thể đã diễn ra và thu hút hàng nghìn du khách).',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 79,
    sectionId: 'sec-u2-100-9',
    questionText: 'Students had __________ opportunity to experience traditional bamboo dancing during __________ workshop.',
    options: [
      { id: 'A', text: 'a - the' },
      { id: 'B', text: 'an - the' },
      { id: 'C', text: 'the - the' },
      { id: 'D', text: 'Ø - Ø' }
    ],
    correctAnswer: 'B',
    explanation: '"an opportunity" (opportunity bắt đầu bằng nguyên âm) và "during the workshop" (buổi tập huấn/hội thảo cụ thể).',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 80,
    sectionId: 'sec-u2-100-9',
    questionText: 'Sharing food is __________ custom that brings people closer in multicultural events.',
    options: [
      { id: 'A', text: 'a' },
      { id: 'B', text: 'an' },
      { id: 'C', text: 'the' },
      { id: 'D', text: 'Ø (no article)' }
    ],
    correctAnswer: 'A',
    explanation: '"a custom": một phong tục (danh từ đếm được số ít bắt đầu bằng phụ âm /k/).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 81,
    sectionId: 'sec-u2-100-9',
    questionText: '__________ football has a significant cultural impact on countries like Brazil and Argentina.',
    options: [
      { id: 'A', text: 'A' },
      { id: 'B', text: 'An' },
      { id: 'C', text: 'The' },
      { id: 'D', text: 'Ø (no article)' }
    ],
    correctAnswer: 'D',
    explanation: 'Tên các môn thể thao (football, tennis, basketball...) tuyệt đối không dùng mạo từ (Ø).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 82,
    sectionId: 'sec-u2-100-9',
    questionText: "Huy tasted __________ meatball and said it was the best he'd ever eaten.",
    options: [
      { id: 'A', text: 'a' },
      { id: 'B', text: 'an' },
      { id: 'C', text: 'the' },
      { id: 'D', text: 'Ø (no article)' }
    ],
    correctAnswer: 'A',
    explanation: 'tasted a meatball: nếm thử một viên thịt (danh từ đếm được số ít nhắc lần đầu).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 83,
    sectionId: 'sec-u2-100-9',
    questionText: 'An experienced tour guide explained __________ traditions of the local community.',
    options: [
      { id: 'A', text: 'a' },
      { id: 'B', text: 'an' },
      { id: 'C', text: 'the' },
      { id: 'D', text: 'Ø (no article)' }
    ],
    correctAnswer: 'C',
    explanation: '"the traditions of the local community" (xác định bởi cụm of the local community).',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 84,
    sectionId: 'sec-u2-100-9',
    questionText: 'The belief in respecting elders is common across many __________ Asian cultures.',
    options: [
      { id: 'A', text: 'a' },
      { id: 'B', text: 'an' },
      { id: 'C', text: 'the' },
      { id: 'D', text: 'Ø (no article)' }
    ],
    correctAnswer: 'D',
    explanation: 'Sau lượng từ "many" đi trực tiếp với danh từ số nhiều "Asian cultures", không dùng mạo từ xen giữa (Ø).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 85,
    sectionId: 'sec-u2-100-9',
    questionText: 'My school organized __________ cross-cultural exchange program to promote understanding among students.',
    options: [
      { id: 'A', text: 'a' },
      { id: 'B', text: 'an' },
      { id: 'C', text: 'the' },
      { id: 'D', text: 'Ø (no article)' }
    ],
    correctAnswer: 'A',
    explanation: '"a cross-cultural exchange program": một chương trình giao lưu đa văn hóa (danh từ đếm được số ít, bắt đầu bằng phụ âm /k/).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 86,
    sectionId: 'sec-u2-100-9',
    questionText: '__________ festival showcased diverse cuisines, including spicy dishes and desserts.',
    options: [
      { id: 'A', text: 'A' },
      { id: 'B', text: 'An' },
      { id: 'C', text: 'The' },
      { id: 'D', text: 'Ø (no article)' }
    ],
    correctAnswer: 'C',
    explanation: '"The festival": lễ hội đó đã giới thiệu nhiều phong cách ẩm thực phong phú (chủ ngữ đã xác định trong ngữ cảnh).',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 87,
    sectionId: 'sec-u2-100-9',
    questionText: "The cultural ties between __________ UK and India have shaped both nations' arts and traditions.",
    options: [
      { id: 'A', text: 'a' },
      { id: 'B', text: 'an' },
      { id: 'C', text: 'the' },
      { id: 'D', text: 'Ø (no article)' }
    ],
    correctAnswer: 'C',
    explanation: 'Vương quốc Anh viết tắt là "the UK" luôn có mạo từ xác định "the".',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 88,
    sectionId: 'sec-u2-100-9',
    questionText: "A young boy sang __________ popular song at the fair, and __________ song brought tears to the audience's eyes.",
    options: [
      { id: 'A', text: 'the - the' },
      { id: 'B', text: 'an - a' },
      { id: 'C', text: 'a - the' },
      { id: 'D', text: 'a - a' }
    ],
    correctAnswer: 'C',
    explanation: 'Lần đầu nhắc đến dùng mạo từ bất định "a popular song". Lần thứ hai lặp lại danh từ đó đã được xác định nên dùng "the song".',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 89,
    sectionId: 'sec-u2-100-9',
    questionText: 'A professional chef prepared __________ traditional Vietnamese spring rolls for the guests.',
    options: [
      { id: 'A', text: 'a' },
      { id: 'B', text: 'an' },
      { id: 'C', text: 'the' },
      { id: 'D', text: 'Ø (no article)' }
    ],
    correctAnswer: 'D',
    explanation: '"spring rolls" là danh từ đếm được số nhiều mang nghĩa chung không xác định nên không dùng mạo từ (Ø).',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 90,
    sectionId: 'sec-u2-100-9',
    questionText: '__________ United States has contributed significantly to the cultural development in the region.',
    options: [
      { id: 'A', text: 'A' },
      { id: 'B', text: 'An' },
      { id: 'C', text: 'The' },
      { id: 'D', text: 'Ø (no article)' }
    ],
    correctAnswer: 'C',
    explanation: 'Tên Hợp chủng quốc Hoa Kỳ luôn có "The": The United States.',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 91,
    sectionId: 'sec-u2-100-9',
    questionText: 'A chef introduced __________ spicy dish, and __________ dish quickly became everyone’s favorite at the event.',
    options: [
      { id: 'A', text: 'the - a' },
      { id: 'B', text: 'a - a' },
      { id: 'C', text: 'a - the' },
      { id: 'D', text: 'an - a' }
    ],
    correctAnswer: 'C',
    explanation: 'Lần 1 nhắc đến một món ăn cay dùng "a spicy dish". Lần 2 món ăn đó đã xác định nên dùng "the dish".',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 92,
    sectionId: 'sec-u2-100-9',
    questionText: 'The folklore surrounding the mystical beauty of __________ Loch Ness has attracted artists and tourists from around the world.',
    options: [
      { id: 'A', text: 'a' },
      { id: 'B', text: 'an' },
      { id: 'C', text: 'the' },
      { id: 'D', text: 'Ø (no article)' }
    ],
    correctAnswer: 'D',
    explanation: 'Tên hồ nước ngọt bắt đầu bằng "Loch" (như Loch Ness) hoặc "Lake" không dùng mạo từ "the" (Ø).',
    cognitiveLevel: 'Vận dụng'
  },
  {
    index: 93,
    sectionId: 'sec-u2-100-9',
    questionText: 'At the international fair, we admired __________ stall selling handmade souvenirs.',
    options: [
      { id: 'A', text: 'a' },
      { id: 'B', text: 'an' },
      { id: 'C', text: 'the' },
      { id: 'D', text: 'Ø (no article)' }
    ],
    correctAnswer: 'A',
    explanation: 'chiêm ngưỡng một gian hàng bán đồ thủ công -> "a stall" (danh từ đếm được số ít nhắc lần đầu).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 94,
    sectionId: 'sec-u2-100-9',
    questionText: 'Huy joined __________ cultural fair last week. __________ fair was full of interesting performances.',
    options: [
      { id: 'A', text: 'the - Ø' },
      { id: 'B', text: 'a - Ø' },
      { id: 'C', text: 'a - The' },
      { id: 'D', text: 'an - A' }
    ],
    correctAnswer: 'C',
    explanation: 'Lần 1: "joined a cultural fair". Lần 2 lặp lại viết hoa đầu câu: "The fair was full of...".',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 95,
    sectionId: 'sec-u2-100-9',
    questionText: '__________ Vietnamese people are known for their rich cultural heritage and traditions.',
    options: [
      { id: 'A', text: 'A' },
      { id: 'B', text: 'An' },
      { id: 'C', text: 'The' },
      { id: 'D', text: 'Ø (no article)' }
    ],
    correctAnswer: 'C',
    explanation: '"The + quốc tịch + people": "The Vietnamese people" (Toàn thể nhân dân / người dân Việt Nam) dùng mạo từ "The".',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 96,
    sectionId: 'sec-u2-100-9',
    questionText: 'A group of performers demonstrated __________ unique tradition, and __________ tradition fascinated all the visitors.',
    options: [
      { id: 'A', text: 'an - the' },
      { id: 'B', text: 'Ø - the' },
      { id: 'C', text: 'a - the' },
      { id: 'D', text: 'Ø - a' }
    ],
    correctAnswer: 'C',
    explanation: '"unique" phát âm là /juːˈniːk/, bắt đầu bằng bán nguyên âm /j/ (phụ âm) nên bắt buộc dùng "a" ("a unique tradition"). Lần 2 nhắc lại dùng "the tradition".',
    cognitiveLevel: 'Vận dụng'
  },
  {
    index: 97,
    sectionId: 'sec-u2-100-9',
    questionText: 'We must appreciate the efforts to preserve __________ cultural diversity in modern times.',
    options: [
      { id: 'A', text: 'a' },
      { id: 'B', text: 'an' },
      { id: 'C', text: 'the' },
      { id: 'D', text: 'Ø (no article)' }
    ],
    correctAnswer: 'D',
    explanation: '"cultural diversity" là danh từ trừu tượng không đếm được chỉ sự đa dạng văn hóa nói chung nên không dùng mạo từ (Ø).',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 98,
    sectionId: 'sec-u2-100-9',
    questionText: 'Thien Huy noticed __________ language barrier during the discussion, but __________ barrier was overcome through an interpreter.',
    options: [
      { id: 'A', text: 'the - a' },
      { id: 'B', text: 'a - a' },
      { id: 'C', text: 'a - the' },
      { id: 'D', text: 'an - a' }
    ],
    correctAnswer: 'C',
    explanation: 'Lần 1 dùng mạo từ bất định: "a language barrier". Lần 2 lặp lại danh từ đó dùng mạo từ xác định: "the barrier".',
    cognitiveLevel: 'Thông hiểu'
  },
  {
    index: 99,
    sectionId: 'sec-u2-100-9',
    questionText: 'Cultural events are often organized on __________ Monday.',
    options: [
      { id: 'A', text: 'a' },
      { id: 'B', text: 'an' },
      { id: 'C', text: 'the' },
      { id: 'D', text: 'Ø (no article)' }
    ],
    correctAnswer: 'D',
    explanation: 'Trước các thứ trong tuần (Monday, Tuesday...) đi với giới từ on không dùng mạo từ: "on Monday" (Ø).',
    cognitiveLevel: 'Nhận biết'
  },
  {
    index: 100,
    sectionId: 'sec-u2-100-9',
    questionText: 'My mom invited me to __________ breakfast tomorrow to discuss the cultural exchange.',
    options: [
      { id: 'A', text: 'a' },
      { id: 'B', text: 'an' },
      { id: 'C', text: 'the' },
      { id: 'D', text: 'Ø (no article)' }
    ],
    correctAnswer: 'D',
    explanation: 'Trước các bữa ăn thông thường trong ngày (breakfast, lunch, dinner) không dùng mạo từ: "to breakfast" (Ø).',
    cognitiveLevel: 'Nhận biết'
  }
];

const examSections = [
  {
    id: 'sec-u2-100-1',
    title: 'I. PHÁT ÂM & TRỌNG ÂM (STRESS)',
    instruction: 'Circle the letter A, B, C, or D to indicate the word which differs from the other three in the position of the main stress in each of the following questions.',
    questionIndices: [1, 2]
  },
  {
    id: 'sec-u2-100-2',
    title: 'II. TỪ ĐỒNG NGHĨA (CLOSEST IN MEANING)',
    instruction: 'Circle the letter A, B, C, or D to indicate the word CLOSEST in meaning to the underlined word in each of the following questions.',
    questionIndices: [3, 4]
  },
  {
    id: 'sec-u2-100-3',
    title: 'III. TỪ TRÁI NGHĨA (OPPOSITE IN MEANING)',
    instruction: 'Circle the letter A, B, C, or D to indicate the word OPPOSITE in meaning to the underlined word in each of the following questions.',
    questionIndices: [5, 6]
  },
  {
    id: 'sec-u2-100-4',
    title: 'IV. TỪ VỰNG CHỦ ĐIỂM (UNIT 2 VOCABULARY)',
    instruction: 'Circle the letter A, B, C, or D to indicate the correct answer to each of the following questions.',
    questionIndices: [7, 8, 9, 10, 11, 12, 13, 14, 15]
  },
  {
    id: 'sec-u2-100-5',
    title: 'V. NGỮ PHÁP MẠO TỪ CĂN BẢN (ARTICLES PART 1)',
    instruction: 'Circle the letter A, B, C, or D to indicate the correct answer to each of the following questions.',
    questionIndices: [16, 17, 18, 19, 20]
  },
  {
    id: 'sec-u2-100-6',
    title: 'VI. TÌNH HUỐNG GIAO TIẾP (SOCIAL EXCHANGES)',
    instruction: 'Circle the letter A, B, C, or D to complete each of the following exchanges.',
    questionIndices: [21, 22]
  },
  {
    id: 'sec-u2-100-7',
    title: 'VII. TỪ VỰNG & GIỚI TỪ NÂNG CAO (ADVANCED VOCABULARY & PREPOSITIONS)',
    instruction: 'Circle the letter A, B, C, or D to indicate the correct answer to each of the following questions.',
    questionIndices: [23, 24, 25, 26, 27, 28, 29]
  },
  {
    id: 'sec-u2-100-8',
    title: 'VIII. CHUYÊN ĐỀ MẠO TỪ PHẦN 2 (ARTICLES MASTERY 1)',
    instruction: 'Circle the letter A, B, C, or D to indicate the correct answer to each of the following questions.',
    questionIndices: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41]
  },
  {
    id: 'sec-u2-100-9',
    title: 'IX. LUYỆN TẬP PHÂN HÓA NÂNG CAO MẠO TỪ & TỪ VỰNG NGỮ CẢNH (ADVANCED DRILL)',
    instruction: 'Circle the letter A, B, C, or D to indicate the correct answer to each of the following questions.',
    questionIndices: Array.from({ length: 59 }, (_, i) => i + 42)
  }
];

const newExam = {
  id: 'on-tap-unit-2-lop-12-100-cau',
  title: 'Đề Cương Ôn Tập Toàn Diện Lớp 12 - Unit 2: A Multicultural World (100 Câu Hỏi Phân Hóa)',
  description: 'Bộ đề ôn tập 100 câu trắc nghiệm trọng tâm Tiếng Anh 12 Unit 2: A Multicultural World, bao gồm trọng âm, từ đồng nghĩa - trái nghĩa, giao tiếp xã hội và chuyên đề mạo từ (a/an/the/zero article) có giải thích chi tiết.',
  subject: 'Tiếng Anh',
  category: 'Ôn theo unit',
  categories: ['Ôn theo unit', 'Ôn giữa kỳ 1'],
  grade: 'Lớp 12',
  durationMinutes: 90,
  totalQuestions: 100,
  originalFileName: 'Ôn tập Unit 2 lớp 12.docx',
  status: 'ready',
  createdAt: '2026-10-21T22:30:00.000Z',
  updatedAt: '2026-10-21T22:30:00.000Z',
  tags: [
    'Lớp 12',
    'Unit 2',
    'A Multicultural World',
    'Ôn theo unit',
    'Mạo từ',
    'Vocabulary',
    'Articles',
    '100 câu'
  ],
  sections: examSections,
  questions: questionsData.map(q => ({
    id: `u2-100q-${q.index}`,
    index: q.index,
    sectionId: q.sectionId,
    questionText: q.questionText,
    type: 'single_choice',
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
    cognitiveLevel: q.cognitiveLevel,
    points: 0.1
  }))
};

module.exports = {
  newExam
};
