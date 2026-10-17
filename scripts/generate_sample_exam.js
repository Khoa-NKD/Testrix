const fs = require('fs');
const path = require('path');

const sampleExam = {
  id: 'de-tieng-anh-12-gk1-chuan',
  title: 'Đề cương Ôn tập Giữa kỳ 1 Lớp 12 (Năm học 2026-2027) - Môn Tiếng Anh',
  description: 'Đề thi chuẩn cấu trúc Bộ GD&ĐT gồm 4 phần: Trọng âm, Ngữ pháp & Từ vựng, Đọc hiểu (Newton, Bell, Steve Jobs, Nguyễn Du) và Sắp xếp câu.',
  subject: 'Tiếng Anh',
  grade: 'Lớp 12',
  durationMinutes: 50,
  totalQuestions: 44,
  originalFileName: 'ÔN TẬP GK1 LOP 12 HOAN CHINH -GV - Copy.docx',
  status: 'ready',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  tags: ['Tiếng Anh 12', 'Giữa kỳ 1', 'Global Success', 'Reading', 'Grammar'],
  sections: [
    {
      id: 'sec-1',
      title: 'I. TRỌNG ÂM (STRESS)',
      instruction: 'Mark the letter A, B, C or D to indicate the word that differs from the other three in the position of primary stress in each of the following questions.',
      questionIndices: [1, 2, 3, 4, 5]
    },
    {
      id: 'sec-2',
      title: 'II. TỪ VỰNG & NGỮ PHÁP (VOCABULARY AND GRAMMAR)',
      instruction: 'Choose the best answer A, B, C or D to complete each sentence or find words with Opposite / Closest meaning.',
      questionIndices: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
    },
    {
      id: 'sec-3-1',
      title: 'III. ĐỌC ĐIỀN TỪ - BÀI ĐỌC 1 (READING 1)',
      instruction: 'Read the following passage and mark the letter A, B, C, or D to indicate the correct option that best fits each of the numbered blanks.',
      passageTitle: 'Isaac Newton & Albert Einstein',
      passage: 'Isaac Newton (1643-1727) and Albert Einstein (1897-1955) are regarded as two of the most important scientists of all time. They also share some similarities.\n\nBoth Einstein and Newton were described as lonely children (22) ________ lacked social skills, but had a passion for complex topics. Einstein dropped out of school at the age of 15 because he felt bored and didn\'t like the teaching style. (23) ________, Newton didn\'t excel in school, although he completed his secondary education and managed to enter Cambridge University.\n\nBoth worked in the field of physics and maths, but in different time periods and contributed to our (24) ________ of gravity. Newton was the first person to describe gravity and discover the basic laws of mechanics and motion. While Einstein agreed with some aspects of his theory, he showed that Newton was wrong about time and space, and (25) ________ a new theory of gravity. Einstein also established the foundations of modern physics.\n\nThe scientific achievements of both Newton and Einstein are impressive, and there is still a debate about who made the bigger (26) ________ to humankind.\n\n[Adapted from Global Success]',
      questionIndices: [22, 23, 24, 25, 26]
    },
    {
      id: 'sec-3-2',
      title: 'III. ĐỌC ĐIỀN TỪ - BÀI ĐỌC 2 (READING 2)',
      instruction: 'Read the following passage about Alexander Graham Bell and mark the letter A, B, C, or D to indicate the correct option.',
      passageTitle: 'Alexander Graham Bell',
      passage: 'Alexander Graham Bell was a Scottish-born scientist and inventor (31) _________ was best known for inventing the first working telephone.\n\nBell was born in Edinburgh, Scotland, on March 3, 1847. During his youth, Bell was strongly (32) _________ by his family and his environment. Bell’s hometown of Edinburgh, Scotland, was known as the “Athens of the North” for its rich culture of arts and science.\n\nBy age 16, Alexander had joined his father in his work with the deaf. In 1870, the family settled in Brantford, Ontario, Canada. There, Alexander set up a workshop to continue his study of the human voice. On July 11, 1877, Bell married Mabel Hubbard who had been deaf (33) _________ her early childhood years.\n\nOn March 10, 1876, after many years (34) _________ work, Bell perfected his most well-known invention, the telephone, and made his first telephone call. The Bell Telephone Company was organised on July 9, 1877. In 1880, Bell established the Volta Laboratory in Washington, D.C., an experimental facility devoted to (35) _________ discovery.\n\nThroughout his life, Bell continued his family’s work with the deaf. Bell died peacefully on August 2, 1922, at his home in Baddeck on Cape Breton Island, Nova Scotia, Canada.',
      questionIndices: [31, 32, 33, 34, 35]
    },
    {
      id: 'sec-3-3',
      title: 'III. ĐỌC HIỂU - BÀI ĐỌC 3 (READING 3)',
      instruction: 'Read the following passage and mark the letter A, B, C or D to indicate the correct answer to each of the questions.',
      passageTitle: 'Steve Jobs: Life and Achievements',
      passage: 'Steven Paul Jobs was born on 24 February, 1955 in San Francisco, USA. His biological parents were not married and gave him up for adoption. He was adopted by Clara and Paul Jobs. In 1971, Jobs met Steve Wozniak, who was five years older than him, but they bonded over their love of electronics. After high school, Jobs attended Reed College in Oregon, but found the classes boring and dropped out after six months.\n\nWhen Jobs was 21, he and Wozniak started Apple Computers in Jobs\' family garage with money they got by selling Jobs\' van and Wozniak\'s scientific calculator. They turned it into a workspace where they built their first computers. By making computers smaller, cheaper, and accessible to everyday users, their company became a huge success and sales quickly increased.\n\nAlthough Jobs left Apple in 1985, he returned to his post in 1997 when the company needed new ideas. He helped invent new products such as the iMac, the iBook for students, the iPod music player, and iTunes music software. In 2007, he introduced the touch-screen iPhone which changed the way phones were used. Apple products were not only designed to be cutting-edge technology, but also to be stylish and easy to use.\n\nIn addition, Jobs contributed to computer animation. In 1986, he bought a small company, which later became Pixar Animation Studios. It produced the first full-length computer-animated film Toy Story, followed by other blockbusters.\n\nIn 2003, Jobs was diagnosed with a rare form of pancreatic cancer. He fought the disease for several years, and stopped working in August, 2011. Two months later, he passed away. He had four children, three with his wife of 20 years and one from a previous relationship. On an Apple web page, a statement reads, "Apple has lost a visionary and creative genius, and the world has lost an amazing human being."\n\n[Adapted from Global Success]',
      questionIndices: [36, 37, 38, 39, 40]
    },
    {
      id: 'sec-3-4',
      title: 'III. ĐỌC HIỂU - BÀI ĐỌC 4 (READING 4)',
      instruction: 'Read the following passage about Nguyen Du and choose the best answer for each question.',
      passageTitle: 'Đại thi hào Nguyễn Du (1765 - 1820)',
      passage: 'Nguyen Du is a celebrated Vietnamese poet who wrote in Chữ Nôm, the ancient writing script of Viet Nam. His poetry is celebrated for the directness of its language and of its metaphors. Despite a number of Vietnamese poets pre-dated him, Nguyen Du is considered by many Vietnamese to be the founding-figure of Vietnamese literature. His epic poem Truyen Kieu (The Tale of Kieu), relating the brief and tragic life of a Vietnamese girl, is considered as a masterpiece.\n\nNguyen Du was born in 1765 in Tien Dien village, Nghi Xuan district, Nghe Tinh province, Viet Nam. By the age of 13, Nguyen had lost both of his parents, and for most of his teenage years he lived with his brother or with his brother-in-law.\n\nAt the age of 19, Nguyen passed the provincial examination. After that, he was appointed to the position of a military advisor in the Trinh army. After the Trinh Lords were defeated in 1786 by Nguyen Hue, Nguyen Du refused to serve in the new administration. He was arrested and held for some time before he moved back to his native village in the northern part of the country.\n\nLater, when yet another warlord, Nguyen Anh, ruled Viet Nam in 1802, Nguyen Du agreed to serve in his administration. At first, he was given his old post of military advisor but after a decade, he was promoted to an ambassador to China in 1813.\n\nWhile in China, he discovered and translated the Ming dynasty era tale “Kim Van Kieu” that would become the basis for the Tale of Kieu. He was later appointed to two more missions to Beijing, but before he could depart for the last one, he died of a long illness for which he refused treatment in 1820.\n\nNguyen Du’s father worked as a minister for the Lê dynasty, and his family did well during this time. However, Nguyen Du spent much of his life feeling guilty because he worked for a new ruler who took over, and he thought this was a betrayal of the true leaders of Viet Nam. He believed this brought dishonour to him and his family.',
      questionIndices: [41, 42, 43, 44, 45]
    },
    {
      id: 'sec-4',
      title: 'IV. KỸ NĂNG VIẾT (WRITING - SENTENCE ARRANGEMENT)',
      instruction: 'Mark the letter A, B, C, or D to indicate the correct arrangement of sentences to make a meaningful dialogue or letter.',
      questionIndices: [46, 47, 48, 49]
    }
  ],
  questions: [
    {
      id: 'eng-12-q1', index: 1, sectionId: 'sec-1',
      questionText: 'Mark the letter A, B, C or D to indicate the word that differs from the other three in the position of primary stress.',
      options: [
        { id: 'A', text: 'cancer' }, { id: 'B', text: 'attack' }, { id: 'C', text: 'disease' }, { id: 'D', text: 'defeat' }
      ],
      correctAnswer: 'A',
      explanation: 'Trọng âm từ 2 âm tiết: cancer nhấn âm 1 (/ˈkænsər/), trong khi attack (/əˈtæk/), disease (/dɪˈziːz/) và defeat (/dɪˈfiːt/) đều nhấn âm 2.'
    },
    {
      id: 'eng-12-q2', index: 2, sectionId: 'sec-1',
      questionText: 'Mark the letter A, B, C or D to indicate the word that differs from the other three in the position of primary stress.',
      options: [
        { id: 'A', text: 'impressive' }, { id: 'B', text: 'resistance' }, { id: 'C', text: 'medicine' }, { id: 'D', text: 'adoption' }
      ],
      correctAnswer: 'C',
      explanation: 'medicine nhấn âm 1 (/ˈmedsn/), các từ còn lại nhấn âm 2: impressive (/ɪmˈpresɪv/), resistance (/rɪˈzɪstəns/), adoption (/əˈdɑːpʃn/).'
    },
    {
      id: 'eng-12-q3', index: 3, sectionId: 'sec-1',
      questionText: 'Mark the letter A, B, C or D to indicate the word that differs from the other three in the position of primary stress.',
      options: [
        { id: 'A', text: 'military' }, { id: 'B', text: 'animation' }, { id: 'C', text: 'contribution' }, { id: 'D', text: 'pancreatic' }
      ],
      correctAnswer: 'A',
      explanation: 'military nhấn âm 1 (/ˈmɪləteri/), các từ còn lại có hậu tố -tion và -ic nên nhấn vào âm tiết thứ 3: animation (/ˌænɪˈmeɪʃn/), contribution (/ˌkɑːntrɪˈbjuːʃn/), pancreatic (/ˌpæŋkriˈætɪk/).'
    },
    {
      id: 'eng-12-q4', index: 4, sectionId: 'sec-1',
      questionText: 'Mark the letter A, B, C or D to indicate the word that differs from the other three in the position of primary stress.',
      options: [
        { id: 'A', text: 'invent' }, { id: 'B', text: 'resign' }, { id: 'C', text: 'childhood' }, { id: 'D', text: 'adopt' }
      ],
      correctAnswer: 'C',
      explanation: 'childhood là danh từ ghép nhấn âm 1 (/ˈtʃaɪldhʊd/), các từ còn lại là động từ 2 âm tiết nhấn âm 2: invent (/ɪnˈvent/), resign (/rɪˈzaɪn/), adopt (/əˈdɑːpt/).'
    },
    {
      id: 'eng-12-q5', index: 5, sectionId: 'sec-1',
      questionText: 'Mark the letter A, B, C or D to indicate the word that differs from the other three in the position of primary stress.',
      options: [
        { id: 'A', text: 'diagnose' }, { id: 'B', text: 'general' }, { id: 'C', text: 'autograph' }, { id: 'D', text: 'achievement' }
      ],
      correctAnswer: 'D',
      explanation: 'achievement nhấn âm 2 (/əˈtʃiːvmənt/), các từ còn lại nhấn âm 1: diagnose (/ˈdaɪəɡnoʊz/), general (/ˈdʒenrəl/), autograph (/ˈɔːtəɡræf/).'
    },
    {
      id: 'eng-12-q6', index: 6, sectionId: 'sec-2',
      questionText: 'Dang Thuy Tram ______ her duty in Quang Ngai Province when the cruel enemy _____ her.',
      options: [
        { id: 'A', text: 'was doing / killed' }, { id: 'B', text: 'did / killed' }, { id: 'C', text: 'did / was killing' }, { id: 'D', text: 'was doing / was killing' }
      ],
      correctAnswer: 'A',
      explanation: 'Hành động đang diễn ra trong quá khứ thì một hành động khác xen vào: hành động đang diễn ra chia quá khứ tiếp diễn (was doing), hành động xen vào chia quá khứ đơn (killed).'
    },
    {
      id: 'eng-12-q7', index: 7, sectionId: 'sec-2',
      questionText: 'The teacher _____________ a presentation about the resistance war to inspire her students.',
      options: [
        { id: 'A', text: 'took' }, { id: 'B', text: 'got' }, { id: 'C', text: 'gave' }, { id: 'D', text: 'told' }
      ],
      correctAnswer: 'C',
      explanation: 'Collocation chuẩn trong tiếng Anh: "give a presentation" (thực hiện một bài thuyết trình).'
    },
    {
      id: 'eng-12-q8', index: 8, sectionId: 'sec-2',
      questionText: '____________ of college was a difficult decision, but it allowed her to become one of the most respected nurses in the resistance.',
      options: [
        { id: 'A', text: 'Quitting on' }, { id: 'B', text: 'Dropping out' }, { id: 'C', text: 'Giving up on' }, { id: 'D', text: 'Walking away from' }
      ],
      correctAnswer: 'B',
      explanation: 'Cụm động từ "drop out of (college/school)" nghĩa là bỏ dở việc học hành giữa chừng.'
    },
    {
      id: 'eng-12-q9', index: 9, sectionId: 'sec-2',
      questionText: 'The resistance war was marked by innovative strategies that ____________ freedom movements worldwide.',
      options: [
        { id: 'A', text: 'inspiring' }, { id: 'B', text: 'inspiration' }, { id: 'C', text: 'inspired' }, { id: 'D', text: 'inspire' }
      ],
      correctAnswer: 'C',
      explanation: 'Đại từ quan hệ "that" thay thế cho danh từ đứng trước làm chủ ngữ, mệnh đề tường thuật sự kiện trong quá khứ nên động từ chia quá khứ đơn "inspired".'
    },
    {
      id: 'eng-12-q10', index: 10, sectionId: 'sec-2',
      questionText: 'The war film became a ____________, admired for its realistic portrayal of the resistance.',
      options: [
        { id: 'A', text: 'documentary' }, { id: 'B', text: 'blockbuster' }, { id: 'C', text: 'drama' }, { id: 'D', text: 'short film' }
      ],
      correctAnswer: 'B',
      explanation: '"blockbuster" là danh từ chỉ một bộ phim bom tấn đạt doanh thu hoặc thành công vang dội.'
    },
    {
      id: 'eng-12-q11', index: 11, sectionId: 'sec-2',
      questionText: 'Despite losing her ____________ in the war, she was adopted by a kind veteran who shared their heroic stories.',
      options: [
        { id: 'A', text: 'neighbors' }, { id: 'B', text: 'childhood friends' }, { id: 'C', text: 'relatives' }, { id: 'D', text: 'biological parents' }
      ],
      correctAnswer: 'D',
      explanation: '"biological parents" nghĩa là cha mẹ ruột (được liên kết ngữ nghĩa với vế sau "she was adopted" - được nhận nuôi).'
    },
    {
      id: 'eng-12-q12', index: 12, sectionId: 'sec-2',
      questionText: 'I _______ in the park when I _______ my old school friend.',
      options: [
        { id: 'A', text: 'jogged / saw' }, { id: 'B', text: 'was jogging / saw' }, { id: 'C', text: 'was jogging / was seeing' }, { id: 'D', text: 'jogged / was seeing' }
      ],
      correctAnswer: 'B',
      explanation: 'Cấu trúc diễn tả hành động đang diễn ra (was jogging) thì hành động khác bất chợt xảy đến (saw - động từ chỉ tri giác không chia tiếp diễn).'
    },
    {
      id: 'eng-12-q13', index: 13, sectionId: 'sec-2',
      questionText: 'We _______ a documentary about war heroes at 8.30 P.M. last Friday.',
      options: [
        { id: 'A', text: 'watched' }, { id: 'B', text: 'have watched' }, { id: 'C', text: 'were watching' }, { id: 'D', text: 'are watching' }
      ],
      correctAnswer: 'C',
      explanation: 'Có mốc thời gian cụ thể trong quá khứ ("at 8.30 P.M. last Friday") nên ta dùng thì Quá khứ tiếp diễn: were watching.'
    },
    {
      id: 'eng-12-q14', index: 14, sectionId: 'sec-2',
      questionText: 'Vo Thi Sau ________ attacks against French colonial forces, becoming a symbol of resistance and courage in Vietnam\'s struggle for independence.',
      options: [
        { id: 'A', text: 'carried out' }, { id: 'B', text: 'got over' }, { id: 'C', text: 'came across' }, { id: 'D', text: 'went on' }
      ],
      correctAnswer: 'A',
      explanation: '"carry out attacks" có nghĩa là tiến hành/thực hiện các cuộc tấn công.'
    },
    {
      id: 'eng-12-q15', index: 15, sectionId: 'sec-2',
      questionText: 'Thomas Edison\'s __________ achievement in developing the first practical electric light bulb revolutionized the way the world illuminated the night.',
      options: [
        { id: 'A', text: 'impress' }, { id: 'B', text: 'impressive' }, { id: 'C', text: 'impression' }, { id: 'D', text: 'impressively' }
      ],
      correctAnswer: 'B',
      explanation: 'Đứng trước danh từ "achievement" cần một tính từ bổ nghĩa: impressive (đầy ấn tượng, vĩ đại).'
    },
    {
      id: 'eng-12-q16', index: 16, sectionId: 'sec-2',
      questionText: 'Viet Quang _________ himself to helping the needy in his neighbourhood.',
      options: [
        { id: 'A', text: 'admired' }, { id: 'B', text: 'devoted' }, { id: 'C', text: 'diagnosed' }, { id: 'D', text: 'attended' }
      ],
      correctAnswer: 'B',
      explanation: 'Cấu trúc "devote oneself to V-ing/something": cống hiến, tận tụy hết mình cho việc gì.'
    },
    {
      id: 'eng-12-q17', index: 17, sectionId: 'sec-2',
      questionText: 'He gave us a thrilling _________ of his experiences on the battlefield.',
      options: [
        { id: 'A', text: 'rule' }, { id: 'B', text: 'biography' }, { id: 'C', text: 'account' }, { id: 'D', text: 'blockbuster' }
      ],
      correctAnswer: 'C',
      explanation: 'Cụm từ "give an account of something" mang nghĩa thuật lại, kể lại câu chuyện về một sự việc.'
    },
    {
      id: 'eng-12-q18', index: 18, sectionId: 'sec-2',
      questionText: 'Mark the letter A, B, C, or D to indicate the word OPPOSITE in meaning to the underlined word: "He has won many awards for his IMPRESSIVE achievements in science and technology."',
      options: [
        { id: 'A', text: 'great' }, { id: 'B', text: 'important' }, { id: 'C', text: 'latest' }, { id: 'D', text: 'ordinary' }
      ],
      correctAnswer: 'D',
      explanation: '"impressive" nghĩa là phi thường, ấn tượng. Từ trái nghĩa (OPPOSITE) là "ordinary" (bình thường, tầm thường).'
    },
    {
      id: 'eng-12-q19', index: 19, sectionId: 'sec-2',
      questionText: 'Mark the letter A, B, C, or D to indicate the word OPPOSITE in meaning: "The company\'s CUTTING-EDGE AI technology revolutionized the industry."',
      options: [
        { id: 'A', text: 'outdated' }, { id: 'B', text: 'obsolete' }, { id: 'C', text: 'ancient' }, { id: 'D', text: 'primitive' }
      ],
      correctAnswer: 'A',
      explanation: '"cutting-edge" mang nghĩa tối tân, tiên tiến nhất. Từ đối lập thông dụng nhất là "outdated" (lỗi thời, lạc hậu).'
    },
    {
      id: 'eng-12-q20', index: 20, sectionId: 'sec-2',
      questionText: 'Mark the letter A, B, C, or D to indicate the word CLOSEST in meaning: "My aunt and uncle are not my cousin\'s biological parents. They TOOK HIM AS THEIR OWN CHILD when he was two."',
      options: [
        { id: 'A', text: 'adopted' }, { id: 'B', text: 'adapted' }, { id: 'C', text: 'applied' }, { id: 'D', text: 'born' }
      ],
      correctAnswer: 'A',
      explanation: '"take someone as one\'s own child" có nghĩa là nhận làm con nuôi = "adopt".'
    },
    {
      id: 'eng-12-q21', index: 21, sectionId: 'sec-2',
      questionText: 'Mark the letter A, B, C, or D to indicate the word CLOSEST in meaning: "The Vietnamese RESISTANCE WAR demonstrated the incredible spirit of unity and determination among the people."',
      options: [
        { id: 'A', text: 'uprising' }, { id: 'B', text: 'liberation struggle' }, { id: 'C', text: 'rebellion' }, { id: 'D', text: 'revolution' }
      ],
      correctAnswer: 'B',
      explanation: '"resistance war" (cuộc kháng chiến vệ quốc) đồng nghĩa sát nhất với "liberation struggle" (cuộc đấu tranh giải phóng dân tộc).'
    },
    {
      id: 'eng-12-q22', index: 22, sectionId: 'sec-3-1',
      questionText: 'Reading 1 - Blank (22): Both Einstein and Newton were described as lonely children (22) ________ lacked social skills...',
      options: [
        { id: 'A', text: 'which' }, { id: 'B', text: 'who' }, { id: 'C', text: 'where' }, { id: 'D', text: 'when' }
      ],
      correctAnswer: 'B',
      explanation: 'Đại từ quan hệ thay thế cho danh từ chỉ người "lonely children" làm chủ ngữ của mệnh đề quan hệ là "who".'
    },
    {
      id: 'eng-12-q23', index: 23, sectionId: 'sec-3-1',
      questionText: 'Reading 1 - Blank (23): Einstein dropped out of school... (23) ________, Newton didn\'t excel in school, although he completed his secondary education...',
      options: [
        { id: 'A', text: 'Of course' }, { id: 'B', text: 'Similarly' }, { id: 'C', text: 'By contrast' }, { id: 'D', text: 'Nevertheless' }
      ],
      correctAnswer: 'C',
      explanation: '"By contrast" (Ngược lại / Trái lại) được dùng để so sánh sự đối lập giữa việc Einstein bỏ học còn Newton vẫn hoàn thành trung học.'
    },
    {
      id: 'eng-12-q24', index: 24, sectionId: 'sec-3-1',
      questionText: 'Reading 1 - Blank (24): ...contributed to our (24) ________ of gravity.',
      options: [
        { id: 'A', text: 'learning' }, { id: 'B', text: 'knowing' }, { id: 'C', text: 'understanding' }, { id: 'D', text: 'contrasting' }
      ],
      correctAnswer: 'C',
      explanation: 'Collocation "understanding of gravity" (sự hiểu biết của nhân loại về trọng lực).'
    },
    {
      id: 'eng-12-q25', index: 25, sectionId: 'sec-3-1',
      questionText: 'Reading 1 - Blank (25): ...and (25) ________ a new theory of gravity.',
      options: [
        { id: 'A', text: 'came up with' }, { id: 'B', text: 'come down with' }, { id: 'C', text: 'come up against' }, { id: 'D', text: 'come in for' }
      ],
      correctAnswer: 'A',
      explanation: 'Phrasal verb "come up with (a theory/idea)" nghĩa là nghĩ ra / đề xuất một lý thuyết mới. Ở quá khứ chia là "came up with".'
    },
    {
      id: 'eng-12-q26', index: 26, sectionId: 'sec-3-1',
      questionText: 'Reading 1 - Blank (26): ...who made the bigger (26) ________ to humankind.',
      options: [
        { id: 'A', text: 'contribute' }, { id: 'B', text: 'contributing' }, { id: 'C', text: 'contributed' }, { id: 'D', text: 'contribution' }
      ],
      correctAnswer: 'D',
      explanation: 'Collocation "make a contribution to": đóng góp cho điều gì. Đứng sau tính từ "bigger" cần danh từ "contribution".'
    },
    {
      id: 'eng-12-q31', index: 31, sectionId: 'sec-3-2',
      questionText: 'Reading 2 - Question 31: Alexander Graham Bell was a Scottish-born scientist and inventor (31) _________ was best known for inventing the first working telephone.',
      options: [
        { id: 'A', text: 'whom' }, { id: 'B', text: 'which' }, { id: 'C', text: 'who' }, { id: 'D', text: 'when' }
      ],
      correctAnswer: 'C',
      explanation: 'Đại từ quan hệ bổ nghĩa cho danh từ chỉ người "scientist and inventor" làm chủ ngữ là "who".'
    },
    {
      id: 'eng-12-q32', index: 32, sectionId: 'sec-3-2',
      questionText: 'Reading 2 - Question 32: During his youth, Bell was strongly (32) _________ by his family and his environment.',
      options: [
        { id: 'A', text: 'admired' }, { id: 'B', text: 'influenced' }, { id: 'C', text: 'devoted' }, { id: 'D', text: 'confused' }
      ],
      correctAnswer: 'B',
      explanation: 'Thể bị động: "be influenced by" nghĩa là chịu ảnh hưởng sâu sắc từ gia đình và môi trường sống.'
    },
    {
      id: 'eng-12-q33', index: 33, sectionId: 'sec-3-2',
      questionText: 'Reading 2 - Question 33: ...married Mabel Hubbard who had been deaf (33) _________ her early childhood years.',
      options: [
        { id: 'A', text: 'since' }, { id: 'B', text: 'because' }, { id: 'C', text: 'until' }, { id: 'D', text: 'despite' }
      ],
      correctAnswer: 'A',
      explanation: 'Thì quá khứ hoàn thành "had been deaf" đi với mốc thời gian "since her early childhood years" (kể từ những năm tháng thơ ấu).'
    },
    {
      id: 'eng-12-q34', index: 34, sectionId: 'sec-3-2',
      questionText: 'Reading 2 - Question 34: ...after many years (34) _________ work, Bell perfected his most well-known invention...',
      options: [
        { id: 'A', text: 'in' }, { id: 'B', text: 'for' }, { id: 'C', text: 'of' }, { id: 'D', text: 'to' }
      ],
      correctAnswer: 'C',
      explanation: 'Cụm giới từ: "many years of work" (nhiều năm làm việc miệt mài).'
    },
    {
      id: 'eng-12-q35', index: 35, sectionId: 'sec-3-2',
      questionText: 'Reading 2 - Question 35: ...an experimental facility devoted to (35) _________ discovery.',
      options: [
        { id: 'A', text: 'scientifically' }, { id: 'B', text: 'science' }, { id: 'C', text: 'scientist' }, { id: 'D', text: 'scientific' }
      ],
      correctAnswer: 'D',
      explanation: 'Trước danh từ "discovery" cần tính từ "scientific" bổ nghĩa (scientific discovery: phát minh mang tính khoa học).'
    },
    {
      id: 'eng-12-q36', index: 36, sectionId: 'sec-3-3',
      questionText: 'Reading 3 - Question 36: Which of the following is the best title for the passage about Steve Jobs?',
      options: [
        { id: 'A', text: 'Steve Jobs was a visionary who created life-changing technology products.' },
        { id: 'B', text: 'Steve Jobs’ career reflects his ability to innovate and revolutionize the tech industry, leading to Apple’s success.' },
        { id: 'C', text: 'Steve Jobs was a creative genius, but his poor health and death resulted in Apple losing a great talent.' },
        { id: 'D', text: 'Apple created smart tech products thanks to Jobs’ innovation, making the company highly successful.' }
      ],
      correctAnswer: 'B',
      explanation: 'Tiêu đề bao quát trọn vẹn nhất toàn bộ nội dung bài đọc từ những ngày đầu lập nghiệp trong garage, rời đi, quay lại cứu vớt và đưa Apple lên đỉnh cao công nghệ thế giới.'
    },
    {
      id: 'eng-12-q37', index: 37, sectionId: 'sec-3-3',
      questionText: 'Reading 3 - Question 37: The word "it" in paragraph 2 refers to:',
      options: [
        { id: 'A', text: 'garage' }, { id: 'B', text: 'company' }, { id: 'C', text: 'success' }, { id: 'D', text: 'electronics' }
      ],
      correctAnswer: 'A',
      explanation: 'Câu văn trước: "...in Jobs\' family garage... They turned it into a workspace...". Do đó đại từ "it" thay thế cho "garage".'
    },
    {
      id: 'eng-12-q38', index: 38, sectionId: 'sec-3-3',
      questionText: 'Reading 3 - Question 38: According to paragraph 2 and 3, which of the following is NOT true about Apple in the beginning?',
      options: [
        { id: 'A', text: 'Jobs and Wozniak started the company in Jobs\' family garage.' },
        { id: 'B', text: 'Apple created products that were easy to use and user-friendly.' },
        { id: 'C', text: 'Jobs and Wozniak had to sell personal assets to fund the company.' },
        { id: 'D', text: 'Jobs alone invented computers that were smaller, cheaper, and more accessible.' }
      ],
      correctAnswer: 'D',
      explanation: 'Phương án D không đúng vì bài viết nói rõ Jobs cùng Steve Wozniak cùng nhau phát triển ("they built their first computers"), chứ không phải chỉ một mình Jobs làm.'
    },
    {
      id: 'eng-12-q39', index: 39, sectionId: 'sec-3-3',
      questionText: 'Reading 3 - Question 39: The word "diagnosed" in paragraph 5 means:',
      options: [
        { id: 'A', text: 'detected' }, { id: 'B', text: 'treated' }, { id: 'C', text: 'searched' }, { id: 'D', text: 'monitored' }
      ],
      correctAnswer: 'A',
      explanation: '"diagnosed with an illness" có nghĩa là được bác sĩ chẩn đoán/phát hiện ra bệnh = "detected".'
    },
    {
      id: 'eng-12-q40', index: 40, sectionId: 'sec-3-3',
      questionText: 'Reading 3 - Question 40: According to the passage, what was one reason Jobs stopped working in August 2011?',
      options: [
        { id: 'A', text: 'He had completed all his work.' },
        { id: 'B', text: 'Jobs needed a break due to poor health.' },
        { id: 'C', text: 'Jobs had been battling pancreatic cancer for several years.' },
        { id: 'D', text: 'He retired after the company reached great success.' }
      ],
      correctAnswer: 'C',
      explanation: 'Trong bài nêu rõ: "He fought the disease (pancreatic cancer) for several years, and stopped working in August, 2011."'
    },
    {
      id: 'eng-12-q41', index: 41, sectionId: 'sec-3-4',
      questionText: 'Reading 4 - Question 41: Which of the following can be the best title for the passage?',
      options: [
        { id: 'A', text: 'Nguyen Du: Life and Career' },
        { id: 'B', text: 'The Tale of Kieu: A Masterpiece in Vietnamese Literature' },
        { id: 'C', text: 'Vietnamese Warlords and Their Rule' },
        { id: 'D', text: 'The Life Challenges of Nguyen Du' }
      ],
      correctAnswer: 'A',
      explanation: 'Bài đọc tóm lược toàn diện cuộc đời từ thời thơ ấu, biến cố thời cuộc, sự nghiệp làm quan và những đóng góp bất hủ của Nguyễn Du.'
    },
    {
      id: 'eng-12-q42', index: 42, sectionId: 'sec-3-4',
      questionText: 'Reading 4 - Question 42: The word “masterpiece” in paragraph 1 is closest in meaning to ____________.',
      options: [
        { id: 'A', text: 'genius' }, { id: 'B', text: 'neglect' }, { id: 'C', text: 'account' }, { id: 'D', text: 'treasure' }
      ],
      correctAnswer: 'D',
      explanation: '"masterpiece" (kiệt tác bất hủ) có ý nghĩa tương đương với "treasure" (bảo vật quý giá của nền văn học).'
    },
    {
      id: 'eng-12-q43', index: 43, sectionId: 'sec-3-4',
      questionText: 'Reading 4 - Question 43: The word “one” in paragraph 4 refers to ____________.',
      options: [
        { id: 'A', text: 'post' }, { id: 'B', text: 'mission' }, { id: 'C', text: 'tale' }, { id: 'D', text: 'ambassador' }
      ],
      correctAnswer: 'B',
      explanation: 'Câu văn: "He was later appointed to two more missions to Beijing, but before he could depart for the last one...". Đại từ "one" thay thế cho "mission".'
    },
    {
      id: 'eng-12-q44', index: 44, sectionId: 'sec-3-4',
      questionText: 'Reading 4 - Question 44: Which of the following is NOT true according to the passage?',
      options: [
        { id: 'A', text: 'Nguyen Du’s father was a military advisor in the Trinh army.' },
        { id: 'B', text: 'Nguyen Du disagreed to serve in Nguyen Hue’s administration.' },
        { id: 'C', text: 'Nguyen Du passed the provincial examination in 1784.' },
        { id: 'D', text: 'Nguyen Du died of a long illness in spite of medical treatment.' }
      ],
      correctAnswer: 'D',
      explanation: 'Phương án D sai vì bài viết nói rõ: "...he died of a long illness for which he refused treatment in 1820" (Nguyễn Du từ chối chữa trị chứ không phải bất chấp chữa trị).'
    },
    {
      id: 'eng-12-q45', index: 45, sectionId: 'sec-3-4',
      questionText: 'Reading 4 - Question 45: Which of the following can be inferred from the passage?',
      options: [
        { id: 'A', text: 'He considered himself the founding figure of Vietnamese literature.' },
        { id: 'B', text: 'He did not face any hardships after losing his parents at a young age.' },
        { id: 'C', text: 'Nguyen Du felt guilty for serving who he perceived to be a wrong ruler.' },
        { id: 'D', text: 'Nguyen Du was fully loyal to Nguyen Hue from the beginning.' }
      ],
      correctAnswer: 'C',
      explanation: 'Đoạn cuối bài đọc nói rõ: "...Nguyen Du spent much of his life feeling guilty because he worked for a new ruler who took over, and he thought this was a betrayal of the true leaders of Viet Nam."'
    },
    {
      id: 'eng-12-q46', index: 46, sectionId: 'sec-4',
      questionText: 'Writing Task 1 - Question 46: Choose the correct arrangement of sentences to make a meaningful conversation:\na. Anna: Definitely! Despite facing poverty and war, he always valued hard work and family above all.\nb. Anna: Hi John, I often think about my grandfather. He lived through so many hardships and still managed to build a good life for his family.\nc. John: His story is truly inspiring. It shows the power of perseverance and love in overcoming challenges.\nd. John: Wow, that’s incredible. He must have been a strong and determined man.',
      options: [
        { id: 'A', text: 'b - c - a - d' }, { id: 'B', text: 'b - d - a - c' }, { id: 'C', text: 'a - c - b - d' }, { id: 'D', text: 'c - a - b - d' }
      ],
      correctAnswer: 'B',
      explanation: 'Thứ tự logic: b (Anna mở đầu kể về ông) -> d (John bày tỏ sự ngưỡng mộ về sự kiên cường) -> a (Anna đồng tình và khẳng định phẩm chất của ông) -> c (John kết luận câu chuyện truyền cảm hứng).'
    },
    {
      id: 'eng-12-q47', index: 47, sectionId: 'sec-4',
      questionText: 'Writing Task 1 - Question 47: Choose the correct arrangement of sentences to make a letter:\nDear Teacher,\na. While I know he was committed to Vietnam’s independence, I would love to hear more about the challenges he faced and how he managed to stay resilient throughout.\nb. Could you share some insights into his leadership during the revolutionary period, and what values guided his actions?\nc. Recently, I’ve been reflecting on the life of President Ho Chi Minh, and I’m eager to learn more about his personal experiences.\nd. Your perspective would be really helpful as I continue to study his legacy.\ne. I trust you are doing well.\nThank you for your time,\nJohn',
      options: [
        { id: 'A', text: 'e - a - c - b - d' }, { id: 'B', text: 'e - c - a - b - d' }, { id: 'C', text: 'a - c - e - d - b' }, { id: 'D', text: 'd - e - a - c - b' }
      ],
      correctAnswer: 'B',
      explanation: 'Thứ tự thư trang trọng: e (Lời chào thăm hỏi: I trust you are doing well) -> c (Nêu lý do viết thư về Bác Hồ) -> a (Hỏi thêm về thử thách và sự kiên cường) -> b (Hỏi về phong cách lãnh đạo) -> d (Khẳng định ý kiến giáo viên rất có giá trị).'
    },
    {
      id: 'eng-12-q48', index: 48, sectionId: 'sec-4',
      questionText: 'Writing Task 1 - Question 48: Choose the correct arrangement of the dialogue:\na. Minh: What was special about his leadership?\nb. Mai: He was always close to the people, listening to and understanding their desires.\nc. Minh: President Ho Chi Minh made great contributions to the Vietnamese revolution, do you agree?\nd. Minh: His deep connection with the people was the key factor that led to the success of the revolution.\ne. Mai: Absolutely, he was the founder of the Communist Party of Vietnam and led the resistance against the French.',
      options: [
        { id: 'A', text: 'c - b - e - a - d' }, { id: 'B', text: 'd - b - e - a - c' }, { id: 'C', text: 'd - c - e - b - a' }, { id: 'D', text: 'c - e - a - b - d' }
      ],
      correctAnswer: 'D',
      explanation: 'Trật tự đối thoại: c (Minh hỏi ý kiến về đóng góp của Bác) -> e (Mai đồng tình và nêu thành tựu lập Đảng) -> a (Minh hỏi điều đặc biệt trong lãnh đạo) -> b (Mai trả lời: luôn gần gũi nhân dân) -> d (Minh đúc kết: gắn bó với nhân dân là chìa khóa thắng lợi).'
    },
    {
      id: 'eng-12-q49', index: 49, sectionId: 'sec-4',
      questionText: 'Writing Task 1 - Question 49: Choose the correct arrangement of sentences about General Vo Nguyen Giap:\na. He is widely celebrated as a national hero and one of the greatest military strategists in history.\nb. Born on August 25, 1911, in Quảng Bình Province, he initially pursued academics, studying law and politics in Hanoi and working as a teacher.\nc. General Võ Nguyên Giáp was a legendary figure in Vietnamese history.\nd. His most famous achievement was the decisive victory at the Battle of Điện Biên Phủ in 1954, which ended French colonial rule in Indochina.\ne. He later joined the revolution, becoming a founding member of the People\'s Army of Vietnam and a key military leader in the struggles against both French and American forces.',
      options: [
        { id: 'A', text: 'c - b - e - d - a' }, { id: 'B', text: 'b - c - e - a - d' }, { id: 'C', text: 'e - d - a - c - b' }, { id: 'D', text: 'a - d - e - b - c' }
      ],
      correctAnswer: 'A',
      explanation: 'Cấu trúc tiểu sử chuẩn: c (Câu chủ đề giới thiệu Đại tướng Võ Nguyên Giáp) -> b (Năm sinh và quê quán, thời trẻ đi dạy) -> e (Tham gia cách mạng thành lập Quân đội) -> d (Chiến thắng Điện Biên Phủ vang dội) -> a (Đúc kết vị thế anh hùng dân tộc và danh tướng lịch sử).'
    }
  ]
};

const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}
const examsFile = path.join(dataDir, 'exams.json');
let exams = [];
try {
  exams = JSON.parse(fs.readFileSync(examsFile, 'utf8'));
} catch (e) {
  exams = [];
}

const existingIndex = exams.findIndex(e => e.id === sampleExam.id);
if (existingIndex >= 0) {
  exams[existingIndex] = sampleExam;
} else {
  exams.unshift(sampleExam);
}

fs.writeFileSync(examsFile, JSON.stringify(exams, null, 2), 'utf8');
console.log('Successfully saved real sample exam with 44 questions and 7 sections!');
