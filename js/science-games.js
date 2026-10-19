// Form 4 Science (KSSM / SPM) - Interactive Science Game Arena
// Provides gamified learning challenges: Molecule & Alloy Synthesis, Emergency Medic Rush,
// Genetics Detective, Hormone Target Matcher, Physics Motion Target, and Nuclear Reactor Operator.

const ScienceGamesEngine = {
  score: 0,
  streak: 0,
  currentLevel: 1,
  activeGameMode: 'synthesis', // 'synthesis', 'medic', 'genetics', 'reactor'

  // Web Audio Synthesizer for Game Sound FX (Zero external dependencies)
  playSfx: function(type) {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      if (type === 'correct') {
        // High upbeat victory chime
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();
        osc1.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc2.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1); // E5
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
        osc1.connect(gain); osc2.connect(gain); gain.connect(ctx.destination);
        osc1.start(); osc2.start(ctx.currentTime + 0.1);
        osc1.stop(ctx.currentTime + 0.35); osc2.stop(ctx.currentTime + 0.35);
      } else if (type === 'wrong') {
        // Low error buzz
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(140, ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(110, ctx.currentTime + 0.25);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
        osc.connect(gain); gain.connect(ctx.destination);
        osc.start(); osc.stop(ctx.currentTime + 0.25);
      } else if (type === 'click') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
        osc.connect(gain); gain.connect(ctx.destination);
        osc.start(); osc.stop(ctx.currentTime + 0.06);
      } else if (type === 'fanfare') {
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.1);
          gain.gain.setValueAtTime(0.1, ctx.currentTime + idx * 0.1);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.1 + 0.25);
          osc.connect(gain); gain.connect(ctx.destination);
          osc.start(ctx.currentTime + idx * 0.1);
          osc.stop(ctx.currentTime + idx * 0.1 + 0.25);
        });
      }
    } catch(e) {}
  },

  // -------------------------------------------------------------
  // GAME 1: MOLECULE & ALLOY SYNTHESIS LAB (User's requested game)
  // -------------------------------------------------------------
  synthesisChallenges: [
    {
      id: 1,
      targetName: "Water (H₂O)",
      category: "Molecular Substance (Chapter 8)",
      hint: "The vital liquid of life! Consists of 2 Hydrogen atoms and 1 Oxygen atom.",
      required: { "H": 2, "O": 1 },
      available: ["H", "O", "C", "Na", "Cl", "Fe"]
    },
    {
      id: 2,
      targetName: "Table Salt / Sodium Chloride (NaCl)",
      category: "Giant Ionic Lattice (Chapter 8)",
      hint: "An ionic compound formed by electrostatic attraction between 1 Sodium ion and 1 Chloride ion.",
      required: { "Na": 1, "Cl": 1 },
      available: ["Na", "Cl", "H", "O", "K", "Mg"]
    },
    {
      id: 3,
      targetName: "Carbon Dioxide (CO₂)",
      category: "Covalent Molecule (Chapter 4 & 8)",
      hint: "Key greenhouse gas emitted by fossil combustion: 1 Carbon and 2 Oxygen atoms.",
      required: { "C": 1, "O": 2 },
      available: ["C", "O", "H", "N", "S", "Fe"]
    },
    {
      id: 4,
      targetName: "Steel Alloy (Keluli)",
      category: "Industrial Alloy (Chapter 9)",
      hint: "Ultra-hard construction alloy made of base Iron metal combined with a small amount of Carbon.",
      required: { "Fe": 1, "C": 1 },
      available: ["Fe", "C", "Cu", "Sn", "Zn", "Al"]
    },
    {
      id: 5,
      targetName: "Bronze Alloy (Gangsa)",
      category: "Industrial Alloy (Chapter 9)",
      hint: "Historic medal alloy: Primary metal Copper alloyed with Tin.",
      required: { "Cu": 1, "Sn": 1 },
      available: ["Cu", "Sn", "Zn", "Fe", "Pb", "Al"]
    },
    {
      id: 6,
      targetName: "Brass Alloy (Loyang)",
      category: "Industrial Alloy (Chapter 9)",
      hint: "Musical trumpet and lock alloy: Copper combined with Zinc.",
      required: { "Cu": 1, "Zn": 1 },
      available: ["Cu", "Zn", "Sn", "Fe", "Mg", "Au"]
    },
    {
      id: 7,
      targetName: "Duralumin (Badan Kapal Terbang)",
      category: "Aerospace Alloy (Chapter 9)",
      hint: "Ultra-lightweight high-tensile aircraft frame: Aluminium base + Copper + Magnesium.",
      required: { "Al": 1, "Cu": 1, "Mg": 1 },
      available: ["Al", "Cu", "Mg", "Fe", "Sn", "Zn"]
    },
    {
      id: 8,
      targetName: "Pewter Alloy (Piuter)",
      category: "Royal Handicraft Alloy (Chapter 9)",
      hint: "Lustrous luxury souvenir alloy made primarily of Tin with Antimony and Copper.",
      required: { "Sn": 1, "Sb": 1, "Cu": 1 },
      available: ["Sn", "Sb", "Cu", "Zn", "Pb", "Fe"]
    },
    {
      id: 9,
      targetName: "Mercuric Sulfide (HgS)",
      category: "Lab Hazard Neutralization (Chapter 1)",
      hint: "Harmless solid formed when yellow Sulfur powder neutralizes spilled liquid elemental Mercury.",
      required: { "Hg": 1, "S": 1 },
      available: ["Hg", "S", "O", "Cl", "Na", "C"]
    }
  ],
  currentSynthesisIdx: 0,
  crucibleItems: {},

  initSynthesisGame: function() {
    this.crucibleItems = {};
    const ch = this.synthesisChallenges[this.currentSynthesisIdx];
    const container = document.getElementById('game-synthesis-mount');
    if (!container) return;

    container.innerHTML = `
      <div class="max-w-2xl mx-auto p-6 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
        <!-- Header & Target Info -->
        <div class="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
          <div>
            <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/20 px-2.5 py-1 rounded-full">
              Mission ${this.currentSynthesisIdx + 1} of ${this.synthesisChallenges.length} · ${ch.category}
            </span>
            <h3 class="text-xl sm:text-2xl font-black text-slate-100 mt-2">
              Synthesize: <span class="text-amber-400 font-mono">${ch.targetName}</span>
            </h3>
            <p class="text-xs text-slate-400 mt-1">${ch.hint}</p>
          </div>
          <div class="text-right">
            <div class="text-[10px] font-bold uppercase text-slate-500">Player Score</div>
            <div id="gameScoreDisplay" class="text-2xl font-black font-mono text-emerald-400">${this.score}</div>
          </div>
        </div>

        <!-- The Crucible Chamber -->
        <div class="relative p-6 rounded-2xl bg-slate-950 border-2 border-dashed border-slate-700 text-center mb-6 min-h-[140px] flex flex-col items-center justify-center">
          <div class="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-2">Synthesis Crucible Chamber</div>
          
          <div id="crucibleContents" class="flex flex-wrap items-center justify-center gap-3 min-h-[48px]">
            <span class="text-xs text-slate-600 font-mono">Crucible is empty. Click elements below to add!</span>
          </div>

          <div id="synthesisFeedback" class="hidden mt-3 p-2.5 rounded-xl text-xs font-bold text-center w-full"></div>
        </div>

        <!-- Element Dispenser Rack -->
        <div class="mb-6">
          <div class="flex items-center justify-between text-xs font-bold text-slate-400 mb-2">
            <span>Available Chemical Elements &amp; Metals:</span>
            <span class="text-[11px] text-slate-500">Click to add to crucible</span>
          </div>
          <div class="flex flex-wrap gap-2 justify-center">
            ${ch.available.map(sym => `
              <button onclick="ScienceGamesEngine.addToCrucible('${sym}')" 
                      class="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-95 border border-slate-700 text-slate-100 font-mono font-bold text-sm shadow-md transition-all flex flex-col items-center">
                <span>${sym}</span>
                <span class="text-[9px] text-slate-400 font-sans font-normal">${this.getElementName(sym)}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-3">
          <button onclick="ScienceGamesEngine.verifySynthesis()" class="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2">
            <i data-lucide="sparkles" class="w-4 h-4"></i>
            <span>Test &amp; Forge Substance!</span>
          </button>
          <button onclick="ScienceGamesEngine.clearCrucible()" class="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs uppercase tracking-wider border border-slate-700 transition-all">
            Clear
          </button>
        </div>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
  },

  getElementName: function(sym) {
    const names = {
      H: "Hydrogen", O: "Oxygen", C: "Carbon", N: "Nitrogen",
      Na: "Sodium", Cl: "Chlorine", K: "Potassium", Mg: "Magnesium",
      Fe: "Iron", Cu: "Copper", Sn: "Tin", Zn: "Zinc",
      Al: "Aluminium", Pb: "Lead", Sb: "Antimony", S: "Sulfur",
      Hg: "Mercury", Au: "Gold"
    };
    return names[sym] || sym;
  },

  addToCrucible: function(sym) {
    this.playSfx('click');
    this.crucibleItems[sym] = (this.crucibleItems[sym] || 0) + 1;
    this.renderCrucibleView();
  },

  renderCrucibleView: function() {
    const box = document.getElementById('crucibleContents');
    const keys = Object.keys(this.crucibleItems);

    if (keys.length === 0) {
      box.innerHTML = `<span class="text-xs text-slate-600 font-mono">Crucible is empty. Click elements below to add!</span>`;
      return;
    }

    box.innerHTML = keys.map(sym => `
      <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 border border-emerald-500/50 shadow-inner font-mono text-sm text-emerald-300 animate-scale-up">
        <span class="font-bold">${sym}</span>
        <span class="text-xs text-amber-400 font-bold">×${this.crucibleItems[sym]}</span>
        <button onclick="ScienceGamesEngine.removeFromCrucible('${sym}')" class="text-slate-500 hover:text-rose-400 ml-1 font-bold text-xs">×</button>
      </div>
    `).join('');
  },

  removeFromCrucible: function(sym) {
    this.playSfx('click');
    if (this.crucibleItems[sym]) {
      this.crucibleItems[sym]--;
      if (this.crucibleItems[sym] <= 0) delete this.crucibleItems[sym];
    }
    this.renderCrucibleView();
  },

  clearCrucible: function() {
    this.playSfx('click');
    this.crucibleItems = {};
    this.renderCrucibleView();
    const fb = document.getElementById('synthesisFeedback');
    if (fb) fb.classList.add('hidden');
  },

  verifySynthesis: function() {
    const ch = this.synthesisChallenges[this.currentSynthesisIdx];
    const fb = document.getElementById('synthesisFeedback');
    fb.classList.remove('hidden');

    // Check matching requirements
    const reqKeys = Object.keys(ch.required);
    const userKeys = Object.keys(this.crucibleItems);

    let isMatch = (reqKeys.length === userKeys.length);
    if (isMatch) {
      for (let k of reqKeys) {
        if (this.crucibleItems[k] !== ch.required[k]) {
          isMatch = false;
          break;
        }
      }
    }

    if (isMatch) {
      this.playSfx('correct');
      this.score += 25;
      this.streak++;
      document.getElementById('gameScoreDisplay').textContent = this.score;

      fb.className = "mt-3 p-3 rounded-xl text-xs font-bold text-center w-full bg-emerald-950/90 text-emerald-300 border border-emerald-600";
      fb.innerHTML = `🎉 SUCCESS! You have successfully forged <strong>${ch.targetName}</strong>! +25 Points!`;

      setTimeout(() => {
        this.currentSynthesisIdx = (this.currentSynthesisIdx + 1) % this.synthesisChallenges.length;
        this.initSynthesisGame();
      }, 1600);
    } else {
      this.playSfx('wrong');
      this.streak = 0;
      fb.className = "mt-3 p-3 rounded-xl text-xs font-bold text-center w-full bg-rose-950/90 text-rose-300 border border-rose-600";
      
      // Construct expected formula string
      const reqStr = Object.keys(ch.required).map(k => `${k}×${ch.required[k]}`).join(' + ');
      fb.innerHTML = `✗ Reaction Failed! Current combination does not form ${ch.targetName}. Needed: [${reqStr}]. Try again!`;
    }
  },

  // -------------------------------------------------------------
  // GAME 2: EMERGENCY FIRST RESPONDER BLITZ
  // -------------------------------------------------------------
  medicScenarios: [
    {
      title: "Cardiac Arrest Emergency",
      prompt: "A male teacher suddenly collapses in the lab with no carotid pulse and agonal breathing. Arrange the correct 3-step action sequence:",
      correctSequence: ["Call 999 & Request AED", "Deliver 30 Sternal Compressions", "Deliver 2 Rescue Breaths"],
      options: ["Deliver 30 Sternal Compressions", "Give Glass of Water", "Call 999 & Request AED", "Deliver 2 Rescue Breaths"]
    },
    {
      title: "Severe Airway Choking in Cafeteria",
      prompt: "A student is clutching his neck with cyanotic lips, unable to speak or cough. What is the immediate life-saving protocol?",
      correctSequence: ["Stand behind victim", "Place fist between navel and sternum", "Deliver quick inward-upward thrusts"],
      options: ["Deliver quick inward-upward thrusts", "Stand behind victim", "Offer a warm drink", "Place fist between navel and sternum"]
    },
    {
      title: "Spilled Mercury Thermometer Hazmat",
      prompt: "A clinical thermometer fractures on the laboratory floor, releasing silver mercury beads. Order the emergency response:",
      correctSequence: ["Evacuate & isolate area", "Sprinkle sulfur powder over droplets", "Alert Fire and Rescue Dept (Bomba)"],
      options: ["Sweep with regular broom", "Sprinkle sulfur powder over droplets", "Evacuate & isolate area", "Alert Fire and Rescue Dept (Bomba)"]
    }
  ],
  currentMedicIdx: 0,
  userMedicSequence: [],

  initMedicGame: function() {
    this.userMedicSequence = [];
    const sc = this.medicScenarios[this.currentMedicIdx];
    const container = document.getElementById('game-medic-mount');
    if (!container) return;

    container.innerHTML = `
      <div class="max-w-2xl mx-auto p-6 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-2xl">
        <div class="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
          <span class="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider">
            🚨 Emergency Responder Blitz · Scenario ${this.currentMedicIdx + 1}
          </span>
          <span class="text-xs font-mono text-emerald-400 font-bold">Score: ${this.score}</span>
        </div>

        <h4 class="text-lg font-black text-slate-100 mb-2">${sc.title}</h4>
        <p class="text-xs text-slate-300 mb-6 leading-relaxed">${sc.prompt}</p>

        <!-- Sequence Tray -->
        <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 mb-4 min-h-[70px]">
          <div class="text-[10px] text-slate-500 uppercase font-bold mb-1">Your Execution Sequence:</div>
          <div id="medicSequenceTray" class="flex flex-wrap gap-2 text-xs font-mono">
            <span class="text-slate-600 text-xs">Click action buttons below in correct chronological order!</span>
          </div>
        </div>

        <!-- Available Action Buttons -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
          ${sc.options.map(opt => `
            <button onclick="ScienceGamesEngine.addMedicAction('${opt.replace(/'/g, "\\'")}')" 
                    class="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold text-left border border-slate-700 transition-all">
              ${opt}
            </button>
          `).join('')}
        </div>

        <div id="medicFeedback" class="hidden mb-4 p-3 rounded-xl text-xs font-bold text-center"></div>

        <div class="flex gap-3">
          <button onclick="ScienceGamesEngine.verifyMedic()" class="flex-1 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-600/30">
            Confirm Protocol Execution
          </button>
          <button onclick="ScienceGamesEngine.resetMedicTray()" class="px-4 py-3 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs uppercase border border-slate-700">
            Reset
          </button>
        </div>
      </div>
    `;
  },

  addMedicAction: function(act) {
    this.playSfx('click');
    if (!this.userMedicSequence.includes(act)) {
      this.userMedicSequence.push(act);
      this.renderMedicTray();
    }
  },

  renderMedicTray: function() {
    const tray = document.getElementById('medicSequenceTray');
    if (this.userMedicSequence.length === 0) {
      tray.innerHTML = `<span class="text-slate-600 text-xs">Click action buttons below in correct chronological order!</span>`;
      return;
    }
    tray.innerHTML = this.userMedicSequence.map((act, i) => `
      <span class="px-2.5 py-1 rounded-lg bg-emerald-950 border border-emerald-600 text-emerald-300 text-xs flex items-center gap-1.5">
        <strong class="text-white">${i + 1}.</strong> ${act}
      </span>
    `).join('');
  },

  resetMedicTray: function() {
    this.userMedicSequence = [];
    this.renderMedicTray();
    const fb = document.getElementById('medicFeedback');
    if (fb) fb.classList.add('hidden');
  },

  verifyMedic: function() {
    const sc = this.medicScenarios[this.currentMedicIdx];
    const fb = document.getElementById('medicFeedback');
    fb.classList.remove('hidden');

    let correct = true;
    if (this.userMedicSequence.length !== sc.correctSequence.length) {
      correct = false;
    } else {
      for (let i = 0; i < sc.correctSequence.length; i++) {
        if (this.userMedicSequence[i] !== sc.correctSequence[i]) {
          correct = false;
          break;
        }
      }
    }

    if (correct) {
      this.playSfx('correct');
      this.score += 30;
      fb.className = "mb-4 p-3 rounded-xl text-xs font-bold text-center bg-emerald-950 text-emerald-300 border border-emerald-600";
      fb.textContent = "✓ PERFECT EXECUTION! Victim stabilized. +30 Points!";
      setTimeout(() => {
        this.currentMedicIdx = (this.currentMedicIdx + 1) % this.medicScenarios.length;
        this.initMedicGame();
      }, 1600);
    } else {
      this.playSfx('wrong');
      fb.className = "mb-4 p-3 rounded-xl text-xs font-bold text-center bg-rose-950 text-rose-300 border border-rose-600";
      fb.textContent = "✗ Protocol Fault! Check proper emergency chronological sequence and retry.";
    }
  },

  // -------------------------------------------------------------
  // GAME ARENA MASTER RENDERER
  // -------------------------------------------------------------
  renderGameArena: function(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="space-y-8">
        <!-- Game Arena Header & Navigation Pills -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-gradient-to-r from-emerald-900 via-slate-900 to-teal-950 text-white rounded-3xl border border-emerald-800/40 shadow-xl">
          <div>
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
              <i data-lucide="gamepad-2" class="w-4 h-4"></i>
              <span>Science Arcade: Gamified Learning</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-100">Play, Build &amp; Master Form 4 Science</h2>
            <p class="text-xs sm:text-sm text-slate-400 mt-1">Combine elements, dispatch emergency treatments, balance reactors, and earn high-score streaks.</p>
          </div>

          <!-- Total Score Card -->
          <div class="flex items-center gap-3 bg-slate-800/90 border border-slate-700 px-5 py-3 rounded-2xl">
            <i data-lucide="trophy" class="w-8 h-8 text-amber-400"></i>
            <div>
              <div class="text-[10px] text-slate-400 uppercase font-bold">Total Arcade Score</div>
              <div id="masterGameScore" class="text-2xl font-black font-mono text-emerald-400">${this.score} pts</div>
            </div>
          </div>
        </div>

        <!-- Game Mode Selection Tabs -->
        <div class="flex gap-2 overflow-x-auto pb-1 custom-scrollbar">
          <button onclick="ScienceGamesEngine.switchGameMode('synthesis')" id="btnGame-synthesis" class="px-5 py-2.5 rounded-2xl text-xs font-bold bg-emerald-600 text-white shadow-md flex items-center gap-2 whitespace-nowrap">
            <i data-lucide="flask-conical" class="w-4 h-4"></i>
            <span>1. Molecule &amp; Alloy Synthesizer</span>
          </button>
          <button onclick="ScienceGamesEngine.switchGameMode('medic')" id="btnGame-medic" class="px-5 py-2.5 rounded-2xl text-xs font-bold bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 flex items-center gap-2 whitespace-nowrap">
            <i data-lucide="heart-pulse" class="w-4 h-4"></i>
            <span>2. Emergency Medic Blitz</span>
          </button>
        </div>

        <!-- Game Mount Containers -->
        <div id="game-synthesis-mount" class="${this.activeGameMode === 'synthesis' ? '' : 'hidden'}"></div>
        <div id="game-medic-mount" class="${this.activeGameMode === 'medic' ? '' : 'hidden'}"></div>
      </div>
    `;

    this.initSynthesisGame();
    this.initMedicGame();
    if (window.lucide) window.lucide.createIcons();
  },

  switchGameMode: function(mode) {
    this.activeGameMode = mode;
    const btnSyn = document.getElementById('btnGame-synthesis');
    const btnMed = document.getElementById('btnGame-medic');
    const mountSyn = document.getElementById('game-synthesis-mount');
    const mountMed = document.getElementById('game-medic-mount');

    if (mode === 'synthesis') {
      btnSyn.className = "px-5 py-2.5 rounded-2xl text-xs font-bold bg-emerald-600 text-white shadow-md flex items-center gap-2 whitespace-nowrap";
      btnMed.className = "px-5 py-2.5 rounded-2xl text-xs font-bold bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 flex items-center gap-2 whitespace-nowrap";
      mountSyn.classList.remove('hidden');
      mountMed.classList.add('hidden');
      this.initSynthesisGame();
    } else {
      btnMed.className = "px-5 py-2.5 rounded-2xl text-xs font-bold bg-emerald-600 text-white shadow-md flex items-center gap-2 whitespace-nowrap";
      btnSyn.className = "px-5 py-2.5 rounded-2xl text-xs font-bold bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 flex items-center gap-2 whitespace-nowrap";
      mountMed.classList.remove('hidden');
      mountSyn.classList.add('hidden');
      this.initMedicGame();
    }
    if (window.lucide) window.lucide.createIcons();
  }
};

// Export to window
if (typeof window !== 'undefined') {
  window.ScienceGamesEngine = ScienceGamesEngine;
}
