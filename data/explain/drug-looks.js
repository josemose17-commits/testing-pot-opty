// What each drug looks like and how you meet it in the hospital — shown on the Drug Cards.
// brands = brand names (hospitals mostly stock generics, so learn both) · look = what is in your hand · hosp = how it is stored, set up and given.
// Pill colors vary by manufacturer, so colors are given only where they are standard (warfarin) or the brand look is iconic.
window.DRUG_LOOKS = {
  adenosine: {
    brands: 'Adenocard (original brand) — the hospital stocks generic adenosine',
    look: ['Clear, colorless liquid, 3 mg/mL: a 2 mL vial or prefilled syringe holds 6 mg, a 4 mL one holds 12 mg', 'Kept at room temperature — refrigerating it makes crystals form'],
    hosp: ['Kept in the ED, ICU and crash cart; given at the bedside with the provider present and the patient on a monitor', 'Set-up: the adenosine syringe and a 20 mL saline flush on the IV port closest to the heart (a large antecubital IV), or joined by a stopcock — push the drug in 1–2 seconds and flush immediately', 'Run a rhythm strip while you push. Warn the patient first: a few seconds of pause or flat line, chest pressure and flushing are expected']
  },
  amiodarone: {
    brands: 'Pacerone (tablets), Nexterone (premixed IV bag); Cordarone was the original brand',
    look: ['Tablets, most often 200 mg', 'IV: a 50 mg/mL vial of thick liquid that foams if shaken, or a ready-to-hang premixed bag (Nexterone 150 mg/100 mL or 360 mg/200 mL)'],
    hosp: ['Pulseless VT/VF: 300 mg IV push from the crash cart during the code, then 150 mg if needed', 'With a pulse: 150 mg over 10 minutes, then a drip on a pump (1 mg/min for 6 hours, then 0.5 mg/min)', 'Long infusions need non-PVC (DEHP-free) tubing — check the product label for tubing and filter rules; it irritates veins, so use a central line or large vein and watch the site', 'Continuous ECG: watch HR, BP and the QT interval']
  },
  atropine: {
    brands: 'Generic in the hospital (AtroPen is an auto-injector for nerve-agent poisoning)',
    look: ['Crash-cart prefilled syringe: 1 mg in 10 mL (0.1 mg/mL) — a glass cartridge that screws into a plastic injector', 'Small vials (0.4 mg/mL) are used before surgery'],
    hosp: ['Symptomatic bradycardia: 1 mg IV push every 3–5 minutes, up to 3 mg total', 'Given with the patient on a monitor and pacing pads ready in case it does not work', 'Expect: faster HR, dry mouth, flushed warm skin, trouble urinating']
  },
  epinephrine: {
    brands: 'EpiPen, Auvi-Q and generic auto-injectors (anaphylaxis); Adrenalin (vials)',
    look: ['Code dose: prefilled syringe 1 mg in 10 mL (0.1 mg/mL — labeled “1:10,000” on older stock)', 'Anaphylaxis dose: 1 mg/mL vial or ampule (older “1:1,000”) — ten times stronger per mL, drawn up for an IM shot', 'EpiPen: a pen with a blue safety cap and an orange tip — “blue to the sky, orange to the thigh”; adult 0.3 mg, junior 0.15 mg'],
    hosp: ['Cardiac arrest: 1 mg IV/IO push every 3–5 minutes from the crash cart, followed by a saline flush', 'Anaphylaxis: 0.3–0.5 mg IM in the outer thigh — never push the 1 mg/mL strength IV', 'Shock: continuous drip on a pump (high-alert), ideally through a central line; check the IV site often — leaking causes tissue death']
  },
  magsulf: {
    brands: 'Generic',
    look: ['Premixed bags (for example 1 g/100 mL, 2 g/50 mL, 4 g/100 mL) — the safer choice', 'Concentrated 50% vials (500 mg/mL) — high-alert, must be diluted', 'Large obstetric bags (for example 20 g/500 mL) are used for pre-eclampsia — a known overdose risk if mixed up with a small bag'],
    hosp: ['Torsades with a pulse: 1–2 g IV over 5–20 minutes on a pump; in pulseless torsades it is given as a push during the code', 'High-alert: an independent double-check, a smart pump, and calcium gluconate within reach as the antidote', 'Check deep tendon reflexes, breathing rate and urine output; the patient may feel warm and flushed during the infusion']
  },
  metoprolol: {
    brands: 'Lopressor (tartrate — immediate release, twice a day) · Toprol-XL (succinate — extended release, once a day)',
    look: ['Tablets in many strengths; the label says “tartrate” or “succinate ER” — they are dosed differently, so check which one is ordered', 'Toprol-XL may be split on its score line but never crushed or chewed', 'IV: 5 mg in a 5 mL vial (1 mg/mL)'],
    hosp: ['The MAR usually lists hold parameters (for example HR under 60 or SBP under 100) — take the apical pulse and BP right before giving', 'IV: 5 mg pushed over 1–2 minutes, may repeat every 5 minutes up to 3 doses, with the patient on a monitor', 'Common error: an order for “metoprolol 50 mg” that does not say tartrate or succinate — clarify it']
  },
  diltiazem: {
    brands: 'Cardizem (tablets); Cardizem CD and LA, Tiazac, Cartia XT (extended release)',
    look: ['Tablets and capsules; letters like “CD”, “LA”, “XT”, “XR” mean extended release — swallow whole', 'IV: 5 mg/mL vials kept in the refrigerator, or premixed bags for drips'],
    hosp: ['Atrial fibrillation with a fast rate: 0.25 mg/kg IV push over 2 minutes (about 15–20 mg), then a drip at 5–15 mg/h on a pump', 'Continuous ECG and frequent BP — hold and call for low BP or a HR below the ordered limit']
  },
  amlodipine: {
    brands: 'Norvasc; combinations Lotrel (+ benazepril), Exforge (+ valsartan), Azor (+ olmesartan)',
    look: ['Small white tablets (2.5, 5, 10 mg), once a day'],
    hosp: ['A routine morning pill from the dispensing cabinet; check BP first and hold for low BP per the order', 'Check the ankles — swelling is a dose effect of the drug, not a sign of heart failure']
  },
  digoxin: {
    brands: 'Lanoxin; Digitek and Digox (generics)',
    look: ['Tiny tablets: 125 mcg (0.125 mg) is yellow and 250 mcg (0.25 mg) is white (Lanoxin and most generics)', 'Pediatric liquid 0.05 mg/mL with its own calibrated dropper — dosed in mcg, a classic decimal-error drug', 'IV: 0.25 mg/mL ampules'],
    hosp: ['Count the apical pulse for one full minute before every dose and write it on the MAR; hold for HR under 60 (adult) and call', 'Check the morning K⁺ (low K⁺ invites toxicity) and the digoxin level, drawn before the dose', 'IV: push slowly over at least 5 minutes']
  },
  lisinopril: {
    brands: 'Zestril, Prinivil, Qbrelis (liquid); combination Zestoretic (+ hydrochlorothiazide)',
    look: ['Small round tablets, 2.5–40 mg; color depends on the maker and strength — read the label, not the color'],
    hosp: ['Once-daily pill; check BP and the morning K⁺ and creatinine first', 'The first dose can drop BP — have the patient sit or lie down; ask about swelling of the face, lips or tongue (angioedema) every shift']
  },
  losartan: {
    brands: 'Cozaar; combination Hyzaar (+ hydrochlorothiazide)',
    look: ['Film-coated tablets 25, 50, 100 mg (brand Cozaar tablets are teardrop-shaped)'],
    hosp: ['Once-daily pill; check BP, K⁺ and creatinine before giving', 'Often the switch when a patient develops a dry cough on an ACE inhibitor']
  },
  arni: {
    brands: 'Entresto',
    look: ['Film-coated tablets labeled with two numbers — 24/26 mg, 49/51 mg, 97/103 mg (sacubitril/valsartan)'],
    hosp: ['Twice daily; check BP, K⁺ and creatinine first', 'Never within 36 hours of an ACE inhibitor dose — look back on the MAR for lisinopril or enalapril', 'Costly, so patients often bring their own supply; hospital policy decides whether home meds can be used']
  },
  furosemide: {
    brands: 'Lasix; Furoscix (an on-body pump that infuses it under the skin at home)',
    look: ['White tablets 20, 40, 80 mg', 'IV: 10 mg/mL vials of clear liquid — do not use if it has turned yellow (light damage)', 'Oral solution 10 mg/mL'],
    hosp: ['IV push no faster than 20 mg per minute (faster can damage hearing); big doses run as a drip on a pump', 'Give in the morning so the patient is not up all night; urinal or bedside commode within reach — fall risk', 'Daily weight (same scale, same time, same clothing), strict intake and output, and the morning K⁺ before the dose']
  },
  hctz: {
    brands: 'Microzide (capsule); hidden in many combination pills — Zestoretic, Hyzaar, Lotensin HCT, Dyazide and Maxzide (+ triamterene)',
    look: ['12.5 mg capsules and 25 or 50 mg tablets', 'In combination pills the name often ends in “HCT” or “HCTZ”'],
    hosp: ['Once in the morning; check BP, K⁺, Na⁺ and glucose', 'Check for it inside a combination pill so a second diuretic is not doubled by mistake']
  },
  spironolactone: {
    brands: 'Aldactone, CaroSpir (liquid); combination Aldactazide (+ hydrochlorothiazide)',
    look: ['Film-coated tablets 25, 50, 100 mg'],
    hosp: ['Check K⁺ before each dose — hold for high K⁺ and call', 'No potassium supplements or salt substitutes (potassium chloride) unless ordered']
  },
  nitroglycerin: {
    brands: 'Nitrostat (under-the-tongue tablets), Nitrolingual and NitroMist (spray), Nitro-Dur and Minitran (patches), Nitro-Bid (ointment)',
    look: ['Tiny white 0.4 mg tablets kept in their original brown glass bottle, tightly capped — light, heat and air weaken them', 'Spray: a small pump canister sprayed onto or under the tongue', 'Patch: a thin square stuck on the skin; ointment: squeezed onto a paper ruler, measured in inches, and spread on the skin', 'IV: premixed in a glass bottle with special non-PVC tubing'],
    hosp: ['Chest pain: check BP first, then 1 tablet under the tongue every 5 minutes, up to 3 — recheck BP and pain each time', 'Patch or ointment: wear gloves, remove the old one, use a new hairless site, write the date, time and your initials; a 10–12 hour patch-free period (usually overnight) prevents tolerance', 'Take patches off before defibrillation']
  },
  aspirin: {
    brands: 'Bayer, Ecotrin (enteric-coated), St. Joseph, many store brands',
    look: ['Low dose 81 mg: chewable (often orange-flavored) or enteric-coated (swallowed whole)', '325 mg tablets; rectal suppositories when the patient cannot swallow'],
    hosp: ['Suspected heart attack: 162–325 mg of plain (not enteric-coated) aspirin, chewed, as soon as possible', 'Daily 81 mg from the dispensing cabinet; watch for bleeding and black stools; often held before surgery per the surgeon']
  },
  clopidogrel: {
    brands: 'Plavix',
    look: ['75 mg pink round film-coated tablet (brand); 300 mg tablets for loading doses'],
    hosp: ['After a stent it is given every day with aspirin (dual antiplatelet therapy) — never stopped early without the cardiologist', 'Usually held 5 days before planned surgery — check the order', 'Watch for bleeding: gums, stool, urine, bruising']
  },
  cilostazol: {
    brands: 'Pletal (most supply is generic cilostazol)',
    look: ['Small white tablets, 50 and 100 mg'],
    hosp: ['Twice daily, 30 minutes before or 2 hours after breakfast and dinner', 'Check the problem list for heart failure — it must not be given']
  },
  heparin: {
    brands: 'Generic (many makers)',
    look: ['Vials in very different strengths that can look alike: 1,000, 5,000 and 10,000 units/mL', 'Heparin lock flush: 10 or 100 units/mL in prefilled syringes — tiny amounts to keep IV lines open', 'Premixed drip bags, for example 25,000 units in 250 or 500 mL', 'Prefilled syringes of 5,000 units for under-the-skin clot prevention'],
    hosp: ['High-alert: two nurses independently check the bag, the weight-based dose and the pump rate; smart pump with the drug library', 'Drips follow a weight-based nomogram — you change the rate by the aPTT or anti-Xa result, usually every 6 hours at first', 'Real disasters: 10,000 units/mL vials given instead of a 10 units/mL flush — read the strength every time', 'Under the skin: abdomen, no aspirating, no rubbing; watch the platelet count for HIT']
  },
  enoxaparin: {
    brands: 'Lovenox',
    look: ['Prefilled single-dose syringes with a safety shield: 30, 40, 60, 80, 100, 120, 150 mg', 'The air bubble stays in the syringe — it pushes the last of the drug in', 'Multi-dose vials (300 mg/3 mL) on some units'],
    hosp: ['Given under the skin at the “love handles”, at least 2 inches from the navel, alternating sides; pinch a skin fold and hold it through the injection; do not rub', 'Check platelets, bleeding, kidney function (the dose changes) and any spinal or epidural catheter (bleeding risk around the spine)', 'A daily 40 mg dose is one of the most common DVT-prevention orders on admission']
  },
  warfarin: {
    brands: 'Jantoven and generics (the Coumadin brand is no longer sold in the U.S., but the name is still used)',
    chips: [['1 mg', 'pink', '#f2a7c3'], ['2 mg', 'lavender', '#c7b2e8'], ['2.5 mg', 'green', '#8fd18a'], ['3 mg', 'tan', '#d9ba8c'], ['4 mg', 'blue', '#7fb3e6'], ['5 mg', 'peach', '#f7c49c'], ['6 mg', 'teal', '#4bb5ab'], ['7.5 mg', 'yellow', '#f3df6a'], ['10 mg', 'white', '#ffffff']],
    look: ['Small round scored tablets, color-coded by strength (the colors above) — the same system across makers, so a color change means a dose change', 'Patients often combine strengths to reach their dose — teach them to know their colors'],
    hosp: ['Often scheduled in the late afternoon or evening, after the day’s INR result is back, so the dose can be adjusted', 'Check today’s INR before giving; hold and call if it is above the ordered range or the patient is bleeding', 'Know where the reversal agents are: vitamin K and 4-factor PCC (Kcentra)']
  },
  apixaban: {
    brands: 'Eliquis',
    look: ['2.5 mg yellow round tablet · 5 mg pink oval tablet', 'Starter pack for a new DVT or PE: a blister card that steps from 10 mg twice daily for a week to 5 mg twice daily'],
    hosp: ['Twice daily, with no routine INR or aPTT checks; watch for bleeding and kidney function', 'Can be crushed and given in water or through a nasogastric tube', 'Held before surgery or procedures per the order; reversal agent: andexanet alfa (Andexxa)']
  },
  argatroban: {
    brands: 'Generic',
    look: ['Ready-to-use bags or vials (1 mg/mL); concentrated 250 mg/2.5 mL vials must be diluted'],
    hosp: ['A continuous IV drip on a pump for heparin-induced thrombocytopenia (HIT) — every source of heparin, including flushes, is stopped and the chart is flagged', 'aPTT results drive the rate (target about 1.5–3 times baseline)', 'It raises the INR, so switching to warfarin follows a special protocol']
  },
  alteplase: {
    brands: 'Activase (stroke, heart attack, PE) · Cathflo Activase (2 mg, to clear a clotted catheter); many stroke centers now use tenecteplase (TNKase), a single push',
    look: ['White powder in a vial (50 or 100 mg) packaged with sterile water to mix it', 'Mix by gently swirling — never shake (it foams and the protein breaks down)', 'Cathflo: a small 2 mg vial instilled into a blocked central line'],
    hosp: ['Stroke: 0.9 mg/kg (max 90 mg) — 10% as an IV push over 1 minute, the rest over 60 minutes on a pump, in the ED or ICU', 'BP must be below 185/110 before and below 180/105 after; neuro checks and vital signs every 15 minutes at first', 'No IM shots, arterial sticks or new lines; watch for bleeding and a sudden headache (bleeding in the brain)']
  },
  protamine: {
    brands: 'Generic',
    look: ['10 mg/mL vials of clear liquid, kept in the refrigerator'],
    hosp: ['1 mg reverses about 100 units of heparin; push slowly over 10 minutes (no more than 50 mg) — a fast push drops BP', 'Ask about fish allergy, protamine-containing (NPH) insulin, or vasectomy (allergy risk); have resuscitation equipment ready', 'Often given in the OR or cath lab at the end of a procedure']
  },
  vitk: {
    brands: 'Mephyton (tablets); phytonadione injection',
    look: ['5 mg tablets', 'Injection 10 mg/mL (adults) and 1 mg/0.5 mL (newborns) — protect from light'],
    hosp: ['High INR without bleeding: usually small oral doses', 'Serious bleeding: diluted in a bag and infused slowly IV (a fast IV dose can cause a severe allergic reaction), together with 4-factor PCC', 'Every newborn gets 1 mg IM in the thigh after birth']
  },
  atorvastatin: {
    brands: 'Lipitor; combination Caduet (+ amlodipine)',
    look: ['White oval film-coated tablets, 10, 20, 40, 80 mg'],
    hosp: ['Once daily at any time of day (it is long-acting, unlike simvastatin, which is given in the evening)', 'Ask about muscle pain or weakness; liver tests per order; a high dose is usually started before discharge after a heart attack']
  },
  dobutamine: {
    brands: 'Generic',
    look: ['Premixed bags in D5W; the liquid may turn faintly pink — that is oxidation and does not reduce its strength'],
    hosp: ['A continuous IV drip on a pump, titrated in mcg/kg/min, in the ICU or step-down unit with continuous ECG and frequent BP', 'Watch for a fast heart rate and new dysrhythmias; some advanced heart-failure patients go home on it with a portable pump']
  },
  hydralazine: {
    brands: 'Generic (Apresoline was the original brand); combination BiDil (+ isosorbide dinitrate)',
    look: ['Tablets 10–100 mg', 'IV: 20 mg/mL vials'],
    hosp: ['A common PRN order: “hydralazine 10 mg IV push for SBP over 160” (numbers vary) — recheck BP 15–30 minutes later', 'Expect a reflex fast heart rate and headache; check BP lying and standing before getting the patient up']
  },
  morphine: {
    brands: 'MS Contin (extended release); generic immediate-release tablets, oral solution and injection; Duramorph and Infumorph (preservative-free, for spinal use)',
    look: ['IV: prefilled syringes or vials, often 2 or 4 mg/mL', 'PCA: a large syringe or bag (often 1 mg/mL) locked in a pump that the patient controls with a button', 'Oral solution 2 mg/mL and a concentrated 20 mg/mL — confusing mg with mL has caused deaths', 'MS Contin tablets are swallowed whole — crushing releases the full 12-hour dose at once'],
    hosp: ['Controlled substance (Schedule II): pulled from the dispensing cabinet with a count; any unused part is wasted with a witness', 'Before and after: pain score, breathing rate, sedation level, SpO₂ — hold for heavy sedation or RR under 12 and call', 'Naloxone ordered and within reach; fall precautions; a bowel regimen for constipation']
  },
  kcl: {
    brands: 'Klor-Con, K-Tab (extended-release tablets); generic powder and liquid',
    look: ['Oral: large extended-release tablets (swallow whole), powder packets, or a bitter liquid mixed into juice', 'IV: premixed bags only — for example 10 mEq/100 mL, 20 mEq/100 mL (central line), or KCl already added to a maintenance bag', 'Concentrated KCl vials have been removed from patient-care units for safety'],
    hosp: ['Never IV push or IM — always diluted and on a pump, usually no faster than 10 mEq/h through a peripheral IV (faster only by central line with cardiac monitoring, per policy)', 'Check urine output and the K⁺ level first; burning at the IV site is common — follow policy (slow the rate), never ignore swelling', 'Oral: with food and a full glass of water, sitting upright']
  },
  albuterol: {
    brands: 'ProAir HFA (red holder), Ventolin HFA (blue holder), Proventil HFA; generic nebulizer vials; DuoNeb (+ ipratropium)',
    look: ['Inhaler (MDI): a small metal canister in a plastic holder with a dose counter', 'Nebulizer: clear 3 mL plastic vials (2.5 mg) twisted open and squeezed into the nebulizer cup', 'Spacer: a clear tube that fits between the inhaler and the mouth'],
    hosp: ['Respiratory therapists give many scheduled nebs; nurses give PRN doses and assess before and after', 'Check HR (it rises), breath sounds and SpO₂ before and after; shakiness is expected', 'Severe asthma: continuous nebulized albuterol in the ED or ICU']
  },
  ipratropium: {
    brands: 'Atrovent HFA; combinations DuoNeb (nebulizer) and Combivent Respimat',
    look: ['Inhaler with a dose counter; Combivent Respimat is a soft-mist inhaler (twist the base, then press the button)', 'Nebulizer vials 0.5 mg/2.5 mL; one DuoNeb vial = ipratropium 0.5 mg + albuterol 2.5 mg in 3 mL'],
    hosp: ['DuoNeb every 4–6 hours is one of the most common orders for a COPD flare', 'Keep the mist out of the eyes (blurred vision, glaucoma risk); dry mouth is expected']
  },
  tiotropium: {
    brands: 'Spiriva HandiHaler (capsules), Spiriva Respimat (soft mist)',
    look: ['HandiHaler: a capsule is placed in the device, a button pierces it, and the patient breathes the powder in — the capsule is never swallowed', 'Respimat: a cartridge inhaler that releases a slow, soft mist (2 puffs once daily)'],
    hosp: ['Once-daily maintenance, not a rescue inhaler; hospitals may substitute a formulary long-acting inhaler or let patients use their own device', 'Use teach-back for the device steps; check for dry mouth and trouble urinating']
  },
  salmeterol: {
    brands: 'Serevent Diskus; combinations Advair Diskus and Advair HFA, Wixela Inhub (generic)',
    look: ['Diskus: a round plastic disk — slide the lever to load a dose, breathe in fast and deep; a counter shows doses left', 'Advair Diskus is the well-known purple disk'],
    hosp: ['Twice-daily maintenance, never for an attack; in asthma it is always paired with an inhaled steroid', 'Rinse and spit after the combination product (the steroid causes thrush)']
  },
  fluticasone: {
    brands: 'Flovent HFA and Diskus (now largely sold as generics), Arnuity Ellipta; Flonase (nose); combinations Advair, Breo Ellipta',
    look: ['Inhaler (HFA, used with a spacer) or a dry-powder device (Diskus, Ellipta)', 'Flonase: a nasal pump spray for allergies'],
    hosp: ['Scheduled once or twice daily — a controller, not a rescue inhaler', 'Teach: rinse the mouth and spit after each use to prevent thrush and hoarseness']
  },
  prednisone: {
    brands: 'Prednisone (generic, Rayos delayed-release); methylprednisolone: Medrol (tablets), Solu-Medrol (IV)',
    look: ['Prednisone: small white scored tablets in many strengths, plus an oral solution', 'Medrol Dosepak: a blister card of 21 small 4 mg tablets that tapers over 6 days, with the days printed on the card', 'Solu-Medrol Act-O-Vial: a two-chamber vial — press the top so the liquid drops into the powder, then mix'],
    hosp: ['Give with food in the morning; asthma and COPD flares often start on IV methylprednisolone, then switch to oral prednisone', 'Expect high blood sugar — fingersticks and sliding-scale insulin are often ordered', 'Never stopped suddenly after long use — the order tapers the dose']
  },
  dexamethasone: {
    brands: 'Decadron (original brand); generic tablets, oral solution and injection',
    look: ['Tablets 0.5–6 mg; IV 4 mg/mL and 10 mg/mL vials'],
    hosp: ['Push IV doses slowly (over at least a minute) — a fast push can cause sudden burning or itching in the groin area', 'Used for airway swelling, brain swelling and severe COVID-19 (6 mg daily); check glucose']
  },
  montelukast: {
    brands: 'Singulair',
    look: ['10 mg film-coated tablet for adults; 4 and 5 mg chewable tablets and 4 mg granules for children'],
    hosp: ['Once daily in the evening; does not treat an attack', 'Ask about mood changes, nightmares or suicidal thoughts (boxed warning) and report them']
  },
  theophylline: {
    brands: 'Theo-24, Elixophyllin; aminophylline is the IV form',
    look: ['Extended-release tablets and capsules — swallow whole', 'IV aminophylline as a drip on a pump (rare today)'],
    hosp: ['A blood level keeps it in range (about 10–20 mcg/mL; some references use 5–15)', 'Toxicity looks like too much caffeine — nausea, restlessness, fast HR — then seizures and dysrhythmias; limit coffee and cola']
  },
  omalizumab: {
    brands: 'Xolair',
    look: ['Prefilled syringes or auto-injectors (75, 150 or 300 mg), or a powder vial to mix; kept in the refrigerator', 'One or more under-the-skin injections every 2–4 weeks; the liquid is thick, so it goes in slowly'],
    hosp: ['Usually given in a clinic with the patient watched afterward for anaphylaxis (commonly 2 hours after early doses, 30 minutes later on)', 'Patients are taught to carry an epinephrine auto-injector']
  },
  roflumilast: {
    brands: 'Daliresp',
    look: ['Small tablet once daily (250 mcg to start, then 500 mcg)'],
    hosp: ['An oral pill for severe COPD with chronic bronchitis — not a bronchodilator and not for a flare', 'Weigh the patient regularly (weight loss) and ask about mood and sleep changes']
  },
  dornase: {
    brands: 'Pulmozyme',
    look: ['Single-use plastic ampules (2.5 mg/2.5 mL), kept in the refrigerator and away from light'],
    hosp: ['Inhaled by nebulizer once or twice daily — never mixed with other drugs in the nebulizer cup', 'Part of the cystic fibrosis airway routine: bronchodilator first, then dornase, then airway clearance (vest or chest physiotherapy)']
  },
  ivacaftor: {
    brands: 'Kalydeco; combination Trikafta (elexacaftor/tezacaftor/ivacaftor)',
    look: ['Kalydeco tablets, and granule packets for young children', 'Trikafta: 2 orange combination tablets in the morning and 1 light-blue ivacaftor tablet in the evening, about 12 hours apart'],
    hosp: ['Must be taken with fat-containing food (eggs, butter, peanut butter, whole milk)', 'Liver tests and eye exams (cataracts in children); no grapefruit; many drug interactions']
  },
  bosentan: {
    brands: 'Tracleer',
    look: ['Film-coated tablets 62.5 and 125 mg; 32 mg tablets that dissolve in water for children'],
    hosp: ['A specialty drug with a restricted-distribution safety program (REMS): monthly liver tests, and monthly pregnancy tests for anyone who can become pregnant', 'Usually the patient’s own supply; check hemoglobin and swelling']
  },
  sildenafil: {
    brands: 'Revatio (pulmonary hypertension) · Viagra (erectile dysfunction) — same drug, different doses',
    look: ['Revatio: 20 mg white round tablet, oral suspension, and an IV form', 'Viagra: the familiar blue diamond-shaped tablet'],
    hosp: ['For pulmonary hypertension it is given three times daily, about 6–8 hours apart', 'Check the MAR for any nitrate (nitroglycerin, isosorbide) — together they can crash the BP; flag it in the chart']
  },
  epoprostenol: {
    brands: 'Flolan, Veletri',
    look: ['Powder vials mixed into a cassette or reservoir', 'Runs 24 hours a day through a small portable pump (often carried in a bag) connected to a tunneled central line'],
    hosp: ['Never stop or pause it, never flush or draw blood from its line, never run other drugs into it — it lasts only minutes in the body, so a pause causes a rebound pulmonary-hypertension crisis', 'The patient carries a backup pump and spare cassette; if the line fails, start a peripheral IV right away per protocol', 'Only the pulmonary-hypertension team changes the dose; continue the home rate unless ordered']
  },
  nintedanib: {
    brands: 'Ofev',
    look: ['Soft capsules, 100 and 150 mg — swallowed whole with food, never chewed or opened'],
    hosp: ['Twice daily, about 12 hours apart, with food', 'Diarrhea is the most common problem (loperamide, fluids); liver tests; avoid in pregnancy']
  },
  oxymetazoline: {
    brands: 'Afrin (12-hour) and many store brands',
    look: ['Over-the-counter nasal pump spray'],
    hosp: ['Used in the ED and by ENT for nosebleeds: sprayed in, or soaked into cotton pledgets before packing', 'Teach: no more than 3 days at home — longer causes rebound congestion']
  },
  isoniazid: {
    brands: 'Generic; combinations Rifamate (+ rifampin) and Rifater (+ rifampin + pyrazinamide)',
    look: ['White tablets 100 and 300 mg; also a syrup'],
    hosp: ['Given with vitamin B6 (pyridoxine) to prevent nerve damage', 'Often directly observed therapy (DOT): the nurse watches the patient swallow every dose', 'Active TB: airborne isolation room (negative pressure) and an N95 respirator for staff until cleared']
  },
  rifampin: {
    brands: 'Rifadin',
    look: ['Red-maroon capsules (150 and 300 mg); the IV powder mixes into a red-orange liquid'],
    hosp: ['On an empty stomach (1 hour before or 2 hours after meals)', 'Warn the patient: urine, sweat, tears and saliva turn red-orange (harmless) and soft contact lenses can stain', 'A major interaction drug — it weakens warfarin, birth-control pills and many HIV drugs']
  },
  pyrazinamide: {
    brands: 'Generic',
    look: ['White 500 mg scored tablets'],
    hosp: ['Usually only for the first 2 months of TB treatment', 'Check liver tests and uric acid (gout flares); report joint pain or yellow skin']
  },
  ethambutol: {
    brands: 'Myambutol',
    look: ['Tablets, 100 and 400 mg'],
    hosp: ['Eye checks before and during treatment: sharpness and red–green color vision', 'Report blurred vision or trouble telling red from green right away']
  },
  oseltamivir: {
    brands: 'Tamiflu',
    look: ['Capsules 30, 45 and 75 mg (75 mg is the adult dose); a fruit-flavored liquid for children'],
    hosp: ['Best started within 48 hours of symptoms — but hospitalized patients get it no matter how long they have been sick', 'Droplet precautions; give with food to reduce nausea', 'Watch children and teens for confusion or unusual behavior']
  },
  remdesivir: {
    brands: 'Veklury',
    look: ['Powder vial (100 mg) mixed and then diluted in a 100 or 250 mL saline bag'],
    hosp: ['IV infusion over 30–120 minutes, once daily for 3–10 days depending on how sick the patient is', 'Watch for infusion reactions (low BP, fast HR, rash, shivering) — slow or stop per protocol; check liver and kidney labs', 'COVID-19 isolation: gown, gloves, N95 respirator and eye protection']
  },
  paxlovid: {
    brands: 'Paxlovid',
    look: ['A 5-day blister card: each dose is 2 pink nirmatrelvir tablets + 1 white ritonavir tablet, morning and evening', 'Kidney-dose pack: 1 pink + 1 white per dose'],
    hosp: ['Start within 5 days of symptoms', 'Pharmacy screens every home med first — ritonavir blocks liver enzymes (CYP3A) and can push statins, some heart and seizure drugs, and anticoagulants to toxic levels']
  },
  ceftriaxone: {
    brands: 'Rocephin (original brand); generic',
    look: ['Powder vials (500 mg, 1 g, 2 g); once mixed, the liquid is pale yellow to amber', 'Some hospitals use two-chamber bags you activate by squeezing, or frozen premixed bags'],
    hosp: ['IV piggyback (a small bag) over about 30 minutes, usually once daily', 'IM: mixed with lidocaine if ordered, given deep into a large muscle', 'Never run it in the same line as calcium-containing fluids (like lactated Ringer’s) — crystals form; ask about penicillin or cephalosporin allergy first']
  },
  azithromycin: {
    brands: 'Zithromax; the Z-Pak (5-day pack)',
    look: ['Z-Pak: a card of 6 tablets (250 mg) — 2 on day 1, then 1 a day for 4 days', 'Liquid for children; IV 500 mg vial'],
    hosp: ['IV runs over at least 1 hour and is never pushed', 'Check the QT and K⁺/Mg²⁺ in heart patients; often paired with ceftriaxone for community-acquired pneumonia']
  },
  ciprofloxacin: {
    brands: 'Cipro',
    look: ['White film-coated tablets (250, 500, 750 mg)', 'IV: premixed bag, 400 mg in 200 mL'],
    hosp: ['IV runs over 60 minutes into a large vein', 'Oral doses go 2 hours before or 6 hours after antacids, calcium, iron, zinc or dairy', 'Ask about tendon pain (Achilles) and check glucose in diabetes; avoid in myasthenia gravis']
  },
  doxycycline: {
    brands: 'Vibramycin, Doryx, Monodox, Acticlate',
    look: ['Capsules or tablets, often 100 mg twice daily', 'IV powder vial (protect the bag from light)'],
    hosp: ['Oral: a full glass of water and stay upright 30 minutes (it can burn the esophagus) — not right before bed', 'Separate from antacids, iron and calcium; sun protection; generally avoided in pregnancy and children under 8 (tooth staining)']
  },
  amphob: {
    brands: 'AmBisome (liposomal), Abelcet (lipid complex); conventional amphotericin B deoxycholate (generic)',
    look: ['Yellow powder in a vial that mixes into a yellow liquid', 'The products are dosed very differently — conventional about 0.3–1 mg/kg, liposomal 3–6 mg/kg; mix-ups have killed patients'],
    hosp: ['A slow IV infusion on a pump (about 2 hours for liposomal, 2–6 hours for conventional)', 'Premedicate per order (acetaminophen, diphenhydramine, sometimes hydrocortisone; meperidine for rigors) — fever and shaking chills are common', 'Saline before the dose protects the kidneys; check creatinine, K⁺ and Mg²⁺ daily']
  },
  itraconazole: {
    brands: 'Sporanox, Tolsura',
    look: ['Capsules and an oral solution — they are not interchangeable'],
    hosp: ['Capsules with a full meal; the solution on an empty stomach', 'Check for heart failure (boxed warning) and review the medication list for interactions; liver tests']
  },
  ferrous: {
    brands: 'Feosol, Slow Fe, Fer-In-Sol (drops), many store brands',
    look: ['325 mg tablets (65 mg of elemental iron), small and often red- or brown-coated', 'Liquid drops stain teeth — use a straw, or a dropper aimed toward the back of the mouth'],
    hosp: ['Best absorbed on an empty stomach (with food if it upsets the stomach) and with vitamin C or orange juice — not with milk, antacids or tea', 'Expect dark green-black stools; teach the difference from black, tarry, sticky stools (bleeding)', 'Store away from children — iron overdose is a leading cause of poisoning deaths in young children']
  },
  irondex: {
    brands: 'INFeD (iron dextran) · Venofer (iron sucrose); others include Injectafer, Feraheme and Monoferric',
    look: ['Dark brown liquid in vials (iron dextran 50 mg/mL, iron sucrose 20 mg/mL)'],
    hosp: ['Iron dextran: a small test dose first, with emergency drugs and equipment at the bedside — anaphylaxis risk', 'Iron sucrose: a slow IV push or short infusion, often during dialysis', 'If IM iron dextran is ordered: Z-track into a large muscle so it does not stain the skin']
  },
  b12: {
    brands: 'Cyanocobalamin injection (generic); Nascobal (nasal spray)',
    look: ['Injection 1,000 mcg/mL — a bright red liquid', 'Also high-dose tablets and a nasal spray'],
    hosp: ['Pernicious anemia: IM injections daily or weekly at first, then monthly for life', 'Check potassium early when treating severe anemia — new red cells pull K⁺ into cells']
  },
  folic: {
    brands: 'Generic; also in prenatal vitamins',
    look: ['Small yellow tablets (1 mg by prescription; 0.4–0.8 mg over the counter)'],
    hosp: ['Once daily; B12 deficiency must be ruled out first — folate alone can fix the anemia while B12 nerve damage continues', 'Common in admissions for alcohol use disorder, with thiamine and a multivitamin']
  },
  epoetin: {
    brands: 'Epogen, Procrit, Retacrit (biosimilar); longer-acting darbepoetin (Aranesp)',
    look: ['Vials or prefilled syringes of clear liquid, kept in the refrigerator — do not shake'],
    hosp: ['Check the hemoglobin before each dose and hold above the ordered level; check BP — it can rise', 'Dialysis patients often get it IV during dialysis; others get it under the skin', 'Iron levels are checked too — it does not work without enough iron']
  },
  filgrastim: {
    brands: 'Neupogen; biosimilars Zarxio and Nivestym; long-acting pegfilgrastim = Neulasta (including the Onpro on-body injector)',
    look: ['Prefilled syringes (300 mcg/0.5 mL, 480 mcg/0.8 mL), kept in the refrigerator', 'Neulasta Onpro: a small device stuck to the arm or belly after chemotherapy that injects the dose on its own about 27 hours later'],
    hosp: ['Given daily under the skin until the neutrophil count recovers; CBC daily', 'Bone pain is expected (often treated with acetaminophen or loratadine); report left upper belly or shoulder-tip pain (spleen)', 'Not given within 24 hours before or after chemotherapy']
  },
  hydroxyurea: {
    brands: 'Droxia (sickle cell), Hydrea (cancer), Siklos (tablets)',
    look: ['Capsules (Droxia 200, 300, 400 mg; Hydrea 500 mg) — never opened'],
    hosp: ['Hazardous drug: wear gloves to handle the capsules, caregivers wash their hands, and anyone pregnant avoids touching it', 'Regular CBC (it lowers neutrophils and platelets); reliable contraception', 'Raises fetal hemoglobin over months — fewer pain crises; it does not treat a crisis in progress']
  }
};
