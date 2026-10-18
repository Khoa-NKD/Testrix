const fs = require('fs');
const path = require('path');

/**
 * Script đọc và build toàn bộ đề thi từ thư mục Exam/
 * Chỉ các file có trong folder Exam/ mới được nạp vào hệ thống Testrix
 */

const examDir = path.join(__dirname, '..', 'Exam');
console.log('Scanning Exam folder:', examDir);

if (!fs.existsSync(examDir)) {
  console.error('Thư mục Exam không tồn tại!');
  process.exit(1);
}

const files = fs.readdirSync(examDir).filter(f => f.endsWith('.docx') && !f.startsWith('~$'));
console.log('Found docx files in Exam/:', files);

// === DỮ LIỆU ĐỀ 1: UNIT 1 (LIFE STORIES) ===
const examUnit1 = {
  id: 'de-on-tap-gk1-lop-12-unit-1',
  title: 'Đề Cương Ôn Tập Giữa Kỳ 1 Lớp 12 - Unit 1: Life Stories (Năm học 2026-2027)',
  description: 'Đề thi chuẩn cấu trúc Bộ GD&ĐT gồm 4 phần: Trọng âm, Từ vựng & Ngữ pháp, Đọc hiểu (Newton, Bell, Steve Jobs, Nguyễn Du) và Kỹ năng viết sắp xếp câu.',
  subject: 'Tiếng Anh',
  category: 'Ôn theo unit',
  categories: ['Ôn theo unit', 'Ôn giữa kỳ 1'],
  grade: 'Lớp 12',
  durationMinutes: 50,
  totalQuestions: 45,
  originalFileName: 'ÔN TẬP GK1 LOP 12 UNIT 1.docx',
  status: 'ready',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  tags: ['Tiếng Anh 12', 'Ôn theo unit', 'Ôn giữa kỳ 1', 'Unit 1', 'Global Success', 'Reading', 'Grammar'],
  sections: [
    {
      id: 'sec-1-1',
      title: 'I. TRỌNG ÂM (STRESS)',
      instruction: 'Mark the letter A, B, C or D to indicate the word that differs from the other three in the position of primary stress in each of the following questions.',
      questionIndices: [1, 2, 3, 4, 5]
    },
    {
      id: 'sec-1-2',
      title: 'II. TỪ VỰNG & NGỮ PHÁP (VOCABULARY AND GRAMMAR)',
      instruction: 'Choose the best answer A, B, C or D to complete each sentence or find words with Opposite / Closest meaning.',
      questionIndices: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
    },
    {
      id: 'sec-1-3-1',
      title: 'III. ĐỌC ĐIỀN TỪ - BÀI ĐỌC 1 (READING 1)',
      instruction: 'Read the following passage and mark the letter A, B, C, or D to indicate the correct option that best fits each of the numbered blanks.',
      passageTitle: 'Isaac Newton & Albert Einstein',
      passage: 'Isaac Newton (1643-1727) and Albert Einstein (1897-1955) are regarded as two of the most important scientists of all time. They also share some similarities.\n\nBoth Einstein and Newton were described as lonely children (22) ________ lacked social skills, but had a passion for complex topics. Einstein dropped out of school at the age of 15 because he felt bored and didn\'t like the teaching style. (23) ________, Newton didn\'t excel in school, although he completed his secondary education and managed to enter Cambridge University.\n\nBoth worked in the field of physics and maths, but in different time periods and contributed to our (24) ________ of gravity. Newton was the first person to describe gravity and discover the basic laws of mechanics and motion. While Einstein agreed with some aspects of his theory, he showed that Newton was wrong about time and space, and (25) ________ a new theory of gravity. Einstein also established the foundations of modern physics.\n\nThe scientific achievements of both Newton and Einstein are impressive, and there is still a debate about who made the bigger (26) ________ to humankind.\n\n[Adapted from Global Success]',
      questionIndices: [22, 23, 24, 25, 26]
    },
    {
      id: 'sec-1-3-2',
      title: 'III. ĐỌC ĐIỀN TỪ - BÀI ĐỌC 2 (READING 2)',
      instruction: 'Read the following passage about Alexander Graham Bell and mark the letter A, B, C, or D to indicate the correct option.',
      passageTitle: 'Alexander Graham Bell',
      passage: 'Alexander Graham Bell was a Scottish-born scientist and inventor (27) _________ was best known for inventing the first working telephone.\n\nBell was born in Edinburgh, Scotland, on March 3, 1847. During his youth, Bell was strongly (28) _________ by his family and his environment. Bell’s hometown of Edinburgh, Scotland, was known as the “Athens of the North” for its rich culture of arts and science.\n\nBy age 16, Alexander had joined his father in his work with the deaf. In 1870, the family settled in Brantford, Ontario, Canada. There, Alexander set up a workshop to continue his study of the human voice. On July 11, 1877, Bell married Mabel Hubbard who had been deaf (29) _________ her early childhood years.\n\nOn March 10, 1876, after many years (30) _________ work, Bell perfected his most well-known invention, the telephone, and made his first telephone call. The Bell Telephone Company was organised on July 9, 1877. In 1880, Bell established the Volta Laboratory in Washington, D.C., an experimental facility devoted to (31) _________ discovery.\n\nThroughout his life, Bell continued his family’s work with the deaf. Bell died peacefully on August 2, 1922, at his home in Baddeck on Cape Breton Island, Nova Scotia, Canada.',
      questionIndices: [27, 28, 29, 30, 31]
    },
    {
      id: 'sec-1-3-3',
      title: 'III. ĐỌC HIỂU - BÀI ĐỌC 3 (READING 3)',
      instruction: 'Read the following passage and mark the letter A, B, C or D to indicate the correct answer to each of the questions.',
      passageTitle: 'Steve Jobs: Life and Achievements',
      passage: 'Steven Paul Jobs was born on 24 February, 1955 in San Francisco, USA. His biological parents were not married and gave him up for adoption. He was adopted by Clara and Paul Jobs. In 1971, Jobs met Steve Wozniak, who was five years older than him, but they bonded over their love of electronics. After high school, Jobs attended Reed College in Oregon, but found the classes boring and dropped out after six months.\n\nWhen Jobs was 21, he and Wozniak started Apple Computers in Jobs\' family garage with money they got by selling Jobs\' van and Wozniak\'s scientific calculator. They turned it into a workspace where they built their first computers. By making computers smaller, cheaper, and accessible to everyday users, their company became a huge success and sales quickly increased.\n\nAlthough Jobs left Apple in 1985, he returned to his post in 1997 when the company needed new ideas. He helped invent new products such as the iMac, the iBook for students, the iPod music player, and iTunes music software. In 2007, he introduced the touch-screen iPhone which changed the way phones were used. Apple products were not only designed to be cutting-edge technology, but also to be stylish and easy to use.\n\nIn addition, Jobs contributed to computer animation. In 1986, he bought a small company, which later became Pixar Animation Studios. It produced the first full-length computer-animated film Toy Story, followed by other blockbusters.\n\nIn 2003, Jobs was diagnosed with a rare form of pancreatic cancer. He fought the disease for several years, and stopped working in August, 2011. Two months later, he passed away. He had four children, three with his wife of 20 years and one from a previous relationship. On an Apple web page, a statement reads, "Apple has lost a visionary and creative genius, and the world has lost an amazing human being."\n\n[Adapted from Global Success]',
      questionIndices: [32, 33, 34, 35, 36]
    },
    {
      id: 'sec-1-3-4',
      title: 'III. ĐỌC HIỂU - BÀI ĐỌC 4 (READING 4)',
      instruction: 'Read the following passage about Nguyen Du and choose the best answer for each question.',
      passageTitle: 'Đại thi hào Nguyễn Du (1765 - 1820)',
      passage: 'Nguyen Du is a celebrated Vietnamese poet who wrote in Chữ Nôm, the ancient writing script of Viet Nam. His poetry is celebrated for the directness of its language and of its metaphors. Despite a number of Vietnamese poets pre-dated him, Nguyen Du is considered by many Vietnamese to be the founding-figure of Vietnamese literature. His epic poem Truyen Kieu (The Tale of Kieu), relating the brief and tragic life of a Vietnamese girl, is considered as a masterpiece.\n\nNguyen Du was born in 1765 in Tien Dien village, Nghi Xuan district, Nghe Tinh province, Viet Nam. By the age of 13, Nguyen had lost both of his parents, and for most of his teenage years he lived with his brother or with his brother-in-law.\n\nAt the age of 19, Nguyen passed the provincial examination. After that, he was appointed to the position of a military advisor in the Trinh army. After the Trinh Lords were defeated in 1786 by Nguyen Hue, Nguyen Du refused to serve in the new administration. He was arrested and held for some time before he moved back to his native village in the northern part of the country.\n\nLater, when yet another warlord, Nguyen Anh, ruled Viet Nam in 1802, Nguyen Du agreed to serve in his administration. At first, he was given his old post of military advisor but after a decade, he was promoted to an ambassador to China in 1813.\n\nWhile in China, he discovered and translated the Ming dynasty era tale “Kim Van Kieu” that would become the basis for the Tale of Kieu. He was later appointed to two more missions to Beijing, but before he could depart for the last one, he died of a long illness for which he refused treatment in 1820.\n\nNguyen Du’s father worked as a minister for the Lê dynasty, and his family did well during this time. However, Nguyen Du spent much of his life feeling guilty because he worked for a new ruler who took over, and he thought this was a betrayal of the true leaders of Viet Nam. He believed this brought dishonour to him and his family.',
      questionIndices: [37, 38, 39, 40, 41]
    },
    {
      id: 'sec-1-4',
      title: 'IV. KỸ NĂNG VIẾT (WRITING - SENTENCE ARRANGEMENT)',
      instruction: 'Mark the letter A, B, C, or D on your answer sheet to indicate the correct arrangement of the sentences to make a meaningful paragraph or dialogue.',
      questionIndices: [42, 43, 44, 45]
    }
  ],
  questions: [
    {
      id: 'u1-q1', index: 1, sectionId: 'sec-1-1',
      questionText: 'Mark the letter A, B, C or D to indicate the word that differs from the other three in the position of primary stress.',
      options: [{ id: 'A', text: 'cancer' }, { id: 'B', text: 'attack' }, { id: 'C', text: 'disease' }, { id: 'D', text: 'defeat' }],
      correctAnswer: 'A',
      explanation: 'cancer nhấn âm 1 (/ˈkænsər/), trong khi attack (/əˈtæk/), disease (/dɪˈziːz/) và defeat (/dɪˈfiːt/) đều nhấn âm 2.'
    },
    {
      id: 'u1-q2', index: 2, sectionId: 'sec-1-1',
      questionText: 'Mark the letter A, B, C or D to indicate the word that differs from the other three in the position of primary stress.',
      options: [{ id: 'A', text: 'impressive' }, { id: 'B', text: 'resistance' }, { id: 'C', text: 'medicine' }, { id: 'D', text: 'adoption' }],
      correctAnswer: 'C',
      explanation: 'medicine nhấn âm 1 (/ˈmedsn/), các từ còn lại nhấn âm 2: impressive (/ɪmˈpresɪv/), resistance (/rɪˈzɪstəns/), adoption (/əˈdɑːpʃn/).'
    },
    {
      id: 'u1-q3', index: 3, sectionId: 'sec-1-1',
      questionText: 'Mark the letter A, B, C or D to indicate the word that differs from the other three in the position of primary stress.',
      options: [{ id: 'A', text: 'military' }, { id: 'B', text: 'animation' }, { id: 'C', text: 'contribution' }, { id: 'D', text: 'pancreatic' }],
      correctAnswer: 'A',
      explanation: 'military nhấn âm 1 (/ˈmɪləteri/), các từ còn lại có hậu tố -tion và -ic nên nhấn vào âm tiết thứ 3: animation (/ˌænɪˈmeɪʃn/), contribution (/ˌkɑːntrɪˈbjuːʃn/), pancreatic (/ˌpæŋkriˈætɪk/).'
    },
    {
      id: 'u1-q4', index: 4, sectionId: 'sec-1-1',
      questionText: 'Mark the letter A, B, C or D to indicate the word that differs from the other three in the position of primary stress.',
      options: [{ id: 'A', text: 'invent' }, { id: 'B', text: 'resign' }, { id: 'C', text: 'childhood' }, { id: 'D', text: 'adopt' }],
      correctAnswer: 'C',
      explanation: 'childhood là danh từ ghép nhấn âm 1 (/ˈtʃaɪldhʊd/), các từ còn lại là động từ 2 âm tiết nhấn âm 2: invent (/ɪnˈvent/), resign (/rɪˈzaɪn/), adopt (/əˈdɑːpt/).'
    },
    {
      id: 'u1-q5', index: 5, sectionId: 'sec-1-1',
      questionText: 'Mark the letter A, B, C or D to indicate the word that differs from the other three in the position of primary stress.',
      options: [{ id: 'A', text: 'diagnose' }, { id: 'B', text: 'general' }, { id: 'C', text: 'autograph' }, { id: 'D', text: 'achievement' }],
      correctAnswer: 'D',
      explanation: 'achievement nhấn âm 2 (/əˈtʃiːvmənt/), các từ còn lại nhấn âm 1: diagnose (/ˈdaɪəɡnoʊz/), general (/ˈdʒenrəl/), autograph (/ˈɔːtəɡræf/).'
    },
    {
      id: 'u1-q6', index: 6, sectionId: 'sec-1-2',
      questionText: 'Dang Thuy Tram ______ her duty in Quang Ngai Province when the cruel enemy _____ her.',
      options: [{ id: 'A', text: 'was doing / killed' }, { id: 'B', text: 'did / killed' }, { id: 'C', text: 'did / was killing' }, { id: 'D', text: 'was doing / was killing' }],
      correctAnswer: 'A',
      explanation: 'Hành động đang diễn ra trong quá khứ thì có hành động khác xen vào: hành động đang diễn ra chia Quá khứ tiếp diễn (was doing), hành động xen vào chia Quá khứ đơn (killed).'
    },
    {
      id: 'u1-q7', index: 7, sectionId: 'sec-1-2',
      questionText: 'The teacher _____________ a presentation about the resistance war to inspire her students.',
      options: [{ id: 'A', text: 'took' }, { id: 'B', text: 'got' }, { id: 'C', text: 'gave' }, { id: 'D', text: 'told' }],
      correctAnswer: 'C',
      explanation: 'Collocation chuẩn: "give a presentation" (thuyết trình, trình bày một bài giảng).'
    },
    {
      id: 'u1-q8', index: 8, sectionId: 'sec-1-2',
      questionText: '____________ of college was a difficult decision, but it allowed him to pursue his true passion.',
      options: [{ id: 'A', text: 'Dropping out' }, { id: 'B', text: 'Falling out' }, { id: 'C', text: 'Passing out' }, { id: 'D', text: 'Carrying out' }],
      correctAnswer: 'A',
      explanation: 'Cụm động từ "drop out of college" mang nghĩa bỏ học đại học giữa chừng.'
    },
    {
      id: 'u1-q9', index: 9, sectionId: 'sec-1-2',
      questionText: 'General Vo Nguyen Giap was a legendary military genius who led the Vietnam People\'s Army to victory against ________ forces.',
      options: [{ id: 'A', text: 'culture' }, { id: 'B', text: 'colonial' }, { id: 'C', text: 'society' }, { id: 'D', text: 'identity' }],
      correctAnswer: 'B',
      explanation: 'Tính từ "colonial" (thuộc địa); "colonial forces" nghĩa là các lực lượng thực dân, xâm lược.'
    },
    {
      id: 'u1-q10', index: 10, sectionId: 'sec-1-2',
      questionText: 'The doctor was able to _____________ the rare disease after running several advanced tests.',
      options: [{ id: 'A', text: 'admire' }, { id: 'B', text: 'diagnose' }, { id: 'C', text: 'adopt' }, { id: 'D', text: 'resign' }],
      correctAnswer: 'B',
      explanation: 'Động từ "diagnose" nghĩa là chẩn đoán bệnh tật.'
    },
    {
      id: 'u1-q11', index: 11, sectionId: 'sec-1-2',
      questionText: 'His ___________ to the field of science earned him numerous awards and international recognition.',
      options: [{ id: 'A', text: 'contribution' }, { id: 'B', text: 'contribute' }, { id: 'C', text: 'contributory' }, { id: 'D', text: 'contributor' }],
      correctAnswer: 'A',
      explanation: 'Sau tính từ sở hữu "His" cần một danh từ chỉ sự đóng góp: "contribution".'
    },
    {
      id: 'u1-q12', index: 12, sectionId: 'sec-1-2',
      questionText: 'While he ___________ on his latest project, he ___________ an old friend from high school.',
      options: [{ id: 'A', text: 'worked / met' }, { id: 'B', text: 'was working / was meeting' }, { id: 'C', text: 'was working / met' }, { id: 'D', text: 'worked / was meeting' }],
      correctAnswer: 'C',
      explanation: 'Mệnh đề sau "While" diễn tả hành động đang xảy ra (was working), mệnh đề chính diễn tả hành động bất ngờ xen vào (met).'
    },
    {
      id: 'u1-q13', index: 13, sectionId: 'sec-1-2',
      questionText: 'Although they faced intense enemy ___________, the soldiers never lost their determination to win.',
      options: [{ id: 'A', text: 'account' }, { id: 'B', text: 'resistance' }, { id: 'C', text: 'attacks' }, { id: 'D', text: 'geniuses' }],
      correctAnswer: 'C',
      explanation: 'Cụm danh từ "enemy attacks" (các cuộc tấn công dữ dội của quân địch).'
    },
    {
      id: 'u1-q14', index: 14, sectionId: 'sec-1-2',
      questionText: 'Steve Jobs’ remarkable vision and perseverance continue to _________ young entrepreneurs worldwide.',
      options: [{ id: 'A', text: 'inspire' }, { id: 'B', text: 'resign' }, { id: 'C', text: 'defeat' }, { id: 'D', text: 'adopt' }],
      correctAnswer: 'A',
      explanation: '"inspire" (truyền cảm hứng cho các doanh nhân trẻ trên toàn thế giới).'
    },
    {
      id: 'u1-q15', index: 15, sectionId: 'sec-1-2',
      questionText: 'He decided to ____________ from his position as CEO due to ongoing health problems.',
      options: [{ id: 'A', text: 'resign' }, { id: 'B', text: 'admire' }, { id: 'C', text: 'oppose' }, { id: 'D', text: 'prosecute' }],
      correctAnswer: 'A',
      explanation: '"resign from a position" nghĩa là từ chức khỏi cương vị lãnh đạo.'
    },
    {
      id: 'u1-q16', index: 16, sectionId: 'sec-1-2',
      questionText: 'Nguyen Hue was a military genius who achieved a brilliant victory over the Qing invaders in the spring of ________.',
      options: [{ id: 'A', text: '1789' }, { id: 'B', text: '1945' }, { id: 'C', text: '1954' }, { id: 'D', text: '1975' }],
      correctAnswer: 'A',
      explanation: 'Chiến thắng Ngọc Hồi - Đống Đa đại phá 29 vạn quân Thanh diễn ra vào mùa xuân năm Kỷ Dậu 1789.'
    },
    {
      id: 'u1-q17', index: 17, sectionId: 'sec-1-2',
      questionText: 'He is widely regarded as a ____________ figure in Vietnamese history for his dedication to national liberation.',
      options: [{ id: 'A', text: 'legendary' }, { id: 'B', text: 'legend' }, { id: 'C', text: 'legendarily' }, { id: 'D', text: 'legends' }],
      correctAnswer: 'A',
      explanation: 'Cần tính từ "legendary" bổ nghĩa cho danh từ "figure" (nhân vật huyền thoại).'
    },
    {
      id: 'u1-q18', index: 18, sectionId: 'sec-1-2',
      questionText: 'Mark the letter A, B, C, or D to indicate the word(s) OPPOSITE in meaning: His achievements in cancer research were IMPRESSIVE and saved thousands of lives.',
      options: [{ id: 'A', text: 'remarkable' }, { id: 'B', text: 'ordinary' }, { id: 'C', text: 'admirable' }, { id: 'D', text: 'extraordinary' }],
      correctAnswer: 'B',
      explanation: 'impressive (ấn tượng, xuất sắc) trái nghĩa với ordinary (bình thường, tầm thường).'
    },
    {
      id: 'u1-q19', index: 19, sectionId: 'sec-1-2',
      questionText: 'Mark the letter A, B, C, or D to indicate the word(s) OPPOSITE in meaning: Apple is well-known for its CUTTING-EDGE technology that transforms everyday life.',
      options: [{ id: 'A', text: 'outdated' }, { id: 'B', text: 'modern' }, { id: 'C', text: 'advanced' }, { id: 'D', text: 'innovative' }],
      correctAnswer: 'A',
      explanation: 'cutting-edge (tân tiến, hiện đại nhất) trái nghĩa với outdated (lỗi thời, lạc hậu).'
    },
    {
      id: 'u1-q20', index: 20, sectionId: 'sec-1-2',
      questionText: 'Mark the letter A, B, C, or D to indicate the word(s) CLOSEST in meaning: Because her parents died in the war, a kind local family TOOK HIM AS THEIR OWN CHILD.',
      options: [{ id: 'A', text: 'adopted him' }, { id: 'B', text: 'criticised him' }, { id: 'C', text: 'abandoned him' }, { id: 'D', text: 'punished him' }],
      correctAnswer: 'A',
      explanation: 'take someone as one\'s own child đồng nghĩa với "adopt" (nhận làm con nuôi).'
    },
    {
      id: 'u1-q21', index: 21, sectionId: 'sec-1-2',
      questionText: 'Mark the letter A, B, C, or D to indicate the word(s) CLOSEST in meaning: The RESISTANCE WAR against foreign invaders demanded immense sacrifices from the people.',
      options: [{ id: 'A', text: 'struggle for liberation' }, { id: 'B', text: 'peace agreement' }, { id: 'C', text: 'economic reform' }, { id: 'D', text: 'cultural exchange' }],
      correctAnswer: 'A',
      explanation: 'resistance war (cuộc kháng chiến chống ngoại xâm) đồng nghĩa với "struggle for liberation" (cuộc đấu tranh giải phóng dân tộc).'
    },
    {
      id: 'u1-q22', index: 22, sectionId: 'sec-1-3-1',
      questionText: 'Both Einstein and Newton were described as lonely children (22) ________ lacked social skills...',
      options: [{ id: 'A', text: 'which' }, { id: 'B', text: 'who' }, { id: 'C', text: 'whose' }, { id: 'D', text: 'whom' }],
      correctAnswer: 'B',
      explanation: 'Đại từ quan hệ "who" thay thế cho danh từ chỉ người làm chủ ngữ (children who lacked social skills).'
    },
    {
      id: 'u1-q23', index: 23, sectionId: 'sec-1-3-1',
      questionText: 'Einstein dropped out of school... (23) ________, Newton didn\'t excel in school...',
      options: [{ id: 'A', text: 'Similarly' }, { id: 'B', text: 'However' }, { id: 'C', text: 'Therefore' }, { id: 'D', text: 'In contrast' }],
      correctAnswer: 'A',
      explanation: 'Đoạn văn nói về điểm tương đồng giữa hai nhà khoa học: "Similarly" (Tương tự như vậy, Newton cũng không xuất sắc ở trường học thời thơ ấu).'
    },
    {
      id: 'u1-q24', index: 24, sectionId: 'sec-1-3-1',
      questionText: '...and contributed to our (24) ________ of gravity.',
      options: [{ id: 'A', text: 'understand' }, { id: 'B', text: 'understanding' }, { id: 'C', text: 'understandable' }, { id: 'D', text: 'understandably' }],
      correctAnswer: 'B',
      explanation: 'Sau tính từ sở hữu "our" cần một danh từ: "understanding" (sự hiểu biết về trọng lực).'
    },
    {
      id: 'u1-q25', index: 25, sectionId: 'sec-1-3-1',
      questionText: '...showed that Newton was wrong about time and space, and (25) ________ a new theory of gravity.',
      options: [{ id: 'A', text: 'proposed' }, { id: 'B', text: 'rejected' }, { id: 'C', text: 'ignored' }, { id: 'D', text: 'forgot' }],
      correctAnswer: 'A',
      explanation: '"propose a theory" nghĩa là đề xuất/đưa ra một học thuyết mới.'
    },
    {
      id: 'u1-q26', index: 26, sectionId: 'sec-1-3-1',
      questionText: '...about who made the bigger (26) ________ to humankind.',
      options: [{ id: 'A', text: 'contribution' }, { id: 'B', text: 'discovery' }, { id: 'C', text: 'invention' }, { id: 'D', text: 'decision' }],
      correctAnswer: 'A',
      explanation: 'Collocation: "make a contribution to" (đóng góp to lớn cho nhân loại).'
    },
    {
      id: 'u1-q27', index: 27, sectionId: 'sec-1-3-2',
      questionText: 'Alexander Graham Bell was a Scottish-born scientist and inventor (27) _________ was best known for inventing the first working telephone.',
      options: [{ id: 'A', text: 'who' }, { id: 'B', text: 'which' }, { id: 'C', text: 'whom' }, { id: 'D', text: 'whose' }],
      correctAnswer: 'A',
      explanation: 'Đại từ quan hệ "who" bổ nghĩa cho danh từ chỉ người (inventor who was best known).'
    },
    {
      id: 'u1-q28', index: 28, sectionId: 'sec-1-3-2',
      questionText: 'During his youth, Bell was strongly (28) _________ by his family and his environment.',
      options: [{ id: 'A', text: 'influential' }, { id: 'B', text: 'influence' }, { id: 'C', text: 'influenced' }, { id: 'D', text: 'influencing' }],
      correctAnswer: 'C',
      explanation: 'Câu bị động trong quá khứ: "was strongly influenced by" (chịu ảnh hưởng sâu sắc từ gia đình và môi trường sống).'
    },
    {
      id: 'u1-q29', index: 29, sectionId: 'sec-1-3-2',
      questionText: 'On July 11, 1877, Bell married Mabel Hubbard who had been deaf (29) _________ her early childhood years.',
      options: [{ id: 'A', text: 'for' }, { id: 'B', text: 'since' }, { id: 'C', text: 'in' }, { id: 'D', text: 'at' }],
      correctAnswer: 'B',
      explanation: 'Thì quá khứ hoàn thành (had been deaf) đi với mốc thời gian trong quá khứ dùng "since" (từ những năm tháng thơ ấu).'
    },
    {
      id: 'u1-q30', index: 30, sectionId: 'sec-1-3-2',
      questionText: 'On March 10, 1876, after many years (30) _________ work, Bell perfected his most well-known invention...',
      options: [{ id: 'A', text: 'of' }, { id: 'B', text: 'on' }, { id: 'C', text: 'with' }, { id: 'D', text: 'to' }],
      correctAnswer: 'A',
      explanation: 'Cụm danh từ: "many years of work" (sau nhiều năm làm việc/nghiên cứu).'
    },
    {
      id: 'u1-q31', index: 31, sectionId: 'sec-1-3-2',
      questionText: '...an experimental facility devoted to (31) _________ discovery.',
      options: [{ id: 'A', text: 'scientifically' }, { id: 'B', text: 'science' }, { id: 'C', text: 'scientist' }, { id: 'D', text: 'scientific' }],
      correctAnswer: 'D',
      explanation: 'Cần tính từ "scientific" bổ nghĩa cho danh từ "discovery" (khám phá khoa học).'
    },
    {
      id: 'u1-q32', index: 32, sectionId: 'sec-1-3-3',
      questionText: 'Which of the following is the best title for the passage about Steve Jobs?',
      options: [
        { id: 'A', text: 'Steve Jobs was a visionary who created life-changing technology products.' },
        { id: 'B', text: 'Steve Jobs and the history of Pixar Animation Studios.' },
        { id: 'C', text: 'How Apple Computers was started in a garage.' },
        { id: 'D', text: 'The battle against pancreatic cancer.' }
      ],
      correctAnswer: 'A',
      explanation: 'Tiêu đề phù hợp nhất khái quát toàn bài: Steve Jobs là nhà sáng lập với tầm nhìn vĩ đại, tạo ra những sản phẩm công nghệ thay đổi đời sống con người.'
    },
    {
      id: 'u1-q33', index: 33, sectionId: 'sec-1-3-3',
      questionText: 'The word "it" in paragraph 2 refers to:',
      options: [{ id: 'A', text: 'garage' }, { id: 'B', text: 'company' }, { id: 'C', text: 'success' }, { id: 'D', text: 'electronics' }],
      correctAnswer: 'A',
      explanation: 'Đoạn 2 ghi: "...in Jobs\' family garage... They turned it into a workspace" -> "it" thay thế cho "garage".'
    },
    {
      id: 'u1-q34', index: 34, sectionId: 'sec-1-3-3',
      questionText: 'Which of the following is NOT true according to the passage?',
      options: [
        { id: 'A', text: 'Jobs and Wozniak started the company in Jobs\' family garage.' },
        { id: 'B', text: 'Apple created products that were stylish and easy to use.' },
        { id: 'C', text: 'Jobs stayed with Apple continuously from 1976 until 2011 without leaving.' },
        { id: 'D', text: 'Pixar produced the first full-length computer-animated film Toy Story.' }
      ],
      correctAnswer: 'C',
      explanation: 'Đoạn 3 nêu: "Although Jobs left Apple in 1985, he returned to his post in 1997", nên việc Jobs ở lại liên tục không rời đi là thông tin KHÔNG đúng.'
    },
    {
      id: 'u1-q35', index: 35, sectionId: 'sec-1-3-3',
      questionText: 'The word "diagnosed" in paragraph 5 is closest in meaning to:',
      options: [{ id: 'A', text: 'detected' }, { id: 'B', text: 'treated' }, { id: 'C', text: 'searched' }, { id: 'D', text: 'monitored' }],
      correctAnswer: 'A',
      explanation: '"diagnosed" (chẩn đoán, phát hiện bệnh) đồng nghĩa với "detected".'
    },
    {
      id: 'u1-q36', index: 36, sectionId: 'sec-1-3-3',
      questionText: 'According to the passage, what was one reason Jobs stopped working in August 2011?',
      options: [
        { id: 'A', text: 'He had completed all his work.' },
        { id: 'B', text: 'He wanted to spend more time on computer animation.' },
        { id: 'C', text: 'He was fighting a rare form of pancreatic cancer.' },
        { id: 'D', text: 'Apple needed new leadership.' }
      ],
      correctAnswer: 'C',
      explanation: 'Đoạn 5 ghi rõ: Jobs chiến đấu với căn bệnh ung thư tuyến tụy hiếm gặp trong nhiều năm và phải ngừng làm việc vào tháng 8 năm 2011.'
    },
    {
      id: 'u1-q37', index: 37, sectionId: 'sec-1-3-4',
      questionText: 'Which of the following can be the best title for the passage about Nguyen Du?',
      options: [
        { id: 'A', text: 'Nguyen Du: Life and Career' },
        { id: 'B', text: 'The Tale of Kieu: A Masterpiece in Vietnamese Literature' },
        { id: 'C', text: 'The History of Chữ Nôm in Medieval Vietnam' },
        { id: 'D', text: 'Nguyen Du\'s Diplomatic Mission to China' }
      ],
      correctAnswer: 'A',
      explanation: 'Bài viết thuật lại toàn diện cuộc đời, biến cố thời đại và sự nghiệp văn chương, làm quan của Đại thi hào Nguyễn Du.'
    },
    {
      id: 'u1-q38', index: 38, sectionId: 'sec-1-3-4',
      questionText: 'The word “masterpiece” in paragraph 1 is closest in meaning to ____________.',
      options: [{ id: 'A', text: 'genius' }, { id: 'B', text: 'neglect' }, { id: 'C', text: 'account' }, { id: 'D', text: 'treasure' }],
      correctAnswer: 'D',
      explanation: '"masterpiece" (kiệt tác nghệ thuật/văn học vô giá) đồng nghĩa với "treasure" (báu vật, kiệt tác).'
    },
    {
      id: 'u1-q39', index: 39, sectionId: 'sec-1-3-4',
      questionText: 'The word “one” in paragraph 4 refers to ____________.',
      options: [{ id: 'A', text: 'post' }, { id: 'B', text: 'mission' }, { id: 'C', text: 'tale' }, { id: 'D', text: 'ambassador' }],
      correctAnswer: 'B',
      explanation: 'Đoạn 4 ghi: "He was later appointed to two more missions to Beijing, but before he could depart for the last one..." -> "one" thay thế cho "mission".'
    },
    {
      id: 'u1-q40', index: 40, sectionId: 'sec-1-3-4',
      questionText: 'Which of the following is NOT true according to the passage?',
      options: [
        { id: 'A', text: 'Nguyen Du’s father was a military advisor in the Trinh army.' },
        { id: 'B', text: 'Nguyen Du lost both parents by the age of 13.' },
        { id: 'C', text: 'Truyen Kieu was written in Chu Nom.' },
        { id: 'D', text: 'Nguyen Du was promoted to ambassador to China in 1813.' }
      ],
      correctAnswer: 'A',
      explanation: 'Đoạn cuối bài nêu: "Nguyen Du’s father worked as a minister for the Lê dynasty", trong khi chính Nguyễn Du mới giữ chức military advisor sau khi đỗ cử nhân, nên câu A là sai.'
    },
    {
      id: 'u1-q41', index: 41, sectionId: 'sec-1-3-4',
      questionText: 'Which of the following can be inferred from the passage?',
      options: [
        { id: 'A', text: 'He considered himself the founding figure of Vietnamese literature.' },
        { id: 'B', text: 'He did not face any hardships after losing his parents at a young age.' },
        { id: 'C', text: 'Nguyen Du felt guilty for serving who he perceived to be a wrong ruler.' },
        { id: 'D', text: 'He loved working for the Nguyen Dynasty unconditionally.' }
      ],
      correctAnswer: 'C',
      explanation: 'Đoạn cuối nêu rõ: "Nguyen Du spent much of his life feeling guilty because he worked for a new ruler who took over, and he thought this was a betrayal of the true leaders of Viet Nam."'
    },
    {
      id: 'u1-q42', index: 42, sectionId: 'sec-1-4',
      questionText: 'Mark the letter A, B, C, or D to indicate the correct arrangement of the sentences to make a meaningful dialogue:\na. Anna: Definitely! Despite facing poverty and war, he always valued hard work and family above all.\nb. Anna: Hi John, I often think about my grandfather. He lived through so many hardships and still managed to build a good life for his family.\nc. John: His story is truly inspiring. It shows the power of perseverance and love in overcoming challenges.\nd. John: Wow, that’s incredible. He must have been a strong and determined man.',
      options: [{ id: 'A', text: 'b - c - a - d' }, { id: 'B', text: 'b - d - a - c' }, { id: 'C', text: 'a - c - b - d' }, { id: 'D', text: 'c - a - b - d' }],
      correctAnswer: 'B',
      explanation: 'Thứ tự logic: b (Anna giới thiệu về ông) ➔ d (John khen ngợi sự kiên cường) ➔ a (Anna khẳng định và bổ sung đức tính chăm chỉ) ➔ c (John đúc kết câu chuyện truyền cảm hứng). Đáp án B: b - d - a - c.'
    },
    {
      id: 'u1-q43', index: 43, sectionId: 'sec-1-4',
      questionText: 'Mark the letter A, B, C, or D to indicate the correct arrangement of the sentences to make a meaningful letter:\nDear Teacher,\na. While I know he was committed to Vietnam’s independence, I would love to hear more about the challenges he faced and how he managed to stay resilient throughout.\nb. Could you share some insights into his leadership during the revolutionary period, and what values guided his actions?\nc. Recently, I’ve been reflecting on the life of President Ho Chi Minh, and I’m eager to learn more about his personal experiences.\nd. Your perspective would be really helpful as I continue to study his legacy.\ne. I trust you are doing well.\nThank you for your time,\nJohn',
      options: [{ id: 'A', text: 'e - a - c - b - d' }, { id: 'B', text: 'e - c - a - b - d' }, { id: 'C', text: 'a - c - e - d - b' }, { id: 'D', text: 'd - e - a - c - b' }],
      correctAnswer: 'B',
      explanation: 'Bố cục chuẩn bức thư: e (Lời chào hỏi đầu thư) ➔ c (Nêu lý do viết thư: tìm hiểu về Bác Hồ) ➔ a (Đặt câu hỏi về thử thách vượt qua) ➔ b (Hỏi thêm về phong cách lãnh đạo) ➔ d (Lời cảm ơn và mong nhận được hồi âm). Đáp án B: e - c - a - b - d.'
    },
    {
      id: 'u1-q44', index: 44, sectionId: 'sec-1-4',
      questionText: 'Mark the letter A, B, C, or D to indicate the correct arrangement of the dialogue:\na. Minh: What was special about his leadership?\nb. Mai: He was always close to the people, listening to and understanding their desires.\nc. Minh: President Ho Chi Minh made great contributions to the Vietnamese revolution, do you agree?\nd. Minh: His deep connection with the people was the key factor that led to the success of the revolution.\ne. Mai: Absolutely, he was the founder of the Communist Party of Vietnam and led the resistance against the French.',
      options: [{ id: 'A', text: 'c - b - e - a - d' }, { id: 'B', text: 'd - b - e - a - c' }, { id: 'C', text: 'd - c - e - b - a' }, { id: 'D', text: 'c - e - a - b - d' }],
      correctAnswer: 'D',
      explanation: 'Thứ tự hội thoại: c (Minh hỏi ý kiến về đóng góp của Bác) ➔ e (Mai đồng tình và nêu thành tựu sáng lập Đảng) ➔ a (Minh hỏi điểm đặc biệt trong phong cách lãnh đạo) ➔ b (Mai giải thích sự gần gũi với nhân dân) ➔ d (Minh đúc kết đó là nhân tố quyết định thành công). Đáp án D: c - e - a - b - d.'
    },
    {
      id: 'u1-q45', index: 45, sectionId: 'sec-1-4',
      questionText: 'Mark the letter A, B, C, or D to indicate the correct arrangement of the paragraph:\na. He is widely celebrated as a national hero and one of the greatest military strategists in history.\nb. Born on August 25, 1911, in Quảng Bình Province, he initially pursued academics, studying law and politics in Hanoi and working as a teacher.\nc. General Võ Nguyên Giáp was a legendary figure in Vietnamese history.\nd. His most famous achievement was the decisive victory at the Battle of Điện Biên Phủ in 1954, which ended French colonial rule in Indochina.\ne. He later joined the revolution, becoming a founding member of the People\'s Army of Vietnam and a key military leader in the struggles against both French and American forces.',
      options: [{ id: 'A', text: 'c - b - e - d - a' }, { id: 'B', text: 'b - c - e - a - d' }, { id: 'C', text: 'e - d - a - c - b' }, { id: 'D', text: 'a - d - e - b - c' }],
      correctAnswer: 'A',
      explanation: 'Thứ tự tiểu sử chuẩn: c (Câu chủ đề: Giới thiệu Đại tướng Võ Nguyên Giáp) ➔ b (Năm sinh, quê quán và thời trẻ học tập) ➔ e (Tham gia cách mạng và sáng lập QĐNDVN) ➔ d (Chiến công lẫy lừng Điện Biên Phủ 1954) ➔ a (Đánh giá chung: Anh hùng dân tộc, danh tướng lỗi lạc). Đáp án A: c - b - e - d - a.'
    }
  ]
};

// === DỮ LIỆU ĐỀ 2: UNIT 2 (A MULTICULTURAL WORLD) ===
const examUnit2 = {
  id: 'de-on-tap-gk1-lop-12-unit-2',
  title: 'Đề Cương Ôn Tập Giữa Kỳ 1 Lớp 12 - Unit 2: A Multicultural World (Năm học 2026-2027)',
  description: 'Đề thi chuẩn cấu trúc Bộ GD&ĐT gồm 4 phần: Trọng âm, Từ vựng & Ngữ pháp (Mạo từ, Đa văn hóa), Đọc hiểu (Etiquette, Lễ hội xanh, Mừng thọ 60 tuổi, Phong tục tặng quà) và Kỹ năng viết sắp xếp câu.',
  subject: 'Tiếng Anh',
  category: 'Ôn theo unit',
  categories: ['Ôn theo unit', 'Ôn giữa kỳ 1'],
  grade: 'Lớp 12',
  durationMinutes: 50,
  totalQuestions: 45,
  originalFileName: 'ÔN TẬP GK1 LOP 12 UNIT 2.docx',
  status: 'ready',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  tags: ['Tiếng Anh 12', 'Ôn theo unit', 'Ôn giữa kỳ 1', 'Unit 2', 'Global Success', 'Reading', 'Culture'],
  sections: [
    {
      id: 'sec-2-1',
      title: 'I. TRỌNG ÂM (STRESS)',
      instruction: 'Mark the letter A, B, C or D to indicate the word that differs from the other three in the position of primary stress in each of the following questions.',
      questionIndices: [1, 2, 3, 4, 5]
    },
    {
      id: 'sec-2-2',
      title: 'II. TỪ VỰNG & NGỮ PHÁP (VOCABULARY AND GRAMMAR)',
      instruction: 'Choose the best answer A, B, C or D to complete each sentence or find words with Opposite / Closest meaning.',
      questionIndices: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
    },
    {
      id: 'sec-2-3-1',
      title: 'III. ĐỌC ĐIỀN TỪ - BÀI ĐỌC 1 (READING 1)',
      instruction: 'Read the following passage and mark the letter A, B, C, or D to indicate the correct option that best fits each of the numbered blanks.',
      passageTitle: 'Etiquette and Gift-Giving Across Cultures (Casey Malarcher)',
      passage: 'In the early twentieth century, an American woman named Emily Post wrote a book on etiquette. This book explained the (22)_____________behavior Americans should follow in many different social situations from birthday parties to funerals. But in modern society, it is not simply to know the proper rules for behavior in your own country. It is necessary for people (23) ________ work or travel abroad to understand the rules of etiquette in other cultures as well. Many cultural (24)______ can be found in such simple processes as giving or receiving a gift. In Western cultures, a gift can be given to the receiver with relatively little ceremony. When a gift is offered, the receiver usually takes the gift and expresses his or her thanks. (25)______, in some Asian countries, the act of gift-giving may appear confusing to Westerners. In Chinese culture, both the giver and receiver understand that the receiver will typically refuse to take the gift several times before he or she finally accepts it. In addition, to show respect (26)______ the receiver, it is common in several Asian cultures to use both hands when offering a gift to another person.\n\n[Source: Reading Advantage by Casey Malarcher]',
      questionIndices: [22, 23, 24, 25, 26]
    },
    {
      id: 'sec-2-3-2',
      title: 'III. ĐỌC ĐIỀN TỪ - BÀI ĐỌC 2 (READING 2)',
      instruction: 'Read the following passage and mark the letter A, B, C, or D to indicate the correct option that best fits each of the numbered blanks.',
      passageTitle: 'Eco-friendly Festivals and Celebrations (Global Success)',
      passage: 'Festivals come with many traditions that bring happiness and joy to people around the world. They provide opportunities for families and friends to get together, enjoy exciting activities, and celebrate special occasions. However, some of these customs may not be environmentally friendly and may need to be changed for a (27) ______ future.\n\nBalloons and sky lanterns\nIn countries such as China, India, and Japan, releasing balloons or sky lanterns provides (28)_________spectacular sight during festivals and other celebrations. People often release them to bring good luck, express their hopes, and send wishes to the sky. (29) ______, the litter left behind by balloons and lanterns is hard to decompose. The frames of the lanterns can harm wild animals, and many animals mistake the balloons (30) ______ food. Lanterns have also caused wildfires, putting forests, homes, and wildlife at risk. Therefore, people should consider safer ways to celebrate and express their wishes.\n\nFireworks\nIn Australia, the US, and many other countries, there are fascinating firework displays that people won\'t want to miss. These colourful shows often attract large crowds and create unforgettable memories. However, fireworks actually release a lot of (31) ______ chemicals into the air. They can also cause fires, disturb wildlife, and frighten pets because of their loud noises. In addition, the smoke from fireworks may affect air quality and people\'s health.\n\nTo make festivals more environmentally friendly, communities can organise light shows, use reusable decorations, and encourage visitors to reduce waste. Small changes in traditional celebrations can help protect the environment for future generations.\n\n[Adapted from Global Success]',
      questionIndices: [27, 28, 29, 30, 31]
    },
    {
      id: 'sec-2-3-3',
      title: 'III. ĐỌC HIỂU - BÀI ĐỌC 3 (READING 3)',
      instruction: 'Read the following passage and mark the letter A, B, C or D to indicate the correct answer to each of the questions.',
      passageTitle: '60th Birthday Celebrations Across Cultures (Tiếng Anh 12 Bright)',
      passage: 'In many cultures around the world, turning sixty years old is a major milestone that represents wisdom, longevity, and a new stage of life. In countries like South Korea, Mexico, and India, people mark their 60th birthdays with special ceremonies, feasts, and family gatherings.\n\nIn South Korea, the 60th birthday, known as Hwangap, is highly significant. During this ceremony, children and younger relatives bow to their elders to show respect and wish them well. The birthday person shares a meal with family, including traditional dishes like rice cakes and miyeok guk (seaweed soup). They also receive blessings and good wishes.\n\nIn Mexico, turning sixty is called la fiesta de sesenta cumpleaños. The celebration often includes a religious blessing from a local priest, followed by the exchange of gifts and a festive meal. Traditional foods such as mole—a rich sauce made with chilli and chocolate—and pastel de tres leches, a soft cake soaked in three kinds of milk, are commonly served.\n\nIn India, many people celebrate their 60th birthday with a ceremony called Sashti Poorthi. It features prayer rituals to wish the person health and prosperity. Relatives and friends enjoy dishes like lentil soup and biryani, a flavorful rice and meat dish. Gifts of gold jewellery are often given to honour the elder.\n\nThese celebrations of longevity remind people of the wisdom and guidance of their elders. They bring families together to express gratitude, respect, and love toward parents and grandparents who have contributed greatly to their families and communities.\n\n[Tiếng Anh 12 Bright]',
      questionIndices: [32, 33, 34, 35, 36]
    },
    {
      id: 'sec-2-3-4',
      title: 'III. ĐỌC HIỂU - BÀI ĐỌC 4 (READING 4)',
      instruction: 'Read the following passage and mark the letter A, B, C or D to indicate the correct answer to each of the questions.',
      passageTitle: 'Chinese Gift-Giving Etiquette (Adapted from Regina Coeli)',
      passage: 'When the British transport minister presented a watch to a Chinese official, her act was described by BBC as a “cultural gaffe”. So why is a “watch” not a good gift in Chinese eyes? And what are the right and wrong choices for gifts to Chinese business associates and friends? The answer lies in the Chinese language.\n\nGiving someone a clock or a watch as a present is traditionally a taboo in Chinese culture due to “giving a clock” and “attending a person’s funeral” having the same pronunciation, regardless of the different written characters. Therefore, avoiding presenting a gift which has “the same pronunciation of any unlucky meaning” is important in building relationships with Chinese people.\n\nGifts are presented with two hands in China. The receiving person may decline the gift at first (or even up to three times). It is part of the custom for Chinese to do so as they consider themselves not worthy of the gift. However, do not withdraw the gift as your persistent trying will persuade the Chinese into accepting your gift. If presenting organisational gifts, it is done during a toast or at the end of a meal, just prior to departure. In modern time China, sometimes a business meeting is planned on short notice and can be quite short. In this case, organisational gifts are exchanged after the first speaker of meeting parties or just before the end of the meeting.\n\n[Adapted from Regina Coeli]',
      questionIndices: [37, 38, 39, 40, 41]
    },
    {
      id: 'sec-2-4',
      title: 'IV. KỸ NĂNG VIẾT (WRITING - SENTENCE ARRANGEMENT)',
      instruction: 'Mark the letter A, B, C, or D on your answer sheet to indicate the correct arrangement of the sentences to make a meaningful paragraph or dialogue.',
      questionIndices: [42, 43, 44, 45]
    }
  ],
  questions: [
    {
      id: 'u2-q1', index: 1, sectionId: 'sec-2-1',
      questionText: 'Mark the letter A, B, C or D to indicate the word that differs from the other three in the position of primary stress.',
      options: [{ id: 'A', text: 'autograph' }, { id: 'B', text: 'origin' }, { id: 'C', text: 'importance' }, { id: 'D', text: 'souvenir' }],
      correctAnswer: 'C',
      explanation: 'importance có trọng âm rơi vào âm tiết thứ 2 (/ɪmˈpɔːtns/), các từ autograph (/ˈɔːtəɡræf/) và origin (/ˈɒrɪdʒɪn/) nhấn âm 1, souvenir (/ˌsuːvəˈnɪə/) nhấn âm 3.'
    },
    {
      id: 'u2-q2', index: 2, sectionId: 'sec-2-1',
      questionText: 'Mark the letter A, B, C or D to indicate the word that differs from the other three in the position of primary stress.',
      options: [{ id: 'A', text: 'belief' }, { id: 'B', text: 'respect' }, { id: 'C', text: 'cuisine' }, { id: 'D', text: 'famous' }],
      correctAnswer: 'D',
      explanation: 'famous có trọng âm rơi vào âm tiết thứ 1 (/ˈfeɪməs/), trong khi belief (/bɪˈliːf/), respect (/rɪˈspekt/) và cuisine (/kwɪˈziːn/) đều nhấn vào âm tiết thứ 2.'
    },
    {
      id: 'u2-q3', index: 3, sectionId: 'sec-2-1',
      questionText: 'Mark the letter A, B, C or D to indicate the word that differs from the other three in the position of primary stress.',
      options: [{ id: 'A', text: 'strengthen' }, { id: 'B', text: 'respect' }, { id: 'C', text: 'global' }, { id: 'D', text: 'culture' }],
      correctAnswer: 'B',
      explanation: 'respect có trọng âm rơi vào âm tiết thứ 2 (/rɪˈspekt/), các từ còn lại đều nhấn âm 1: strengthen (/ˈstreŋkθn/), global (/ˈɡləʊbl/), culture (/ˈkʌltʃə/).'
    },
    {
      id: 'u2-q4', index: 4, sectionId: 'sec-2-1',
      questionText: 'Mark the letter A, B, C or D to indicate the word that differs from the other three in the position of primary stress.',
      options: [{ id: 'A', text: 'cultural' }, { id: 'B', text: 'popular' }, { id: 'C', text: 'typical' }, { id: 'D', text: 'effective' }],
      correctAnswer: 'D',
      explanation: 'effective có hậu tố -ive nên trọng âm rơi vào âm tiết thứ 2 (/ɪˈfektɪv/), các từ còn lại nhấn âm 1: cultural (/ˈkʌltʃərəl/), popular (/ˈpɒpjələ/), typical (/ˈtɪpɪkl/).'
    },
    {
      id: 'u2-q5', index: 5, sectionId: 'sec-2-1',
      questionText: 'Mark the letter A, B, C or D to indicate the word that differs from the other three in the position of primary stress.',
      options: [{ id: 'A', text: 'meatball' }, { id: 'B', text: 'spicy' }, { id: 'C', text: 'alarm' }, { id: 'D', text: 'language' }],
      correctAnswer: 'C',
      explanation: 'alarm có trọng âm rơi vào âm tiết thứ 2 (/əˈlɑːm/), các từ còn lại là danh từ/tính từ 2 âm tiết nhấn âm 1: meatball (/ˈmiːtbɔːl/), spicy (/ˈspaɪsi/), language (/ˈlæŋɡwɪdʒ/).'
    },
    {
      id: 'u2-q6', index: 6, sectionId: 'sec-2-2',
      questionText: '_________ culture shock can be challenging for travelers visiting __________ new country for the first time.',
      options: [{ id: 'A', text: 'A - the' }, { id: 'B', text: 'An - a' }, { id: 'C', text: '∅ - a' }, { id: 'D', text: 'The - a' }],
      correctAnswer: 'C',
      explanation: '"Culture shock" là danh từ không đếm được nói chung nên không dùng mạo từ (∅). Vế sau "visiting a new country" là một quốc gia mới được nhắc đến lần đầu tiên.'
    },
    {
      id: 'u2-q7', index: 7, sectionId: 'sec-2-2',
      questionText: 'The reflection of multicultural values can be seen in food, art, and fashion around _____ world.',
      options: [{ id: 'A', text: 'a' }, { id: 'B', text: 'an' }, { id: 'C', text: 'the' }, { id: 'D', text: '∅' }],
      correctAnswer: 'C',
      explanation: 'Cụm từ cố định: "around the world" (khắp nơi trên thế giới).'
    },
    {
      id: 'u2-q8', index: 8, sectionId: 'sec-2-2',
      questionText: 'Although the language barrier made communication difficult, the tourists were happy to __________ the locals, who introduced them to traditional bamboo dancing.',
      options: [{ id: 'A', text: 'deal with' }, { id: 'B', text: 'listen to' }, { id: 'C', text: 'open to' }, { id: 'D', text: 'interact with' }],
      correctAnswer: 'D',
      explanation: '"interact with somebody" nghĩa là giao lưu, tương tác với người dân địa phương.'
    },
    {
      id: 'u2-q9', index: 9, sectionId: 'sec-2-2',
      questionText: 'Not until I joined a __________ event did I realize how diverse our world is, which taught me to appreciate traditions more.',
      options: [{ id: 'A', text: 'multicultural' }, { id: 'B', text: 'culture shock' }, { id: 'C', text: 'international' }, { id: 'D', text: 'language barrier' }],
      correctAnswer: 'A',
      explanation: '"multicultural event" (sự kiện đa văn hóa); đi kèm vế sau "how diverse our world is" (thế giới chúng ta đa dạng đến nhường nào).'
    },
    {
      id: 'u2-q10', index: 10, sectionId: 'sec-2-2',
      questionText: 'The ao dai, the traditional long dress for women, has become a symbol of Vietnamese _____ and culture.',
      options: [{ id: 'A', text: 'people' }, { id: 'B', text: 'identity' }, { id: 'C', text: 'location' }, { id: 'D', text: 'cuisine' }],
      correctAnswer: 'B',
      explanation: '"Vietnamese identity and culture" (bản sắc văn hóa và bản sắc dân tộc Việt Nam).'
    },
    {
      id: 'u2-q11', index: 11, sectionId: 'sec-2-2',
      questionText: 'Bamboo dancing has gained _____________ in recent years thanks to international festivals.',
      options: [{ id: 'A', text: 'popularity' }, { id: 'B', text: 'popular' }, { id: 'C', text: 'popularly' }, { id: 'D', text: 'unpopular' }],
      correctAnswer: 'A',
      explanation: 'Cụm động từ: "gain popularity" (ngày càng trở nên phổ biến, được đông đảo mọi người yêu thích).'
    },
    {
      id: 'u2-q12', index: 12, sectionId: 'sec-2-2',
      questionText: '__________ most lively and energetic cultural performances take place in __________ heart of New York City.',
      options: [{ id: 'A', text: 'A / the' }, { id: 'B', text: 'The / a' }, { id: 'C', text: 'The / Ø' }, { id: 'D', text: 'The / the' }],
      correctAnswer: 'D',
      explanation: '"The most lively" (dùng mạo từ The trước so sánh nhất) và cụm danh từ chỉ nơi chốn "in the heart of" (tại trung tâm của...).'
    },
    {
      id: 'u2-q13', index: 13, sectionId: 'sec-2-2',
      questionText: 'I have visited ____ Portugal but I have never been to ____ Netherlands.',
      options: [{ id: 'A', text: 'the – the' }, { id: 'B', text: 'Ø - the' }, { id: 'C', text: 'a – the' }, { id: 'D', text: 'a - a' }],
      correctAnswer: 'B',
      explanation: 'Quy tắc mạo từ: Tên quốc gia đơn lẻ (Portugal) không dùng mạo từ (Ø), nhưng các quốc gia có đuôi số nhiều như The Netherlands (Hà Lan), The Philippines phải dùng "the".'
    },
    {
      id: 'u2-q14', index: 14, sectionId: 'sec-2-2',
      questionText: 'Many students struggle to __________ the unfamiliar customs in a foreign country.',
      options: [{ id: 'A', text: 'keep up with' }, { id: 'B', text: 'catch on to' }, { id: 'C', text: 'deal with' }, { id: 'D', text: 'adapt to' }],
      correctAnswer: 'D',
      explanation: '"adapt to something" nghĩa là thích nghi, hòa nhập với các phong tục tập quán xa lạ.'
    },
    {
      id: 'u2-q15', index: 15, sectionId: 'sec-2-2',
      questionText: 'The bamboo dancing performance __________ the entire audience.',
      options: [{ id: 'A', text: 'captive' }, { id: 'B', text: 'captivating' }, { id: 'C', text: 'captivated' }, { id: 'D', text: 'captivation' }],
      correctAnswer: 'C',
      explanation: 'Vị trí vị ngữ cần một động từ chia thì quá khứ đơn: "captivated" (lôi cuốn, thu hút trọn vẹn sự chú ý của khán giả).'
    },
    {
      id: 'u2-q16', index: 16, sectionId: 'sec-2-2',
      questionText: 'We prefer to buy regional _______ from bricks-and-mortar retailers.',
      options: [{ id: 'A', text: 'manners' }, { id: 'B', text: 'occasions' }, { id: 'C', text: 'specialties' }, { id: 'D', text: 'norm' }],
      correctAnswer: 'C',
      explanation: '"regional specialties" mang nghĩa các đặc sản vùng miền địa phương.'
    },
    {
      id: 'u2-q17', index: 17, sectionId: 'sec-2-2',
      questionText: 'Foreign tourists are fascinated by a wide variety of traditional Vietnamese _________.',
      options: [{ id: 'A', text: 'cuisines' }, { id: 'B', text: 'trends' }, { id: 'C', text: 'mysteries' }, { id: 'D', text: 'origins' }],
      correctAnswer: 'A',
      explanation: '"traditional Vietnamese cuisines" (các nền ẩm thực, món ăn truyền thống của Việt Nam).'
    },
    {
      id: 'u2-q18', index: 18, sectionId: 'sec-2-2',
      questionText: 'Mark the letter A, B, C, or D to indicate the word(s) OPPOSITE in meaning: K-pop has become POPULAR across various countries, showcasing how cross-cultural influences can shape global music trends.',
      options: [{ id: 'A', text: 'uncommon' }, { id: 'B', text: 'famous' }, { id: 'C', text: 'fashionable' }, { id: 'D', text: 'familiar' }],
      correctAnswer: 'A',
      explanation: 'popular (phổ biến, thịnh hành) trái nghĩa với uncommon (hiếm hoi, không phổ biến).'
    },
    {
      id: 'u2-q19', index: 19, sectionId: 'sec-2-2',
      questionText: 'Mark the letter A, B, C, or D to indicate the word(s) OPPOSITE in meaning: GLOBALISATION has made it easier for people to experience products and services from different countries.',
      options: [{ id: 'A', text: 'internationalization' }, { id: 'B', text: 'isolation' }, { id: 'C', text: 'integration' }, { id: 'D', text: 'connection' }],
      correctAnswer: 'B',
      explanation: 'globalisation (sự toàn cầu hóa, hòa nhập thế giới) trái nghĩa với isolation (sự cô lập, khép kín).'
    },
    {
      id: 'u2-q20', index: 20, sectionId: 'sec-2-2',
      questionText: 'Mark the letter A, B, C, or D to indicate the word(s) CLOSEST in meaning: Experiencing UNFAMILIAR social norms and behaviors can lead to culture shock when moving to a different country.',
      options: [{ id: 'A', text: 'common' }, { id: 'B', text: 'strange' }, { id: 'C', text: 'similar' }, { id: 'D', text: 'simple' }],
      correctAnswer: 'B',
      explanation: 'unfamiliar (xa lạ, không quen thuộc) đồng nghĩa với strange (lạ lẫm).'
    },
    {
      id: 'u2-q21', index: 21, sectionId: 'sec-2-2',
      questionText: 'Mark the letter A, B, C, or D to indicate the word(s) CLOSEST in meaning: The unexpected POPULARITY of the indie film surprised even the director, who had created it with a very limited budget.',
      options: [{ id: 'A', text: 'Public acclaim' }, { id: 'B', text: 'Widespread appeal' }, { id: 'C', text: 'Commercial success' }, { id: 'D', text: 'Cultural significance' }],
      correctAnswer: 'B',
      explanation: 'popularity (sự phổ biến, thu hút đông đảo công chúng) đồng nghĩa với widespread appeal (sức lôi cuốn rộng rãi).'
    },
    {
      id: 'u2-q22', index: 22, sectionId: 'sec-2-3-1',
      questionText: 'This book explained the (22)_____________ behavior Americans should follow in many different social situations...',
      options: [{ id: 'A', text: 'proper' }, { id: 'B', text: 'improperly' }, { id: 'C', text: 'improper' }, { id: 'D', text: 'properly' }],
      correctAnswer: 'A',
      explanation: 'Trước danh từ "behavior" cần một tính từ mang nghĩa tích cực: "proper behavior" (hành vi đúng đắn, chuẩn mực).'
    },
    {
      id: 'u2-q23', index: 23, sectionId: 'sec-2-3-1',
      questionText: 'It is necessary for people (23) ________ work or travel abroad to understand the rules of etiquette...',
      options: [{ id: 'A', text: 'which' }, { id: 'B', text: 'who' }, { id: 'C', text: 'whom' }, { id: 'D', text: 'whose' }],
      correctAnswer: 'B',
      explanation: 'Đại từ quan hệ "who" làm chủ ngữ thay thế cho danh từ chỉ người "people" (những người làm việc hoặc du lịch ở nước ngoài).'
    },
    {
      id: 'u2-q24', index: 24, sectionId: 'sec-2-3-1',
      questionText: 'Many cultural (24)______ can be found in such simple processes as giving or receiving a gift.',
      options: [{ id: 'A', text: 'diverse' }, { id: 'B', text: 'differently' }, { id: 'C', text: 'vary' }, { id: 'D', text: 'differences' }],
      correctAnswer: 'D',
      explanation: 'Sau tính từ "cultural" cần danh từ số nhiều làm chủ ngữ: "cultural differences" (những sự khác biệt văn hóa).'
    },
    {
      id: 'u2-q25', index: 25, sectionId: 'sec-2-3-1',
      questionText: 'When a gift is offered, the receiver usually takes the gift and expresses his or her thanks. (25)______, in some Asian countries, the act of gift-giving may appear confusing to Westerners.',
      options: [{ id: 'A', text: 'Therefore' }, { id: 'B', text: 'In contrast' }, { id: 'C', text: 'However' }, { id: 'D', text: 'Moreover' }],
      correctAnswer: 'C',
      explanation: 'Liên từ chuyển tiếp chỉ sự tương phản đối lập: "However" (Tuy nhiên, ở một số quốc gia châu Á...).'
    },
    {
      id: 'u2-q26', index: 26, sectionId: 'sec-2-3-1',
      questionText: 'In addition, to show respect (26)______ the receiver, it is common in several Asian cultures to use both hands when offering a gift...',
      options: [{ id: 'A', text: 'for' }, { id: 'B', text: 'to' }, { id: 'C', text: 'on' }, { id: 'D', text: 'with' }],
      correctAnswer: 'A',
      explanation: 'Collocation chuẩn: "show respect for somebody" (thể hiện sự tôn trọng đối với người nhận).'
    },
    {
      id: 'u2-q27', index: 27, sectionId: 'sec-2-3-2',
      questionText: '...and may need to be changed for a (27) ______ future.',
      options: [{ id: 'A', text: 'fearful' }, { id: 'B', text: 'greasy' }, { id: 'C', text: 'imperative' }, { id: 'D', text: 'sustainable' }],
      correctAnswer: 'D',
      explanation: '"sustainable future" nghĩa là một tương lai phát triển bền vững, thân thiện với môi trường sinh thái.'
    },
    {
      id: 'u2-q28', index: 28, sectionId: 'sec-2-3-2',
      questionText: '...releasing balloons or sky lanterns provides (28)_________ spectacular sight during festivals...',
      options: [{ id: 'A', text: 'a' }, { id: 'B', text: 'Ø' }, { id: 'C', text: 'the' }, { id: 'D', text: 'an' }],
      correctAnswer: 'A',
      explanation: '"a spectacular sight" (một cảnh tượng ngoạn mục); danh từ đếm được số ít, tính từ bắt đầu bằng phụ âm nên dùng "a".'
    },
    {
      id: 'u2-q29', index: 29, sectionId: 'sec-2-3-2',
      questionText: 'People often release them to bring good luck... (29) ______, the litter left behind by balloons and lanterns is hard to decompose.',
      options: [{ id: 'A', text: 'But' }, { id: 'B', text: 'However' }, { id: 'C', text: 'Therefore' }, { id: 'D', text: 'In addition' }],
      correctAnswer: 'B',
      explanation: 'Liên từ đứng đầu câu có dấu phẩy mang tính chất nhượng bộ/đối lập: "However" (Tuy nhiên, rác thải để lại rất khó phân hủy).'
    },
    {
      id: 'u2-q30', index: 30, sectionId: 'sec-2-3-2',
      questionText: '...and many animals mistake the balloons (30) ______ food.',
      options: [{ id: 'A', text: 'by' }, { id: 'B', text: 'in' }, { id: 'C', text: 'for' }, { id: 'D', text: 'with' }],
      correctAnswer: 'C',
      explanation: 'Cấu trúc: "mistake something for something" (nhầm lẫn cái gì là thức ăn).'
    },
    {
      id: 'u2-q31', index: 31, sectionId: 'sec-2-3-2',
      questionText: 'However, fireworks actually release a lot of (31) ______ chemicals into the air.',
      options: [{ id: 'A', text: 'harmed' }, { id: 'B', text: 'harmful' }, { id: 'C', text: 'harm' }, { id: 'D', text: 'harmless' }],
      correctAnswer: 'B',
      explanation: 'Cần tính từ "harmful" bổ nghĩa cho danh từ "chemicals" (các hóa chất độc hại, gây nguy hại).'
    },
    {
      id: 'u2-q32', index: 32, sectionId: 'sec-2-3-3',
      questionText: 'In which country is the 60th birthday known as Hwangap?',
      options: [{ id: 'A', text: 'India' }, { id: 'B', text: 'Mexico' }, { id: 'C', text: 'South Korea' }, { id: 'D', text: 'Japan' }],
      correctAnswer: 'C',
      explanation: 'Đoạn 2 ghi rõ: "In South Korea, the 60th birthday, known as Hwangap, is highly significant."'
    },
    {
      id: 'u2-q33', index: 33, sectionId: 'sec-2-3-3',
      questionText: 'The word “They” in paragraph 2 refers to _____.',
      options: [{ id: 'A', text: 'the family members' }, { id: 'B', text: 'the younger relatives' }, { id: 'C', text: 'the birthday person' }, { id: 'D', text: 'the guests' }],
      correctAnswer: 'C',
      explanation: 'Đoạn 2: "The birthday person shares a meal with family... They also receive blessings and good wishes." -> "They" thay thế cho "the birthday person".'
    },
    {
      id: 'u2-q34', index: 34, sectionId: 'sec-2-3-3',
      questionText: 'The word “prosperity” in the passage is closest in meaning to _____.',
      options: [{ id: 'A', text: 'wealth and success' }, { id: 'B', text: 'happiness and love' }, { id: 'C', text: 'respect and honor' }, { id: 'D', text: 'faith and belief' }],
      correctAnswer: 'A',
      explanation: '"prosperity" (sự thịnh vượng, sung túc) đồng nghĩa với "wealth and success".'
    },
    {
      id: 'u2-q35', index: 35, sectionId: 'sec-2-3-3',
      questionText: 'What can be inferred about how these countries view the elderly?',
      options: [
        { id: 'A', text: 'They consider older people less important than the young.' },
        { id: 'B', text: 'They believe the elderly deserve respect and appreciation.' },
        { id: 'C', text: 'They think the elderly should live independently.' },
        { id: 'D', text: 'They focus only on material gifts rather than emotions.' }
      ],
      correctAnswer: 'B',
      explanation: 'Đoạn cuối nhấn mạnh: "They bring families together to express gratitude, respect, and love toward parents and grandparents who have contributed greatly..."'
    },
    {
      id: 'u2-q36', index: 36, sectionId: 'sec-2-3-3',
      questionText: 'What is the main idea of the passage?',
      options: [
        { id: 'A', text: 'How different countries celebrate birthdays of all ages' },
        { id: 'B', text: 'The similarities between Indian, Mexican, and Korean food' },
        { id: 'C', text: 'The ways different cultures honour their elders on their 60th birthday' },
        { id: 'D', text: 'How religion influences birthday celebrations around the world' }
      ],
      correctAnswer: 'C',
      explanation: 'Ý chính của bài đọc: Các nền văn hóa khác nhau (Hàn Quốc, Mexico, Ấn Độ) thể hiện lòng tri ân và tôn kính người cao tuổi nhân dịp mừng thọ 60 tuổi.'
    },
    {
      id: 'u2-q37', index: 37, sectionId: 'sec-2-3-4',
      questionText: 'What would be the best title for the passage?',
      options: [
        { id: 'A', text: 'Unlucky Meanings in Chinese Gift Exchange' },
        { id: 'B', text: 'Cultural Mistakes with Gift-giving' },
        { id: 'C', text: 'Chinese Gift-Giving Etiquette' },
        { id: 'D', text: 'Gift-Giving in Chinese Parties' }
      ],
      correctAnswer: 'C',
      explanation: 'Tiêu đề bao quát trọn vẹn nội dung: Phép lịch sự và quy tắc tặng quà trong văn hóa Trung Quốc (Chinese Gift-Giving Etiquette).'
    },
    {
      id: 'u2-q38', index: 38, sectionId: 'sec-2-3-4',
      questionText: 'The word “gaffe” in paragraph 1 is closest in meaning to _________.',
      options: [{ id: 'A', text: 'root' }, { id: 'B', text: 'feature' }, { id: 'C', text: 'order' }, { id: 'D', text: 'mistake' }],
      correctAnswer: 'D',
      explanation: '"cultural gaffe" (sai sót, điều thất thố về mặt giao tiếp văn hóa) đồng nghĩa với "mistake".'
    },
    {
      id: 'u2-q39', index: 39, sectionId: 'sec-2-3-4',
      questionText: 'Why is a “watch” considered an inappropriate gift in Chinese culture?',
      options: [
        { id: 'A', text: 'because it is too expensive' },
        { id: 'B', text: 'due to its association with funerals in Chinese language' },
        { id: 'C', text: 'Chinese people prefer digital clocks' },
        { id: 'D', text: 'it is not mentioned in the passage' }
      ],
      correctAnswer: 'B',
      explanation: 'Đoạn 2: "due to \'giving a clock\' and \'attending a person’s funeral\' having the same pronunciation" (do từ tặng đồng hồ đồng âm với việc viếng tang lễ).'
    },
    {
      id: 'u2-q40', index: 40, sectionId: 'sec-2-3-4',
      questionText: 'The word “they” in paragraph 3 refers to _________.',
      options: [{ id: 'A', text: 'Chinese' }, { id: 'B', text: 'gifts' }, { id: 'C', text: 'hands' }, { id: 'D', text: 'parties' }],
      correctAnswer: 'A',
      explanation: 'Đoạn 3: "It is part of the custom for Chinese to do so as they consider themselves not worthy of the gift." -> "they" chỉ người Trung Quốc (Chinese).'
    },
    {
      id: 'u2-q41', index: 41, sectionId: 'sec-2-3-4',
      questionText: 'Which of the following is NOT true according to the passage?',
      options: [
        { id: 'A', text: 'People need to give gifts with two hands in China.' },
        { id: 'B', text: 'A business meeting can sometimes be short.' },
        { id: 'C', text: 'People in China can exchange gifts at the end of a meeting.' },
        { id: 'D', text: 'The receiving person will accept the gift right away.' }
      ],
      correctAnswer: 'D',
      explanation: 'Đoạn 3 nêu rõ: "The receiving person may decline the gift at first (or even up to three times)", nên thông tin nhận quà ngay lập tức là KHÔNG đúng.'
    },
    {
      id: 'u2-q42', index: 42, sectionId: 'sec-2-4',
      questionText: 'Mark the letter A, B, C, or D to indicate the correct arrangement of the sentences to make a meaningful paragraph:\na. Secondly, it’s a good idea that you try to cook traditional food frequently.\nb. There are two main ways to maintain your cultural identity in a new culture.\nc. Staying connected with your family and friends helps you to feel part of your native culture.\nd. You should also remember to make mealtimes special and important occasions.\ne. Firstly, keep in touch with people you know back home.',
      options: [{ id: 'A', text: 'c – a – d – e – a' }, { id: 'B', text: 'b – a – e – d – c' }, { id: 'C', text: 'b – e – d – a – c' }, { id: 'D', text: 'b – e – c – a – d' }],
      correctAnswer: 'D',
      explanation: 'Bố cục chuẩn: b (Câu chủ đề: Có 2 cách chính) ➔ e (Cách thứ nhất: Firstly, giữ liên lạc) ➔ c (Bổ trợ ý giữ liên lạc với người thân) ➔ a (Cách thứ hai: Secondly, nấu món truyền thống) ➔ d (Bổ trợ cho ý bữa ăn truyền thống). Đáp án D: b – e – c – a – d.'
    },
    {
      id: 'u2-q43', index: 43, sectionId: 'sec-2-4',
      questionText: 'Mark the letter A, B, C, or D to indicate the correct arrangement of the paragraph:\na. More than 300 students attended the fair and enjoyed Vietnamese dishes, songs and games.\nb. In my view, the day was a great success. All the attendees felt happy.\nc. There were 30 stalls where various activities were offered.\nd. Yesterday, our school organised the Spring Fair in the playground.\ne. However, it would be better if we could make Banh Chung during the night.',
      options: [{ id: 'A', text: 'd - a - c - b - e' }, { id: 'B', text: 'd - b - a - c - e' }, { id: 'C', text: 'b - d - a - e - c' }, { id: 'D', text: 'b - c - d - e - a' }],
      correctAnswer: 'A',
      explanation: 'Thứ tự tường thuật sự kiện: d (Mở đầu: Trường tổ chức hội chợ Xuân ngày hôm qua) ➔ a (Số lượng hơn 300 học sinh tham gia) ➔ c (Chi tiết có 30 gian hàng hoạt động) ➔ b (Đánh giá chung: Ngày hội thành công rực rỡ) ➔ e (Đề xuất cải thiện). Đáp án A: d - a - c - b - e.'
    },
    {
      id: 'u2-q44', index: 44, sectionId: 'sec-2-4',
      questionText: 'Mark the letter A, B, C, or D to indicate the correct arrangement of the dialogue:\na. Linda: They all sound fun. I\'ll try to join all of them if I can.\nb. Nam: I can see it on the map. It\'s an open booth and it looks huge! Visitors can play Vietnamese traditional games such as tug of war and bamboo dancing.\nc. Linda: But where\'s the Vietnamese booth?',
      options: [{ id: 'A', text: 'a - b - c' }, { id: 'B', text: 'b - c - a' }, { id: 'C', text: 'c - b - a' }, { id: 'D', text: 'a - c - b' }],
      correctAnswer: 'C',
      explanation: 'Thứ tự hội thoại: c (Linda hỏi gian hàng Việt Nam ở đâu) ➔ b (Nam chỉ trên bản đồ và giới thiệu các trò chơi truyền thống) ➔ a (Linda khen thú vị và hào hứng tham gia). Đáp án C: c - b - a.'
    },
    {
      id: 'u2-q45', index: 45, sectionId: 'sec-2-4',
      questionText: 'Mark the letter A, B, C, or D to indicate the correct arrangement of the paragraph:\na. Firstly, it’s considered impolite to point your feet at someone, especially an older person, as the feet are considered the lowest part of the body.\nb. In conclusion, these cultural taboos reflect the importance placed on harmony, respect, and maintaining social order in Vietnamese society.\nc. Additionally, raising your voice or showing anger in public is seen as breaking social harmony.\nd. In Viet Nam, respecting elders is a cultural norm that holds great significance.\ne. Lastly, discussing personal matters or asking someone’s age, salary, or marital status upon first meeting is often seen as intrusive.',
      options: [{ id: 'A', text: 'd - a - c - e - b' }, { id: 'B', text: 'c - b - e - d - a' }, { id: 'C', text: 'b - d - a - c - e' }, { id: 'D', text: 'a - d - e - c - d' }],
      correctAnswer: 'A',
      explanation: 'Thứ tự đoạn văn nghị luận: d (Câu chủ đề: Tôn trọng người cao tuổi là quy chuẩn văn hóa quan trọng) ➔ a (Quy tắc 1: Firstly, không chĩa bàn chân vào người khác) ➔ c (Quy tắc 2: Additionally, không to tiếng nơi công cộng) ➔ e (Quy tắc 3: Lastly, tránh hỏi tò mò chuyện riêng tư khi mới gặp) ➔ b (Câu kết: In conclusion, những điều cấm kỵ phản ánh sự hòa hợp xã hội). Đáp án A: d - a - c - e - b.'
    }
  ]
};

// Lưu trực tiếp vào src/data/exams.json (CHỈ CHỨA CÁC ĐỀ TỪ FOLDER EXAM)
const exams = [examUnit1, examUnit2];
const outputPath = path.join(__dirname, '..', 'src', 'data', 'exams.json');
fs.writeFileSync(outputPath, JSON.stringify(exams, null, 2), 'utf8');

console.log(`Đã xuất bản thành công ${exams.length} đề thi vào ${outputPath}`);
console.log('Danh sách đề thi hiện tại:');
exams.forEach(e => console.log(`- [${e.id}] ${e.title} (${e.totalQuestions} câu) [${e.categories.join(', ')}]`));
