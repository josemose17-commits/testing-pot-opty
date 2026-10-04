// Full explanations for ch 28 questions. Format: see explain/22.js.
window.EXPLAIN = window.EXPLAIN || {};
Object.assign(window.EXPLAIN, {
  '28|n|0': {
    ask: 'Which findings are signs of digoxin toxicity or something that makes toxicity more likely?',
    cues: ['Digoxin toxicity shows in the gut, eyes, heart and brain', 'Low K⁺ is a risk factor, not a symptom'],
    r: {
      0: 'Correct. Loss of appetite and nausea are often the first signs — digoxin stimulates the vomiting center (chemoreceptor trigger zone).',
      1: 'Correct. Yellow-green halos or blurred vision come from digoxin acting on the retina — a classic toxicity sign.',
      2: 'Correct. Too much digoxin slows AV conduction (bradycardia, heart block) and makes heart cells irritable (PVCs, VT). Any new rhythm is suspicious.',
      3: 'Correct. Low potassium lets more digoxin bind its target pump, so toxicity happens even at a “normal” digoxin level.',
      4: 'Incorrect. A 0.5 kg change is within normal daily variation and is not a toxicity sign. (Rapid gain matters for heart failure, not digoxin toxicity.)',
      5: 'Correct. Confusion, fatigue and visual changes are CNS effects, common in older adults whose kidneys clear digoxin slowly.'
    },
    phys: 'Digoxin blocks the Na⁺/K⁺ pump → more calcium inside heart cells → stronger squeeze; it also boosts vagal tone → slower AV conduction. Digoxin and K⁺ compete for the same pump → low K⁺ lets more digoxin bind → toxicity. Narrow therapeutic range (about 0.5–2 ng/mL).',
    rule: 'Digoxin toxicity: GI (anorexia, nausea), vision (yellow-green halos), new dysrhythmia, confusion. Risk ↑ with low K⁺, low Mg²⁺, kidney impairment, older age.'
  },
  '28|n|1': {
    ask: 'Which teaching keeps a client on warfarin from bleeding or clotting?',
    cues: ['Warfarin works against vitamin K', 'Dose is guided by the INR'],
    r: {
      0: 'Correct. Warfarin works by blocking vitamin K. Eating a steady amount of vitamin K (not avoiding it) keeps the INR stable; a sudden change in leafy greens swings it.',
      1: 'Correct. Soft brushes and electric razors prevent the small cuts that bleed longer on warfarin.',
      2: 'Incorrect. NSAIDs like ibuprofen impair platelets and irritate the stomach, adding to bleeding risk. Acetaminophen is usually preferred.',
      3: 'Correct. Black, tarry stools mean upper GI bleeding; blood in urine means urinary bleeding. Both need reporting.',
      4: 'Correct. The INR shows whether the dose is right (target usually 2–3 for AF). Missed checks mean a dose could be dangerously high or low.',
      5: 'Incorrect. Doubling up can push the INR too high and cause bleeding. Take the missed dose the same day if remembered; otherwise skip it and call.'
    },
    phys: 'The liver uses vitamin K to make clotting factors II, VII, IX and X. Warfarin blocks that recycling → fewer working factors → blood clots more slowly (INR rises). More vitamin K in the diet → the effect weakens; less → it strengthens.',
    rule: 'Warfarin: consistent vitamin K, INR checks, bleeding precautions, no NSAIDs, report bleeding, never double a dose.'
  },
  '28|n|2': {
    ask: 'For a stable, regular, narrow-complex tachycardia that did not respond to vagal maneuvers, what is next?',
    cues: ['Rate 188, regular, narrow QRS, no visible P waves, abrupt onset = SVT', 'BP 118/74, alert = stable', 'Vagal maneuvers already tried'],
    r: {
      0: 'Correct. Adenosine briefly blocks the AV node, breaking the reentry circuit. It must be pushed fast with a flush because it lasts only seconds.',
      1: 'Incorrect. Defibrillation is for pulseless VT/VF. An unstable SVT would get synchronized cardioversion, but this client is stable.',
      2: 'Incorrect. Atropine speeds the heart — the opposite of what is needed.',
      3: 'Incorrect. Epinephrine is for cardiac arrest or severe bradycardia; it would speed this rhythm.'
    },
    phys: 'In SVT an electrical loop circles through the AV node, firing the ventricles about 150–250 times a minute → less filling time. Adenosine blocks the AV node for a few seconds → the loop breaks → the SA node takes over again.',
    rule: 'SVT: stable → vagal maneuvers, then adenosine rapid push + flush. Unstable → synchronized cardioversion.'
  },
  '28|n|3': {
    ask: 'With several QT risks stacked up, which actions prevent torsades?',
    cues: ['QTc 520 ms (was 440) — over 500 is high-risk', 'K⁺ 3.0 and Mg²⁺ 1.3 — both low', 'Azithromycin (QT-prolonging) due now', 'Furosemide wastes K⁺ and Mg²⁺'],
    r: {
      0: 'Correct. Azithromycin lengthens the QT. With a QTc over 500 ms, giving it could trigger torsades — hold it and call.',
      1: 'Correct. Low potassium and magnesium slow repolarization and lengthen the QT. Replacing them is part of the fix.',
      2: 'Incorrect. Giving another QT-prolonging drug on top of a long QT and low electrolytes raises the risk of torsades.',
      3: 'Correct. Torsades de pointes (twisting polymorphic VT) is the danger; watch the monitor closely.',
      4: 'Incorrect. More furosemide would waste more potassium and magnesium and lengthen the QT further.'
    },
    phys: 'The QT is the time the ventricles take to depolarize and recover. Low K⁺, low Mg²⁺ and certain drugs (azithromycin, some antiarrhythmics, ondansetron, haloperidol) slow recovery → long QT → a stray early beat can fire during recovery → torsades → VF.',
    rule: 'QTc >500 ms: hold QT-prolonging drugs, replace K⁺ and Mg²⁺, watch for torsades.'
  },
  '28|n|4': {
    ask: 'Which part of the ECG shows injury or ischemia of the heart muscle?',
    cues: ['MI is read at the ST segment'],
    r: {
      0: 'The P wave is the atria depolarizing. It tells you about the atrial rhythm, not ventricular injury.',
      1: 'The PR segment is the pause at the AV node. A long PR means AV block, not injury.',
      2: 'The QRS is the ventricles depolarizing. A wide QRS means slow conduction; pathologic Q waves show old infarction.',
      4: 'T-wave inversion can show ischemia, but injury — the main sign of an acute MI — is read at the ST segment.'
    },
    phys: 'After the QRS, healthy ventricular cells are all at the same voltage, so the ST segment is flat. Injured cells cannot hold that voltage → current flows between injured and healthy tissue → the ST segment shifts up (elevation = full-thickness injury) or down (depression = ischemia).',
    rule: 'ST elevation = injury (STEMI). ST depression or T inversion = ischemia. Q waves = old infarction.'
  },
  '28|n|5': {
    ask: 'In what order do you act for a pulseless client in VF?',
    cues: ['Unresponsive + VF = cardiac arrest', 'Early CPR, early shock'],
    r: {
      0: 'First: confirm the client is unresponsive and call the code — CPR and defibrillation need a team.',
      1: 'Second: check pulse and breathing for no more than 10 seconds to confirm arrest without delaying CPR.',
      3: 'Fourth: shock as soon as the defibrillator is ready — it is the only treatment that stops VF.',
      5: 'Sixth: epinephrine (and then amiodarone) is given per ACLS once CPR and shocks are under way.'
    },
    phys: 'VF is chaotic electrical activity → no squeeze → no cardiac output → the brain begins dying within minutes. CPR pushes some blood to the brain and heart; the shock stops the chaos so the SA node can restart an organized rhythm. Survival falls with every minute without a shock.',
    rule: 'VF arrest: call for help → pulse check ≤10 s → CPR → shock as soon as possible → CPR right after → epinephrine and amiodarone per ACLS.'
  },
  '28|n|6': {
    ask: 'Which rhythms get a shock, and which only get CPR and drugs?',
    cues: ['Shock only treats chaotic or too-fast organized electrical activity', 'No electrical activity (asystole) or organized activity without a pulse (PEA) → no shock'],
    rows: {
      0: 'Shockable. VF is chaotic electrical activity — defibrillation resets it.',
      1: 'Shockable. Pulseless VT is treated exactly like VF — defibrillate.',
      2: 'Not shockable. Asystole has no electrical activity to reset. Give CPR and epinephrine and look for causes.',
      3: 'Not shockable. PEA shows organized electrical activity but no pulse. Give CPR and epinephrine and treat the cause (the Hs and Ts).',
      4: 'Shockable — synchronized cardioversion. The shock is timed to the R wave so it does not land on the T wave and cause VF.'
    },
    phys: 'A shock depolarizes the whole heart at once → the chaotic or racing circuits stop → the SA node can take over. If there is no electrical activity (asystole) or the rhythm is already organized (PEA), there is nothing for the shock to reset.',
    rule: 'Shock VF and pulseless VT (defibrillate). Unstable rhythms with a pulse → synchronized cardioversion. Asystole/PEA → CPR + epinephrine.'
  },
  '28|n|7': {
    ask: 'Name the rhythm problem causing low output, choose what speeds the heart, and pick what shows it worked.',
    cues: ['HR 38', 'BP 76/40, dizzy, confused = symptomatic', 'Third-degree (complete) heart block'],
    cond: {
      0: 'Correct. HR 38 with BP 76/40, dizziness and confusion is a slow rate causing low cardiac output — from complete heart block on the monitor.',
      1: 'Incorrect. Hypoglycemia can cause confusion but does not produce complete heart block on the monitor.',
      2: 'Incorrect. The confusion is explained by low cardiac output from the slow rhythm.',
      3: 'Incorrect. Vasovagal episodes are brief; this is a persistent complete block.'
    },
    act: {
      0: 'Correct. Pacing delivers electrical impulses directly to the ventricles — the reliable treatment for complete block.',
      1: 'Correct. Atropine blocks the vagus to speed the heart. It often fails in complete block (the block is below the AV node), so pacing is prepared at the same time.',
      2: 'Incorrect. A beta blocker slows the heart further — dangerous at HR 38.',
      3: 'Incorrect. Oral fluids cannot fix a rate problem and the confused client may aspirate.',
      4: 'Incorrect. With BP 76/40, sitting high upright worsens blood flow to the brain; keep them flat or with legs raised.'
    },
    mon: {
      0: 'Correct. Every pacer spike should be followed by a QRS (capture) and a pulse — that confirms pacing works.',
      1: 'Correct. Rising BP and clearing confusion show cardiac output is improving.',
      2: 'Incorrect. Glucose does not show whether the heart rate problem is fixed.',
      3: 'Incorrect. Temperature is unrelated to heart block or pacing.',
      4: 'Incorrect. Specific gravity reflects hydration, not cardiac output.'
    },
    phys: 'In complete block no atrial impulses reach the ventricles → a slow backup pacemaker in the ventricles fires at 20–40/min → CO = HR × SV falls → low BP → the brain is underperfused → dizziness and confusion.',
    rule: 'Symptomatic bradycardia: atropine per protocol while preparing pacing; evaluate with capture, HR, BP and mental status.'
  },
  '28|n|8': {
    ask: 'How does adenosine’s very short half-life change how it is given and what you expect afterward?',
    blanks: {
      1: 'About 10 seconds. Red cells and blood vessels take it up almost immediately.',
      3: 'Rapid IV push with a flush. Given slowly, it would be gone before it reaches the heart. Use the port closest to the heart and flush right away.',
      5: 'A pause or brief asystole. Blocking the AV node stops ventricular beats for a few seconds — expected and brief. Warn the client they may feel chest pressure or doom.'
    },
    phys: 'Adenosine → binds receptors on the AV node → blocks conduction for a few seconds → the reentry loop breaks → it is cleared within seconds, so sinus rhythm returns.',
    rule: 'Adenosine: rapid push + rapid flush, closest port, continuous ECG, expect a brief pause.'
  },
  '28|c|0': {
    ask: 'What is the first action for an unresponsive client in VF?',
    cues: ['VF + unresponsive = no cardiac output'],
    r: {
      0: 'Amiodarone is given in VF, but only after CPR and shocks have started.',
      1: 'Correct. Start CPR right away and shock as soon as the defibrillator is ready — the two things that restore circulation.',
      2: 'A 12-lead ECG wastes minutes the client does not have.',
      3: 'Electrolytes may explain the cause, but checking them first delays CPR and shock.'
    },
    phys: 'VF = quivering, no squeeze, no output. Without CPR the brain is starved within minutes; without a shock VF rarely stops on its own.',
    rule: 'Pulseless = CPR + shock first; drugs and diagnostics come after.'
  },
  '28|c|1': {
    ask: 'How must a drug that lasts only seconds be given?',
    cues: ['Adenosine half-life about 10 seconds'],
    r: {
      0: 'Over 10 minutes the drug would be broken down long before enough reached the heart.',
      1: 'Correct. Push it fast and follow immediately with a rapid saline flush, using the port closest to the heart.',
      2: 'IM absorption is far too slow for a drug that lasts seconds.',
      3: 'Adenosine is not given orally.'
    },
    phys: 'Adenosine is taken up by cells within seconds → it must arrive at the AV node as a concentrated bolus to block it.',
    rule: 'Adenosine: rapid IV push + rapid flush.'
  },
  '28|c|2': {
    ask: 'Are there reasons to hold the digoxin dose?',
    cues: ['K⁺ 3.1 (low)', 'Apical HR 54 (below 60)'],
    r: {
      0: 'Unsafe. Low potassium raises toxicity risk and the heart rate is already below the usual hold point of 60.',
      1: 'Correct. A rate under 60 and low potassium are both reasons to hold. Notify the provider for potassium replacement and orders.',
      2: 'Orange juice adds a little potassium but cannot correct a 3.1 in time, and the slow rate is still a reason to hold.',
      3: 'Unsafe. A larger dose would make toxicity more likely.'
    },
    phys: 'Digoxin slows AV conduction (lower HR) and competes with K⁺ for the Na⁺/K⁺ pump. Low K⁺ → more digoxin binds → toxicity and dangerous rhythms even at normal drug levels.',
    rule: 'Digoxin: check apical pulse for a full minute; hold if HR <60 (adult) or K⁺ is low; notify the provider.'
  },
  '28|c|3': {
    ask: 'What does a client with new AF need: rate, rhythm and clot protection?',
    cues: ['AF has a pulse — no defibrillation', 'Quivering atria → clots → stroke'],
    r: {
      0: 'Correct. In AF some beats are too weak to reach the wrist; counting apical and radial pulses together shows the deficit — how much output is lost.',
      1: 'Correct. Clots from the quivering atria can travel to the brain. Teach BE-FAST signs of stroke.',
      2: 'Correct. Anticoagulation is chosen using a stroke-risk score (CHA₂DS₂-VASc).',
      3: 'Incorrect. Defibrillation is only for pulseless VT/VF. Unstable AF with a pulse gets synchronized cardioversion.',
      4: 'Correct. A fast ventricular rate and the loss of the atrial kick (about 20–30% of filling) can lower cardiac output and BP.'
    },
    phys: 'Atria quiver instead of squeezing → blood pools in the atrial appendage → clots form → they can travel to the brain (stroke). Irregular, often fast ventricular rate + no atrial kick → less filling → lower output.',
    rule: 'AF = rate, rhythm, clot: control the rate, watch BP and pulse deficit, anticoagulate per risk, teach stroke signs.'
  },
  '28|c|4': {
    ask: 'Which rhythm problem is causing symptoms of low output right now?',
    cues: ['Third-degree block + BP 78/40 + dizziness'],
    r: {
      0: 'Sinus tachycardia from fever is a normal response — treat the fever.',
      1: 'Correct. Complete heart block with hypotension and dizziness means the slow escape rhythm is not keeping up — symptomatic and unstable.',
      2: 'AF with a controlled rate of 82 is stable.',
      3: 'Occasional PVCs without symptoms need monitoring, not urgent action.'
    },
    phys: 'No impulses pass the AV node → the ventricles rely on a slow escape pacemaker → output drops → BP falls and the brain is underperfused.',
    rule: 'A symptomatic, unstable rhythm comes before controlled or asymptomatic ones.'
  },
  '28|c|5': {
    ask: 'Which statement shows the client misunderstood pacemaker teaching?',
    cues: ['“Needs follow-up” = find the WRONG statement'],
    r: {
      0: 'Correct statement. The ID card tells staff and airport security about the device.',
      1: 'This is the one that needs follow-up. Raising the arm on the pacemaker side above the shoulder too soon can pull the new leads out of place. Limit that arm as instructed (often for several weeks).',
      2: 'Correct statement. Hiccups can mean the lead is stimulating the diaphragm — report it.',
      3: 'Correct statement. Checking the incision catches infection early.'
    },
    phys: 'New pacemaker leads are held in the heart only by their tips until scar tissue anchors them over weeks. Big arm movements on that side can pull them loose → loss of pacing.',
    rule: 'After pacemaker: limit arm raising on that side, carry the ID card, report hiccups, dizziness or incision changes.'
  },
  '28|c|6': {
    ask: 'Which drug treats torsades de pointes?',
    cues: ['Torsades = polymorphic VT with a long QT'],
    r: {
      0: 'Correct. IV magnesium stabilizes heart-cell membranes and stops the early beats that trigger torsades — even when the magnesium level is normal.',
      1: 'Adenosine treats SVT; it does nothing for ventricular rhythms like torsades.',
      2: 'Digoxin can cause ventricular dysrhythmias; it does not treat torsades.',
      3: 'Atropine is for symptomatic bradycardia.'
    },
    phys: 'Long QT → heart cells take too long to recover → extra beats fire during recovery → torsades. Magnesium calms the cell membrane → those triggered beats stop.',
    rule: 'Torsades → IV magnesium (and shock if pulseless); correct K⁺ and stop QT-prolonging drugs.'
  },
  '28|c|7': {
    ask: 'Which telemetry task is equipment care, not interpretation or decisions?',
    cues: ['AP cannot interpret rhythms or give medications'],
    r: {
      0: 'Correct. Reattaching a loose electrode (per policy) and telling the nurse is equipment care, not judgment.',
      1: 'Interpreting an alarm means reading the rhythm — a nursing responsibility.',
      2: 'Deciding to silence an alarm is a judgment about safety — the nurse’s job.',
      3: 'AP do not give medications.'
    },
    phys: 'Electrodes must touch clean, dry skin to pick up the heart’s signal. Fixing that is a task; deciding what the rhythm means is assessment.',
    rule: 'AP can fix and report; the nurse interprets and decides.'
  },
  '28|c|8': {
    ask: 'Which rhythm has a pulse but is unstable — needing a shock timed to the R wave?',
    cues: ['“Synchronized” = there is a pulse and an organized QRS to time to'],
    r: {
      0: 'Pulseless VT is treated like VF — unsynchronized defibrillation.',
      1: 'Correct. Unstable SVT with a pulse gets synchronized cardioversion, timed to the R wave.',
      2: 'Asystole has no electrical activity; shocks do not help. CPR and epinephrine.',
      3: 'VF has no organized QRS to sync to — unsynchronized defibrillation.'
    },
    phys: 'A shock that lands on the T wave (when the heart is recovering) can trigger VF. Synchronizing times the shock to the QRS to avoid that “R-on-T” risk.',
    rule: 'Pulse + unstable = synchronized cardioversion. Pulseless VT/VF = defibrillation.'
  }
});
window.EXPLAIN_CH = window.EXPLAIN_CH || {}; window.EXPLAIN_CH['28'] = 1;
