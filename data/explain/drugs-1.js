// Drug cards, broken down. Keyed by drug id in data/drugs-*.js.
// steps = the mechanism from target to what you see · checks = [what to check before giving, why it matters]
// fix / trap / work / nclex / cmp: fuller text that replaces the short original when present.
window.DRUG_EXPLAIN = window.DRUG_EXPLAIN || {};
Object.assign(window.DRUG_EXPLAIN, {
  adenosine: {
    steps: ['Binds adenosine receptors on the AV node', 'Blocks conduction through the AV node for a few seconds', 'The reentry loop circling through the AV node is broken', 'The SA node takes over again → sinus rhythm'],
    checks: [['Continuous ECG running', 'You need to see the brief pause and what rhythm follows'], ['Crash cart and pads at the bedside', 'A few clients have prolonged asystole or bronchospasm'], ['Asthma history', 'Adenosine receptors in the airway can trigger bronchospasm']],
    fix: 'Stops SVT caused by an electrical loop through the AV node.',
    trap: 'Pushing it slowly or through a distal IV — it is gone in about 10 seconds, so it never reaches the heart. Rapid push, closest port, rapid flush.'
  },
  amiodarone: {
    steps: ['Blocks K⁺ channels (plus Na⁺, Ca²⁺ and β receptors)', 'Heart cells take longer to recover after each beat', 'Re-entry circuits and early extra beats cannot fire', 'Dangerous fast rhythms (VT, VF, AF) slow or stop'],
    checks: [['HR, BP and ECG (QT)', 'It slows the heart, lowers BP and lengthens the QT'], ['Baseline lung, thyroid and liver tests', 'It contains iodine and builds up in lung, thyroid and liver tissue'], ['Warfarin and digoxin use', 'It raises both drug levels — doses usually need lowering']],
    fix: 'Converts or controls life-threatening ventricular rhythms and AF.',
    trap: 'Forgetting that it lasts weeks to months: lung fibrosis, thyroid and liver toxicity can appear long after starting, and it raises warfarin and digoxin levels.'
  },
  atropine: {
    steps: ['Blocks muscarinic receptors at the SA and AV nodes', 'The vagus nerve’s slowing signal cannot reach the heart', 'SA node fires faster and AV conduction speeds up', 'HR rises → cardiac output and BP improve'],
    checks: [['Symptoms of low output (BP, mental status, chest pain)', 'Only symptomatic bradycardia is treated'], ['Rhythm', 'In complete heart block it often fails — prepare pacing at the same time']],
    fix: 'Speeds a heart rate that is too slow to keep BP and perfusion up.',
    trap: 'Giving it for a slow rate without symptoms, or relying on it in complete heart block instead of preparing to pace.'
  },
  epinephrine: {
    steps: ['Stimulates α₁, β₁ and β₂ receptors', 'α₁: vessels constrict → BP and coronary perfusion rise', 'β₁: heart beats faster and harder', 'β₂: airways open; mast cells release less histamine'],
    checks: [['Concentration and route', 'Anaphylaxis: 1 mg/mL IM. Arrest: 0.1 mg/mL IV — mixing them up is deadly'], ['ECG and BP', 'It can cause tachydysrhythmias and severe hypertension']],
    fix: 'Restores circulation in arrest and reverses airway swelling and shock in anaphylaxis.',
    trap: 'Giving the IV concentration IM (or IM concentration IV), or delaying IM epinephrine in anaphylaxis to give an antihistamine first.'
  },
  magsulf: {
    steps: ['Magnesium stabilizes heart-cell membranes', 'Blocks the early after-beats that fire during a long QT', 'Torsades cannot keep restarting', 'Rhythm returns to a stable pattern'],
    checks: [['Deep tendon reflexes', 'Losing reflexes is the first sign of magnesium toxicity'], ['RR', 'Toxicity depresses breathing'], ['Kidney function', 'Magnesium is cleared by the kidneys and builds up if they fail']],
    fix: 'Stops torsades de pointes and replaces low magnesium.',
    trap: 'Reaching for adenosine or another QT-prolonging antiarrhythmic in torsades. Antidote for magnesium toxicity: calcium gluconate.',
    work: 'Torsades stops; Mg²⁺ level in range.'
  },
  metoprolol: {
    steps: ['Blocks β₁ receptors on the heart', 'Less adrenaline signal reaches the SA node and muscle', 'Slower rate + gentler squeeze + less renin', 'Lower oxygen demand and lower BP'],
    checks: [['Apical pulse', 'Hold if below about 60 (per order) — it slows the heart further'], ['BP', 'Hold if SBP is below about 90 — it lowers BP'], ['Glucose in diabetes', 'It hides the tachycardia that warns of hypoglycemia']],
    fix: 'Lowers the heart’s workload (angina, MI, HF), controls rate in AF, and lowers BP.',
    trap: 'Stopping it abruptly (rebound tachycardia, angina, MI) — or mixing up tartrate (short-acting) with succinate (once-daily, used in HF).',
    cmp: 'Carvedilol also blocks α₁ (more BP drop). Propranolol is nonselective — it also blocks β₂ and can cause bronchospasm.'
  },
  diltiazem: {
    steps: ['Blocks L-type Ca²⁺ channels in the AV node and arteries', 'Less calcium enters the cells', 'AV node conducts more slowly; arteries relax', 'Ventricular rate falls in AF; BP falls'],
    checks: [['HR', 'It slows AV conduction — hold for bradycardia'], ['BP', 'It dilates arteries — hold for hypotension'], ['Heart failure (reduced EF)', 'It weakens contraction and can worsen HFrEF']],
    fix: 'Slows a fast ventricular rate in AF or flutter; treats angina and hypertension.',
    trap: 'Using it like amlodipine — diltiazem slows the heart; amlodipine does not. Avoid in HFrEF and with beta blockers without close monitoring.',
    nclex: 'Rate control in AF; hold for low HR or BP.'
  },
  amlodipine: {
    steps: ['Blocks Ca²⁺ channels in arterial smooth muscle', 'Arteries relax and widen', 'Afterload and BP fall', 'Little effect on heart rate'],
    checks: [['BP', 'Hold for hypotension'], ['Ankle edema', 'Expected from arteriole dilation — not fluid overload']],
    fix: 'Lowers blood pressure and relieves angina by widening arteries.',
    trap: 'Reading its ankle swelling as heart failure. The edema comes from widened arterioles pushing fluid into tissue, not from a weak heart.',
    nclex: 'Ankle edema is a side effect, not HF.'
  },
  digoxin: {
    steps: ['Blocks the Na⁺/K⁺ pump in heart cells', 'More Ca²⁺ stays inside → stronger contraction', 'Boosts vagal tone → slower AV conduction', 'Stronger, slower beats; rate control in AF'],
    checks: [['Apical pulse for a full minute', 'Hold if below 60 (adult) — it slows conduction'], ['K⁺', 'Low K⁺ lets more digoxin bind → toxicity'], ['Digoxin level and kidney function', 'Narrow range (about 0.5–2 ng/mL); kidneys clear it']],
    fix: 'Improves symptoms of a weak heart and slows the ventricular rate in AF.',
    trap: 'Giving it when K⁺ is low because the digoxin level is “normal.” Toxicity signs: anorexia, nausea, yellow-green halos, new dysrhythmias. Antidote: digoxin immune Fab.',
    cmp: 'Unlike beta blockers, it strengthens contraction while slowing the rate.'
  },
  lisinopril: {
    steps: ['Blocks ACE (angiotensin-converting enzyme)', 'Less angiotensin II → arteries relax; less aldosterone', 'Less Na⁺ and water held; K⁺ is kept', 'BP and afterload fall; heart and kidneys are protected', 'Side path: bradykinin builds up → dry cough, rarely angioedema'],
    checks: [['BP', 'First doses can drop BP sharply'], ['K⁺', 'Less aldosterone → K⁺ rises'], ['Creatinine', 'Can reduce kidney filtration, especially with dehydration'], ['Pregnancy', 'Contraindicated — fetal harm']],
    fix: 'Lowers BP and the heart’s workload; slows heart and kidney damage in HF, post-MI and diabetes.',
    trap: 'Using salt substitutes (potassium chloride) or potassium-sparing diuretics with it → hyperkalemia. Any swelling of lips, tongue or throat = angioedema → stop and get help.'
  },
  losartan: {
    steps: ['Blocks angiotensin II receptors (AT₁)', 'Angiotensin II cannot constrict arteries or release aldosterone', 'BP and afterload fall; K⁺ is kept', 'Bradykinin is not affected → no ACE cough'],
    checks: [['BP', 'Can drop BP'], ['K⁺ and creatinine', 'Same aldosterone effect as ACE inhibitors'], ['Pregnancy', 'Contraindicated']],
    fix: 'Lowers BP and protects the heart and kidneys — the usual switch when an ACE inhibitor causes cough.',
    trap: 'Thinking an ARB avoids hyperkalemia — it raises K⁺ just like an ACE inhibitor; only the cough is avoided.'
  },
  arni: {
    steps: ['Sacubitril blocks neprilysin', 'Natriuretic peptides (which dump Na⁺ and water and relax vessels) last longer', 'Valsartan blocks angiotensin II receptors', 'Less fluid, less afterload, less heart remodeling'],
    checks: [['Last ACE inhibitor dose', 'Must stop at least 36 hours before — together they cause angioedema'], ['BP and K⁺', 'It can cause hypotension and hyperkalemia']],
    fix: 'Reduces deaths and hospital stays in heart failure with reduced EF.',
    trap: 'Starting it within 36 hours of an ACE inhibitor — the overlap greatly raises angioedema risk.',
    cmp: 'Replaces an ACE inhibitor or ARB in HFrEF; never taken with an ACE inhibitor.'
  },
  furosemide: {
    steps: ['Blocks the Na-K-2Cl pump in the loop of Henle', 'Na⁺, Cl⁻ and K⁺ stay in the tubule; water follows', 'Large volume of urine within minutes (IV)', 'Less blood volume → less congestion in lungs and legs'],
    checks: [['K⁺', 'It wastes K⁺ — low K⁺ causes dysrhythmias and digoxin toxicity'], ['BP', 'Volume loss can cause hypotension'], ['Weight and I&O', 'Shows whether fluid is coming off'], ['Hearing (high IV doses)', 'Rapid high doses can damage hearing']],
    fix: 'Removes excess fluid fast in pulmonary edema, HF and edema.',
    trap: 'Giving it at bedtime (up all night, falls) or without checking K⁺. Push IV slowly to protect hearing.'
  },
  hctz: {
    steps: ['Blocks Na-Cl reabsorption in the distal tubule', 'Modest Na⁺ and water loss', 'Over weeks, arteries also relax', 'BP falls'],
    checks: [['K⁺', 'It wastes K⁺'], ['Glucose and uric acid', 'It can raise both (watch diabetes and gout)'], ['Kidney function', 'Works poorly when kidney function is very low']],
    fix: 'First-line long-term blood pressure control.',
    trap: 'Expecting it to rescue pulmonary edema — it is mild; loop diuretics are used for acute fluid overload.',
    work: 'BP at goal; K⁺ stays in range.'
  },
  spironolactone: {
    steps: ['Blocks aldosterone receptors in the collecting duct', 'Na⁺ is lost and K⁺ is kept', 'Also blocks aldosterone-driven scarring of the heart', 'Less fluid and less remodeling in HF'],
    checks: [['K⁺', 'It keeps K⁺ — hold if high'], ['Creatinine', 'Poor kidney function raises hyperkalemia risk'], ['Other K⁺-raising drugs', 'ACE inhibitors, ARBs and K⁺ supplements add up']],
    fix: 'Reduces fluid and heart remodeling in HFrEF; treats excess aldosterone.',
    trap: 'Adding potassium supplements or salt substitutes on top of it → dangerous hyperkalemia. Gynecomastia can occur.',
    work: 'Less edema and fewer HF symptoms with K⁺ in range.'
  },
  nitroglycerin: {
    steps: ['Releases nitric oxide in vessel walls', '↑ cGMP → smooth muscle relaxes', 'Veins widen → less blood returns to the heart (lower preload)', 'Coronary arteries widen → more oxygen to the heart', 'Heart works less → angina eases'],
    checks: [['BP', 'Hold if SBP is below about 90 — it lowers BP'], ['PDE-5 inhibitor use', 'Sildenafil within 24 h or tadalafil within 48 h → severe hypotension'], ['Right ventricular MI', 'These clients depend on preload; nitro can crash BP']],
    fix: 'Relieves angina by lowering the heart’s oxygen demand and improving its supply.',
    trap: 'Waiting until after the third tablet to call — call 911 if pain is not better 5 minutes after the first dose. Headache is expected (vessel dilation).'
  },
  aspirin: {
    steps: ['Irreversibly blocks COX-1 in platelets', 'Platelets cannot make thromboxane A₂', 'Platelets stick and clump less — for their whole 7–10 day life', 'Fewer arterial clots in plaques and stents'],
    checks: [['Bleeding signs and GI history', 'It irritates the stomach and impairs clotting'], ['Allergy / asthma', 'Some clients have aspirin-triggered bronchospasm']],
    fix: 'Prevents platelet clots in arteries — MI, stroke and stent clotting.',
    trap: 'Having a client swallow an enteric-coated tablet during ACS — give non-enteric aspirin (usually 324 mg) and have them chew it so it works within minutes.',
    work: 'No new arterial clots; no bleeding.'
  },
  clopidogrel: {
    steps: ['Blocks the P2Y12 (ADP) receptor on platelets', 'Platelets do not activate in response to ADP', 'Less clumping in arteries and stents', 'Effect lasts the platelet’s life (about 7–10 days)'],
    checks: [['Bleeding signs', 'Platelets work less'], ['Planned surgery', 'Usually stopped about 5 days before, per order'], ['Stent date', 'Stopping early after a stent risks stent clot and MI']],
    fix: 'Keeps stents and narrowed arteries from clotting (often with aspirin).',
    trap: 'Stopping it on their own after a stent — stent thrombosis can cause an MI. Some PPIs (omeprazole) reduce its activation.',
    nclex: 'Do not stop after a stent without the cardiologist.'
  },
  cilostazol: {
    steps: ['Blocks PDE-3 in platelets and vessels', '↑ cAMP → arteries relax and platelets stick less', 'More blood reaches leg muscles', 'Walking distance before pain increases'],
    checks: [['Heart failure history', 'Contraindicated in HF — PDE-3 inhibitors raise mortality there'], ['Bleeding risk', 'It has antiplatelet effects']],
    fix: 'Lengthens how far a client with PAD can walk before claudication.',
    trap: 'Giving it to a client with heart failure, or expecting results in days — it takes weeks.'
  },
  heparin: {
    steps: ['Binds antithrombin and speeds it up about 1,000-fold', 'Antithrombin inactivates thrombin and factor Xa', 'Fibrin cannot form', 'Existing clots stop growing (the body breaks them down)'],
    checks: [['aPTT or anti-Xa', 'Doses follow a nomogram to stay in range'], ['Platelets', 'A drop of 50% or more suggests HIT'], ['Bleeding signs', 'Gums, urine, stool, IV sites, neuro changes']],
    fix: 'Stops clots from growing in DVT, PE and ACS; prevents clots in high-risk clients.',
    trap: 'Mixing up antidotes and labs: heparin = aPTT + protamine; warfarin = INR + vitamin K. It does not dissolve existing clots.'
  },
  enoxaparin: {
    steps: ['Binds antithrombin', 'Mainly inactivates factor Xa', 'Less thrombin and fibrin made', 'Clots are prevented or stop growing'],
    checks: [['Platelets', 'HIT is possible'], ['Kidney function', 'Cleared by the kidneys — builds up in kidney disease'], ['Spinal or epidural anesthesia', 'Risk of spinal hematoma (boxed warning)']],
    fix: 'Prevents and treats DVT/PE with predictable subcutaneous dosing.',
    trap: 'Expelling the air bubble or rubbing the site — leave the bubble, inject into the abdomen 2 inches from the navel, do not rub (bruising).',
    work: 'No new clots; no bleeding.'
  },
  warfarin: {
    steps: ['Blocks vitamin K recycling in the liver', 'Liver makes fewer working factors II, VII, IX and X', 'Clotting slows over 3–5 days as old factors run out', 'INR rises into the target range'],
    checks: [['INR', 'Target usually 2–3 (higher for mechanical valves); hold if above'], ['Bleeding signs', 'Gums, urine, black stools, bruising, headache'], ['New drugs, antibiotics, herbals', 'Many interactions raise or lower the INR']],
    fix: 'Prevents clots long-term in AF, DVT/PE and mechanical valves.',
    trap: 'Telling clients to avoid all green vegetables — the rule is a CONSISTENT vitamin K intake. It also takes days to work, so heparin bridges at the start.'
  },
  apixaban: {
    steps: ['Binds factor Xa directly', 'Prothrombin cannot be converted to thrombin', 'Less fibrin forms', 'Clots are prevented'],
    checks: [['Kidney function', 'Dose depends on kidney function, age and weight'], ['Bleeding signs', 'Main risk'], ['Mechanical heart valve', 'Not used — warfarin is required']],
    fix: 'Prevents stroke in AF and treats DVT/PE without INR checks.',
    trap: 'Using it for a mechanical valve, or stopping abruptly (stroke risk rises). Reversal: andexanet alfa.',
    work: 'No clots or strokes; no bleeding.'
  },
  argatroban: {
    steps: ['Binds thrombin directly (no antithrombin needed)', 'Thrombin cannot turn fibrinogen into fibrin', 'Clot formation stops', 'Contains no heparin, so HIT antibodies are not triggered'],
    checks: [['aPTT', 'Dose is titrated to the aPTT'], ['Liver function', 'Cleared by the liver'], ['Bleeding', 'No direct antidote']],
    fix: 'Anticoagulates clients with heparin-induced thrombocytopenia.',
    trap: 'Switching a HIT client to enoxaparin instead — it is a heparin and can cross-react.',
    work: 'aPTT in range; no new clots; platelets recover.'
  },
  alteplase: {
    steps: ['Converts plasminogen into plasmin', 'Plasmin breaks fibrin strands apart', 'The clot dissolves', 'Blood flow returns to the heart, brain or lung'],
    checks: [['Contraindication checklist', 'Recent bleeding, surgery, stroke or high BP make bleeding likely'], ['Neuro baseline', 'Intracranial bleeding is the biggest risk'], ['BP', 'Must be controlled before and during (stroke protocol)']],
    fix: 'Dissolves the clot causing an ischemic stroke, STEMI (when PCI is not available) or massive PE.',
    trap: 'Mixing up “prevent” and “dissolve”: anticoagulants stop clots growing; thrombolytics dissolve them. Any new headache or neuro change = stop and call.'
  },
  protamine: {
    steps: ['Positively charged protamine binds negatively charged heparin', 'Forms an inactive complex', 'Heparin’s anticoagulant effect ends within minutes', 'aPTT falls'],
    checks: [['Fish allergy, prior protamine, vasectomy', 'Higher risk of an allergic reaction'], ['Infusion rate', 'Give slowly — fast infusion causes hypotension']],
    fix: 'Reverses heparin in bleeding or overdose.',
    trap: 'Using it for warfarin (that is vitamin K). Giving too much can itself act as an anticoagulant.',
    work: 'Bleeding stops; aPTT returns toward normal.'
  },
  vitk: {
    steps: ['Supplies vitamin K to the liver', 'Liver can activate factors II, VII, IX and X again', 'New factors are made over 6–24 hours', 'INR falls'],
    checks: [['INR and bleeding', 'Dose depends on how high the INR is and whether there is bleeding'], ['IV route', 'Give slowly — rare anaphylaxis']],
    fix: 'Reverses warfarin’s effect.',
    trap: 'Expecting it to work instantly — it takes hours; serious bleeding also needs prothrombin complex concentrate or plasma.',
    work: 'INR falls; bleeding stops.'
  },
  atorvastatin: {
    steps: ['Blocks HMG-CoA reductase in the liver', 'Liver makes less cholesterol', 'Liver pulls more LDL out of the blood', 'Plaques grow slower and become more stable'],
    checks: [['Lipid panel and liver enzymes', 'Baseline and follow-up'], ['Muscle pain', 'Myopathy can progress to rhabdomyolysis'], ['Pregnancy', 'Contraindicated']],
    fix: 'Lowers LDL and the risk of MI and stroke.',
    trap: 'Calling muscle pain “normal soreness” — report it, especially with dark urine. Grapefruit raises levels of some statins.'
  },
  dobutamine: {
    steps: ['Stimulates β₁ receptors on the heart', '↑ cAMP → more calcium for each contraction', 'Stronger squeeze → larger stroke volume', 'More cardiac output to organs'],
    checks: [['Continuous ECG', 'It can trigger tachycardia and dysrhythmias'], ['BP and perfusion (urine, mentation)', 'Shows whether output is improving']],
    fix: 'Supports a failing pump in decompensated HF or cardiogenic shock.',
    trap: 'Expecting it to raise BP like a vasopressor — it mainly increases contractility.',
    work: 'Better urine output, warmer skin, clearer mentation.',
    cmp: 'Milrinone (PDE-3 inhibitor) also boosts contractility and dilates vessels.'
  },
  hydralazine: {
    steps: ['Relaxes arteriolar smooth muscle directly', 'Arterioles widen', 'Afterload and BP fall', 'Reflex tachycardia may follow'],
    checks: [['BP and HR', 'It can drop BP and cause reflex tachycardia']],
    fix: 'Lowers afterload in HF (with isosorbide dinitrate) and high BP.',
    trap: 'Missing the reflex tachycardia and fluid retention it causes — it is often paired with a beta blocker and diuretic.',
    work: 'BP at goal; HF symptoms improve.',
    nclex: 'Watch for reflex tachycardia.'
  },
  morphine: {
    steps: ['Binds mu opioid receptors in brain and spinal cord', 'Pain signals are blocked', 'Veins dilate → less preload', 'Brainstem responds less to CO₂ → slower breathing'],
    checks: [['RR and sedation level', 'Sedation comes before respiratory depression'], ['BP', 'Venodilation can lower BP'], ['Naloxone available', 'Reverses respiratory depression']],
    fix: 'Treats severe pain (MI unrelieved by nitrates, sickle cell crisis).',
    trap: 'Trusting SpO₂ on oxygen — check RR and sedation; SpO₂ stays high while CO₂ climbs.'
  },
  kcl: {
    steps: ['Supplies potassium to the blood', 'K⁺ moves into cells', 'Normal resting membrane potential returns', 'Heart and muscle conduct normally'],
    checks: [['K⁺ level', 'Confirms need and avoids overshoot'], ['Urine output', 'K⁺ is cleared by the kidneys — no urine, no K⁺'], ['IV rate and dilution', 'Never IV push; usually ≤10 mEq/hr on a pump peripherally']],
    fix: 'Corrects low potassium, often caused by loop or thiazide diuretics.',
    trap: 'Giving it IV push (fatal cardiac arrest) or when urine output is low.',
    work: 'K⁺ in range; dysrhythmias and cramps resolve.'
  },
  ferrous: {
    steps: ['Supplies elemental iron in the gut', 'Iron is absorbed (best in an acidic gut)', 'Marrow uses it to build heme', 'More hemoglobin per red cell → Hgb rises over weeks'],
    checks: [['Hgb and ferritin', 'Confirms iron deficiency'], ['What it is taken with', 'Dairy, antacids and tea block absorption; vitamin C helps']],
    fix: 'Replaces iron so the marrow can make normal red cells.',
    trap: 'Taking it with milk or antacids. Dark stools are expected; constipation is common.'
  },
  irondex: {
    steps: ['Iron goes straight into the blood', 'Bound to transferrin and stored', 'Marrow uses it to make hemoglobin', 'Hgb rises without relying on gut absorption'],
    checks: [['Allergy history and test dose (iron dextran)', 'Anaphylaxis risk'], ['VS during infusion', 'Catch reactions early'], ['Emergency drugs at hand', 'Epinephrine for anaphylaxis']],
    fix: 'Replaces iron when oral iron fails or cannot be absorbed.',
    trap: 'Skipping the test dose or monitoring for iron dextran — anaphylaxis can occur. Iron sucrose has lower risk.'
  },
  b12: {
    steps: ['Supplies vitamin B₁₂', 'Marrow can make DNA again → normal-size red cells', 'Myelin repair resumes', 'Hgb rises; nerve symptoms stop progressing'],
    checks: [['B₁₂ level and cause', 'Pernicious anemia needs injections or high doses'], ['K⁺ early in treatment', 'Rapid new red-cell production can pull K⁺ into cells']],
    fix: 'Corrects macrocytic anemia and stops nerve damage.',
    trap: 'Using normal oral B₁₂ for pernicious anemia — there is no intrinsic factor to absorb it. Therapy is lifelong.'
  },
  folic: {
    steps: ['Supplies folate', 'Marrow can make DNA again', 'Normal-size red cells are produced', 'Hgb rises'],
    checks: [['B₁₂ level', 'Folate can fix the anemia of B₁₂ deficiency but not the nerve damage — it hides it']],
    fix: 'Corrects folate-deficiency anemia; prevents neural tube defects in pregnancy.',
    trap: 'Giving folate without ruling out B₁₂ deficiency — the blood count improves while nerve damage quietly worsens.',
    work: 'MCV and Hgb return to normal.'
  },
  epoetin: {
    steps: ['Copies the kidney hormone EPO', 'Stimulates red-cell precursors in the marrow', 'More red cells made (needs iron)', 'Hgb rises over weeks'],
    checks: [['Hgb', 'Hold if above the ordered limit (often ~11) — clot risk'], ['BP', 'Can raise BP; hold if uncontrolled'], ['Iron stores', 'Without iron the marrow cannot respond']],
    fix: 'Raises red-cell production in CKD and chemotherapy anemia.',
    trap: 'Thinking a higher Hgb is better — above target it raises the risk of clots, MI, stroke and tumor growth.'
  },
  filgrastim: {
    steps: ['Copies G-CSF', 'Stimulates neutrophil precursors in the marrow', 'More neutrophils released', 'ANC rises → lower infection risk'],
    checks: [['CBC/ANC', 'Shows response and when to stop'], ['Left upper abdominal or shoulder pain', 'Can signal splenic rupture']],
    fix: 'Shortens neutropenia after chemotherapy.',
    trap: 'Stopping for bone pain — it is expected (marrow expanding); treat it. Left-shoulder or LUQ pain is different: report.',
    work: 'ANC rises; fewer infections.'
  },
  hydroxyurea: {
    steps: ['Raises fetal hemoglobin (HbF) production', 'HbF does not polymerize like HbS', 'Fewer cells sickle', 'Fewer pain crises and acute chest episodes'],
    checks: [['CBC', 'It suppresses the marrow'], ['Pregnancy', 'Teratogenic — contraception needed']],
    fix: 'Reduces how often sickle cell crises happen.',
    trap: 'Assuming an oral drug is harmless — it suppresses the marrow (infection, bleeding) and can harm a fetus.',
    nclex: 'Monitor CBC; contraception.'
  }
});
