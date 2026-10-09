// "Why it works": the basic science behind lines in the Exam 2 notes, from the other textbooks
// (OpenStax A&P 2e, Chemistry 2e, Microbiology, Psychology 2e, Introduction to Sociology 3e, all
// CC BY 4.0, and Open RN Nursing Pharmacology 2e, CC BY 4.0). Nothing here is new exam content:
// each entry quotes a line already in the notes (says, an exact substring of that topic's text) and
// explains the reason behind it (why). src names the book and chapter.
window.BASICS = {
'22-overview': [
  { says: 'central chemoreceptors respond to CO₂ and pH', why: 'CO₂ slips easily into the fluid around the brainstem, where it combines with water and releases acid (H⁺). That acid is what the central chemoreceptors actually feel, so breathing follows CO₂ closely. The peripheral sensors in the carotid arteries and aortic arch only react to oxygen once it is quite low, about 60 mm Hg or less.', src: 'A&P 2e 22.3' },
  { says: 'Diffusion happens down a pressure gradient', why: 'Every gas in a mixture has its own "partial pressure" (Dalton\'s law), and each one moves from where its pressure is higher to where it is lower. Oxygen is about 104 mm Hg in the alveoli and 40 in the blood arriving at the lungs, a big push. CO₂ is only 45 vs 40, a small push, but CO₂ is about 20 times more soluble, so it still crosses easily. That\'s why a thickened membrane drops oxygen first.', src: 'A&P 2e 22.4 · Chemistry 2e 9.3' },
  { says: 'Shunt (pneumonia) = blood without air — responds poorly to oxygen alone', why: 'Blood that flows past airless alveoli never touches the extra oxygen. Blood from the healthy alveoli is already almost fully saturated (the top of the oxygen–hemoglobin curve is flat), so it can\'t carry extra to make up the difference. The lung tries to help by narrowing the small arteries next to poorly aired alveoli, sending blood to better ones.', src: 'A&P 2e 22.4–22.5' },
  { says: 'Fatigue → hypoventilation → rising CO₂ → acidosis', why: 'The bridge between CO₂ and acid is one reaction: CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻. Every bit of CO₂ that isn\'t breathed out pushes it to the right and makes more acid. pH is a log scale, so blood only tolerates small changes; a shift of 0.4 can be fatal.', src: 'A&P 2e 22.5 · Chemistry 2e 14.6' }
],
'22-reading-the-numbers-oximetry-capnography': [
  { says: 'carbon dioxide leaves the body more readily than oxygen enters it', why: 'This is solubility: CO₂ dissolves about 20 times more readily than oxygen in blood and alveolar fluid, so it crosses the membrane easily even with a small pressure difference. Breathing changes show up in CO₂ first.', src: 'A&P 2e 22.4' },
  { says: 'can hold a perfect SpO₂ while their CO₂ climbs', why: 'Oxygen and CO₂ travel on different "seats". Oxygen rides on the iron in hemoglobin. CO₂ travels mostly as bicarbonate (about 70%), partly on the protein part of hemoglobin (about 20%) and a little dissolved (7–10%). Filling hemoglobin with oxygen says nothing about whether CO₂ is being breathed out, which depends on how much air moves.', src: 'A&P 2e 22.5' }
],
'22-oxygen-as-a-drug-devices-doses-hazards': [
  { says: 'roughly 24% at 1 L rising about 4% per liter', why: 'Room air is 20.9% oxygen, which at sea level is about 159 mm Hg of oxygen pressure (Dalton\'s law: each gas\'s share of the total). Each liter adds a few percent, which raises the oxygen pressure in the alveoli, and a bigger pressure difference pushes more oxygen into the blood (Henry\'s law).', src: 'A&P 2e 22.4 · Chemistry 2e 9.3' },
  { says: 'nitrogen (79% of room air) normally splints alveoli open', why: 'Nitrogen makes up about 79% of air (about 597 mm Hg) and is not absorbed, so it keeps the alveolus filled. Oxygen is absorbed into the blood. Replace the nitrogen with oxygen and the gas gets absorbed until the alveolus empties. Surfactant lowers surface tension but can\'t hold open an alveolus with nothing in it.', src: 'A&P 2e 22.3–22.4' },
  { says: 'Notify when the PaO₂ rises above 90 mm Hg', why: 'Above about 90 mm Hg you\'re on the flat top of the oxygen–hemoglobin curve: hemoglobin is already essentially full. More oxygen pressure adds almost nothing to what the blood carries, only more risk of oxygen toxicity.', src: 'A&P 2e 22.5' }
],
'22-breath-sounds-sound-to-mechanism': [
  { says: 'alveoli popping open against fluid or collapse', why: 'The inside of each alveolus is lined with a thin layer of water, and its surface tension pulls the walls together. Surfactant from type II alveolar cells lowers that tension; without it, alveoli collapse when you breathe out. Fluid or lost surfactant makes alveoli stick shut, and they snap open late in the breath: the crackle.', src: 'A&P 2e 22.3' }
],
'22-endoscopy-thoracentesis-and-biopsy-the-n': [
  { says: 'Anything entering the chest can let air in where it does not belong', why: 'Air always flows from higher to lower pressure (Boyle\'s law: pressure and volume move in opposite directions). The pleural space is kept at a lower pressure than the outside air, which holds the lung against the chest wall. A hole lets air rush in until the pressures match, and the lung\'s own elastic recoil then collapses it.', src: 'A&P 2e 22.3' }
],
'22-inhalation-injury-and-smoking-cessation': [
  { says: 'The damaging compounds are tar, nicotine, and carbon monoxide.', why: 'Nicotine binds nicotinic receptors in the autonomic ganglia, the same receptors acetylcholine uses, which drives the sympathetic "fight or flight" effects: faster heart rate, higher BP, narrowed vessels.', src: 'Nursing Pharmacology 2e 4.2' }
],
'22-diagnostic-tests-and-your-job-around-eac': [
  { says: 'Sputum culture — early morning, deep cough not saliva', why: 'The mouth and nose normally carry their own bacteria (normal flora), including Streptococcus pneumoniae. Saliva would grow those harmless residents and hide the real cause. A deep, early-morning sample comes from the lower airway, where secretions pooled overnight.', src: 'Microbiology 22.1–22.2' }
],
'23-obstructive-sleep-apnea-the-full-picture': [
  { says: 'Apnea raises CO₂ and drops pH, the chemoreceptors fire', why: 'Psychology splits sleep apnea into two kinds: obstructive (the airway physically closes, the effort continues) and central (the brain stops sending the signal to breathe). CPAP props the airway open, so it fixes the obstructive kind, not the central kind. Each pause raises CO₂, which makes acid, and the chemoreceptors jolt the person partly awake.', src: 'Psychology 2e 4.4 · A&P 2e 22.3' }
],
'23-obstructive-sleep-apnea': [
  { says: 'jolts the sympathetic system awake', why: 'That jolt is the body\'s alarm reaction: the sympathetic nervous system releases adrenaline and raises heart rate and blood pressure. Repeated hundreds of times a night, it never fully switches off, which is the link from OSA to hypertension and dysrhythmias. People with untreated apnea also have daytime sleepiness and more car accidents.', src: 'Psychology 2e 14.1, 4.4' }
],
'24-asthma-the-full-picture': [
  { says: 'PaCO₂ falls early (blowing it off), then rises late', why: 'Early on, fast breathing clears CO₂ easily because it diffuses about 20 times more readily than oxygen, so CO₂ falls (respiratory alkalosis) even while oxygen drops. As the breathing muscles tire, less air moves, CO₂ builds, and the CO₂ + water → carbonic acid reaction tips the patient into acidosis. A "normal" CO₂ in a struggling asthmatic can mean they\'re tiring.', src: 'A&P 2e 22.4–22.5 · Chemistry 2e 14.6' },
  { says: 'Cholinergic antagonists / LAMAs', why: 'The parasympathetic nerves release acetylcholine onto muscarinic receptors in the airways, which narrows them and adds secretions. Blocking those receptors (anticholinergics) relaxes the airway smooth muscle. Beta-2 agonists open the airway the other way, by stimulating the sympathetic beta-2 receptors.', src: 'Nursing Pharmacology 2e 4.2' }
],
'24-copd-the-gas-exchange-concept-exemplar': [
  { says: 'The 88–92% target looks like undertreatment and is not.', why: 'Saturation around 90% sits at the "shoulder" of the oxygen–hemoglobin curve (about 60 mm Hg): hemoglobin is still mostly full. Pushing higher adds little oxygen but raises CO₂ in a retainer for three reasons: less low-oxygen drive to breathe; the lung stops narrowing vessels to badly aired areas, so blood flow mismatch worsens; and oxygen-loaded hemoglobin holds less CO₂ (the Haldane effect), leaving more of it in the blood.', src: 'A&P 2e 22.3–22.5' },
  { says: 'CO₂ retention with chronic respiratory acidosis', why: 'Blood\'s main buffer is carbonic acid and bicarbonate, normally about 1 part to 20, which keeps pH near 7.4. When CO₂ stays high for a long time, the kidneys hold on to extra bicarbonate to restore that ratio. That\'s why a chronic retainer can have a near-normal pH with a high PaCO₂ (compensation).', src: 'Chemistry 2e 14.6' },
  { says: 'destruction of elastic tissue reduces recoil', why: 'Breathing out at rest is passive: the stretched lung springs back, its volume shrinks, the pressure inside rises above the outside air (Boyle\'s law), and air leaves. Lungs that stretch too easily (high compliance) but don\'t spring back can\'t raise that pressure, so air stays trapped.', src: 'A&P 2e 22.3' }
],
'24-lung-cancer-and-the-chest-tube': [
  { says: 'The pleural space is normally at negative pressure', why: '"Negative" means lower than the air outside. Boyle\'s law says gas flows from higher to lower pressure, so the instant the space is opened, air rushes in. Without that lower pressure holding it out, the lung\'s elastic recoil pulls it inward and it collapses. The water seal is a one-way valve that lets air out but not back in.', src: 'A&P 2e 22.3' }
],
'24-cystic-fibrosis-in-the-adult': [
  { says: 'Chloride cannot move, so water does not follow it', why: 'This is osmosis: water crosses membranes toward the side with more dissolved particles. Normally chloride (and sodium with it) is pumped into the airway secretions and water follows. When chloride can\'t move, the water stays behind and the mucus is thick and dry.', src: 'Chemistry 2e 11.4' }
],
'25-pneumonia-the-gas-exchange-concept-exemp': [
  { says: 'sputum for Gram stain, culture and sensitivity', why: 'The Gram stain sorts bacteria by their wall: Gram-positive bacteria have a thick wall that traps the purple dye; Gram-negative bacteria have a thin wall plus an outer membrane and show pink. It comes back fast and guides the first antibiotic. The most common cause of community-acquired bacterial pneumonia, Streptococcus pneumoniae, is Gram-positive and normally lives in the throat.', src: 'Microbiology 2.4, 22.2' },
  { says: 'hypoxemia from alveolar consolidation and pulmonary capillary shunting', why: 'Blood keeps flowing past alveoli full of exudate and picks up no oxygen. Extra oxygen can\'t reach it, and blood from healthy alveoli is already nearly full, so the low oxygen responds poorly to O₂ alone until the alveoli clear.', src: 'A&P 2e 22.4–22.5' }
],
'25-tuberculosis': [
  { says: 'Latent, active, secondary', why: 'The TB bacterium\'s wall is full of waxy mycolic acid. The wax lets it survive inside the macrophages that swallow it, makes it grow slowly, and makes it "acid-fast" on staining. In about 90% of infected people the immune system walls it off in tubercles (latent TB). It can reactivate years later when immunity drops: older age, alcohol use disorder, immunosuppression.', src: 'Microbiology 22.2' },
  { says: 'Skin testing — the Mantoux test (TST)', why: 'The skin test is a type IV, delayed hypersensitivity: memory T cells, not antibodies, react to the injected protein. T-cell reactions take a day or two to build, which is why it\'s read at 48–72 hours. A past BCG vaccine can also make it positive, so a chest X-ray is used to confirm.', src: 'Microbiology 19.1, 22.2' },
  { says: 'Xpert MTB/RIF Ultra detects drug-resistant strains', why: 'Slow growth means treatment lasts months with several drugs at once. Antibiotic use is a selective pressure: bacteria that happen to survive a drug multiply. Stopping early or skipping doses lets resistant ones take over, which is how multidrug-resistant (MDR) and extensively drug-resistant (XDR) TB arise.', src: 'Microbiology 14.5, 22.2' }
],
'25-seasonal-influenza-and-pandemic-infectio': [
  { says: 'Neuraminidase inhibitors', why: 'Influenza has two surface spikes: hemagglutinin (H) latches onto airway cells, and neuraminidase (N) cuts new viruses free so they can infect the next cell (hence names like H1N1). Blocking neuraminidase traps new virus on the cell surface, so it only helps while the virus is still multiplying: early, within 24–48 hours.', src: 'Microbiology 22.3' },
  { says: 'Viral infection does not respond to antibiotics.', why: 'Antibiotics hit structures bacteria have and viruses don\'t, like the bacterial cell wall and bacterial ribosomes. A virus uses the patient\'s own cells to copy itself. Flu can open the door to a later bacterial pneumonia, which is when antibiotics do come in.', src: 'Microbiology 22.3, 14.5' }
],
'27-overview': [
  { says: 'stronger contraction (Starling\'s law)', why: 'At the cell level, more filling stretches each sarcomere toward its best length, where more myosin heads can grab actin, so the squeeze is stronger. Overstretched, the filaments overlap less and the force drops, which is the failing heart.', src: 'A&P 2e 19.4' }
],
'27-blood-pressure-regulation-and-the-vascul': [
  { says: 'upright posture raises capillary hydrostatic pressure', why: 'Two forces trade fluid at every capillary. Hydrostatic pressure (blood pressure inside the capillary) pushes fluid out. Colloid osmotic pressure from plasma proteins, mostly albumin, pulls it back in, because the proteins are too big to leave. Lymph carries off the small extra. Edema means the push won, the pull lost (low albumin), the capillaries leaked, or lymph was blocked.', src: 'A&P 2e 20.3' },
  { says: 'excitement, pain, and anger raise pressure and rate through sympathetic arousal', why: 'This is the stress response: the sympathetic nervous system and the hypothalamic-pituitary-adrenal (HPA) axis release adrenaline and cortisol. Over months, repeated arousal is part of how stress, anger and hostility feed hypertension and heart disease.', src: 'Psychology 2e 14.1, 14.3' }
],
'27-structure-coronary-supply-and-the-cardia': [
  { says: 'the vagus nerve slows; sympathetic stimulation and circulating catecholamines speed and strengthen', why: 'The vagus releases acetylcholine, which opens potassium channels in the SA and AV nodes, so the cells drift toward firing more slowly. Norepinephrine and epinephrine act on beta-1 receptors to make the nodes fire faster and the muscle squeeze harder. Thyroid hormone does the same more slowly, which is why hyperthyroid patients run fast.', src: 'A&P 2e 19.4 · Nursing Pharmacology 2e 4.2' },
  { says: 'set by aortic compliance and systemic vascular resistance', why: 'Resistance depends mostly on vessel radius raised to the 4th power: halve the radius and resistance rises about 16-fold. That\'s why small changes in arteriole size (vasoconstrictors, vasodilators, plaque) swing pressure so much. Thicker blood (higher viscosity, as in polycythemia) adds resistance too.', src: 'A&P 2e 20.2' }
],
'27-the-physical-exam-skin-pulses-sounds-num': [
  { says: 'pulse pressure is an indirect measure of cardiac output', why: 'A&P gives a rule of thumb: pulse pressure should be at least about 25% of the systolic. Below that it\'s "narrow", which points to a small stroke volume: heart failure, aortic stenosis, or blood loss.', src: 'A&P 2e 20.2' }
],
'28-the-conduction-system-and-its-four-prope': [
  { says: 'That contraction is the atrial kick', why: 'Most filling happens passively while the whole heart is relaxed; the atria\'s own squeeze adds the last 20–30%. Lose it (atrial fibrillation) and stroke volume falls.', src: 'A&P 2e 19.4' }
],
'28-antidysrhythmic-drug-classes-vaughn-will': [
  { says: 'Class I — sodium channel blockers', why: 'In the working heart cells, the action potential starts with a fast rush of sodium in (the steep upstroke), which is how the impulse spreads quickly from cell to cell. Slow that sodium rush and the impulse spreads more slowly.', src: 'A&P 2e 19.2' },
  { says: 'Class III — potassium channel blockers: each delays repolarization and prolongs the QT interval.', why: 'After the calcium plateau, potassium flowing out of the cell resets it (repolarization). Block the potassium exit and the action potential lasts longer: a longer QT on the ECG and a longer refractory period, when the cell can\'t fire again. Normally that refractory period is about 250 ms and protects the heart from premature beats.', src: 'A&P 2e 19.2' },
  { says: 'They slow calcium entry during depolarization', why: 'Pacemaker cells have no stable resting point: sodium leaks in slowly from about −60 mV until they fire, and calcium carries their firing. In working cells, calcium flowing in makes the plateau and triggers contraction by binding troponin. So calcium-channel blockers slow the SA and AV nodes and also weaken the squeeze, which is why hypotension is common.', src: 'A&P 2e 19.2' }
],
'28-devices-drugs-and-the-safety-rules': [
  { says: 'it blocks vagal slowing', why: 'The vagus slows the heart by releasing acetylcholine onto muscarinic receptors. Atropine is a muscarinic blocker (an anticholinergic), so the sympathetic side takes over: faster rate. Its other effects follow from the same block: dry mouth, less sweating, urinary retention, dilated pupils.', src: 'Nursing Pharmacology 2e 4.2' },
  { says: 'Digoxin — slows conduction and increases contractility.', why: 'Digoxin has a narrow therapeutic index: the dose that works and the dose that\'s toxic are close together. That\'s why levels and potassium are checked and the apical pulse is taken before every dose.', src: 'Nursing Pharmacology 2e 1.10' }
],
'28-the-nine-step-analysis-normal-rhythms-an': [
  { says: 'continued speed cuts filling time and stroke volume', why: 'Filling happens during diastole. The faster the rate, the shorter diastole gets, so less blood (less preload) is in the ventricle when it squeezes. Higher contractility can make up for it briefly, but not for long.', src: 'A&P 2e 19.4' }
],
'28-the-rhythms-and-what-each-one-does-to-ou': [
  { says: 'stagnant blood forms clots', why: 'Clotting turns on when blood stops moving: the intrinsic pathway starts inside the vessel or chamber, leading to thrombin and a fibrin mesh. Quivering atria leave blood pooled in the atrial appendage, which is why AF needs anticoagulation to prevent stroke.', src: 'A&P 2e 18.5' }
],
'29-heart-failure-drug-classes-what-each-lev': [
  { says: 'anything that blocks the renin-angiotensin system raises potassium', why: 'Beta-1 receptors on the kidneys make them release renin, which starts the renin-angiotensin-aldosterone chain. Aldosterone holds sodium and gets rid of potassium. Block the chain (ACE inhibitors, ARBs, beta-blockers partly) and potassium stays in.', src: 'Nursing Pharmacology 2e 4.2' }
],
'29-devices-surgery-pulmonary-edema-and-livi': [
  { says: 'reduces norepinephrine, renin, and aldosterone', why: 'In failure, the body reads low output as danger and runs the stress response nonstop: sympathetic drive and hormones that squeeze vessels and hold fluid. Short-term that props up pressure; long-term it overloads the heart. Treatments that calm it help the heart rest.', src: 'Psychology 2e 14.1 · Nursing Pharmacology 2e 4.2' }
],
'30-hypertension-mechanisms-causes-and-drug-': [
  { says: 'Teach avoidance of grapefruit and grapefruit juice', why: 'Most drugs are broken down in the liver by enzymes such as cytochrome P450. Grapefruit inactivates one of them (CYP3A4), so the drug isn\'t broken down as fast and its blood level climbs. That\'s a drug–food interaction, the same idea as drug–drug interactions.', src: 'Nursing Pharmacology 2e 1.5' }
],
'30-arteriosclerosis-atherosclerosis-and-lip': [
  { says: 'Stable plaque narrows the lumen gradually', why: 'Flow depends on radius to the 4th power, so narrowing an artery\'s radius by half cuts flow to about 1/16 at the same pressure. That\'s why symptoms (claudication, angina) appear with exercise, when tissues need more flow than the narrowed artery can deliver.', src: 'A&P 2e 20.2' }
],
'30-venous-thromboembolism-risk-scoring-and-': [
  { says: 'prolonged bed rest and prolonged sitting on an airplane', why: 'Veins have low pressure, so blood gets back to the heart with help from one-way valves, the skeletal muscle pump (calf muscles squeezing the veins) and the breathing pump. Sitting or lying still turns off the calf pump, blood pools, and pooled blood starts to clot.', src: 'A&P 2e 20.2' }
],
'30-vte-dvt-and-anticoagulation': [
  { says: 'INR', why: 'Warfarin has a narrow therapeutic window: too little and clots form, too much and bleeding starts. The INR measures where the patient is inside that window, which is why the dose is adjusted to the INR and vitamin K is the antidote (the liver needs vitamin K to make factors II, VII, IX and X).', src: 'Nursing Pharmacology 2e 1.10 · A&P 2e 18.5' }
],
'33-overview': [
  { says: 'Red cells live about 120 days.', why: 'Worn-out red cells are eaten by macrophages in the spleen, liver and marrow. The iron is saved (as ferritin or hemosiderin, carried by transferrin) and reused. The rest of the heme becomes biliverdin (green, the color of a fading bruise) and then bilirubin (yellow), which the liver puts into bile. Fast red-cell destruction or a failing liver lets bilirubin build up: jaundice.', src: 'A&P 2e 18.3' },
  { says: 'INR tracks warfarin (extrinsic). aPTT tracks heparin (intrinsic).', why: 'Clotting has two starting routes: the extrinsic pathway, started by tissue injury, and the intrinsic pathway, started by damage inside the vessel. Both feed one common pathway: prothrombin → thrombin, which turns fibrinogen into a fibrin mesh. Plasmin later dissolves the clot. Each lab test watches one route, so it watches the drug that acts there.', src: 'A&P 2e 18.5' }
],
'33-head-to-toe-assessment-aging-adaptations': [
  { says: 'chronic kidney disease produces less erythropoietin', why: 'The kidneys filter about a fifth of the blood volume every pass, so they\'re a natural place to sense oxygen. When they sense low oxygen, they release erythropoietin (EPO), which tells the marrow to make red cells. Damaged kidneys make little EPO, so the marrow isn\'t told to make cells, and iron alone can\'t fix that.', src: 'A&P 2e 18.3' }
],
'34-the-anemias-cause-by-cause': [
  { says: 'improper DNA synthesis and grow larger', why: 'Vitamin B₁₂ and folate are needed to copy DNA. Red-cell precursors keep growing but can\'t divide on schedule, so they come out too big (macrocytic). Iron is needed for heme, so without it each cell carries less hemoglobin and comes out small and pale (microcytic). Iron from meat is absorbed better than iron from plants, and less than 20% of dietary iron is absorbed at all.', src: 'A&P 2e 18.3' }
],
'34-sickle-cell-disease-the-full-picture': [
  { says: 'The vasoocclusive event', why: 'Hemoglobin is 4 protein chains (2 alpha, 2 beta), each with an iron-carrying heme; sickle hemoglobin has a changed beta chain. HbS stiffens when it gives up its oxygen. Anything that makes hemoglobin unload oxygen, like low oxygen, acidosis or fever (they shift the oxygen–hemoglobin curve to the right), means more deoxygenated HbS and more sickling. That\'s why the triggers are hypoxia, dehydration, infection and cold.', src: 'A&P 2e 18.3, 22.5' },
  { says: 'HbS membranes are more fragile and break more easily', why: 'Normal red cells last about 120 days; sickled cells break down far sooner. Faster destruction means more bilirubin than the liver can clear: jaundice and pigment gallstones.', src: 'A&P 2e 18.3' }
],
'34-white-cell-cancers-and-clotting-failures': [
  { says: 'The patient cannot mount normal cues, so fever may be the only sign.', why: 'Neutrophils are normally 50–70% of white cells and are the first responders to bacteria; they\'re what makes pus and much of the redness and swelling. With few neutrophils, an infection can be serious with almost no local signs, so fever may be the only clue.', src: 'A&P 2e 18.4' }
],
'34-leukemia-treatment-by-type-and-protectin': [
  { says: 'Teach avoidance of grapefruit and pomegranate', why: 'These fruits block liver enzymes (cytochrome P450) that break down many drugs, including these oral targeted drugs. The drug then builds up to higher levels than intended.', src: 'Nursing Pharmacology 2e 1.5' }
]
};
