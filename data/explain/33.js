// Full explanations for ch 33 questions (several are filed under ch 34 in the Mastery Loop). Format: see explain/22.js.
window.EXPLAIN = window.EXPLAIN || {};
Object.assign(window.EXPLAIN, {
  '33|n|0': {
    ask: 'Which actions prevent bleeding when platelets are very low?',
    cues: ['Platelets 22,000 (normal 150,000–400,000)', 'Below 50,000 → bleeding precautions; below 20,000 → spontaneous bleeding risk'],
    r: {
      0: 'Correct. Soft bristles clean without cutting the gums, which bleed easily when platelets cannot plug small breaks.',
      1: 'Correct. An electric razor cannot nick the skin the way a blade can.',
      2: 'Correct. An IM needle tears small vessels deep in muscle, where a bleed spreads unseen into a hematoma. Use oral or IV routes.',
      3: 'Incorrect. A rectal thermometer can scrape the rectal lining and cause bleeding. Use oral, tympanic or temporal routes.',
      4: 'Correct. With few platelets the plug forms slowly, so hold pressure longer (5–10 minutes) after any needle stick.',
      5: 'Incorrect. Flossing cuts into the gums and starts bleeding. It is avoided until platelets recover.'
    },
    phys: 'An injured vessel → platelets stick to the exposed wall and clump into the first plug within minutes → clotting factors then build a fibrin mesh on top. With very few platelets → the first plug forms slowly or not at all → even small injuries keep bleeding.',
    rule: 'Low platelets: prevent trauma — soft brush, electric razor, no IM, no rectal, no flossing, no NSAIDs; hold pressure longer.'
  },
  '33|n|1': {
    ask: 'Which actions protect a client with almost no neutrophils from infection, and catch infection early?',
    cues: ['ANC 400 (under 500 = severe neutropenia)', 'Without neutrophils, fever may be the only sign'],
    r: {
      0: 'Correct. Hands are the main route germs reach the client. Hand hygiene is the single most important precaution.',
      1: 'Correct. A private room limits exposure to other clients’ organisms.',
      2: 'Correct. Frequent temperatures catch fever early — often the only sign of infection.',
      3: 'Correct. A temperature of 38°C or higher in a neutropenic client is an emergency: cultures and antibiotics within an hour.',
      4: 'Incorrect. A mask does not make a sick visitor safe for someone with no neutrophils. Anyone with an infection stays away.',
      5: 'Correct. Rectal thermometers, suppositories and enemas can break the lining and let gut bacteria into the blood.'
    },
    phys: 'Neutrophils are the first responders to bacteria and fungi. ANC 400 → very few responders → germs multiply unchecked. They are also what make pus, redness and swelling, so infections hide — fever may be the only clue.',
    rule: 'Neutropenia: hand hygiene, private room, no sick visitors, no rectal anything, temperature checks, fever ≥38°C = emergency.'
  },
  '33|n|2': {
    ask: 'Calculate the ANC and decide how much infection risk it means.',
    cues: ['WBC 2,000', 'Segs 15% + bands 5% = 20% neutrophils', 'Lymphocytes are not neutrophils'],
    r: {
      0: 'Correct. 2,000 × (0.15 + 0.05) = 2,000 × 0.20 = 400. Under 500 is severe neutropenia — very high infection risk.',
      1: 'Incorrect. 1,400 would come from adding the lymphocytes (70%). Lymphocytes are not neutrophils and are not counted.',
      2: 'Incorrect. That is the total WBC. The ANC counts only the neutrophils (segs + bands).',
      3: 'Incorrect. 300 would use segs alone (2,000 × 0.15). Bands are young neutrophils and are included.'
    },
    phys: 'The WBC is all white cells. Neutrophils (mature segs + young bands) are the bacteria fighters, so the ANC is what predicts infection risk: >1,500 normal, 1,000–1,500 mild, 500–1,000 moderate, <500 severe.',
    rule: 'ANC = WBC × (% segs + % bands). Under 500 = severe neutropenia → neutropenic precautions.'
  },
  '33|n|3': {
    ask: 'Which findings after a bone marrow biopsy mean bleeding rather than normal soreness?',
    cues: ['Platelets 38,000 → slow clotting', 'Dressing now saturated, swelling expanding', 'HR 84 → 102, BP 124 → 108'],
    r: {
      0: 'Correct. A saturated dressing means the site is actively bleeding.',
      1: 'Correct. Expanding swelling is a hematoma growing under the skin — blood collecting from the puncture.',
      2: 'Correct. Rising HR with falling BP is the body compensating for blood loss — early hypovolemia.',
      3: 'Expected. Mild aching where the needle entered bone is normal for a day or two.'
    },
    phys: 'The needle passes through bone into vascular marrow. With low platelets → the puncture keeps oozing → blood soaks the dressing and collects under the skin → enough loss lowers preload → HR rises, BP falls.',
    rule: 'After bone marrow biopsy: pressure and monitoring; soreness is expected; saturated dressing, growing swelling or vital-sign changes need follow-up.'
  },
  '33|n|4': {
    ask: 'Where is bone marrow usually taken from in adults?',
    cues: ['Safe, easy to reach, rich in red marrow'],
    r: {
      0: 'The lumbar spine sits near the spinal cord and is not used for marrow sampling.',
      1: 'Correct. The posterior iliac crest is rich in red marrow, close to the skin and far from major organs and vessels.',
      2: 'The greater trochanter is not a standard marrow site.',
      3: 'The ischial tuberosity is not used for marrow sampling.'
    },
    phys: 'In adults, red (blood-making) marrow is concentrated in flat bones — pelvis, sternum, vertebrae. The posterior iliac crest is large, close to the skin and far from vital organs.',
    rule: 'Bone marrow aspiration/biopsy: posterior iliac crest (sternum for aspiration only).'
  },
  '33|n|5': {
    ask: 'Rank these hematology clients from most to least dangerous.',
    cues: ['Neutropenic fever → sepsis', 'Active bleeding with very low platelets', 'Stable anemia', 'Therapeutic INR with no bleeding'],
    r: {
      2: 'Third: Hgb 7.8 with fatigue but stable vital signs is compensated — it needs attention, not rescue.',
      3: 'Last: INR 2.5 on warfarin is in the therapeutic range with no bleeding — this is the goal.'
    },
    phys: 'Neutropenic fever can turn into septic shock within hours. Gum bleeding with platelets of 15,000 can progress to serious hemorrhage. Anemia with stable vitals is compensated. INR 2.5 on warfarin is the goal, not a problem.',
    rule: 'Rank by threat to life: infection without defenses → active bleeding → stable symptoms → expected findings.'
  },
  '33|n|6': {
    ask: 'For each value: normal or needs follow-up?',
    cues: ['Hgb 12–16 (F)', 'Platelets 150,000–400,000', 'WBC 5,000–10,000', 'INR target 2–3 on warfarin for AF', 'aPTT 30–40 s without anticoagulants'],
    rows: {
      0: 'Normal. 13.5 is within the female range of 12–16 g/dL.',
      1: 'Needs follow-up. 90,000 is below 150,000 — thrombocytopenia. Look for a cause and watch for bleeding.',
      2: 'Normal. 7,200 is within 5,000–10,000.',
      3: 'Needs follow-up. 3.8 is above the usual 2–3 target for AF — higher bleeding risk.',
      4: 'Normal. 34 seconds is within 30–40 seconds for someone not on heparin.'
    },
    phys: 'Low platelets → the first plug forms poorly → bleeding. A supratherapeutic INR → too few vitamin K–dependent factors → bleeding. Normal values need no action.',
    rule: 'Know the numbers: Hgb 12–16 F / 14–18 M; WBC 5,000–10,000; platelets 150,000–400,000; INR 0.8–1.1 (2–3 on warfarin); aPTT 30–40 s.'
  },
  '33|n|7': {
    ask: 'Name the emergency, choose what treats it fast, and pick what tracks the response.',
    cues: ['On chemotherapy', 'ANC 200', 'T 38.4°C', 'HR 118, BP 96/58', 'No localizing signs — expected with no neutrophils'],
    cond: {
      1: 'Incorrect. No transfusion is running, so a transfusion reaction is impossible.',
      2: 'Incorrect. Dehydration can raise HR and lower BP but does not cause fever.',
      3: 'Incorrect. In a neutropenic client, fever is treated as infection until proven otherwise — calling it drug fever risks missing sepsis.'
    },
    act: {
      0: 'Correct. Draw cultures, then start broad-spectrum antibiotics promptly (goal within 1 hour). Each hour of delay raises mortality.',
      1: 'Correct. Neutropenic precautions stop new organisms reaching the client.',
      2: 'Incorrect. Without neutrophils the body cannot make a big fever. 38.4°C with tachycardia and falling BP already needs action.',
      3: 'Incorrect. Rectal medications can tear the lining and let gut bacteria into the blood. Use another route.',
      4: 'Incorrect. Fresh flowers and plants carry bacteria and fungi in their water and soil.'
    },
    mon: {
      0: 'Correct. Falling temperature and HR show the infection is responding to antibiotics.',
      1: 'Correct. A MAP falling below 65 means septic shock; a rising MAP shows fluids and antibiotics are working.',
      2: 'Incorrect. A1C is a 3-month glucose measure, not an acute sepsis marker.',
      3: 'Incorrect. Pupils are a neuro check, not a sepsis parameter.',
      4: 'Incorrect. Pedal pulses do not track the response to sepsis treatment.'
    },
    phys: 'Chemo kills fast-dividing marrow cells → neutrophils fall → bacteria (often from the client’s own gut and skin) enter the blood unchallenged → sepsis → vasodilation → tachycardia and falling BP. With no neutrophils there is no pus or redness, so fever may be the only sign.',
    rule: 'Neutropenic fever: cultures and antibiotics within an hour, neutropenic precautions, track temperature, HR and MAP.'
  },
  '33|n|8': {
    ask: 'Match each anticoagulant to its lab and know the target INR.',
    blanks: {
      1: 'INR. Warfarin lowers the vitamin K–dependent factors measured by the PT/INR. The aPTT tracks heparin.',
      3: 'aPTT or anti-Xa. Unfractionated heparin acts through antithrombin on thrombin and Xa, which the aPTT (or anti-Xa level) measures.',
      5: '2–3. That is the usual therapeutic INR (higher, about 2.5–3.5, for mechanical valves). 0.8–1.1 is normal without warfarin; 5–6 is dangerously high.'
    },
    phys: 'Warfarin → fewer factors II, VII, IX, X → PT/INR rises. Heparin → antithrombin blocks thrombin and Xa → aPTT rises.',
    rule: 'Warfarin = INR (target 2–3). Heparin = aPTT/anti-Xa.'
  },
  '33|c|0': {
    ask: 'What is the priority for a client with platelets of 35,000?',
    cues: ['Platelets 35,000 — below 50,000'],
    r: {
      0: 'Correct. Below 50,000, bleeding precautions protect the client from injuries that will not stop bleeding.',
      1: 'Incorrect. Flossing cuts the gums and causes bleeding.',
      2: 'Incorrect. IM injections can cause deep muscle hematomas; use other routes.',
      3: 'Incorrect. Rectal temperatures can tear the rectal lining and cause bleeding.'
    },
    phys: 'Platelets form the first plug at an injured vessel. Too few → small injuries keep bleeding → a hematoma, gum bleeding or GI bleed.',
    rule: 'Thrombocytopenia → bleeding precautions: no IM, no rectal, no flossing, no razors, no NSAIDs.'
  },
  '33|c|1': {
    ask: 'Which client could become septic within hours?',
    cues: ['ANC 300 + temperature 38.3°C'],
    r: {
      0: 'Correct. Neutropenic fever: with almost no neutrophils, an infection can become septic shock within hours. Cultures and antibiotics now.',
      1: 'Hgb 10.5 with fatigue is a stable, chronic anemia.',
      2: 'INR 2.4 on warfarin is therapeutic.',
      3: 'Mild aching after a bone marrow biopsy is expected.'
    },
    phys: 'No neutrophils → bacteria multiply unchecked → bloodstream infection → sepsis → shock.',
    rule: 'Neutropenic fever is an emergency — see that client first.'
  },
  '33|c|2': {
    ask: 'Which findings come from too little oxygen-carrying capacity?',
    cues: ['Anemia = less hemoglobin = less O₂ delivered'],
    r: {
      0: 'Correct. The heart beats faster to move the smaller amount of oxygen around more often.',
      1: 'Correct. Less red hemoglobin in the skin and mucous membranes → pallor.',
      2: 'Correct. Activity raises oxygen demand beyond what the reduced hemoglobin can supply → breathlessness.',
      3: 'Incorrect. Anemia speeds the heart; bradycardia is not a compensation for low oxygen.',
      4: 'Correct. Tissues get less oxygen and make less energy → fatigue.'
    },
    phys: 'Low Hgb → less oxygen carried per liter of blood → tissues short of oxygen → the heart speeds up and the client breathes harder to compensate → fatigue, pallor, dyspnea on exertion.',
    rule: 'Anemia: fatigue, pallor, tachycardia, dyspnea on exertion — all from low oxygen delivery.'
  },
  '33|c|3': {
    ask: 'Which lab guides heparin dosing?',
    cues: ['Heparin → aPTT'],
    r: {
      0: 'PT/INR monitors warfarin, not heparin.',
      1: 'Correct. aPTT (or anti-Xa per protocol) measures heparin’s effect and guides the drip rate.',
      2: 'Hgb shows whether the client is bleeding, but it does not tell you whether the heparin dose is right.',
      3: 'Reticulocytes show how fast the marrow makes red cells — unrelated to heparin dosing.'
    },
    phys: 'Heparin boosts antithrombin → thrombin and Xa are blocked → the intrinsic/common pathway slows → aPTT lengthens. Too long → bleeding; too short → clots.',
    rule: 'Heparin = aPTT (or anti-Xa). Warfarin = INR.'
  },
  '33|c|4': {
    ask: 'Which supplement adds to bleeding risk?',
    cues: ['Low platelets → avoid anything that impairs platelets'],
    r: {
      0: 'Correct. Ginkgo interferes with platelet function, adding to the bleeding risk of a low count. (Garlic, ginger and fish oil also affect clotting.)',
      1: 'Vitamin D does not affect platelets.',
      2: 'Calcium does not impair platelet function.',
      3: 'Fiber does not affect clotting.'
    },
    phys: 'Ginkgo blocks platelet-activating factor → platelets stick less → with an already low count, bleeding is more likely.',
    rule: 'Ask about herbals: ginkgo, garlic, ginger, ginseng, fish oil can raise bleeding risk.'
  },
  '33|c|5': {
    ask: 'What comes first after a bone marrow aspiration?',
    cues: ['Bone marrow is vascular', 'Clients often have low platelets'],
    r: {
      0: 'Correct. Apply pressure (longer if platelets are low) and watch the site for bleeding.',
      1: 'Walking can come later; hemostasis comes first.',
      2: 'Aspirin impairs platelets and increases bleeding. Acetaminophen is preferred.',
      3: 'Removing the dressing early disturbs the clot.'
    },
    phys: 'The needle enters vascular marrow → bleeding until a plug forms → low platelets slow that plug.',
    rule: 'After any puncture in a client with low platelets: pressure, monitor, no aspirin.'
  },
  '33|c|6': {
    ask: 'Which task for a neutropenic client is routine measurement?',
    cues: ['AP → collect and report data'],
    r: {
      0: 'Correct. Taking a temperature on schedule and reporting it is routine data collection.',
      1: 'Assessing for infection requires nursing judgment.',
      2: 'Teaching is a nursing responsibility.',
      3: 'Drawing blood cultures depends on role and policy and is not an AP task.'
    },
    phys: 'Fever may be the only sign of infection in neutropenia, so frequent temperatures matter; AP can take them, the nurse acts on them.',
    rule: 'AP measure and report; the nurse assesses, teaches and acts.'
  },
  '33|c|7': {
    ask: 'Low hemoglobin with a high reticulocyte count: what is the marrow telling you?',
    cues: ['Retics = young red cells = marrow response'],
    r: {
      0: 'Correct. The marrow is working hard to replace red cells that are being lost (bleeding) or destroyed (hemolysis).',
      1: 'In aplastic anemia the marrow has failed, so retics are low.',
      2: 'Untreated iron deficiency means the marrow lacks building material, so retics are low.',
      3: 'Low Hgb is not normal.'
    },
    phys: 'Red cells are lost or destroyed → the kidney senses less oxygen → releases EPO → a healthy marrow speeds production → more young cells (retics) in the blood.',
    rule: 'Low Hgb + high retics = loss or destruction (marrow OK). Low Hgb + low retics = production problem.'
  }
});
window.EXPLAIN_CH = window.EXPLAIN_CH || {}; window.EXPLAIN_CH['33'] = 1;
