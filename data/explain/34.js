// Full explanations for ch 34 questions. Format: see explain/22.js.
window.EXPLAIN = window.EXPLAIN || {};
Object.assign(window.EXPLAIN, {
  '34|n|0': {
    ask: 'Which findings show the client’s antibodies are destroying the donor red cells?',
    cues: ['Acute hemolytic reaction = ABO mismatch, usually in the first 15 minutes', 'Mild itching alone = mild allergic'],
    r: {
      0: 'Correct. Destroyed red cells release substances that trigger fever and chills.',
      1: 'Correct. Low back (flank) pain comes from the kidneys as free hemoglobin and debris reach them.',
      2: 'Correct. The antibody reaction releases chemicals that dilate vessels → shock.',
      3: 'Correct. Hemoglobin from burst red cells spills into the urine, turning it dark or red-brown.',
      4: 'Incorrect. Itching or hives alone is a mild allergic reaction to plasma proteins, not hemolysis.',
      5: 'Correct. The heart speeds up to compensate for falling BP.'
    },
    phys: 'ABO-incompatible blood → the client’s antibodies coat donor red cells → complement bursts them inside the vessels → free hemoglobin and inflammatory chemicals → fever, chills, hypotension, back pain → kidneys clog (dark urine, injury) → DIC can follow.',
    rule: 'Acute hemolytic reaction: fever, chills, back pain, hypotension, tachycardia, dark urine → stop the transfusion now.'
  },
  '34|n|1': {
    ask: 'Which situations make red cells sickle?',
    cues: ['Sickling triggers: low oxygen, dehydration, cold, acidosis, infection'],
    r: {
      0: 'Correct. Dehydration thickens the blood and concentrates HbS, so cells sickle and clump more easily.',
      1: 'Correct. Thin air at high altitude lowers oxygen, which triggers sickling.',
      2: 'Correct. Cold narrows blood vessels, slowing flow so sickled cells get stuck.',
      3: 'Correct. Infection raises oxygen demand, causes fever and dehydration, and is a common crisis trigger. (Loss of spleen function also makes infection more dangerous.)',
      4: 'Incorrect. Staying well hydrated is protective — it keeps blood thin and flowing.',
      5: 'Correct. Hard exercise without rest uses oxygen faster and produces acid — both promote sickling.'
    },
    phys: 'HbS is fine when carrying oxygen. When it gives up oxygen (or the blood is acidic, concentrated or cold and slow) → HbS molecules link into rigid rods → cells bend into sickles → they jam small vessels → ischemic pain.',
    rule: 'Sickle cell: avoid dehydration, cold, high altitude, infection and overexertion; hydrate and keep warm.'
  },
  '34|n|2': {
    ask: 'What is causing new chest pain, fever and falling oxygen in a client with sickle cell?',
    cues: ['Pain moved from legs to chest', 'Fever 37.2 → 38.8', 'SpO₂ 96 → 87, RR 18 → 30', 'New infiltrate on x-ray'],
    r: {
      0: 'Incorrect. The crisis started in the legs, but the new chest pain, fever, hypoxemia and infiltrate show it has moved to the lungs.',
      1: 'Correct. Fever + chest pain + hypoxemia + a new lung infiltrate = acute chest syndrome, the leading cause of death in sickle cell disease.',
      2: 'Incorrect. Anxiety does not cause fever, hypoxemia or an infiltrate.',
      3: 'Incorrect. A PE can cause hypoxemia, but fever and a new infiltrate point to acute chest syndrome.'
    },
    phys: 'Sickled cells block lung vessels (or infection/fat emboli start it) → parts of the lung are not perfused → oxygen falls → low oxygen makes more cells sickle → more blockage — a vicious cycle.',
    rule: 'Sickle cell + chest pain, fever, low SpO₂ or new infiltrate = acute chest syndrome → oxygen, call now, prepare for transfusion.'
  },
  '34|n|3': {
    ask: 'What type of anemia is this, and what does treatment involve?',
    cues: ['MCV 112 (big cells)', 'Low B₁₂, normal ferritin', 'Numb, tingling feet', 'Smooth red tongue'],
    r: {
      0: 'Correct. MCV above 100 means the red cells are larger than normal — macrocytic.',
      1: 'Correct. Big cells + low B₁₂ + nerve symptoms is the B₁₂ deficiency pattern.',
      2: 'Incorrect. Ferritin (iron stores) is normal, so iron would not help. The deficiency is B₁₂.',
      3: 'Correct. B₁₂ is needed to maintain myelin; if replacement is delayed, nerve damage can be permanent.',
      4: 'Correct. If the stomach does not make intrinsic factor (pernicious anemia), oral B₁₂ cannot be absorbed and injections or high-dose replacement are lifelong.'
    },
    phys: 'B₁₂ is needed to make DNA. Without it → red-cell precursors keep growing but cannot divide → large, fragile cells (macrocytic). B₁₂ also maintains myelin → nerves lose insulation → numbness and tingling. Fast-dividing tongue cells → smooth, red tongue.',
    rule: 'Big cells (MCV >100) + neuro symptoms = B₁₂. Big cells without neuro = think folate. Small cells = iron.'
  },
  '34|n|4': {
    ask: 'Which part of the blood label is matched against the client’s ID band at the bedside?',
    cues: ['Two licensed staff at the bedside', 'Client identifiers'],
    r: {
      0: 'The unit number is compared with the transfusion record/requisition, not the ID band.',
      1: 'ABO/Rh is compared with the client’s blood type and compatibility record.',
      2: 'Correct. The recipient name, MRN and date of birth on the unit are matched to the client’s ID band by two licensed staff at the bedside — the check that stops blood going to the wrong person.',
      3: 'The expiration date is checked for validity, but it is not what matches the ID band.'
    },
    phys: 'Most fatal transfusion reactions are identification errors — the right blood given to the wrong person. Matching name, MRN and date of birth on the bag to the band at the bedside catches that.',
    rule: 'Bedside check by two licensed staff: client ID band ↔ recipient name/MRN/DOB on the unit; also ABO/Rh, unit number and expiration.'
  },
  '34|n|5': {
    ask: 'What is the safe sequence for starting a red-cell transfusion?',
    cues: ['Severe reactions happen early', 'Bacteria grow at room temperature'],
    r: {
      0: 'First: confirm the order and signed consent — no transfusion starts without both.',
      1: 'Second: baseline temperature, BP, HR and RR so any reaction can be recognized against them.',
      2: 'Third: two licensed staff check the unit against the client at the bedside — most fatal reactions are identification errors.',
      3: 'Fourth: run it slowly for the first 15 minutes and stay — severe reactions start within the first few milliliters.',
      4: 'Fifth: recheck vital signs at 15 minutes; a temperature rise or BP drop may be the first sign of a reaction.',
      5: 'Last: finish within 4 hours of spiking the bag — blood at room temperature grows bacteria.'
    },
    phys: 'An ABO mismatch reacts within minutes of the first few milliliters → starting slowly while you stay means you see it after only a small amount. Blood at room temperature grows bacteria → finish within 4 hours.',
    rule: 'Order + consent → baseline VS → two-person bedside check → slow first 15 min with nurse present → VS at 15 min → finish within 4 hours.'
  },
  '34|n|6': {
    ask: 'For each finding, is it an expected side effect or harm that must be reported?',
    cues: ['Expected effects follow from how the drug works', 'Adverse effects signal danger'],
    rows: {
      0: 'Expected. Unabsorbed iron turns stools dark green-black. (Black, tarry, sticky stools with other bleeding signs would differ.)',
      1: 'Expected. Filgrastim makes the marrow work harder; the expanding marrow causes bone pain.',
      2: 'Report. Epoetin pushing Hgb above the target (often ~11) thickens the blood and raises the risk of clots, stroke and MI. The dose is held or reduced.',
      3: 'Report. Wheezing during IV iron dextran can be the start of anaphylaxis — stop the infusion.',
      4: 'Expected. Oral iron commonly causes constipation; fluids and fiber help.'
    },
    phys: 'Iron: unabsorbed iron darkens stool and slows the gut. Filgrastim: marrow expansion → bone pain. Epoetin: more red cells → thicker blood → clots. Iron dextran: the dextran shell can trigger anaphylaxis.',
    rule: 'Expected = follows the drug’s action. Report = signs of harm (anaphylaxis, Hgb above target, clots).'
  },
  '34|n|7': {
    ask: 'Name the reaction, stop the exposure, and monitor for its dangers.',
    cues: ['10 minutes into PRBCs', 'Chills, T 38.9°C, back pain', 'BP 84/50, HR 124'],
    cond: {
      0: 'Correct. Chills, high fever, back pain and shock within 15 minutes of starting PRBCs is an acute hemolytic reaction (usually ABO mismatch).',
      1: 'Incorrect. A mild allergic reaction causes itching or hives without fever and shock.',
      2: 'Incorrect. Circulatory overload (TACO) causes dyspnea, crackles and high BP — not fever with low BP.',
      3: 'Incorrect. Anxiety does not cause fever, back pain and hypotension.'
    },
    act: {
      0: 'Correct. Stop the blood immediately to limit how many incompatible cells enter.',
      1: 'Correct. Change to new tubing (the old line holds incompatible blood) and run saline to keep IV access for fluids and drugs.',
      2: 'Incorrect. Slowing still delivers incompatible blood.',
      3: 'Incorrect. Acetaminophen hides the fever while the reaction continues.',
      4: 'Incorrect. The bag and tubing go back to the blood bank to identify the cause.'
    },
    mon: {
      0: 'Correct. BP and HR show whether shock from hemolysis is developing or responding to fluids.',
      2: 'Incorrect. Glucose is not affected by a transfusion reaction.',
      3: 'Incorrect. Pupils are not a transfusion-reaction parameter.',
      4: 'Incorrect. Pedal pulses do not track hemolysis or shock as directly as BP and HR.'
    },
    phys: 'Antibodies destroy donor cells inside the vessels → inflammatory chemicals dilate vessels (shock) and cause fever → free hemoglobin clogs the kidneys (dark urine, low output) → clotting can spiral into DIC.',
    rule: 'Transfusion reaction: stop it, saline with new tubing, stay, VS, notify provider and blood bank, return bag and tubing, send blood and urine samples.'
  },
  '34|n|8': {
    ask: 'Follow sickle cell from trigger to symptom to care.',
    blanks: {
      1: 'Low oxygen. When HbS gives up its oxygen, the molecules link into rigid rods. High oxygen keeps HbS soluble.',
      3: 'Vaso-occlusion and ischemic pain. Stiff, sickled cells jam small vessels, and the tissue beyond them is starved of oxygen — that is the pain.',
      5: 'Hydration, oxygen and pain control. Fluids thin the blood, oxygen reduces further sickling, and opioids treat severe ischemic pain. Cold packs constrict vessels and worsen sickling.'
    },
    phys: 'Low oxygen → HbS polymerizes → rigid sickled cells → block small vessels → ischemia and pain → more hypoxia → more sickling. Hydration lowers viscosity; oxygen reverses the trigger.',
    rule: 'Sickle crisis: hydrate, oxygen if hypoxic, scheduled pain control, warmth — never cold.'
  },
  '34|c|0': {
    ask: 'What comes first when a transfusion reaction starts?',
    cues: ['Back pain + chills + falling BP 10 minutes in = hemolytic reaction'],
    r: {
      0: 'Correct. Stopping the transfusion stops more incompatible blood from entering — every milliliter adds to the damage.',
      1: 'Incorrect. Slowing it still gives incompatible blood.',
      2: 'Incorrect. Acetaminophen hides the fever while the reaction continues.',
      3: 'The blood bank is notified, but only after the transfusion is stopped.'
    },
    phys: 'The amount of hemolysis depends on how much incompatible blood is given → stop it first, then support the client.',
    rule: 'Any suspected transfusion reaction: STOP the transfusion first.'
  },
  '34|c|1': {
    ask: 'Which actions reverse sickling and treat a crisis?',
    cues: ['Hydrate, oxygenate, treat pain, watch the lungs'],
    r: {
      0: 'Correct. IV fluids thin the blood so sickled cells flow more easily.',
      1: 'Correct. Vaso-occlusive pain is severe; scheduled (not as-needed) opioids keep it controlled.',
      2: 'Incorrect. Cold constricts vessels and slows flow, which increases sickling. Use warmth instead.',
      3: 'Correct. Oxygen for hypoxemia reduces further sickling.',
      4: 'Correct. Acute chest syndrome is the most dangerous complication; watch for chest pain, fever and falling SpO₂.'
    },
    phys: 'Dehydration, cold and low oxygen all promote HbS polymerization. Fluids, warmth and oxygen reverse those triggers; opioids treat the ischemic pain.',
    rule: 'Sickle crisis: fluids, scheduled opioids, oxygen if hypoxic, warmth, watch for acute chest syndrome.'
  },
  '34|c|2': {
    ask: 'What is the biggest risk of IV iron dextran?',
    cues: ['Iron dextran → anaphylaxis risk'],
    r: {
      0: 'Correct. A small test dose is given first and the client watched closely; emergency drugs stay at hand for every infusion.',
      1: 'Orange juice (vitamin C) improves absorption of oral iron — irrelevant for IV iron.',
      2: 'Nothing is ever mixed with blood products.',
      3: 'IV iron dextran always needs close monitoring for anaphylaxis.'
    },
    phys: 'The dextran shell can trigger an immune reaction → anaphylaxis (wheeze, hypotension, swelling), sometimes even after a test dose.',
    rule: 'IV iron dextran: test dose, monitor closely, epinephrine available.'
  },
  '34|c|3': {
    ask: 'Which statement about oral iron is wrong and needs follow-up?',
    cues: ['“Needs follow-up” = find the incorrect statement'],
    r: {
      0: 'This is the one that needs follow-up. Calcium in milk binds iron and blocks its absorption. Take iron 1–2 hours apart from dairy and antacids.',
      1: 'Correct statement. Unabsorbed iron turns stools dark — expected.',
      2: 'Correct statement. Vitamin C in orange juice helps the gut absorb iron.',
      3: 'Correct statement. A straw keeps liquid iron from staining the teeth.'
    },
    phys: 'Iron is absorbed best in an acidic gut on an empty stomach. Calcium, antacids, tea and coffee bind it; vitamin C keeps it in its absorbable form.',
    rule: 'Oral iron: empty stomach (or with food if GI upset), with vitamin C, not with milk/antacids/tea; straw for liquid; dark stools expected.'
  },
  '34|c|4': {
    ask: 'Which client has a life-threatening complication?',
    cues: ['Sickle cell + new chest pain + fever = acute chest syndrome'],
    r: {
      0: 'Correct. Chest pain with fever in sickle cell disease suggests acute chest syndrome — the leading cause of death in sickle cell.',
      1: 'Fatigue from iron deficiency is chronic and stable.',
      2: 'Itching with polycythemia is uncomfortable but not acute.',
      3: 'A scheduled B₁₂ injection is routine.'
    },
    phys: 'Sickled cells block lung vessels → hypoxemia → more sickling → respiratory failure if not treated quickly.',
    rule: 'Sickle cell + chest pain, fever or low SpO₂ = acute chest syndrome — first.'
  },
  '34|c|5': {
    ask: 'Which transfusion task needs no license or assessment?',
    cues: ['Verification and assessment stay with licensed staff'],
    r: {
      0: 'Correct. AP can take vital signs at the times the nurse sets and report them; the nurse interprets them.',
      1: 'The bedside check must be done by two licensed staff.',
      2: 'Assessing for a reaction requires nursing judgment.',
      3: 'Starting a transfusion is a nursing responsibility.'
    },
    phys: 'Transfusion safety depends on correct identification and early recognition of reactions — both need licensed judgment. Measuring vitals does not.',
    rule: 'Transfusions: AP measure and report; licensed staff verify, start and assess.'
  },
  '34|c|6': {
    ask: 'Big red cells plus nerve symptoms point to which deficiency?',
    cues: ['MCV 110 = macrocytic', 'Paresthesias = nerve involvement'],
    r: {
      0: 'Correct. Large cells with numbness or tingling is B₁₂ deficiency — B₁₂ is needed for both DNA and myelin.',
      1: 'Iron deficiency makes small cells (MCV <80) and no nerve damage.',
      2: 'Thalassemia also makes small cells.',
      3: 'Early blood loss leaves normal-sized cells.'
    },
    phys: 'No B₁₂ → DNA cannot be made → precursors grow large without dividing (macrocytic). No B₁₂ → myelin breaks down → paresthesias.',
    rule: 'Macrocytic + neuro = B₁₂. Macrocytic without neuro = consider folate. Microcytic = iron or thalassemia.'
  },
  '34|c|7': {
    ask: 'Which finding is a reason to HOLD epoetin, not a reason to give it?',
    cues: ['Epoetin raises Hgb', 'Too high a Hgb → clots, stroke, MI', 'Uncontrolled BP is a hold reason'],
    r: {
      0: 'Correct. Hgb above the ordered limit (often around 11) or uncontrolled hypertension → hold. Higher Hgb thickens the blood and raises the risk of clots, stroke and MI.',
      1: 'Hgb 9 is why the client is on epoetin — the drug is supposed to raise it. Not a reason to hold.',
      2: 'Fatigue is a symptom of the anemia being treated — a reason to give it, not hold it.',
      3: 'Low iron stores do not mean hold; iron is given alongside, because the marrow needs iron to build the new red cells.'
    },
    phys: 'Epoetin is a copy of the kidney hormone EPO → tells the marrow to make red cells → Hgb rises. Push it too high → thicker blood → clots; it also raises BP.',
    rule: 'Epoetin: check Hgb and BP first; hold if Hgb is above target or BP uncontrolled; give with iron.'
  }
});
window.EXPLAIN_CH = window.EXPLAIN_CH || {}; window.EXPLAIN_CH['34'] = 1;
