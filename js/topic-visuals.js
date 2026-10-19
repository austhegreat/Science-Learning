// Form 4 Science (KSSM / SPM) - Topic & Subtopic Motion-Graphic Visuals Engine
// Provides embedded interactive animations, motion graphics, and visual demonstrators for every subtopic.

const TopicVisualsEngine = {
  renderVisual: function(code) {
    switch(code) {
      // CHAPTER 1
      case "1.1": return this.getVisual1_1();
      case "1.2": return this.getVisual1_2();
      case "1.3": return this.getVisual1_3();

      // CHAPTER 2
      case "2.1": return this.getVisual2_1();
      case "2.2": return this.getVisual2_2();

      // CHAPTER 3
      case "3.1": return this.getVisual3_1();
      case "3.2": return this.getVisual3_2();
      case "3.3": return this.getVisual3_3();
      case "3.4": return this.getVisual3_4();

      // CHAPTER 4
      case "4.1": return this.getVisual4_1();
      case "4.2": return this.getVisual4_2();
      case "4.3": return this.getVisual4_3();
      case "4.4": return this.getVisual4_4();

      // CHAPTER 5
      case "5.1": return this.getVisual5_1();
      case "5.2": return this.getVisual5_2();
      case "5.3": return this.getVisual5_3();
      case "5.4": return this.getVisual5_4();

      // CHAPTER 6
      case "6.1": return this.getVisual6_1();
      case "6.2": return this.getVisual6_2();
      case "6.3": return this.getVisual6_3();

      // CHAPTER 7
      case "7.1": return this.getVisual7_1();
      case "7.2": return this.getVisual7_2();
      case "7.3": return this.getVisual7_3();

      // CHAPTER 8
      case "8.1": return this.getVisual8_1();
      case "8.2": return this.getVisual8_2();
      case "8.3": return this.getVisual8_3();

      // CHAPTER 9
      case "9.1": return this.getVisual9_1();
      case "9.2": return this.getVisual9_2();
      case "9.3": return this.getVisual9_3();

      // CHAPTER 10
      case "10.1": return this.getVisual10_1();
      case "10.2": return this.getVisual10_2();
      case "10.3": return this.getVisual10_3();

      // CHAPTER 11
      case "11.1": return this.getVisual11_1();
      case "11.2": return this.getVisual11_2();
      case "11.3": return this.getVisual11_3();
      case "11.4": return this.getVisual11_4();

      // CHAPTER 12
      case "12.1": return this.getVisual12_1();
      case "12.2": return this.getVisual12_2();
      case "12.3": return this.getVisual12_3();
      case "12.4": return this.getVisual12_4();

      default: return "";
    }
  },

  // -------------------------------------------------------------
  // CHAPTER 1 VISUALS
  // -------------------------------------------------------------
  getVisual1_1: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
            <i data-lucide="shield" class="w-3.5 h-3.5"></i>
            Interactive PPE Inspector (Click gear to inspect)
          </span>
          <span class="text-[10px] text-slate-400">Lab Avatar Model</span>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
          <button onclick="TopicVisualsEngine.setAvatarGear('goggles')" class="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700">🥽 Safety Goggles</button>
          <button onclick="TopicVisualsEngine.setAvatarGear('coat')" class="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700">🥼 Lab Coat</button>
          <button onclick="TopicVisualsEngine.setAvatarGear('gloves')" class="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700">🧤 Nitrile Gloves</button>
          <button onclick="TopicVisualsEngine.setAvatarGear('fume')" class="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700">💨 Fume Chamber</button>
        </div>
        <div id="avatarGearDesc" class="p-3 rounded-lg bg-slate-800/90 border border-slate-700 text-xs text-sky-300">
          Click any equipment button above to inspect its protective mechanism and standard KSSM function.
        </div>
      </div>
    `;
  },
  setAvatarGear: function(type) {
    const desc = document.getElementById('avatarGearDesc');
    const data = {
      goggles: "<strong>🥽 Safety Goggles:</strong> Impact-resistant polycarbonate eye shield protecting against corrosive acid/alkali splashes and high-velocity debris.",
      coat: "<strong>🥼 Laboratory Coat:</strong> 100% cotton flame-retardant barrier protecting user's epidermis and regular clothing from chemical spills.",
      gloves: "<strong>🧤 Nitrile/Rubber Gloves:</strong> Chemical-resistant impervious barrier shielding skin from direct dermal contact with toxins, mutagens, and biohazards.",
      fume: "<strong>💨 Fume Chamber (Kebuk Wasap):</strong> Heavy-duty negative pressure ventilated enclosure that draws volatile, toxic, and pungent chemical vapors safely away through dedicated carbon filters."
    };
    if (desc) desc.innerHTML = data[type] || "";
  },

  getVisual1_2: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <i data-lucide="alert-triangle" class="w-3.5 h-3.5"></i>
          Mercury Spill Protocol Motion Graphic
        </div>
        <div class="flex items-center justify-between text-xs py-2 px-3 bg-slate-800 rounded-lg font-mono mb-2">
          <span>Elemental Mercury (Hg) Spilled</span>
          <span class="text-slate-400">→</span>
          <span class="text-amber-300">Add Sulfur (S) Powder</span>
          <span class="text-slate-400">→</span>
          <span class="text-emerald-400">Inert Mercuric Sulfide (HgS)</span>
        </div>
        <p class="text-[11px] text-slate-300">
          Powdered sulfur reacts spontaneously with hazardous volatile mercury droplets: <code class="text-amber-300">Hg + S → HgS (Solid)</code>, preventing inhalation poisoning until the Fire &amp; Rescue Dept arrives.
        </p>
      </div>
    `;
  },

  getVisual1_3: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="text-xs font-mono font-bold text-red-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <i data-lucide="flame" class="w-3.5 h-3.5"></i>
          Combustion Fire Triangle Motion Simulator
        </div>
        <div class="grid grid-cols-3 gap-2 text-center text-xs mb-3">
          <div class="p-2 rounded-lg bg-red-950 border border-red-800 text-red-300 font-bold">1. FUEL</div>
          <div class="p-2 rounded-lg bg-amber-950 border border-amber-800 text-amber-300 font-bold">2. HEAT</div>
          <div class="p-2 rounded-lg bg-sky-950 border border-sky-800 text-sky-300 font-bold">3. OXYGEN</div>
        </div>
        <p class="text-[11px] text-slate-300 leading-relaxed">
          Fire blankets and $\\text{CO}_2$ extinguishers extinguish combustion by <strong>starving oxygen supply</strong>. Water cools heat. Removing any corner collapses the chain reaction!
        </p>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // CHAPTER 2 VISUALS: CPR & HEIMLICH MOTION GRAPHICS
  // -------------------------------------------------------------
  getVisual2_1: function() {
    return `
      <div class="mt-4 p-5 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 text-white border border-rose-900/60 shadow-lg">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-rose-500 animate-ping"></span>
            <span class="text-xs font-mono font-bold uppercase tracking-wider text-rose-400">Motion Graphic: CPR Blood Circulation Loop</span>
          </div>
          <span class="text-[10px] font-mono bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded font-bold">110 BPM Sternal Depression</span>
        </div>

        <!-- Animated SVG Anatomical Circulation Diagram -->
        <div class="p-4 bg-slate-900/90 rounded-xl border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden">
          <svg class="w-full max-w-sm h-36" viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
            <!-- Brain outline -->
            <rect x="20" y="35" width="55" height="50" rx="15" fill="#334155" stroke="#38bdf8" stroke-width="2"/>
            <text x="47" y="63" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">BRAIN</text>
            <text x="47" y="75" fill="#94a3b8" font-size="8" text-anchor="middle">&lt;4 min window</text>

            <!-- Heart in Sternum -->
            <circle cx="150" cy="60" r="28" fill="#881337" stroke="#f43f5e" stroke-width="3" class="animate-pulse"/>
            <path d="M 150 45 C 145 35, 130 40, 130 55 C 130 75, 150 85, 150 85 C 150 85, 170 75, 170 55 C 170 40, 155 35, 150 45 Z" fill="#e11d48"/>
            <text x="150" y="63" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">5 CM PUMP</text>

            <!-- Lungs -->
            <rect x="225" y="35" width="55" height="50" rx="15" fill="#334155" stroke="#34d399" stroke-width="2"/>
            <text x="252" y="63" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">LUNGS</text>
            <text x="252" y="75" fill="#94a3b8" font-size="8" text-anchor="middle">2 Breaths</text>

            <!-- Connecting animated flow arrows -->
            <path d="M 122 60 L 75 60" stroke="#f43f5e" stroke-width="3" stroke-dasharray="4,4" class="animate-pulse"/>
            <path d="M 178 60 L 225 60" stroke="#34d399" stroke-width="3" stroke-dasharray="4,4" class="animate-pulse"/>
          </svg>

          <div class="flex items-center justify-between w-full text-xs text-slate-300 pt-2 border-t border-slate-800">
            <span class="flex items-center gap-1.5 text-rose-300">
              <i data-lucide="activity" class="w-3.5 h-3.5"></i>
              30 Compressions (Heels of locked hands)
            </span>
            <span class="flex items-center gap-1.5 text-emerald-300">
              <i data-lucide="wind" class="w-3.5 h-3.5"></i>
              2 Rescue Breaths (Chest rises)
            </span>
          </div>
        </div>
      </div>
    `;
  },

  getVisual2_2: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <i data-lucide="navigation" class="w-3.5 h-3.5"></i>
          Motion Graphic: Heimlich Subdiaphragmatic Airway Clearance
        </div>
        <div class="p-3 bg-slate-800/80 rounded-xl border border-slate-700 flex items-center justify-around text-center text-xs">
          <div>
            <div class="font-bold text-slate-300">Clenched Fist Placement</div>
            <div class="text-[11px] text-amber-400 font-mono mt-0.5">Midway between Navel &amp; Sternum</div>
          </div>
          <div class="text-xl text-slate-500">➔</div>
          <div>
            <div class="font-bold text-slate-300">Kinetic Thrust Vector</div>
            <div class="text-[11px] text-emerald-400 font-mono mt-0.5">Quick INWARD &amp; UPWARD</div>
          </div>
          <div class="text-xl text-slate-500">➔</div>
          <div>
            <div class="font-bold text-slate-300">Laryngeal Pressure</div>
            <div class="text-[11px] text-sky-400 font-mono mt-0.5">Pneumatic Ejection of Bolus</div>
          </div>
        </div>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // CHAPTER 3 VISUALS
  // -------------------------------------------------------------
  getVisual3_1: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="flex justify-between items-center mb-2">
          <span class="text-xs font-mono font-bold text-sky-400 uppercase">Live Thermometer Scale Visualizer</span>
          <span id="tempDispVal" class="text-xs font-mono font-bold text-emerald-400">36.9 °C</span>
        </div>
        <input type="range" min="34" max="42" step="0.1" value="36.9" oninput="TopicVisualsEngine.updateTempScale(this.value)" class="w-full accent-sky-500 mb-2">
        <div id="tempStatusDesc" class="p-2.5 rounded-lg bg-emerald-950/70 border border-emerald-700 text-xs text-emerald-200">
          36.9°C: Normal homeostatic physiological baseline (36.5°C – 37.5°C).
        </div>
      </div>
    `;
  },
  updateTempScale: function(val) {
    document.getElementById('tempDispVal').textContent = `${val} °C`;
    const box = document.getElementById('tempStatusDesc');
    const v = parseFloat(val);
    if (v < 35.0) {
      box.className = "p-2.5 rounded-lg bg-sky-950/70 border border-sky-700 text-xs text-sky-200";
      box.innerHTML = `<strong>Hypothermia (< 35.0°C):</strong> Thermoregulatory failure from prolonged severe cold. Shivering ceases, metabolic collapse.`;
    } else if (v <= 37.5) {
      box.className = "p-2.5 rounded-lg bg-emerald-950/70 border border-emerald-700 text-xs text-emerald-200";
      box.innerHTML = `<strong>Normal Baseline (36.5°C – 37.5°C):</strong> Ideal enzymatic cellular respiration and biochemical homeostasis.`;
    } else {
      box.className = "p-2.5 rounded-lg bg-rose-950/70 border border-rose-700 text-xs text-rose-200";
      box.innerHTML = `<strong>Hyperthermia / Fever (> 37.5°C):</strong> Pyrogens reset hypothalamic set-point during infectious disease or heat stroke.`;
    }
  },

  getVisual3_2: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="flex justify-between items-center mb-2">
          <span class="text-xs font-mono font-bold text-emerald-400 uppercase">Interactive ECG Waveform &amp; Pulse Points</span>
          <span class="text-xs font-mono text-slate-400">Radial · Carotid · Brachial</span>
        </div>
        <div class="flex items-center justify-around p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono text-xs">
          <span class="text-rose-400 animate-pulse font-bold">❤ P-Q-R-S-T Wave</span>
          <span class="text-emerald-400">Resting Adult: 60 – 100 bpm</span>
          <span class="text-amber-400">Athletes: 40 – 60 bpm</span>
        </div>
      </div>
    `;
  },

  getVisual3_3: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="text-xs font-mono font-bold text-sky-400 uppercase mb-2">Blood Pressure Vessel Motion Model</div>
        <div class="grid grid-cols-2 gap-3 text-xs">
          <div class="p-3 bg-slate-800 rounded-lg border border-slate-700">
            <span class="text-slate-400 block text-[10px] uppercase font-bold">Systolic (~120 mmHg)</span>
            <span class="text-emerald-400 font-bold">Left Ventricle Contracts</span>
            <p class="text-[11px] text-slate-300 mt-1">Peak arterial shear force as oxygenated blood rushes into aorta.</p>
          </div>
          <div class="p-3 bg-slate-800 rounded-lg border border-slate-700">
            <span class="text-slate-400 block text-[10px] uppercase font-bold">Diastolic (~80 mmHg)</span>
            <span class="text-sky-400 font-bold">Ventricle Relaxes</span>
            <p class="text-[11px] text-slate-300 mt-1">Minimum resting pressure while chambers refill with venous return.</p>
          </div>
        </div>
      </div>
    `;
  },

  getVisual3_4: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="text-xs font-mono font-bold text-emerald-400 uppercase mb-2">BMI Spectrum Classification Bar</div>
        <div class="h-4 rounded-full overflow-hidden flex font-mono text-[9px] font-bold text-slate-950">
          <div class="bg-amber-300 flex-1 flex items-center justify-center">&lt;18.5</div>
          <div class="bg-emerald-400 flex-1 flex items-center justify-center">18.5-24.9</div>
          <div class="bg-orange-400 flex-1 flex items-center justify-center">25-29.9</div>
          <div class="bg-rose-500 text-white flex-1 flex items-center justify-center">&ge;30</div>
        </div>
        <div class="flex justify-between text-[10px] text-slate-400 mt-1">
          <span>Underweight</span>
          <span class="text-emerald-400 font-bold">Optimal Normal</span>
          <span>Overweight</span>
          <span class="text-rose-400 font-bold">Obese</span>
        </div>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // CHAPTER 4 VISUALS
  // -------------------------------------------------------------
  getVisual4_1: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="text-xs font-mono font-bold text-emerald-400 uppercase mb-2">Atmospheric Greenhouse Effect Motion Model</div>
        <div class="p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs text-slate-300">
          Solar radiation penetrates atmosphere → Earth reradiates infrared heat → Elevated $\\text{CO}_2$ and $\\text{CH}_4$ trap thermal radiation, elevating planetary mean surface temperatures.
        </div>
      </div>
    `;
  },

  getVisual4_2: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="text-xs font-mono font-bold text-amber-400 uppercase mb-2">Renewable Energy Matrix</div>
        <div class="grid grid-cols-3 gap-2 text-center text-xs font-bold">
          <div class="p-2.5 rounded-lg bg-amber-950 border border-amber-700 text-amber-300">☀ Solar Photovoltaic</div>
          <div class="p-2.5 rounded-lg bg-blue-950 border border-blue-700 text-blue-300">💧 Hydroelectric Dam</div>
          <div class="p-2.5 rounded-lg bg-emerald-950 border border-emerald-700 text-emerald-300">🌱 Biomass Gasification</div>
        </div>
      </div>
    `;
  },

  getVisual4_3: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="text-xs font-mono font-bold text-emerald-400 uppercase mb-2">5R Circular Waste Hierarchy</div>
        <div class="flex items-center justify-between text-xs font-mono py-1 px-2 bg-slate-800 rounded">
          <span class="text-emerald-400 font-bold">REFUSE</span> ➔ 
          <span class="text-teal-300">REDUCE</span> ➔ 
          <span class="text-sky-300">REUSE</span> ➔ 
          <span class="text-indigo-300">RECYCLE</span> ➔ 
          <span class="text-amber-300">ROT (Compost)</span>
        </div>
      </div>
    `;
  },

  getVisual4_4: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="text-xs font-mono font-bold text-teal-400 uppercase mb-1">Green Transportation &amp; Biofuels</div>
        <p class="text-xs text-slate-300">
          Electric Vehicles (EVs) utilize lithium battery storage with <strong>zero direct tailpipe emissions</strong>, while B20 Biodiesel blends 20% sustainable palm methyl ester into diesel.
        </p>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // CHAPTER 5 VISUALS: GENETICS & MITOSIS/MEIOSIS
  // -------------------------------------------------------------
  getVisual5_1: function() {
    return `
      <div class="mt-4 p-5 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 text-white border border-emerald-900/60 shadow-lg">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-mono font-bold uppercase text-emerald-400 flex items-center gap-1.5">
            <i data-lucide="split" class="w-3.5 h-3.5"></i>
            Interactive Cell Division Stage Scrubber (PMAT)
          </span>
          <span id="pmatStageBadge" class="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold">Stage: Metaphase</span>
        </div>

        <div class="grid grid-cols-4 gap-2 mb-3">
          <button onclick="TopicVisualsEngine.setPmatStage('prophase')" class="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200">1. Prophase</button>
          <button onclick="TopicVisualsEngine.setPmatStage('metaphase')" class="p-2 rounded-lg bg-emerald-700 text-xs font-bold text-white">2. Metaphase</button>
          <button onclick="TopicVisualsEngine.setPmatStage('anaphase')" class="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200">3. Anaphase</button>
          <button onclick="TopicVisualsEngine.setPmatStage('telophase')" class="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200">4. Telophase</button>
        </div>

        <div id="pmatVisualBox" class="p-4 bg-slate-900 rounded-xl border border-slate-800 text-xs text-emerald-200 leading-relaxed font-mono">
          <strong>Metaphase:</strong> Chromosomes align strictly along the equatorial plate. Spindle fibers attach firmly to the centromeres.
        </div>
      </div>
    `;
  },
  setPmatStage: function(stage) {
    const box = document.getElementById('pmatVisualBox');
    const badge = document.getElementById('pmatStageBadge');
    badge.textContent = `Stage: ${stage.toUpperCase()}`;

    const data = {
      prophase: "<strong>Prophase:</strong> Chromatin condenses into visible double-chromatid chromosomes. Nuclear envelope disintegrates; centrioles migrate to opposite poles.",
      metaphase: "<strong>Metaphase:</strong> Chromosomes align along the equatorial metaphase plane. Spindle fibers attach securely to centromeres.",
      anaphase: "<strong>Anaphase:</strong> Centromeres divide. Spindle fibers shorten, pulling sister chromatids apart toward opposite poles.",
      telophase: "<strong>Telophase & Cytokinesis:</strong> Chromatids reach poles and decondense. Two nuclear membranes reform, producing 2 identical diploid (2n) daughter cells!"
    };
    box.innerHTML = data[stage] || "";
  },

  getVisual5_2: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="text-xs font-mono font-bold text-teal-400 uppercase mb-2">Sex Determination Probability Tree</div>
        <div class="flex items-center justify-around text-center text-xs p-2 bg-slate-950 rounded-lg font-mono">
          <div>Father: <span class="text-sky-400 font-bold">44 + XY</span></div>
          <div class="text-slate-500">×</div>
          <div>Mother: <span class="text-rose-400 font-bold">44 + XX</span></div>
          <div class="text-slate-500">➔</div>
          <div><span class="text-emerald-400 font-bold">50% Boy (XY)</span> : <span class="text-emerald-400 font-bold">50% Girl (XX)</span></div>
        </div>
      </div>
    `;
  },

  getVisual5_3: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="text-xs font-mono font-bold text-rose-400 uppercase mb-2">Mutation Karyotype Matrix</div>
        <div class="grid grid-cols-3 gap-2 text-center text-xs">
          <div class="p-2.5 bg-slate-800 rounded-lg border border-slate-700">
            <span class="font-bold text-slate-200">Down Syndrome</span>
            <div class="text-[10px] text-amber-300 font-mono mt-0.5">Trisomy 21 (47 chr)</div>
          </div>
          <div class="p-2.5 bg-slate-800 rounded-lg border border-slate-700">
            <span class="font-bold text-slate-200">Turner Syndrome</span>
            <div class="text-[10px] text-sky-300 font-mono mt-0.5">Female XO (45 chr)</div>
          </div>
          <div class="p-2.5 bg-slate-800 rounded-lg border border-slate-700">
            <span class="font-bold text-slate-200">Klinefelter Syndrome</span>
            <div class="text-[10px] text-purple-300 font-mono mt-0.5">Male XXY (47 chr)</div>
          </div>
        </div>
      </div>
    `;
  },

  getVisual5_4: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="text-xs font-mono font-bold text-emerald-400 uppercase mb-2">Continuous vs Discontinuous Variation Curve</div>
        <div class="grid grid-cols-2 gap-3 text-xs">
          <div class="p-3 bg-slate-800 rounded-lg border border-slate-700">
            <span class="font-bold text-slate-200">Continuous Variation</span>
            <div class="text-[10px] text-emerald-300 mt-1">Bell-shaped normal distribution curve (Height, Body mass). Influenced by genes + environment.</div>
          </div>
          <div class="p-3 bg-slate-800 rounded-lg border border-slate-700">
            <span class="font-bold text-slate-200">Discontinuous Variation</span>
            <div class="text-[10px] text-teal-300 mt-1">Discrete bar chart categories (ABO blood groups, tongue rolling). Strictly genetic alleles.</div>
          </div>
        </div>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // CHAPTER 6 VISUALS: SKELETON & ANTAGONISTIC MUSCLES
  // -------------------------------------------------------------
  getVisual6_1: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="text-xs font-mono font-bold text-emerald-400 uppercase mb-2">Animal Skeletal Classification</div>
        <div class="grid grid-cols-3 gap-2 text-center text-xs">
          <div class="p-2.5 bg-slate-800 rounded-lg border border-slate-700">
            <span class="font-bold text-slate-200">Endoskeleton</span>
            <div class="text-[10px] text-slate-400">Vertebrates (Mammals, Birds)</div>
          </div>
          <div class="p-2.5 bg-slate-800 rounded-lg border border-slate-700">
            <span class="font-bold text-slate-200">Exoskeleton</span>
            <div class="text-[10px] text-slate-400">Chitin molting (Arthropods)</div>
          </div>
          <div class="p-2.5 bg-slate-800 rounded-lg border border-slate-700">
            <span class="font-bold text-slate-200">Hydrostatic</span>
            <div class="text-[10px] text-slate-400">Coelomic fluid (Earthworms)</div>
          </div>
        </div>
      </div>
    `;
  },

  getVisual6_2: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="text-xs font-mono font-bold text-emerald-400 uppercase mb-2">Antagonistic Arm Mechanics Quick-Look</div>
        <div class="flex items-center justify-around p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs">
          <div>
            <span class="text-slate-400 block text-[10px]">BENDING ARM</span>
            <span class="text-emerald-400 font-bold">Biceps contracts, Triceps relaxes</span>
          </div>
          <div class="text-slate-600">|</div>
          <div>
            <span class="text-slate-400 block text-[10px]">STRAIGHTENING ARM</span>
            <span class="text-amber-400 font-bold">Triceps contracts, Biceps relaxes</span>
          </div>
        </div>
      </div>
    `;
  },

  getVisual6_3: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="text-xs font-mono font-bold text-emerald-400 uppercase mb-1">Sigmoid Growth Curve</div>
        <p class="text-xs text-slate-300">
          Human and multicellular organism growth follows an <strong>S-shaped Sigmoid Curve</strong>: Lag phase (slow) ➔ Exponential pubertal spurt ➔ Deceleration ➔ Mature stationary plateau.
        </p>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // CHAPTER 7 VISUALS: ENDOCRINE SYSTEM & NEUROTRANSMISSION
  // -------------------------------------------------------------
  getVisual7_1: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="text-xs font-mono font-bold text-emerald-400 uppercase mb-2">Blood Glucose Homeostatic Feedback Loop</div>
        <div class="p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs text-slate-300 flex items-center justify-between font-mono">
          <span>High Blood Glucose</span>
          <span>➔</span>
          <span class="text-emerald-400 font-bold">Pancreas secretes Insulin</span>
          <span>➔</span>
          <span class="text-sky-300">Glucose converted to Glycogen</span>
        </div>
      </div>
    `;
  },

  getVisual7_2: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="text-xs font-mono font-bold text-rose-400 uppercase mb-2">Drug Categories &amp; Synaptic Impact</div>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
          <div class="p-2 bg-slate-800 rounded border border-slate-700 text-slate-200"><strong>Depressants</strong><div class="text-[10px] text-slate-400">Slows CNS (Alcohol)</div></div>
          <div class="p-2 bg-slate-800 rounded border border-slate-700 text-slate-200"><strong>Stimulants</strong><div class="text-[10px] text-slate-400">Speeds CNS (Amphetamines)</div></div>
          <div class="p-2 bg-slate-800 rounded border border-slate-700 text-slate-200"><strong>Hallucinogens</strong><div class="text-[10px] text-slate-400">Distorts senses (LSD)</div></div>
          <div class="p-2 bg-slate-800 rounded border border-slate-700 text-slate-200"><strong>Inhalants</strong><div class="text-[10px] text-slate-400">Brain damage (Toluene)</div></div>
        </div>
      </div>
    `;
  },

  getVisual7_3: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="text-xs font-mono font-bold text-emerald-400 uppercase mb-1">Mental Health Resilience Factors</div>
        <p class="text-xs text-slate-300">
          Maintained by balanced neurotransmission (serotonin/dopamine), healthy sleep hygiene, stress mitigation, and strong social support networks.
        </p>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // CHAPTER 8 VISUALS: ATOMIC, MOLECULAR, IONIC & ISOTOPES
  // -------------------------------------------------------------
  getVisual8_1: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="text-xs font-mono font-bold text-purple-400 uppercase mb-2">Substance Bonding Micro-Structure</div>
        <div class="grid grid-cols-3 gap-2 text-center text-xs">
          <div class="p-2.5 bg-slate-800 rounded-lg border border-slate-700">
            <span class="font-bold text-purple-300">Atomic</span>
            <div class="text-[10px] text-slate-400 mt-1">Single atoms / metallic sea of electrons</div>
          </div>
          <div class="p-2.5 bg-slate-800 rounded-lg border border-slate-700">
            <span class="font-bold text-sky-300">Molecular</span>
            <div class="text-[10px] text-slate-400 mt-1">Covalent shared electron pairs</div>
          </div>
          <div class="p-2.5 bg-slate-800 rounded-lg border border-slate-700">
            <span class="font-bold text-emerald-300">Ionic</span>
            <div class="text-[10px] text-slate-400 mt-1">Giant lattice of cations &amp; anions</div>
          </div>
        </div>
      </div>
    `;
  },

  getVisual8_2: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="text-xs font-mono font-bold text-purple-400 uppercase mb-1">Periodic Table Organization</div>
        <p class="text-xs text-slate-300">
          Arranged by ascending <strong>Proton Number</strong>. <strong>Groups (1–18)</strong> = valence electrons (similar reactivities); <strong>Periods (1–7)</strong> = number of occupied electron shells.
        </p>
      </div>
    `;
  },

  getVisual8_3: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="text-xs font-mono font-bold text-purple-400 uppercase mb-2">Essential Radioisotope Diagnostic Table</div>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
          <div class="p-2 bg-slate-800 rounded border border-slate-700 text-slate-200"><strong>Cobalt-60</strong><div class="text-[10px] text-purple-300">Cancer Radiotherapy</div></div>
          <div class="p-2 bg-slate-800 rounded border border-slate-700 text-slate-200"><strong>Iodine-131</strong><div class="text-[10px] text-purple-300">Thyroid Carcinoma</div></div>
          <div class="p-2 bg-slate-800 rounded border border-slate-700 text-slate-200"><strong>Carbon-14</strong><div class="text-[10px] text-purple-300">Fossil Radiodating</div></div>
          <div class="p-2 bg-slate-800 rounded border border-slate-700 text-slate-200"><strong>Sodium-24</strong><div class="text-[10px] text-purple-300">Pipe Leak Tracing</div></div>
        </div>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // CHAPTER 9 VISUALS: INDUSTRIAL CHEMISTRY
  // -------------------------------------------------------------
  getVisual9_1: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="text-xs font-mono font-bold text-purple-400 uppercase mb-2">Alloy Composition Ratios</div>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
          <div class="p-2 bg-slate-800 rounded border border-slate-700"><strong>Steel:</strong> 99% Fe + 1% C</div>
          <div class="p-2 bg-slate-800 rounded border border-slate-700"><strong>Bronze:</strong> 88% Cu + 12% Sn</div>
          <div class="p-2 bg-slate-800 rounded border border-slate-700"><strong>Brass:</strong> 75% Cu + 25% Zn</div>
          <div class="p-2 bg-slate-800 rounded border border-slate-700"><strong>Duralumin:</strong> 95% Al + Cu + Mg</div>
          <div class="p-2 bg-slate-800 rounded border border-slate-700"><strong>Pewter:</strong> 95% Sn + Sb + Cu</div>
          <div class="p-2 bg-slate-800 rounded border border-slate-700"><strong>Stainless:</strong> Fe + Cr + Ni</div>
        </div>
      </div>
    `;
  },

  getVisual9_2: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="text-xs font-mono font-bold text-purple-400 uppercase mb-1">Borosilicate Glass vs Soda-Lime</div>
        <p class="text-xs text-slate-300">
          Borosilicate glass incorporates <strong>Boron Trioxide (B₂O₃)</strong>, resulting in an exceptionally low thermal expansion coefficient that prevents cracking under rapid heating (Pyrex labware).
        </p>
      </div>
    `;
  },

  getVisual9_3: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="text-xs font-mono font-bold text-amber-400 uppercase mb-2">Vulcanization Cross-Link Mechanism</div>
        <div class="p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono text-xs text-center text-amber-300">
          Polyisoprene Chains + Sulfur + Heat ➔ Inter-chain Sulfur Bridges (-S-S-)
        </div>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // CHAPTER 10 VISUALS: MEDICINE & ANTIOXIDANTS
  // -------------------------------------------------------------
  getVisual10_1: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="text-xs font-mono font-bold text-purple-400 uppercase mb-1">Antibiotic Course Adherence Warning</div>
        <p class="text-xs text-slate-300">
          Stopping antibiotics prematurely leaves partially resistant surviving bacteria to multiply into <strong>antibiotic-resistant superbugs</strong> (e.g. MRSA). Always complete the prescribed course!
        </p>
      </div>
    `;
  },

  getVisual10_2: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="text-xs font-mono font-bold text-rose-400 uppercase mb-2">Free Radical Cellular Damage Pathway</div>
        <div class="p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs text-rose-200">
          UV / Cigarette Smoke ➔ Unpaired Electron Radical ➔ Steals electron from cell membrane lipids &amp; DNA ➔ Mutagenesis &amp; premature aging.
        </div>
      </div>
    `;
  },

  getVisual10_3: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="text-xs font-mono font-bold text-emerald-400 uppercase mb-1">Key Dietary Antioxidants</div>
        <div class="grid grid-cols-3 gap-2 text-center text-xs mt-2">
          <div class="p-2 bg-slate-800 rounded border border-slate-700"><strong>Vitamin C</strong><div class="text-[10px] text-emerald-300">Guava &amp; Citrus</div></div>
          <div class="p-2 bg-slate-800 rounded border border-slate-700"><strong>Vitamin E</strong><div class="text-[10px] text-emerald-300">Nuts &amp; Palm Oil</div></div>
          <div class="p-2 bg-slate-800 rounded border border-slate-700"><strong>Lycopene</strong><div class="text-[10px] text-emerald-300">Tomatoes &amp; Melon</div></div>
        </div>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // CHAPTER 11 VISUALS: PHYSICS & LINEAR MOTION
  // -------------------------------------------------------------
  getVisual11_1: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="text-xs font-mono font-bold text-amber-400 uppercase mb-2">50 Hz Ticker Tape Motion Graphic</div>
        <div class="p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono text-xs flex justify-between items-center text-amber-300">
          <span>● • • • • • ●</span>
          <span>1 tick = 1/50 s = 0.02 seconds</span>
          <span>10 ticks = 0.20 seconds</span>
        </div>
      </div>
    `;
  },

  getVisual11_2: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="text-xs font-mono font-bold text-amber-400 uppercase mb-2">Motion Graph Interpretations</div>
        <div class="grid grid-cols-2 gap-3 text-xs">
          <div class="p-3 bg-slate-800 rounded border border-slate-700">
            <span class="font-bold text-slate-200">Displacement-Time (s-t)</span>
            <div class="text-[11px] text-amber-300 mt-1">Gradient = Velocity (v)</div>
          </div>
          <div class="p-3 bg-slate-800 rounded border border-slate-700">
            <span class="font-bold text-slate-200">Velocity-Time (v-t)</span>
            <div class="text-[11px] text-amber-300 mt-1">Gradient = Acceleration (a)<br><strong>Area Under Curve = Distance (s)</strong></div>
          </div>
        </div>
      </div>
    `;
  },

  getVisual11_3: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="text-xs font-mono font-bold text-amber-400 uppercase mb-1">Gravitational Free Fall ($g = 9.81\\text{ m/s}^2$)</div>
        <p class="text-xs text-slate-300">
          In a vacuum, gravitational acceleration is strictly independent of mass. A heavy coin and a light feather accelerate downwards at the identical rate!
        </p>
      </div>
    `;
  },

  getVisual11_4: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="text-xs font-mono font-bold text-amber-400 uppercase mb-1">Newton's First Law of Inertia</div>
        <p class="text-xs text-slate-300">
          An object resists changes to its state of rest or motion. <strong>Greater Mass = Greater Inertia.</strong> Safety seatbelts and airbags restrain occupants during sudden braking.
        </p>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // CHAPTER 12 VISUALS: NUCLEAR ENERGY
  // -------------------------------------------------------------
  getVisual12_1: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="text-xs font-mono font-bold text-amber-400 uppercase mb-1">Immense Fuel Energy Density</div>
        <p class="text-xs text-slate-300">
          <strong>10 grams of Uranium-235</strong> generates the energy equivalent of burning <strong>1 tonne of coal</strong> or 500 liters of crude oil without direct $\\text{CO}_2$ emissions!
        </p>
      </div>
    `;
  },

  getVisual12_2: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="text-xs font-mono font-bold text-amber-400 uppercase mb-2">Nuclear Reactor Components Matrix</div>
        <div class="grid grid-cols-2 gap-2 text-xs">
          <div class="p-2 bg-slate-800 rounded border border-slate-700"><strong>Control Rods:</strong> Boron/Cadmium (Absorbs neutrons)</div>
          <div class="p-2 bg-slate-800 rounded border border-slate-700"><strong>Moderator:</strong> Graphite/Heavy water (Slows neutrons)</div>
          <div class="p-2 bg-slate-800 rounded border border-slate-700"><strong>Coolant:</strong> Pressurized water (Transfers core heat)</div>
          <div class="p-2 bg-slate-800 rounded border border-slate-700"><strong>Shielding:</strong> 2m concrete + lead (Blocks gamma rays)</div>
        </div>
      </div>
    `;
  },

  getVisual12_3: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="text-xs font-mono font-bold text-rose-400 uppercase mb-2">Radiation Shielding Penetration Scale</div>
        <div class="space-y-1 text-xs font-mono">
          <div class="p-1.5 bg-slate-800 rounded flex justify-between"><span>Alpha (α)</span><span class="text-slate-400">Blocked by sheet of paper</span></div>
          <div class="p-1.5 bg-slate-800 rounded flex justify-between"><span>Beta (β)</span><span class="text-slate-400">Blocked by 5mm aluminium</span></div>
          <div class="p-1.5 bg-slate-800 rounded flex justify-between text-rose-300"><span>Gamma (γ)</span><span class="text-rose-400 font-bold">Requires thick lead &amp; concrete</span></div>
        </div>
      </div>
    `;
  },

  getVisual12_4: function() {
    return `
      <div class="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
        <div class="text-xs font-mono font-bold text-amber-400 uppercase mb-1">Malaysia's TRIGA PUSPATI Research Reactor</div>
        <p class="text-xs text-slate-300">
          Located in Bangi, Selangor since 1982. A 1-megawatt pool reactor dedicated to scientific research, neutron activation analysis, and nuclear medicine isotope fabrication.
        </p>
      </div>
    `;
  }
};

// Export to window
if (typeof window !== 'undefined') {
  window.TopicVisualsEngine = TopicVisualsEngine;
}
