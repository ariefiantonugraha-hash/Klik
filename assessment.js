const uiCopy = {
  en: {
    navKicker: "Assessment beta",
    navCopy: "A short self-discovery flow for parents and teens.",
    homeLink: "Back Home",
    eyebrow: "Klik beta flow",
    title: "A simple assessment that stays clear from start to finish.",
    intro:
      "Choose a profile, answer 10 short questions, and get a first look at cognitive style and personality tendencies.",
    stepProfile: "1. Profile",
    stepQuestions: "2. Questions",
    stepResult: "3. Result",
    profileEyebrow: "Choose the profile",
    profileTitle: "Start with the profile that fits this assessment best.",
    profileCopy:
      "The beta keeps it simple. Pick Child for a parent-guided view, or Teen for a self-understanding view.",
    childPill: "Child",
    childTitle: "For parents supporting a child",
    childCopy:
      "A short starting point for understanding how a child tends to learn, respond, and grow.",
    childPoint1: "Parent-friendly wording",
    childPoint2: "Support-focused result summary",
    teenPill: "Teen",
    teenTitle: "For teens exploring self-understanding",
    teenCopy:
      "A simple reflection flow for noticing strengths, learning patterns, and areas to build.",
    teenPoint1: "Direct teen-friendly wording",
    teenPoint2: "Insight for school and growth",
    profileHelper:
      "This beta includes 10 simple questions and a short result snapshot.",
    continue: "Continue",
    questionEyebrow: "Question flow",
    questionCopy:
      "Choose the answer that feels closest. There are no right or wrong answers here.",
    back: "Back",
    next: "Next",
    finish: "See Result",
    resultEyebrow: "Your Klik insight",
    resultTitle: "A first look at how this profile tends to think and respond.",
    resultCopy:
      "This early snapshot highlights a likely cognitive style and personality style, then turns them into practical support ideas.",
    resultProfileLabel: "Profile",
    resultProfileDescription:
      "A quick snapshot built for this profile's current stage.",
    cognitiveLabel: "Cognitive Style",
    personalityLabel: "Personality Style",
    whatSuggests: "What this suggests",
    strengths: "Strengths to build on",
    support: "What may need support",
    nextSteps: "Helpful next steps",
    exploreNext: "What to explore next",
    restart: "Try Another Profile",
    resultHome: "Back Home",
    profileNames: {
      child: "Child",
      teen: "Teen"
    },
    profileDescriptions: {
      child: "A parent-guided snapshot focused on support, learning, and growth.",
      teen: "A self-understanding snapshot focused on strengths, direction, and next steps."
    }
  },
  id: {
    navKicker: "Beta asesmen",
    navCopy: "Alur self-discovery singkat untuk orang tua dan remaja.",
    homeLink: "Kembali ke Home",
    eyebrow: "Alur beta Klik",
    title: "Asesmen sederhana yang tetap terasa jelas dari awal sampai akhir.",
    intro:
      "Pilih profil, jawab 10 pertanyaan singkat, lalu lihat gambaran awal tentang gaya kognitif dan kecenderungan kepribadian.",
    stepProfile: "1. Profil",
    stepQuestions: "2. Pertanyaan",
    stepResult: "3. Hasil",
    profileEyebrow: "Pilih profil",
    profileTitle: "Mulai dari profil yang paling sesuai untuk asesmen ini.",
    profileCopy:
      "Versi beta ini dibuat tetap sederhana. Pilih Child untuk sudut pandang orang tua, atau Teen untuk sudut pandang pemahaman diri.",
    childPill: "Child",
    childTitle: "Untuk orang tua yang mendampingi anak",
    childCopy:
      "Titik awal singkat untuk memahami bagaimana seorang anak cenderung belajar, merespons, dan berkembang.",
    childPoint1: "Bahasa yang ramah untuk orang tua",
    childPoint2: "Ringkasan hasil yang fokus pada dukungan",
    teenPill: "Teen",
    teenTitle: "Untuk remaja yang ingin memahami diri",
    teenCopy:
      "Alur refleksi sederhana untuk melihat kekuatan, pola belajar, dan area yang masih bisa dibangun.",
    teenPoint1: "Bahasa yang lebih langsung untuk remaja",
    teenPoint2: "Insight untuk sekolah dan perkembangan diri",
    profileHelper:
      "Beta ini berisi 10 pertanyaan sederhana dan ringkasan hasil singkat.",
    continue: "Lanjut",
    questionEyebrow: "Alur pertanyaan",
    questionCopy:
      "Pilih jawaban yang terasa paling dekat. Tidak ada jawaban benar atau salah di sini.",
    back: "Kembali",
    next: "Lanjut",
    finish: "Lihat Hasil",
    resultEyebrow: "Insight Klik kamu",
    resultTitle: "Gambaran awal tentang bagaimana profil ini cenderung berpikir dan merespons.",
    resultCopy:
      "Snapshot awal ini menyorot kemungkinan gaya kognitif dan gaya kepribadian, lalu mengubahnya menjadi ide dukungan yang praktis.",
    resultProfileLabel: "Profil",
    resultProfileDescription:
      "Snapshot singkat yang disesuaikan dengan tahap profil ini saat ini.",
    cognitiveLabel: "Cognitive Style",
    personalityLabel: "Personality Style",
    whatSuggests: "Makna awal dari hasil ini",
    strengths: "Kekuatan yang bisa dibangun",
    support: "Area yang mungkin butuh dukungan",
    nextSteps: "Langkah lanjut yang membantu",
    exploreNext: "Yang bisa dieksplor lebih lanjut",
    restart: "Coba Profil Lain",
    resultHome: "Kembali ke Home",
    profileNames: {
      child: "Child",
      teen: "Teen"
    },
    profileDescriptions: {
      child: "Snapshot dengan sudut pandang orang tua untuk melihat dukungan, belajar, dan perkembangan.",
      teen: "Snapshot pemahaman diri untuk melihat kekuatan, arah, dan langkah berikutnya."
    }
  }
};

const questionSets = {
  child: [
    {
      axis: "cognitive",
      prompt: {
        en: "When learning something new, the child usually...",
        id: "Saat mempelajari hal baru, anak biasanya..."
      },
      options: [
        { key: "reflective", label: { en: "likes time to think first", id: "lebih suka punya waktu untuk berpikir dulu" } },
        { key: "practical", label: { en: "likes to try it right away", id: "lebih suka langsung mencobanya" } },
        { key: "explorative", label: { en: "likes to explore different ways", id: "lebih suka mengeksplor beberapa cara" } }
      ]
    },
    {
      axis: "cognitive",
      prompt: {
        en: "During activities, the child often...",
        id: "Saat melakukan kegiatan, anak sering..."
      },
      options: [
        { key: "reflective", label: { en: "watches carefully before joining", id: "mengamati dengan teliti sebelum ikut terlibat" } },
        { key: "practical", label: { en: "follows the steps directly", id: "langsung mengikuti langkah yang ada" } },
        { key: "explorative", label: { en: "changes the activity in their own way", id: "mengubah aktivitas dengan caranya sendiri" } }
      ]
    },
    {
      axis: "cognitive",
      prompt: {
        en: "When facing a problem, the child usually...",
        id: "Saat menghadapi masalah, anak biasanya..."
      },
      options: [
        { key: "reflective", label: { en: "thinks quietly first", id: "berpikir tenang terlebih dahulu" } },
        { key: "practical", label: { en: "tries the most obvious solution", id: "mencoba solusi yang paling jelas dulu" } },
        { key: "explorative", label: { en: "experiments with different ideas", id: "mencoba beberapa ide yang berbeda" } }
      ]
    },
    {
      axis: "cognitive",
      prompt: {
        en: "In class or at home, the child learns best when...",
        id: "Di kelas atau di rumah, anak belajar paling baik saat..."
      },
      options: [
        { key: "reflective", label: { en: "they can think and understand slowly", id: "mereka bisa berpikir dan memahami dengan pelan" } },
        { key: "practical", label: { en: "they can practice step by step", id: "mereka bisa berlatih langkah demi langkah" } },
        { key: "explorative", label: { en: "they can explore freely and creatively", id: "mereka bisa mengeksplor dengan bebas dan kreatif" } }
      ]
    },
    {
      axis: "cognitive",
      prompt: {
        en: "When doing a task, the child tends to...",
        id: "Saat mengerjakan tugas, anak cenderung..."
      },
      options: [
        { key: "reflective", label: { en: "focus on details", id: "fokus pada detail" } },
        { key: "practical", label: { en: "focus on finishing it clearly", id: "fokus menyelesaikannya dengan jelas" } },
        { key: "explorative", label: { en: "focus on discovering something new", id: "fokus menemukan sesuatu yang baru" } }
      ]
    },
    {
      axis: "personality",
      prompt: {
        en: "Around other people, the child usually...",
        id: "Saat berada di sekitar orang lain, anak biasanya..."
      },
      options: [
        { key: "steady", label: { en: "feels comfortable with familiar people", id: "lebih nyaman dengan orang yang sudah dikenal" } },
        { key: "expressive", label: { en: "enjoys talking and interacting openly", id: "senang berbicara dan berinteraksi secara terbuka" } },
        { key: "independent", label: { en: "prefers doing things in their own way", id: "lebih suka melakukan sesuatu dengan caranya sendiri" } }
      ]
    },
    {
      axis: "personality",
      prompt: {
        en: "When asked to join a group activity, the child often...",
        id: "Saat diajak ikut kegiatan kelompok, anak sering..."
      },
      options: [
        { key: "steady", label: { en: "joins when they feel safe and ready", id: "ikut saat mereka merasa aman dan siap" } },
        { key: "expressive", label: { en: "joins with excitement", id: "langsung ikut dengan antusias" } },
        { key: "independent", label: { en: "joins but likes to stay independent", id: "ikut, tetapi tetap ingin punya ruang sendiri" } }
      ]
    },
    {
      axis: "personality",
      prompt: {
        en: "When something does not go as expected, the child usually...",
        id: "Saat sesuatu tidak berjalan sesuai harapan, anak biasanya..."
      },
      options: [
        { key: "steady", label: { en: "stays quiet and adjusts slowly", id: "diam dulu lalu menyesuaikan secara perlahan" } },
        { key: "expressive", label: { en: "expresses what they feel quickly", id: "cepat menunjukkan apa yang mereka rasakan" } },
        { key: "independent", label: { en: "tries to handle it alone first", id: "mencoba menanganinya sendiri dulu" } }
      ]
    },
    {
      axis: "personality",
      prompt: {
        en: "In daily routines, the child often...",
        id: "Dalam rutinitas sehari-hari, anak sering..."
      },
      options: [
        { key: "steady", label: { en: "likes consistency and comfort", id: "menyukai konsistensi dan rasa nyaman" } },
        { key: "expressive", label: { en: "likes expression and interaction", id: "menyukai ekspresi dan interaksi" } },
        { key: "independent", label: { en: "likes space to choose on their own", id: "menyukai ruang untuk memilih sendiri" } }
      ]
    },
    {
      axis: "personality",
      prompt: {
        en: "The child seems most confident when...",
        id: "Anak terlihat paling percaya diri saat..."
      },
      options: [
        { key: "steady", label: { en: "they feel secure and supported", id: "mereka merasa aman dan didukung" } },
        { key: "expressive", label: { en: "they can express themselves openly", id: "mereka bisa mengekspresikan diri dengan terbuka" } },
        { key: "independent", label: { en: "they can act independently", id: "mereka bisa bertindak secara mandiri" } }
      ]
    }
  ],
  teen: [
    {
      axis: "cognitive",
      prompt: {
        en: "When studying a new topic, I usually...",
        id: "Saat mempelajari topik baru, saya biasanya..."
      },
      options: [
        { key: "reflective", label: { en: "think it through before responding", id: "memikirkannya terlebih dahulu sebelum merespons" } },
        { key: "practical", label: { en: "prefer clear examples and direct application", id: "lebih suka contoh yang jelas dan langsung dipakai" } },
        { key: "explorative", label: { en: "like exploring different perspectives", id: "suka mengeksplor sudut pandang yang berbeda" } }
      ]
    },
    {
      axis: "cognitive",
      prompt: {
        en: "When solving problems, I usually...",
        id: "Saat menyelesaikan masalah, saya biasanya..."
      },
      options: [
        { key: "reflective", label: { en: "analyze before deciding", id: "menganalisis dulu sebelum memutuskan" } },
        { key: "practical", label: { en: "focus on what works practically", id: "fokus pada hal yang paling praktis dan bisa dipakai" } },
        { key: "explorative", label: { en: "try several possibilities", id: "mencoba beberapa kemungkinan" } }
      ]
    },
    {
      axis: "cognitive",
      prompt: {
        en: "In school, I learn best when...",
        id: "Di sekolah, saya belajar paling baik saat..."
      },
      options: [
        { key: "reflective", label: { en: "I have time to reflect", id: "saya punya waktu untuk merenung dan memahami" } },
        { key: "practical", label: { en: "the material is structured and useful", id: "materinya terstruktur dan terasa berguna" } },
        { key: "explorative", label: { en: "I can connect ideas creatively", id: "saya bisa menghubungkan ide dengan kreatif" } }
      ]
    },
    {
      axis: "cognitive",
      prompt: {
        en: "When doing assignments, I tend to...",
        id: "Saat mengerjakan tugas, saya cenderung..."
      },
      options: [
        { key: "reflective", label: { en: "pay attention to details", id: "memperhatikan detail" } },
        { key: "practical", label: { en: "focus on completing the task efficiently", id: "fokus menyelesaikan tugas dengan efisien" } },
        { key: "explorative", label: { en: "explore beyond the basic instructions", id: "mengeksplor lebih dari instruksi dasarnya" } }
      ]
    },
    {
      axis: "cognitive",
      prompt: {
        en: "If I do not understand something, I usually...",
        id: "Kalau saya belum memahami sesuatu, saya biasanya..."
      },
      options: [
        { key: "reflective", label: { en: "think about it quietly first", id: "memikirkannya diam-diam dulu" } },
        { key: "practical", label: { en: "look for a direct explanation", id: "mencari penjelasan yang langsung jelas" } },
        { key: "explorative", label: { en: "search different ways to understand it", id: "mencari beberapa cara untuk memahaminya" } }
      ]
    },
    {
      axis: "personality",
      prompt: {
        en: "In social situations, I usually...",
        id: "Dalam situasi sosial, saya biasanya..."
      },
      options: [
        { key: "steady", label: { en: "prefer familiar circles and steady connections", id: "lebih nyaman dengan lingkungan yang familiar dan stabil" } },
        { key: "expressive", label: { en: "enjoy open interaction and expression", id: "menikmati interaksi terbuka dan ekspresi diri" } },
        { key: "independent", label: { en: "value having my own space and independence", id: "menghargai ruang pribadi dan kemandirian" } }
      ]
    },
    {
      axis: "personality",
      prompt: {
        en: "When making decisions, I often...",
        id: "Saat mengambil keputusan, saya sering..."
      },
      options: [
        { key: "steady", label: { en: "consider what feels stable and right", id: "mempertimbangkan apa yang terasa stabil dan tepat" } },
        { key: "expressive", label: { en: "talk it out and express my thoughts", id: "membicarakannya dan mengungkapkan pikiran saya" } },
        { key: "independent", label: { en: "trust my own judgment first", id: "lebih dulu mempercayai penilaian saya sendiri" } }
      ]
    },
    {
      axis: "personality",
      prompt: {
        en: "In a team, I tend to...",
        id: "Dalam tim, saya cenderung..."
      },
      options: [
        { key: "steady", label: { en: "support and stay consistent", id: "mendukung dan menjaga konsistensi" } },
        { key: "expressive", label: { en: "contribute actively and visibly", id: "berkontribusi aktif dan terlihat" } },
        { key: "independent", label: { en: "work independently when possible", id: "bekerja mandiri jika memungkinkan" } }
      ]
    },
    {
      axis: "personality",
      prompt: {
        en: "When under pressure, I usually...",
        id: "Saat berada di bawah tekanan, saya biasanya..."
      },
      options: [
        { key: "steady", label: { en: "stay calm but may need time", id: "tetap tenang tetapi mungkin butuh waktu" } },
        { key: "expressive", label: { en: "express what I feel quickly", id: "cepat menunjukkan apa yang saya rasakan" } },
        { key: "independent", label: { en: "handle things on my own first", id: "mencoba menanganinya sendiri dulu" } }
      ]
    },
    {
      axis: "personality",
      prompt: {
        en: "I feel most motivated when...",
        id: "Saya merasa paling termotivasi saat..."
      },
      options: [
        { key: "steady", label: { en: "I feel secure and supported", id: "saya merasa aman dan didukung" } },
        { key: "expressive", label: { en: "I can express my ideas and energy", id: "saya bisa mengekspresikan ide dan energi saya" } },
        { key: "independent", label: { en: "I have freedom to choose my direction", id: "saya punya kebebasan untuk memilih arah saya" } }
      ]
    }
  ]
};

const resultProfiles = {
  cognitive: {
    reflective: {
      title: "Reflective Thinker",
      summary: {
        en: "Tends to observe carefully, process deeply, and think before acting.",
        id: "Cenderung mengamati dengan teliti, memproses lebih dalam, dan berpikir sebelum bertindak."
      },
      strengths: {
        en: ["Thoughtful and careful in how they respond", "Good attention to details others may miss"],
        id: ["Penuh pertimbangan saat merespons situasi", "Peka pada detail yang sering terlewat oleh orang lain"]
      },
      support: {
        en: ["May need support to act faster in uncertain moments", "Can benefit from gentle encouragement to speak up sooner"],
        id: ["Mungkin membutuhkan dukungan untuk bertindak lebih cepat saat situasi tidak pasti", "Bisa terbantu jika didorong dengan lembut untuk lebih cepat menyampaikan pendapat"]
      },
      next: {
        en: ["Give time to process before expecting a response", "Use calm questions that invite reflection without pressure"],
        id: ["Berikan waktu untuk memproses sebelum mengharapkan jawaban", "Gunakan pertanyaan yang tenang dan mengundang refleksi tanpa tekanan"]
      }
    },
    practical: {
      title: "Practical Builder",
      summary: {
        en: "Tends to learn best through clear steps, direct examples, and useful action.",
        id: "Cenderung belajar paling baik melalui langkah yang jelas, contoh langsung, dan tindakan yang terasa berguna."
      },
      strengths: {
        en: ["Action-oriented and grounded in what works", "Able to turn ideas into clear steps"],
        id: ["Berorientasi pada tindakan dan hal yang nyata", "Mampu mengubah ide menjadi langkah yang jelas"]
      },
      support: {
        en: ["May need support when tasks feel too abstract", "Can benefit from slowing down before jumping to solutions"],
        id: ["Mungkin butuh dukungan saat tugas terasa terlalu abstrak", "Bisa terbantu jika diajak melambat sebelum langsung mencari solusi"]
      },
      next: {
        en: ["Connect learning to real-life examples", "Break big tasks into visible steps and checkpoints"],
        id: ["Hubungkan proses belajar dengan contoh kehidupan nyata", "Pecah tugas besar menjadi langkah dan checkpoint yang terlihat"]
      }
    },
    explorative: {
      title: "Curious Explorer",
      summary: {
        en: "Tends to enjoy variety, possibilities, and discovering new ways to understand something.",
        id: "Cenderung menikmati variasi, kemungkinan baru, dan menemukan cara berbeda untuk memahami sesuatu."
      },
      strengths: {
        en: ["Curious, imaginative, and open to new ideas", "Flexible when exploring different ways forward"],
        id: ["Penuh rasa ingin tahu, imajinatif, dan terbuka pada ide baru", "Fleksibel saat mengeksplor beberapa kemungkinan"]
      },
      support: {
        en: ["May need support staying focused until the end", "Can benefit from more structure when ideas multiply"],
        id: ["Mungkin butuh dukungan untuk tetap fokus sampai akhir", "Bisa terbantu dengan struktur tambahan saat ide mulai terlalu banyak"]
      },
      next: {
        en: ["Allow room to explore, but pair it with simple structure", "Use short goals that keep creativity moving toward completion"],
        id: ["Berikan ruang untuk mengeksplor, tetapi pasangkan dengan struktur yang sederhana", "Gunakan tujuan pendek agar kreativitas tetap bergerak menuju penyelesaian"]
      }
    }
  },
  personality: {
    steady: {
      title: "Steady Supporter",
      summary: {
        en: "Tends to value comfort, trust, and stable relationships.",
        id: "Cenderung menghargai rasa nyaman, kepercayaan, dan hubungan yang stabil."
      },
      strengths: {
        en: ["Calm and dependable in daily situations", "Able to build trust over time"],
        id: ["Tenang dan dapat diandalkan dalam keseharian", "Mampu membangun kepercayaan seiring waktu"]
      },
      support: {
        en: ["May need help adapting to sudden change", "Can benefit from support expressing needs more openly"],
        id: ["Mungkin butuh bantuan untuk menyesuaikan diri pada perubahan mendadak", "Bisa terbantu untuk lebih terbuka menyampaikan kebutuhan"]
      },
      next: {
        en: ["Keep expectations clear and reassuring", "Build confidence gradually instead of all at once"],
        id: ["Jaga ekspektasi tetap jelas dan menenangkan", "Bangun rasa percaya diri secara bertahap, bukan sekaligus"]
      }
    },
    expressive: {
      title: "Open Expressor",
      summary: {
        en: "Tends to express thoughts and feelings openly and bring energy into interactions.",
        id: "Cenderung mengekspresikan pikiran dan perasaan dengan terbuka serta membawa energi dalam interaksi."
      },
      strengths: {
        en: ["Communicative and easy to read in relationships", "Brings warmth or momentum into group situations"],
        id: ["Komunikatif dan mudah dipahami dalam hubungan dengan orang lain", "Membawa kehangatan atau energi ke dalam situasi kelompok"]
      },
      support: {
        en: ["May need help slowing down before reacting", "Can benefit from stronger emotional regulation in pressure"],
        id: ["Mungkin butuh bantuan untuk melambat sebelum bereaksi", "Bisa terbantu dengan regulasi emosi yang lebih kuat saat tertekan"]
      },
      next: {
        en: ["Give room to express, then guide reflection afterward", "Pair expression with simple habits for pausing and noticing"],
        id: ["Berikan ruang untuk mengekspresikan diri, lalu arahkan ke refleksi setelahnya", "Pasangkan ekspresi dengan kebiasaan sederhana untuk berhenti sejenak dan menyadari"]
      }
    },
    independent: {
      title: "Independent Spirit",
      summary: {
        en: "Tends to value autonomy, personal choice, and doing things in their own way.",
        id: "Cenderung menghargai otonomi, pilihan pribadi, dan melakukan sesuatu dengan caranya sendiri."
      },
      strengths: {
        en: ["Self-directed and comfortable taking initiative", "Often clear about personal preferences and direction"],
        id: ["Mandiri dan nyaman mengambil inisiatif", "Sering cukup jelas tentang preferensi dan arah pribadi"]
      },
      support: {
        en: ["May need support asking for help when needed", "Can benefit from practicing collaboration without losing ownership"],
        id: ["Mungkin butuh dukungan untuk meminta bantuan saat dibutuhkan", "Bisa terbantu dengan latihan kolaborasi tanpa merasa kehilangan kendali"]
      },
      next: {
        en: ["Offer choice within clear boundaries", "Respect autonomy while keeping guidance available"],
        id: ["Berikan pilihan dalam batas yang jelas", "Hargai kemandirian sambil tetap menyediakan arahan"]
      }
    }
  }
};

const state = {
  language: "en",
  profile: null,
  step: "profile",
  questionIndex: 0,
  answers: []
};

const elements = {
  navKicker: document.getElementById("assessmentNavKicker"),
  navCopy: document.getElementById("assessmentNavCopy"),
  homeLink: document.getElementById("assessmentHomeLink"),
  eyebrow: document.getElementById("assessmentEyebrow"),
  title: document.getElementById("assessmentTitle"),
  intro: document.getElementById("assessmentIntro"),
  stepPills: document.querySelectorAll("[data-step-pill]"),
  profileEyebrow: document.getElementById("profileEyebrow"),
  profileTitle: document.getElementById("profileStepTitle"),
  profileCopy: document.getElementById("profileCopy"),
  childPill: document.getElementById("childPill"),
  childTitle: document.getElementById("childTitle"),
  childCopy: document.getElementById("childCopy"),
  childPoint1: document.getElementById("childPoint1"),
  childPoint2: document.getElementById("childPoint2"),
  teenPill: document.getElementById("teenPill"),
  teenTitle: document.getElementById("teenTitle"),
  teenCopy: document.getElementById("teenCopy"),
  teenPoint1: document.getElementById("teenPoint1"),
  teenPoint2: document.getElementById("teenPoint2"),
  profileHelper: document.getElementById("profileHelper"),
  profileContinue: document.getElementById("profileContinue"),
  questionEyebrow: document.getElementById("questionEyebrow"),
  questionCounter: document.getElementById("questionCounter"),
  questionTitle: document.getElementById("questionTitle"),
  questionCopy: document.getElementById("questionCopy"),
  questionOptions: document.getElementById("questionOptions"),
  questionBack: document.getElementById("questionBack"),
  questionNext: document.getElementById("questionNext"),
  questionTrackFill: document.getElementById("questionTrackFill"),
  resultEyebrow: document.getElementById("resultEyebrow"),
  resultTitle: document.getElementById("resultTitle"),
  resultCopy: document.getElementById("resultCopy"),
  resultProfileLabel: document.getElementById("resultProfileLabel"),
  resultProfileValue: document.getElementById("resultProfileValue"),
  resultProfileDescription: document.getElementById("resultProfileDescription"),
  resultCognitiveLabel: document.getElementById("resultCognitiveLabel"),
  resultCognitiveTitle: document.getElementById("resultCognitiveTitle"),
  resultCognitiveSummary: document.getElementById("resultCognitiveSummary"),
  resultPersonalityLabel: document.getElementById("resultPersonalityLabel"),
  resultPersonalityTitle: document.getElementById("resultPersonalityTitle"),
  resultPersonalitySummary: document.getElementById("resultPersonalitySummary"),
  whatSuggestsLabel: document.getElementById("whatSuggestsLabel"),
  resultCombinedSummary: document.getElementById("resultCombinedSummary"),
  strengthsLabel: document.getElementById("strengthsLabel"),
  resultStrengths: document.getElementById("resultStrengths"),
  supportLabel: document.getElementById("supportLabel"),
  resultSupport: document.getElementById("resultSupport"),
  nextStepsLabel: document.getElementById("nextStepsLabel"),
  resultNextSteps: document.getElementById("resultNextSteps"),
  exploreNextLabel: document.getElementById("exploreNextLabel"),
  resultTeaser: document.getElementById("resultTeaser"),
  restartAssessment: document.getElementById("restartAssessment"),
  resultHomeButton: document.getElementById("resultHomeButton"),
  profileStep: document.getElementById("profileStep"),
  questionsStep: document.getElementById("questionsStep"),
  resultStep: document.getElementById("resultStep"),
  progressFill: document.getElementById("assessmentProgressFill"),
  profileCards: document.querySelectorAll("[data-profile]"),
  languageButtons: document.querySelectorAll("[data-language]"),
  navToggle: document.getElementById("assessmentNavToggle"),
  navPanel: document.getElementById("assessmentNavPanel")
};

function getQuestions() {
  return questionSets[state.profile] || [];
}

function fillList(target, items) {
  target.innerHTML = "";

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    target.appendChild(li);
  });
}

function combineItems(cognitiveItems, personalityItems) {
  return [...cognitiveItems, ...personalityItems];
}

function renderStaticCopy() {
  const copy = uiCopy[state.language];

  elements.navKicker.textContent = copy.navKicker;
  elements.navCopy.textContent = copy.navCopy;
  elements.homeLink.textContent = copy.homeLink;
  elements.eyebrow.textContent = copy.eyebrow;
  elements.title.textContent = copy.title;
  elements.intro.textContent = copy.intro;
  elements.stepPills[0].textContent = copy.stepProfile;
  elements.stepPills[1].textContent = copy.stepQuestions;
  elements.stepPills[2].textContent = copy.stepResult;
  elements.profileEyebrow.textContent = copy.profileEyebrow;
  elements.profileTitle.textContent = copy.profileTitle;
  elements.profileCopy.textContent = copy.profileCopy;
  elements.childPill.textContent = copy.childPill;
  elements.childTitle.textContent = copy.childTitle;
  elements.childCopy.textContent = copy.childCopy;
  elements.childPoint1.textContent = copy.childPoint1;
  elements.childPoint2.textContent = copy.childPoint2;
  elements.teenPill.textContent = copy.teenPill;
  elements.teenTitle.textContent = copy.teenTitle;
  elements.teenCopy.textContent = copy.teenCopy;
  elements.teenPoint1.textContent = copy.teenPoint1;
  elements.teenPoint2.textContent = copy.teenPoint2;
  elements.profileHelper.textContent = copy.profileHelper;
  elements.profileContinue.textContent = copy.continue;
  elements.questionEyebrow.textContent = copy.questionEyebrow;
  elements.questionCopy.textContent = copy.questionCopy;
  elements.questionBack.textContent = copy.back;
  elements.resultEyebrow.textContent = copy.resultEyebrow;
  elements.resultTitle.textContent = copy.resultTitle;
  elements.resultCopy.textContent = copy.resultCopy;
  elements.resultProfileLabel.textContent = copy.resultProfileLabel;
  elements.resultProfileDescription.textContent = copy.resultProfileDescription;
  elements.resultCognitiveLabel.textContent = copy.cognitiveLabel;
  elements.resultPersonalityLabel.textContent = copy.personalityLabel;
  elements.whatSuggestsLabel.textContent = copy.whatSuggests;
  elements.strengthsLabel.textContent = copy.strengths;
  elements.supportLabel.textContent = copy.support;
  elements.nextStepsLabel.textContent = copy.nextSteps;
  elements.exploreNextLabel.textContent = copy.exploreNext;
  elements.restartAssessment.textContent = copy.restart;
  elements.resultHomeButton.textContent = copy.resultHome;
}

function renderStepPills() {
  elements.stepPills.forEach((pill) => {
    pill.classList.toggle("is-active", pill.dataset.stepPill === state.step);
  });

  const progressMap = { profile: 33, questions: 66, result: 100 };
  elements.progressFill.style.width = `${progressMap[state.step]}%`;
}

function showStep(step) {
  state.step = step;

  const steps = {
    profile: elements.profileStep,
    questions: elements.questionsStep,
    result: elements.resultStep
  };

  Object.entries(steps).forEach(([key, element]) => {
    const active = key === step;
    element.hidden = !active;
    element.classList.toggle("is-active", active);
  });

  renderStepPills();
}

function renderProfileCards() {
  elements.profileCards.forEach((card) => {
    const selected = card.dataset.profile === state.profile;
    card.classList.toggle("is-selected", selected);
    card.setAttribute("aria-pressed", String(selected));
  });

  elements.profileContinue.disabled = !state.profile;
}

function renderQuestionStep() {
  if (!state.profile) {
    return;
  }

  const copy = uiCopy[state.language];
  const questions = getQuestions();
  const question = questions[state.questionIndex];
  const selectedAnswer = state.answers[state.questionIndex];
  const isLastQuestion = state.questionIndex === questions.length - 1;

  elements.questionCounter.textContent =
    state.language === "en"
      ? `Question ${state.questionIndex + 1} of ${questions.length}`
      : `Pertanyaan ${state.questionIndex + 1} dari ${questions.length}`;

  elements.questionTitle.textContent = question.prompt[state.language];
  elements.questionCopy.textContent =
    state.language === "en"
      ? state.profile === "child"
        ? "Choose the answer that feels closest to the child. There are no right or wrong answers here."
        : "Choose the answer that feels closest to you. There are no right or wrong answers here."
      : state.profile === "child"
        ? "Pilih jawaban yang terasa paling dekat dengan anak. Tidak ada jawaban benar atau salah di sini."
        : "Pilih jawaban yang terasa paling dekat dengan dirimu. Tidak ada jawaban benar atau salah di sini.";
  elements.questionNext.textContent = isLastQuestion ? copy.finish : copy.next;
  elements.questionNext.disabled = typeof selectedAnswer !== "number";
  elements.questionTrackFill.style.width = `${((state.questionIndex + 1) / questions.length) * 100}%`;

  elements.questionOptions.innerHTML = "";

  question.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "question-option";
    button.textContent = option.label[state.language];
    button.classList.toggle("is-selected", optionIndex === selectedAnswer);
    button.addEventListener("click", () => {
      state.answers[state.questionIndex] = optionIndex;
      renderQuestionStep();
    });
    elements.questionOptions.appendChild(button);
  });
}

function pickTopStyle(counts, questions, answers) {
  let topKey = null;
  let topScore = -1;

  Object.entries(counts).forEach(([key, value]) => {
    if (value > topScore) {
      topKey = key;
      topScore = value;
    }
  });

  const tiedKeys = Object.entries(counts)
    .filter(([, value]) => value === topScore)
    .map(([key]) => key);

  if (tiedKeys.length === 1) {
    return topKey;
  }

  for (let index = answers.length - 1; index >= 0; index -= 1) {
    const answerIndex = answers[index];
    if (typeof answerIndex !== "number") {
      continue;
    }

    const key = questions[index].options[answerIndex].key;
    if (tiedKeys.includes(key)) {
      return key;
    }
  }

  return tiedKeys[0];
}

function getResult() {
  const questions = getQuestions();
  const cognitiveCounts = { reflective: 0, practical: 0, explorative: 0 };
  const personalityCounts = { steady: 0, expressive: 0, independent: 0 };

  questions.forEach((question, index) => {
    const answerIndex = state.answers[index];
    if (typeof answerIndex !== "number") {
      return;
    }

    const key = question.options[answerIndex].key;
    if (question.axis === "cognitive") {
      cognitiveCounts[key] += 1;
    } else {
      personalityCounts[key] += 1;
    }
  });

  const cognitiveKey = pickTopStyle(cognitiveCounts, questions.slice(0, 5), state.answers.slice(0, 5));
  const personalityKey = pickTopStyle(personalityCounts, questions.slice(5), state.answers.slice(5));

  return {
    cognitive: resultProfiles.cognitive[cognitiveKey],
    personality: resultProfiles.personality[personalityKey]
  };
}

function renderResultStep() {
  const copy = uiCopy[state.language];
  const result = getResult();
  const profileName = copy.profileNames[state.profile];

  elements.resultProfileValue.textContent = profileName;
  elements.resultProfileDescription.textContent = copy.profileDescriptions[state.profile];
  elements.resultCognitiveTitle.textContent = result.cognitive.title;
  elements.resultCognitiveSummary.textContent = result.cognitive.summary[state.language];
  elements.resultPersonalityTitle.textContent = result.personality.title;
  elements.resultPersonalitySummary.textContent = result.personality.summary[state.language];

  elements.resultTitle.textContent =
    state.language === "en"
      ? state.profile === "child"
        ? "A first look at how this child may tend to think and respond."
        : "A first look at how you may tend to think and respond."
      : state.profile === "child"
        ? "Gambaran awal tentang bagaimana anak ini mungkin cenderung berpikir dan merespons."
        : "Gambaran awal tentang bagaimana kamu mungkin cenderung berpikir dan merespons.";

  elements.resultCopy.textContent =
    state.language === "en"
      ? state.profile === "child"
        ? "This early snapshot helps parents notice a likely cognitive style and personality style, then turn them into practical support ideas."
        : "This early snapshot helps teens notice a likely cognitive style and personality style, then turn them into practical next-step ideas."
      : state.profile === "child"
        ? "Snapshot awal ini membantu orang tua melihat kemungkinan gaya kognitif dan gaya kepribadian anak, lalu mengubahnya menjadi ide dukungan yang praktis."
        : "Snapshot awal ini membantu remaja melihat kemungkinan gaya kognitif dan gaya kepribadian, lalu mengubahnya menjadi ide langkah lanjut yang praktis.";

  elements.resultCombinedSummary.textContent =
    state.language === "en"
      ? state.profile === "child"
        ? `This child result suggests a ${result.cognitive.title} tendency paired with a ${result.personality.title} style. Support will usually work best when it matches both how the child processes and how the child relates.`
        : `Your result suggests a ${result.cognitive.title} tendency paired with a ${result.personality.title} style. Growth will usually feel more useful when support matches both how you process and how you relate.`
      : state.profile === "child"
        ? `Hasil anak ini menunjukkan kecenderungan ${result.cognitive.title} yang berpadu dengan gaya ${result.personality.title}. Dukungan biasanya akan terasa paling membantu jika selaras dengan cara anak memproses dan cara anak berhubungan.`
        : `Hasilmu menunjukkan kecenderungan ${result.cognitive.title} yang berpadu dengan gaya ${result.personality.title}. Proses berkembang biasanya akan terasa lebih membantu jika dukungannya selaras dengan cara kamu memproses dan cara kamu berhubungan.`;

  fillList(elements.resultStrengths, combineItems(result.cognitive.strengths[state.language], result.personality.strengths[state.language]));
  fillList(elements.resultSupport, combineItems(result.cognitive.support[state.language], result.personality.support[state.language]));
  fillList(elements.resultNextSteps, combineItems(result.cognitive.next[state.language], result.personality.next[state.language]));

  elements.resultTeaser.textContent =
    state.language === "en"
      ? state.profile === "child"
        ? "This is an early snapshot. A fuller assessment can later help parents explore learning patterns, confidence, motivation, and support strategies in more detail."
        : "This is an early snapshot. A fuller assessment can later help teens explore learning direction, motivation patterns, confidence, and more detailed growth strategies."
      : state.profile === "child"
        ? "Ini masih snapshot awal. Asesmen yang lebih lengkap nanti bisa membantu orang tua melihat pola belajar, rasa percaya diri, motivasi, dan strategi dukungan dengan lebih detail."
        : "Ini masih snapshot awal. Asesmen yang lebih lengkap nanti bisa membantu remaja melihat arah belajar, pola motivasi, rasa percaya diri, dan strategi pengembangan diri dengan lebih detail.";
}

function renderState() {
  renderProfileCards();

  if (state.step === "questions") {
    renderQuestionStep();
  }

  if (state.step === "result") {
    renderResultStep();
  }

  renderStepPills();
}

function setLanguage(language) {
  state.language = language;
  document.documentElement.lang = language;

  elements.languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.language === language);
  });

  renderStaticCopy();
  renderState();
}

elements.profileCards.forEach((card) => {
  card.addEventListener("click", () => {
    state.profile = card.dataset.profile;
    state.questionIndex = 0;
    state.answers = [];
    renderProfileCards();
  });
});

elements.profileContinue.addEventListener("click", () => {
  if (!state.profile) {
    return;
  }

  showStep("questions");
  renderQuestionStep();
});

elements.questionBack.addEventListener("click", () => {
  if (state.questionIndex === 0) {
    showStep("profile");
    renderState();
    return;
  }

  state.questionIndex -= 1;
  renderQuestionStep();
});

elements.questionNext.addEventListener("click", () => {
  const questions = getQuestions();
  const isLastQuestion = state.questionIndex === questions.length - 1;

  if (!isLastQuestion) {
    state.questionIndex += 1;
    renderQuestionStep();
    return;
  }

  showStep("result");
  renderResultStep();
});

elements.restartAssessment.addEventListener("click", () => {
  state.profile = null;
  state.questionIndex = 0;
  state.answers = [];
  showStep("profile");
  renderStaticCopy();
  renderState();
});

elements.languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.language);
  });
});

if (elements.navToggle && elements.navPanel) {
  elements.navToggle.addEventListener("click", () => {
    const isOpen = elements.navToggle.getAttribute("aria-expanded") === "true";
    elements.navToggle.setAttribute("aria-expanded", String(!isOpen));
    elements.navPanel.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  elements.navPanel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      elements.navToggle.setAttribute("aria-expanded", "false");
      elements.navPanel.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    });
  });
}

setLanguage("en");
showStep("profile");
