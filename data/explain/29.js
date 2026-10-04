// Full explanations for ch 29 questions. Format: see explain/22.js.
window.EXPLAIN = window.EXPLAIN || {};
Object.assign(window.EXPLAIN, {
  '29|n|0': {
    ask: 'Which self-care steps catch fluid buildup early and keep heart failure drugs safe?',
    cues: ['HF → fluid builds before swelling shows', 'Diuretic timing and stopping drugs abruptly are traps'],
    r: {
      0: 'Correct. Same time, same scale, same clothes (after voiding, before breakfast) makes the trend meaningful.',
      1: 'Correct. A liter of fluid weighs about 1 kg (2.2 lb). A fast gain is fluid, not fat, and it shows before swelling or breathlessness.',
      2: 'Correct. Sodium pulls water with it. Less sodium means less fluid for the weak heart to pump.',
      3: 'Incorrect. A diuretic at bedtime means getting up all night to urinate — lost sleep and a fall risk. Take it in the morning.',
      4: 'Correct. Worse breathlessness, needing more pillows, or a new cough means fluid is backing into the lungs.',
      5: 'Incorrect. Fatigue is common early on and often improves. Stopping a beta blocker suddenly can cause rebound tachycardia, angina or MI — report it instead.'
    },
    phys: 'Weak pump → kidneys sense low flow → RAAS holds sodium and water → blood volume rises → pressure backs up into the lungs and veins. The weight goes up days before edema or dyspnea appear.',
    rule: 'HF self-care: daily weights, report 2–3 lb/day or 5 lb/week, limit sodium, diuretic in the morning, report dyspnea or cough, never stop a beta blocker abruptly.'
  },
  '29|n|1': {
    ask: 'Which findings come from infected valves and the clumps (vegetations) that break off them?',
    cues: ['Infection → fever', 'Damaged valve → new murmur', 'Tiny emboli → skin and nail findings'],
    r: {
      0: 'Correct. The infection on the valve keeps seeding the blood → persistent fever.',
      1: 'Correct. Vegetations stop the valve from closing properly → blood leaks backward → a new murmur.',
      2: 'Correct. Tiny emboli lodge in nail-bed capillaries → thin reddish-brown lines under the nails.',
      3: 'Correct. Tiny emboli in skin and mucous-membrane capillaries → pinpoint red spots.',
      4: 'Incorrect. Endocarditis usually brings fever with tachycardia, not bradycardia with hypertension.',
      5: 'Correct. Small immune-complex lesions in the finger pads → painful red nodes.'
    },
    phys: 'Bacteria in the blood (IV drug use, dental work, valve damage) → stick to a valve → grow into vegetations → the valve leaks (murmur) → pieces break off → embolize to skin, nails, brain, kidneys, spleen.',
    rule: 'Endocarditis: fever + new murmur + embolic signs (petechiae, splinter hemorrhages, Osler nodes, Janeway lesions). Get blood cultures before antibiotics.'
  },
  '29|n|2': {
    ask: 'Is it safe to give the diuretic and digoxin with these labs and this pulse?',
    cues: ['K⁺ 2.9 — low', 'Apical HR 56 and irregular', 'Furosemide wastes K⁺; low K⁺ makes digoxin toxic', 'Good weight loss = the distractor'],
    r: {
      0: 'Unsafe. More furosemide drops K⁺ further, and digoxin with low K⁺ and a slow, irregular pulse risks toxicity and dangerous rhythms.',
      1: 'Correct. Both drugs make the problem worse right now. Hold them and call for potassium replacement and new orders.',
      2: 'Unsafe. Digoxin with K⁺ 2.9 and HR 56 is exactly the setup for digoxin toxicity.',
      3: 'Not the priority, and pushing fluids works against the heart failure treatment.'
    },
    phys: 'Furosemide blocks sodium reabsorption in the loop of Henle → sodium, water and potassium are lost in the urine → K⁺ drops. Digoxin and K⁺ compete for the same pump → with less K⁺, more digoxin binds → bradycardia, block and ventricular dysrhythmias.',
    rule: 'Before a loop diuretic check K⁺; before digoxin check apical HR and K⁺. Hold and notify when they are out of range.'
  },
  '29|n|3': {
    ask: 'Which orders conflict with this client’s history and could cause harm?',
    cues: ['Sildenafil 12 hours ago', 'Aspirin anaphylaxis', 'BP 104/68 — already lowish'],
    r: {
      0: 'Correct. Nitroglycerin within 24 hours of sildenafil (48 for tadalafil) can drop BP catastrophically. Question it.',
      1: 'Correct. A documented anaphylactic reaction to aspirin means it must not be given; the provider will choose another antiplatelet.',
      2: 'Incorrect. A 12-lead ECG is harmless and essential to find a STEMI. Always appropriate.',
      3: 'Incorrect. Morphine for pain unrelieved by other measures is acceptable if BP and RR are monitored.'
    },
    phys: 'Nitroglycerin releases nitric oxide → ↑ cGMP → veins and arteries relax. Sildenafil blocks the enzyme that breaks down cGMP. Together → cGMP builds up → massive vasodilation → severe hypotension.',
    rule: 'Question any order that conflicts with the history: nitrates + PDE-5 inhibitors, and any drug with a documented anaphylaxis.'
  },
  '29|n|4': {
    ask: 'Where does fluid pool in a client lying in bed?',
    cues: ['Bed rest, lying on the back', 'Right-sided HF → fluid backs into the body'],
    r: {
      0: 'The face and eyelids are the highest part of a supine client, so fluid does not pool there (periorbital edema points to kidney causes).',
      1: 'The hands are not the lowest point when lying in bed.',
      2: 'Correct. On the back, the sacrum is the lowest point, so gravity pools fluid there.',
      3: 'The ankles are the lowest point when standing or sitting. After days in bed, fluid shifts to the sacrum.'
    },
    phys: 'Right heart fails → pressure backs up into the body’s veins → capillary pressure rises → fluid is pushed into the tissues → gravity pulls it to the lowest part of the body.',
    rule: 'Dependent edema follows gravity: ankles when up, sacrum when in bed. Check the sacrum in bed-bound clients.'
  },
  '29|n|5': {
    ask: 'What is the safe order when the lungs are flooding with fluid?',
    cues: ['Acute pulmonary edema = emergency', 'Fastest, no-equipment steps first'],
    r: {
      0: 'First: sit the client upright with legs down — blood pools in the legs, less returns to the flooded lungs, and the diaphragm can move. It takes seconds and needs no order.',
      1: 'Second: oxygen treats the hypoxemia caused by fluid in the alveoli.',
      2: 'Third: call the rapid response team early — pulmonary edema can become respiratory failure quickly.',
      3: 'Fourth: IV furosemide removes the excess fluid (and dilates veins within minutes).',
      4: 'Fifth: a catheter or strict output measurement shows whether the diuretic is working.',
      5: 'Last: breath sounds and SpO₂ show whether the lungs are clearing.'
    },
    phys: 'Left ventricle cannot keep up → pressure backs into the lung capillaries → fluid floods the alveoli → oxygen cannot cross. Sitting up with legs down pools blood in the legs → less blood returns to the heart → less pressure in the lungs. Furosemide then removes the extra volume.',
    rule: 'Pulmonary edema: position (high Fowler, legs down) → oxygen → call for help → diuretic → measure output → reassess.'
  },
  '29|n|6': {
    ask: 'For each feature: temporary ischemia (angina) or dying heart muscle (MI)?',
    cues: ['Relief, predictability → angina', 'Troponin, long duration, ST elevation → MI'],
    rows: {
      0: 'Stable angina. Rest or nitro brings oxygen supply and demand back into balance, so the pain stops. MI pain is not relieved this way.',
      1: 'MI. Troponin only rises when heart muscle cells die and leak it.',
      2: 'MI. Angina lasts minutes; pain beyond about 30 minutes means ongoing injury.',
      3: 'Stable angina. A narrowed artery limits supply only when demand rises with exertion — so it is predictable.',
      4: 'MI. New ST elevation means full-thickness injury — a STEMI.'
    },
    phys: 'Angina: a narrowed artery → not enough oxygen during exertion → pain that stops with rest, no cells die. MI: the artery is blocked → oxygen stops → cells die → troponin leaks, ST changes, pain persists.',
    rule: 'Relieved by rest/nitro and predictable = stable angina. Unrelieved, >30 min, troponin ↑, ST elevation = MI.'
  },
  '29|n|7': {
    ask: 'Name the emergency, choose what clears the lungs, and pick what shows it is working.',
    cues: ['Heart failure + extreme dyspnea', 'Pink frothy sputum', 'Crackles to the apices (the whole lung)', 'SpO₂ 84%, BP 168/94'],
    cond: {
      0: 'Correct. Sudden extreme dyspnea, pink frothy sputum and crackles up to the apices in a client with HF is acute pulmonary edema.',
      1: 'Incorrect. Pneumonia develops over days with fever and localized crackles, not sudden pink frothy sputum.',
      2: 'Incorrect. Asthma causes wheezing, not frothy sputum and crackles to the apices.',
      3: 'Incorrect. A pulmonary embolism causes sudden dyspnea with clear lungs, usually not frothy sputum.'
    },
    act: {
      0: 'Correct. Sitting up reduces blood return to the heart and lets the diaphragm move; oxygen treats the hypoxemia.',
      1: 'Correct. The loop diuretic removes excess fluid (and furosemide also dilates veins within minutes).',
      2: 'Incorrect. A fluid bolus adds volume to lungs already flooded.',
      3: 'Incorrect. Lying flat sends more blood to the heart and lungs — worse congestion.',
      4: 'Incorrect. Walking raises oxygen demand in a client who cannot oxygenate.'
    },
    mon: {
      0: 'Correct. Rising SpO₂ and crackles receding from the apices show the lungs are clearing.',
      1: 'Correct. Urine output confirms the diuretic is removing fluid.',
      2: 'Incorrect. Glucose does not change with lung congestion.',
      3: 'Incorrect. Temperature is not relevant to fluid overload.',
      4: 'Incorrect. Pupils do not reflect fluid in the lungs.'
    },
    phys: 'The left ventricle fails to empty → pressure backs into the lung capillaries → fluid (and some red cells) leak into the alveoli → pink frothy sputum, crackles everywhere → oxygen cannot cross → SpO₂ falls.',
    rule: 'Pulmonary edema: high Fowler, oxygen, IV loop diuretic; evaluate with SpO₂, breath sounds and urine output.'
  },
  '29|n|8': {
    ask: 'Follow the ACE inhibitor from its mechanism to its lab change and side effect.',
    blanks: {
      1: 'Afterload and aldosterone. Less angiotensin II → arteries relax (lower afterload) and the adrenal makes less aldosterone (less sodium and water held). It does not mainly change heart rate or hemoglobin.',
      3: 'Rise. Aldosterone normally trades sodium for potassium in the kidney. Less aldosterone → potassium stays in → hyperkalemia risk.',
      5: 'Dry cough. ACE also breaks down bradykinin. Blocking ACE lets bradykinin build up and irritate the airway → dry, persistent cough.'
    },
    phys: 'Angiotensin I → (ACE) → angiotensin II → vessel constriction + aldosterone (Na⁺ and water retained, K⁺ excreted). An ACE inhibitor blocks that step → vessels relax, less fluid, K⁺ retained; bradykinin builds → cough and, rarely, angioedema.',
    rule: 'ACE inhibitor: lower BP and afterload, watch K⁺ (rises), report dry cough or any face/lip swelling.'
  },
  '29|c|0': {
    ask: 'What is the fastest helpful action for pulmonary edema?',
    cues: ['Pink frothy sputum + SpO₂ 84% = acute pulmonary edema'],
    r: {
      0: 'Correct. High Fowler with legs down reduces venous return to the flooded lungs and lets the diaphragm work; oxygen raises SpO₂. Both are immediate.',
      1: 'Incorrect. Fluids add volume to lungs that are already flooded.',
      2: 'Incorrect. Lying flat increases blood return to the heart and worsens the congestion.',
      3: 'Weight is useful later; it does nothing for the client now.'
    },
    phys: 'Upright + legs down → blood pools in the legs → less returns to the heart → lower pressure in the lung capillaries → less fluid leaks into alveoli.',
    rule: 'Pulmonary edema: position and oxygen first, then the diuretic.'
  },
  '29|c|1': {
    ask: 'Which finding makes giving furosemide unsafe?',
    cues: ['Loop diuretic → wastes potassium', 'Two options are reasons TO give it'],
    r: {
      0: 'Correct. K⁺ 3.0 is low. Furosemide would push it lower and risk dysrhythmias — hold and notify for replacement.',
      1: 'Normal (3.5–5.0). Safe to give.',
      2: 'A 1 kg gain is a reason to give the diuretic — it signals fluid retention, not a reason to hold.',
      3: 'Crackles mean fluid in the lungs — a reason to give the diuretic, not to hold it.'
    },
    phys: 'Furosemide blocks sodium reabsorption in the loop of Henle → more sodium reaches the distal tubule → it is swapped for potassium → K⁺ lost in the urine.',
    rule: 'Before a loop diuretic: check K⁺ (and BP). Low K⁺ → hold and notify.'
  },
  '29|c|2': {
    ask: 'Can a client on nitroglycerin take sildenafil?',
    cues: ['Two vasodilators acting on the same pathway'],
    r: {
      0: 'Unsafe. Together they can drop BP to dangerous levels.',
      1: 'Correct. The combination can cause severe, even fatal, hypotension. No nitrate within 24 hours of sildenafil (48 hours of tadalafil).',
      2: 'A smaller dose does not make the interaction safe.',
      3: 'Food does not change the interaction.'
    },
    phys: 'Nitrates → nitric oxide → ↑ cGMP → vessels relax. Sildenafil blocks PDE-5, which breaks down cGMP. Together → cGMP builds up → profound vasodilation → BP crashes.',
    rule: 'Nitrates + PDE-5 inhibitors (sildenafil, tadalafil, vardenafil) = contraindicated.'
  },
  '29|c|3': {
    ask: 'Which findings mean fluid around the heart is squeezing it?',
    cues: ['Tamponade = pressure from outside the heart', 'Beck’s triad + pulsus paradoxus'],
    r: {
      0: 'Correct. The heart cannot fill, so output and BP fall.',
      1: 'Correct. Blood cannot get into the squeezed right heart, so it backs up into the neck veins.',
      2: 'Correct. Fluid in the pericardial sac sits between the heart and the stethoscope, muffling the heart sounds.',
      3: 'Incorrect. Tamponade causes tachycardia with hypotension — the opposite.',
      4: 'Correct. SBP falls more than 10 mm Hg on inspiration, because the right heart fills at the left heart’s expense in a fixed space.'
    },
    phys: 'Fluid or blood in the pericardial sac → presses on the heart → the ventricles cannot fill → stroke volume falls → BP drops, HR rises, neck veins distend.',
    rule: 'Beck’s triad (hypotension, JVD, muffled heart sounds) + pulsus paradoxus = tamponade → pericardiocentesis.'
  },
  '29|c|4': {
    ask: 'Which client might be having an MI right now?',
    cues: ['Chest pain not relieved by 3 nitroglycerin'],
    r: {
      0: 'Angina that has resolved is stable.',
      1: 'Correct. Pain that persists after three doses of nitroglycerin is treated as an MI until proven otherwise — heart muscle may be dying.',
      2: 'A stable weight in HF is a good sign.',
      3: 'Pericarditis pain that eases leaning forward is typical and the client is comfortable.'
    },
    phys: 'Nitro relieves ischemia by lowering the heart’s work. If pain continues, the artery is likely blocked → cells are dying → every minute matters.',
    rule: 'Chest pain unrelieved by nitro = MI until proven otherwise.'
  },
  '29|c|5': {
    ask: 'What weight change should a client with HF report?',
    cues: ['Weight = fluid', 'The threshold should catch fluid early'],
    r: {
      0: 'Correct. 2–3 lb in a day or 5 lb in a week is fluid building up — report before it reaches the lungs.',
      1: '10 lb in a month is too slow a signal; the client could be in pulmonary edema by then.',
      2: 'Small daily changes are normal; reporting every gain is not useful.',
      3: 'Waiting for swelling is too late — weight rises first.'
    },
    phys: 'Fluid retention → weight rises → only after several liters do edema and dyspnea appear. 1 L of fluid ≈ 1 kg ≈ 2.2 lb.',
    rule: 'HF: report 2–3 lb in a day or 5 lb in a week.'
  },
  '29|c|6': {
    ask: 'What does K⁺ 5.8 mean for a client on an ACE inhibitor?',
    cues: ['Normal K⁺ 3.5–5.0', 'Lisinopril lowers aldosterone'],
    r: {
      0: 'Wrong direction — 5.8 is high, not low.',
      1: 'Correct. 5.8 is hyperkalemia. ACE inhibitors lower aldosterone, so the kidneys hold potassium. Notify — high K⁺ can cause dangerous rhythms.',
      2: 'Not normal — above 5.0.',
      3: 'Hypokalemia is a low potassium; this one is high.'
    },
    phys: 'ACE inhibitor → less angiotensin II → less aldosterone → the kidney keeps potassium instead of excreting it → K⁺ rises.',
    rule: 'ACE inhibitors and ARBs raise K⁺; watch with kidney disease, K⁺ supplements and potassium-sparing diuretics.'
  },
  '29|c|7': {
    ask: 'Which HF task is data collection, not assessment, teaching or evaluation?',
    cues: ['Stable client', 'AP'],
    r: {
      0: 'Correct. Weighing a stable client and reporting the number is data collection. The nurse decides what it means.',
      1: 'Assessing edema requires nursing judgment.',
      2: 'Teaching is a nursing responsibility.',
      3: 'Evaluating the diuretic response requires nursing judgment.'
    },
    phys: 'Daily weight is the main way to track fluid in HF. AP can measure it; the nurse interprets the trend.',
    rule: 'AP measure and report; the nurse assesses, teaches and evaluates.'
  }
});
window.EXPLAIN_CH = window.EXPLAIN_CH || {}; window.EXPLAIN_CH['29'] = 1;
