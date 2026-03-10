const AGE_MIN = 6;
const AGE_MAX = 17;
const TEST_DURATION_SECONDS = 60;

const uiCopy = {
  en: {
    navHome: "Home",
    introKicker: "Arithmetic fluency snapshot",
    introTitle: "A 1-minute arithmetic fluency snapshot.",
    introCopy:
      "This early snapshot looks at how easily a child or teen handles basic arithmetic under short time pressure. It is designed as a prescreening tool, not a diagnosis.",
    introPoint1: "Age range: 6 to 17",
    introPoint2: "One answer at a time",
    introPoint3: "60 seconds total",
    introPoint4: "Score reflects both speed and accuracy",
    previewLabel: "What the result will show",
    previewItem1Title: "Correct answers",
    previewItem1Copy: "How many problems were answered correctly in 1 minute",
    previewItem2Title: "Accuracy",
    previewItem2Copy: "How carefully the answers matched the correct result",
    previewItem3Title: "Difficulty reached",
    previewItem3Copy: "The highest stable arithmetic level reached during the test",
    ageLabel: "Enter age",
    ageContinue: "Continue",
    ageHint: "This version is currently designed for ages 6 to 17.",
    ageError: "Please enter a valid age between 6 and 17.",
    readyKicker: "Ready to begin",
    readyTitle: "You will answer as many arithmetic questions as you can in 60 seconds.",
    readyAgeLabel: "Age",
    readyInputLabel: "Input",
    readyInputValue: "Numbers only",
    readyTimeLabel: "Time",
    readyTimeValue: "60 seconds",
    readyCopy:
      "Work at a steady pace. Try to answer accurately, but keep moving. If learning concerns are significant, use this only as an early snapshot and consider a fuller evaluation later.",
    back: "Back",
    startTest: "Start 1-minute test",
    time: "Time",
    correct: "Correct",
    attempted: "Attempted",
    level: "Level",
    statusLine: (age, band) => `Age ${age} | Band ${band} | 60 seconds`,
    answerPlaceholder: "Type answer",
    submit: "Submit",
    testHelper: "Use the number keyboard. Press Enter or tap Submit to move to the next question.",
    resultKicker: "Result snapshot",
    resultTitle: "A first look at current arithmetic fluency.",
    resultSummary: (age) =>
      `This result reflects a short 1-minute arithmetic prescreening for age ${age}. It combines speed, accuracy, and difficulty reached, and should be read as an early snapshot rather than a diagnosis.`,
    resultCorrectLabel: "Correct",
    resultAttemptedLabel: "Attempted",
    resultAccuracyLabel: "Accuracy",
    resultLevelLabel: "Highest level",
    resultInterpretationLabel: "Interpretation",
    resultNextLabel: "Next step",
    referral:
      "If daily numeracy feels consistently difficult, or if you want a deeper learning picture, consider consulting a psychologist, educational psychologist, or learning specialist near your location.",
    retry: "Try again",
    backHome: "Back home",
    labels: {
      strong: "Strong fluency",
      steady: "Steady fluency",
      developing: "Developing fluency",
      building: "Building fluency"
    },
    interpretations: {
      strong:
        "The current result suggests arithmetic fluency is relatively strong for this age range in a short speeded setting.",
      steady:
        "The current result suggests arithmetic fluency is fairly steady for this age range, with a workable balance between speed and accuracy.",
      developing:
        "The current result suggests arithmetic fluency is developing, but accuracy or speed may still fluctuate under time pressure.",
      building:
        "The current result suggests arithmetic fluency is still building for this age range, especially in a timed setting."
    },
    nextSteps: {
      strong:
        "Continue with more complex mental arithmetic or mixed-operation practice while keeping accuracy stable.",
      steady: "Build consistency by practicing slightly harder items without rushing too early.",
      developing: "Use short daily drills with one operation at a time before increasing speed demand.",
      building: "Focus first on accurate, low-pressure practice before using speeded tasks more often."
    }
  },
  id: {
    navHome: "Home",
    introKicker: "Snapshot kefasihan aritmatika",
    introTitle: "Snapshot 1 menit untuk melihat kefasihan aritmatika.",
    introCopy:
      "Snapshot awal ini melihat seberapa mudah anak atau remaja menangani aritmatika dasar dalam tekanan waktu singkat. Ini dirancang sebagai alat prescreening, bukan diagnosis.",
    introPoint1: "Rentang usia: 6 sampai 17 tahun",
    introPoint2: "Satu jawaban setiap kali",
    introPoint3: "Total 60 detik",
    introPoint4: "Skor melihat kecepatan dan ketepatan",
    previewLabel: "Yang akan terlihat di hasil",
    previewItem1Title: "Jawaban benar",
    previewItem1Copy: "Berapa banyak soal yang dijawab benar dalam 1 menit",
    previewItem2Title: "Akurasi",
    previewItem2Copy: "Seberapa tepat jawaban yang diberikan dibanding hasil benar",
    previewItem3Title: "Level kesulitan",
    previewItem3Copy: "Level aritmatika stabil tertinggi yang berhasil dicapai selama tes",
    ageLabel: "Masukkan usia",
    ageContinue: "Lanjut",
    ageHint: "Versi ini saat ini dirancang untuk usia 6 sampai 17 tahun.",
    ageError: "Masukkan usia yang valid antara 6 sampai 17 tahun.",
    readyKicker: "Siap memulai",
    readyTitle: "Kamu akan menjawab sebanyak mungkin soal aritmatika dalam 60 detik.",
    readyAgeLabel: "Usia",
    readyInputLabel: "Input",
    readyInputValue: "Angka saja",
    readyTimeLabel: "Waktu",
    readyTimeValue: "60 detik",
    readyCopy:
      "Kerjakan dengan ritme yang stabil. Usahakan tetap akurat, tetapi terus bergerak. Jika ada kekhawatiran belajar yang bermakna, gunakan ini hanya sebagai snapshot awal dan pertimbangkan evaluasi yang lebih lengkap.",
    back: "Kembali",
    startTest: "Mulai tes 1 menit",
    time: "Waktu",
    correct: "Benar",
    attempted: "Dijawab",
    level: "Level",
    statusLine: (age, band) => `Usia ${age} | Band ${band} | 60 detik`,
    answerPlaceholder: "Ketik jawaban",
    submit: "Kirim",
    testHelper: "Gunakan keyboard angka. Tekan Enter atau tap Kirim untuk lanjut ke soal berikutnya.",
    resultKicker: "Snapshot hasil",
    resultTitle: "Gambaran awal kefasihan aritmatika saat ini.",
    resultSummary: (age) =>
      `Hasil ini mencerminkan prescreening aritmatika 1 menit untuk usia ${age}. Hasil menggabungkan kecepatan, akurasi, dan level kesulitan yang dicapai, dan sebaiknya dibaca sebagai snapshot awal, bukan diagnosis.`,
    resultCorrectLabel: "Benar",
    resultAttemptedLabel: "Dijawab",
    resultAccuracyLabel: "Akurasi",
    resultLevelLabel: "Level tertinggi",
    resultInterpretationLabel: "Interpretasi",
    resultNextLabel: "Langkah berikutnya",
    referral:
      "Jika kemampuan numerasi sehari-hari terasa konsisten sulit, atau jika kamu ingin gambaran belajar yang lebih dalam, pertimbangkan berkonsultasi dengan psikolog, psikolog pendidikan, atau spesialis belajar di area terdekat.",
    retry: "Coba lagi",
    backHome: "Kembali ke home",
    labels: {
      strong: "Kefasihan kuat",
      steady: "Kefasihan cukup stabil",
      developing: "Kefasihan berkembang",
      building: "Kefasihan masih dibangun"
    },
    interpretations: {
      strong:
        "Hasil saat ini menunjukkan kefasihan aritmatika yang relatif kuat untuk rentang usia ini dalam situasi tes singkat yang berbatas waktu.",
      steady:
        "Hasil saat ini menunjukkan kefasihan aritmatika yang cukup stabil untuk rentang usia ini, dengan keseimbangan yang cukup baik antara kecepatan dan akurasi.",
      developing:
        "Hasil saat ini menunjukkan kefasihan aritmatika yang sedang berkembang, tetapi akurasi atau kecepatan masih bisa berubah saat ada tekanan waktu.",
      building:
        "Hasil saat ini menunjukkan kefasihan aritmatika masih sedang dibangun untuk rentang usia ini, terutama dalam situasi berbatas waktu."
    },
    nextSteps: {
      strong:
        "Lanjutkan dengan latihan hitung mental yang lebih kompleks atau operasi campuran sambil menjaga akurasi tetap stabil.",
      steady: "Bangun konsistensi dengan berlatih soal yang sedikit lebih sulit tanpa terburu-buru terlalu cepat.",
      developing: "Gunakan latihan harian singkat dengan satu jenis operasi setiap kali sebelum menaikkan tuntutan kecepatan.",
      building: "Fokus dulu pada latihan yang akurat dan tidak menekan sebelum lebih sering memakai tugas yang berbatas waktu."
    }
  }
};

const elements = {
  introKicker: document.getElementById("introKicker"),
  introTitle: document.getElementById("introTitle"),
  introCopy: document.getElementById("introCopy"),
  introPoint1: document.getElementById("introPoint1"),
  introPoint2: document.getElementById("introPoint2"),
  introPoint3: document.getElementById("introPoint3"),
  introPoint4: document.getElementById("introPoint4"),
  previewLabel: document.getElementById("previewLabel"),
  previewItem1Title: document.getElementById("previewItem1Title"),
  previewItem1Copy: document.getElementById("previewItem1Copy"),
  previewItem2Title: document.getElementById("previewItem2Title"),
  previewItem2Copy: document.getElementById("previewItem2Copy"),
  previewItem3Title: document.getElementById("previewItem3Title"),
  previewItem3Copy: document.getElementById("previewItem3Copy"),
  ageLabel: document.getElementById("ageLabel"),
  introStage: document.getElementById("introStage"),
  readyStage: document.getElementById("readyStage"),
  testStage: document.getElementById("testStage"),
  resultStage: document.getElementById("resultStage"),
  ageForm: document.getElementById("ageForm"),
  ageInput: document.getElementById("ageInput"),
  ageHint: document.getElementById("ageHint"),
  ageContinueButton: document.getElementById("ageContinueButton"),
  readyKicker: document.getElementById("readyKicker"),
  readyTitle: document.getElementById("readyTitle"),
  readyAgeValue: document.getElementById("readyAgeValue"),
  readyAgeLabel: document.getElementById("readyAgeLabel"),
  readyInputLabel: document.getElementById("readyInputLabel"),
  readyInputValue: document.getElementById("readyInputValue"),
  readyTimeLabel: document.getElementById("readyTimeLabel"),
  readyTimeValue: document.getElementById("readyTimeValue"),
  readyCopy: document.getElementById("readyCopy"),
  backToIntro: document.getElementById("backToIntro"),
  startTestButton: document.getElementById("startTestButton"),
  timeLabel: document.getElementById("timeLabel"),
  timeValue: document.getElementById("timeValue"),
  correctLabel: document.getElementById("correctLabel"),
  correctValue: document.getElementById("correctValue"),
  attemptedLabel: document.getElementById("attemptedLabel"),
  attemptedValue: document.getElementById("attemptedValue"),
  levelLabel: document.getElementById("levelLabel"),
  levelValue: document.getElementById("levelValue"),
  testStatusLine: document.getElementById("testStatusLine"),
  problemPrompt: document.getElementById("problemPrompt"),
  answerForm: document.getElementById("answerForm"),
  answerInput: document.getElementById("answerInput"),
  submitAnswerButton: document.getElementById("submitAnswerButton"),
  testHelper: document.getElementById("testHelper"),
  resultKicker: document.getElementById("resultKicker"),
  resultTitle: document.getElementById("resultTitle"),
  resultCorrect: document.getElementById("resultCorrect"),
  resultCorrectLabel: document.getElementById("resultCorrectLabel"),
  resultAttempted: document.getElementById("resultAttempted"),
  resultAttemptedLabel: document.getElementById("resultAttemptedLabel"),
  resultAccuracy: document.getElementById("resultAccuracy"),
  resultAccuracyLabel: document.getElementById("resultAccuracyLabel"),
  resultLevel: document.getElementById("resultLevel"),
  resultLevelLabel: document.getElementById("resultLevelLabel"),
  resultSummary: document.getElementById("resultSummary"),
  resultInterpretationLabel: document.getElementById("resultInterpretationLabel"),
  resultBandLabel: document.getElementById("resultBandLabel"),
  resultInterpretation: document.getElementById("resultInterpretation"),
  resultNextLabel: document.getElementById("resultNextLabel"),
  resultNextStep: document.getElementById("resultNextStep"),
  resultReferralNote: document.getElementById("resultReferralNote"),
  retryButton: document.getElementById("retryButton"),
  resultHomeButton: document.getElementById("resultHomeButton"),
  languageSwitchers: document.querySelectorAll(".language-switcher"),
  languageTriggers: document.querySelectorAll("[data-language-trigger]"),
  languageCurrentLabels: document.querySelectorAll("[data-language-current]"),
  languageButtons: document.querySelectorAll("[data-language]")
};

const bandConfig = {
  "6-8": { minAge: 6, maxAge: 8, startLevel: 1, maxLevel: 4 },
  "9-11": { minAge: 9, maxAge: 11, startLevel: 2, maxLevel: 6 },
  "12-14": { minAge: 12, maxAge: 14, startLevel: 3, maxLevel: 6 },
  "15-17": { minAge: 15, maxAge: 17, startLevel: 3, maxLevel: 6 }
};

const state = {
  language: "en",
  age: null,
  band: null,
  currentLevel: 1,
  maxLevel: 4,
  correctCount: 0,
  attemptedCount: 0,
  correctStreak: 0,
  wrongStreak: 0,
  highestLevelReached: 1,
  items: [],
  currentProblem: null,
  questionStartedAt: 0,
  timeRemainingMs: TEST_DURATION_SECONDS * 1000,
  timerId: null
};

function closeLanguageMenus() {
  elements.languageSwitchers.forEach((switcher) => {
    switcher.classList.remove("is-open");
  });

  elements.languageTriggers.forEach((trigger) => {
    trigger.setAttribute("aria-expanded", "false");
  });
}

function renderStaticCopy() {
  const copy = uiCopy[state.language];

  elements.introKicker.textContent = copy.introKicker;
  elements.introTitle.textContent = copy.introTitle;
  elements.introCopy.textContent = copy.introCopy;
  elements.introPoint1.textContent = copy.introPoint1;
  elements.introPoint2.textContent = copy.introPoint2;
  elements.introPoint3.textContent = copy.introPoint3;
  elements.introPoint4.textContent = copy.introPoint4;
  elements.previewLabel.textContent = copy.previewLabel;
  elements.previewItem1Title.textContent = copy.previewItem1Title;
  elements.previewItem1Copy.textContent = copy.previewItem1Copy;
  elements.previewItem2Title.textContent = copy.previewItem2Title;
  elements.previewItem2Copy.textContent = copy.previewItem2Copy;
  elements.previewItem3Title.textContent = copy.previewItem3Title;
  elements.previewItem3Copy.textContent = copy.previewItem3Copy;
  elements.ageLabel.textContent = copy.ageLabel;
  elements.ageContinueButton.textContent = copy.ageContinue;
  elements.readyKicker.textContent = copy.readyKicker;
  elements.readyTitle.textContent = copy.readyTitle;
  elements.readyAgeLabel.textContent = copy.readyAgeLabel;
  elements.readyInputLabel.textContent = copy.readyInputLabel;
  elements.readyInputValue.textContent = copy.readyInputValue;
  elements.readyTimeLabel.textContent = copy.readyTimeLabel;
  elements.readyTimeValue.textContent = copy.readyTimeValue;
  elements.readyCopy.textContent = copy.readyCopy;
  elements.backToIntro.textContent = copy.back;
  elements.startTestButton.textContent = copy.startTest;
  elements.timeLabel.textContent = copy.time;
  elements.correctLabel.textContent = copy.correct;
  elements.attemptedLabel.textContent = copy.attempted;
  elements.levelLabel.textContent = copy.level;
  elements.answerInput.placeholder = copy.answerPlaceholder;
  elements.submitAnswerButton.textContent = copy.submit;
  elements.testHelper.textContent = copy.testHelper;
  elements.resultKicker.textContent = copy.resultKicker;
  elements.resultTitle.textContent = copy.resultTitle;
  elements.resultCorrectLabel.textContent = copy.resultCorrectLabel;
  elements.resultAttemptedLabel.textContent = copy.resultAttemptedLabel;
  elements.resultAccuracyLabel.textContent = copy.resultAccuracyLabel;
  elements.resultLevelLabel.textContent = copy.resultLevelLabel;
  elements.resultInterpretationLabel.textContent = copy.resultInterpretationLabel;
  elements.resultNextLabel.textContent = copy.resultNextLabel;
  elements.resultReferralNote.textContent = copy.referral;
  elements.retryButton.textContent = copy.retry;
  elements.resultHomeButton.textContent = copy.backHome;
  setAgeError(elements.ageHint.classList.contains("is-error") ? copy.ageError : "");
}

function setLanguage(language) {
  state.language = language;
  document.documentElement.lang = language;

  elements.languageButtons.forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-checked", String(active));
  });

  elements.languageCurrentLabels.forEach((label) => {
    label.textContent = language.toUpperCase();
  });

  renderStaticCopy();
  renderCurrentStateText();
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatTime(ms) {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function getBandForAge(age) {
  return Object.entries(bandConfig).find(([, config]) => age >= config.minAge && age <= config.maxAge)?.[0] || null;
}

function showStage(targetKey) {
  const stages = ["introStage", "readyStage", "testStage", "resultStage"];
  stages.forEach((key) => {
    const isActive = key === targetKey;
    elements[key].hidden = !isActive;
    elements[key].classList.toggle("is-active", isActive);
  });
}

function resetStageSummary() {
  elements.correctValue.textContent = "0";
  elements.attemptedValue.textContent = "0";
  elements.levelValue.textContent = String(state.currentLevel);
  elements.timeValue.textContent = formatTime(state.timeRemainingMs);
}

function setAgeError(message = "") {
  elements.ageHint.textContent = message || uiCopy[state.language].ageHint;
  elements.ageHint.classList.toggle("is-error", Boolean(message));
}

function setReadyValues() {
  elements.readyAgeValue.textContent = String(state.age);
}

function renderCurrentStateText() {
  const copy = uiCopy[state.language];

  if (state.age && state.band) {
    elements.readyAgeValue.textContent = String(state.age);
    elements.testStatusLine.textContent = copy.statusLine(state.age, state.band);
    elements.resultSummary.textContent = copy.resultSummary(state.age);
  }
}

function buildAddition(maxSum) {
  let a = randomInt(0, maxSum);
  let b = randomInt(0, maxSum);
  while (a + b > maxSum) {
    a = randomInt(0, maxSum);
    b = randomInt(0, maxSum);
  }
  return { prompt: `${a} + ${b}`, answer: a + b, operation: "addition" };
}

function buildSubtraction(maxValue) {
  const a = randomInt(1, maxValue);
  const b = randomInt(0, a);
  return { prompt: `${a} - ${b}`, answer: a - b, operation: "subtraction" };
}

function buildTwoDigitAddition(maxA = 49, maxB = 39) {
  const a = randomInt(10, maxA);
  const b = randomInt(10, maxB);
  return { prompt: `${a} + ${b}`, answer: a + b, operation: "addition" };
}

function buildTwoDigitSubtraction(maxA = 79) {
  const a = randomInt(25, maxA);
  const b = randomInt(10, Math.max(10, a - 1));
  return { prompt: `${a} - ${b}`, answer: a - b, operation: "subtraction" };
}

function buildMultiplication(min = 2, max = 9) {
  const a = randomInt(min, max);
  const b = randomInt(min, max);
  return { prompt: `${a} x ${b}`, answer: a * b, operation: "multiplication" };
}

function buildDivision(min = 2, max = 9) {
  const divisor = randomInt(min, max);
  const quotient = randomInt(min, max);
  return { prompt: `${divisor * quotient} / ${divisor}`, answer: quotient, operation: "division" };
}

function buildThreeNumberArithmetic() {
  const a = randomInt(10, 30);
  const b = randomInt(3, 12);
  const c = randomInt(2, 10);
  if (Math.random() > 0.5) {
    return { prompt: `${a} + ${b} - ${c}`, answer: a + b - c, operation: "mixed" };
  }
  return { prompt: `${a} - ${b} + ${c}`, answer: a - b + c, operation: "mixed" };
}

function buildMultiDigitArithmetic() {
  if (Math.random() > 0.5) {
    const a = randomInt(120, 240);
    const b = randomInt(18, 89);
    return { prompt: `${a} + ${b}`, answer: a + b, operation: "addition" };
  }
  const a = randomInt(140, 260);
  const b = randomInt(20, 99);
  return { prompt: `${a} - ${b}`, answer: a - b, operation: "subtraction" };
}

function pickGenerator(list) {
  return list[randomInt(0, list.length - 1)]();
}

function generateProblem(band, level) {
  const problemByBand = {
    "6-8": {
      1: () => buildAddition(10),
      2: () => buildSubtraction(10),
      3: () => buildAddition(20),
      4: () => buildSubtraction(20)
    },
    "9-11": {
      1: () => pickGenerator([() => buildAddition(20), () => buildSubtraction(20)]),
      2: () => buildTwoDigitAddition(49, 29),
      3: () => buildTwoDigitSubtraction(59),
      4: () => buildMultiplication(2, 9),
      5: () => buildDivision(2, 9),
      6: () => pickGenerator([() => buildTwoDigitAddition(69, 39), () => buildTwoDigitSubtraction(79), () => buildMultiplication(3, 9), () => buildDivision(3, 9)])
    },
    "12-14": {
      1: () => pickGenerator([() => buildMultiplication(3, 9), () => buildDivision(3, 9)]),
      2: () => pickGenerator([() => buildTwoDigitAddition(79, 49), () => buildTwoDigitSubtraction(89)]),
      3: () => buildMultiplication(6, 12),
      4: () => buildDivision(4, 12),
      5: () => buildThreeNumberArithmetic(),
      6: () => pickGenerator([() => buildTwoDigitAddition(89, 59), () => buildTwoDigitSubtraction(99), () => buildMultiplication(7, 12), () => buildDivision(6, 12)])
    },
    "15-17": {
      1: () => pickGenerator([() => buildMultiplication(4, 10), () => buildDivision(4, 10)]),
      2: () => pickGenerator([() => buildMultiplication(6, 12), () => buildDivision(6, 12)]),
      3: () => buildThreeNumberArithmetic(),
      4: () => buildMultiDigitArithmetic(),
      5: () => pickGenerator([() => buildThreeNumberArithmetic(), () => buildMultiplication(8, 12), () => buildDivision(8, 12)]),
      6: () => pickGenerator([() => buildMultiDigitArithmetic(), () => buildMultiplication(9, 12), () => buildDivision(9, 12)])
    }
  };

  return problemByBand[band][level]();
}

function renderProblem() {
  const problem = generateProblem(state.band, state.currentLevel);
  state.currentProblem = {
    ...problem,
    band: state.band,
    level: state.currentLevel
  };
  state.questionStartedAt = Date.now();
  elements.problemPrompt.textContent = problem.prompt;
  elements.levelValue.textContent = String(state.currentLevel);
  elements.testStatusLine.textContent = uiCopy[state.language].statusLine(state.age, state.band);
  elements.answerInput.value = "";
  elements.answerInput.focus();
}

function updateLevel(isCorrect) {
  if (isCorrect) {
    state.correctStreak += 1;
    state.wrongStreak = 0;
  } else {
    state.wrongStreak += 1;
    state.correctStreak = 0;
  }

  if (state.correctStreak >= 2) {
    state.currentLevel = Math.min(state.currentLevel + 1, state.maxLevel);
    state.correctStreak = 0;
    state.wrongStreak = 0;
  } else if (state.wrongStreak >= 2) {
    state.currentLevel = Math.max(state.currentLevel - 1, 1);
    state.correctStreak = 0;
    state.wrongStreak = 0;
  }

  state.highestLevelReached = Math.max(state.highestLevelReached, state.currentLevel);
}

function submitCurrentAnswer() {
  if (!state.currentProblem) {
    return;
  }

  const value = elements.answerInput.value.trim();
  if (!value.length) {
    return;
  }

  const numericAnswer = Number(value);
  if (!Number.isFinite(numericAnswer)) {
    return;
  }

  const isCorrect = numericAnswer === state.currentProblem.answer;
  state.attemptedCount += 1;
  if (isCorrect) {
    state.correctCount += 1;
  }

  state.items.push({
    prompt: state.currentProblem.prompt,
    answer: state.currentProblem.answer,
    userAnswer: numericAnswer,
    isCorrect,
    level: state.currentProblem.level,
    band: state.currentProblem.band,
    operation: state.currentProblem.operation,
    responseTimeMs: Date.now() - state.questionStartedAt
  });

  updateLevel(isCorrect);
  elements.correctValue.textContent = String(state.correctCount);
  elements.attemptedValue.textContent = String(state.attemptedCount);
  elements.levelValue.textContent = String(state.currentLevel);

  if (state.timeRemainingMs > 0) {
    renderProblem();
  }
}

function getPerformanceLabel({ correct, accuracy, highestLevel, band }) {
  const thresholdsByBand = {
    "6-8": { strongCorrect: 15, steadyCorrect: 11, developingCorrect: 7, strongLevel: 4, steadyLevel: 3 },
    "9-11": { strongCorrect: 18, steadyCorrect: 13, developingCorrect: 8, strongLevel: 5, steadyLevel: 4 },
    "12-14": { strongCorrect: 19, steadyCorrect: 14, developingCorrect: 9, strongLevel: 5, steadyLevel: 4 },
    "15-17": { strongCorrect: 20, steadyCorrect: 15, developingCorrect: 10, strongLevel: 5, steadyLevel: 4 }
  };

  const thresholds = thresholdsByBand[band];

  if (correct >= thresholds.strongCorrect && accuracy >= 85 && highestLevel >= thresholds.strongLevel) {
    return {
      label: uiCopy[state.language].labels.strong,
      interpretation: uiCopy[state.language].interpretations.strong,
      nextStep: uiCopy[state.language].nextSteps.strong
    };
  }

  if (correct >= thresholds.steadyCorrect && accuracy >= 75 && highestLevel >= thresholds.steadyLevel) {
    return {
      label: uiCopy[state.language].labels.steady,
      interpretation: uiCopy[state.language].interpretations.steady,
      nextStep: uiCopy[state.language].nextSteps.steady
    };
  }

  if (correct >= thresholds.developingCorrect && accuracy >= 60) {
    return {
      label: uiCopy[state.language].labels.developing,
      interpretation: uiCopy[state.language].interpretations.developing,
      nextStep: uiCopy[state.language].nextSteps.developing
    };
  }

  return {
    label: uiCopy[state.language].labels.building,
    interpretation: uiCopy[state.language].interpretations.building,
    nextStep: uiCopy[state.language].nextSteps.building
  };
}

function endTest() {
  window.clearInterval(state.timerId);
  state.timerId = null;

  const accuracy = state.attemptedCount ? Math.round((state.correctCount / state.attemptedCount) * 100) : 0;
  const performance = getPerformanceLabel({
    correct: state.correctCount,
    accuracy,
    highestLevel: state.highestLevelReached,
    band: state.band
  });

  elements.resultCorrect.textContent = String(state.correctCount);
  elements.resultAttempted.textContent = String(state.attemptedCount);
  elements.resultAccuracy.textContent = `${accuracy}%`;
  elements.resultLevel.textContent = String(state.highestLevelReached);
  elements.resultBandLabel.textContent = performance.label;
  elements.resultInterpretation.textContent = performance.interpretation;
  elements.resultNextStep.textContent = performance.nextStep;
  elements.resultSummary.textContent = uiCopy[state.language].resultSummary(state.age);

  showStage("resultStage");
}

function startTest() {
  state.correctCount = 0;
  state.attemptedCount = 0;
  state.correctStreak = 0;
  state.wrongStreak = 0;
  state.highestLevelReached = state.currentLevel;
  state.items = [];
  state.timeRemainingMs = TEST_DURATION_SECONDS * 1000;
  state.currentProblem = null;

  resetStageSummary();
  showStage("testStage");
  renderProblem();

  const startedAt = Date.now();
  state.timerId = window.setInterval(() => {
    const elapsed = Date.now() - startedAt;
    state.timeRemainingMs = Math.max(0, TEST_DURATION_SECONDS * 1000 - elapsed);
    elements.timeValue.textContent = formatTime(state.timeRemainingMs);

    if (state.timeRemainingMs <= 0) {
      endTest();
    }
  }, 100);
}

function resetTestState() {
  window.clearInterval(state.timerId);
  state.timerId = null;
  state.age = null;
  state.band = null;
  state.currentLevel = 1;
  state.maxLevel = 4;
  state.correctCount = 0;
  state.attemptedCount = 0;
  state.correctStreak = 0;
  state.wrongStreak = 0;
  state.highestLevelReached = 1;
  state.items = [];
  state.currentProblem = null;
  state.questionStartedAt = 0;
  state.timeRemainingMs = TEST_DURATION_SECONDS * 1000;
}

elements.ageForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const age = Number(elements.ageInput.value);
  if (!Number.isInteger(age) || age < AGE_MIN || age > AGE_MAX) {
    setAgeError(uiCopy[state.language].ageError);
    return;
  }

  setAgeError();
  state.age = age;
  state.band = getBandForAge(age);
  state.currentLevel = bandConfig[state.band].startLevel;
  state.maxLevel = bandConfig[state.band].maxLevel;
  state.highestLevelReached = state.currentLevel;

  setReadyValues();
  showStage("readyStage");
});

elements.backToIntro.addEventListener("click", () => {
  showStage("introStage");
  elements.ageInput.focus();
});

elements.startTestButton.addEventListener("click", startTest);

elements.answerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submitCurrentAnswer();
});

elements.retryButton.addEventListener("click", () => {
  const previousAge = state.age;
  resetTestState();
  elements.ageInput.value = previousAge ? String(previousAge) : "";
  showStage("introStage");
  elements.ageInput.focus();
});

elements.languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.language);
    closeLanguageMenus();
  });
});

elements.languageTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    const switcher = trigger.closest(".language-switcher");
    const isOpen = switcher?.classList.contains("is-open");

    closeLanguageMenus();

    if (switcher && !isOpen) {
      switcher.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
    }
  });
});

document.addEventListener("click", (event) => {
  if (![...elements.languageSwitchers].some((switcher) => switcher.contains(event.target))) {
    closeLanguageMenus();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLanguageMenus();
  }
});

window.addEventListener("resize", closeLanguageMenus);

setLanguage("en");
elements.ageInput.focus();
