// Form 4 Science (KSSM / SPM) - Award-Winning Interactive Simulations Engine
// World-Class Medical, Physical & Chemical Science Simulators with Real-Time Canvas Physics

const SimulationsEngine = {
  // Main dispatch router
  render: function(chapterId, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (this._animFrame) {
      cancelAnimationFrame(this._animFrame);
      this._animFrame = null;
    }
    if (this.fissionState && this.fissionState.animId) {
      cancelAnimationFrame(this.fissionState.animId);
      this.fissionState.animId = null;
    }
    if (this.metroInterval) {
      clearInterval(this.metroInterval);
      this.metroInterval = null;
    }

    switch(chapterId) {
      case 1:
        container.innerHTML = this.getWasteAndPassSim();
        this.initWasteSim();
        break;
      case 2:
        container.innerHTML = this.getCprHospitalSim();
        this.initCprHospitalSim();
        break;
      case 3:
        container.innerHTML = this.getBmiSim();
        this.initBmiSim();
        break;
      case 4:
        container.innerHTML = this.getCarbonFootprintSim();
        this.initCarbonSim();
        break;
      case 5:
        container.innerHTML = this.getPunnettSquareSim();
        this.initPunnettSim();
        break;
      case 6:
        container.innerHTML = this.getArmBiomechanicsSim();
        this.initArmBiomechanicsSim();
        break;
      case 7:
        container.innerHTML = this.getEndocrineHormoneSim();
        this.initHormoneSim();
        break;
      case 8:
        container.innerHTML = this.getBohrOrbitAtomSim();
        this.initBohrOrbitAtomSim();
        break;
      case 9:
        container.innerHTML = this.getAlloyAndRubberSim();
        this.initAlloySim();
        break;
      case 10:
        container.innerHTML = this.getAntioxidantSim();
        this.initAntioxidantSim();
        break;
      case 11:
        container.innerHTML = this.getMotionAndFreeFallSim();
        this.initMotionSim();
        break;
      case 12:
        container.innerHTML = this.getNuclearFissionCanvasSim();
        this.initNuclearFissionCanvasSim();
        break;
      default:
        container.innerHTML = `<p class="text-slate-500 text-center py-8">Select a chapter to explore its simulation.</p>`;
    }
    if (window.lucide) window.lucide.createIcons();
  },

  // -------------------------------------------------------------
  // CHAPTER 1: WASTE CLASSIFICATION & PASS EXTINGUISHER
  // -------------------------------------------------------------
  getWasteAndPassSim: function() {
    return `
      <div class="space-y-8 max-w-4xl mx-auto">
        <div class="p-6 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-xl">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
              <i data-lucide="trash-2" class="w-5 h-5"></i>
            </div>
            <div>
              <h4 class="font-black text-slate-100 text-base">Biohazard Waste Classification Sorter</h4>
              <p class="text-xs text-slate-400">Classify medical and biological laboratory wastes into KSSM Categories (A, B, C, or D).</p>
            </div>
          </div>

          <div class="my-4 p-4 bg-slate-950 rounded-2xl border border-slate-800 text-center">
            <span class="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Item to Dispose</span>
            <div id="wasteItemName" class="text-lg font-black text-amber-300">Used Syringe Needles &amp; Scalpel Blades</div>
            <div id="wasteItemFeedback" class="text-xs font-semibold text-slate-400 mt-1">Select the correct disposal protocol:</div>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <button onclick="SimulationsEngine.checkWaste('A')" class="p-3 rounded-xl bg-amber-950/60 hover:bg-amber-900/60 border border-amber-700/60 text-left transition-all">
              <div class="font-bold text-xs text-amber-300">Category A</div>
              <div class="text-[11px] text-amber-400 mt-0.5">Sharps (Puncture-proof yellow bins)</div>
            </button>
            <button onclick="SimulationsEngine.checkWaste('B')" class="p-3 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-700/60 text-left transition-all">
              <div class="font-bold text-xs text-emerald-300">Category B</div>
              <div class="text-[11px] text-emerald-400 mt-0.5">Non-Sharps (Autoclave biohazard bag)</div>
            </button>
            <button onclick="SimulationsEngine.checkWaste('C')" class="p-3 rounded-xl bg-rose-950/60 hover:bg-rose-900/60 border border-rose-700/60 text-left transition-all">
              <div class="font-bold text-xs text-rose-300">Category C</div>
              <div class="text-[11px] text-rose-400 mt-0.5">Animal Tissue (Wrap &amp; Freeze -20°C)</div>
            </button>
            <button onclick="SimulationsEngine.checkWaste('D')" class="p-3 rounded-xl bg-sky-950/60 hover:bg-sky-900/60 border border-sky-700/60 text-left transition-all">
              <div class="font-bold text-xs text-sky-300">Category D</div>
              <div class="text-[11px] text-sky-400 mt-0.5">Liquids (Chemical decontaminate)</div>
            </button>
          </div>
        </div>
      </div>
    `;
  },
  wasteItems: [
    { name: "Used Syringe Needles & Scalpel Blades", cat: "A", reason: "Sharps must be disposed in puncture-proof yellow bins and autoclaved." },
    { name: "Contaminated Latex Gloves & Plastic Petri Dishes", cat: "B", reason: "Non-sharp solid waste goes into biohazard bags and is autoclaved at 121°C." },
    { name: "Dissected Frog Carcass & Biological Organs", cat: "C", reason: "Animal tissue must be wrapped in absorbent sheets and frozen at -20°C before incineration." },
    { name: "Inoculated Bacterial Broth & Blood Serum", cat: "D", reason: "Liquid biological waste must be decontaminated before safe disposal." }
  ],
  wasteIdx: 0,
  initWasteSim: function() {
    this.wasteIdx = 0;
  },
  checkWaste: function(selected) {
    const item = this.wasteItems[this.wasteIdx];
    const feedback = document.getElementById('wasteItemFeedback');
    if (selected === item.cat) {
      if (window.ScienceGamesEngine) window.ScienceGamesEngine.playSfx('correct');
      feedback.innerHTML = `<span class="text-emerald-400 font-bold">✓ Correct!</span> ${item.reason}`;
      setTimeout(() => {
        this.wasteIdx = (this.wasteIdx + 1) % this.wasteItems.length;
        document.getElementById('wasteItemName').textContent = this.wasteItems[this.wasteIdx].name;
        feedback.textContent = "Select the correct disposal protocol:";
      }, 1500);
    } else {
      if (window.ScienceGamesEngine) window.ScienceGamesEngine.playSfx('wrong');
      feedback.innerHTML = `<span class="text-rose-400 font-bold">✗ Incorrect.</span> Try again. ${item.name} belongs to Category ${item.cat}.`;
    }
  },

  // -------------------------------------------------------------
  // CHAPTER 2: CPR HOSPITAL-GRADE SIMULATOR (Already defined above)
  // -------------------------------------------------------------
  getCprHospitalSim: function() {
    return `
      <div class="max-w-4xl mx-auto p-6 sm:p-8 bg-slate-950 text-white rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-3 mb-6">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-rose-600/20 text-rose-400 border border-rose-500/30 flex items-center justify-center font-bold">
              <i data-lucide="heart-pulse" class="w-6 h-6 animate-pulse"></i>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h4 class="font-black text-lg text-slate-100">Intensive Cardiac Care &amp; CPR Simulator</h4>
                <span class="text-[10px] font-mono bg-rose-500/20 text-rose-300 border border-rose-500/30 px-2 py-0.5 rounded font-bold uppercase">Clinical Manikin Mode</span>
              </div>
              <p class="text-xs text-slate-400">Real-time ECG oscilloscope, cerebral perfusion index, and AED defibrillator protocol.</p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="SimulationsEngine.toggleCprMetronome()" id="cprMetroToggle" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5 transition-all">
              <i data-lucide="volume-2" class="w-4 h-4"></i>
              <span>Metronome: 110 BPM</span>
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6 items-center">
          <div class="lg:col-span-8 bg-black/90 p-4 rounded-2xl border border-slate-800 shadow-inner relative">
            <div class="flex items-center justify-between text-[11px] font-mono text-emerald-400 mb-2">
              <span class="flex items-center gap-1">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                LEAD II · ECG TRACE (mV)
              </span>
              <span id="patientStatusPill" class="text-rose-400 font-bold bg-rose-950/60 px-2 py-0.5 rounded border border-rose-800">
                VENTRICULAR FIBRILLATION (NO PULSE)
              </span>
            </div>
            
            <canvas id="ecgCanvas" width="540" height="130" class="w-full h-32 bg-slate-950 rounded-lg border border-slate-900"></canvas>

            <div class="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-slate-900 text-center font-mono">
              <div>
                <div class="text-[9px] text-slate-500 uppercase">Heart Rate</div>
                <div id="hudHr" class="text-xl font-black text-rose-400">0 <span class="text-xs font-normal text-slate-500">BPM</span></div>
              </div>
              <div>
                <div class="text-[9px] text-slate-500 uppercase">SpO₂ Oxygen</div>
                <div id="hudSpo2" class="text-xl font-black text-sky-400">62 <span class="text-xs font-normal text-slate-500">%</span></div>
              </div>
              <div>
                <div class="text-[9px] text-slate-500 uppercase">Cerebral Perfusion</div>
                <div id="hudPerfusion" class="text-xl font-black text-amber-400">14 <span class="text-xs font-normal text-slate-500">%</span></div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-4 space-y-4">
            <div class="p-4 rounded-2xl bg-slate-900 border border-slate-800">
              <div class="flex justify-between text-xs font-mono mb-1">
                <span class="text-slate-400 font-bold">Compression Depth</span>
                <span id="depthFeedback" class="text-amber-400 font-bold">5.4 cm (Optimal)</span>
              </div>
              <div class="w-full bg-slate-800 h-3 rounded-full overflow-hidden relative">
                <div id="depthBar" class="h-full bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full transition-all duration-100" style="width: 85%;"></div>
              </div>
              <div class="flex justify-between text-[9px] text-slate-500 font-mono mt-1">
                <span>0 cm</span>
                <span class="text-emerald-400 font-bold">Target: 5.0 - 6.0 cm</span>
                <span>8 cm</span>
              </div>
            </div>

            <div class="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <div class="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">Estimated Patient Survival Rate</div>
              <div id="survivalRate" class="text-3xl font-black font-mono text-emerald-400">45%</div>
              <div class="text-[10px] text-slate-400 mt-1">Maintained by continuous sternal perfusion</div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-12 gap-4">
          <div class="sm:col-span-8">
            <button id="sternumPressBtn" onclick="SimulationsEngine.hospitalCompress()" 
                    class="w-full py-4 rounded-2xl bg-gradient-to-r from-rose-600 via-rose-500 to-red-600 hover:from-rose-500 hover:to-red-500 active:scale-95 text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-rose-600/30 flex items-center justify-center gap-3 transition-all touch-manipulation select-none cursor-pointer">
              <i data-lucide="heart" class="w-5 h-5 text-white animate-ping"></i>
              <span>COMPRESS STERNUM (PUSH 5-6 CM DOWN)</span>
              <span id="cprCycleCount" class="font-mono bg-black/30 px-3 py-1 rounded-lg text-xs">0 / 30</span>
            </button>
            <div class="flex items-center justify-between text-xs text-slate-400 pt-2 px-1">
              <span>Cadence Speed: <strong id="cadenceReadout" class="text-emerald-400 font-mono">110 BPM (Target: 100-120)</strong></span>
              <button onclick="SimulationsEngine.deliverRescueBreath()" class="text-sky-400 hover:text-sky-300 font-bold flex items-center gap-1">
                <i data-lucide="wind" class="w-3.5 h-3.5"></i>
                <span>Deliver 2 Breaths</span>
              </button>
            </div>
          </div>

          <div class="sm:col-span-4">
            <button onclick="SimulationsEngine.chargeAndShockAed()" id="btnAedShock" 
                    class="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 active:scale-95 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 transition-all">
              <i data-lucide="zap" class="w-4 h-4"></i>
              <span>AED: DELIVER 200J SHOCK</span>
            </button>
            <div class="text-center text-[10px] text-slate-500 mt-2 font-mono">Automated External Defibrillator</div>
          </div>
        </div>
      </div>
    `;
  },
  cprHospitalCount: 0,
  cprPerfusion: 14,
  cprSpo2: 62,
  cprSurvival: 45,
  isSinusRhythm: false,
  _animFrame: null,

  initCprHospitalSim: function() {
    this.cprHospitalCount = 0;
    this.cprPerfusion = 14;
    this.cprSpo2 = 62;
    this.cprSurvival = 45;
    this.isSinusRhythm = false;
    this.startEcgOscilloscope();
    this.startCprMetronome();
  },

  startEcgOscilloscope: function() {
    const canvas = document.getElementById('ecgCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const midY = height / 2;

    let x = 0;
    ctx.fillStyle = '#020617';
    ctx.fillRect(0, 0, width, height);

    const step = () => {
      ctx.fillStyle = '#020617';
      ctx.fillRect(x, 0, 15, height);

      let y = midY;
      const t = (x % 140);

      if (this.isSinusRhythm) {
        if (t >= 20 && t < 30) {
          y = midY - 6 * Math.sin((t - 20) / 10 * Math.PI);
        } else if (t >= 40 && t < 45) {
          y = midY + 8;
        } else if (t >= 45 && t < 55) {
          y = midY - 50;
        } else if (t >= 55 && t < 60) {
          y = midY + 14;
        } else if (t >= 75 && t < 95) {
          y = midY - 14 * Math.sin((t - 75) / 20 * Math.PI);
        }
      } else {
        y = midY + (Math.sin(x * 0.12) * 16 + Math.cos(x * 0.28) * 12 + (Math.random() - 0.5) * 8);
      }

      ctx.beginPath();
      ctx.strokeStyle = this.isSinusRhythm ? '#34d399' : '#f43f5e';
      ctx.lineWidth = 2.2;
      ctx.shadowColor = this.isSinusRhythm ? '#34d399' : '#f43f5e';
      ctx.shadowBlur = 8;
      ctx.moveTo(x > 0 ? x - 1 : 0, midY);
      ctx.lineTo(x, y);
      ctx.stroke();

      x = (x + 2) % width;
      this._animFrame = requestAnimationFrame(step);
    };

    if (this._animFrame) cancelAnimationFrame(this._animFrame);
    this._animFrame = requestAnimationFrame(step);
  },

  hospitalCompress: function() {
    this.cprHospitalCount++;
    if (window.ScienceGamesEngine) window.ScienceGamesEngine.playSfx('click');

    const depth = (Math.random() * 0.8 + 5.0).toFixed(1);
    const depthPct = Math.min(100, Math.round((depth / 6.0) * 100));
    
    const depthBar = document.getElementById('depthBar');
    const depthFeedback = document.getElementById('depthFeedback');
    if (depthBar) depthBar.style.width = `${depthPct}%`;
    if (depthFeedback) depthFeedback.textContent = `${depth} cm (Optimal Depth)`;

    this.cprPerfusion = Math.min(95, this.cprPerfusion + 3);
    this.cprSpo2 = Math.min(99, this.cprSpo2 + 1);
    this.cprSurvival = Math.min(98, this.cprSurvival + 2);

    document.getElementById('hudPerfusion').innerHTML = `${this.cprPerfusion} <span class="text-xs font-normal text-slate-500">%</span>`;
    document.getElementById('hudSpo2').innerHTML = `${this.cprSpo2} <span class="text-xs font-normal text-slate-500">%</span>`;
    document.getElementById('survivalRate').textContent = `${this.cprSurvival}%`;

    const cycleCountEl = document.getElementById('cprCycleCount');
    if (cycleCountEl) cycleCountEl.textContent = `${this.cprHospitalCount} / 30`;

    if (this.cprHospitalCount === 30) {
      if (window.VisualFx) {
        window.VisualFx.showAchievementToast("First Responder Cycle Complete", "Delivered 30 sternal compressions. Now administer 2 rescue breaths!", "🫀");
      }
      setTimeout(() => {
        alert("30 Sternal Compressions Completed! Now deliver 2 rescue breaths to oxygenate the lungs.");
        this.cprHospitalCount = 0;
        if (cycleCountEl) cycleCountEl.textContent = `0 / 30`;
      }, 200);
    }
  },

  deliverRescueBreath: function() {
    if (window.ScienceGamesEngine) window.ScienceGamesEngine.playSfx('correct');
    this.cprSpo2 = Math.min(99, this.cprSpo2 + 5);
    document.getElementById('hudSpo2').innerHTML = `${this.cprSpo2} <span class="text-xs font-normal text-slate-500">%</span>`;
    alert("Delivered 2 rescue breaths. Chest rise confirmed! Oxygen saturation elevated.");
  },

  chargeAndShockAed: function() {
    const btn = document.getElementById('btnAedShock');
    btn.disabled = true;
    btn.innerHTML = `<i data-lucide="loader" class="w-4 h-4 animate-spin"></i><span>CHARGING CAPACITOR (200J)...</span>`;
    if (window.lucide) window.lucide.createIcons();

    if (window.ScienceGamesEngine) window.ScienceGamesEngine.playSfx('click');

    setTimeout(() => {
      btn.innerHTML = `<span>STAND CLEAR! SHOCK DELIVERED ⚡</span>`;
      btn.className = "w-full py-4 rounded-2xl bg-red-600 text-white font-black text-xs uppercase animate-pulse shadow-2xl";
      
      document.body.style.filter = "invert(0.3)";
      setTimeout(() => document.body.style.filter = "none", 150);

      this.isSinusRhythm = true;
      document.getElementById('hudHr').innerHTML = `74 <span class="text-xs font-normal text-slate-500">BPM</span>`;
      document.getElementById('hudPerfusion').innerHTML = `98 <span class="text-xs font-normal text-slate-500">%</span>`;
      document.getElementById('survivalRate').textContent = "98%";
      const pill = document.getElementById('patientStatusPill');
      pill.textContent = "NORMAL SINUS RHYTHM RESTORED (PULSE PRESENT)";
      pill.className = "text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800";

      if (window.VisualFx) {
        window.VisualFx.triggerConfetti();
        window.VisualFx.showAchievementToast("Cardiac Rhythm Restored!", "AED defibrillation successfully converted VFib into Normal Sinus Rhythm!", "⚡");
      }

      setTimeout(() => {
        btn.disabled = false;
        btn.className = "w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs uppercase tracking-wider";
        btn.innerHTML = `<i data-lucide="zap" class="w-4 h-4"></i><span>AED: PATIENT STABLE (DEFIB READY)</span>`;
        if (window.lucide) window.lucide.createIcons();
      }, 3000);
    }, 1800);
  },

  metroInterval: null,
  toggleCprMetronome: function() {
    if (this.metroInterval) {
      clearInterval(this.metroInterval);
      this.metroInterval = null;
      document.getElementById('cprMetroToggle').innerHTML = `<i data-lucide="volume-x" class="w-4 h-4"></i><span>Metronome: OFF</span>`;
    } else {
      this.startCprMetronome();
      document.getElementById('cprMetroToggle').innerHTML = `<i data-lucide="volume-2" class="w-4 h-4"></i><span>Metronome: 110 BPM</span>`;
    }
    if (window.lucide) window.lucide.createIcons();
  },
  startCprMetronome: function() {
    if (this.metroInterval) clearInterval(this.metroInterval);
    this.metroInterval = setInterval(() => {
      this.playBeep();
    }, 545);
  },
  playBeep: function() {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.08);
      osc.connect(gain); gain.connect(audioCtx.destination);
      osc.start(); osc.stop(audioCtx.currentTime + 0.09);
    } catch(e) {}
  },

  // -------------------------------------------------------------
  // CHAPTER 3: DYNAMIC BMI HEALTH ANALYZER
  // -------------------------------------------------------------
  getBmiSim: function() {
    return `
      <div class="max-w-2xl mx-auto p-6 sm:p-8 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-xl">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
            <i data-lucide="scale" class="w-6 h-6"></i>
          </div>
          <div>
            <h4 class="font-black text-lg text-slate-100">Health Vital Parameters &amp; BMI Analyzer</h4>
            <p class="text-xs text-slate-400">Calculate BMI, assess cardiovascular risk, and view medical recommendations.</p>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div class="p-4 bg-slate-950 rounded-2xl border border-slate-800">
            <label class="block text-xs font-bold text-slate-300 mb-1">Body Mass: <span id="bmiMassLabel" class="text-emerald-400 font-mono">65 kg</span></label>
            <input type="range" id="bmiMassInput" min="30" max="150" value="65" oninput="SimulationsEngine.updateBmiLive()" class="w-full accent-emerald-500">
          </div>
          <div class="p-4 bg-slate-950 rounded-2xl border border-slate-800">
            <label class="block text-xs font-bold text-slate-300 mb-1">Height: <span id="bmiHeightLabel" class="text-emerald-400 font-mono">170 cm</span></label>
            <input type="range" id="bmiHeightInput" min="120" max="210" value="170" oninput="SimulationsEngine.updateBmiLive()" class="w-full accent-emerald-500">
          </div>
        </div>

        <div class="p-6 rounded-2xl bg-slate-950 border border-emerald-500/30 text-center mb-6">
          <div class="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Calculated Body Mass Index</div>
          <div id="liveBmiVal" class="text-5xl font-black text-emerald-400 font-mono my-2">22.49</div>
          <div id="liveBmiBadge" class="inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
            Optimal / Normal Weight (18.5 – 24.9)
          </div>
          <p id="liveBmiAdvice" class="text-xs text-slate-400 mt-3 max-w-md mx-auto">
            Lowest statistical risk of chronic cardiovascular complications, Type 2 diabetes mellitus, and osteoarthritis.
          </p>
        </div>
      </div>
    `;
  },
  initBmiSim: function() {
    this.updateBmiLive();
  },
  updateBmiLive: function() {
    const mass = parseFloat(document.getElementById('bmiMassInput').value);
    const heightCm = parseFloat(document.getElementById('bmiHeightInput').value);
    document.getElementById('bmiMassLabel').textContent = `${mass} kg`;
    document.getElementById('bmiHeightLabel').textContent = `${heightCm} cm (${(heightCm/100).toFixed(2)} m)`;

    const heightM = heightCm / 100;
    const bmi = (mass / (heightM * heightM)).toFixed(2);
    document.getElementById('liveBmiVal').textContent = bmi;

    const badge = document.getElementById('liveBmiBadge');
    const advice = document.getElementById('liveBmiAdvice');

    if (bmi < 18.5) {
      badge.textContent = "Underweight (< 18.5 kg/m²)";
      badge.className = "inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40";
      advice.textContent = "Higher risk of nutritional anemia, osteoporosis, and reduced immunity.";
    } else if (bmi <= 24.9) {
      badge.textContent = "Optimal / Normal Weight (18.5 – 24.9 kg/m²)";
      badge.className = "inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40";
      advice.textContent = "Ideal metabolic index with lowest risk of cardiovascular conditions.";
    } else if (bmi <= 29.9) {
      badge.textContent = "Overweight (25.0 – 29.9 kg/m²)";
      badge.className = "inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-orange-500/20 text-orange-300 border border-orange-500/40";
      advice.textContent = "Moderate risk of hypertension, dyslipidemia, and arterial plaque development.";
    } else {
      badge.textContent = "Obese (≥ 30.0 kg/m²)";
      badge.className = "inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40";
      advice.textContent = "High clinical risk of Type 2 diabetes mellitus, coronary atherosclerosis, and osteoarthritis.";
    }
  },

  // -------------------------------------------------------------
  // CHAPTER 4: CARBON FOOTPRINT
  // -------------------------------------------------------------
  getCarbonFootprintSim: function() {
    return `
      <div class="max-w-2xl mx-auto p-6 sm:p-8 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-xl">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
            <i data-lucide="leaf" class="w-6 h-6"></i>
          </div>
          <div>
            <h4 class="font-black text-lg text-slate-100">Carbon Footprint &amp; Green Energy Transition</h4>
            <p class="text-xs text-slate-400">Model domestic monthly carbon dioxide emissions ($kg\\text{ CO}_2$) and simulate solar offsets.</p>
          </div>
        </div>

        <div class="space-y-4 mb-6">
          <div>
            <div class="flex justify-between text-xs font-bold text-slate-300 mb-1">
              <span>Electricity Usage (kWh / month)</span>
              <span id="kwhVal" class="text-emerald-400 font-mono">350 kWh</span>
            </div>
            <input type="range" id="carbonKwh" min="50" max="1200" value="350" oninput="SimulationsEngine.updateCarbonLive()" class="w-full accent-emerald-500">
          </div>

          <div>
            <div class="flex justify-between text-xs font-bold text-slate-300 mb-1">
              <span>Vehicle Petrol (km / month)</span>
              <span id="petrolVal" class="text-emerald-400 font-mono">600 km</span>
            </div>
            <input type="range" id="carbonPetrol" min="0" max="3000" value="600" oninput="SimulationsEngine.updateCarbonLive()" class="w-full accent-emerald-500">
          </div>

          <div class="flex items-center justify-between p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs">
            <span class="font-bold text-slate-300">Equip Rooftop Solar PV Panels (75% offset)</span>
            <input type="checkbox" id="carbonSolarToggle" onchange="SimulationsEngine.updateCarbonLive()" class="w-4 h-4 accent-emerald-500">
          </div>
        </div>

        <div class="p-6 bg-slate-950 rounded-2xl border border-slate-800 text-center">
          <div class="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Estimated Monthly Carbon Footprint</div>
          <div id="totalCarbonKg" class="text-4xl font-black text-emerald-400 font-mono my-2">374 kg CO₂e</div>
          <div class="text-xs text-slate-400">
            Trees required to sequester emissions: <span id="treesNeeded" class="text-amber-400 font-bold font-mono">19 Trees</span>
          </div>
        </div>
      </div>
    `;
  },
  initCarbonSim: function() {
    this.updateCarbonLive();
  },
  updateCarbonLive: function() {
    const kwh = parseFloat(document.getElementById('carbonKwh').value);
    const km = parseFloat(document.getElementById('carbonPetrol').value);
    const hasSolar = document.getElementById('carbonSolarToggle').checked;

    document.getElementById('kwhVal').textContent = `${kwh} kWh`;
    document.getElementById('petrolVal').textContent = `${km} km`;

    let elecEmissions = kwh * 0.694;
    if (hasSolar) elecEmissions *= 0.25;
    const transportEmissions = km * 0.17;
    const total = Math.round(elecEmissions + transportEmissions);
    const trees = Math.ceil(total / 20);

    document.getElementById('totalCarbonKg').textContent = `${total} kg CO₂e`;
    document.getElementById('treesNeeded').textContent = `${trees} Trees`;
  },

  // -------------------------------------------------------------
  // CHAPTER 5: PUNNETT SQUARE CROSS
  // -------------------------------------------------------------
  getPunnettSquareSim: function() {
    return `
      <div class="max-w-2xl mx-auto p-6 sm:p-8 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-xl">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
            <i data-lucide="dna" class="w-6 h-6"></i>
          </div>
          <div>
            <h4 class="font-black text-lg text-slate-100">Mendelian Punnett Square Monohybrid Cross</h4>
            <p class="text-xs text-slate-400">Select parental genotypes to compute offspring ratios automatically.</p>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 mb-6">
          <div class="p-4 bg-slate-950 rounded-2xl border border-slate-800">
            <label class="block text-xs font-bold text-slate-300 mb-2">Father (Male)</label>
            <select id="parentMale" onchange="SimulationsEngine.computePunnett()" class="w-full p-2.5 rounded-xl border border-slate-700 bg-slate-900 text-xs font-bold font-mono text-slate-100">
              <option value="Tt" selected>Heterozygous Tall (Tt)</option>
              <option value="TT">Homozygous Dominant Tall (TT)</option>
              <option value="tt">Homozygous Recessive Dwarf (tt)</option>
            </select>
          </div>
          <div class="p-4 bg-slate-950 rounded-2xl border border-slate-800">
            <label class="block text-xs font-bold text-slate-300 mb-2">Mother (Female)</label>
            <select id="parentFemale" onchange="SimulationsEngine.computePunnett()" class="w-full p-2.5 rounded-xl border border-slate-700 bg-slate-900 text-xs font-bold font-mono text-slate-100">
              <option value="Tt" selected>Heterozygous Tall (Tt)</option>
              <option value="TT">Homozygous Dominant Tall (TT)</option>
              <option value="tt">Homozygous Recessive Dwarf (tt)</option>
            </select>
          </div>
        </div>

        <div class="max-w-xs mx-auto mb-6 bg-slate-950 p-4 rounded-2xl border border-slate-800">
          <div class="grid grid-cols-3 gap-2 text-center font-mono font-bold text-sm">
            <div class="p-2 text-slate-500">♀ \\ ♂</div>
            <div id="alleleM1" class="p-2 bg-emerald-950 text-emerald-300 rounded-lg">T</div>
            <div id="alleleM2" class="p-2 bg-emerald-950 text-emerald-300 rounded-lg">t</div>

            <div id="alleleF1" class="p-2 bg-teal-950 text-teal-300 rounded-lg">T</div>
            <div id="box11" class="p-3 bg-slate-900 border border-emerald-500/50 rounded-lg text-emerald-300">TT</div>
            <div id="box12" class="p-3 bg-slate-900 border border-emerald-500/50 rounded-lg text-emerald-300">Tt</div>

            <div id="alleleF2" class="p-2 bg-teal-950 text-teal-300 rounded-lg">t</div>
            <div id="box21" class="p-3 bg-slate-900 border border-emerald-500/50 rounded-lg text-emerald-300">Tt</div>
            <div id="box22" class="p-3 bg-slate-900 border border-amber-500/50 rounded-lg text-amber-300">tt</div>
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-slate-950 text-center border border-slate-800">
          <div class="text-[10px] uppercase font-bold text-slate-500">Phenotypic Ratio</div>
          <div id="punnettPhenoRatio" class="text-xl font-bold font-mono text-emerald-400 my-1">3 Tall : 1 Dwarf (75% Tall, 25% Dwarf)</div>
          <div class="text-xs text-slate-400">
            Genotypic Ratio: <span id="punnettGenoRatio" class="text-slate-200 font-mono">1 TT : 2 Tt : 1 tt</span>
          </div>
        </div>
      </div>
    `;
  },
  initPunnettSim: function() {
    this.computePunnett();
  },
  computePunnett: function() {
    const pM = document.getElementById('parentMale').value;
    const pF = document.getElementById('parentFemale').value;

    const m1 = pM[0], m2 = pM[1];
    const f1 = pF[0], f2 = pF[1];

    document.getElementById('alleleM1').textContent = m1;
    document.getElementById('alleleM2').textContent = m2;
    document.getElementById('alleleF1').textContent = f1;
    document.getElementById('alleleF2').textContent = f2;

    const sortGenotype = (a, b) => {
      if (a === 'T' || b === 'T') {
        if (a === 'T' && b === 't') return 'Tt';
        if (a === 't' && b === 'T') return 'Tt';
      }
      return a + b;
    };

    const g11 = sortGenotype(f1, m1);
    const g12 = sortGenotype(f1, m2);
    const g21 = sortGenotype(f2, m1);
    const g22 = sortGenotype(f2, m2);

    document.getElementById('box11').textContent = g11;
    document.getElementById('box12').textContent = g12;
    document.getElementById('box21').textContent = g21;
    document.getElementById('box22').textContent = g22;

    const offspring = [g11, g12, g21, g22];
    let tallCount = 0, dwarfCount = 0;
    let ttCount = 0, ttMixCount = 0, dwarfGenoCount = 0;

    offspring.forEach(g => {
      if (g.includes('T')) tallCount++;
      else dwarfCount++;

      if (g === 'TT') ttCount++;
      else if (g === 'Tt') ttMixCount++;
      else if (g === 'tt') dwarfGenoCount++;
    });

    document.getElementById('punnettPhenoRatio').textContent = 
      `${tallCount} Tall : ${dwarfCount} Dwarf (${tallCount*25}% Tall, ${dwarfCount*25}% Dwarf)`;
    document.getElementById('punnettGenoRatio').textContent = 
      `${ttCount} TT : ${ttMixCount} Tt : ${dwarfGenoCount} tt`;
  },

  // -------------------------------------------------------------
  // CHAPTER 6: ANTAGONISTIC MUSCLES & ARM BIOMECHANICS
  // -------------------------------------------------------------
  getArmBiomechanicsSim: function() {
    return `
      <div class="max-w-2xl mx-auto p-4 sm:p-8 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-xl space-y-6">
        <div class="flex items-center gap-3">
          <div class="w-10 sm:w-12 h-10 sm:h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
            <i data-lucide="bone" class="w-5 sm:w-6 h-5 sm:h-6"></i>
          </div>
          <div>
            <h4 class="font-black text-base sm:text-lg text-slate-100">Antagonistic Muscle Biomechanics Simulator</h4>
            <p class="text-xs text-slate-400">Flex and extend the elbow hinge joint to observe reciprocal Biceps &amp; Triceps action.</p>
          </div>
        </div>

        <div class="p-4 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800">
          <div class="flex items-center justify-between text-xs font-bold text-slate-300 mb-2">
            <span>Elbow Joint Flexion Angle:</span>
            <span id="armFlexAngleLabel" class="text-emerald-400 font-mono text-sm">70° (Flexion)</span>
          </div>
          <input type="range" id="armAngleSlider" min="25" max="155" value="70" oninput="SimulationsEngine.updateArmAngle(this.value)" class="w-full accent-emerald-500 h-8 touch-manipulation cursor-pointer">
          <div class="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
            <span>25° (Maximum Flexion)</span>
            <span>90° (Right Angle)</span>
            <span>155° (Full Extension)</span>
          </div>
        </div>

        <!-- Muscle Status Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div id="bicepsStatusBox" class="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-600/50 transition-all">
            <div class="flex items-center justify-between mb-1">
              <span class="text-xs font-extrabold uppercase tracking-wider text-emerald-400">Biceps Brachii</span>
              <span id="bicepsStatePill" class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">CONTRACTED</span>
            </div>
            <p id="bicepsStateDesc" class="text-xs text-slate-300 mt-1">Shortens and thickens, pulling on the radius bone via tendon to bend the forearm upwards.</p>
          </div>

          <div id="tricepsStatusBox" class="p-4 rounded-2xl bg-slate-950 border border-slate-800 transition-all">
            <div class="flex items-center justify-between mb-1">
              <span class="text-xs font-extrabold uppercase tracking-wider text-slate-400">Triceps Brachii</span>
              <span id="tricepsStatePill" class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-bold">RELAXED</span>
            </div>
            <p id="tricepsStateDesc" class="text-xs text-slate-400 mt-1">Elongates and thins, yielding passive tension as forearm bends.</p>
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 text-center leading-relaxed">
          <strong class="text-slate-200">KSSM Key Law:</strong> Skeletal muscles only exert pulling forces by contracting; they cannot push. Therefore, locomotion requires <span class="text-emerald-400 font-bold">antagonistic pairs</span> working in opposition.
        </div>
      </div>
    `;
  },
  initArmBiomechanicsSim: function() {
    this.updateArmAngle(70);
  },
  updateArmAngle: function(deg) {
    const val = parseInt(deg);
    const label = document.getElementById('armFlexAngleLabel');
    const bBox = document.getElementById('bicepsStatusBox');
    const bPill = document.getElementById('bicepsStatePill');
    const bDesc = document.getElementById('bicepsStateDesc');
    const tBox = document.getElementById('tricepsStatusBox');
    const tPill = document.getElementById('tricepsStatePill');
    const tDesc = document.getElementById('tricepsStateDesc');

    if (!label) return;

    if (val < 90) {
      label.textContent = `${val}° (Arm Flexion)`;
      label.className = "text-emerald-400 font-mono text-sm";
      bBox.className = "p-4 rounded-2xl bg-emerald-950/70 border border-emerald-500 transition-all";
      bPill.textContent = "CONTRACTS & BULGES";
      bPill.className = "text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold";
      bDesc.textContent = "Contracts (shortens & fattens), pulling the tendon on the radius bone to bend the forearm upwards.";

      tBox.className = "p-4 rounded-2xl bg-slate-950 border border-slate-800 transition-all";
      tPill.textContent = "RELAXES";
      tPill.className = "text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-bold";
      tDesc.textContent = "Relaxes (lengthens & thins) allowing elbow flexion.";
    } else {
      label.textContent = `${val}° (Arm Extension)`;
      label.className = "text-sky-400 font-mono text-sm";
      tBox.className = "p-4 rounded-2xl bg-sky-950/70 border border-sky-500 transition-all";
      tPill.textContent = "CONTRACTS & PULLS";
      tPill.className = "text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-bold";
      tDesc.textContent = "Contracts (shortens), pulling the ulna bone downwards via tendon to straighten the arm.";

      bBox.className = "p-4 rounded-2xl bg-slate-950 border border-slate-800 transition-all";
      bPill.textContent = "RELAXES";
      bPill.className = "text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-bold";
      bDesc.textContent = "Relaxes (lengthens & thins) allowing elbow extension.";
    }
  },

  // -------------------------------------------------------------
  // CHAPTER 7: ENDOCRINE SYSTEM
  // -------------------------------------------------------------
  getEndocrineHormoneSim: function() {
    return `
      <div class="max-w-2xl mx-auto p-6 sm:p-8 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-xl">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
            <i data-lucide="activity" class="w-6 h-6"></i>
          </div>
          <div>
            <h4 class="font-black text-lg text-slate-100">Endocrine Gland &amp; Hormonal Pathology Explorer</h4>
            <p class="text-xs text-slate-400">Select an endocrine gland to analyze its hormones and deficiency disorders.</p>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
          <button onclick="SimulationsEngine.setGland('pancreas')" id="btnGland-pancreas" class="p-3 rounded-xl bg-emerald-600 text-white font-bold text-xs text-left">1. Pancreas</button>
          <button onclick="SimulationsEngine.setGland('thyroid')" id="btnGland-thyroid" class="p-3 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs text-left">2. Thyroid</button>
          <button onclick="SimulationsEngine.setGland('pituitary')" id="btnGland-pituitary" class="p-3 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs text-left">3. Pituitary</button>
          <button onclick="SimulationsEngine.setGland('adrenal')" id="btnGland-adrenal" class="p-3 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs text-left">4. Adrenal</button>
        </div>

        <div id="glandDetailCard" class="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3"></div>
      </div>
    `;
  },
  glands: {
    pancreas: {
      name: "Pancreas (Islets of Langerhans)",
      hormones: "Insulin & Glucagon",
      function: "Insulin converts blood glucose into stored glycogen in the liver, lowering blood sugar. Glucagon mobilizes glycogen back to glucose.",
      deficiency: "Insulin Deficiency -> Diabetes Mellitus (hyperglycemia, glucosuria, polydipsia)."
    },
    thyroid: {
      name: "Thyroid Gland (Anterior Neck)",
      hormones: "Thyroxine",
      function: "Regulates basal metabolic rate, cellular respiration, and thermogenesis.",
      deficiency: "Thyroxine Deficiency in infancy -> Cretinism; In adults -> Goitre & Hypothyroidism."
    },
    pituitary: {
      name: "Pituitary Gland ('Master Gland')",
      hormones: "GH, ADH, TSH",
      function: "Regulates somatic bone growth (GH) and renal collecting duct water reabsorption (ADH).",
      deficiency: "Lack of GH -> Dwarfism; Excess GH -> Gigantism; Lack of ADH -> Diabetes Insipidus (polyuria)."
    },
    adrenal: {
      name: "Adrenal Glands (Atop Kidneys)",
      hormones: "Adrenaline & Aldosterone",
      function: "Triggers acute 'Fight-or-Flight' response: elevates heart rate, dilates bronchioles, and raises blood glucose.",
      deficiency: "Impaired response to acute stressors and loss of vascular tone."
    }
  },
  initHormoneSim: function() {
    this.setGland('pancreas');
  },
  setGland: function(key) {
    ['pancreas', 'thyroid', 'pituitary', 'adrenal'].forEach(k => {
      const btn = document.getElementById(`btnGland-${k}`);
      if (btn) {
        btn.className = k === key
          ? "p-3 rounded-xl bg-emerald-600 text-white font-bold text-xs text-left shadow-md"
          : "p-3 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs text-left";
      }
    });

    const g = this.glands[key];
    document.getElementById('glandDetailCard').innerHTML = `
      <div class="flex items-center justify-between pb-3 border-b border-slate-800">
        <h5 class="font-black text-base text-slate-100">${g.name}</h5>
        <span class="text-xs font-mono font-bold text-emerald-300 bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-800">${g.hormones}</span>
      </div>
      <div>
        <div class="text-[10px] font-bold text-slate-500 uppercase">Homeostatic Role</div>
        <p class="text-xs text-slate-300 mt-1 leading-relaxed">${g.function}</p>
      </div>
      <div class="p-3 rounded-xl bg-rose-950/60 border border-rose-800 text-xs">
        <span class="font-bold text-rose-300 block mb-0.5">Clinical Pathology:</span>
        <span class="text-rose-200">${g.deficiency}</span>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // CHAPTER 8: BOHR QUANTUM ATOMIC ORBITAL SIMULATOR
  // -------------------------------------------------------------
  getBohrOrbitAtomSim: function() {
    return `
      <div class="max-w-2xl mx-auto p-4 sm:p-8 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-xl space-y-6">
        <div class="flex items-center gap-3">
          <div class="w-10 sm:w-12 h-10 sm:h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
            <i data-lucide="atom" class="w-5 sm:w-6 h-5 sm:h-6"></i>
          </div>
          <div>
            <h4 class="font-black text-base sm:text-lg text-slate-100">Quantum Bohr Atomic Orbit Shell Simulator</h4>
            <p class="text-xs text-slate-400">Select an element to observe electron arrangements across K, L, M shells and octet stability.</p>
          </div>
        </div>

        <div class="grid grid-cols-4 sm:grid-cols-8 gap-1.5 sm:gap-2">
          ${[
            { s: 'H', z: 1 },
            { s: 'He', z: 2 },
            { s: 'C', z: 6 },
            { s: 'O', z: 8 },
            { s: 'Ne', z: 10 },
            { s: 'Na', z: 11 },
            { s: 'Cl', z: 17 },
            { s: 'Ar', z: 18 }
          ].map(e => `
            <button onclick="SimulationsEngine.selectBohrElement('${e.s}')" id="bohrBtn-${e.s}" 
                    class="p-2 sm:p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-95 border border-slate-700 text-center transition-all touch-manipulation">
              <div class="text-[9px] font-mono text-slate-400">${e.z}</div>
              <div class="font-black text-sm text-slate-100">${e.s}</div>
            </button>
          `).join('')}
        </div>

        <!-- 2D Canvas for Bohr Model Orbitals -->
        <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center relative overflow-hidden flex flex-col items-center">
          <canvas id="bohrCanvas" width="300" height="300" class="max-w-[260px] sm:max-w-[300px] h-auto"></canvas>
          <div id="bohrElementInfo" class="mt-3 text-center"></div>
        </div>
      </div>
    `;
  },
  bohrElements: {
    H: { name: "Hydrogen", z: 1, a: 1, config: [1], stability: "Unstable (Needs 1e⁻ for duplet)" },
    He: { name: "Helium", z: 2, a: 4, config: [2], stability: "Stable Duplet Arrangement (Noble Gas)" },
    C: { name: "Carbon", z: 6, a: 12, config: [2, 4], stability: "Unstable (Forms 4 covalent bonds)" },
    O: { name: "Oxygen", z: 8, a: 16, config: [2, 6], stability: "Unstable (Needs 2e⁻ for octet)" },
    Ne: { name: "Neon", z: 10, a: 20, config: [2, 8], stability: "Stable Octet Arrangement (Noble Gas)" },
    Na: { name: "Sodium", z: 11, a: 23, config: [2, 8, 1], stability: "Unstable Metal (Donates 1 valence e⁻)" },
    Cl: { name: "Chlorine", z: 17, a: 35, config: [2, 8, 7], stability: "Unstable Halogen (Accepts 1e⁻ for octet)" },
    Ar: { name: "Argon", z: 18, a: 40, config: [2, 8, 8], stability: "Stable Octet Arrangement (Noble Gas)" }
  },
  initBohrOrbitAtomSim: function() {
    this.selectBohrElement('Na');
  },
  selectBohrElement: function(sym) {
    const el = this.bohrElements[sym] || this.bohrElements['Na'];
    ['H','He','C','O','Ne','Na','Cl','Ar'].forEach(s => {
      const btn = document.getElementById(`bohrBtn-${s}`);
      if (btn) {
        btn.className = s === sym
          ? "p-2 sm:p-2.5 rounded-xl bg-purple-600 text-white font-bold border border-purple-400 shadow-md text-center touch-manipulation"
          : "p-2 sm:p-2.5 rounded-xl bg-slate-800 text-slate-300 border border-slate-700 text-center touch-manipulation";
      }
    });

    const info = document.getElementById('bohrElementInfo');
    if (info) {
      const isStable = el.stability.includes('Stable');
      info.innerHTML = `
        <h5 class="text-base font-black text-slate-100">${el.name} (${sym})</h5>
        <div class="flex items-center justify-center gap-3 text-xs font-mono my-1">
          <span class="text-purple-300">Protons: <strong>${el.z}</strong></span>
          <span class="text-sky-300">Neutrons: <strong>${el.a - el.z}</strong></span>
          <span class="text-emerald-300">Config: <strong>${el.config.join('.')}</strong></span>
        </div>
        <div class="inline-block px-3 py-1 rounded-full text-xs font-bold mt-1 ${isStable ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'}">
          ${el.stability}
        </div>
      `;
    }

    const canvas = document.getElementById('bohrCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const cx = 150, cy = 150;
    ctx.clearRect(0, 0, 300, 300);

    // Glowing Nucleus
    ctx.beginPath();
    ctx.arc(cx, cy, 18, 0, Math.PI * 2);
    ctx.fillStyle = '#ec4899';
    ctx.shadowColor = '#ec4899';
    ctx.shadowBlur = 12;
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 10px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${el.z}p+`, cx, cy);

    // Shells
    const shellRadii = [45, 80, 115];
    el.config.forEach((numElectrons, shellIdx) => {
      const r = shellRadii[shellIdx];
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(147, 51, 234, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw electrons
      for (let i = 0; i < numElectrons; i++) {
        const theta = (i * 2 * Math.PI) / numElectrons - Math.PI / 2;
        const ex = cx + r * Math.cos(theta);
        const ey = cy + r * Math.sin(theta);
        ctx.beginPath();
        ctx.arc(ex, ey, 5.5, 0, Math.PI * 2);
        ctx.fillStyle = '#38bdf8';
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    });
  },

  // -------------------------------------------------------------
  // CHAPTER 9: ALLOYS & RUBBER
  // -------------------------------------------------------------
  getAlloyAndRubberSim: function() {
    return `
      <div class="max-w-2xl mx-auto p-6 sm:p-8 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-xl space-y-6">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
            <i data-lucide="flask-round" class="w-6 h-6"></i>
          </div>
          <div>
            <h4 class="font-black text-lg text-slate-100">Alloy Hardness &amp; Vulcanized Rubber Simulator</h4>
            <p class="text-xs text-slate-400">Atomic layer sliding in pure metals vs alloys, and sulfur cross-links in rubber.</p>
          </div>
        </div>

        <div class="p-5 rounded-2xl bg-slate-950 border border-slate-800">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Atomic Lattice Sliding Model</span>
            <div class="flex gap-2">
              <button onclick="SimulationsEngine.setMetalModel('pure')" id="btnModelPure" class="px-3 py-1 rounded-lg bg-purple-600 text-white text-xs font-bold">Pure Copper</button>
              <button onclick="SimulationsEngine.setMetalModel('alloy')" id="btnModelAlloy" class="px-3 py-1 rounded-lg bg-slate-800 text-slate-400 text-xs font-bold">Bronze Alloy</button>
            </div>
          </div>

          <div id="metalLatticeBox" class="p-4 bg-black rounded-xl border border-slate-800 text-center"></div>
          <p id="metalLatticeDesc" class="text-xs text-slate-400 mt-2"></p>
        </div>
      </div>
    `;
  },
  initAlloySim: function() {
    this.setMetalModel('pure');
  },
  setMetalModel: function(type) {
    const box = document.getElementById('metalLatticeBox');
    const desc = document.getElementById('metalLatticeDesc');
    const btnP = document.getElementById('btnModelPure');
    const btnA = document.getElementById('btnModelAlloy');

    if (type === 'pure') {
      btnP.className = "px-3 py-1 rounded-lg bg-purple-600 text-white text-xs font-bold";
      btnA.className = "px-3 py-1 rounded-lg bg-slate-800 text-slate-400 text-xs font-bold";
      box.innerHTML = `
        <div class="text-2xl font-mono tracking-widest text-amber-500">
          ● ● ● ● ● ● ● ●<br>
          ● ● ● ● ● ● ● ●<br>
          ● ● ● ● ● ● ● ●
        </div>
        <div class="text-[11px] font-bold text-rose-400 mt-2">Layers slide smoothly over each other when force is applied! (Soft &amp; Malleable)</div>
      `;
      desc.textContent = "Pure metal atoms are identical in size and arranged in neat, orderly parallel layers that easily slide over one another.";
    } else {
      btnA.className = "px-3 py-1 rounded-lg bg-purple-600 text-white text-xs font-bold";
      btnP.className = "px-3 py-1 rounded-lg bg-slate-800 text-slate-400 text-xs font-bold";
      box.innerHTML = `
        <div class="text-2xl font-mono tracking-widest text-amber-500">
          ● ● ● <span class="text-sky-400 text-3xl font-black">■</span> ● ● ● ●<br>
          ● ● <span class="text-sky-400 text-3xl font-black">■</span> ● ● ● <span class="text-sky-400 text-3xl font-black">■</span> ●<br>
          ● ● ● ● ● ● ● ●
        </div>
        <div class="text-[11px] font-bold text-emerald-400 mt-2">Foreign Tin atoms (■) lock lattice! Layers CANNOT slide! (Hard &amp; Strong)</div>
      `;
      desc.textContent = "In Bronze alloy, foreign tin atoms of different atomic sizes disrupt the regular lattice, physically locking atomic planes from sliding.";
    }
  },

  // -------------------------------------------------------------
  // CHAPTER 10: ANTIOXIDANTS & FREE RADICALS
  // -------------------------------------------------------------
  getAntioxidantSim: function() {
    return `
      <div class="max-w-2xl mx-auto p-6 sm:p-8 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-xl">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
            <i data-lucide="pill" class="w-6 h-6"></i>
          </div>
          <div>
            <h4 class="font-black text-lg text-slate-100">Free Radical Oxidation &amp; Antioxidant Neutralizer</h4>
            <p class="text-xs text-slate-400">Visualize how Vitamin C safely donates an electron to neutralize free radicals.</p>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 mb-6">
          <div class="p-4 rounded-2xl bg-rose-950/60 border border-rose-800 text-center">
            <span class="text-[10px] font-bold uppercase text-rose-400">Unstable Molecule</span>
            <h5 class="font-black text-base text-rose-200 mt-1">FREE RADICAL (•OH)</h5>
            <div id="dispRadical" class="text-3xl font-mono text-rose-500 my-2">● ● ● <span class="text-red-400 animate-pulse font-black">◌</span></div>
            <p class="text-[11px] text-rose-300">Missing 1 valence electron! Attacking DNA and membranes.</p>
          </div>

          <div class="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-800 text-center">
            <span class="text-[10px] font-bold uppercase text-emerald-400">Defensive Molecule</span>
            <h5 class="font-black text-base text-emerald-200 mt-1">ANTIOXIDANT (Vitamin C)</h5>
            <div class="text-3xl font-mono text-emerald-400 my-2">● ● ● <span class="text-emerald-300 font-black">●</span></div>
            <p class="text-[11px] text-emerald-300">Contains stable spare electron ready for safe donation.</p>
          </div>
        </div>

        <button onclick="SimulationsEngine.donateElectron()" id="btnDonate" class="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/30 transition-all">
          Donate Electron (Neutralize Radical)
        </button>

        <div id="antioxFeedback" class="hidden p-4 rounded-2xl bg-slate-950 border border-emerald-500/50 text-xs mt-4 text-center"></div>
      </div>
    `;
  },
  initAntioxidantSim: function() {},
  donateElectron: function() {
    const rad = document.getElementById('dispRadical');
    const fb = document.getElementById('antioxFeedback');
    rad.innerHTML = `● ● ● <span class="text-emerald-400 font-black">●</span>`;
    fb.classList.remove('hidden');
    fb.innerHTML = `
      <div class="text-emerald-400 font-bold text-sm mb-1">✓ Electron Donated Successfully!</div>
      <p class="text-slate-300">The free radical has received an electron, becoming a stable, harmless molecule. Cellular DNA and membranes are protected from oxidative stress!</p>
    `;
    if (window.ScienceGamesEngine) window.ScienceGamesEngine.playSfx('correct');
  },

  // -------------------------------------------------------------
  // CHAPTER 11: FREE FALL VACUUM TUBE
  // -------------------------------------------------------------
  getMotionAndFreeFallSim: function() {
    return `
      <div class="max-w-2xl mx-auto p-6 sm:p-8 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-xl space-y-6">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
            <i data-lucide="gauge" class="w-6 h-6"></i>
          </div>
          <div>
            <h4 class="font-black text-lg text-slate-100">Free Fall Physics Lab (Vacuum vs Air Resistance)</h4>
            <p class="text-xs text-slate-400">Drop a heavy metal coin and a light feather in both atmosphere and evacuated vacuum.</p>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center relative overflow-hidden h-64 flex flex-col justify-between">
            <div class="text-xs font-bold text-slate-300">TUBE 1: Atmospheric Air</div>
            <div class="relative flex-1 flex justify-around items-start pt-2">
              <div id="airCoin" class="w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-[10px] shadow transition-all duration-700">Coin</div>
              <div id="airFeather" class="w-8 h-8 rounded-full bg-sky-300 text-sky-950 flex items-center justify-center font-bold text-[9px] shadow transition-all duration-1000">Feather</div>
            </div>
            <div class="text-[10px] text-slate-500 border-t border-slate-800 pt-1">Air resistance retards feather</div>
          </div>

          <div class="p-4 rounded-2xl bg-slate-950 border border-emerald-500/30 text-center relative overflow-hidden h-64 flex flex-col justify-between">
            <div class="text-xs font-bold text-emerald-400">TUBE 2: Vacuum (g = 9.81 m/s²)</div>
            <div class="relative flex-1 flex justify-around items-start pt-2">
              <div id="vacCoin" class="w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-[10px] shadow transition-all duration-700">Coin</div>
              <div id="vacFeather" class="w-8 h-8 rounded-full bg-sky-300 text-sky-950 flex items-center justify-center font-bold text-[9px] shadow transition-all duration-700">Feather</div>
            </div>
            <div class="text-[10px] text-emerald-400 border-t border-slate-800 pt-1">Identical downward acceleration!</div>
          </div>
        </div>

        <button onclick="SimulationsEngine.releaseDrop()" class="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all">
          RELEASE DROP EXPERIMENT
        </button>
      </div>
    `;
  },
  initMotionSim: function() {},
  releaseDrop: function() {
    const ac = document.getElementById('airCoin');
    const af = document.getElementById('airFeather');
    const vc = document.getElementById('vacCoin');
    const vf = document.getElementById('vacFeather');

    [ac, af, vc, vf].forEach(el => el.style.transform = "translateY(0px)");

    setTimeout(() => {
      ac.style.transform = "translateY(150px)";
      af.style.transitionDuration = "2.2s";
      af.style.transform = "translateY(150px)";

      vc.style.transform = "translateY(150px)";
      vf.style.transitionDuration = "0.7s";
      vf.style.transform = "translateY(150px)";
    }, 100);
  },

  // -------------------------------------------------------------
  // CHAPTER 12: NUCLEAR FISSION CANVAS CHAIN REACTION
  // -------------------------------------------------------------
  getNuclearFissionCanvasSim: function() {
    return `
      <div class="max-w-3xl mx-auto p-4 sm:p-8 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-xl space-y-6">
        <div class="flex items-center gap-3">
          <div class="w-10 sm:w-12 h-10 sm:h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
            <i data-lucide="radiation" class="w-5 sm:w-6 h-5 sm:h-6"></i>
          </div>
          <div>
            <h4 class="font-black text-base sm:text-lg text-slate-100">Nuclear Fission Chain Reaction Simulator</h4>
            <p class="text-xs text-slate-400">Shoot thermal neutrons into U-235 atoms and manage Boron SCRAM control rods.</p>
          </div>
        </div>

        <div class="p-3 sm:p-4 rounded-2xl bg-slate-950 border border-slate-800">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-2 text-xs font-mono">
            <span class="text-emerald-400 font-bold">Reactor State: <span id="fissionStatusText">Ready</span></span>
            <span class="text-slate-400">Total Fissions: <strong id="fissionCountText" class="text-amber-400 font-bold">0</strong></span>
          </div>
          <canvas id="fissionCanvas" width="600" height="240" class="w-full h-52 sm:h-60 bg-black rounded-xl border border-slate-900"></canvas>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button onclick="SimulationsEngine.fireFissionNeutron()" 
                  class="py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 active:scale-95 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 touch-manipulation">
            <i data-lucide="crosshair" class="w-4 h-4"></i>
            <span>Fire Thermal Neutron (¹₀n)</span>
          </button>

          <button onclick="SimulationsEngine.toggleScramRods()" id="btnScramRods"
                  class="py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-200 font-bold text-xs uppercase tracking-wider border border-slate-700 transition-all flex items-center justify-center gap-2 touch-manipulation">
            <i data-lucide="shield-alert" class="w-4 h-4 text-emerald-400"></i>
            <span id="scramBtnText">Insert Boron SCRAM Rods</span>
          </button>
        </div>
      </div>
    `;
  },
  fissionState: {
    nuclei: [],
    neutrons: [],
    scramActive: false,
    fissionsCount: 0,
    animId: null
  },
  initNuclearFissionCanvasSim: function() {
    this.fissionState.scramActive = false;
    this.fissionState.fissionsCount = 0;
    this.fissionState.neutrons = [];
    this.resetFissionNuclei();
    this.startFissionLoop();
  },
  resetFissionNuclei: function() {
    this.fissionState.nuclei = [];
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 8; c++) {
        this.fissionState.nuclei.push({
          x: 100 + c * 60,
          y: 50 + r * 70,
          radius: 18,
          active: true,
          fissioning: false
        });
      }
    }
  },
  startFissionLoop: function() {
    const canvas = document.getElementById('fissionCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    const loop = () => {
      ctx.fillStyle = '#050814';
      ctx.fillRect(0, 0, width, height);

      // Draw SCRAM barrier if active
      if (this.fissionState.scramActive) {
        ctx.fillStyle = 'rgba(16, 185, 129, 0.2)';
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 2;
        ctx.strokeRect(5, 5, width - 10, height - 10);
        ctx.fillStyle = '#10b981';
        ctx.font = 'bold 12px monospace';
        ctx.fillText('BORON CONTROL RODS INSERTED — NEUTRONS ABSORBED', width / 2, 25);
      }

      // Draw U-235 Nuclei
      this.fissionState.nuclei.forEach(n => {
        if (n.active) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
          ctx.fillStyle = '#0284c7';
          ctx.fill();
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 1.5;
          ctx.stroke();
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 9px monospace';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('²³⁵U', n.x, n.y);
        }
      });

      // Update and Draw Neutrons
      for (let i = this.fissionState.neutrons.length - 1; i >= 0; i--) {
        const p = this.fissionState.neutrons[i];
        p.x += p.vx;
        p.y += p.vy;

        // Draw fast neutron
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#f59e0b';
        ctx.shadowColor = '#f59e0b';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Absorb if SCRAM
        if (this.fissionState.scramActive) {
          this.fissionState.neutrons.splice(i, 1);
          continue;
        }

        // Out of bounds
        if (p.x < 0 || p.x > width || p.y < 0 || p.y > height) {
          this.fissionState.neutrons.splice(i, 1);
          continue;
        }

        // Check collision with U-235
        for (let j = 0; j < this.fissionState.nuclei.length; j++) {
          const nuc = this.fissionState.nuclei[j];
          if (nuc.active) {
            const dist = Math.hypot(p.x - nuc.x, p.y - nuc.y);
            if (dist < nuc.radius + 4) {
              nuc.active = false;
              this.fissionState.neutrons.splice(i, 1);
              this.fissionState.fissionsCount++;
              const fcEl = document.getElementById('fissionCountText');
              if (fcEl) fcEl.textContent = this.fissionState.fissionsCount;

              if (window.ScienceGamesEngine) window.ScienceGamesEngine.playSfx('click');

              // Release 3 new secondary fast neutrons
              for (let k = 0; k < 3; k++) {
                const angle = (k * 2 * Math.PI) / 3 + (Math.random() - 0.5);
                const speed = 3.5 + Math.random() * 1.5;
                this.fissionState.neutrons.push({
                  x: nuc.x,
                  y: nuc.y,
                  vx: Math.cos(angle) * speed,
                  vy: Math.sin(angle) * speed
                });
              }
              break;
            }
          }
        }
      }

      this.fissionState.animId = requestAnimationFrame(loop);
    };

    if (this.fissionState.animId) cancelAnimationFrame(this.fissionState.animId);
    this.fissionState.animId = requestAnimationFrame(loop);
  },
  fireFissionNeutron: function() {
    this.fissionState.neutrons.push({
      x: 10,
      y: 120 + (Math.random() - 0.5) * 80,
      vx: 4.5,
      vy: (Math.random() - 0.5) * 1.5
    });
    if (window.ScienceGamesEngine) window.ScienceGamesEngine.playSfx('click');
  },
  toggleScramRods: function() {
    this.fissionState.scramActive = !this.fissionState.scramActive;
    const btn = document.getElementById('btnScramRods');
    const txt = document.getElementById('scramBtnText');
    const st = document.getElementById('fissionStatusText');
    if (this.fissionState.scramActive) {
      if (btn) btn.className = "py-3.5 px-4 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 touch-manipulation";
      if (txt) txt.textContent = "Withdraw Control Rods (Resume)";
      if (st) st.textContent = "Halted by Boron (Subcritical)";
      if (window.ScienceGamesEngine) window.ScienceGamesEngine.playSfx('correct');
    } else {
      if (btn) btn.className = "py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider border border-slate-700 transition-all flex items-center justify-center gap-2 touch-manipulation";
      if (txt) txt.textContent = "Insert Boron SCRAM Rods";
      if (st) st.textContent = "Critical (Reaction Live)";
    }
  }
};

if (typeof window !== 'undefined') {
  window.SimulationsEngine = SimulationsEngine;
}
