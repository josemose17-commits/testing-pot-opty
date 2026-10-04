// Full explanations for ch 27 questions. Format: see explain/22.js.
window.EXPLAIN = window.EXPLAIN || {};
Object.assign(window.EXPLAIN, {
  '27|n|0': {
    ask: 'What must be checked before contrast and sedation so the procedure is safe — and so problems afterward can be spotted?',
    cues: ['Contrast → allergy and kidney risk', 'Arterial puncture → bleeding risk and a pulse baseline', 'Sedation → NPO'],
    r: {
      0: 'Correct. A prior contrast reaction is the strongest predictor of another one; the provider may premedicate with a steroid and antihistamine.',
      1: 'Correct. Contrast can injure the kidneys. A baseline creatinine and eGFR show whether the kidneys can handle it and let you compare afterward.',
      2: 'Correct. Without a baseline you cannot tell whether a weak pulse afterward is new — a sign of clot or occlusion at the puncture.',
      3: 'Correct. Metformin is usually held around contrast (risk of lactic acidosis if the kidneys are injured), and anticoagulants raise the risk of bleeding at the puncture site.',
      4: 'Incorrect. A1C shows glucose control over 3 months. It does not change whether the procedure is safe today.',
      5: 'Correct. Moderate sedation needs an empty stomach to reduce aspiration risk; confirm NPO status per policy.'
    },
    phys: 'Iodinated contrast → constricts kidney vessels and is toxic to tubules → acute kidney injury in vulnerable clients. Metformin is cleared by the kidneys → if they fail, it builds up → lactic acidosis. Arterial puncture + anticoagulant → bleeding.',
    rule: 'Before contrast: allergy, creatinine/eGFR, metformin and anticoagulants, baseline pulses, NPO.'
  },
  '27|n|1': {
    ask: 'Which findings show that not enough blood is reaching the tissues?',
    cues: ['Low cardiac output → look at skin, kidneys and brain'],
    r: {
      0: 'Correct. The sympathetic system clamps down skin vessels to send blood to the heart and brain, so the hands and feet get cool and pale.',
      1: 'Correct. Refill longer than 3 seconds means blood is slow to return to the capillaries — poor peripheral perfusion.',
      2: 'Correct. Below 30 mL/hr (about 0.5 mL/kg/hr) means the kidneys are not getting enough blood to filter.',
      3: 'Correct. The brain is very sensitive to low flow; restlessness or anxiety is often the first sign.',
      4: 'Incorrect. Bounding pulses mean a strong, high-volume beat. Low output gives weak, thready pulses.',
      5: 'Correct. BP = cardiac output × resistance. When output falls far enough, compensation fails and BP drops.'
    },
    phys: 'Cardiac output falls → baroreceptors sense lower pressure → sympathetic surge → skin and kidney vessels constrict to protect the heart and brain → cool skin, slow refill, low urine → when compensation fails, BP falls and the brain shows it (restlessness, confusion).',
    rule: 'Low cardiac output shows at the skin (cool, pale, slow refill), kidneys (urine <30 mL/hr) and brain (restless, confused), then BP.'
  },
  '27|n|2': {
    ask: 'Does this troponin trend mean a heart attack, even though the first value was normal?',
    cues: ['Troponin 0.02 → 0.9 → 3.6 (reference <0.04)', 'First draw only 30 minutes after pain began', 'Jaw pain, diaphoresis, ST depression V4–V6'],
    r: {
      0: 'Incorrect. Troponin starts rising 3–6 hours after injury. A value drawn 30 minutes in is too early to rule anything out.',
      1: 'Correct. A rising troponin with ischemic pain and ST depression (not elevation) is a non-ST-elevation MI (NSTEMI).',
      2: 'Incorrect. Three values rising steadily together with symptoms and ECG changes is a real trend, not an error.',
      3: 'Incorrect. Troponin I is specific to heart muscle; skeletal muscle injury does not raise it.'
    },
    phys: 'A blocked coronary artery → heart muscle cells starve → they die and break open → troponin (a structural protein) leaks into the blood over hours → rises, peaks about 24 hours, stays up for days.',
    rule: 'Trend beats a single value: one normal troponin early does not rule out MI — repeat it.'
  },
  '27|n|3': {
    ask: 'Which findings mean hidden bleeding or a blocked artery after the procedure — even with a dry dressing?',
    cues: ['BP 128 → 110 → 92, HR 82 → 98 → 116', 'New right back/flank pain', 'Pedal pulse 2+ → 1+', 'Dressing dry = the distractor'],
    r: {
      0: 'Correct. Falling BP with a rising HR is the body compensating for lost volume — hemorrhage somewhere.',
      1: 'Incorrect on its own. A femoral puncture can bleed backward into the retroperitoneum, where you cannot see it; the dressing stays dry.',
      2: 'Correct. Back or flank pain on the puncture side is the classic sign of a retroperitoneal bleed.',
      3: 'Correct. A weaker pulse in the same leg means a clot, hematoma or dissection is reducing flow to the foot.',
      4: 'Incorrect. Contrast acts as a diuretic, so voiding a large amount of clear urine is expected.'
    },
    phys: 'A high femoral puncture → blood tracks behind the peritoneum → several liters can collect unseen → preload drops → BP falls and HR rises to compensate → back or flank pain from blood pressing on tissues.',
    rule: 'Hidden bleeding: trust the vital-sign trend and new back pain over a dry dressing.'
  },
  '27|n|4': {
    ask: 'Where is the apex of the heart, where the apical pulse is loudest?',
    cues: ['Apical pulse = point of maximal impulse (PMI)'],
    r: {
      0: 'Second right intercostal space is the aortic area — where you hear the aortic valve.',
      1: 'Second left intercostal space is the pulmonic area — the pulmonic valve.',
      2: 'Fourth left lower sternal border is the tricuspid area — the tricuspid valve.',
      3: 'Correct. Fifth intercostal space at the left midclavicular line is the apex (mitral area), where the left ventricle tip touches the chest wall.'
    },
    phys: 'The heart sits tilted, with its tip (left ventricular apex) pointing down and to the left. That tip taps the chest wall at the 5th intercostal space, midclavicular line — the PMI.',
    rule: '“All People Enjoy Time Magazine”: Aortic 2nd R, Pulmonic 2nd L, Erb’s 3rd L, Tricuspid 4th L, Mitral/apical 5th L MCL.'
  },
  '27|n|5': {
    ask: 'What is the safe order for new crushing chest pain — assess, find a STEMI, then treat?',
    cues: ['Possible MI → time is muscle', 'Nitro needs an adequate BP and no PDE-5 drug', 'Oxygen only if SpO₂ <90%'],
    r: {
      2: 'Third: oxygen only if SpO₂ is below 90% — extra oxygen in a client who is not hypoxemic gives no benefit and may narrow the coronary arteries.'
    },
    phys: 'A blocked coronary → heart muscle dies a little more every minute → the 12-lead finds a STEMI that needs the cath lab now → nitro widens veins and lowers preload (less work for the heart) but can crash a low BP.',
    rule: 'Chest pain: stay and assess → 12-lead within 10 minutes → oxygen if SpO₂ <90% → nitro if SBP allows → SBAR to the provider.'
  },
  '27|n|6': {
    ask: 'For each finding, did blood back up into the lungs (left) or into the body’s veins (right)?',
    cues: ['Left = Lungs', 'Right = the Rest of the body'],
    rows: {
      0: 'Left-sided. The left ventricle cannot empty → pressure backs into the lungs → fluid leaks into alveoli (crackles) → worse lying flat (orthopnea).',
      1: 'Right-sided. The right ventricle cannot empty → pressure backs into the vena cava → the neck veins bulge.',
      2: 'Left-sided. Severe backup into the lungs floods the alveoli with fluid and some blood — pulmonary edema.',
      3: 'Right-sided. Backup into the body’s veins → fluid pools in the legs and the liver swells.',
      4: 'Left-sided. Lying down returns leg fluid to the circulation → more volume for a weak left ventricle → the lungs congest at night and the client wakes gasping.'
    },
    phys: 'Blood backs up behind whichever ventricle fails. Left ventricle fails → pulmonary veins → lungs. Right ventricle fails → systemic veins → neck, liver, legs.',
    rule: 'Left = lungs (crackles, orthopnea, PND, frothy sputum). Right = rest of the body (JVD, edema, hepatomegaly).'
  },
  '27|n|7': {
    ask: 'Name the hidden complication, do what helps now, and track what shows the bleeding is under control.',
    cues: ['2 hours after femoral cath', 'BP 130/80 → 88/54, HR 122', 'Right flank pain', 'Site dry'],
    cond: {
      1: 'Incorrect. A vasovagal reaction slows the heart; this client is tachycardic.',
      2: 'Incorrect. Contrast reactions cause hives, itching or wheeze — not flank pain hours later.',
      3: 'Incorrect. Anxiety can raise HR but does not drop BP by 40 points.'
    },
    act: {
      0: 'Correct. This needs urgent imaging and possibly a procedure to stop the bleeding.',
      1: 'Correct. A straight leg protects the puncture from more stress, and IV fluids (per order) restore volume while help comes.',
      2: 'Incorrect. Walking strains the puncture and the client is in shock — unsafe.',
      3: 'Incorrect. Sitting up bends the hip and pushes on the puncture, which can worsen the bleed.',
      4: 'Incorrect. The bleeding is internal; removing the dressing shows nothing useful.'
    },
    mon: {
      0: 'Correct. BP rising and HR falling show the volume replacement is working and bleeding is slowing.',
      1: 'Correct. Falling Hgb/Hct confirms and measures blood loss.',
      2: 'Incorrect. Temperature does not change with blood loss and does not show whether bleeding has stopped.',
      3: 'Incorrect. Glucose has nothing to do with blood volume or bleeding.',
      4: 'Incorrect. Pupils are a neuro check, not a bleeding parameter.'
    },
    phys: 'Femoral puncture above the inguinal ligament → bleeds behind the peritoneum → volume loss → preload and cardiac output fall → BP drops, HR rises → blood irritates the flank → pain.',
    rule: 'After femoral access: hypotension + tachycardia + back/flank pain = retroperitoneal bleed. Call now, leg straight, fluids, trend VS and Hgb.'
  },
  '27|n|8': {
    ask: 'Link the cardiac output formula to what a beta blocker changes and what you check first.',
    blanks: {
      1: 'Stroke volume. Cardiac output = heart rate × stroke volume (the amount pumped per beat). BP depends on output, and ejection fraction is a percentage, not a volume.',
      3: 'Heart rate and contractility. Blocking β₁ receptors slows the SA node and weakens each squeeze — both levers of cardiac output.',
      5: 'Apical pulse and BP. Because it slows the heart and lowers BP, hold it (per parameters) if HR is below about 60 or SBP below about 90–100.'
    },
    phys: 'β₁ receptors on the heart speed the rate and strengthen contraction. A beta blocker blocks them → slower rate + weaker squeeze → lower cardiac output and BP → less oxygen demand.',
    rule: 'CO = HR × SV. Beta blocker lowers HR and contractility → check apical pulse and BP before every dose.'
  },
  '27|c|0': {
    ask: 'Which client is actively losing blood volume right now?',
    cues: ['Expanding hematoma + BP 90/50 after cath'],
    r: {
      0: 'BNP is high, but the client is chronic and their weight is stable.',
      1: 'Correct. An expanding hematoma means the artery is still bleeding, and BP 90/50 shows volume loss — apply pressure and get help.',
      2: 'High LDL is a long-term risk factor, not urgent.',
      3: 'A routine pre-test client with no problem described.'
    },
    phys: 'An arterial puncture that has not sealed → blood under arterial pressure keeps leaking → circulating volume falls → BP drops.',
    rule: 'Active bleeding with hypotension comes before chronic labs and routine care.'
  },
  '27|c|1': {
    ask: 'Can one normal troponin an hour after pain rule out an MI?',
    cues: ['1 hour after onset — too early'],
    r: {
      0: 'Too early. Troponin begins to rise 3–6 hours after injury, so a 1-hour value can be normal during an MI.',
      1: 'Correct. Repeat per protocol (commonly at 3–6 hours) and watch the trend.',
      2: 'Unsafe — the client may be having an MI that the first test was too early to show.',
      3: 'A lipid panel shows long-term risk; it does not diagnose an MI.'
    },
    phys: 'Heart cells die → they break open → troponin leaks out gradually → blood levels rise over hours, not minutes.',
    rule: 'Troponin: trend, not a single value. Early normal → repeat.'
  },
  '27|c|2': {
    ask: 'What is the safety issue with metformin and contrast dye?',
    cues: ['Metformin is cleared by the kidneys', 'Contrast can injure the kidneys'],
    r: {
      0: 'Unsafe. Doubling the dose raises the risk of lactic acidosis and hypoglycemia.',
      1: 'Correct. Metformin is usually held for the procedure and 48 hours after, restarting once kidney function is confirmed normal — follow the provider’s and facility’s protocol.',
      2: 'Unsafe. The interaction can cause life-threatening lactic acidosis.',
      3: 'Unsafe. Giving it with contrast is exactly the combination to avoid.'
    },
    phys: 'Contrast → kidney injury → metformin is not cleared → it builds up → the liver makes and releases more lactate → lactic acidosis.',
    rule: 'Contrast + metformin: hold per protocol, check creatinine before restarting.'
  },
  '27|c|3': {
    ask: 'Which actions protect the femoral puncture and the leg’s circulation afterward?',
    cues: ['Femoral artery puncture'],
    r: {
      0: 'Correct. A straight leg keeps the hip from bending and pressing on the arterial puncture while it seals.',
      1: 'Correct. Distal pulses, color and warmth show whether blood still reaches the foot.',
      2: 'Incorrect. Sitting up to 90° bends the hip and can reopen the puncture; keep the head of bed low (often 30° or less) as ordered.',
      3: 'Correct. Watch for bleeding and a growing hematoma at the puncture — the artery is still sealing.',
      4: 'Correct. Fluids help the kidneys flush out the contrast and lower the risk of kidney injury.'
    },
    phys: 'The arterial puncture needs hours to seal. Hip flexion → pressure on the site → bleeding or hematoma. A clot or dissection at the site → less flow to the foot.',
    rule: 'After femoral access: leg straight, HOB low, check site and distal pulses, push fluids.'
  },
  '27|c|4': {
    ask: 'Which finding is not a normal after-effect of the catheterization?',
    cues: ['“Requires immediate report”'],
    r: {
      0: 'Correct. A cool, pale foot without a pulse means the artery is blocked (clot or dissection) — the limb is at risk.',
      1: 'Expected. Mild tenderness at the puncture site is normal.',
      2: 'Expected. Contrast commonly causes a warm, flushing feeling during injection.',
      3: 'Expected. Contrast is an osmotic diuretic, so frequent voiding follows.'
    },
    phys: 'A clot or torn artery lining at the puncture → blood cannot reach the foot → it turns cool and pale, and the pulse disappears.',
    rule: 'Check the 6 Ps distal to the site: pulse, pallor, pain, paresthesia, paralysis, poikilothermia (cold).'
  },
  '27|c|5': {
    ask: 'Which drug would stop the stress test from working?',
    cues: ['Stress test needs the heart rate to rise'],
    r: {
      0: 'Correct. A beta blocker keeps the heart rate from rising, so the heart is never stressed enough to show ischemia. It is often held 24–48 hours as ordered.',
      1: 'A multivitamin does not affect heart rate.',
      2: 'Acetaminophen does not affect heart rate.',
      3: 'A stool softener does not affect heart rate.'
    },
    phys: 'The test raises heart rate to increase oxygen demand → a narrowed artery cannot keep up → ischemia shows on ECG or imaging. A beta blocker blocks the rate rise.',
    rule: 'Hold drugs that block the response the test measures (beta blockers, and caffeine for a pharmacologic stress test).'
  },
  '27|c|6': {
    ask: 'Which task is measuring, not interpreting, assessing or teaching?',
    cues: ['Stable client', 'Measurement'],
    r: {
      0: 'Correct. Measuring orthostatic vitals on a stable client is data collection; the nurse interprets the results.',
      1: 'Interpreting an ECG requires nursing judgment.',
      2: 'Assessing chest pain is a nursing assessment.',
      3: 'Teaching is a nursing responsibility.'
    },
    phys: 'AP can collect routine measurements on stable clients; deciding what those numbers mean requires a nurse.',
    rule: 'Measurement can be delegated; assessment, interpretation and teaching cannot.'
  },
  '27|c|7': {
    ask: 'Which trend shows the heart is pumping less blood to the organs?',
    cues: ['Urine 60 → 45 → 20'],
    r: {
      0: 'Correct. Urine falling to 20 mL/hr shows the kidneys are getting less and less blood — falling cardiac output.',
      1: 'Capillary refill under 3 seconds is normal.',
      2: 'Warm skin means good peripheral perfusion.',
      3: 'A steady 120/80 is stable.'
    },
    phys: 'Less cardiac output → less blood to the kidneys → less filtration → less urine. The kidneys show it before the BP falls.',
    rule: 'Urine output is the kidneys’ report on perfusion: below 30 mL/hr is a warning.'
  },
  '27|x|0': {
    ask: 'Which heart and vessel changes are normal aging?',
    cues: ['Aging = stiffer vessels and valves, slower responses, fewer pacemaker cells'],
    r: {
      2: 'Incorrect. Maximum heart rate falls with age (roughly 220 minus age), so the heart cannot speed up as much.'
    },
    phys: 'Elastic fibers are replaced by collagen → arteries and valves stiffen → systolic BP rises and murmurs appear. Pacemaker cells drop out and the conduction system scars → more dysrhythmias. Fewer, less responsive β receptors → a slower, smaller heart-rate rise to stress.',
    rule: 'Aging heart: stiffer arteries (↑ SBP), thicker valves, dull baroreceptors, conduction fibrosis, lower max HR, slower stress response.'
  },
  '27|x|1': {
    ask: 'Why does an older adult get dizzy standing up, and what keeps them safe?',
    cues: ['80 years old', 'Dizzy getting out of bed = orthostatic hypotension'],
    r: {
      2: 'Incorrect. Aging does not speed the heart; the problem is a slow reflex response to standing, not a fast rate.'
    },
    phys: 'Standing → blood pools in the legs → BP drops → baroreceptors should trigger fast vasoconstriction and a faster heart. In older adults they respond late → the brain is briefly underperfused → dizziness and falls.',
    rule: 'Orthostatic hypotension in older adults: dangle first, rise slowly, sit before standing.'
  },
  '27|x|2': {
    ask: 'How should exercise be adjusted for an aging heart?',
    cues: ['Older heart speeds up and recovers slowly'],
    r: {
      0: 'Unsafe. Older hearts need a longer warm-up because output rises slowly; skipping it risks ischemia and dysrhythmias.',
      2: 'Incorrect. Maximum heart rate decreases with age; aiming for a young adult’s maximum overworks the heart.'
    },
    phys: 'Fewer responsive β receptors and a stiffer ventricle → cardiac output rises slowly with activity and returns to baseline slowly afterward.',
    rule: 'Older adults: longer warm-up and cool-down, rest between activities, lower max HR, avoid exercise right after meals.'
  },
  '27|x|3': {
    ask: 'Are an S4 and a soft murmur with no symptoms an emergency or expected aging?',
    cues: ['No symptoms', 'S4 = stiff ventricle', 'Soft murmur = stiff valves'],
    r: {
      0: 'Incorrect. With no symptoms and no acute change, this is not an emergency.',
      3: 'Incorrect. S4 and soft murmurs are not signs of dehydration.'
    },
    phys: 'With age the left ventricle stiffens → the atrium pushes blood into a stiff chamber late in diastole → S4. Valves thicken → turbulent flow → soft murmur. An S3 instead suggests volume overload (heart failure).',
    rule: 'Compare with baseline: S4 and soft murmurs can be aging; new changes, symptoms or an S3 need reporting.'
  }
});
window.EXPLAIN_CH = window.EXPLAIN_CH || {}; window.EXPLAIN_CH['27'] = 1;
