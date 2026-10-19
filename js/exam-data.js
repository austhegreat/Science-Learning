// SPM Science Form 4 Exam Papers & Printable Revision Data

const EXAM_DATA = {
  paperFormat: {
    title: "SPM Science (1511) Examination Format",
    description: "Kementerian Pendidikan Malaysia (KPM) Kurikulum Standard Sekolah Menengah (KSSM)",
    papers: [
      {
        name: "Paper 1 (1511/1)",
        type: "Objective Multiple-Choice Questions (MCQ)",
        marks: 40,
        weightage: "40%",
        duration: "1 hour 15 minutes",
        structure: "40 compulsory multiple-choice questions with 4 options (A, B, C, D) covering all Form 4 and Form 5 chapters."
      },
      {
        name: "Paper 2 (1511/2)",
        type: "Subjective Structured & Essay Questions",
        marks: 80,
        weightage: "60%",
        duration: "2 hours 30 minutes",
        structure: "Divided into 3 sections: Section A (20 marks - 4 compulsory PEKA experiment questions testing scientific skills); Section B (38 marks - 6 compulsory structured questions); Section C (22 marks - 1 compulsory question [10 marks] + choose 1 out of 2 essay questions [12 marks])."
      }
    ]
  },

  paper1Questions: [
    {
      id: 1,
      chapter: 1,
      question: "Which personal protective equipment (PPE) is strictly required when heating volatile and toxic organic solvents in the laboratory?",
      options: [
        "Laminar flow cabinet",
        "Fume chamber (kebuk wasap)",
        "Eyewash station",
        "Safety shower"
      ],
      correct: 1,
      explanation: "A fume chamber is an enclosed, ventilated workspace designed to safely exhaust volatile, toxic, and flammable vapors away from personnel."
    },
    {
      id: 2,
      chapter: 1,
      question: "What is the immediate chemical first-aid protocol when liquid elemental mercury spills from a fractured thermometer in the lab?",
      options: [
        "Wash down the sink with copious tap water",
        "Wipe with paper towels and discard in regular trash",
        "Sprinkle sulfur powder over the spill and alert the Fire Department",
        "Neutralize with concentrated hydrochloric acid"
      ],
      correct: 2,
      explanation: "Sulfur powder chemically reacts with toxic elemental mercury droplets to form harmless, non-volatile solid mercuric sulfide (HgS), preventing dangerous mercury vapor inhalation."
    },
    {
      id: 3,
      chapter: 2,
      question: "What is the recommended compression-to-ventilation ratio for adult Cardiopulmonary Resuscitation (CPR)?",
      options: [
        "15 compressions : 1 rescue breath",
        "30 compressions : 2 rescue breaths",
        "50 compressions : 5 rescue breaths",
        "10 compressions : 2 rescue breaths"
      ],
      correct: 1,
      explanation: "Standard Resuscitation Council guidelines dictate a 30:2 ratio: 30 continuous sternal chest compressions at 100–120 bpm followed immediately by 2 rescue breaths."
    },
    {
      id: 4,
      chapter: 2,
      question: "Which emergency maneuver is performed on a conscious adult victim who is clutching their throat and unable to speak or cough?",
      options: [
        "Mouth-to-mouth resuscitation",
        "Heimlich Manoeuvre",
        "Elevation of legs",
        "Application of a tourniquet"
      ],
      correct: 1,
      explanation: "Clutching the throat is the universal sign of severe foreign-body airway obstruction (choking). Quick upward and inward abdominal thrusts (Heimlich Manoeuvre) elevate intrathoracic pressure to eject the object."
    },
    {
      id: 5,
      chapter: 3,
      question: "A student has a body mass of 72 kg and a height of 1.70 m. What is his Body Mass Index (BMI) and health category?",
      options: [
        "21.2 kg/m² (Normal weight)",
        "24.9 kg/m² (Normal weight)",
        "24.9 kg/m² (Overweight)",
        "24.9 kg/m² (Obese)"
      ],
      correct: 1,
      explanation: "BMI = Mass ÷ (Height)² = 72 ÷ (1.70 × 1.70) = 72 ÷ 2.89 = 24.91 kg/m². This falls within the upper limit of the Normal / Optimal weight classification (18.5 – 24.9 kg/m²)."
    },
    {
      id: 6,
      chapter: 3,
      question: "Which artery on the wrist is most commonly palpated to assess resting pulse rate?",
      options: [
        "Carotid artery",
        "Brachial artery",
        "Radial artery",
        "Femoral artery"
      ],
      correct: 2,
      explanation: "The radial artery runs along the lateral aspect of the wrist beneath the base of the thumb and is the primary anatomical site for palpating resting pulse."
    },
    {
      id: 7,
      chapter: 4,
      question: "Which of the following is considered the most effective principle in the 5R waste hierarchy for minimizing environmental degradation?",
      options: [
        "Recycle",
        "Reuse",
        "Refuse (Saying NO to single-use items)",
        "Rot (Composting)"
      ],
      correct: 2,
      explanation: "Refusing unnecessary products and single-use packaging eliminates waste generation at the source before manufacturing resources and energy are expended."
    },
    {
      id: 8,
      chapter: 5,
      question: "Which stage of Meiosis I involves 'crossing over' between homologous non-sister chromatids?",
      options: [
        "Prophase I",
        "Metaphase I",
        "Anaphase I",
        "Telophase I"
      ],
      correct: 0,
      explanation: "Crossing over occurs during Prophase I of Meiosis, where homologous chromosomes pair to form bivalents and exchange genetic alleles at chiasmata, producing genetic variation."
    },
    {
      id: 9,
      chapter: 5,
      question: "A human karyotype reveals 47 chromosomes with three copies of chromosome 21 (Trisomy 21). Which condition does this indicate?",
      options: [
        "Turner Syndrome",
        "Klinefelter Syndrome",
        "Down Syndrome",
        "Sickle Cell Anemia"
      ],
      correct: 2,
      explanation: "Down Syndrome is a chromosomal abnormality resulting from meiotic non-disjunction of chromosome 21, resulting in 47 chromosomes (45 + XX or 45 + XY)."
    },
    {
      id: 10,
      chapter: 6,
      question: "What muscular action occurs when the human forearm is straightened (extension)?",
      options: [
        "Biceps contracts, Triceps relaxes",
        "Triceps contracts, Biceps relaxes",
        "Both Biceps and Triceps contract simultaneously",
        "Both Biceps and Triceps relax"
      ],
      correct: 1,
      explanation: "During arm extension, the antagonistic triceps brachii muscle contracts (shortens and pulls on the ulna) while the biceps brachii relaxes and lengthens."
    },
    {
      id: 11,
      chapter: 7,
      question: "Which endocrine gland is referred to as the 'Master Gland' due to its regulation of other endocrine glands?",
      options: [
        "Thyroid Gland",
        "Adrenal Gland",
        "Pituitary Gland",
        "Pancreas"
      ],
      correct: 2,
      explanation: "The Pituitary Gland secretes trophic hormones (such as TSH, ACTH, FSH, and LH) that stimulate and control hormone release from secondary endocrine glands."
    },
    {
      id: 12,
      chapter: 8,
      question: "Why do solid ionic compounds like sodium chloride (NaCl) fail to conduct electricity, whereas their molten solutions conduct electricity readily?",
      options: [
        "Solid NaCl contains no ions.",
        "In solid NaCl, ions are held in fixed lattice positions and cannot move freely.",
        "Electrons only exist in liquid NaCl.",
        "Solid NaCl decomposes at room temperature."
      ],
      correct: 1,
      explanation: "Electrical conduction requires mobile charge carriers. In a solid ionic lattice, cations and anions are rigidly locked by strong electrostatic forces; when molten or dissolved in water, the lattice dissociates, allowing free ions to move."
    },
    {
      id: 13,
      chapter: 9,
      question: "Why are alloys such as Bronze or Steel noticeably harder and more resistant to deformation than pure copper or iron?",
      options: [
        "Alloys have lower melting points.",
        "Foreign atoms of different sizes disrupt the regular lattice and prevent layers of atoms from sliding.",
        "Alloys lose metallic bonding properties.",
        "Alloys have empty spaces between atoms."
      ],
      correct: 1,
      explanation: "Pure metals have uniform atomic radii that slide smoothly along cleavage planes. In alloys, foreign solute atoms distort the regular crystal lattice, pinning dislocations and preventing atomic planes from sliding under mechanical stress."
    },
    {
      id: 14,
      chapter: 10,
      question: "How do antioxidant substances (such as Vitamin C and Vitamin E) protect cellular biological membranes from damage?",
      options: [
        "By killing harmful pathogenic bacteria directly",
        "By donating an electron to neutralize unstable free radicals",
        "By increasing blood pressure and circulation",
        "By stimulating muscle protein synthesis"
      ],
      correct: 1,
      explanation: "Antioxidants terminate destructive oxidative chain reactions by donating an electron to unpaired free radical valence orbitals without becoming reactive radicals themselves."
    },
    {
      id: 15,
      chapter: 11,
      question: "In a velocity-time (v-t) linear motion graph, what physical quantity is represented by the area under the curve?",
      options: [
        "Acceleration",
        "Total distance or displacement traveled",
        "Inertial momentum",
        "Kinetic energy"
      ],
      correct: 1,
      explanation: "The mathematical integral or geometric area under a velocity-time graph equals velocity × time = displacement (s)."
    },
    {
      id: 16,
      chapter: 12,
      question: "What is the primary function of the Control Rods (made of boron or cadmium) inside a nuclear fission power reactor?",
      options: [
        "To slow down fast neutrons into thermal neutrons",
        "To absorb excess neutrons to regulate or stop the nuclear chain reaction",
        "To transfer thermal heat from the reactor core to the steam turbine",
        "To shield personnel from hazardous gamma radiation"
      ],
      correct: 1,
      explanation: "Control rods absorb neutrons without undergoing fission, allowing reactor operators to precisely regulate the multiplication factor of the chain reaction or perform emergency shutdown (SCRAM)."
    }
  ],

  paper2SectionA: [
    {
      id: "PEKA-1",
      chapter: 9,
      title: "Experiment: Comparing the Hardness of an Alloy and Its Pure Metal",
      scenario: "A group of students carried out an experiment to investigate the difference in hardness between bronze (alloy) and copper (pure metal). A 100g steel bearing ball was dropped from a height of 50 cm onto a block of bronze and a block of copper. The diameter of the resulting indentation was measured.",
      data: [
        { material: "Bronze block (Alloy)", diameter: "1.8 mm" },
        { material: "Copper block (Pure metal)", diameter: "3.6 mm" }
      ],
      questions: [
        {
          q: "(a) State one hypothesis for this experiment.",
          marks: 1,
          scheme: "Bronze alloy is harder than pure copper / Bronze produces a smaller indentation diameter than pure copper when struck with a steel ball."
        },
        {
          q: "(b) State the variables in this experiment:\n(i) Manipulated variable\n(ii) Responding variable\n(iii) Constant variable",
          marks: 3,
          scheme: "(i) Type of metal block (Bronze vs Copper)\n(ii) Diameter of indentation (mm) / Hardness of metal\n(iii) Height of drop (50 cm) / Mass of steel bearing ball (100g)"
        },
        {
          q: "(c) Based on the data, state which material is harder. Justify your answer.",
          marks: 2,
          scheme: "Bronze is harder [1m]. Because the diameter of indentation on bronze (1.8 mm) is smaller than that on copper (3.6 mm), showing greater resistance to deformation [1m]."
        },
        {
          q: "(d) Explain why the alloy exhibits greater hardness using atomic lattice theory.",
          marks: 2,
          scheme: "In bronze, foreign tin atoms of different sizes disrupt the regular arrangement of copper atoms [1m]. This prevents the layers of atoms from sliding easily over each other when force is applied [1m]."
        }
      ]
    },
    {
      id: "PEKA-2",
      chapter: 11,
      title: "Experiment: Gravitational Free Fall in a Vacuum Tube vs Normal Air",
      scenario: "An evacuated glass cylinder containing a heavy steel coin and a light goose feather is inverted. The time taken for each object to reach the bottom of the tube is measured in both atmospheric air and inside an evacuated vacuum.",
      data: [
        { condition: "In normal atmospheric air", coinTime: "0.45 s", featherTime: "1.85 s" },
        { condition: "In vacuum (evacuated tube)", coinTime: "0.45 s", featherTime: "0.45 s" }
      ],
      questions: [
        {
          q: "(a) State the responding variable in this experiment.",
          marks: 1,
          scheme: "Time taken for the objects to fall to the bottom of the tube / Acceleration of the falling objects."
        },
        {
          q: "(b) State an operational definition for 'Free Fall'.",
          marks: 1,
          scheme: "Free fall is the motion of an object falling in a vacuum where both the coin and feather hit the base at the exact same time (0.45 s) under the sole influence of gravity."
        },
        {
          q: "(c) Why did the feather take a longer time to reach the bottom in atmospheric air?",
          marks: 1,
          scheme: "Because the feather has a larger surface-area-to-mass ratio and experiences significant air resistance (drag) opposing its motion."
        },
        {
          q: "(d) Predict what would happen if a 1 kg lead weight and a 5 g plastic marble were dropped simultaneously in a vacuum.",
          marks: 1,
          scheme: "Both objects will fall at the identical gravitational acceleration (approx 9.81 m/s²) and reach the bottom at the exact same time."
        }
      ]
    }
  ],

  paper2SectionC_KBAT: [
    {
      id: "KBAT-1",
      chapter: 12,
      title: "Decision-Making: Should Malaysia Build a Commercial Nuclear Power Plant?",
      question: "Malaysia is committed to achieving Net-Zero greenhouse gas emissions by 2050 while sustaining economic industrial growth. As an energy policy advisor, evaluate the proposal to construct a commercial 1,000 MW nuclear fission power plant. In your essay, include:\n• Identification of the environmental and baseload problem with fossil fuels\n• Two scientific advantages of nuclear energy\n• Two major hazards/challenges and their scientific mitigations\n• Your justified final recommendation",
      marks: 12,
      scheme: [
        "1. Problem identification: Coal and gas-fired power generation emits vast quantities of greenhouse carbon dioxide (accelerating global warming) and sulfur oxides (acid rain). Finite fossil reserves are depleting. [2m]",
        "2. Advantages of Nuclear Energy: (a) Extremely high energy density—10g of uranium-235 equals 1 tonne of coal without direct CO2 greenhouse emissions; (b) Provides steady, reliable 24/7 baseload power unlike weather-dependent solar or wind. [4m]",
        "3. Hazards and Mitigations: (a) Catastrophic ionizing radiation leakage (e.g. Chernobyl/Fukushima) -> Mitigate with redundant passive cooling systems, boron control rods, and double-walled 2-meter reinforced concrete containment shields; (b) Long-lived radioactive spent fuel waste -> Mitigate with vitrification into borosilicate glass and deep underground geological disposal repositories in stable granite bedrock. [4m]",
        "4. Conclusion/Recommendation: Balanced judgment—Malaysia should prioritize expanding solar, hydro, and grid battery storage in the immediate decade while operating the TRIGA PUSPATI research reactor to train nuclear personnel before committing to commercial small modular reactors (SMRs). [2m]"
      ]
    }
  ]
};

// Export to window
if (typeof window !== 'undefined') {
  window.EXAM_DATA = EXAM_DATA;
}
