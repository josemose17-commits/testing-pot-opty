// Fuller backs for the Mastery Loop repair cards built from data/recall-*.js.
// mc[i] = myth card i: why = why the fact is true (the mechanism), harm = what goes wrong if you believe the myth.
// rq[i] = recall card i: fields here replace or fill that card's why / move / trap.
window.EXPLAIN_CARDS = window.EXPLAIN_CARDS || {};
Object.assign(window.EXPLAIN_CARDS, {
  '22': { mc: {
    0: { why: 'SpO₂ measures how full hemoglobin is with oxygen. Ventilation is how much CO₂ is blown off. Supplemental oxygen keeps SpO₂ high even while breathing slows and CO₂ climbs.', harm: 'A client sedated by opioids looks “fine” at 95% while CO₂ rises toward respiratory arrest.' },
    1: { why: 'Wheeze is the sound of air squeezing through narrowed airways. When the airways are almost shut, too little air moves to make any sound.', harm: 'Charting “improved” while the client is about to stop breathing.' },
    2: { why: 'Cyanosis needs about 5 g/dL of desaturated hemoglobin, which happens only after oxygen has been low for a while. The brain and the sympathetic system react long before that.', harm: 'Waiting for blue skin means acting after the client has already decompensated.' },
    3: { why: 'The throat was sprayed with a topical anesthetic, so the gag and cough reflexes are blocked for about 1–2 hours even if the client is awake.', harm: 'Food or fluid slips silently into the lungs → aspiration pneumonia.' },
    4: { why: 'Sitting up and leaning forward spreads the ribs and lets fluid settle at the base, away from the lung, so the needle reaches fluid, not lung.', harm: 'The needle can puncture the lung → pneumothorax.' },
    5: { why: 'An arterial puncture is under high pressure; anticoagulants slow the seal. Gas values change at room temperature, and FiO₂ is needed to interpret the PaO₂.', harm: 'A hematoma at the radial artery, and results that cannot be interpreted.' },
    6: { why: 'Air or fluid under pressure pushes the mediastinum away. Collapsed or removed lung leaves empty space that pulls it toward that side.', harm: 'Misreading the direction leads to the wrong cause and the wrong treatment.' },
    7: { why: 'Percussion sounds louder over air (hyperresonance) and duller over fluid or solid tissue (dullness).', harm: 'Confusing trapped air (emphysema, pneumothorax) with fluid or consolidation (pneumonia, effusion).' },
    8: { why: 'Aging blunts fever and cough reflexes and lowers reserve, so infection and hypoxia often show only as new confusion or a fall.', harm: 'Pneumonia and sepsis are recognized late.' },
    9: { why: 'Most inhaler “failures” are technique errors — poor timing, no breath-hold, no shake — not drug failures.', harm: 'Doses are increased for a drug that never reached the lungs.' },
    10: { why: 'Fine crackles are alveoli popping open against fluid; coughing does not move that fluid. Rhonchi come from mucus in larger airways and often clear with a cough.', harm: 'Treating pulmonary edema as “secretions” with fluids makes the overload worse.' },
    11: { why: 'Stridor means the upper airway is already narrowed; swelling can close the single airway in minutes.', harm: 'Complete airway obstruction while waiting for rounds.' }
  } },
  '23': { mc: {
    0: { why: 'Tilting back sends blood down the throat instead of out. Leaning forward lets it drain out and pinching the soft nose presses on the bleeding septal vessels.', harm: 'Swallowed blood causes nausea and vomiting; inhaled blood can be aspirated.' },
    1: { why: 'Cerebrospinal fluid contains glucose and separates from blood into a clear “halo” on gauze. Mucus has no glucose.', harm: 'A basilar skull fracture is missed — a nasal tube could enter the brain, and meningitis can follow.' },
    2: { why: 'Suction removes oxygen as well as secretions. Applying it while inserting drags on the mucosa and strips oxygen longer.', harm: 'Hypoxemia, bradycardia and mucosal bleeding.' },
    3: { why: 'In OSA the throat physically collapses during sleep. Oxygen does not reopen it; CPAP uses air pressure to splint it open.', harm: 'Apneas continue, CO₂ rises and the heart is strained night after night.' },
    4: { why: 'After total laryngectomy the trachea is sewn to the neck; the mouth and nose no longer connect to the lungs.', harm: 'Oxygen given by face mask never reaches the lungs.' },
    5: { why: 'Stridor is the sound of a narrowed upper airway — one tube with no backup.', harm: 'The airway closes before help arrives.' },
    6: { why: 'Posterior packing sits at the back of the nose and throat and can stimulate the vagus nerve or slip downward.', harm: 'Airway obstruction, hypoxia, aspiration or infection (including toxic shock).' },
    7: { why: 'A free flap lives on one artery and one vein sewn together under a microscope. Pale and cool = artery blocked; dusky and swollen = vein blocked.', harm: 'The flap dies within hours if the clot is not removed.' },
    8: { why: 'Aspirin and NSAIDs stop platelets from sticking, so the new clot in the nose is weak.', harm: 'The nosebleed restarts.' },
    9: { why: 'Opioids slow breathing and relax throat muscles — dangerous when the airway is already swollen or collapsible (OSA).', harm: 'Respiratory arrest on the surgical unit.' },
    10: { why: 'A new tracheostomy tract takes about a week to form. Before that, the tissue closes and a blindly pushed tube can tunnel into the neck.', harm: 'A false passage — no air reaches the lungs.' },
    11: { why: 'Swelling after airway surgery builds over the first hours and peaks in the first day or two.', harm: 'Airway compromise develops between checks and is missed.' }
  } },
  '24': { mc: {
    0: { why: 'A quiet chest in a distressed asthmatic means so little air is moving that no wheeze can form.', harm: 'Respiratory arrest is missed.' },
    1: { why: 'Inhaled corticosteroids reduce inflammation over days. Only a short-acting β₂ agonist (albuterol) opens airways within minutes.', harm: 'The wrong inhaler is used during bronchospasm and the attack worsens.' },
    2: { why: 'COPD clients still need oxygen; the risk is only from too much in some CO₂ retainers. Titrating to the ordered target (often 88–92%) balances both.', harm: 'Withholding oxygen from a hypoxic client causes organ damage.' },
    3: { why: 'Clamping traps air that is still leaking from the lung. Putting the tube end in sterile water restores a one-way seal immediately.', harm: 'Trapped air builds pressure → tension pneumothorax.' },
    4: { why: 'The water seal is a one-way valve. Air should bubble through only on exhalation or cough; constant bubbling means air keeps entering.', harm: 'An air leak goes unrecognized and the lung does not re-expand.' },
    5: { why: 'Epoprostenol’s half-life is only a few minutes; pulmonary vessels clamp down as soon as it stops.', harm: 'Rebound pulmonary hypertension and right heart failure — can be fatal.' },
    6: { why: 'Thick mucus blocks the pancreatic ducts, so enzymes never reach the gut. Every meal and snack needs them to absorb fat and protein.', harm: 'Malnutrition, fatty stools and poor growth.' },
    7: { why: 'People with CF carry resistant bacteria (Pseudomonas, Burkholderia) that spread easily to each other.', harm: 'Cross-infection with organisms that are hard to treat.' },
    8: { why: 'It is the inhaled steroid that leaves drug in the mouth and suppresses local immunity. Albuterol does not cause thrush.', harm: 'Oral thrush and hoarseness.' },
    9: { why: 'Theophylline has a narrow range (about 10–20 mcg/mL); a little too much stimulates the heart and brain.', harm: 'Nausea, tachycardia, dysrhythmias and seizures.' },
    10: { why: 'A tumor pressing on the superior vena cava blocks blood return from the head and arms; swelling can extend to the airway.', harm: 'Airway compromise and raised intracranial pressure.' },
    11: { why: 'Cor pulmonale is right ventricular failure caused by lung disease — blood backs up into the body, not the lungs.', harm: 'Looking for crackles while missing JVD, edema and an enlarged liver.' }
  } },
  '25': { mc: {
    0: { why: 'Cultures must be drawn before antibiotics so the organism can grow in the lab — but antibiotics must not wait long for them.', harm: 'Antibiotics first sterilize the sample and the organism is never identified.' },
    1: { why: 'Older adults often cannot mount a fever; hypoxia and infection show first as confusion.', harm: 'Pneumonia goes untreated until it is severe.' },
    2: { why: 'A negative-pressure room only works with the door shut — air flows into the room and is vented out.', harm: 'TB particles drift into the hallway and infect others.' },
    3: { why: 'Surgical masks do not seal and do not filter the tiny droplet nuclei. A fit-tested N95 does.', harm: 'Staff breathe in TB bacteria.' },
    4: { why: 'Rifampin is a red-orange compound excreted in body fluids — the color is the drug, not blood.', harm: 'Unnecessary alarm or stopping a needed drug.' },
    5: { why: 'Isoniazid depletes vitamin B6, which nerves need. Pyridoxine replaces it.', harm: 'Preventable, sometimes permanent, nerve damage.' },
    6: { why: 'Ethambutol inflames the optic nerve; red-green confusion is the first sign. The liver toxicity drugs are INH, rifampin and pyrazinamide.', harm: 'Vision loss that is not caught early.' },
    7: { why: 'Symptoms fade in weeks, but slow-growing TB bacteria survive for months. Stopping early lets the survivors regrow resistant.', harm: 'Relapse with drug-resistant TB.' },
    8: { why: 'Oseltamivir stops new virus particles leaving cells — useful only while the virus is still multiplying, in the first 48 hours.', harm: 'Starting late gives side effects with little benefit.' },
    9: { why: 'Inhalation anthrax comes from breathing spores; it is not passed from person to person.', harm: 'Unnecessary isolation and fear, while the real exposure source is missed.' },
    10: { why: 'Amphotericin B damages kidney tubules and wastes potassium and magnesium; infusions often cause fever and chills.', harm: 'Kidney injury and dangerous electrolyte losses.' },
    11: { why: 'A pus pocket beside the tonsil pushes the palate across the throat — drooling, muffled voice and trismus mean the airway is narrowing.', harm: 'Airway obstruction.' }
  } },
  '27': { mc: {
    0: { why: 'Troponin leaks from dying heart cells over 3–6 hours; an early value can be normal during an MI.', harm: 'A heart attack is sent home.' },
    1: { why: 'BNP is released by stretched ventricular walls — a marker of heart failure, not lung disease.', harm: 'Heart failure is mistaken for a lung problem.' },
    2: { why: 'Bending the hip pushes on the femoral puncture while the artery is still sealing.', harm: 'Bleeding, hematoma or a retroperitoneal bleed.' },
    3: { why: 'Warmth or wetness at the groin can be blood soaking out from the arterial puncture.', harm: 'Hemorrhage goes unnoticed under the sheet.' },
    4: { why: 'Contrast can injure the kidneys; metformin is cleared by the kidneys and builds up if they fail.', harm: 'Lactic acidosis.' },
    5: { why: 'Blood backs up behind the failing ventricle. Right failure → systemic veins (JVD, edema). Left failure → lungs (crackles).', harm: 'Assessing the wrong system and missing the real problem.' },
    6: { why: 'The kidneys receive about 20% of cardiac output; when output falls, urine falls early.', harm: 'Early shock is missed.' },
    7: { why: 'Orthostatic hypotension is a drop of 20 or more systolic or 10 or more diastolic within 3 minutes of standing.', harm: 'A real fall risk is missed.' },
    8: { why: 'A 12-lead within 10 minutes finds a STEMI, which needs the cath lab as fast as possible.', harm: 'Delayed reperfusion means more heart muscle dies.' },
    9: { why: 'A stress test deliberately raises the heart’s oxygen demand, which can trigger ischemia or dysrhythmias.', harm: 'Missed warning signs can progress to MI or arrest.' }
  } },
  '28': { mc: {
    0: { why: 'Loose leads, movement and shivering can mimic dangerous rhythms. Only the client tells you whether there is a pulse.', harm: 'Shocking or drugging a client who was fine, or missing one who is not.' },
    1: { why: 'Adenosine is broken down in about 10 seconds, so it must arrive at the heart as a fast, concentrated bolus.', harm: 'The drug is gone before it can block the AV node.' },
    2: { why: 'A shock resets disorganized electrical activity; asystole has none to reset.', harm: 'Time wasted on shocks instead of CPR and epinephrine.' },
    3: { why: 'Cardioversion is timed to the R wave so the shock does not land on the T wave, when the heart is recovering.', harm: 'An unsynchronized shock on the T wave can cause VF.' },
    4: { why: 'Quivering atria let blood pool and clot; clots can travel to the brain.', harm: 'Stroke.' },
    5: { why: 'Digoxin and potassium compete for the same pump; with low K⁺, more digoxin binds.', harm: 'Digoxin toxicity and dysrhythmias even at a normal digoxin level.' },
    6: { why: 'Atropine blocks the vagus at the SA and AV nodes. In complete block the problem is below the AV node, so atropine often fails.', harm: 'Relying on atropine while the client stays hypotensive instead of pacing.' },
    7: { why: 'Magnesium stabilizes the heart-cell membrane and stops the triggered beats of torsades. SVT is treated with vagal maneuvers and adenosine.', harm: 'The wrong drug for the rhythm.' },
    8: { why: 'Amiodarone stays in the body for weeks to months and builds up in the lungs, thyroid, liver and eyes.', harm: 'Lung fibrosis, thyroid or liver damage noticed too late.' },
    9: { why: 'New leads are held only by their tips until scar tissue forms over weeks.', harm: 'Lead dislodgement and loss of pacing.' },
    10: { why: 'A wide QRS means the impulse spread slowly through muscle — usually starting in the ventricle (or blocked conduction).', harm: 'Treating VT as SVT, which can be fatal.' }
  } },
  '29': { mc: {
    0: { why: 'Pulmonary edema is too much fluid in the lungs from a failing left ventricle; more fluid adds to the flood.', harm: 'Worsening hypoxemia and respiratory failure.' },
    1: { why: 'If pain persists after nitroglycerin, the artery may be blocked rather than narrowed; repeated doses also drop BP.', harm: 'Delayed MI care and hypotension.' },
    2: { why: 'Both drugs raise cGMP and relax blood vessels; together the effect multiplies.', harm: 'Profound, sometimes fatal, hypotension.' },
    3: { why: 'Loop diuretics send more sodium to the distal tubule, where it is swapped for potassium that is lost in urine.', harm: 'Hypokalemia → dysrhythmias and digoxin toxicity.' },
    4: { why: 'ACE inhibitors lower aldosterone, and aldosterone is what normally makes the kidney excrete potassium.', harm: 'Hyperkalemia → dangerous rhythms.' },
    5: { why: 'Blocking ACE lets bradykinin build up and irritate the airway. Switching to an ARB avoids it.', harm: 'The client stops the drug on their own.' },
    6: { why: 'Weight changes through the day with meals, voiding and clothes. Only consistent conditions show real fluid trends.', harm: 'False alarms or missed fluid gain.' },
    7: { why: 'Fluid in the pericardial sac stops the heart from filling; output can collapse quickly.', harm: 'Cardiac arrest from obstructive shock.' },
    8: { why: 'Angina is temporary ischemia relieved by rest or nitro. MI is dead muscle: unrelieved pain and rising troponin.', harm: 'An MI is treated as angina and missed.' },
    9: { why: 'Beta blockers weaken contraction; in acute decompensation the heart needs that contractility. They are started when stable and increased slowly.', harm: 'Worsening heart failure.' },
    10: { why: 'Blood clots easily on mechanical valve surfaces.', harm: 'Valve thrombosis or stroke.' }
  } },
  '30': { mc: {
    0: { why: 'Arterial disease limits blood getting in; gravity helps it reach the feet when legs hang down. Elevating does the opposite. Venous disease is the reverse.', harm: 'Elevating ischemic legs worsens pain and tissue death.' },
    1: { why: 'Warfarin stops new clotting factors from being made, but existing factors last several days.', harm: 'Clots form during the gap unless heparin bridges it.' },
    2: { why: 'Protamine binds heparin directly. Vitamin K restores the factors warfarin blocks — it does nothing to heparin.', harm: 'Bleeding continues with the wrong antidote.' },
    3: { why: 'Enoxaparin is a heparin and can react with the same HIT antibodies.', harm: 'More platelet activation and new clots.' },
    4: { why: 'Massaging a calf with a DVT can break the clot loose.', harm: 'Pulmonary embolism.' },
    5: { why: 'The brain has adapted to high pressure; a sudden drop starves it of blood.', harm: 'Stroke, MI or kidney injury.' },
    6: { why: 'DOACs act predictably at fixed doses, so routine INR monitoring is not used.', harm: 'Unneeded tests and confusion about the drug’s effect.' },
    7: { why: 'Statins can injure muscle (myopathy); rarely muscle breaks down and clogs the kidneys.', harm: 'Rhabdomyolysis and kidney failure.' },
    8: { why: 'An aortic aneurysm has a thin, stretched wall under high pressure.', harm: 'Vigorous palpation can cause rupture.' },
    9: { why: 'A pulse that disappears after bypass usually means the graft has clotted.', harm: 'The limb dies within hours.' },
    10: { why: 'Nicotine constricts arteries and smoking speeds plaque buildup; quitting is the strongest single treatment.', harm: 'Disease progresses toward rest pain, ulcers and amputation.' }
  } },
  '33': { mc: {
    0: { why: 'SpO₂ is the percentage of hemoglobin carrying oxygen. With little hemoglobin, 98% of very little is still too little oxygen for the tissues.', harm: 'Tissue hypoxia is missed.' },
    1: { why: 'Without neutrophils, infection spreads unchecked and fever may be the only sign.', harm: 'Septic shock within hours.' },
    2: { why: 'Heparin acts on the intrinsic/common pathway (aPTT). Warfarin lowers vitamin K factors (INR).', harm: 'Dosing errors — bleeding or clotting.' },
    3: { why: 'Low platelets cannot plug even small gum injuries.', harm: 'Gum bleeding that is hard to stop.' },
    4: { why: 'An IM needle tears small vessels deep in muscle where a bleed spreads unseen.', harm: 'Deep, painful hematomas.' },
    5: { why: 'Reticulocytes are young red cells; their count shows whether the marrow is responding to anemia.', harm: 'Missing whether anemia comes from loss or from a marrow problem.' },
    6: { why: 'Ginkgo, garlic, ginger and fish oil impair platelets or clotting.', harm: 'Bleeding, especially with low platelets or anticoagulants.' },
    7: { why: 'The posterior iliac crest is the safest, most marrow-rich site in adults; the sternum is used only for aspiration.', harm: 'Wrong positioning and preparation.' },
    8: { why: 'Aging blunts the fever response; infection may show only as confusion or a fall.', harm: 'Delayed recognition of infection.' },
    9: { why: 'A rectal thermometer can scrape the lining and let gut bacteria into the blood or cause bleeding.', harm: 'Infection or bleeding in a client who cannot afford either.' }
  } },
  '34': { mc: {
    0: { why: 'In a hemolytic reaction every milliliter of incompatible blood destroys more cells.', harm: 'Shock, kidney failure, DIC and death.' },
    1: { why: 'Cold narrows vessels and slows flow, so sickled cells jam more easily.', harm: 'A worse, longer crisis.' },
    2: { why: 'Vaso-occlusive pain is ischemic and severe; scheduled opioids keep it controlled.', harm: 'Uncontrolled pain, stress and splinting that worsen hypoxia.' },
    3: { why: 'Calcium in dairy and antacids binds iron in the gut and blocks absorption.', harm: 'Iron deficiency that never improves.' },
    4: { why: 'Pernicious anemia means no intrinsic factor, so the gut cannot absorb normal oral B₁₂.', harm: 'Anemia and nerve damage return.' },
    5: { why: 'Pushing Hgb above target thickens the blood.', harm: 'Clots, stroke and MI.' },
    6: { why: 'Dextrose solutions make red cells swell and burst (and clump).', harm: 'Hemolysis of the transfused cells.' },
    7: { why: 'Most fatal transfusion reactions come from identification errors; a second licensed person catches them.', harm: 'The wrong blood given to the wrong client.' },
    8: { why: 'Leukemia crowds out normal marrow, so neutrophils and platelets are low.', harm: 'Death from infection or bleeding.' },
    9: { why: 'Hydroxyurea suppresses the marrow and can harm a fetus.', harm: 'Infection, bleeding or birth defects.' }
  } }
});
// Recall cards that had no trap: the wrong idea students most often bring to that question.
(function (T) {
  Object.keys(T).forEach(ch => { const C = window.EXPLAIN_CARDS[ch] = window.EXPLAIN_CARDS[ch] || {}; C.rq = Object.assign(C.rq || {}, T[ch]); });
})({
  '22': {
    2: { trap: 'Turning up oxygen and stopping there — fluid in the alveoli also needs the cause treated (antibiotics, diuretic) and position changes.' },
    9: { trap: 'Assuming every cough or wheeze is the lung disease, when a drug started recently may be causing it.' },
    11: { trap: 'Multiplying total packs by total years when the amount changed over time — add each period separately.' }
  },
  '23': {
    1: { trap: 'Focusing only on the bleeding and forgetting that the pack itself can block the airway.' },
    3: { trap: 'Waiting for the SpO₂ to drop — stridor and drooling come first, and the airway can close before saturation falls.' },
    5: { trap: 'Withholding pain medicine completely — the answer is monitoring and CPAP, not untreated pain.' },
    9: { trap: 'Calling a color change “bruising” and waiting until the next check — a failing flap has hours, not days.' },
    10: { trap: 'Expecting reduction right away while the nose is still swollen — alignment cannot be judged until swelling settles.' },
    11: { trap: 'Blowing the nose “to clear the clots,” which dislodges them and restarts the bleeding.' }
  },
  '24': {
    4: { trap: 'Thinking a low FEV₁ or air trapping separates them — both diseases have those; only reversibility points to asthma.' },
    9: { trap: 'Pausing the infusion to run another drug through the same line, or waiting for pharmacy when a pump fails.' },
    10: { trap: 'Treating facial swelling as an allergic reaction instead of a tumor blocking venous return.' },
    11: { trap: 'Accepting a SpO₂ of 90% as fine without comparing it to this client’s own baseline and trend.' },
    12: { trap: 'Using omalizumab as a rescue drug — it is a long-term add-on and does nothing in an acute attack.' },
    6: { trap: 'Putting a client with CF on a low-salt diet — they lose salt in sweat and usually need more.' }
  },
  '25': {
    0: { trap: 'Giving antibiotics before cultures, or delaying antibiotics for hours while waiting to collect them.' },
    6: { trap: 'Believing oseltamivir replaces the flu vaccine or helps when started late.' },
    7: { trap: 'Using a surgical mask for TB — staff need a fit-tested N95 for airborne organisms.' },
    8: { trap: 'Treating it as a simple sore throat and sending the client home with lozenges.' },
    9: { trap: 'Isolating anthrax clients as if it spread person to person.' },
    10: { trap: 'Forgetting that amphotericin B needs kidney and electrolyte monitoring.' },
    3: { trap: 'Mixing up the side effects: the vision drug is ethambutol, the orange-fluids drug is rifampin, the gout drug is pyrazinamide.' }
  },
  '27': {
    0: { trap: 'Forgetting that rate is part of output — a very fast heart fills poorly, so output can fall even as HR rises.' },
    1: { trap: 'Ruling out MI with one normal troponin drawn in the first hours.' },
    2: { trap: 'Reading a high BNP as a lung problem.' },
    3: { trap: 'Lifting the dressing to look instead of pressing first.' },
    5: { trap: 'Mixing up the sides: crackles are LEFT failure; JVD and edema are RIGHT failure.' },
    6: { trap: 'Waiting for the BP to fall — skin and urine output change first.' },
    7: { trap: 'Treating jaw or arm pain as a separate problem and not doing an ECG right away.' },
    9: { trap: 'Continuing the test through chest pain to “finish the protocol.”' },
    10: { trap: 'Using a 10-point systolic drop as the cutoff — orthostatic hypotension is ≥20 systolic or ≥10 diastolic.' },
    11: { trap: 'Thinking these markers diagnose an MI — they show risk, not an acute event.' }
  },
  '28': {
    0: { trap: 'Reading the monitor before looking at the client.' },
    1: { trap: 'Deciding on treatment from the rhythm alone without checking for a pulse.' },
    2: { trap: 'Pushing adenosine slowly or through a distal port.' },
    3: { trap: 'Expecting atropine to fix every slow rhythm — it often fails in complete heart block, so prepare pacing.' },
    4: { trap: 'Thinking AF is harmless because the client feels fine — the stroke risk is the danger.' },
    5: { trap: 'Starting with drugs or a 12-lead before CPR and defibrillation.' },
    6: { trap: 'Forgetting to turn on sync for cardioversion — an unsynchronized shock can cause VF.' },
    7: { trap: 'Giving digoxin when K⁺ is low because the digoxin level is “normal.”' },
    8: { trap: 'Blaming dizziness and confusion on age or anxiety instead of low output.' },
    9: { trap: 'Raising the arm on the device side above the shoulder in the first weeks.' },
    10: { trap: 'Reaching for antiarrhythmics or adenosine first — magnesium is the drug for torsades.' },
    11: { trap: 'Thinking amiodarone’s effects stop when the drug stops — it stays in the body for weeks to months.' }
  },
  '29': {
    0: { trap: 'Giving IV fluids for “low output” in a client whose lungs are already congested.' },
    2: { trap: 'Giving furosemide without checking K⁺, or giving it at bedtime.' },
    4: { trap: 'Lying the client flat to rest or starting with a weight instead of position and oxygen.' },
    5: { trap: 'Calling chest pain angina because it improved a little — unrelieved pain is treated as MI.' },
    7: { trap: 'Waiting for troponin results before activating the STEMI pathway — ST elevation is enough.' },
    8: { trap: 'Expecting pericarditis pain to improve lying down — it improves sitting forward.' },
    9: { trap: 'Missing the triad because each sign alone looks like something else.' }
  },
  '30': {
    0: { trap: 'Elevating legs with arterial disease, or dangling legs with venous disease.' },
    1: { trap: 'Massaging the calf or having the client walk it off.' },
    2: { trap: 'Mixing up the antidotes: protamine is for heparin, vitamin K is for warfarin.' },
    3: { trap: 'Switching from heparin to enoxaparin — it can cross-react.' },
    5: { trap: 'Calling statin muscle pain “normal soreness” and not reporting it.' },
    6: { trap: 'Palpating the abdomen to confirm the mass.' },
    7: { trap: 'Assuming a weak pulse right after surgery is expected swelling.' },
    8: { trap: 'Telling the client to stop walking whenever pain starts — walking to the point of pain builds collateral flow.' },
    9: { trap: 'Ordering INRs to monitor a DOAC.' },
    10: { trap: 'Only slowing the infusion instead of stopping it and preparing protamine.' }
  },
  '33': {
    1: { trap: 'Expecting the sternum to be the usual adult biopsy site — it is the posterior iliac crest.' },
    3: { trap: 'Reading a high retic count as a marrow problem — it means the marrow is responding.' },
    4: { trap: 'Checking the INR before giving heparin.' },
    6: { trap: 'Forgetting to ask about over-the-counter and herbal products.' },
    7: { trap: 'Expecting older adults to show fever with infection.' },
    8: { trap: 'Allowing flossing “gently” — it still cuts the gums.' },
    9: { trap: 'Giving iron for every anemia without checking ferritin, B₁₂ and folate.' }
  },
  '34': {
    2: { trap: 'Slowing the transfusion or giving acetaminophen and continuing.' },
    3: { trap: 'Taking iron with milk or antacids.' },
    4: { trap: 'Using normal oral B₁₂ in a client who has no intrinsic factor to absorb it.' },
    5: { trap: 'Giving iron for an anemia with large cells and nerve symptoms.' },
    6: { trap: 'Thinking a higher Hgb is always better on epoetin.' },
    7: { trap: 'Treating it as a pain crisis only and missing the lungs.' },
    8: { trap: 'Assuming hydroxyurea is harmless because it is taken by mouth.' },
    9: { trap: 'Making nutrition or activity the priority instead of infection and bleeding.' },
    10: { move: 'Teach the signs of clots (calf pain, chest pain, stroke signs) and bleeding, and keep phlebotomy appointments.', trap: 'Thinking more red cells mean better oxygen — thick blood clots more easily.' },
    11: { trap: 'Calling bone pain on filgrastim a reason to stop — it is expected as the marrow expands.' }
  }
});

// Myth-check fronts written out as full true-or-false statements (the originals are shorthand like “Nitro limitless.”).
(function () {
  const Q = {
    '22': { 3: 'After a bronchoscopy, the client can eat and drink as soon as they are awake.', 4: 'For a thoracentesis, the client lies flat.', 5: 'After an ABG, hold pressure on the site for 5 minutes for every client.', 9: 'If a client says they use their inhaler correctly, you can trust that they do.', 11: 'Stridor can wait until the provider’s next round.' },
    '23': { 2: 'When suctioning, apply suction while inserting the catheter.', 3: 'Obstructive sleep apnea is treated with oxygen.', 4: 'A client with a laryngectomy gets oxygen by face mask over the nose and mouth.', 5: 'Stridor can be watched and reassessed later.', 6: 'Posterior nasal packing is low risk.', 7: 'Color changes in a free flap are only cosmetic.', 8: 'Aspirin is fine to take after a nosebleed.', 9: 'Opioids are given routinely, with no extra monitoring, after airway surgery.', 11: 'The airway only needs to be assessed once after surgery.' },
    '24': { 0: 'In an asthma attack, a quiet chest means the client is getting better.', 1: 'An inhaled corticosteroid (ICS) relieves an acute asthma attack.', 2: 'Never give oxygen to a client with COPD.', 3: 'If a chest tube disconnects, clamp it.', 4: 'Continuous bubbling in the water-seal chamber is normal.', 5: 'An epoprostenol infusion can be paused briefly.', 6: 'Clients with cystic fibrosis take their pancreatic enzymes only as needed.', 7: 'Two clients with cystic fibrosis can share a room.', 8: 'Rinse your mouth only after using a rescue (SABA) inhaler.', 9: 'Theophylline is a harmless drug with a wide safety margin.', 10: 'Superior vena cava syndrome is just cosmetic swelling.', 11: 'Cor pulmonale looks like left-sided heart failure.' },
    '25': { 0: 'Give antibiotics first, then draw the blood cultures.', 1: 'An older adult must have a fever to have pneumonia.', 2: 'The door of a TB isolation room can stay open.', 4: 'Orange urine in a client taking rifampin means bleeding.', 5: 'Nerve damage (neuropathy) from isoniazid cannot be prevented.', 6: 'The main toxicity of ethambutol is liver damage.', 7: 'TB treatment can stop once the client feels well.', 8: 'Oseltamivir works no matter when it is started.', 10: 'Amphotericin B is a harmless drug.', 11: 'A peritonsillar abscess is just a simple sore throat.' },
    '27': { 0: 'A normal first troponin rules out a heart attack.', 1: 'BNP (B-type natriuretic peptide) is a lung test.', 2: 'The client can sit up right after a femoral (groin) catheterization.', 3: 'Warmth at the groin site after catheterization is normal.', 4: 'Metformin does not matter when a client gets contrast dye.', 5: 'Right-sided heart failure causes crackles in the lungs.', 6: 'Urine output has nothing to do with the heart.', 7: 'Orthostatic hypotension is a systolic drop of 10 mm Hg or more.', 8: 'A client with chest pain gets an ECG whenever it is convenient.' },
    '28': { 0: 'When the monitor shows a new rhythm, treat the monitor first.', 1: 'Adenosine is given by slow IV push.', 2: 'Asystole is treated with a shock (defibrillation).', 3: 'Cardioversion is an unsynchronized shock.', 4: 'Atrial fibrillation is harmless.', 5: 'It is fine to give digoxin when the potassium is low.', 6: 'Atropine is given for every slow heart rhythm.', 7: 'Magnesium is the drug for SVT.', 8: 'Amiodarone is a short-acting drug.', 9: 'The client can move the arm on the pacemaker side freely right away.', 10: 'A wide-QRS rhythm comes from above the ventricles (supraventricular).' },
    '29': { 0: 'Give IV fluids to a client with pulmonary edema.', 1: 'A client can take as many nitroglycerin tablets as needed for chest pain.', 2: 'Nitroglycerin is safe to take with sildenafil (Viagra).', 3: 'Loop diuretics raise potassium.', 4: 'ACE inhibitors lower potassium.', 5: 'The dry cough from an ACE inhibitor is harmless and needs no action.', 6: 'Clients with heart failure can weigh themselves at any time of day.', 7: 'Cardiac tamponade develops slowly and is not an emergency.', 8: 'Angina and a heart attack (MI) are the same thing.', 9: 'Start a beta blocker during acute heart-failure decompensation.', 10: 'A mechanical heart valve needs no anticoagulant.' },
    '30': { 0: 'Elevate the legs of a client with arterial disease (PAD).', 1: 'Warfarin works immediately.', 3: 'In heparin-induced thrombocytopenia (HIT), switch from heparin to enoxaparin.', 4: 'Massage a painful, swollen calf to relieve the cramp.', 5: 'In a hypertensive crisis, lower the BP as fast as possible.', 6: 'DOACs such as apixaban need routine INR checks.', 7: 'Muscle pain on a statin is normal and can be ignored.', 8: 'Palpate an abdominal aortic aneurysm (AAA) firmly to check its size.', 9: 'An absent pulse after bypass surgery is expected.', 10: 'Smoking is a minor factor in peripheral arterial disease.' },
    '33': { 0: 'A normal SpO₂ rules out hypoxia in a client with anemia.', 1: 'Fever in a client with neutropenia can wait until morning rounds.', 2: 'The INR is used to monitor heparin.', 3: 'Clients with low platelets should keep flossing.', 4: 'IM injections are fine for a client with low platelets.', 5: 'The reticulocyte count does not matter in anemia.', 6: 'Herbal supplements are harmless for clients with a bleeding risk.', 7: 'Bone marrow biopsies are usually taken from the sternum.', 8: 'Older adults reliably develop a fever with infection.', 9: 'Rectal temperatures are fine for clients with low blood counts.' },
    '34': { 0: 'If a client reacts to a transfusion, slow the transfusion down.', 1: 'Apply cold packs for sickle cell pain.', 2: 'Sickle cell pain should be undertreated to avoid opioid addiction.', 3: 'Take iron pills with milk.', 4: 'Pernicious anemia is always treated with oral vitamin B₁₂.', 5: 'With epoetin, a higher hemoglobin is always better.', 6: 'Blood can be given with D5W.', 7: 'One nurse can verify blood alone before transfusing.', 8: 'The priority for a client with leukemia is nutrition.', 9: 'Hydroxyurea is a harmless drug.' }
  };
  const C = window.EXPLAIN_CARDS = window.EXPLAIN_CARDS || {};
  Object.keys(Q).forEach(ch => {
    const mc = ((C[ch] = C[ch] || {}).mc = C[ch].mc || {});
    Object.keys(Q[ch]).forEach(i => { mc[i] = Object.assign({}, mc[i], { q: Q[ch][i] }); });
  });
})();

// Recall-card fronts written as full questions (the originals are note-style, like “Iron: teaching and why.”).
(function () {
  const Q = {
    '24': { 6: 'How is cystic fibrosis diagnosed (three findings), and what is the core nutrition teaching?' },
    '25': { 4: 'For a client with active TB, what room is used, what respirator do staff wear, and when is the client no longer considered infectious?', 10: 'Which regions or exposures are linked to histoplasmosis, coccidioidomycosis and blastomycosis?' },
    '27': { 4: 'Before a cardiac catheterization with contrast dye, name three things the nurse checks.', 8: 'What are the target values for total cholesterol, LDL, HDL and triglycerides?', 11: 'What do elevated hsCRP and homocysteine levels suggest?' },
    '28': { 2: 'What is adenosine used for, how is it given, and what should the nurse expect right after?', 3: 'When is atropine used, and why does it work?', 7: 'When do you hold digoxin, and what are the signs of digoxin toxicity?', 9: 'What should you teach a client after a pacemaker is inserted?', 11: 'Which adverse effects of amiodarone must be monitored?' },
    '29': { 2: 'What are the side effects of furosemide, and why does each happen?', 3: 'How should a client with heart failure do daily weights, and what weight gain is reported?', 6: 'How is sublingual nitroglycerin taken for chest pain, and what is the key contraindication?', 7: 'A client has chest pain with ST elevation on the ECG. What is the priority?', 8: 'What pain pattern, position and heart sound point to pericarditis?', 9: 'What are the signs of cardiac tamponade, and what is the priority?', 10: 'What should you teach a client about preventing infective endocarditis?' },
    '30': { 2: 'Heparin vs warfarin: which lab monitors each, how fast does each work, and what is the antidote for each?', 3: 'What is the key sign of heparin-induced thrombocytopenia (HIT), and what do you do?', 4: 'In a hypertensive crisis, how fast and how far should the BP be lowered?', 5: 'What are the key adverse effects of statins?', 6: 'What are the signs of a ruptured abdominal aortic aneurysm, and what is the action?', 8: 'What should you teach a client with peripheral arterial disease?', 9: 'What should you teach a client taking a DOAC such as apixaban or rivaroxaban?', 11: 'What are the blood pressure categories (normal, elevated, stage 1, stage 2), and what is DASH diet teaching?' },
    '33': { 4: 'Which clotting pathway and which drug does the PT/INR monitor, and which does the aPTT monitor?', 5: 'A client’s absolute neutrophil count (ANC) is 400/mm³. What changes in their care?', 6: 'Which medications affect a hematologic assessment, and how?', 7: 'What hematologic changes are expected in older adults?' },
    '34': { 1: 'What are the safety steps for giving a blood transfusion?', 3: 'What should you teach a client taking oral iron, and why?', 4: 'How is vitamin B₁₂ given for pernicious anemia, and why that route?', 6: 'What is the black box warning for epoetin alfa, and what is monitored?', 8: 'Why is hydroxyurea used in sickle cell disease, and what is monitored?', 10: 'What are the risks of polycythemia vera, and what is the teaching?', 11: 'What is filgrastim for, and what is its main side effect?' }
  };
  const C = window.EXPLAIN_CARDS = window.EXPLAIN_CARDS || {};
  Object.keys(Q).forEach(ch => {
    const rq = ((C[ch] = C[ch] || {}).rq = C[ch].rq || {});
    Object.keys(Q[ch]).forEach(i => { rq[i] = Object.assign({}, rq[i], { q: Q[ch][i] }); });
  });
})();
