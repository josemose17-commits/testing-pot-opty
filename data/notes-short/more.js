// Short versions of the long bold-led paragraphs (no dash after the label), all chapters.
// Merged into the per-chapter entries. Keys are the block headings (letters only are compared).
(function (add) {
  var S = window.NOTES_SHORT = window.NOTES_SHORT || {};
  Object.keys(add).forEach(function (id) { S[id] = Object.assign(S[id] || {}, add[id]); });
})({
'23-overview': {
  'The nose': ['Nose is **vascular on purpose** (warms + humidifies)', '**Kiesselbach plexus** (anterior septum) → most bleeds **anterior + reachable**', '**Posterior** bleeds: bigger vessels, into the throat, **far more dangerous**']
},
'23-epistaxis-trauma-and-obstruction': {
  'Epistaxis first aid:': ['**Sit up, lean forward**', '**Pinch the soft part 10–15 min** continuously; ice to nose/face; keep calm', 'Leaning back → blood down the throat, **hides the loss**']
},
'23-adpie': {
  'Unmet looks like:': ['New/worse **stridor, drooling**, ↑ effort, ↓ SpO₂ or ↑ ETCO₂', 'Shrinking oropharynx after surgery; **frequent swallowing** or bright red bleeding', 'Dusky flap; **any suspected carotid leak**']
},
'24-overview': {
  'Elastic recoil': ['**Recoil empties the lung** (exhalation is passive)', 'Elastin destroyed → inflates but **won\'t deflate** → trapped air, **bullae**, ↓ surface area']
},
'24-copd-the-gas-exchange-concept-exemplar': {
  'GOLD classification — by FEV₁ % predicted': ['FEV₁ % predicted: **1 mild ≥ 80 · 2 moderate 50–79 · 3 severe 30–49 · 4 very severe < 30**', 'PFTs before + after bronchodilator; **residual volume** most affected; FEV₁/FVC falls', '**CAT** (8 items, 0–40) → A–D symptom/risk group (GOLD 4 can be A; GOLD 1 can be D)']
},
'24-adpie': {
  'Unmet looks like:': ['↑ effort/rate, **SpO₂ below their usual**, **sharp PaCO₂ rise**', '**Muscle fatigue + hypoxemia that won\'t lift** = impending respiratory failure', 'New crackles or **silent chest**; CF **FEV₁ ↓ 10%**', 'Weight still falling, edema/JVD, **readmission** (plan, appointment, or drug cost failed)']
},
'25-pneumonia-the-gas-exchange-concept-exemp': {
  'Risk factors — CAP': ['**CAP**: older adult; no pneumococcal vaccine or > 5 yr ago; no flu shot last year; COVID not current; low immunity; recent viral exposure; tobacco/alcohol/secondhand smoke', '**Hospital**: older, lung disease, **gram-negative colonization** of mouth/throat/stomach, ↓ LOC, **recent aspiration**, ET/NG tube or trach, poor nutrition, low immunity', '**Drugs that ↑ gastric pH** (H₂ blockers, antacids), alkaline tube feeds, **mechanical ventilation**']
},
'25-adpie': {
  'Pneumonia .': ['1. **Gas exchange** (↓ diffusion) · 2. **Airway obstruction** (secretions, fatigue, weakness) · 3. **Sepsis** (vascular area + low immunity)'],
  'Tuberculosis.': ['**Airborne transmission** · gas exchange · nutrition/weight loss', '**Non-adherence** to 6–9 months → **drug resistance** in patient + community'],
  'Unmet looks like:': ['**New confusion** in an older adult', 'Rapid weak pulse, hypotension, **↑ lactate = sepsis**', 'COVID: **dyspnea at rest/worsening** (ARDS within 2 days)', 'Chest pain, edema, hemoptysis, orthopnea → **PE, HF, pericarditis**', '**Setback after improvement**; persistent fever/cough', 'Drooling/stridor (peritonsillar abscess); vision or liver signs on TB drugs; **30-day readmission**'],
  'Set expectations so recovery is not read as failure:': ['Pneumonia: fatigue, weakness, cough **for weeks**', 'Flu fatigue **1–2 weeks** · acute COVID **up to 4 weeks** · post-COVID **≥ 2 months**', 'Tell them the course + that **full recovery happens**']
},
'27-adpie': {
  'Unmet looks like:': ['**Rising troponin**, new/returning chest discomfort, **widening pulse deficit**', 'Cool/mottled limbs, confusion, oliguria', 'Growing groin hematoma or **new back/flank pain + falling BP = retroperitoneal bleed** (most missed)']
},
'28-the-rhythms-and-what-each-one-does-to-ou': {
  'Sinus bradycardia': ['**< 60**, otherwise normal; fine in athletes/sleep', 'Symptomatic (dizzy, hypotension, confusion, chest pain) → **atropine → transcutaneous pacing**', 'Causes: **vagal**, beta blockers, digoxin, **inferior MI**, ↑ ICP']
},
'28-antidysrhythmic-drug-classes-vaughn-will': {
  'Class I — sodium channel blockers': ['**Na⁺ blockers** → ↓ automaticity; **IA quinidine · IB lidocaine · IC flecainide, propafenone**', 'Watch hypotension, brady, **new dysrhythmias**, CNS effects (dizzy, confusion, **seizures**), GI upset', 'Many can cause **heart failure**'],
  'Class II — beta blockers': ['Propranolol, acebutolol, **esmolol**, sotalol → ↓ rate + conduction', 'Brady + ↓ BP expected; watch **wheezing (β₂ bronchospasm)**, insomnia, fatigue, dizziness', '**Sotalol = class II + III** (blocks K⁺, prolongs QT)'],
  'Class III — potassium channel blockers': ['**K⁺ blockers** → delay repolarization, **prolong QT**', '**Amiodarone**: atrial + ventricular; continuous monitoring on infusion (brady, AV block)', 'Limited to life-threatening rhythms (**lung damage, vision**); corneal deposits common'],
  'Class IV — calcium channel blockers': ['Only **verapamil + diltiazem** for dysrhythmias → slow SA/AV, ↓ rate', 'Brady + hypotension common → **change position slowly**', 'Report dyspnea, orthopnea, JVD, swelling → **HF** may develop'],
  'Unclassified — adenosine': ['For **paroxysmal SVT**', '**Rapid push + saline flush**; emergency equipment ready — **brief asystole common**', 'Flushing, dyspnea, chest pain, N/V; brady, hypotension']
},
'28-adpie': {
  'Unmet looks like:': ['PVCs → runs, **any VT**, widening QRS or **lengthening QT**', 'New hypotension/↓ LOC, **platelets ↓ 50% on heparin**', '**Spikes without capture**, twitching with the heart rate → **ACLS or call the provider**']
},
'29-overview': {
  'Left-sided failure → lungs.': ['**Dyspnea, orthopnea, PND, crackles**, cough with **pink frothy sputum**, **S3**', 'Fatigue, confusion, **oliguria by day, nocturia at night**', 'Systolic (↓ EF, can\'t contract) vs diastolic (preserved EF, can\'t relax/fill)'],
  'Right-sided failure → body.': ['**JVD, dependent pitting edema, weight gain**, hepatomegaly + RUQ discomfort, ascites, anorexia/nausea', 'Usually caused by **left failure**; also lung disease (**cor pulmonale**)']
},
'29-types-staging-and-the-compensatory-casca': {
  'Compensation 1 — sympathetic stimulation': ['**Fastest** response (tissue hypoxia)', 'β → ↑ rate · α → vasoconstriction ↑ BP', 'Too fast → **less filling + ↑ O₂ demand** → failure worsens'],
  'Compensation 2 — Starling stretch': ['↑ venous return stretches + dilates ventricle → stronger squeeze', '**Past a limit → weaker**', 'Vasoconstriction keeps BP but **↑ afterload** (main driver of O₂ need)'],
  'Compensation 3 — RAAS activation': ['↓ renal flow → **Ang II** (vasoconstriction) + **aldosterone** (Na⁺/water)', '**↑ preload + afterload**; Ang II drives **remodeling**'],
  'Compensation 4 — other chemical responses': ['After MI: **TNF, IL-1, IL-6** → remodeling', '**Natriuretic peptides** → vasodilation + diuresis; **BNP** from stretched ventricles (↑ with age, higher in healthy women)', 'Low brain perfusion → **ADH** → vasoconstriction + fluid retention', 'Stretched endothelium → **endothelin** (strong vasoconstrictor)']
},
'29-assessing-heart-failure-both-sides-and-t': {
  'Left ventricular failure — low output side': ['Fatigue, weakness, **oliguria by day + nocturia at night**, angina', '**Confusion, restlessness**, dizziness, tachycardia, palpitations', 'Pale/ash-gray skin, **weak peripheral pulses, cool extremities**']
},
'29-reducing-afterload-and-preload-the-drug-': {
  'ARNI — sacubitril/valsartan': ['↓ death + admissions (class II–IV, **reduced EF**)', 'Sacubitril blocks **neprilysin** → ↑ natriuretic peptides + RAAS suppressed', 'Replaces ACEI/ARB; **never within 36 h of an ACEI** or with angioedema history', 'Watch **hypotension, ↑ K⁺**, cough, dizziness, renal failure; orthostasis, confusion, ↓ urine; K⁺ + creatinine']
},
'29-improving-contractility-and-the-newer-ag': {
  'Ivabradine — an HCN channel blocker': ['Blocks a **sinus node channel** → slows rate, ↓ admissions', 'For **EF < 35%**, sinus rhythm, **HR ≥ 70** on max beta blocker (or can\'t take one)', 'Brady, HTN, **AF**; **take with meals**; teach pulse checks']
},
'29-devices-surgery-pulmonary-edema-and-livi': {
  'Pulmonary edema — the mechanism': ['LV can\'t eject → pulmonary pressure ↑ → **fluid leaks into airways**', 'Causes: severe HF + overload, **acute MI**, mitral disease, dysrhythmias'],
  'Pulmonary edema — the cues': ['**Crackles, dyspnea at rest**, **acute confusion** (early in older adults)', 'Tachycardia, BP high or low, ↓ urine, **pink frothy sputum**, PVCs', 'Extreme anxiety, cold clammy/cyanotic skin', 'Document **crackle level** (rises from bases)'],
  'Pulmonary edema — the actions': ['If not hypotensive: **high Fowler, legs down**', '**Priority = O₂**: simple mask 5–12 L or **nonrebreather 6–10 L** → SpO₂ > 90%', 'Still distressed → **CPAP/BiPAP** → intubation'],
  'Pulmonary edema — the drugs': ['**SBP > 100**: **SL nitroglycerin q5 min × 3** while getting IV', '**Furosemide IV push over 1–2 min** (ototoxicity) or bumetanide push/infusion', 'VS **q30–60 min**', 'Adequate BP → **IV morphine** (↓ preload, anxiety, work of breathing); watch RR + BP']
},
'29-adpie': {
  'Unmet looks like:': ['Worsening dyspnea/**frothy sputum**, ↑ BNP, cool limbs, confusion, ↓ urine, **hypotension despite therapy** (cardiogenic shock)', 'Iatrogenic: **↓ K⁺ from diuresis**, hypotension after first ACEI dose, decompensation after a beta blocker started too soon']
},
'30-peripheral-arterial-disease-stages-ulcer': {
  'Stage III — rest pain': ['Pain at rest, **wakes them at night**: numbness, burning, toothache-like', 'Toes, arch, forefoot, heel; **relieved by hanging the leg down**', '**Advanced** → limb at risk']
},
'30-revascularization-graft-care-and-acute-o': {
  'Graft occlusion — a postoperative emergency': ['Emergency in the **first 24 h**', '**Severe continuous ache** may be the first sign (vs **throbbing** from new flow) → ask the type of pain', 'PCA may mask it; some ischemic pain isn\'t relieved by PCA'],
  'Acute arterial occlusion — sudden and dramatic': ['Sudden (unlike chronic PAD)', '**Embolus** most common, usually **from the heart** — recent **MI or AF**', 'Legs > arms']
},
'30-venous-thromboembolism-risk-scoring-and-': {
  'The prevention bundle': ['Moderate–high risk: education, **leg exercises, early ambulation, hydration**', '**Graduated stockings + SCDs**, foot pump, **anticoagulant**']
},
'30-adpie': {
  'Unmet looks like:': ['**Sudden dyspnea + pleuritic pain + tachycardia** (PE)', '**Platelets ↓ 50%** (HIT = clotting warning)', 'Limb **pale, pulseless, numb, paralyzed** (acute occlusion)', '**Tearing back/flank pain + hypotension** (rupture)', 'Tense painful compartment after reperfusion']
},
'33-head-to-toe-assessment-aging-adaptations': {
  'Abdominal — the absolute rule': ['**Don\'t palpate the spleen** in suspected blood disorders', 'Normal spleen not palpable; enlarged = tender, **ruptures easily → hemorrhage/death**', 'Provider palpates spleen + liver']
},
'33-adpie': {
  'Read the CBC as a pattern first:': ['One line down → points one way; **all three down = pancytopenia → marrow**', 'Then retics: low Hgb + **high retic = lost/destroyed**; **low retic = production failed**']
},
'34-leukemia-treatment-by-type-and-protectin': {
  'AML — induction therapy': ['Intense chemo at diagnosis for **rapid remission**', '**Cytarabine + daunorubicin/idarubicin**; **4–6 week** hospital stay', 'Treatment causes **dangerously low counts** → IV antibiotics, transfusions', 'N/V, diarrhea, alopecia, **stomatitis**, kidney/liver/heart toxicity'],
  'CML — tyrosine kinase inhibitors': ['**TKIs** (imatinib, dasatinib, nilotinib, bosutinib, ponatinib, asciminib) — oral, **usually indefinite**', '**No grapefruit or pomegranate**; **teratogenic**'],
  'ALL — three phases': ['1. **Induction** (+ imatinib if Philadelphia+)', '2. **CNS prophylaxis**: cranial radiation + **intrathecal methotrexate** (or variations)', '3. **Maintenance**'],
  'CLL — highly individualized': ['Asymptomatic → **watchful waiting**', 'First-line: acalabrutinib, **ibrutinib**, venetoclax + obinutuzumab, BR, FCR', 'Relapse: repeat or combine with rituximab/obinutuzumab', 'Transplant usually **< 66**; radiation sometimes'],
  'Conserving energy — the practical bundle': ['Fatigue is temporary but recovery **may take a year**', '**Dyspnea + palpitations = overdoing it** → stop before them', 'Space care **≥ 1 h apart**, at high-energy times, not around meals', '**Full bed bath every other day**; cancel nonessential activities', '**4–6 small meals**, high protein + carbs, shakes', 'Extreme fatigue → **let others do personal care**', '1–2 preferred visitors; **SpO₂ + RR during activity**']
},
'34-hematopoietic-stem-cell-transplantation-': {
  'Apheresis safety — the calcium problem': ['Anticoagulant (**heparin or citrate**) → catheter clotting + **hypocalcemia**', 'Ionized Ca²⁺ before/after + hourly', 'Citrate toxicity: **tingling around the mouth**, N/V · low Ca²⁺: **tingling fingers/toes**, cramps, chest pain', 'Oral or IV calcium; **VS hourly** (hypotension from fluid loss)', 'Cells frozen until conditioning ends'],
  'Phase 1 — conditioning': ['Admission → **Day 0** (stem cell infusion)', 'IV fluids, antiemetics, **thoroughly cooked food**', '**Mouth care**: no alcohol mouthwash, very soft brush', 'Watch the tunneled catheter'],
  'Day T−0 — the transplant': ['Cells thawed, infused via **central line** (< 1 h to a few h)', '**No blood tubing** (filter traps cells) → standard larger-bore tubing', 'Expect nausea, vomiting, cough, **garlic taste**, **pink-red urine**', 'Report **chills**; watch fever + hypotension'],
  'Phase 3 — engraftment to discharge': ['Counts recover; **strict asepsis** until discharge', 'Teach home infection prevention + what to report; follow-up', 'Moderate activity; **no house cleaning**'],
  'Phase 4 — early convalescence': ['Discharge → **≥ 1 year**: immune system still weak → **prophylactic antibiotics**', 'Assess every visit; support **hope**, mental health referral'],
  'Phase 5 — late convalescence': ['**Year 1 onward**: late organ problems or **relapse** still possible', 'Gradual return to activities; start the **vaccination sequence** with oncology']
},
'34-adpie': {
  'Unmet looks like:': ['**Fever after 72 h** of antibiotics, ↓ BP, ↑ lactate, confusion, oliguria', 'New bleeding, **platelets still falling**', 'Sickle cell: **chest pain + fever + tachypnea = acute chest syndrome**']
}
});
