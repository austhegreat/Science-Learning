// Form 4 Science (KSSM / SPM) Comprehensive Educational Dataset
// Dual Language Programme (DLP) - Fully English Syllabus Reference

const CHAPTERS_DATA = [
  {
    id: 1,
    themeId: 1,
    themeName: "Scientific Methodology",
    title: "Safety Measures in the Laboratory",
    icon: "shield-alert",
    color: "sky",
    summary: "Personal protective equipment (PPE), scientific biological waste classification, mercury spill protocol, and fire extinguisher categories with P.A.S.S. operation.",
    simulationType: "waste-sim",
    subtopics: [
      {
        code: "1.1",
        title: "Personal Protective Equipment (PPE)",
        points: [
          "Personal safety gear worn on body: Safety goggles (shield eyes against hazardous chemical splashes), Face mask (filters hazardous fumes and dust), Lab coat (shields skin and clothing), Heat-resistant gloves (protect against burns), Nitrile/Rubber gloves (protect against toxic and corrosive chemicals), Closed shoes (prevent chemical spill injuries).",
          "Stationary laboratory safety equipment: Fume chamber (ventilated workspace for volatile, toxic or pungent fumes), Laminar flow cabinet (sterile workstation free of microbes for biological inoculations), Eye wash station (flushes chemical irritants from eyes with sterile saline/water), Safety emergency shower (rapidly douses extensive chemical spills on skin/clothes)."
        ]
      },
      {
        code: "1.2",
        title: "Disposal of Waste Substances",
        points: [
          "Substances permitted in sinks: Liquids and aqueous solutions with pH between 5 and 9, low-concentration neutral solutions, non-toxic biodegradable liquids.",
          "Substances strictly prohibited from sinks: Strong acids (pH < 5) and strong alkalis (pH > 9), solid wastes (glass, metal, paper), organic solvents (chloroform, acetone), heavy metal compounds (lead, mercury), reactive chemical reagents (sodium, potassium), toxic and microbiological wastes.",
          "Standard biological waste management: Category A (Sharps: needles, blades, scalpels -> yellow puncture-proof sharp bins, autoclaved); Category B (Non-sharps: gloves, petri dishes, culture tubes -> biohazard plastic bags, autoclaved at 121°C, 15 psi for 20 mins); Category C (Animal carcasses and biological tissues -> securely wrapped in absorbent paper, frozen at -20°C before high-temperature incineration); Category D (Liquid biological cultures and blood -> chemical decontamination before autoclaving).",
          "Mercury spill protocol: Immediately notify teacher -> Evacuate and isolate accident area -> Sprinkle sulfur powder directly over mercury droplets to form non-volatile mercuric sulfide (HgS) -> Alert Fire and Rescue Department (BOMBA) for hazardous materials handling."
        ]
      },
      {
        code: "1.3",
        title: "Fire Extinguishers & Fire Safety",
        points: [
          "Extinguisher classifications: Class A (Water / Red label: wood, paper, cloth), Class B (Foam / Cream label: flammable liquids like petrol, kerosene, alcohol, diesel), Class C (Dry powder or CO2 / Black label: flammable gases like methane, butane, and electrical appliances), Class D (Specialized Dry Powder: combustible reactive metals like magnesium, sodium, potassium).",
          "Fire blanket: Made of woven glass fibers, smothers clothes or small cooking fires by starving flame of oxygen.",
          "P.A.S.S. operation technique: P - Pull safety pin; A - Aim nozzle at base of fire; S - Squeeze trigger handle; S - Sweep nozzle side to side across the flame base."
        ]
      }
    ],
    keyTerms: [
      { term: "Fume Chamber", def: "A ventilated laboratory enclosure designed to capture, contain, and exhaust toxic or volatile vapors safely away from users." },
      { term: "Autoclave", def: "A high-pressure steam sterilization device operating at 121°C and 15 psi used to neutralize microbiological waste." },
      { term: "P.A.S.S.", def: "Standard fire extinguishing mnemonic: Pull the pin, Aim at the base, Squeeze the lever, Sweep side-to-side." },
      { term: "Mercuric Sulfide (HgS)", def: "The harmless, non-volatile solid compound formed when powdered sulfur reacts with spilled elemental mercury." }
    ],
    experiment: {
      title: "Investigating the Action of Fire Blankets and Extinguishers",
      aim: "To demonstrate the suffocation of flame by cutting off atmospheric oxygen supply.",
      hypothesis: "Covering a combustion source with a fire blanket or carbon dioxide stream immediately extinguishes the flame by eliminating oxygen.",
      manipulatedVar: "Method of extinguishing (water spray vs fire blanket smothering).",
      respondingVar: "Time taken for the flame to extinguish.",
      constantVar: "Fuel volume and initial flame intensity.",
      precaution: "Always wear safety goggles and maintain at least 2 meters distance from active combustion."
    },
    spmExamFocus: {
      paper1Tip: "Expect questions identifying the correct waste category for used hypodermic needles (Category A - sharp waste container) or suitable extinguisher for burning magnesium ribbon (Class D).",
      paper2Tip: "Be ready to list step-by-step actions when a mercury thermometer accidentally breaks on the floor.",
      kbatQuestion: "A chemistry student notices small electrical sparks and smoke issuing from an overloaded centrifuge machine. Propose the immediate protocol to avert a disaster.",
      kbatAnswer: "1. Immediately switch off the main laboratory power breaker without touching the compromised centrifuge cord. 2. Evacuate nearby peers. 3. Use a Class C Carbon Dioxide (CO2) or Dry Powder extinguisher if fire ignites—never use water which conducts electricity. 4. Notify the supervising laboratory teacher."
    }
  },
  {
    id: 2,
    themeId: 1,
    themeName: "Scientific Methodology",
    title: "Emergency Assistance",
    icon: "heart-pulse",
    color: "sky",
    summary: "Life-saving emergency procedures: Cardiopulmonary Resuscitation (CPR) technique, circulation restoration, and Heimlich Manoeuvre for clearing obstructed airways.",
    simulationType: "cpr-sim",
    subtopics: [
      {
        code: "2.1",
        title: "Cardiopulmonary Resuscitation (CPR)",
        points: [
          "Definition & Purpose: CPR is an emergency life-support procedure combining chest compressions and artificial rescue ventilations to maintain blood oxygen circulation to vital organs (especially the brain) during cardiac or respiratory arrest.",
          "Critical golden timeframe: If brain cells are starved of oxygen for more than 4 minutes, irreversible cerebral cortical death and brain damage begin.",
          "When CPR is indicated: The victim is completely unresponsive, not breathing normally (or agonal gasping), and has no detectable carotid pulse.",
          "Systematic CPR execution protocol: 1. Ensure scene safety; 2. Check victim responsiveness and shout for assistance (call 999 and request an AED); 3. Open airway using the head-tilt chin-lift maneuver; 4. Perform high-quality chest compressions: position heel of one hand over the lower half of the sternum, interlock fingers, lock elbows vertically; deliver 30 compressions at a frequency of 100-120 compressions per minute at a depth of 5-6 cm; 5. Deliver 2 mouth-to-mouth rescue breaths while pinching the nostrils shut, ensuring visible chest rise; 6. Maintain 30:2 compression-to-ventilation ratio until an Automated External Defibrillator (AED) arrives or medical personnel take over."
        ]
      },
      {
        code: "2.2",
        title: "Heimlich Manoeuvre",
        points: [
          "Definition & Purpose: An emergency abdominal thrust technique used to dislodge a foreign object occluding the victim's airway (trachea).",
          "Universal sign of choking: Victim reflexively clutches throat with both hands, unable to speak, cough, or breathe, with face and lips turning cyanotic (blue).",
          "Procedure on conscious adult: Stand directly behind the choking victim with legs braced for stability -> Wrap both arms around victim's waist -> Clench one hand into a fist and place the thumb side against the abdomen, midway between the navel and the bottom of the sternum (xiphoid process) -> Grasp fist firmly with the other hand -> Deliver rapid, inward and upward abdominal thrusts until the obstructive object is forcefully expelled.",
          "Self-application protocol: If choking alone, press own epigastric region against the sturdy top edge of a chair back, table, or railing and apply forceful inward and upward thrusts."
        ]
      }
    ],
    keyTerms: [
      { term: "CPR", def: "Cardiopulmonary Resuscitation: emergency chest compressions and artificial ventilation to sustain systemic perfusion." },
      { term: "Heimlich Manoeuvre", def: "Subdiaphragmatic abdominal thrusts designed to elevate intrathoracic pressure and dislodge an airway foreign body." },
      { term: "AED", def: "Automated External Defibrillator: portable electronic device that diagnoses cardiac arrhythmias and delivers therapeutic electrical shocks." },
      { term: "Cyanosis", def: "Bluish discoloration of the skin and mucous membranes caused by inadequate oxygenation of circulating hemoglobin." }
    ],
    experiment: {
      title: "Simulated CPR Rate and Compression Depth Analysis",
      aim: "To demonstrate the effect of compression cadence (100-120 bpm) on simulated artificial cardiac output.",
      hypothesis: "Maintaining a rhythmic cadence of 100-120 compressions/minute optimizes effective simulated blood displacement without causing rescuer exhaustion.",
      manipulatedVar: "Compression frequency (bpm).",
      respondingVar: "Simulated blood pressure perfusion indicator.",
      constantVar: "Depth of compression (5 cm) and training manikin resistance.",
      precaution: "Never perform actual sternal chest compressions on conscious living humans with normal pulse."
    },
    spmExamFocus: {
      paper1Tip: "Remember the exact ratio of chest compressions to rescue breaths in adult CPR (30 compressions : 2 breaths) and the compression rate (100–120 per minute).",
      paper2Tip: "Labeling diagrams showing the correct hand placement for Heimlich manoeuvre (between the navel and lower edge of sternum).",
      kbatQuestion: "Explain why it is critical to perform chest compressions continuously even if mouth-to-mouth rescue ventilation cannot be administered.",
      kbatAnswer: "Hands-only CPR maintains residual arterial blood pressure and circulates remaining oxygenated blood to the brain and myocardium, preserving cerebral neuron viability until emergency medical rescue arrives."
    }
  },
  {
    id: 3,
    themeId: 1,
    themeName: "Scientific Methodology",
    title: "Techniques of Measuring Body Health Parameters",
    icon: "activity",
    color: "sky",
    summary: "Measurement of vital body health parameters: body temperature, pulse rates at arterial points, sphygmomanometer blood pressure readings, and Body Mass Index (BMI).",
    simulationType: "bmi-sim",
    subtopics: [
      {
        code: "3.1",
        title: "Body Temperature Measurement",
        points: [
          "Normal baseline human body temperature: 36.9°C (normal homeostatic physiological range: 36.5°C to 37.5°C).",
          "Hyperthermia / Fever (> 37.5°C): Triggered by pyrogens during pathogen infections, severe heat stroke, or extreme physical exertion.",
          "Hypothermia (< 35.0°C): Occurs when prolonged cold exposure overwhelms the body's thermoregulatory mechanisms.",
          "Thermometer types: Clinical thermometer (constricted capillary stem prevents backflow of mercury while reading; range 35°C–42°C), Laboratory thermometer (no constriction; calibrated from -10°C to 110°C), Rectal thermometer (most accurate measurement for infants < 3 months), Infrared tympanic/forehead thermometer (rapid, non-contact infrared thermal radiation detection)."
        ]
      },
      {
        code: "3.2",
        title: "Pulse Rate and Arterial Points",
        points: [
          "Definition: Pulse rate is the rhythmic expansion and recoil of an artery as blood is pumped through it by contractions of the heart's left ventricle.",
          "Major accessible pulse points: Radial artery (at the base of the thumb on the wrist), Carotid artery (in the neck groove beside the trachea), Brachial artery (inner fold of the elbow).",
          "Normal resting adult heart rate: 60 to 100 beats per minute (bpm).",
          "Factors altering pulse: Physical exertion (muscles demand elevated oxygen and glucose, raising pulse rate), Age (infants have higher pulse rates ~100–160 bpm due to higher metabolic rates), Gender (females have slightly higher pulse rates than males due to smaller average heart stroke volumes)."
        ]
      },
      {
        code: "3.3",
        title: "Blood Pressure (Sphygmomanometer)",
        points: [
          "Definition & Units: The hydrostatic force exerted by circulating blood against the internal walls of systemic arteries, measured in millimeters of mercury (mmHg).",
          "Readings interpretation: Systolic pressure (maximum pressure during left ventricular contraction; normal ~120 mmHg) over Diastolic pressure (minimum pressure during ventricular relaxation and cardiac refill; normal ~80 mmHg).",
          "Normal healthy reading: 120 / 80 mmHg.",
          "Clinical deviations: Hypertension (persistently ≥ 140/90 mmHg; elevates risk of stroke, myocardial infarction, arteriosclerosis, and kidney failure); Hypotension (< 90/60 mmHg; causes dizziness, cerebral hypoperfusion, and syncope)."
        ]
      },
      {
        code: "3.4",
        title: "Body Mass Index (BMI)",
        points: [
          "Standard mathematical formula: BMI = Body Mass in kilograms / (Height in meters)², i.e., kg / m².",
          "Standard health classifications: Underweight (< 18.5 kg/m²; risks include nutritional anemia, reduced immunity, osteoporosis); Optimal/Normal (18.5 – 24.9 kg/m²); Overweight (25.0 – 29.9 kg/m²); Obese (≥ 30.0 kg/m²; elevated risk of Type 2 diabetes mellitus, cardiovascular atherosclerosis, osteoarthritis, and sleep apnea)."
        ]
      }
    ],
    keyTerms: [
      { term: "Systolic Pressure", def: "Peak arterial pressure during left ventricular contraction when blood is ejected into systemic circulation (~120 mmHg)." },
      { term: "Diastolic Pressure", def: "Trough arterial pressure during ventricular cardiac relaxation between beats (~80 mmHg)." },
      { term: "Sphygmomanometer", def: "Inflatable cuff diagnostic instrument used in conjunction with a pressure sensor to measure arterial blood pressure." },
      { term: "BMI", def: "Body Mass Index: an anthropometric screening metric calculated as mass (kg) divided by height squared (m²)." }
    ],
    experiment: {
      title: "Investigating the Effect of Physical Activity on Human Pulse Rate",
      aim: "To study the relationship between physical exercise intensity and resting radial pulse rate.",
      hypothesis: "Engaging in vigorous physical activity increases human radial pulse rate above resting levels.",
      manipulatedVar: "Type of physical activity (resting sitting vs walking vs stepping/running).",
      respondingVar: "Radial pulse rate in beats per minute (bpm).",
      constantVar: "Age, gender, and ambient room temperature of the test subject.",
      precaution: "Subjects should rest for 5 minutes between exercises to allow pulse to return to stable resting baseline."
    },
    spmExamFocus: {
      paper1Tip: "Calculate BMI accurately: remember to convert height from centimeters to meters before squaring! E.g. 160 cm = 1.6 m -> (1.6)² = 2.56.",
      paper2Tip: "Interpreting pulse rate bar charts before and after exercise (Section A practical question).",
      kbatQuestion: "A 45-year-old executive exhibits a persistent blood pressure of 155/95 mmHg and a BMI of 31.5 kg/m². Evaluate the cardiovascular complications and formulate a therapeutic lifestyle intervention.",
      kbatAnswer: "Complications: Chronic hypertension causes arterial wall shear stress, accelerating atheroma plaque formation (atherosclerosis), which can lead to ischemic stroke or coronary heart disease. Intervention: 1. Adopt low-sodium, low-saturated fat diet (DASH diet); 2. Engage in 150 minutes of weekly moderate aerobic exercise; 3. Implement caloric restriction to reduce visceral adipose tissue and lower BMI to healthy range (<25)."
    }
  },
  {
    id: 4,
    themeId: 2,
    themeName: "Maintenance and Continuity of Life",
    title: "Green Technology for Environmental Sustainability",
    icon: "leaf",
    color: "emerald",
    summary: "Green technology sectors, carbon footprint mitigation, sustainable renewable energy, 5R waste treatment, leachate control, and electric mobility.",
    simulationType: "carbon-sim",
    subtopics: [
      {
        code: "4.1",
        title: "Environmental Sustainability & Carbon Footprint",
        points: [
          "Definition: Green technology refers to the development and application of products, equipment, and systems that conserve the environment and natural resources while minimizing the negative footprint of human activities.",
          "Carbon Footprint: The total quantity of greenhouse gas emissions (specifically carbon dioxide CO2 and methane CH4) generated directly and indirectly by individual, industrial, and societal activities.",
          "Carbon neutrality: Balancing emitted carbon with equivalent carbon sequestration through reforestation, carbon capture, and clean energy transition."
        ]
      },
      {
        code: "4.2",
        title: "Energy Sector & Renewable Resources",
        points: [
          "Conventional fossil fuels (coal, petroleum, natural gas) emit vast quantities of greenhouse gases and sulfur dioxide, driving anthropogenic global warming and acid rain.",
          "Renewable energy alternatives: Solar photovoltaic (harnessing solar radiant photons), Hydroelectric power (gravitational potential energy of water reservoirs), Biomass energy (organic waste combustion/gasification), Geothermal energy, and Wind turbine energy.",
          "Energy efficiency: Adoption of LED lighting, inverter compressor technology, and Energy Commission 5-star rating appliances."
        ]
      },
      {
        code: "4.3",
        title: "Waste and Wastewater Management Sector",
        points: [
          "The 5R hierarchy: Refuse, Reduce, Reuse, Recycle, and Rot (Recovery/Composting).",
          "Landfill Leachate: Highly toxic, contaminated fluid that percolates through decomposed solid landfill waste; requires specialized biological aerobic and anaerobic filtration to prevent contamination of subterranean water tables.",
          "Upcycling: Transforming discarded by-products into new materials or items of greater artistic or environmental value."
        ]
      },
      {
        code: "4.4",
        title: "Transportation, Agriculture & Forestry",
        points: [
          "Green transportation: Battery Electric Vehicles (BEVs), hydrogen fuel-cell vehicles, B20 palm oil biodiesel blends, and mass electric rail networks (LRT, MRT).",
          "Sustainable agriculture: Organic biofertilizers, precision micro-irrigation, integrated pest biological management, reduced slash-and-burn practices."
        ]
      }
    ],
    keyTerms: [
      { term: "Green Technology", def: "Technological innovations that minimize environmental degradation, conserve finite resources, and reduce greenhouse emissions." },
      { term: "Carbon Footprint", def: "The aggregate measure of greenhouse gas emissions produced directly or indirectly by an entity, expressed in equivalent tons of CO2." },
      { term: "Leachate", def: "A toxic liquid effluent generated when precipitation trickles through decomposing solid waste in municipal landfills." },
      { term: "Biodiesel", def: "A renewable alternative diesel fuel synthesized through the transesterification of vegetable oils (such as palm oil) or animal fats." }
    ],
    experiment: {
      title: "Measuring Household Carbon Footprint from Energy Usage",
      aim: "To calculate and compare monthly carbon dioxide emissions based on domestic electrical kilowatt-hour consumption.",
      hypothesis: "Higher monthly electrical consumption directly correlates with an increased household carbon footprint.",
      manipulatedVar: "Household monthly kilowatt-hour (kWh) electrical consumption.",
      respondingVar: "Calculated carbon footprint in kilograms of CO2 equivalent.",
      constantVar: "Grid carbon emission factor (approx 0.694 kg CO2 per kWh).",
      precaution: "Cross-check billing statements over multiple months to account for seasonal air-conditioning fluctuations."
    },
    spmExamFocus: {
      paper1Tip: "Identify the 5R hierarchy and understand why 'Refuse' (saying no to single-use plastics) is the most proactive waste minimization approach.",
      paper2Tip: "Section B questions frequently ask students to evaluate socio-scientific issues like river pollution caused by untreated domestic sewage or landfill leachate.",
      kbatQuestion: "Propose three sustainable architectural green building features for a newly designed secondary school campus in Malaysia.",
      kbatAnswer: "1. Install rooftop monocrystalline solar photovoltaic panels with net energy metering (NEM) to supply daytime green electricity. 2. Implement rainwater harvesting systems for landscape irrigation and toilet flushing, reducing treated municipal water demand. 3. Maximize natural cross-ventilation and daylighting using wide louvered windows and green vegetative walls to drastically cut air conditioning and artificial lighting loads."
    }
  },
  {
    id: 5,
    themeId: 2,
    themeName: "Maintenance and Continuity of Life",
    title: "Genetics",
    icon: "dna",
    color: "emerald",
    summary: "Cell division (mitosis vs meiosis), Mendelian monohybrid cross, human sex determination, gene and chromosome mutations, recombinant DNA technology, and variation.",
    simulationType: "punnett-sim",
    subtopics: [
      {
        code: "5.1",
        title: "Cell Division: Mitosis and Meiosis",
        points: [
          "Chromosome structure: Chromosomes in eukaryotic nuclei consist of tightly coiled deoxyribonucleic acid (DNA) double helices wrapped around octameric histone protein cores; segments of DNA coding for specific functional proteins are genes.",
          "Human chromosome complement: Normal diploid (2n) = 46 chromosomes (22 pairs of autosomes + 1 pair of sex chromosomes).",
          "Mitosis: Occurs in somatic cells and apical meristems; produces 2 genetically identical diploid (2n) daughter cells; essential for somatic growth, tissue repair, and asexual reproduction; stages: Prophase, Metaphase, Anaphase, Telophase (PMAT).",
          "Meiosis: Occurs in gonads (testes and ovaries in humans; anthers and ovaries in flowering plants); produces 4 genetically diverse haploid (n = 23) gametes; crucial stage: Crossing Over (chiasma formation during Prophase I) where homologous non-sister chromatids exchange genetic alleles, creating genetic variation."
        ]
      },
      {
        code: "5.2",
        title: "Inheritance and Mendel's Laws",
        points: [
          "Mendelian monohybrid cross: Cross between individuals differing in a single gene locus with dominant (T) and recessive (t) alleles.",
          "Phenotype (observable physical trait, e.g. tall vs dwarf) vs Genotype (underlying allelic combination, e.g. TT, Tt, tt).",
          "F2 generation phenotypic ratio in complete dominance: 3 Tall : 1 Dwarf (Genotypic ratio: 1 TT : 2 Tt : 1 tt).",
          "Human sex determination: Female karyotype is 44 + XX (homogametic, producing only 22 + X ova); Male karyotype is 44 + XY (heterogametic, producing 50% 22 + X sperm and 50% 22 + Y sperm). Chance of conceiving a male or female offspring is always exactly 50% (1:1), determined solely by the fertilizing sperm."
        ]
      },
      {
        code: "5.3",
        title: "Mutation: Gene and Chromosome",
        points: [
          "Definition: A spontaneous and irreversible alteration in the nucleotide sequence of DNA or the structure/number of chromosomes.",
          "Mutagens: Ionizing radiation (X-rays, gamma rays), ultraviolet (UV) radiation, and toxic chemical carcinogens (benzene, formaldehyde, cigarette tar).",
          "Gene Mutation: Point mutations in specific genes (Sickle cell anemia - abnormal beta-globin chain; Thalassemia - impaired hemoglobin synthesis; Albinism - failure of melanin synthesis; Hemophilia and Red-green color blindness - X-linked recessive traits).",
          "Chromosome Mutation: Aberrations in chromosome count due to non-disjunction during meiosis (Down Syndrome: Trisomy 21 with 47 chromosomes; Turner Syndrome: 45 chromosomes XO female; Klinefelter Syndrome: 47 chromosomes XXY male). Diagnosed via Karyotype analysis and Amniocentesis."
        ]
      },
      {
        code: "5.4",
        title: "Genetic Engineering & Variation",
        points: [
          "Recombinant DNA technology: Splicing human insulin genes into bacterial plasmids (E. coli) to produce recombinant human insulin in bioreactors.",
          "Genetically Modified Organisms (GMOs): Pest-resistant Bt corn, drought-tolerant soybeans, Vitamin A-biofortified Golden Rice.",
          "Continuous Variation: Trait exhibits intermediate gradations without distinct categories, quantitative, follows a bell-shaped Gaussian normal distribution curve, influenced by multi-gene interactions and environmental factors (e.g. height, body weight, skin pigmentation).",
          "Discontinuous Variation: Clear-cut distinct categories, qualitative, represented by discrete bar charts, strictly determined by genetic alleles without environmental influence (e.g. ABO blood group, ability to roll tongue, fingerprint patterns)."
        ]
      }
    ],
    keyTerms: [
      { term: "Crossing Over", def: "The reciprocal exchange of genetic segments between homologous non-sister chromatids during Prophase I of meiosis, creating novel allele combinations." },
      { term: "Non-disjunction", def: "The failure of homologous chromosome pairs or sister chromatids to separate properly during meiosis, resulting in aneuploid gametes (e.g., Trisomy 21)." },
      { term: "Recombinant DNA", def: "DNA molecules formed by laboratory genetic recombination methods combining genetic material from multiple biological species." },
      { term: "Continuous Variation", def: "Phenotypic differences across a graduated continuum without clear boundaries, influenced jointly by genetics and environment." }
    ],
    experiment: {
      title: "Investigating Continuous and Discontinuous Variation in Humans",
      aim: "To classify human morphological traits into continuous and discontinuous variation patterns.",
      hypothesis: "Height exhibits a continuous distribution bell curve, while the ability to roll the tongue exhibits discontinuous bar frequencies.",
      manipulatedVar: "Measured human biological traits (Height in cm vs Tongue rolling ability).",
      respondingVar: "Distribution frequency across a student sample population.",
      constantVar: "Sample size of surveyed students from the same age demographic.",
      precaution: "Use standardized measuring tapes without shoes to eliminate measurement error."
    },
    spmExamFocus: {
      paper1Tip: "Know the chromosome formula for genetic disorders: Down Syndrome (45 + XY or 45 + XX = 47), Turner Syndrome (44 + XO = 45), Klinefelter Syndrome (44 + XXY = 47).",
      paper2Tip: "Drawing complete schematic Mendelian inheritance diagrams with P generation, gametes, F1 genotype/phenotype, and Punnett square cross.",
      kbatQuestion: "A married couple has four daughters. The father blames the mother for not giving birth to a son. Based on scientific genetic principles, refute the father's claim.",
      kbatAnswer: "The mother is homogametic (44 + XX) and can only contribute an X chromosome via her ovum. The father is heterogametic (44 + XY) and produces two equal classes of sperm: 50% carrying the X chromosome and 50% carrying the Y chromosome. If an X-carrying sperm fertilizes the ovum, a female child (XX) develops; if a Y-carrying sperm fertilizes the ovum, a male child (XY) develops. Therefore, biological sex is determined strictly by the father's fertilizing sperm, with an invariant 50% statistical probability at each conception."
    }
  },
  {
    id: 6,
    themeId: 2,
    themeName: "Maintenance and Continuity of Life",
    title: "Support, Movement and Growth",
    icon: "bone",
    color: "emerald",
    summary: "Animal skeletal systems (endoskeleton, exoskeleton, hydrostatic), human locomotion with antagonistic muscle pairs, joints, ligaments, tendons, and plant support mechanisms.",
    simulationType: "muscle-sim",
    subtopics: [
      {
        code: "6.1",
        title: "Animal Skeletal Support Systems",
        points: [
          "Three primary animal support skeletons: Endoskeleton (internal osseous and cartilaginous framework found in vertebrates like mammals, birds, reptiles, amphibians, and fish); Exoskeleton (hard external cuticle composed of chitin covering invertebrates like arthropods and crustaceans; requires ecdysis/molting for dimensional growth); Hydrostatic skeleton (fluid-filled coelomic cavity under hydrostatic pressure supporting soft-bodied invertebrates like earthworms, leeches, and jellyfish).",
          "Center of gravity and physical stability: Stability increases when an animal has a lower center of gravity and a broader base of support (e.g., crocodiles sprawling low to the ground, or giraffes spreading front legs wide when lowering their heads to drink)."
        ]
      },
      {
        code: "6.2",
        title: "Human Movement and Skeletal Architecture",
        points: [
          "The human adult skeleton comprises 206 bones divided into: Axial Skeleton (Skull, vertebral column, ribs, sternum - protects central nervous system and thoracic viscera) and Appendicular Skeleton (Pectoral girdle, pelvic girdle, upper and lower limb bones - locomotion).",
          "Antagonistic Muscle Action: Skeletal muscles work in coordinated opposing pairs. During arm flexion (bending elbow): Biceps brachii contracts (shortens and thickens) while Triceps brachii relaxes (lengthens); During arm extension (straightening elbow): Triceps brachii contracts while Biceps brachii relaxes.",
          "Connective tissue roles: Tendons (dense, fibrous, inelastic collagen cords connecting skeletal muscles to bones, transmitting tensile pulling force); Ligaments (tough, elastic fibrous bands connecting bone to bone at synovial joints, stabilizing joint articulation and preventing dislocation); Cartilage (smooth, resilient tissue covering bone ends, reducing friction and absorbing mechanical shocks); Synovial fluid (viscous fluid lubricating the articular joint cavity)."
        ]
      },
      {
        code: "6.3",
        title: "Support Systems in Plants & Growth Curves",
        points: [
          "Woody terrestrial plants: Mechanical rigidity provided by secondary xylem vessels fortified with tough, insoluble lignin; specialized support structures include buttress roots (akar banir) and prop roots (akar sokong).",
          "Herbaceous non-woody plants: Supported primarily by cellular turgidity (turgor pressure exerted by vacuolar water against cellulosic cell walls); climbing modifications include tendrils, twinning stems, and clasping adventitious roots.",
          "Aquatic plants: Supported by water buoyancy; possess specialized aerenchyma tissues containing extensive intercellular air lacunae in stems and leaves (e.g. water hyacinth, hydrilla).",
          "Human growth pattern: Sigmoid curve featuring 5 successive phases: Infancy (rapid exponential growth), Childhood (steady moderate growth), Adolescence (rapid pubertal growth spurt), Adulthood (growth reaches plateau/zero net increase), Senescence/Old age (gradual physical decline and slight negative height adjustment)."
        ]
      }
    ],
    keyTerms: [
      { term: "Antagonistic Muscles", def: "A pair of muscles that produce opposite physiological movements at a joint, where one contracts as the other relaxes." },
      { term: "Ecdysis", def: "The periodic shedding or molting of the chitinous exoskeleton in arthropods to allow body enlargement." },
      { term: "Tendon", def: "Inelastic fibrous connective tissue that anchors skeletal muscle to bone to transmit mechanical contraction force." },
      { term: "Ligament", def: "Elastic fibrous connective tissue connecting articulating bones together at joints to ensure mechanical stability." }
    ],
    experiment: {
      title: "Measuring Stability Based on Base Area and Height of Center of Gravity",
      aim: "To determine the effect of base surface area and center of gravity height on the stability of an object.",
      hypothesis: "An object with a larger base area and lower center of gravity can withstand greater tilting angles before toppling.",
      manipulatedVar: "Base area and height of center of gravity.",
      respondingVar: "Maximum angle of tilt before overturning.",
      constantVar: "Total mass and material density of the test cylinders.",
      precaution: "Tilt the support platform steadily and slowly to prevent kinetic momentum artifacts."
    },
    spmExamFocus: {
      paper1Tip: "Distinguish between Tendon (inelastic, muscle-to-bone) and Ligament (elastic, bone-to-bone).",
      paper2Tip: "Explaining muscle mechanics: remember to always name both muscles in the antagonistic pair (e.g. 'Biceps contracts, triceps relaxes').",
      kbatQuestion: "A senior citizen suffers from osteoarthritis, experiencing severe knee pain during walking. Explain the anatomical cause and recommend non-surgical lifestyle interventions.",
      kbatAnswer: "Cause: Osteoarthritis is characterized by the chronic wear, erosion, and thinning of articular cartilage lining the knee joint, accompanied by reduced synovial fluid lubrication, causing direct bone-on-bone friction. Interventions: 1. Low-impact aerobic exercises like swimming or cycling that strengthen quadriceps without joint compression; 2. Weight management to lower compressive mechanical stress on the tibiofemoral joints; 3. Use of shock-absorbing orthopedic footwear or knee braces."
    }
  },
  {
    id: 7,
    themeId: 2,
    themeName: "Maintenance and Continuity of Life",
    title: "Body Coordination",
    icon: "brain",
    color: "emerald",
    summary: "Human endocrine glands and hormonal homeostasis, endocrine dysfunctions (diabetes, dwarfism, goitre), classifications of psychoactive drugs, alcohol abuse, and mental wellness.",
    simulationType: "hormone-sim",
    subtopics: [
      {
        code: "7.1",
        title: "Human Endocrine System & Hormones",
        points: [
          "Endocrine system characteristics: Ductless glands that secrete chemical messengers called hormones directly into the bloodstream for transport to specific distant target organs; slower, long-lasting, systemic coordinated response.",
          "Major Endocrine Glands: 1. Pituitary Gland ('Master Gland' at base of brain): secretes Growth Hormone (GH), Thyroid-Stimulating Hormone (TSH), Antidiuretic Hormone (ADH); 2. Thyroid Gland (in neck): secretes Thyroxine to regulate basal metabolic rate; 3. Adrenal Glands (atop kidneys): secretes Adrenaline for emergency 'fight-or-flight' sympathetic stimulation; 4. Pancreas (Islets of Langerhans): secretes Insulin (lowers blood glucose by converting it to glycogen) and Glucagon (raises blood glucose); 5. Ovaries: secrete Estrogen and Progesterone; 6. Testes: secrete Testosterone.",
          "Hormonal Imbalance Pathology: Deficiency of Insulin -> Diabetes Mellitus (hyperglycemia); Deficiency of ADH -> Diabetes Insipidus (polyuria with dilute urine); Deficiency of Thyroxine in infancy -> Cretinism (stunted physical and mental development); Deficiency of Thyroxine in adults -> Goitre / Hypothyroidism; Excess GH in childhood -> Gigantism; Deficiency of GH in childhood -> Dwarfism."
        ]
      },
      {
        code: "7.2",
        title: "Disruptions to Coordination: Drugs and Alcohol",
        points: [
          "Drug classifications: 1. Depressants: Retard central nervous system (CNS) neurotransmission, induce sedation and muscle relaxation (e.g. alcohol, barbiturates, heroin, morphine); 2. Stimulants: Accelerate CNS synaptic firing, elevate alertness, heart rate, and blood pressure (e.g. amphetamines, methamphetamine, caffeine, nicotine, cocaine); 3. Hallucinogens: Distort sensory perception, cause visual and auditory hallucinations (e.g. LSD, cannabis, psilocybin); 4. Inhalants: Volatile solvents causing catastrophic neuronal myelin degradation and cardiac arrest (e.g. toluene, glue, paint thinners); 5. Narcotics/Opiates: Intense analgesics with extreme physical and psychological dependence liability.",
          "Impact of excessive alcohol: Prolongs synaptic reflex response time, impairs cerebellar motor coordination and balance, causes visual blurring, and chronically induces hepatic cirrhosis and neurodegenerative encephalopathy."
        ]
      },
      {
        code: "7.3",
        title: "A Healthy Mind and Mental Wellness",
        points: [
          "Characteristics of a healthy mind: Emotional resilience, objective rational judgment, capacity to manage everyday psychological stressors, empathy, and social adaptability.",
          "Factors undermining mental wellness: Chronic uncontrolled stress, genetic predisposition, neurochemical neurotransmitter imbalances (dopamine/serotonin), physical traumatic brain injury, and chronic psychoactive substance abuse."
        ]
      }
    ],
    keyTerms: [
      { term: "Hormone", def: "A biological chemical messenger secreted directly into the bloodstream by ductless endocrine glands to regulate target organ functions." },
      { term: "Fight-or-Flight", def: "An acute sympathetic physiological response triggered by adrenal adrenaline secretion, preparing the body to confront or evade danger." },
      { term: "Depressant", def: "A psychoactive substance that slows down neurotransmission within the central nervous system, impairing reaction speeds." },
      { term: "Cirrhosis", def: "End-stage chronic liver damage characterized by the irreversible replacement of healthy hepatic parenchyma with fibrous scar tissue." }
    ],
    experiment: {
      title: "Investigating the Human Sensory-Motor Reaction Time",
      aim: "To measure human reaction time using the falling ruler drop test.",
      hypothesis: "Fatigue or divided cognitive attention significantly increases reaction time.",
      manipulatedVar: "Cognitive state of the subject (focused vs distracted by mobile phone).",
      respondingVar: "Catch distance of the falling ruler in centimeters (proportional to reaction time).",
      constantVar: "Zero-mark drop position and ruler release mechanism.",
      precaution: "Drop the ruler without warning to prevent anticipatory reflexive movements."
    },
    spmExamFocus: {
      paper1Tip: "Match endocrine glands with their respective deficiency diseases: Pancreas/Insulin -> Diabetes Mellitus; Pituitary/ADH -> Diabetes Insipidus; Thyroid/Thyroxine -> Goitre.",
      paper2Tip: "Describing the physiological changes induced by adrenaline during sudden fear: increased heart rate, dilated pupils, elevated breathing rate, and heightened blood glucose.",
      kbatQuestion: "A driver involved in a car crash was found to have a blood alcohol concentration of 0.12%. Explain physiologically how alcohol contributed to the road accident.",
      kbatAnswer: "Alcohol is a central nervous system depressant. It enhances GABA inhibitory neurotransmission while dampening glutamate excitation, which: 1. Significantly delays neuromuscular reaction time, meaning the driver took longer to apply emergency brakes; 2. Impairs cerebellar motor coordination and distance-depth perception; 3. Induces visual blurring and reduced peripheral awareness, making it impossible to maneuver safely in emergency traffic conditions."
    }
  },
  {
    id: 8,
    themeId: 3,
    themeName: "Exploration of Elements in Nature",
    title: "Elements and Substances",
    icon: "layers",
    color: "purple",
    summary: "Classification of matter (atomic, molecular, ionic), modern Periodic Table trends, electronic configurations, ion formation, and medical/industrial applications of isotopes.",
    simulationType: "atom-sim",
    subtopics: [
      {
        code: "8.1",
        title: "Basics of Matter: Atomic, Molecular and Ionic",
        points: [
          "Matter consists of discrete particles categorized into: 1. Atomic substances: Consist of individual single atoms held by metallic bonds in metals (Fe, Cu, Al) or existing as monoatomic noble gases (He, Ne, Ar); 2. Molecular substances: Consist of non-metal atoms bonded covalently in distinct neutral molecular clusters (H2O, CO2, O2, C12H22O11); 3. Ionic substances: Consist of positively charged cations and negatively charged anions held in a rigid 3D giant ionic lattice by strong electrostatic ionic bonds (NaCl, MgO, CuSO4).",
          "Comparative physical properties: Ionic substances have high melting and boiling points, and conduct electricity in molten or aqueous state (where free-moving ions are mobile) but not in solid state; Molecular substances have low melting/boiling points due to weak intermolecular van der Waals forces and do not conduct electricity."
        ]
      },
      {
        code: "8.2",
        title: "The Modern Periodic Table of Elements",
        points: [
          "Organized in ascending order of atomic (proton) numbers.",
          "Groups (Vertical columns 1 to 18): Elements in the same group possess the same number of valence electrons in their outermost shell, exhibiting similar chemical reactivities (Group 1: Alkali metals; Group 2: Alkaline earth metals; Group 17: Halogens; Group 18: Noble/Inert gases).",
          "Periods (Horizontal rows 1 to 7): Determined by the total number of occupied electron shells.",
          "Octet and Duplet stability: Atoms gain, lose, or share valence electrons to attain stable duplet (2 electrons for He) or octet (8 electrons) outer configurations: Metals donate electrons to form positive cations (e.g. Na -> Na+ + e-); Non-metals accept electrons to form negative anions (e.g. Cl + e- -> Cl-)."
        ]
      },
      {
        code: "8.3",
        title: "Isotopes and Practical Applications",
        points: [
          "Definition: Isotopes are atoms of the same chemical element that contain the same proton number but different nucleon numbers (i.e., different numbers of neutrons).",
          "Mathematical formula: Nucleon Number = Number of Protons + Number of Neutrons.",
          "Major radioisotope applications: 1. Medicine: Cobalt-60 (gamma radiation for oncological radiotherapy and sterilization of surgical equipment); Iodine-131 (diagnosis and metabolic ablation of thyroid carcinoma / hyperthyroidism); 2. Agriculture: Phosphorus-32 (tracer for phosphorus uptake kinetics in crop roots); 3. Archaeology: Carbon-14 (radiocarbon dating of prehistoric biological artifacts); 4. Industry: Sodium-24 (detecting subterranean pipeline leaks); Uranium-235 (fissile nuclear reactor fuel)."
        ]
      }
    ],
    keyTerms: [
      { term: "Isotope", def: "Atoms of the identical chemical element sharing the same proton number but possessing differing neutron numbers." },
      { term: "Nucleon Number", def: "The combined total count of protons and neutrons residing within an atom's nucleus." },
      { term: "Octet Rule", def: "The chemical tendency of main-group atoms to seek a stable configuration of eight valence electrons in their outermost shell." },
      { term: "Giant Ionic Lattice", def: "A regular repeating three-dimensional array of alternating cations and anions held by electrostatic forces." }
    ],
    experiment: {
      title: "Investigating the Electrical Conductivity of Atomic, Molecular and Ionic Substances",
      aim: "To compare electrical conductivity between lead (atomic), solid and molten lead(II) bromide (ionic), and naphthalene (molecular).",
      hypothesis: "Only metallic substances and molten ionic substances conduct electricity to illuminate a circuit bulb.",
      manipulatedVar: "Type and physical state of chemical substance tested.",
      respondingVar: "Deflection on ammeter and illumination of circuit test bulb.",
      constantVar: "Potential difference of power source (6V battery pack).",
      precaution: "Perform heating of lead(II) bromide inside an operational fume chamber to vent toxic bromine gas."
    },
    spmExamFocus: {
      paper1Tip: "Calculate neutrons: Number of neutrons = Nucleon number minus Proton number. Example: Carbon-14 has 6 protons, so it has 14 - 6 = 8 neutrons.",
      paper2Tip: "Explaining why solid sodium chloride cannot conduct electricity while molten sodium chloride can: in solid state, ions are locked in fixed lattice positions; in molten state, ions are free to move and carry charge.",
      kbatQuestion: "A historical wooden shipwreck artifact was salvaged from the Straits of Malacca. Explain the scientific methodology used to ascertain its archaeological age.",
      kbatAnswer: "Archaeologists employ Radiocarbon Dating (Carbon-14 dating). Living trees absorb atmospheric C-14 at a constant ratio. When cut down to build the ship, C-14 uptake ceases and the isotope undergoes radioactive decay with a known half-life of approximately 5,730 years. By measuring the residual activity ratio of C-14 to C-12 in the wood sample, scientists compute the precise elapsed time since the timber died."
    }
  },
  {
    id: 9,
    themeId: 3,
    themeName: "Exploration of Elements in Nature",
    title: "Industrial Chemistry",
    icon: "flask-round",
    color: "purple",
    summary: "Alloys (properties, atomic lattice arrangements, and uses), glass and ceramic technologies, natural vs synthetic polymers, and the vulcanization of natural rubber.",
    simulationType: "alloy-sim",
    subtopics: [
      {
        code: "9.1",
        title: "Alloys: Composition, Properties and Structure",
        points: [
          "Definition: An alloy is a homogeneous mixture containing two or more elements where the primary constituent is a metal.",
          "Purposes of alloying: 1. Enhance structural hardness and tensile strength; 2. Inhibit oxidation and rust corrosion; 3. Improve aesthetic luster and finish.",
          "Atomic arrangement explanation: Pure metals possess uniform atomic diameters arranged in neat orderly parallel layers that easily slide over one another when shear force is applied (making pure metals soft, ductile, and malleable). In an alloy, foreign atoms of differing atomic radii disrupt the regular orderly lattice; these foreign atoms physically block and lock the layers, preventing them from sliding easily -> making alloys significantly harder and stronger.",
          "Key Alloys to memorize: 1. Keluli (Steel): Iron (99%) + Carbon (1%) -> Bridges, high-rise structural frames, vehicle bodies; 2. Keluli Nirkarat (Stainless Steel): Iron (74%) + Chromium (18%) + Nickel (8%) -> Surgical instruments, cutlery (non-rusting); 3. Gangsa (Bronze): Copper (88%) + Tin (12%) -> Medals, commemorative monuments, statues; 4. Loyang (Brass): Copper (75%) + Zinc (25%) -> Musical brass instruments, door locks; 5. Duralumin: Aluminium (95%) + Copper (4%) + Magnesium (1%) -> Aircraft airframes, high-speed rail cabins (exceptionally lightweight and strong); 6. Piuter (Pewter): Tin (95%) + Antimony + Copper -> Royal souvenir handicrafts, luxury decorative mugs."
        ]
      },
      {
        code: "9.2",
        title: "Glass and Ceramics",
        points: [
          "Glass: Made primarily from silica sand (silicon dioxide SiO2). 1. Fused silica glass: Pure SiO2, very high melting point (>1700°C), thermal shock resistant, optically transparent to UV -> Telescope optical lenses, quartz labware; 2. Soda-lime glass: Silica + Soda (Na2CO3) + Limestone (CaCO3), lower melting point, readily molded -> Window panes, commercial glass bottles; 3. Borosilicate glass: Silica + Boron oxide (B2O3), exceptionally low coefficient of thermal expansion, high resistance to thermal cracking -> Pyrex laboratory beakers, oven cookware; 4. Lead crystal glass: Silica + Lead(II) oxide (PbO), high refractive index and density -> Prisms, chandeliers, decorative crystal glassware.",
          "Ceramics: Inorganics made from fired kaolin clay (aluminosilicate); properties: extremely hard, brittle, high thermal and electrical insulation, chemically inert -> Construction floor tiles, bathroom porcelain, high-voltage spark plug insulators, bioceramic dental crowns."
        ]
      },
      {
        code: "9.3",
        title: "Polymers and Vulcanization of Rubber",
        points: [
          "Polymers: Macromolecules formed by covalently bonding repeating small monomer units.",
          "Natural polymers: Starch (monomer: glucose), Proteins (monomer: amino acids), Natural rubber / polyisoprene (monomer: isoprene C5H8).",
          "Coagulation of Natural Rubber Latex: Natural rubber latex consists of rubber polymer cores surrounded by negative protein membranes that naturally repel each other. Adding acid (e.g. ethanoic acid) introduces H+ ions that neutralize the negative membrane charges; rubber particles collide, membranes rupture, and polymer chains entangle -> latex coagulates. Adding alkali (e.g. ammonia) provides OH- ions that neutralize bacterial acids, sustaining negative charges and preventing coagulation.",
          "Vulcanization of Rubber: Heating unvulcanized natural rubber with sulfur creates sulfur cross-links between adjacent polyisoprene chains. Properties of vulcanized rubber: far more elastic, higher tensile strength, heat resistant, oxidation resistant, and non-sticky (used in automotive tires, high-pressure conveyor belts)."
        ]
      }
    ],
    keyTerms: [
      { term: "Alloy", def: "A metallic substance composed of two or more chemical elements where the predominant base element is a metal." },
      { term: "Vulcanization", def: "The chemical process of heating natural rubber with sulfur to form covalent sulfur cross-links between polymer chains." },
      { term: "Borosilicate Glass", def: "Glass containing boron trioxide that exhibits an exceptionally low thermal expansion coefficient, resisting thermal cracking." },
      { term: "Polymerization", def: "A chemical reaction in which monomer molecules react together to form three-dimensional polymer chains." }
    ],
    experiment: {
      title: "Comparing the Hardness of an Alloy (Steel/Bronze) Against a Pure Metal (Iron/Copper)",
      aim: "To demonstrate that alloys exhibit greater structural hardness than pure base metals.",
      hypothesis: "Dropping a weighted steel bearing onto bronze leaves a smaller indentation diameter than on pure copper.",
      manipulatedVar: "Type of metal block (Bronze alloy block vs Pure Copper block).",
      respondingVar: "Diameter of the resulting indentation crater measured in millimeters.",
      constantVar: "Height of bearing release (50 cm) and mass of steel bearing (100 g).",
      precaution: "Drop the bearing through a vertical glass guide tube to ensure perpendicular impact."
    },
    spmExamFocus: {
      paper1Tip: "Know the composition of Duralumin (Aluminium + Copper + Magnesium) and why it is chosen for airplane fuselages (lightweight with high tensile strength).",
      paper2Tip: "Drawing diagrams of atomic arrangements: pure metal has same-sized atoms in orderly layers; alloy has different-sized foreign atoms disrupting the layers.",
      kbatQuestion: "Vehicle tires are manufactured exclusively from vulcanized rubber rather than raw natural rubber. Justify this engineering choice based on molecular polymer structure.",
      kbatAnswer: "Raw natural rubber consists of unlinked polyisoprene chains that slide easily when stressed and melt or become tacky when hot. In vulcanized rubber, covalent sulfur cross-links bridge adjacent polymer chains. When stretched under road friction, the sulfur cross-links pull the chains back to their original configuration, conferring superior elasticity, wear resistance, and high thermal stability up to elevated operating temperatures."
    }
  },
  {
    id: 10,
    themeId: 3,
    themeName: "Exploration of Elements in Nature",
    title: "Chemicals in Medicine and Health",
    icon: "pill",
    color: "purple",
    summary: "Traditional, modern, and complementary therapies, free radicals and cellular oxidation, antioxidant mechanisms, and national pharmaceutical regulation (NPRA).",
    simulationType: "antiox-sim",
    subtopics: [
      {
        code: "10.1",
        title: "Traditional, Modern and Complementary Medicine",
        points: [
          "Traditional medicine: Herbal formulations passed down through generations using natural plant and animal extracts (e.g. Ginger: expels intestinal gas; Aloe vera: soothes dermal burns; Turmeric: anti-inflammatory curcumin; Tongkat Ali: stamina and vitality).",
          "Modern medicine: Scientifically validated, synthetic pharmaceuticals categorized into: 1. Analgesics: Pain relief (Paracetamol, Aspirin, Codeine); 2. Antibiotics: Inhibit or destroy pathogenic bacteria (Penicillin, Streptomycin); 3. Psychotherapeutics: Regulate neurotransmission in psychiatric conditions (Antidepressants, Anxiolytics, Antipsychotics).",
          "Crucial warning on antibiotics: Patients must finish the full prescribed antibiotic course to eliminate all bacterial populations and avoid the development of multidrug-resistant bacterial strains (superbugs).",
          "Complementary therapies: Integrated evidence-based supportive treatments (Acupuncture, Chiropractic alignment, Reflexology, Aromatherapy)."
        ]
      },
      {
        code: "10.2",
        title: "Free Radicals & Cellular Oxidation",
        points: [
          "Definition: Free radicals are highly reactive, unstable chemical atoms or molecules possessing an unpaired electron in their valence orbitals.",
          "Mechanism of damage: Because they lack an electron, free radicals aggressively oxidize and steal electrons from lipids in cell membranes, cellular proteins, and nuclear DNA, triggering a damaging oxidative chain reaction that causes premature cellular aging, atheroma plaques, and oncogenic mutations (cancer).",
          "Sources of free radicals: Internal metabolic reactions (mitochondrial oxidative phosphorylation, cellular inflammatory phagocytosis); External environmental mutagens (cigarette smoke, toxic atmospheric smog, ultraviolet radiation, ionizing radiation, consuming repeatedly reheated frying oils)."
        ]
      },
      {
        code: "10.3",
        title: "Antioxidants & Health Supplements",
        points: [
          "Definition: Antioxidants are stable chemical compounds capable of donating an electron to a free radical, neutralizing its reactivity without becoming unstable free radicals themselves.",
          "Major dietary antioxidants: Vitamin C (ascorbic acid - found in citrus, guava, kiwi); Vitamin E (alpha-tocopherol - found in wheat germ, nuts, palm oil); Beta-carotene (provitamin A - found in carrots, sweet potatoes, pumpkins); Lutein (found in dark leafy greens - protects ocular retina); Lycopene (found in tomatoes, watermelon - supports prostate and cardiovascular health).",
          "Food oxidation: Sliced apples brown when atmospheric oxygen oxidizes polyphenol oxidase enzymes; soaking apple slices in lemon juice (rich in Vitamin C) inhibits this oxidation.",
          "Health product regulation: Commercial supplements in Malaysia must be verified by the National Pharmaceutical Regulatory Agency (NPRA / KKM), displaying a valid MAL registration number and Meditag holographic security label to ensure freedom from toxic adulterants like heavy metals, sildenafil, or prohibited corticosteroids."
        ]
      }
    ],
    keyTerms: [
      { term: "Free Radical", def: "An unstable, highly reactive chemical species containing one or more unpaired electrons in its atomic valence shell." },
      { term: "Antioxidant", def: "A biological molecule capable of neutralizing free radicals by safely donating an electron, inhibiting cellular oxidative stress." },
      { term: "NPRA", def: "National Pharmaceutical Regulatory Agency: Malaysian regulatory body governing the safety, efficacy, and registration of medicinal products." },
      { term: "Antibiotic Resistance", def: "The acquired capability of a bacterial strain to survive exposure to an antibiotic that was previously lethal to it." }
    ],
    experiment: {
      title: "Investigating the Effect of Antioxidants on the Browning of Apple Slices",
      aim: "To demonstrate the inhibitory effect of ascorbic acid (Vitamin C) on enzymatic oxidation in cut apples.",
      hypothesis: "Apple slices immersed in ascorbic acid solution remain fresh without turning brown compared to slices exposed to air or distilled water.",
      manipulatedVar: "Type of dipping solution (Ascorbic acid solution vs Distilled water vs Atmospheric control).",
      respondingVar: "Degree and intensity of brown discoloration observed after 60 minutes.",
      constantVar: "Cultivar of apple, thickness of slice (5 mm), and ambient exposure time.",
      precaution: "Slice the apple with a clean, stainless-steel knife to avoid iron-catalyzed oxidation artifacts."
    },
    spmExamFocus: {
      paper1Tip: "Recognize the distinct biochemical roles of antioxidants: Vitamin C (water-soluble), Vitamin E (lipid-soluble membrane protection), Lycopene (tomatoes).",
      paper2Tip: "Explaining the danger of not finishing an antibiotic course: surviving mutant bacteria develop resistance mechanisms, making future infections far harder to treat.",
      kbatQuestion: "A cosmetics manufacturer claims their new facial serum contains 'antioxidant nanoparticles that halt biological aging completely'. Scientifically critique this marketing claim.",
      kbatAnswer: "While topical antioxidants (like Vitamin C and E) neutralize reactive oxygen species (ROS) in superficial epidermal layers to reduce UV-induced photoaging, biological aging is multifactorial, driven by telomere shortening, genetic programming, and systemic internal metabolic oxidation. No single topical cosmetic product can halt chronological cellular aging entirely, making the claim scientifically inaccurate and misleading."
    }
  },
  {
    id: 11,
    themeId: 4,
    themeName: "Energy and Sustainability of Life",
    title: "Force and Motion",
    icon: "gauge",
    color: "amber",
    summary: "Linear motion kinematics, ticker timer calculations, motion graphs (s-t and v-t), gravitational acceleration, vacuum tube free fall, mass, and Newton's First Law of Inertia.",
    simulationType: "motion-sim",
    subtopics: [
      {
        code: "11.1",
        title: "Linear Motion: Distance, Displacement, Speed, Velocity",
        points: [
          "Scalars vs Vectors: Scalar quantities have magnitude only (Distance d, Speed v, Time t, Mass m); Vector quantities have both magnitude and direction (Displacement s, Velocity v, Acceleration a, Force F, Momentum p).",
          "Essential Kinematic Formulas: 1. Speed (v) = Distance (d) / Time (t); 2. Velocity (v) = Displacement (s) / Time (t); 3. Acceleration (a) = (Final Velocity [v] - Initial Velocity [u]) / Time elapsed [t]. Units: Speed/Velocity in m/s, Acceleration in m/s².",
          "Ticker Timer Analysis: Operates at an alternating current frequency of 50 Hz. Time for 1 tick (1 detik) = 1 / 50 s = 0.02 seconds. A 10-tick strip represents an elapsed duration of 10 × 0.02 s = 0.2 seconds."
        ]
      },
      {
        code: "11.2",
        title: "Linear Motion Graphs (s-t and v-t)",
        points: [
          "Displacement-Time Graph (s-t): 1. Gradient = Velocity (v); 2. Horizontal flat line = Object is stationary (v = 0); 3. Uniform positive gradient = Constant uniform velocity; 4. Curved upward curve = Acceleration.",
          "Velocity-Time Graph (v-t): 1. Gradient = Acceleration (a); 2. Horizontal flat line = Object travels with constant uniform velocity (a = 0); 3. Negative gradient = Uniform deceleration; 4. **Area under the v-t graph = Total displacement / distance traveled (s)** (calculated using geometry of rectangles and triangles)."
        ]
      },
      {
        code: "11.3",
        title: "Gravitational Acceleration and Free Fall",
        points: [
          "Gravitational Acceleration (g): All physical bodies near Earth's surface accelerate downwards at approximately g = 9.81 m/s² (frequently simplified to 10 m/s² in introductory problems).",
          "Free Fall: Occurs when an object falls exclusively under the pull of gravity without encountering any opposing forces (such as air resistance).",
          "Vacuum tube free fall demonstration: When a dense coin and a light feather are released simultaneously inside an evacuated vacuum tube, they fall side by side with identical acceleration and strike the base at the exact same instant, demonstrating that gravitational acceleration is completely independent of object mass. In open air, air drag depends on surface area, retarding the light feather."
        ]
      },
      {
        code: "11.4",
        title: "Mass and Inertia (Newton's First Law)",
        points: [
          "Inertia: The intrinsic tendency of an object to resist any change to its existing state of rest or uniform linear motion in a straight line (Newton's First Law of Motion).",
          "Relationship: An object's inertia is directly proportional to its mass; greater mass = greater inertia.",
          "Real-world manifestations: Passengers lurch forward when a moving bus brakes abruptly; shaking a wet umbrella vigorously causes water droplets to continue moving due to inertia, dislodging from the canopy.",
          "Vehicle safety features engineered to counter inertia: Inertia-locking seatbelts, rapidly deploying front and side airbags, energy-absorbing crumple zones, and heavy load security partitions behind truck cabs."
        ]
      }
    ],
    keyTerms: [
      { term: "Displacement", def: "A vector quantity measuring the shortest straight-line distance between an initial point and final point in a specified direction." },
      { term: "Acceleration", def: "The rate of change of velocity with respect to time, calculated as a = (v - u) / t." },
      { term: "Free Fall", def: "The unhindered motion of a body falling solely under gravitational influence in the complete absence of air resistance." },
      { term: "Inertia", def: "The natural physical property of a mass that resists any alteration in its state of rest or velocity." }
    ],
    experiment: {
      title: "Investigating the Relationship Between Mass and Inertia Using an Inertial Balance",
      aim: "To determine how mass influences the period of oscillation of an inertial balance.",
      hypothesis: "The greater the mass attached to an inertial balance blade, the longer the period of oscillation.",
      manipulatedVar: "Mass placed on the inertial balance (e.g., plasticine masses: 20g, 40g, 60g, 80g).",
      respondingVar: "Time taken for 10 complete horizontal oscillations.",
      constantVar: "Length and stiffness of the oscillating steel balance blade.",
      precaution: "Maintain a small initial displacement angle to ensure strictly linear simple harmonic oscillation."
    },
    spmExamFocus: {
      paper1Tip: "Calculate distance from a velocity-time graph: always compute the area under the curve! If it's a triangle: 0.5 × base × height. If it's a trapezoid: 0.5 × (sum of parallel sides) × height.",
      paper2Tip: "Section A practicals often test ticker-tape calculations: Initial velocity u = s1 / t; Final velocity v = s2 / t; Acceleration a = (v - u) / t_total.",
      kbatQuestion: "A heavy 30-tonne freight lorry carrying steel pipes must maintain a much larger following distance than a 1-tonne passenger car. Explain why using physics concepts.",
      kbatAnswer: "A 30-tonne lorry possesses 30 times greater mass, and consequently possesses vastly greater inertia and linear momentum (p = mv). According to Newton's laws, altering this immense momentum requires either a vastly greater braking force or a substantially longer braking distance and time. If the lorry follows too closely and brakes suddenly, its enormous inertia prevents rapid deceleration, resulting in severe rear-end collisions."
    }
  },
  {
    id: 12,
    themeId: 4,
    themeName: "Energy and Sustainability of Life",
    title: "Nuclear Energy",
    icon: "radiation",
    color: "amber",
    summary: "Nuclear fission vs fusion, nuclear power plant engineering, radiation hazards, deep geological waste repositories, and Malaysia's TRIGA PUSPATI research reactor.",
    simulationType: "nuclear-sim",
    subtopics: [
      {
        code: "12.1",
        title: "Use of Nuclear Energy",
        points: [
          "Clean baseload power: Nuclear fission produces enormous quantities of electrical energy from minuscule fuel quantities without direct greenhouse gas emissions during power generation.",
          "Energy density: One 10-gram uranium fuel pellet generates the energy equivalent of burning 1 tonne of coal or 500 liters of crude oil."
        ]
      },
      {
        code: "12.2",
        title: "Nuclear Fission, Fusion and Reactor Architecture",
        points: [
          "Nuclear Fission: A heavy, unstable fissile nucleus (such as Uranium-235) is struck by a slow thermal neutron. The nucleus splits into two lighter daughter nuclei (e.g. Barium-141 and Krypton-92), releasing 2 to 3 fast neutrons and a massive release of thermal kinetic energy. The newly released neutrons strike neighboring U-235 nuclei, instigating a self-sustaining Nuclear Chain Reaction.",
          "Nuclear Fusion: Two light nuclei (such as hydrogen isotopes Deuterium 2H and Tritium 3H) fuse under extreme temperature (>100 million °C) and pressure to form a heavier Helium nucleus (4He) and a neutron, releasing far more energy than fission with zero long-lived radioactive waste. Fusion powers the core of the Sun and stars.",
          "Components of a Nuclear Reactor: 1. Fuel rods (Uranium-235 or Plutonium-239 pellets); 2. Control rods (Boron or Cadmium: absorb excess neutrons to regulate or safely halt the chain reaction rate); 3. Moderator (Heavy water or Graphite: slows down fast neutrons into thermal neutrons capable of inducing further fission); 4. Coolant (Pressurized water or liquid sodium: absorbs intense core heat and transfers it to a secondary steam generator); 5. Biological radiation shield (Thick reinforced concrete > 2m lined with lead to absorb hazardous gamma and neutron radiation)."
        ]
      },
      {
        code: "12.3",
        title: "Radiation Hazards & Waste Storage",
        points: [
          "Biological effects of ionizing radiation: Acute radiation syndrome (nausea, burns, bone marrow failure), DNA double-strand breaks causing somatic cellular mutations, leukemia, solid cancers, and congenital birth defects.",
          "Nuclear disasters in history: Chernobyl (1986 - graphite fire and steam explosion due to design flaws and safety protocol violations); Fukushima Daiichi (2011 - tsunami overwhelmed backup diesel generators, disabling reactor cooling).",
          "High-Level Radioactive Waste Disposal: Spent fuel is initially cooled in deep storage pools for years, then vitrified into stable borosilicate glass blocks, sealed inside corrosion-resistant steel-lead canisters, and buried hundreds of meters underground in geologically stable deep borehole bedrock repositories."
        ]
      },
      {
        code: "12.4",
        title: "Nuclear Energy in Malaysia (TRIGA PUSPATI)",
        points: [
          "Malaysia operates a 1-megawatt pool-type research reactor: Reaktor TRIGA PUSPATI (RTP) located at the Malaysian Nuclear Agency (Agensi Nuklear Malaysia) in Bangi since 1982.",
          "Purpose: Strictly for scientific research, training nuclear engineers, neutron radiography, and manufacturing radioisotopes for domestic medical diagnosis (e.g. Technetium-99m) and agriculture—not commercial electrical generation.",
          "National policy considerations: Malaysia continues to evaluate nuclear power against abundant domestic natural gas, solar, and hydro resources, balancing high capital costs, radioactive waste disposal, and public safety perceptions."
        ]
      }
    ],
    keyTerms: [
      { term: "Nuclear Fission", def: "The nuclear reaction in which a heavy atomic nucleus splits into smaller nuclei, accompanied by neutron release and massive energy liberation." },
      { term: "Nuclear Fusion", def: "A reaction wherein two light atomic nuclei combine under extreme thermal kinetic energy to form a single heavier nucleus." },
      { term: "Chain Reaction", def: "A self-propagating series of nuclear fission reactions where neutrons produced in one event induce subsequent fission events." },
      { term: "Control Rods", def: "Neutron-absorbing rods made of boron or cadmium used to precisely control the rate of fission in a nuclear reactor." }
    ],
    experiment: {
      title: "Simulating a Nuclear Chain Reaction Using Mousetraps and Ping-Pong Balls",
      aim: "To model the exponential multiplication of neutrons in an uncontrolled vs controlled nuclear chain reaction.",
      hypothesis: "Without neutron absorbers, released ping-pong balls trigger all adjacent mousetraps exponentially in seconds.",
      manipulatedVar: "Presence of damping shields (representing control rods).",
      respondingVar: "Percentage of mousetraps triggered and duration of the chain reaction.",
      constantVar: "Total number of mousetraps (50) and balls per trap (2).",
      precaution: "Perform inside an enclosed clear acrylic viewing chamber to contain flying ping-pong balls."
    },
    spmExamFocus: {
      paper1Tip: "Distinguish between the functional role of the Moderator (slows down neutrons) and Control Rods (absorbs excess neutrons).",
      paper2Tip: "Comparing Nuclear Fission vs Fusion: Fission splits a heavy nucleus into lighter ones; Fusion combines light nuclei into a heavier one.",
      kbatQuestion: "Debate the justification for Malaysia building a commercial nuclear power station to replace aging coal-fired power plants.",
      kbatAnswer: "Justification for: Nuclear power provides zero-emission continuous baseload electricity, dramatically cutting carbon emissions and helping Malaysia achieve Net Zero 2050 while conserving finite fossil fuels. Arguments against: Extremely high initial capital expenditure (billions of ringgit), vulnerability to seismic or catastrophic cooling failure, and the complex challenge of establishing a politically acceptable permanent geological repository for radioactive spent fuel in a tropical nation."
    }
  }
];

// Export to window
if (typeof window !== 'undefined') {
  window.CHAPTERS_DATA = CHAPTERS_DATA;
}
