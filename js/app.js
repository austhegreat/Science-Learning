// Main Application Controller for SainsHub Form 4 (KSSM / SPM Science)
// Fully English Medium - Dual Language Programme (DLP)

let currentChapterId = 1;
let currentTab = 'notes';
let currentThemeFilter = 'all';

// Quiz State
let quizQuestionIndex = 0;
let quizScore = 0;
let quizAnswersRecorded = {};

document.addEventListener("DOMContentLoaded", () => {
  renderChaptersList();
  loadChapter(1);
  setupSearch();
  initExamModule();
  if (typeof ScienceGamesEngine !== 'undefined') {
    ScienceGamesEngine.renderGameArena('main-game-arena-mount');
  }
  if (window.lucide) window.lucide.createIcons();
});

// Render the 12 chapter grid
function renderChaptersList(filter = 'all') {
  currentThemeFilter = filter;
  const container = document.getElementById('chaptersGrid');
  if (!container) return;

  const chapters = filter === 'all'
    ? CHAPTERS_DATA
    : CHAPTERS_DATA.filter(c => c.themeId === parseInt(filter));

  const countBadge = document.getElementById('chapter-count');
  if (countBadge) countBadge.textContent = chapters.length;

  container.innerHTML = chapters.map(ch => {
    const isSelected = ch.id === currentChapterId;
    const themeColors = {
      sky: { border: 'border-sky-300', badge: 'bg-sky-100 text-sky-800', hover: 'hover:border-sky-400' },
      emerald: { border: 'border-emerald-300', badge: 'bg-emerald-100 text-emerald-800', hover: 'hover:border-emerald-400' },
      purple: { border: 'border-purple-300', badge: 'bg-purple-100 text-purple-800', hover: 'hover:border-purple-400' },
      amber: { border: 'border-amber-300', badge: 'bg-amber-100 text-amber-800', hover: 'hover:border-amber-400' }
    }[ch.color] || { border: 'border-slate-300', badge: 'bg-slate-100 text-slate-800', hover: 'hover:border-slate-400' };

    return `
      <div onclick="loadChapter(${ch.id}); scrollToSection('lesson-viewer');" 
           class="p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group ${
             isSelected 
               ? 'bg-white border-emerald-500 ring-2 ring-emerald-500/30 shadow-lg' 
               : `bg-white border-slate-200 ${themeColors.hover} hover:shadow-md`
           }">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full ${themeColors.badge}">
              Theme ${ch.themeId}
            </span>
            <span class="text-xs font-mono font-bold text-slate-400">
              Chapter ${ch.id < 10 ? '0' + ch.id : ch.id}
            </span>
          </div>
          <h3 class="font-bold text-base text-slate-900 group-hover:text-emerald-600 transition-colors mb-1.5 leading-snug">
            ${ch.title}
          </h3>
          <p class="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
            ${ch.summary}
          </p>
        </div>

        <div>
          <div class="border-t border-slate-100 pt-3 flex items-center justify-between text-xs text-slate-400">
            <span class="flex items-center gap-2">
              <span class="flex items-center gap-1">
                <i data-lucide="layers" class="w-3.5 h-3.5"></i>
                ${ch.subtopics.length}
              </span>
              <span class="text-slate-300">·</span>
              <span class="flex items-center gap-1 text-emerald-600 font-semibold">
                <i data-lucide="box" class="w-3.5 h-3.5"></i>
                3D Model
              </span>
            </span>
            <span class="text-emerald-600 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              Explore Lesson
              <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

// Filter Theme Pills
function filterByTheme(themeId) {
  document.querySelectorAll('.theme-pill').forEach(btn => {
    btn.className = "theme-pill px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 whitespace-nowrap transition-all";
  });

  const activeBtn = document.getElementById(`pill-${themeId}`);
  if (activeBtn) {
    activeBtn.className = "theme-pill px-3.5 py-1.5 rounded-full text-xs font-bold bg-slate-900 text-white whitespace-nowrap transition-all shadow-sm";
  }

  renderChaptersList(themeId);
}

// Load Chapter Details
function loadChapter(id) {
  currentChapterId = id;
  const ch = CHAPTERS_DATA.find(c => c.id === id) || CHAPTERS_DATA[0];

  // Update Header Elements
  document.getElementById('lesson-theme-tag').textContent = `Theme ${ch.themeId}: ${ch.themeName}`;
  document.getElementById('lesson-chapter-num').textContent = `Chapter ${ch.id < 10 ? '0' + ch.id : ch.id}`;
  document.getElementById('lesson-title').textContent = ch.title;
  document.getElementById('lesson-subtitle').textContent = ch.summary;

  renderChaptersList(currentThemeFilter);
  switchTab(currentTab);
}

// Switch Lesson Sub-tabs
function switchTab(tab) {
  currentTab = tab;
  const tabs = ['notes', '3d-model', 'interactive', 'experiment', 'exam-tips', 'game'];
  tabs.forEach(t => {
    const btn = document.getElementById(`btn-tab-${t}`);
    if (btn) {
      if (t === tab) {
        if (t === '3d-model') {
          btn.className = "px-4 py-3 border-b-2 border-emerald-400 text-emerald-300 font-bold flex items-center gap-2 whitespace-nowrap bg-emerald-500/10";
        } else if (t === 'game') {
          btn.className = "px-4 py-3 border-b-2 border-amber-400 text-amber-300 font-bold flex items-center gap-2 whitespace-nowrap bg-amber-500/10";
        } else {
          btn.className = "px-4 py-3 border-b-2 border-emerald-500 text-emerald-400 font-bold flex items-center gap-2 whitespace-nowrap bg-emerald-500/10";
        }
      } else {
        if (t === '3d-model') {
          btn.className = "px-4 py-3 border-b-2 border-transparent text-emerald-400/80 hover:text-emerald-300 font-medium flex items-center gap-2 whitespace-nowrap";
        } else if (t === 'game') {
          btn.className = "px-4 py-3 border-b-2 border-transparent text-amber-400/80 hover:text-amber-300 font-medium flex items-center gap-2 whitespace-nowrap";
        } else {
          btn.className = "px-4 py-3 border-b-2 border-transparent text-slate-400 hover:text-slate-200 font-medium flex items-center gap-2 whitespace-nowrap";
        }
      }
    }
  });

  const container = document.getElementById('lesson-tab-container');
  const ch = CHAPTERS_DATA.find(c => c.id === currentChapterId) || CHAPTERS_DATA[0];

  if (tab !== '3d-model' && typeof ThreeModelsEngine !== 'undefined') {
    ThreeModelsEngine.cleanup();
  }

  if (tab === 'notes') {
    container.innerHTML = renderNotesTab(ch);
  } else if (tab === '3d-model') {
    container.innerHTML = `<div id="three-model-mount"></div>`;
    if (typeof ThreeModelsEngine !== 'undefined') {
      ThreeModelsEngine.render3DModel(ch.id, 'three-model-mount');
    }
  } else if (tab === 'interactive') {
    container.innerHTML = `<div id="simulation-mount"></div>`;
    SimulationsEngine.render(ch.id, 'simulation-mount');
  } else if (tab === 'experiment') {
    container.innerHTML = renderExperimentTab(ch);
  } else if (tab === 'exam-tips') {
    container.innerHTML = renderExamTipsTab(ch);
  } else if (tab === 'game') {
    container.innerHTML = `<div id="lesson-game-mount"></div>`;
    if (typeof ScienceGamesEngine !== 'undefined') {
      ScienceGamesEngine.renderGameArena('lesson-game-mount');
    }
  }

  if (window.lucide) window.lucide.createIcons();
}

// Render Notes Tab
function renderNotesTab(ch) {
  return `
    <div class="space-y-8">
      <!-- Subtopics Breakdown -->
      <div>
        <div class="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
          <h4 class="font-extrabold text-base text-slate-900 flex items-center gap-2">
            <i data-lucide="book-open" class="w-5 h-5 text-emerald-600"></i>
            Detailed Syllabus Subtopics
          </h4>
          <span class="text-xs bg-emerald-50 text-emerald-700 font-mono font-bold px-2.5 py-1 rounded-full">
            ${ch.subtopics.length} Sections
          </span>
        </div>

        <div class="space-y-4">
          ${ch.subtopics.map(st => `
            <div class="p-6 rounded-2xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-emerald-300 transition-all shadow-sm">
              <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div class="flex items-center gap-2.5">
                  <span class="px-2.5 py-0.5 rounded-lg text-xs font-mono font-extrabold bg-emerald-100 text-emerald-800">
                    ${st.code}
                  </span>
                  <h5 class="font-bold text-sm sm:text-base text-slate-900">${st.title}</h5>
                </div>
                <span class="text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <i data-lucide="sparkles" class="w-3 h-3 text-emerald-600"></i>
                  Interactive Motion Graphic
                </span>
              </div>
              <ul class="space-y-1.5 text-xs text-slate-700 list-disc list-inside leading-relaxed mb-4">
                ${st.points.map(pt => `<li>${pt}</li>`).join('')}
              </ul>

              <!-- Embedded Interactive Visual Demonstrator for this Subtopic -->
              <div class="mt-4 pt-4 border-t border-slate-200">
                ${typeof TopicVisualsEngine !== 'undefined' ? TopicVisualsEngine.renderVisual(st.code) : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Key Terminology Glossary -->
      <div class="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <h4 class="font-extrabold text-sm uppercase tracking-wider text-emerald-400 mb-4 flex items-center gap-2">
          <i data-lucide="bookmark" class="w-4 h-4"></i>
          Key Definitions to Memorize (SPM Terminology)
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${ch.keyTerms.map(kt => `
            <div class="p-4 rounded-xl bg-slate-800/90 border border-slate-700">
              <span class="font-extrabold text-xs text-emerald-300 font-mono block mb-1">${kt.term}</span>
              <p class="text-xs text-slate-300 leading-relaxed">${kt.def}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// Render PEKA Experiment Tab
function renderExperimentTab(ch) {
  const exp = ch.experiment;
  return `
    <div class="space-y-6">
      <div class="p-6 rounded-2xl bg-amber-50/70 border border-amber-200">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-extrabold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
            <i data-lucide="flask-conical" class="w-4 h-4"></i>
            SPM Paper 2 Section A: Compulsory PEKA Practical Experiment
          </span>
          <span class="text-xs font-mono font-bold bg-amber-200/60 text-amber-900 px-2.5 py-0.5 rounded">20 Marks</span>
        </div>
        <h4 class="text-xl font-extrabold text-slate-900 mb-2">${exp.title}</h4>
        <p class="text-xs text-slate-700 leading-relaxed mb-4"><strong>Aim:</strong> ${exp.aim}</p>

        <!-- Scientific Variables Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs mb-4">
          <div class="bg-white p-4 rounded-xl border border-amber-200 shadow-sm">
            <span class="font-extrabold text-amber-900 block mb-1">Manipulated Variable (MV):</span>
            <span class="text-slate-600">${exp.manipulatedVar}</span>
          </div>
          <div class="bg-white p-4 rounded-xl border border-amber-200 shadow-sm">
            <span class="font-extrabold text-emerald-900 block mb-1">Responding Variable (RV):</span>
            <span class="text-slate-600">${exp.respondingVar}</span>
          </div>
          <div class="bg-white p-4 rounded-xl border border-amber-200 shadow-sm">
            <span class="font-extrabold text-sky-900 block mb-1">Constant Variable (CV):</span>
            <span class="text-slate-600">${exp.constantVar}</span>
          </div>
        </div>

        <div class="p-4 bg-white rounded-xl border border-amber-200 text-xs text-slate-700 space-y-2">
          <div><strong>Hypothesis:</strong> ${exp.hypothesis}</div>
          <div class="text-amber-800"><strong>Essential Precaution:</strong> ${exp.precaution}</div>
        </div>
      </div>
    </div>
  `;
}

// Render SPM Exam Tips & KBAT Tab
function renderExamTipsTab(ch) {
  const tips = ch.spmExamFocus;
  return `
    <div class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-5 rounded-2xl bg-sky-50/70 border border-sky-200">
          <div class="text-xs font-extrabold uppercase text-sky-800 tracking-wider mb-2 flex items-center gap-1.5">
            <i data-lucide="check-circle" class="w-4 h-4"></i>
            Paper 1 Objective Strategy
          </div>
          <p class="text-xs text-slate-700 leading-relaxed">${tips.paper1Tip}</p>
        </div>

        <div class="p-5 rounded-2xl bg-purple-50/70 border border-purple-200">
          <div class="text-xs font-extrabold uppercase text-purple-800 tracking-wider mb-2 flex items-center gap-1.5">
            <i data-lucide="edit-3" class="w-4 h-4"></i>
            Paper 2 Structured Focus
          </div>
          <p class="text-xs text-slate-700 leading-relaxed">${tips.paper2Tip}</p>
        </div>
      </div>

      <!-- High-Order Thinking (KBAT) Essay Question & Model Scheme -->
      <div class="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
            <i data-lucide="award" class="w-4 h-4"></i>
            SPM Higher-Order Thinking (KBAT) Sample Question
          </span>
          <span class="text-xs bg-amber-500/20 text-amber-300 font-mono px-2 py-0.5 rounded">Model Answer</span>
        </div>
        <h5 class="font-extrabold text-sm sm:text-base text-slate-100 mb-4 leading-relaxed">
          "${tips.kbatQuestion}"
        </h5>
        <div class="p-4 rounded-xl bg-slate-800/90 border border-slate-700 text-xs text-slate-200 leading-relaxed">
          <div class="font-extrabold text-emerald-400 mb-1">Recommended Full-Mark Answer Structure:</div>
          <p>${tips.kbatAnswer}</p>
        </div>
      </div>
    </div>
  `;
}

// ----------------------------------------------------------------------
// EXAM PRACTICE MODULE (Paper 1 & Paper 2)
// ----------------------------------------------------------------------
function initExamModule() {
  loadExamPaper1Question();
  renderPaper2SectionA();
  renderPaper2SectionC();
}

function loadExamPaper1Question() {
  const q = EXAM_DATA.paper1Questions[quizQuestionIndex];
  if (!q) return;

  const currentIdxEl = document.getElementById('quiz-current-idx');
  const totalIdxEl = document.getElementById('quiz-total-idx');
  const questionEl = document.getElementById('quiz-question');
  const optionsEl = document.getElementById('quiz-options');
  const explEl = document.getElementById('quiz-explanation');

  if (currentIdxEl) currentIdxEl.textContent = quizQuestionIndex + 1;
  if (totalIdxEl) totalIdxEl.textContent = EXAM_DATA.paper1Questions.length;
  if (questionEl) questionEl.textContent = `[Chapter ${q.chapter}] ${q.question}`;
  if (explEl) explEl.classList.add('hidden');

  if (optionsEl) {
    optionsEl.innerHTML = q.options.map((opt, i) => `
      <button onclick="handlePaper1Answer(${i})" id="opt-btn-${i}" 
              class="w-full text-left p-3.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700/80 text-slate-200 text-xs sm:text-sm font-medium transition-all flex items-center justify-between group">
        <span>${opt}</span>
        <span class="w-5 h-5 rounded-full border border-slate-600 flex items-center justify-center text-xs text-slate-400 group-hover:border-slate-400 font-mono">
          ${['A','B','C','D'][i]}
        </span>
      </button>
    `).join('');
  }
}

function handlePaper1Answer(selectedIdx) {
  const q = EXAM_DATA.paper1Questions[quizQuestionIndex];
  const expl = document.getElementById('quiz-explanation');
  if (!expl) return;

  expl.classList.remove('hidden');

  if (selectedIdx === q.correct) {
    quizScore += 10;
    const scoreEl = document.getElementById('quiz-score');
    if (scoreEl) scoreEl.textContent = quizScore;
    document.getElementById(`opt-btn-${selectedIdx}`).className = "w-full text-left p-3.5 rounded-xl border border-emerald-500 bg-emerald-950/70 text-emerald-200 text-xs sm:text-sm font-bold flex items-center justify-between";
    expl.className = "p-4 rounded-xl bg-emerald-950/80 border border-emerald-700 text-xs sm:text-sm text-emerald-200 mb-6";
    expl.innerHTML = `<strong>Correct! ✓</strong> ${q.explanation}`;
  } else {
    document.getElementById(`opt-btn-${selectedIdx}`).className = "w-full text-left p-3.5 rounded-xl border border-rose-500 bg-rose-950/70 text-rose-200 text-xs sm:text-sm font-medium flex items-center justify-between";
    document.getElementById(`opt-btn-${q.correct}`).className = "w-full text-left p-3.5 rounded-xl border border-emerald-500 bg-emerald-950/70 text-emerald-200 text-xs sm:text-sm font-bold flex items-center justify-between";
    expl.className = "p-4 rounded-xl bg-slate-800 border border-slate-700 text-xs sm:text-sm text-slate-300 mb-6";
    expl.innerHTML = `<strong>Incorrect.</strong> ${q.explanation}`;
  }
}

function nextQuizQuestion() {
  quizQuestionIndex = (quizQuestionIndex + 1) % EXAM_DATA.paper1Questions.length;
  loadExamPaper1Question();
}

// Paper 2 Section A Rendering
function renderPaper2SectionA() {
  const container = document.getElementById('paper2-section-a-container');
  if (!container) return;

  container.innerHTML = EXAM_DATA.paper2SectionA.map(peka => `
    <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm mb-6">
      <div class="flex items-center justify-between mb-2">
        <span class="text-xs font-mono font-bold bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded">
          Chapter ${peka.chapter} Experiment
        </span>
        <span class="text-xs font-bold text-slate-400">${peka.id}</span>
      </div>
      <h4 class="font-extrabold text-base text-slate-900 mb-2">${peka.title}</h4>
      <p class="text-xs text-slate-600 mb-4 leading-relaxed">${peka.scenario}</p>

      <div class="space-y-4 pt-3 border-t border-slate-100">
        ${peka.questions.map((item, qIdx) => `
          <div class="text-xs space-y-1.5">
            <div class="font-bold text-slate-800 flex justify-between">
              <span>${item.q.replace(/\\n/g, '<br>')}</span>
              <span class="text-slate-400 font-mono">[${item.marks}m]</span>
            </div>
            <button onclick="toggleAnswer('scheme-${peka.id}-${qIdx}')" class="text-emerald-600 hover:underline font-bold text-[11px] block">
              Show Marking Scheme ▾
            </button>
            <div id="scheme-${peka.id}-${qIdx}" class="hidden p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 whitespace-pre-line font-mono text-[11px]">
              ${item.scheme}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// Paper 2 Section C Rendering
function renderPaper2SectionC() {
  const container = document.getElementById('paper2-section-c-container');
  if (!container) return;

  container.innerHTML = EXAM_DATA.paper2SectionC_KBAT.map(essay => `
    <div class="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl mb-6">
      <div class="flex items-center justify-between mb-3">
        <span class="text-xs font-mono font-bold bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded">
          Chapter ${essay.chapter} KBAT Essay (12 Marks)
        </span>
        <span class="text-xs text-slate-400 font-mono">${essay.id}</span>
      </div>
      <h4 class="font-extrabold text-base text-slate-100 mb-3">${essay.title}</h4>
      <p class="text-xs text-slate-300 leading-relaxed whitespace-pre-line mb-4">${essay.question}</p>

      <button onclick="toggleAnswer('essay-scheme-${essay.id}')" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs">
        View Marking Scheme Criteria (12 Marks)
      </button>

      <div id="essay-scheme-${essay.id}" class="hidden mt-4 p-4 rounded-xl bg-slate-800 border border-slate-700 text-xs text-slate-200 space-y-2">
        ${essay.scheme.map(s => `<div>${s}</div>`).join('')}
      </div>
    </div>
  `).join('');
}

function toggleAnswer(id) {
  const el = document.getElementById(id);
  if (el) el.classList.toggle('hidden');
}

// ----------------------------------------------------------------------
// PRINTABLE 1-PAGE REVISION SHEETS GENERATOR
// ----------------------------------------------------------------------
function openPrintSheet(chapterId) {
  const targetId = chapterId || currentChapterId;
  const ch = CHAPTERS_DATA.find(c => c.id === targetId) || CHAPTERS_DATA[0];

  const modal = document.getElementById('printModal');
  const sheetContainer = document.getElementById('printSheetContent');

  sheetContainer.innerHTML = `
    <div class="printable-sheet bg-white p-6 sm:p-10 max-w-3xl mx-auto border border-slate-200 text-slate-900 font-sans">
      <div class="flex justify-between items-start border-b-2 border-slate-900 pb-4 mb-4">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-emerald-700 font-mono">SPM FORM 4 SCIENCE REVISION SHEET</span>
          <h2 class="text-2xl font-black text-slate-900">Chapter ${ch.id}: ${ch.title}</h2>
          <div class="text-xs text-slate-500">Theme ${ch.themeId}: ${ch.themeName} · KSSM Malaysia Syllabus</div>
        </div>
        <div class="text-right">
          <div class="text-xs font-mono font-bold bg-slate-900 text-white px-2.5 py-1 rounded">1-Page Cheat Sheet</div>
        </div>
      </div>

      <div class="space-y-4 text-xs">
        <!-- Subtopics Summary -->
        <div>
          <h4 class="font-extrabold text-sm uppercase text-slate-900 border-b border-slate-300 pb-1 mb-2">1. Essential Concepts &amp; Subtopics</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${ch.subtopics.map(st => `
              <div class="p-2.5 rounded bg-slate-50 border border-slate-200">
                <span class="font-mono font-bold text-emerald-800 block mb-1">${st.code} ${st.title}</span>
                <ul class="list-disc list-inside space-y-1 text-[11px] text-slate-700">
                  ${st.points.map(p => `<li>${p.substring(0, 140)}...</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Key Definitions -->
        <div>
          <h4 class="font-extrabold text-sm uppercase text-slate-900 border-b border-slate-300 pb-1 mb-2">2. Key Scientific Definitions to State in Paper 2</h4>
          <div class="grid grid-cols-2 gap-2 text-[11px]">
            ${ch.keyTerms.map(kt => `
              <div class="p-2 border border-slate-200 rounded">
                <strong>${kt.term}:</strong> ${kt.def}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- PEKA Experiment Box -->
        <div class="p-3 rounded bg-amber-50 border border-amber-300 text-[11px]">
          <h4 class="font-extrabold text-xs uppercase text-amber-900 mb-1">3. Compulsory PEKA Experiment Guide</h4>
          <div><strong>Title:</strong> ${ch.experiment.title}</div>
          <div class="grid grid-cols-3 gap-2 mt-1">
            <div><strong>MV:</strong> ${ch.experiment.manipulatedVar}</div>
            <div><strong>RV:</strong> ${ch.experiment.respondingVar}</div>
            <div><strong>CV:</strong> ${ch.experiment.constantVar}</div>
          </div>
        </div>

        <!-- SPM Hot Tip -->
        <div class="p-3 rounded bg-emerald-50 border border-emerald-300 text-[11px]">
          <strong>SPM Hot Tip &amp; Common Trap:</strong> ${ch.spmExamFocus.paper1Tip} ${ch.spmExamFocus.paper2Tip}
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
}

function triggerBrowserPrint() {
  window.print();
}

// ----------------------------------------------------------------------
// SEARCH ENGINE & MOBILE SEARCH
// ----------------------------------------------------------------------
function toggleMobileSearch() {
  const panel = document.getElementById('mobileSearchPanel');
  if (panel) {
    panel.classList.toggle('hidden');
    if (!panel.classList.contains('hidden')) {
      const input = document.getElementById('mobileSearchInput');
      if (input) input.focus();
      if (window.lucide) window.lucide.createIcons();
    }
  }
}

function setupSearch() {
  const setupInput = (inputId, dropdownId, closePanel = false) => {
    const input = document.getElementById(inputId);
    const dropdown = document.getElementById(dropdownId);
    if (!input || !dropdown) return;

    input.addEventListener('input', (e) => {
      const val = e.target.value.toLowerCase().trim();
      if (val.length < 2) {
        dropdown.classList.add('hidden');
        return;
      }

      const matches = CHAPTERS_DATA.filter(c =>
        c.title.toLowerCase().includes(val) ||
        c.summary.toLowerCase().includes(val) ||
        c.subtopics.some(s => s.title.toLowerCase().includes(val) || s.points.some(p => p.toLowerCase().includes(val))) ||
        c.keyTerms.some(k => k.term.toLowerCase().includes(val) || k.def.toLowerCase().includes(val))
      );

      if (matches.length === 0) {
        dropdown.innerHTML = `<div class="p-3 text-xs text-slate-400 text-center">No matching science concepts found for "${val}"</div>`;
      } else {
        dropdown.innerHTML = matches.map(m => `
          <div onclick="loadChapter(${m.id}); document.getElementById('${dropdownId}').classList.add('hidden'); ${closePanel ? 'toggleMobileSearch();' : ''} scrollToSection('lesson-viewer');" 
               class="p-2.5 hover:bg-slate-800 rounded-lg cursor-pointer transition-colors text-left border-b border-slate-800/80 last:border-0">
            <div class="text-xs font-bold text-emerald-400">Chapter ${m.id}: ${m.title}</div>
            <div class="text-[11px] text-slate-400 line-clamp-1">${m.summary}</div>
          </div>
        `).join('');
      }
      dropdown.classList.remove('hidden');
    });
  };

  setupInput('globalSearch', 'searchDropdown', false);
  setupInput('mobileSearchInput', 'mobileSearchDropdown', true);
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('hidden');
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('hidden');
}
