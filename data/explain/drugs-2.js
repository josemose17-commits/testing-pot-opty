// Drug cards, broken down (respiratory and anti-infective drugs). Format: see explain/drugs-1.js.
window.DRUG_EXPLAIN = window.DRUG_EXPLAIN || {};
Object.assign(window.DRUG_EXPLAIN, {
  albuterol: {
    steps: ['Stimulates β₂ receptors on bronchial smooth muscle', '↑ cAMP inside the muscle cells', 'Smooth muscle relaxes within minutes', 'Airways widen → wheeze eases, air moves', 'Spill-over: skeletal muscle tremor, faster heart, K⁺ shifts into cells'],
    checks: [['Lung sounds, RR, SpO₂, peak flow', 'Baseline to judge whether it worked'], ['HR', 'It can cause tachycardia'], ['How often it is being used', 'Rescue use more than 2 days a week means poor control']]
  },
  ipratropium: {
    steps: ['Blocks muscarinic (M₃) receptors in the airway', 'Vagal signals cannot tighten airway muscle or drive mucus glands', 'Airways relax; secretions drop', 'Mostly stays in the lungs (little absorbed)'],
    checks: [['Glaucoma or enlarged prostate', 'Anticholinergic effects can worsen eye pressure and urinary retention'], ['Lung sounds', 'Baseline for response']]
  },
  tiotropium: {
    steps: ['Binds airway muscarinic receptors for about 24 hours', 'Vagal tightening is blocked all day', 'Airways stay more open', 'Fewer COPD exacerbations'],
    checks: [['Inhaler technique', 'The capsule is inhaled through the device, never swallowed'], ['Glaucoma or urinary retention', 'Anticholinergic effects']]
  },
  salmeterol: {
    steps: ['Stimulates β₂ receptors for about 12 hours', 'Airway muscle stays relaxed', 'Airways stay open through the night', 'Slow onset — not for rescue'],
    checks: [['Is an inhaled steroid also ordered (asthma)?', 'LABA alone in asthma raises the risk of severe attacks — always with an ICS'], ['Rescue inhaler available', 'Salmeterol cannot stop an attack']]
  },
  fluticasone: {
    steps: ['Enters airway cells and binds glucocorticoid receptors', 'Turns down genes for inflammatory chemicals', 'Airway swelling, mucus and twitchiness fall over days to weeks', 'Fewer attacks'],
    checks: [['Mouth (white patches)', 'Steroid left in the mouth allows thrush'], ['Adherence', 'It only works when taken every day']]
  },
  prednisone: {
    steps: ['Binds glucocorticoid receptors throughout the body', 'Inflammatory and immune genes are turned down', 'Airway inflammation falls over hours', 'Also: blood glucose rises, immunity drops, adrenal glands go quiet'],
    checks: [['Blood glucose', 'Steroids raise glucose, especially in diabetes'], ['Signs of infection', 'Immunity is suppressed and fever may be masked'], ['How long it has been taken', 'After more than about 1–2 weeks it must be tapered']]
  },
  dexamethasone: {
    steps: ['Potent, long-acting glucocorticoid', 'Turns down the cytokine storm in severe COVID-19', 'Reduces cerebral edema around tumors', 'Raises glucose; suppresses immunity'],
    checks: [['Blood glucose', 'Raises glucose sharply'], ['Does the COVID client need oxygen?', 'Benefit is shown only in clients requiring oxygen']]
  },
  montelukast: {
    steps: ['Blocks leukotriene receptors in the airway', 'Leukotrienes cannot tighten muscle or swell the lining', 'Less bronchoconstriction and inflammation', 'Works over days — oral, once daily'],
    checks: [['Mood and behavior history', 'Boxed warning for neuropsychiatric effects (agitation, depression, suicidal thoughts)']]
  },
  theophylline: {
    steps: ['Blocks PDE and adenosine receptors', '↑ cAMP → airway muscle relaxes', 'Also stimulates the brain and heart (like caffeine)', 'Narrow gap between helpful and toxic levels'],
    checks: [['Serum level (about 10–20 mcg/mL)', 'Toxicity starts just above range'], ['HR and rhythm', 'Tachycardia and dysrhythmias are toxicity signs'], ['Interacting drugs and smoking', 'Cimetidine, ciprofloxacin raise levels; smoking lowers them']]
  },
  omalizumab: {
    steps: ['Antibody binds free IgE', 'IgE cannot attach to mast cells', 'Allergens do not trigger mast-cell release', 'Fewer allergic asthma attacks'],
    checks: [['Observation after each injection', 'Anaphylaxis can occur, even after many doses'], ['Epinephrine available', 'For anaphylaxis']]
  },
  roflumilast: {
    steps: ['Blocks PDE-4 inside inflammatory cells', '↑ cAMP calms those cells', 'Less airway inflammation in chronic bronchitis', 'Fewer COPD exacerbations — no quick relief'],
    checks: [['Weight', 'Weight loss is common'], ['Mood', 'Can cause depression or suicidal thoughts']]
  },
  dornase: {
    steps: ['Enzyme cuts DNA strands from dead neutrophils in mucus', 'Mucus becomes thinner', 'Easier to cough up and clear', 'Fewer infections in CF'],
    checks: [['Nebulizer', 'Do not mix with other drugs in the nebulizer — it inactivates the enzyme'], ['Lung sounds and sputum', 'Shows clearance']]
  },
  ivacaftor: {
    steps: ['Binds the faulty CFTR channel', 'Holds the channel open longer', 'More chloride and water move into secretions', 'Thinner mucus in lungs and pancreas'],
    checks: [['Genetic mutation', 'Works only for specific CFTR mutations'], ['Liver tests and eye exams', 'Can raise liver enzymes; cataracts in children']]
  },
  bosentan: {
    steps: ['Blocks endothelin receptors on pulmonary arteries', 'Endothelin cannot constrict those vessels', 'Pulmonary pressure falls', 'Right heart works less'],
    checks: [['Monthly liver tests', 'Liver toxicity (boxed warning)'], ['Monthly pregnancy test', 'Causes birth defects; it also weakens hormonal birth control']]
  },
  sildenafil: {
    steps: ['Blocks PDE-5 in lung arteries', '↑ cGMP builds up', 'Pulmonary arteries relax', 'Pulmonary pressure falls'],
    checks: [['Nitrate use', 'Together they cause severe hypotension — never combine'], ['BP', 'Can cause hypotension']]
  },
  epoprostenol: {
    steps: ['Replaces prostacyclin, a natural vessel relaxer', 'Pulmonary arteries dilate; platelets stick less', 'Pulmonary pressure falls', 'Half-life of minutes — effect stops fast if the infusion stops'],
    checks: [['Line and pump', 'A dedicated central line; keep a backup pump and cassette'], ['Signs of line infection', 'Long-term central line']]
  },
  nintedanib: {
    steps: ['Blocks growth-factor signals (tyrosine kinases) in lung fibroblasts', 'Fibroblasts lay down less scar tissue', 'Scarring progresses more slowly', 'Existing scar does not reverse'],
    checks: [['Liver tests', 'Can raise liver enzymes'], ['Bleeding risk', 'It can increase bleeding'], ['Diarrhea', 'Very common — can cause dehydration']]
  },
  oxymetazoline: {
    steps: ['Stimulates α₁ receptors on nasal blood vessels', 'Vessels constrict', 'Mucosa shrinks; bleeding slows', 'Rebound swelling when it wears off with repeated use'],
    checks: [['BP', 'Absorbed drug can raise BP'], ['How long it has been used', 'More than about 3 days → rebound congestion']]
  },
  isoniazid: {
    steps: ['Blocks mycolic acid synthesis', 'TB cell walls cannot be built', 'Dividing TB bacteria die', 'Side path: depletes vitamin B₆ → neuropathy; liver injury'],
    checks: [['Liver tests and alcohol use', 'Hepatotoxicity — alcohol adds to it'], ['Numbness or tingling', 'B₆ depletion — give pyridoxine']]
  },
  rifampin: {
    steps: ['Blocks bacterial RNA polymerase', 'TB cannot make the proteins it needs', 'Bacteria die', 'Also speeds up liver enzymes → other drugs cleared faster'],
    checks: [['Medication list', 'It lowers levels of birth control, warfarin, many HIV drugs'], ['Liver tests', 'Hepatotoxicity']]
  },
  pyrazinamide: {
    steps: ['Converted to its active form inside TB bacteria', 'Works in the acidic pockets where TB hides', 'Kills slowly dividing bacteria', 'Side path: blocks uric acid excretion'],
    checks: [['Uric acid', 'It raises uric acid → gout'], ['Liver tests', 'Hepatotoxicity']],
    trap: 'Missing the uric acid effect — joint pain or swelling on RIPE therapy is likely pyrazinamide gout.',
    work: 'Sputum smears turn negative.',
    cmp: 'Of the RIPE drugs, it is the one that raises uric acid.'
  },
  ethambutol: {
    steps: ['Blocks cell-wall building enzymes in TB', 'Bacteria cannot grow', 'Prevents resistance when used with other drugs', 'Side path: optic nerve inflammation'],
    checks: [['Baseline vision and red-green color test', 'Optic neuritis first shows as color confusion']],
    trap: 'Expecting liver toxicity — ethambutol’s signature is the eye. Report blurred vision or red-green changes right away.',
    work: 'Sputum smears turn negative.',
    cmp: 'E for Ethambutol, E for Eyes.'
  },
  oseltamivir: {
    steps: ['Blocks viral neuraminidase', 'New flu particles cannot be cut free from infected cells', 'Virus spreads more slowly in the airway', 'Illness shortens by about a day'],
    checks: [['Time since symptoms started', 'Works best within 48 hours'], ['Kidney function', 'Dose is adjusted for kidney disease']]
  },
  remdesivir: {
    steps: ['Acts like a fake RNA building block', 'Viral RNA polymerase stops copying', 'Virus replicates less', 'Clinical recovery faster in some clients'],
    checks: [['Liver and kidney function', 'Can raise liver enzymes'], ['Infusion reaction signs', 'Watch during the infusion']],
    trap: 'Expecting it to work late in the illness — antivirals act on viral replication, which is greatest early.',
    work: 'Shorter recovery, less oxygen needed.'
  },
  paxlovid: {
    steps: ['Nirmatrelvir blocks the virus’s main protease', 'Viral proteins cannot be cut into working parts', 'Ritonavir blocks the liver enzyme (CYP3A) that would break nirmatrelvir down', 'Drug levels stay high enough to stop replication'],
    checks: [['Full medication review', 'Ritonavir raises levels of many drugs (statins, anticoagulants, some heart drugs)'], ['Kidney function', 'Dose adjustment'], ['Symptom start', 'Start within 5 days']],
    trap: 'Missing a dangerous interaction — ritonavir blocks CYP3A and raises levels of many common drugs.',
    work: 'Lower risk of hospitalization.'
  },
  ceftriaxone: {
    steps: ['Binds penicillin-binding proteins', 'Bacteria cannot cross-link their cell walls', 'Walls weaken and the bacteria burst', 'Infection clears'],
    checks: [['Allergy history (penicillin/cephalosporin)', 'Cross-reactivity is low but anaphylaxis is possible'], ['Cultures drawn first', 'Antibiotics sterilize cultures']]
  },
  azithromycin: {
    steps: ['Binds the bacterial ribosome (50S)', 'Bacteria cannot make proteins', 'Growth stops', 'Covers atypical organisms (Mycoplasma, Legionella)'],
    checks: [['ECG/QT and electrolytes', 'It prolongs the QT — torsades risk with low K⁺ or Mg²⁺']],
    trap: 'Giving it with a long QT or other QT-prolonging drugs.',
    work: 'Fever and cough improve.'
  },
  ciprofloxacin: {
    steps: ['Blocks bacterial DNA gyrase', 'Bacteria cannot unwind and copy DNA', 'Bacteria die', 'Side paths: tendon damage, glucose swings, QT prolongation'],
    checks: [['Age, steroid use', 'Tendon rupture risk is higher in older adults and with corticosteroids'], ['Antacids, iron, calcium', 'They block absorption — separate doses']],
    trap: 'Ignoring new heel or calf pain — stop and report (Achilles tendon rupture).',
    work: 'Infection resolves.'
  },
  doxycycline: {
    steps: ['Binds the bacterial ribosome (30S)', 'Bacteria cannot make proteins', 'Growth stops', 'Side paths: photosensitivity, esophageal irritation, binds to teeth'],
    checks: [['Pregnancy and children under 8', 'Stains developing teeth'], ['How it is swallowed', 'Full glass of water, stay upright 30 minutes — it burns the esophagus']],
    trap: 'Taking it lying down or with dairy, antacids or iron (they block absorption).',
    work: 'Infection resolves.'
  },
  amphob: {
    steps: ['Binds ergosterol in fungal membranes', 'Creates pores in the membrane', 'Fungal cell contents leak out → cell dies', 'Side path: also binds human kidney cells → nephrotoxicity'],
    checks: [['Creatinine', 'Kidney injury is common'], ['K⁺ and Mg²⁺', 'Both are wasted in the urine'], ['Premedication and VS', 'Fever, chills and rigors with infusion']]
  },
  itraconazole: {
    steps: ['Blocks the enzyme that makes ergosterol', 'Fungal membranes are built wrong', 'Fungal growth stops', 'Side path: weakens heart contraction; blocks CYP3A'],
    checks: [['Heart failure history', 'Can worsen HF'], ['Liver tests', 'Hepatotoxicity'], ['Medication list', 'Raises levels of many drugs']],
    trap: 'Giving it to a client with heart failure, or missing a drug interaction.',
    work: 'Infection resolves.'
  }
});
