// Form 4 Science (KSSM / SPM) - 3D Interactive WebGL Models Engine (Three.js)
// Provides 12 unique, user-interactive 3D rendered models (one distinct model per chapter).
// Full 360° OrbitControls: Drag to rotate, Scroll to zoom, Right-click to pan.

const ThreeModelsEngine = {
  activeRenderer: null,
  activeScene: null,
  activeCamera: null,
  activeControls: null,
  animId: null,
  currentChapterId: 1,
  modelState: {},

  // Cleanup existing WebGL context and animation loops
  cleanup: function() {
    if (this.animId) {
      cancelAnimationFrame(this.animId);
      this.animId = null;
    }
    if (this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
      this.resizeListener = null;
    }
    if (this.activeControls) {
      this.activeControls.dispose();
      this.activeControls = null;
    }
    if (this.activeRenderer) {
      this.activeRenderer.dispose();
      if (this.activeRenderer.domElement && this.activeRenderer.domElement.parentNode) {
        this.activeRenderer.domElement.parentNode.removeChild(this.activeRenderer.domElement);
      }
      this.activeRenderer = null;
    }
    this.activeScene = null;
    this.activeCamera = null;
    this.modelState = {};
  },

  // Main 3D Model Dispatcher
  render3DModel: function(chapterId, containerId) {
    this.cleanup();
    this.currentChapterId = chapterId;
    const container = document.getElementById(containerId);
    if (!container) return;

    // Build the 3D Viewer Container Shell
    container.innerHTML = `
      <div class="relative w-full rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden">
        <!-- 3D Viewport Canvas Container -->
        <div id="threeCanvasWrapper" class="relative w-full h-[480px] bg-gradient-to-b from-slate-950 via-slate-900 to-black cursor-grab active:cursor-grabbing">
          <!-- 3D Overlay Badges & Instructions -->
          <div class="absolute top-4 left-4 z-10 flex flex-wrap items-center gap-2 pointer-events-none">
            <span class="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 backdrop-blur-md">
              🪐 Interactive 3D Model · Chapter ${chapterId}
            </span>
            <span class="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-900/80 text-slate-300 border border-slate-700/80 backdrop-blur-md">
              WebGL 60 FPS
            </span>
          </div>

          <div class="absolute top-4 right-4 z-10 flex items-center gap-2">
            <button onclick="ThreeModelsEngine.resetCamera()" class="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-700/80 backdrop-blur-md transition-all text-xs font-mono" title="Reset View">
              ⟲ Reset Camera
            </button>
            <button onclick="ThreeModelsEngine.toggleFullscreen()" class="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-700/80 backdrop-blur-md transition-all text-xs font-mono" title="Fullscreen">
              ⛶ Fullscreen
            </button>
          </div>

          <!-- Bottom Gesture Hint -->
          <div class="absolute bottom-3 left-4 z-10 pointer-events-none flex items-center gap-2 text-[11px] font-mono text-slate-400 bg-slate-950/70 px-3 py-1 rounded-lg border border-slate-800/80 backdrop-blur-md">
            <span>🖱 Drag to Rotate 360°</span>
            <span>·</span>
            <span>⚲ Scroll to Zoom</span>
            <span>·</span>
            <span>Right-Click to Pan</span>
          </div>
        </div>

        <!-- Interactive 3D Model Control Bar -->
        <div id="threeControlBar" class="p-4 sm:p-5 bg-slate-900/90 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          <!-- Populated per model -->
        </div>
      </div>
    `;

    // Initialize Three.js Scene, Camera, Renderer, Controls
    const wrapper = document.getElementById('threeCanvasWrapper');
    const width = (wrapper && wrapper.clientWidth > 0) ? wrapper.clientWidth : 800;
    const height = (wrapper && wrapper.clientHeight > 0) ? wrapper.clientHeight : 480;

    const scene = new THREE.Scene();
    this.activeScene = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.activeCamera = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.activeRenderer = renderer;
    wrapper.appendChild(renderer.domElement);

    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxDistance = 150;
    controls.minDistance = 3;
    this.activeControls = controls;

    // Ambient & Directional Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.9);
    dirLight1.position.set(20, 40, 30);
    dirLight1.castShadow = true;
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x10b981, 0.5); // Subtle emerald rim light
    dirLight2.position.set(-20, -20, -20);
    scene.add(dirLight2);

    // Subtle 3D Grid ground
    const gridHelper = new THREE.GridHelper(40, 20, 0x10b981, 0x334155);
    gridHelper.position.y = -6;
    gridHelper.material.opacity = 0.2;
    gridHelper.material.transparent = true;
    scene.add(gridHelper);

    // Route to Chapter's Specific Unique 3D Model
    this.buildChapterModel(chapterId, scene, camera, controls);

    // Window Resize Handler
    const onResize = () => {
      if (!wrapper || !this.activeRenderer || !this.activeCamera) return;
      const w = wrapper.clientWidth || 800;
      const h = wrapper.clientHeight || 480;
      this.activeCamera.aspect = w / h;
      this.activeCamera.updateProjectionMatrix();
      this.activeRenderer.setSize(w, h);
    };
    this.resizeListener = onResize;
    window.addEventListener('resize', onResize);
    setTimeout(onResize, 50);

    // Main 60fps Animation Loop
    const animate = () => {
      this.animId = requestAnimationFrame(animate);
      controls.update();

      // Custom per-model tick animations
      if (this.modelState.onTick) {
        this.modelState.onTick();
      }

      renderer.render(scene, camera);
    };
    animate();
  },

  resetCamera: function() {
    if (this.modelState.defaultCamPos && this.activeCamera && this.activeControls) {
      this.activeCamera.position.copy(this.modelState.defaultCamPos);
      this.activeControls.target.set(0, 0, 0);
      this.activeControls.update();
    }
  },

  toggleFullscreen: function() {
    const wrapper = document.getElementById('threeCanvasWrapper');
    if (!document.fullscreenElement) {
      wrapper.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen();
    }
  },

  // -------------------------------------------------------------
  // 12 UNIQUE 3D MODELS BUILDER (ONE DISTINCT MODEL PER TOPIC)
  // -------------------------------------------------------------
  buildChapterModel: function(chapterId, scene, camera, controls) {
    switch(chapterId) {
      case 1: this.build3DFumeHood(scene, camera, controls); break;
      case 2: this.build3DHumanTorsoCPR(scene, camera, controls); break;
      case 3: this.build3DSphygmomanometerArtery(scene, camera, controls); break;
      case 4: this.build3DSmartEcoTurbineSolar(scene, camera, controls); break;
      case 5: this.build3DDNADoubleHelix(scene, camera, controls); break;
      case 6: this.build3DArticulatedArmSkeleton(scene, camera, controls); break;
      case 7: this.build3DEndocrineBrainHologram(scene, camera, controls); break;
      case 8: this.build3DGiantIonicLattice(scene, camera, controls); break;
      case 9: this.build3DAlloyDislocationPlane(scene, camera, controls); break;
      case 10: this.build3DFreeRadicalAntioxidant(scene, camera, controls); break;
      case 11: this.build3DDualVacuumChamber(scene, camera, controls); break;
      case 12: this.build3DNuclearReactorCore(scene, camera, controls); break;
    }
  },

  // -------------------------------------------------------------
  // MODEL 1: 3D LABORATORY FUME HOOD & BIOHAZARD EYEWASH (Ch 1)
  // -------------------------------------------------------------
  build3DFumeHood: function(scene, camera, controls) {
    camera.position.set(0, 5, 24);
    this.modelState.defaultCamPos = camera.position.clone();

    const group = new THREE.Group();

    // Fume Hood Cabinet Body
    const cabinetGeo = new THREE.BoxGeometry(14, 12, 8);
    const cabinetMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.4 });
    const cabinet = new THREE.Mesh(cabinetGeo, cabinetMat);
    cabinet.position.y = 0;
    group.add(cabinet);

    // Working Chamber Interior (cutout)
    const chamberGeo = new THREE.BoxGeometry(12, 7, 7);
    const chamberMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.8 });
    const chamber = new THREE.Mesh(chamberGeo, chamberMat);
    chamber.position.set(0, 0.5, 0.6);
    group.add(chamber);

    // Sliding Glass Sash Window
    const sashGeo = new THREE.BoxGeometry(11.8, 6, 0.3);
    const sashMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.45,
      roughness: 0.1,
      transmission: 0.8
    });
    const sash = new THREE.Mesh(sashGeo, sashMat);
    sash.position.set(0, 1.5, 4.1);
    group.add(sash);
    this.modelState.sash = sash;

    // Exhaust Duct Pipe on Top
    const ductGeo = new THREE.CylinderGeometry(1.5, 1.5, 5, 16);
    const ductMat = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.7 });
    const duct = new THREE.Mesh(ductGeo, ductMat);
    duct.position.set(0, 8.5, 0);
    group.add(duct);

    // Yellow Category A Biohazard Sharp Waste Bin
    const binGeo = new THREE.CylinderGeometry(1.2, 1.0, 3, 16);
    const binMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.3 });
    const bin = new THREE.Mesh(binGeo, binMat);
    bin.position.set(9, -4.5, 2);
    group.add(bin);

    // Eye Wash Station Nozzles
    const pipeGeo = new THREE.CylinderGeometry(0.2, 0.2, 6, 8);
    const pipeMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8 });
    const pipe = new THREE.Mesh(pipeGeo, pipeMat);
    pipe.position.set(-9, -3, 2);
    group.add(pipe);

    const bowlGeo = new THREE.CylinderGeometry(1.5, 0.5, 1, 16);
    const bowlMat = new THREE.MeshStandardMaterial({ color: 0x10b981 });
    const bowl = new THREE.Mesh(bowlGeo, bowlMat);
    bowl.position.set(-9, 0, 2);
    group.add(bowl);

    scene.add(group);

    // Control Bar UI
    document.getElementById('threeControlBar').innerHTML = `
      <div class="flex items-center gap-3">
        <span class="font-bold text-slate-200">Interactive Fume Hood Sash:</span>
        <button onclick="ThreeModelsEngine.moveSash(2.8)" class="px-3 py-1 rounded-lg bg-emerald-600 text-white font-mono font-bold">Open Window</button>
        <button onclick="ThreeModelsEngine.moveSash(0.2)" class="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 font-mono font-bold">Lower Sash (Safe)</button>
      </div>
      <div class="text-xs text-slate-400">
        Features: Sliding protective sash, top exhaust duct, Category A sharp bin, and emergency eyewash.
      </div>
    `;
  },
  moveSash: function(y) {
    if (this.modelState.sash) this.modelState.sash.position.y = y;
  },

  // -------------------------------------------------------------
  // MODEL 2: 3D ANATOMICAL RIBCAGE & CARDIAC CPR TORSO (Ch 2)
  // -------------------------------------------------------------
  build3DHumanTorsoCPR: function(scene, camera, controls) {
    camera.position.set(0, 4, 18);
    this.modelState.defaultCamPos = camera.position.clone();

    const group = new THREE.Group();

    // 3D Sternum & Ribcage Structure
    const sternumGeo = new THREE.BoxGeometry(1.4, 7, 0.8);
    const boneMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.5 });
    const sternum = new THREE.Mesh(sternumGeo, boneMat);
    sternum.position.set(0, 1, 2.5);
    group.add(sternum);
    this.modelState.sternum = sternum;

    // Curved Rib Arches (12 Rib Pairs)
    for (let i = 0; i < 6; i++) {
      const ribCurve = new THREE.EllipseCurve(0, 0, 5.5, 3.8, 0, Math.PI, false, 0);
      const points = ribCurve.getPoints(24);
      const ribGeo = new THREE.BufferGeometry().setFromPoints(points);
      const ribMat = new THREE.LineBasicMaterial({ color: 0xe2e8f0, linewidth: 3 });
      const ribLine = new THREE.Line(ribGeo, ribMat);
      ribLine.rotation.x = Math.PI / 2;
      ribLine.position.set(0, 4 - i * 1.2, 0);
      group.add(ribLine);
    }

    // 3D Pulsing Heart Mesh inside Ribcage
    const heartShape = new THREE.Shape();
    heartShape.moveTo(0, 0);
    heartShape.bezierCurveTo(0, 2, -2, 3, -2, 1.5);
    heartShape.bezierCurveTo(-2, 0, 0, -1.5, 0, -3);
    heartShape.bezierCurveTo(0, -1.5, 2, 0, 2, 1.5);
    heartShape.bezierCurveTo(2, 3, 0, 2, 0, 0);

    const extrudeSettings = { depth: 1.8, bevelEnabled: true, bevelSegments: 3, steps: 2, bevelSize: 0.5, bevelThickness: 0.5 };
    const heartGeo = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
    const heartMat = new THREE.MeshStandardMaterial({ color: 0xe11d48, roughness: 0.3, metalness: 0.1 });
    const heart = new THREE.Mesh(heartGeo, heartMat);
    heart.scale.set(0.8, 0.8, 0.8);
    heart.position.set(0.3, 1, 0.5);
    group.add(heart);
    this.modelState.heart = heart;

    // Aorta & Vena Cava vascular pipes
    const aortaGeo = new THREE.TubeGeometry(
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 2, 0.5),
        new THREE.Vector3(0, 5, 0.2),
        new THREE.Vector3(-1.5, 6, 0)
      ]),
      20, 0.5, 8, false
    );
    const aortaMat = new THREE.MeshStandardMaterial({ color: 0xef4444 });
    const aorta = new THREE.Mesh(aortaGeo, aortaMat);
    group.add(aorta);

    scene.add(group);

    // Heartbeat pulsation
    let time = 0;
    this.modelState.onTick = () => {
      time += 0.05;
      const s = 0.8 + Math.sin(time * 3) * 0.05;
      heart.scale.set(s, s, s);
    };

    document.getElementById('threeControlBar').innerHTML = `
      <div class="flex items-center gap-3">
        <span class="font-bold text-slate-200">CPR Sternal Compression:</span>
        <button onclick="ThreeModelsEngine.press3DSternum()" class="px-4 py-1.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-mono font-bold shadow-lg shadow-rose-600/30">
          Push Sternum 5 cm Down
        </button>
      </div>
      <div class="text-xs text-slate-400">
        3D Model: Human thorax ribcage with beating heart and ascending aorta. Shows 5cm compression mechanics.
      </div>
    `;
  },
  press3DSternum: function() {
    if (this.modelState.sternum) {
      this.modelState.sternum.position.z = 1.0;
      setTimeout(() => {
        if (this.modelState.sternum) this.modelState.sternum.position.z = 2.5;
      }, 250);
      if (window.ScienceGamesEngine) window.ScienceGamesEngine.playSfx('click');
    }
  },

  // -------------------------------------------------------------
  // MODEL 3: SPHYGMOMANOMETER & ARTERIAL LUMEN (Ch 3)
  // -------------------------------------------------------------
  build3DSphygmomanometerArtery: function(scene, camera, controls) {
    camera.position.set(0, 0, 20);
    this.modelState.defaultCamPos = camera.position.clone();

    const group = new THREE.Group();

    // 3D Cutaway Arterial Vessel
    const arteryGeo = new THREE.CylinderGeometry(3.5, 3.5, 14, 32, 1, true);
    const arteryMat = new THREE.MeshStandardMaterial({ color: 0xb91c1c, side: THREE.DoubleSide, roughness: 0.4 });
    const artery = new THREE.Mesh(arteryGeo, arteryMat);
    artery.rotation.z = Math.PI / 2;
    group.add(artery);
    this.modelState.artery = artery;

    // Blood cells flow particles inside artery
    const particleGeo = new THREE.SphereGeometry(0.35, 8, 8);
    const particleMat = new THREE.MeshStandardMaterial({ color: 0xef4444 });
    const bloodCells = [];
    for (let i = 0; i < 35; i++) {
      const cell = new THREE.Mesh(particleGeo, particleMat);
      cell.position.set((Math.random() - 0.5) * 12, (Math.random() - 0.5) * 4, (Math.random() - 0.5) * 4);
      group.add(cell);
      bloodCells.push(cell);
    }
    this.modelState.bloodCells = bloodCells;

    // Inflatable Blood Pressure Cuff around artery
    const cuffGeo = new THREE.CylinderGeometry(4.2, 4.2, 5, 32, 1, true);
    const cuffMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, side: THREE.DoubleSide, roughness: 0.6 });
    const cuff = new THREE.Mesh(cuffGeo, cuffMat);
    cuff.rotation.z = Math.PI / 2;
    group.add(cuff);

    // Analog Dial Pressure Gauge
    const dialGeo = new THREE.CylinderGeometry(2, 2, 0.4, 24);
    const dialMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const dial = new THREE.Mesh(dialGeo, dialMat);
    dial.position.set(0, 6, 0);
    dial.rotation.x = Math.PI / 2;
    group.add(dial);

    scene.add(group);

    this.modelState.onTick = () => {
      this.modelState.bloodCells.forEach(cell => {
        cell.position.x += 0.08;
        if (cell.position.x > 6) cell.position.x = -6;
      });
    };

    document.getElementById('threeControlBar').innerHTML = `
      <div class="flex items-center gap-3">
        <span class="font-bold text-slate-200">Arterial Vessel Pressure:</span>
        <button onclick="ThreeModelsEngine.toggleArteryPulse('systolic')" class="px-3 py-1 rounded-lg bg-emerald-600 text-white font-mono font-bold">120 mmHg (Systolic)</button>
        <button onclick="ThreeModelsEngine.toggleArteryPulse('diastolic')" class="px-3 py-1 rounded-lg bg-sky-600 text-white font-mono font-bold">80 mmHg (Diastolic)</button>
      </div>
      <div class="text-xs text-slate-400">
        3D Model: Arterial lumen with laminar erythrocyte flow constricted by an inflatable sphygmomanometer cuff.
      </div>
    `;
  },
  toggleArteryPulse: function(mode) {
    if (this.modelState.artery) {
      const s = mode === 'systolic' ? 1.25 : 0.85;
      this.modelState.artery.scale.set(1, s, s);
    }
  },

  // -------------------------------------------------------------
  // MODEL 4: 3D SMART WIND TURBINE & SOLAR ARRAY (Ch 4)
  // -------------------------------------------------------------
  build3DSmartEcoTurbineSolar: function(scene, camera, controls) {
    camera.position.set(0, 10, 28);
    this.modelState.defaultCamPos = camera.position.clone();

    const group = new THREE.Group();

    // Wind Turbine Tower
    const towerGeo = new THREE.CylinderGeometry(0.8, 1.4, 20, 16);
    const towerMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, metalness: 0.2 });
    const tower = new THREE.Mesh(towerGeo, towerMat);
    tower.position.set(-6, 4, 0);
    group.add(tower);

    // Nacelle Generator Box
    const nacelleGeo = new THREE.BoxGeometry(2, 1.8, 3.5);
    const nacelle = new THREE.Mesh(nacelleGeo, towerMat);
    nacelle.position.set(-6, 14, 0);
    group.add(nacelle);

    // 3-Blade Rotor Hub
    const rotorHub = new THREE.Group();
    rotorHub.position.set(-6, 14, 2);

    for (let i = 0; i < 3; i++) {
      const bladeGeo = new THREE.ConeGeometry(0.45, 9, 8);
      const bladeMat = new THREE.MeshStandardMaterial({ color: 0x10b981 });
      const blade = new THREE.Mesh(bladeGeo, bladeMat);
      blade.position.y = 4.5;
      blade.rotation.z = (i * Math.PI * 2) / 3;
      blade.position.set(Math.cos(blade.rotation.z) * 4.5, Math.sin(blade.rotation.z) * 4.5, 0);
      rotorHub.add(blade);
    }
    group.add(rotorHub);
    this.modelState.rotorHub = rotorHub;

    // Dual-Axis Solar Photovoltaic Tracker Panel
    const solarGroup = new THREE.Group();
    solarGroup.position.set(7, 0, 2);

    const poleGeo = new THREE.CylinderGeometry(0.5, 0.5, 6, 12);
    const pole = new THREE.Mesh(poleGeo, towerMat);
    solarGroup.add(pole);

    const panelGeo = new THREE.BoxGeometry(10, 0.4, 6);
    const panelMat = new THREE.MeshStandardMaterial({ color: 0x1e3a8a, metalness: 0.8, roughness: 0.2 });
    const panel = new THREE.Mesh(panelGeo, panelMat);
    panel.position.set(0, 3.2, 0);
    panel.rotation.x = -0.5;
    solarGroup.add(panel);
    group.add(solarGroup);

    scene.add(group);

    this.modelState.onTick = () => {
      rotorHub.rotation.z += 0.04;
    };

    document.getElementById('threeControlBar').innerHTML = `
      <div class="flex items-center gap-3">
        <span class="font-bold text-slate-200">Renewable Energy Matrix:</span>
        <span class="text-emerald-400 font-mono font-bold">Turbine Generation: 2.4 MW</span>
      </div>
      <div class="text-xs text-slate-400">
        3D Model: High-efficiency 3-blade aerodynamic wind generator and dual-axis silicon photovoltaic array.
      </div>
    `;
  },

  // -------------------------------------------------------------
  // MODEL 5: 3D DNA DOUBLE HELIX (Ch 5)
  // -------------------------------------------------------------
  build3DDNADoubleHelix: function(scene, camera, controls) {
    camera.position.set(0, 0, 22);
    this.modelState.defaultCamPos = camera.position.clone();

    const group = new THREE.Group();
    const count = 30;
    const radius = 4;
    const heightStep = 0.7;

    const baseColors = [0xef4444, 0x3b82f6, 0x10b981, 0xf59e0b]; // A, T, G, C

    for (let i = 0; i < count; i++) {
      const angle = i * 0.45;
      const y = (i - count / 2) * heightStep;

      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;
      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;

      // Sugar-phosphate backbone spheres
      const sphereGeo = new THREE.SphereGeometry(0.4, 12, 12);
      const backboneMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.2 });

      const node1 = new THREE.Mesh(sphereGeo, backboneMat);
      node1.position.set(x1, y, z1);
      group.add(node1);

      const node2 = new THREE.Mesh(sphereGeo, backboneMat);
      node2.position.set(x2, y, z2);
      group.add(node2);

      // Nitrogenous Base pair rungs (A-T / G-C)
      const rungGeo = new THREE.CylinderGeometry(0.16, 0.16, radius * 2, 8);
      const rungMat = new THREE.MeshStandardMaterial({ color: baseColors[i % 4] });
      const rung = new THREE.Mesh(rungGeo, rungMat);
      rung.position.set(0, y, 0);
      rung.rotation.z = Math.PI / 2;
      rung.rotation.y = -angle;
      group.add(rung);
    }

    scene.add(group);

    this.modelState.onTick = () => {
      group.rotation.y += 0.015;
    };

    document.getElementById('threeControlBar').innerHTML = `
      <div class="flex items-center gap-3">
        <span class="font-bold text-slate-200">Nucleotide Base Pairs:</span>
        <span class="text-xs font-mono text-emerald-400">🔴 Adenine = 🔵 Thymine | 🟢 Guanine ≡ 🟡 Cytosine</span>
      </div>
      <div class="text-xs text-slate-400">
        3D Model: Right-handed B-DNA double helix with anti-parallel sugar-phosphate backbones and complementary hydrogen bonds.
      </div>
    `;
  },

  // -------------------------------------------------------------
  // MODEL 6: 3D ARTICULATED SKELETAL ARM & BICEPS (Ch 6)
  // -------------------------------------------------------------
  build3DArticulatedArmSkeleton: function(scene, camera, controls) {
    camera.position.set(0, 0, 20);
    this.modelState.defaultCamPos = camera.position.clone();

    const group = new THREE.Group();

    // Humerus (Upper arm bone)
    const humerusGeo = new THREE.CylinderGeometry(0.9, 0.9, 9, 16);
    const boneMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.4 });
    const humerus = new THREE.Mesh(humerusGeo, boneMat);
    humerus.position.set(0, 4.5, 0);
    group.add(humerus);

    // Elbow Pivot Node
    const elbowPivot = new THREE.Group();
    elbowPivot.position.set(0, 0, 0);

    const jointGeo = new THREE.SphereGeometry(1.2, 16, 16);
    const jointMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8 });
    const joint = new THREE.Mesh(jointGeo, jointMat);
    elbowPivot.add(joint);

    // Radius & Ulna (Forearm bones)
    const forearmGeo = new THREE.CylinderGeometry(0.7, 0.6, 9, 16);
    const forearm = new THREE.Mesh(forearmGeo, boneMat);
    forearm.position.set(0, -4.5, 0);
    elbowPivot.add(forearm);

    // 3D Biceps Brachii Mesh
    const bicepsGeo = new THREE.CylinderGeometry(1.4, 1.4, 6, 16);
    const bicepsMat = new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.4 });
    const biceps = new THREE.Mesh(bicepsGeo, bicepsMat);
    biceps.position.set(1.5, 4.5, 0);
    group.add(biceps);
    this.modelState.bicepsMesh = biceps;

    group.add(elbowPivot);
    this.modelState.elbowPivot = elbowPivot;

    scene.add(group);

    document.getElementById('threeControlBar').innerHTML = `
      <div class="flex items-center gap-3">
        <span class="font-bold text-slate-200">Elbow Joint Angle:</span>
        <input type="range" min="0" max="140" value="70" oninput="ThreeModelsEngine.articulate3DArm(this.value)" class="accent-emerald-500 w-36">
        <span id="arm3DAngleText" class="font-mono text-emerald-400 font-bold">70°</span>
      </div>
      <div class="text-xs text-slate-400">
        3D Model: Hinge elbow joint with antagonistic Biceps Brachii bulking during rotational flexion.
      </div>
    `;
    this.articulate3DArm(70);
  },
  articulate3DArm: function(deg) {
    if (this.modelState.elbowPivot) {
      const rad = (deg * Math.PI) / 180;
      this.modelState.elbowPivot.rotation.z = -rad;
      document.getElementById('arm3DAngleText').textContent = `${deg}°`;

      // Muscle bulging effect
      if (this.modelState.bicepsMesh) {
        const thickness = 1.0 + (140 - deg) / 140 * 0.8;
        this.modelState.bicepsMesh.scale.set(thickness, 1, thickness);
      }
    }
  },

  // -------------------------------------------------------------
  // MODEL 7: 3D ENDOCRINE BRAIN & PITUITARY HOLOGRAPHY (Ch 7)
  // -------------------------------------------------------------
  build3DEndocrineBrainHologram: function(scene, camera, controls) {
    camera.position.set(0, 0, 18);
    this.modelState.defaultCamPos = camera.position.clone();

    const group = new THREE.Group();

    // Transparent Holographic Brain Wireframe
    const brainGeo = new THREE.SphereGeometry(6, 24, 16);
    brainGeo.scale(1.2, 0.9, 1);
    const brainMat = new THREE.MeshPhysicalMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    const brain = new THREE.Mesh(brainGeo, brainMat);
    group.add(brain);

    // Glowing Pituitary Gland (Hypophysis)
    const pituitaryGeo = new THREE.SphereGeometry(0.8, 16, 16);
    const pituitaryMat = new THREE.MeshStandardMaterial({ color: 0xec4899, emissive: 0xec4899, emissiveIntensity: 0.6 });
    const pituitary = new THREE.Mesh(pituitaryGeo, pituitaryMat);
    pituitary.position.set(0, -1.8, 1);
    group.add(pituitary);

    // Thyroid Gland Model below
    const thyroidGeo = new THREE.TorusGeometry(1.6, 0.5, 8, 24, Math.PI);
    const thyroidMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.5 });
    const thyroid = new THREE.Mesh(thyroidGeo, thyroidMat);
    thyroid.position.set(0, -7, 0);
    thyroid.rotation.z = Math.PI;
    group.add(thyroid);

    scene.add(group);

    this.modelState.onTick = () => {
      group.rotation.y += 0.01;
    };

    document.getElementById('threeControlBar').innerHTML = `
      <div class="flex items-center gap-3">
        <span class="font-bold text-slate-200">Endocrine Gland Coordinates:</span>
        <span class="text-xs font-mono text-pink-400">● Pituitary (Master Gland)</span>
        <span class="text-xs font-mono text-sky-400">● Thyroid Gland</span>
      </div>
      <div class="text-xs text-slate-400">
        3D Model: Cerebral hemisphere hologram showing sella turcica pituitary and cervical thyroid glands.
      </div>
    `;
  },

  // -------------------------------------------------------------
  // MODEL 8: 3D SODIUM CHLORIDE GIANT IONIC LATTICE (Ch 8)
  // -------------------------------------------------------------
  build3DGiantIonicLattice: function(scene, camera, controls) {
    camera.position.set(12, 12, 16);
    this.modelState.defaultCamPos = camera.position.clone();

    const group = new THREE.Group();
    const size = 3;
    const spacing = 3.2;
    const offset = ((size - 1) * spacing) / 2;

    const naGeo = new THREE.SphereGeometry(0.65, 16, 16); // Sodium cation Na+
    const naMat = new THREE.MeshStandardMaterial({ color: 0xa855f7, roughness: 0.3 });

    const clGeo = new THREE.SphereGeometry(0.95, 16, 16); // Chloride anion Cl-
    const clMat = new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.3 });

    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        for (let z = 0; z < size; z++) {
          const isNa = (x + y + z) % 2 === 0;
          const sphere = new THREE.Mesh(isNa ? naGeo : clGeo, isNa ? naMat : clMat);
          sphere.position.set(x * spacing - offset, y * spacing - offset, z * spacing - offset);
          group.add(sphere);
        }
      }
    }

    scene.add(group);

    this.modelState.onTick = () => {
      group.rotation.y += 0.008;
    };

    document.getElementById('threeControlBar').innerHTML = `
      <div class="flex items-center gap-3">
        <span class="font-bold text-slate-200">Lattice Ion Types:</span>
        <span class="text-xs font-mono text-purple-400">● Sodium (Na⁺ Cation)</span>
        <span class="text-xs font-mono text-emerald-400">● Chloride (Cl⁻ Anion)</span>
      </div>
      <div class="text-xs text-slate-400">
        3D Model: Face-centered cubic (FCC) giant ionic crystal lattice held by electrostatic attractions.
      </div>
    `;
  },

  // -------------------------------------------------------------
  // MODEL 9: 3D ALLOY DISLOCATION SLIP PLANE (Ch 9)
  // -------------------------------------------------------------
  build3DAlloyDislocationPlane: function(scene, camera, controls) {
    camera.position.set(0, 10, 20);
    this.modelState.defaultCamPos = camera.position.clone();

    const group = new THREE.Group();
    const rows = 3, cols = 6;
    const radius = 0.9;
    const spacing = 2.2;

    const cuGeo = new THREE.SphereGeometry(radius, 16, 16);
    const cuMat = new THREE.MeshStandardMaterial({ color: 0xf97316, metalness: 0.7, roughness: 0.3 }); // Copper

    const snGeo = new THREE.SphereGeometry(1.4, 16, 16);
    const snMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, metalness: 0.8, roughness: 0.2 }); // Foreign Tin atom

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const isForeign = (r === 1 && c === 2);
        const atom = new THREE.Mesh(isForeign ? snGeo : cuGeo, isForeign ? snMat : cuMat);
        atom.position.set((c - cols / 2) * spacing, (r - rows / 2) * spacing, 0);
        group.add(atom);
      }
    }

    scene.add(group);

    document.getElementById('threeControlBar').innerHTML = `
      <div class="flex items-center gap-3">
        <span class="font-bold text-slate-200">Lattice Constituents:</span>
        <span class="text-xs font-mono text-amber-500">● Base Copper (Cu)</span>
        <span class="text-xs font-mono text-sky-400">● Foreign Tin Solute (Sn)</span>
      </div>
      <div class="text-xs text-slate-400">
        3D Model: Foreign atom disrupts regular crystal planes, locking dislocation slip under shear stress.
      </div>
    `;
  },

  // -------------------------------------------------------------
  // MODEL 10: 3D FREE RADICAL & ANTIOXIDANT DOCKING (Ch 10)
  // -------------------------------------------------------------
  build3DFreeRadicalAntioxidant: function(scene, camera, controls) {
    camera.position.set(0, 0, 18);
    this.modelState.defaultCamPos = camera.position.clone();

    const group = new THREE.Group();

    // Free Radical Molecule (Unpaired red electron orbital)
    const radicalGroup = new THREE.Group();
    radicalGroup.position.set(-5, 0, 0);

    const radCore = new THREE.Mesh(
      new THREE.SphereGeometry(2, 20, 20),
      new THREE.MeshStandardMaterial({ color: 0xf43f5e, roughness: 0.3 })
    );
    radicalGroup.add(radCore);

    // Unpaired electron spinning
    const unpaired = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 12, 12),
      new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xf43f5e, emissiveIntensity: 0.8 })
    );
    unpaired.position.set(3, 0, 0);
    radicalGroup.add(unpaired);
    this.modelState.unpaired = unpaired;
    group.add(radicalGroup);

    // Antioxidant Molecule (Vitamin C - Emerald cluster)
    const antioxGroup = new THREE.Group();
    antioxGroup.position.set(5, 0, 0);

    const antioxCore = new THREE.Mesh(
      new THREE.SphereGeometry(2.4, 20, 20),
      new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.3 })
    );
    antioxGroup.add(antioxCore);

    // Donor electron
    const donor = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 12, 12),
      new THREE.MeshStandardMaterial({ color: 0x34d399, emissive: 0x34d399, emissiveIntensity: 0.8 })
    );
    donor.position.set(-3, 0, 0);
    antioxGroup.add(donor);
    this.modelState.donor = donor;
    group.add(antioxGroup);

    scene.add(group);

    let angle = 0;
    this.modelState.onTick = () => {
      angle += 0.04;
      unpaired.position.y = Math.sin(angle) * 2;
    };

    document.getElementById('threeControlBar').innerHTML = `
      <div class="flex items-center gap-3">
        <span class="font-bold text-slate-200">Molecular Docking:</span>
        <button onclick="ThreeModelsEngine.transfer3DElectron()" class="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold shadow-md">
          Donate Electron (Neutralize)
        </button>
      </div>
      <div class="text-xs text-slate-400">
        3D Model: Ascorbic acid (Vitamin C) donating a stabilizing valence electron to free radical (•OH).
      </div>
    `;
  },
  transfer3DElectron: function() {
    if (this.modelState.donor) {
      this.modelState.donor.position.x = -7;
      if (window.ScienceGamesEngine) window.ScienceGamesEngine.playSfx('correct');
      setTimeout(() => {
        if (this.modelState.donor) this.modelState.donor.position.x = -3;
      }, 1200);
    }
  },

  // -------------------------------------------------------------
  // MODEL 11: 3D DUAL VACUUM TUBE TOWER (Ch 11)
  // -------------------------------------------------------------
  build3DDualVacuumChamber: function(scene, camera, controls) {
    camera.position.set(0, 0, 24);
    this.modelState.defaultCamPos = camera.position.clone();

    const group = new THREE.Group();

    // Tower 1: Atmospheric Air Tube
    const tube1Geo = new THREE.CylinderGeometry(2.5, 2.5, 16, 24, 1, true);
    const glassMat = new THREE.MeshPhysicalMaterial({ color: 0xffffff, transparent: true, opacity: 0.35, roughness: 0.1 });
    const tube1 = new THREE.Mesh(tube1Geo, glassMat);
    tube1.position.set(-5, 0, 0);
    group.add(tube1);

    // Tower 2: Evacuated Vacuum Tube
    const tube2 = tube1.clone();
    tube2.material = new THREE.MeshPhysicalMaterial({ color: 0x10b981, transparent: true, opacity: 0.35, roughness: 0.1 });
    tube2.position.set(5, 0, 0);
    group.add(tube2);

    // Coin & Feather in Air (Tower 1)
    const coin1 = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 0.2, 16), new THREE.MeshStandardMaterial({ color: 0xf59e0b }));
    coin1.position.set(-5, 6, 0);
    group.add(coin1);

    const feather1 = new THREE.Mesh(new THREE.ConeGeometry(0.6, 2, 8), new THREE.MeshStandardMaterial({ color: 0x38bdf8 }));
    feather1.position.set(-5, 6, 0);
    group.add(feather1);

    // Coin & Feather in Vacuum (Tower 2)
    const coin2 = coin1.clone();
    coin2.position.set(5, 6, 0);
    group.add(coin2);

    const feather2 = feather1.clone();
    feather2.position.set(5, 6, 0);
    group.add(feather2);

    this.modelState.fallObjects = { coin1, feather1, coin2, feather2 };

    scene.add(group);

    document.getElementById('threeControlBar').innerHTML = `
      <div class="flex items-center gap-3">
        <span class="font-bold text-slate-200">Gravity Drop Test:</span>
        <button onclick="ThreeModelsEngine.trigger3DFall()" class="px-4 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono font-bold shadow-md">
          Release Drop in 3D
        </button>
      </div>
      <div class="text-xs text-slate-400">
        3D Model: Dual glass kinematic drop tubes demonstrating acceleration independent of mass ($g = 9.81\\text{ m/s}^2$).
      </div>
    `;
  },
  trigger3DFall: function() {
    const o = this.modelState.fallObjects;
    if (!o) return;

    // Reset positions
    o.coin1.position.y = 6;
    o.feather1.position.y = 6;
    o.coin2.position.y = 6;
    o.feather2.position.y = 6;

    let time = 0;
    const dropAnim = () => {
      time += 0.04;
      // Vacuum: Both drop at identical fast acceleration
      if (o.coin2.position.y > -6.5) o.coin2.position.y -= time * 1.5;
      if (o.feather2.position.y > -6.5) o.feather2.position.y -= time * 1.5;

      // Air: Coin drops fast, feather floats slowly with drag
      if (o.coin1.position.y > -6.5) o.coin1.position.y -= time * 1.5;
      if (o.feather1.position.y > -6.5) o.feather1.position.y -= time * 0.45;

      if (o.feather1.position.y > -6.5) requestAnimationFrame(dropAnim);
    };
    dropAnim();
  },

  // -------------------------------------------------------------
  // MODEL 12: 3D NUCLEAR REACTOR PRESSURE VESSEL (Ch 12)
  // -------------------------------------------------------------
  build3DNuclearReactorCore: function(scene, camera, controls) {
    camera.position.set(0, 8, 22);
    this.modelState.defaultCamPos = camera.position.clone();

    const group = new THREE.Group();

    // Reactor Pressure Vessel (Cutaway cylinder)
    const vesselGeo = new THREE.CylinderGeometry(5, 5, 14, 32, 1, true, 0, Math.PI * 1.5);
    const vesselMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.8, roughness: 0.2, side: THREE.DoubleSide });
    const vessel = new THREE.Mesh(vesselGeo, vesselMat);
    group.add(vessel);

    // Fuel Rod Clusters (U-235 glowing with Cherenkov radiation blue)
    for (let x = -2; x <= 2; x += 1.4) {
      for (let z = -2; z <= 2; z += 1.4) {
        const rodGeo = new THREE.CylinderGeometry(0.3, 0.3, 8, 12);
        const rodMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.7 });
        const rod = new THREE.Mesh(rodGeo, rodMat);
        rod.position.set(x, -1, z);
        group.add(rod);
      }
    }

    // Boron Control Rods (Adjustable height)
    const controlRodGroup = new THREE.Group();
    for (let x = -1.3; x <= 1.3; x += 2.6) {
      for (let z = -1.3; z <= 1.3; z += 2.6) {
        const cRodGeo = new THREE.CylinderGeometry(0.35, 0.35, 9, 12);
        const cRodMat = new THREE.MeshStandardMaterial({ color: 0x10b981, metalness: 0.5 });
        const cRod = new THREE.Mesh(cRodGeo, cRodMat);
        cRod.position.set(x, 7, z);
        controlRodGroup.add(cRod);
      }
    }
    group.add(controlRodGroup);
    this.modelState.controlRods = controlRodGroup;

    scene.add(group);

    document.getElementById('threeControlBar').innerHTML = `
      <div class="flex items-center gap-3">
        <span class="font-bold text-slate-200">Control Rod Position:</span>
        <button onclick="ThreeModelsEngine.move3DControlRods(2)" class="px-3 py-1 rounded-lg bg-slate-800 text-slate-200 font-mono font-bold">Withdraw (Critical)</button>
        <button onclick="ThreeModelsEngine.move3DControlRods(-4)" class="px-3 py-1 rounded-lg bg-emerald-600 text-white font-mono font-bold">Insert SCRAM (Halted)</button>
      </div>
      <div class="text-xs text-slate-400">
        3D Model: Reactor pressure vessel cutaway displaying Cherenkov fuel assemblies and movable Boron control rods.
      </div>
    `;
  },
  move3DControlRods: function(y) {
    if (this.modelState.controlRods) {
      this.modelState.controlRods.position.y = y;
    }
  }
};

// Export to window
if (typeof window !== 'undefined') {
  window.ThreeModelsEngine = ThreeModelsEngine;
}
