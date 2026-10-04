// Full explanations for ch 30 questions. Format: see explain/22.js.
window.EXPLAIN = window.EXPLAIN || {};
Object.assign(window.EXPLAIN, {
  '30|n|0': {
    ask: 'Which actions break Virchow’s triad after surgery — keep blood moving and stop clotting?',
    cues: ['Post-op → stasis (bed rest), vessel injury (surgery), hypercoagulability (inflammation)'],
    r: {
      0: 'Correct. Walking squeezes calf muscles around the deep veins, pumping blood back to the heart so it cannot pool and clot.',
      1: 'Correct. SCDs inflate and deflate around the legs, imitating the calf muscle pump in a client who cannot walk.',
      2: 'Incorrect. A pillow under the knees presses on the popliteal vein behind the knee and slows return — it promotes clots.',
      3: 'Correct. Prophylactic enoxaparin or heparin lowers clotting ability during the high-risk period.',
      4: 'Correct. Ankle pumps contract the calf muscle — a muscle pump the client can do in bed.',
      5: 'Incorrect. Crossed legs compress veins and slow blood return.'
    },
    phys: 'Virchow’s triad: slow blood (bed rest) + damaged vessel wall (surgery) + blood that clots easily (post-op inflammation) → clot forms in a deep leg vein. Movement, compression and anticoagulants each break one side of the triad.',
    rule: 'Prevent DVT: early walking, ankle pumps, SCDs, anticoagulant prophylaxis; no pillows under knees, no crossed legs.'
  },
  '30|n|1': {
    ask: 'How is a hypertensive emergency lowered safely while watching for organ damage?',
    cues: ['BP 228/134', 'Headache + blurred vision = target-organ symptoms (brain, eyes)'],
    r: {
      0: 'Correct. The BP is lowered with titrated IV drugs, so it must be watched continuously (often with an arterial line).',
      1: 'Correct. A titratable IV drug (for example nicardipine, clevidipine or labetalol) lets the team lower BP in controlled steps.',
      2: 'Incorrect. The brain has adjusted to high pressure. Dropping BP to normal fast starves the brain, heart and kidneys. Lower MAP by about 25% or less in the first hour.',
      3: 'Correct. Watch for stroke or hypertensive encephalopathy: confusion, weakness, worse headache, seizures.',
      4: 'Correct. Chest pain suggests heart strain or ischemia; low urine suggests kidney injury — both are target-organ damage.',
      5: 'Incorrect. A client with a BP this high and neuro symptoms stays in bed on fall and seizure precautions.'
    },
    phys: 'Chronically high BP → the brain’s vessels reset (autoregulation) to keep flow normal at that pressure. Very high BP → vessels are damaged and leak (encephalopathy, retinal bleeding). But a sudden drop below the reset point → the brain receives too little flow → ischemic stroke.',
    rule: 'Hypertensive emergency: IV titrated drug, continuous BP, lower MAP ≤25% in the first hour, watch brain, heart, kidneys and eyes.'
  },
  '30|n|2': {
    ask: 'What explains a new clot while the client is on heparin with falling platelets?',
    cues: ['Platelets 248,000 → 96,000 by day 7 — more than a 50% drop', 'New calf swelling and pain = new DVT', 'aPTT therapeutic = the distractor'],
    r: {
      0: 'Incorrect. The aPTT only shows heparin is working as an anticoagulant. The platelet drop plus a new clot means heparin itself is causing harm.',
      1: 'Correct. This is heparin-induced thrombocytopenia (HIT). Stop all heparin (including flushes), notify, and expect a non-heparin anticoagulant such as argatroban.',
      2: 'Incorrect. Protamine reverses heparin’s anticoagulation, but HIT is a clotting problem — the client still needs anticoagulation, just not heparin.',
      3: 'Incorrect. In HIT, platelets are being activated into clots. Giving more platelets can feed more clotting.'
    },
    phys: 'Heparin binds platelet factor 4 (PF4) → the body makes antibodies against that complex (usually days 5–10) → antibodies activate platelets → platelets clump into clots and are used up → low platelets AND new clots.',
    rule: 'HIT: platelets fall >50% around days 5–10 of heparin, often with new clots → stop all heparin, start a direct thrombin inhibitor.'
  },
  '30|n|3': {
    ask: 'Which findings show that not enough arterial blood is reaching the leg?',
    cues: ['Pale, shiny, hairless, cool', 'Pulse only by Doppler', 'Deep round ulcer on the toe', 'Calf pain after walking, relieved by rest', 'No edema'],
    r: {
      0: 'Correct. Without enough blood, skin thins and hair follicles die → pale, shiny, hairless skin.',
      1: 'Correct. Less warm arterial blood reaches the leg, so it feels cool — compare it with the other leg.',
      2: 'Correct. A pulse you can only hear with Doppler means very little flow is getting through.',
      3: 'Correct. Arterial ulcers form at the farthest points (toes, heels), are deep and round, with a pale base. Venous ulcers form near the ankle.',
      4: 'Correct. Claudication is muscle pain when exertion raises oxygen demand that narrowed arteries cannot meet; rest lowers demand and the pain stops.'
    },
    phys: 'Plaque narrows leg arteries → less oxygen-rich blood gets in → skin, hair and nails starve → muscles cramp when demand rises → tissue at the farthest points breaks down into ulcers.',
    rule: 'Arterial = cool, pale, hairless, weak pulses, toe ulcers, claudication. Venous = warm, edematous, brown, ankle ulcers.'
  },
  '30|n|4': {
    ask: 'Where on the foot is the dorsalis pedis pulse?',
    cues: ['“Dorsalis” = top (dorsum) of the foot'],
    r: {
      0: 'Behind the inside ankle bone is the posterior tibial pulse.',
      1: 'Correct. The dorsalis pedis is on the top of the foot, just lateral to the tendon of the big toe.',
      2: 'Behind the knee is the popliteal pulse — a different artery, higher in the leg.',
      3: 'The groin is the femoral pulse — the artery that feeds the whole leg.'
    },
    phys: 'The dorsalis pedis artery runs over the top of the foot, just lateral to the big-toe tendon. It is the farthest pulse from the heart, so it weakens first when leg arteries narrow or a graft closes.',
    rule: 'Pulses: femoral (groin), popliteal (behind knee), posterior tibial (behind medial malleolus), dorsalis pedis (top of foot).'
  },
  '30|n|5': {
    ask: 'What is the safe order for a sudden suspected pulmonary embolism?',
    cues: ['Sudden dyspnea + chest pain + SpO₂ 85%'],
    r: {
      5: 'Last: document the event, actions and response once the client is stable.'
    },
    phys: 'A clot from the legs lodges in a pulmonary artery → that part of the lung gets air but no blood (dead space) → hypoxemia → the right ventricle strains against the blockage → tachycardia, then shock.',
    rule: 'Suspected PE: stay, sit up, oxygen, call for help, vital signs, prepare for anticoagulation and CT, then document.'
  },
  '30|n|6': {
    ask: 'Which lab monitors each anticoagulant?',
    cues: ['Heparin → aPTT (or anti-Xa)', 'Warfarin → INR', 'DOACs → no routine lab'],
    rows: {
      0: 'aPTT or anti-Xa. Heparin works through antithrombin on the intrinsic/common pathway, which the aPTT measures. Target is often 1.5–2.5 × control.',
      1: 'INR. Warfarin lowers vitamin K–dependent factors, which the PT/INR measures. Target usually 2–3.',
      2: 'No routine lab. Apixaban is a direct Xa inhibitor with predictable dosing — no routine monitoring.',
      3: 'No routine lab. Rivaroxaban is also a direct Xa inhibitor with predictable dosing.'
    },
    phys: 'Each drug blocks a different part of the clotting cascade. Heparin → aPTT. Warfarin → PT/INR. DOACs act predictably, so routine levels are not needed.',
    rule: 'Heparin = aPTT (“H-P-T”), Warfarin = INR (“W-I”), DOACs = no routine lab.'
  },
  '30|n|7': {
    ask: 'Name the emergency, choose actions that support oxygenation, and pick what shows the response.',
    cues: ['Post-op day 3 — DVT risk', 'Sudden dyspnea + pleuritic chest pain', 'HR 128, RR 32, SpO₂ 86%'],
    cond: {
      3: 'Incorrect. Panic can cause fast breathing but not a true SpO₂ of 86%, and it does not explain pleuritic pain after surgery.'
    },
    mon: {
      0: 'Correct. SpO₂ and RR show whether oxygenation is improving.',
      2: 'Incorrect. Glucose does not show whether the clot is affecting oxygenation or the heart.',
      3: 'Incorrect. Temperature is not how the response to a PE is tracked.',
      4: 'Incorrect. Pupils matter only if there is a neuro change; they do not track a PE.'
    },
    phys: 'A DVT breaks off → travels through the right heart → blocks a pulmonary artery → ventilated lung gets no blood (dead space) → hypoxemia → the right ventricle strains → tachycardia, hypotension → shock if large.',
    rule: 'PE: oxygen, head up, rapid response; evaluate with SpO₂, RR, HR and BP.'
  },
  '30|n|8': {
    ask: 'Match each anticoagulant to its antidote and lab.',
    blanks: {
      1: 'Protamine sulfate. It is strongly positive and binds negatively charged heparin, neutralizing it. Vitamin K reverses warfarin; naloxone reverses opioids.',
      3: 'Vitamin K. It lets the liver make clotting factors II, VII, IX and X again. Protamine is for heparin; flumazenil reverses benzodiazepines.',
      5: 'INR. Warfarin is measured with the PT/INR. aPTT monitors heparin; platelets watch for HIT.'
    },
    phys: 'Heparin → boosts antithrombin → blocks thrombin and Xa → protamine binds it directly. Warfarin → blocks vitamin K recycling → fewer factors II, VII, IX, X → vitamin K restores production (slowly, over hours).',
    rule: 'Heparin: aPTT, protamine. Warfarin: INR, vitamin K.'
  },
  '30|c|0': {
    ask: 'What is first for sudden dyspnea, chest pain and low SpO₂ after surgery?',
    cues: ['Post-op + sudden onset = suspect PE'],
    r: {
      0: 'Correct. Sit the client up, give oxygen and get the rapid response team — support oxygenation while help comes.',
      1: 'Unsafe. Walking raises oxygen demand in a hypoxic client.',
      2: 'Analgesia helps comfort but does nothing for hypoxemia from a blocked pulmonary artery.',
      3: 'Documentation comes after stabilization.'
    },
    phys: 'A clot blocks pulmonary blood flow → oxygen cannot be picked up from part of the lung → SpO₂ falls → the heart races to compensate.',
    rule: 'Oxygenation first: position, oxygen, call for help.'
  },
  '30|c|1': {
    ask: 'Which drug reverses heparin?',
    cues: ['Heparin → protamine'],
    r: {
      0: 'Vitamin K reverses warfarin, not heparin.',
      1: 'Correct. Protamine binds heparin and neutralizes it within minutes.',
      2: 'Naloxone reverses opioids.',
      3: 'Flumazenil reverses benzodiazepines.'
    },
    phys: 'Protamine is a strongly positive protein that binds negatively charged heparin, forming an inactive complex.',
    rule: 'Heparin ↔ protamine. Warfarin ↔ vitamin K. Opioids ↔ naloxone. Benzodiazepines ↔ flumazenil.'
  },
  '30|c|2': {
    ask: 'Is an INR of 4.8 safe for this client on warfarin?',
    cues: ['AF target INR 2–3', '4.8 = too thin'],
    r: {
      0: 'Unsafe. Another dose would raise the INR further and increase bleeding risk.',
      1: 'Correct. 4.8 is above the 2–3 target. Hold and notify; the provider may order vitamin K depending on bleeding.',
      2: 'Unsafe. The blood is already too slow to clot.',
      3: 'Protamine reverses heparin, not warfarin.'
    },
    phys: 'Higher INR = blood takes longer to clot. Above the target range, bleeding risk climbs (GI, urinary, intracranial).',
    rule: 'Warfarin INR target usually 2–3 (higher for mechanical valves). Above range → hold and notify; assess for bleeding.'
  },
  '30|c|3': {
    ask: 'Which findings point to arterial (not venous) insufficiency?',
    cues: ['Arterial = not enough blood IN', 'Venous = blood can’t get OUT'],
    r: {
      0: 'Correct. Less arterial blood → cool, pale skin.',
      1: 'Correct. Narrowed arteries → weak or absent pulses.',
      2: 'Incorrect. Brown ankle pigmentation comes from venous pooling — red cells leak out and leave iron stains. That is venous.',
      3: 'Correct. Chronic lack of blood → hair loss and thin, shiny skin.',
      4: 'Correct. Claudication — pain with walking that eases with rest — is arterial.'
    },
    phys: 'Arterial disease: plaque limits inflow → tissues starve. Venous disease: weak valves let blood pool → pressure pushes fluid and red cells out → swelling and brown staining.',
    rule: 'Arterial = cool, pale, hairless, weak pulses, claudication. Venous = warm, swollen, brown, aching when standing.'
  },
  '30|c|4': {
    ask: 'What does a platelet drop on day 7 of heparin mean, and what do you do?',
    cues: ['250,000 → 90,000 (over 50% drop)', 'Day 7 of heparin'],
    r: {
      0: 'Unsafe. Continuing heparin keeps fueling the antibody reaction and new clots.',
      1: 'Correct. This pattern is HIT. Stop all heparin and expect a direct thrombin inhibitor such as argatroban.',
      2: 'Platelets can feed the clotting reaction in HIT and are usually avoided.',
      3: 'Enoxaparin is a low-molecular-weight heparin and can cross-react with the same antibodies.'
    },
    phys: 'Antibodies to heparin–PF4 complexes → activate platelets → platelets clump into clots (using them up) → thrombocytopenia with thrombosis.',
    rule: 'HIT: stop ALL heparin (including LMWH and flushes) → direct thrombin inhibitor (argatroban).'
  },
  '30|c|5': {
    ask: 'Which client has an acute loss of blood flow to a limb?',
    cues: ['Post fem-pop bypass + absent pedal pulse'],
    r: {
      0: 'Claudication at a stable distance is chronic.',
      1: 'Correct. A pulse that disappears after bypass surgery means the graft may be blocked — the limb can die within hours. Report now.',
      2: 'Varicose veins are chronic.',
      3: 'Stage 1 hypertension is chronic and managed over time.'
    },
    phys: 'A new bypass graft can clot or kink → no blood beyond it → the foot loses its pulse, goes cold and pale → ischemia and limb loss without fast action.',
    rule: 'After vascular surgery: a new loss of pulse, color or warmth is an emergency.'
  },
  '30|c|6': {
    ask: 'What helps blood get OUT of the legs in venous insufficiency?',
    cues: ['Venous = gravity is the enemy'],
    r: {
      0: 'Correct. Elevating the legs lets gravity drain pooled blood, and compression stockings support the veins so fluid does not leak out.',
      1: 'Dangling the legs helps arterial insufficiency (gravity brings blood in) but worsens venous pooling.',
      2: 'Crossing the legs compresses veins and worsens pooling.',
      3: 'Standing still for long periods lets blood pool in the legs.'
    },
    phys: 'Leaky vein valves → blood pools → high pressure in the veins → fluid and red cells leak into tissue → swelling, brown staining, ulcers.',
    rule: 'Venous = elevate and compress. Arterial = dangle (legs down), no compression, no elevation.'
  },
  '30|c|7': {
    ask: 'Which DVT-prevention task is routine and needs no judgment?',
    cues: ['AP → routine devices, no medications or assessment'],
    r: {
      0: 'Correct. Applying SCDs is a routine task with predictable results.',
      1: 'Assessing for a DVT requires nursing judgment.',
      2: 'Medication administration requires a licensed nurse.',
      3: 'Teaching is a nursing responsibility.'
    },
    phys: 'SCDs squeeze the legs rhythmically to push blood upward — a mechanical task AP can do once the nurse orders and checks it.',
    rule: 'AP can apply devices and report; nurses assess, give medications and teach.'
  },
  '30|c|8': {
    ask: 'How fast should a hypertensive emergency be lowered?',
    cues: ['The brain has adjusted to high pressure'],
    r: {
      0: 'Unsafe. Normalizing BP within minutes drops flow below what the adapted brain, heart and kidneys need → ischemia and stroke.',
      1: 'Correct. Lower MAP by no more than about 25% in the first hour, then gradually over the next 24–48 hours.',
      2: 'IV titratable drugs are standard in an emergency; oral drugs are too slow and unpredictable.',
      3: 'Continuous monitoring is needed because the drugs are titrated minute by minute.'
    },
    phys: 'Long-standing high BP → autoregulation resets so brain flow stays normal at high pressure → a sudden fall → flow drops below need → ischemia.',
    rule: 'Hypertensive emergency: ≤25% MAP reduction in the first hour with IV titration and continuous monitoring.'
  }
});
window.EXPLAIN_CH = window.EXPLAIN_CH || {}; window.EXPLAIN_CH['30'] = 1;
