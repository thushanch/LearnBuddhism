/* ==========================================================================
   micro.js — the micro board

   The main board runs at the scale of a noticeable moment. This one runs
   underneath it: the smallest unit of matter (rūpa kalāpa), the smallest
   unit of mind (cittakkhaṇa), and the seventeen-moment series that one act
   of seeing actually is (citta vīthi).

   IMPORTANT: this layer is Theravāda Abhidhamma and its commentaries, not
   the suttas. That is stated on the board itself, not buried.
   ========================================================================== */

import { iconAt, icon } from "./icons.js";

const MOTION =
  typeof window === "undefined" ||
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- the eight inseparables ---------- */

export const OCTAD = [
  { id: "pathavi", en: "earth", pali: "paṭhavī", si: "පඨවි", kind: "great element",
    d: "Hardness and softness. What pushes back when you press something. Not soil — the experience of resistance." },
  { id: "apo", en: "water", pali: "āpo", si: "ආපෝ", kind: "great element",
    d: "Cohesion. What holds the group together. Notably, it is never felt directly by touch — it is inferred." },
  { id: "tejo", en: "fire", pali: "tejo", si: "තේජෝ", kind: "great element",
    d: "Temperature — hot and cold, both. Cold is not the absence of this element; it is one of its two readings." },
  { id: "vayo", en: "air", pali: "vāyo", si: "වායෝ", kind: "great element",
    d: "Motion, pressure, distension. The sense of something moving or pushing." },
  { id: "vanna", en: "colour", pali: "vaṇṇa", si: "වණ්ණ", kind: "derived",
    d: "The visible datum itself, before it is recognised as anything. What the eye-door actually takes." },
  { id: "gandha", en: "odour", pali: "gandha", si: "ගන්ධ", kind: "derived",
    d: "Smell, as a property of the group rather than of the object you think you are smelling." },
  { id: "rasa", en: "taste", pali: "rasa", si: "රස", kind: "derived",
    d: "Flavour. Present in the group whether or not anything is tasting it." },
  { id: "oja", en: "nutriment", pali: "ojā", si: "ඕජා", kind: "derived",
    d: "Nutritive essence — the capacity to sustain further matter. This is how food becomes body." },
];

/* ---------- the seventeen moments of a full sense-door process ---------- */

export const VITHI = [
  { n: "01", en: "past", pali: "atīta-bhavaṅga", si: "අතීත භවංග", cls: "bhav",
    d: "The resting stream, still resting. The object has struck the door, but nothing has turned toward it yet." },
  { n: "02", en: "vibration", pali: "bhavaṅga-calana", si: "භවංග චලන", cls: "bhav",
    d: "The resting stream is disturbed by the impact. Still no cognition of anything." },
  { n: "03", en: "arrest", pali: "bhavaṅgupaccheda", si: "භවංග උපච්ඡේද", cls: "bhav",
    d: "The resting stream is cut off. The process is now committed to running." },
  { n: "04", en: "adverting", pali: "pañcadvārāvajjana", si: "පඤ්චද්වාරාවජ්ජන", cls: "kiriya",
    d: "The mind turns toward the door the object arrived at. Functional only — it makes no kamma." },
  { n: "05", en: "seeing", pali: "cakkhu-viññāṇa", si: "චක්ඛු විඤ්ඤාණ", cls: "vipaka",
    d: "Bare seeing, and nothing else. This is a result of past kamma, not an action. You cannot be praised or blamed for it." },
  { n: "06", en: "receiving", pali: "sampaṭicchana", si: "සම්පටිච්ඡන", cls: "vipaka",
    d: "The object is received for further handling. Still resultant, still passive." },
  { n: "07", en: "examining", pali: "santīraṇa", si: "සන්තීරණ", cls: "vipaka",
    d: "The object is investigated. Note how late this is — six moments in, and nothing has been decided." },
  { n: "08", en: "determining", pali: "votthapana", si: "වොත්ථපන", cls: "branch",
    d: "The object is determined, and the series branches. What comes next depends on how attention is applied — not on the object. This is the gap, at this scale." },
  { n: "09", en: "javana 1", pali: "javana", si: "ජවන", cls: "javana", d: JAVANA() },
  { n: "10", en: "javana 2", pali: "javana", si: "ජවන", cls: "javana", d: JAVANA() },
  { n: "11", en: "javana 3", pali: "javana", si: "ජවන", cls: "javana", d: JAVANA() },
  { n: "12", en: "javana 4", pali: "javana", si: "ජවන", cls: "javana", d: JAVANA() },
  { n: "13", en: "javana 5", pali: "javana", si: "ජවන", cls: "javana", d: JAVANA() },
  { n: "14", en: "javana 6", pali: "javana", si: "ජවන", cls: "javana", d: JAVANA() },
  { n: "15", en: "javana 7", pali: "javana", si: "ජවන", cls: "javana", d: JAVANA() },
  { n: "16", en: "registering", pali: "tadārammaṇa", si: "තදාරම්මණ", cls: "vipaka",
    d: "A brief after-image of the object, which only happens if it was strong enough to warrant one." },
  { n: "17", en: "registering", pali: "tadārammaṇa", si: "තදාරම්මණ", cls: "vipaka",
    d: "The second and last. Then the stream falls back into bhavaṅga, and none of this was noticed." },
];

function JAVANA() {
  return (
    "Running through the object. These seven moments are the only ones in the " +
    "entire series that make kamma — everything before them is either resultant " +
    "or functional. Whatever disposition gets written, gets written here."
  );
}

/* ---------- geometry ---------- */

function panel(x, y, w, h, title, icName) {
  return `
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" class="mc-panel"/>
    ${iconAt(icName, x + 24, y + 26, 16, "mc-icon")}
    <text x="${x + 40}" y="${y + 30}" class="mc-group">${title}</text>`;
}

export function microView() {
  /* --- A1: one mind-moment --- */
  const a1 = `
    ${panel(30, 84, 360, 240, "one mind-moment · cittakkhaṇa · චිත්තක්ෂණ", "citta")}
    <path d="M70,250 L150,176 L270,176 L350,250" class="mc-pulse"/>
    <path d="M70,250 L150,176 L270,176 L350,250 L350,252 L70,252 Z" class="mc-pulsefill"/>
    <path d="M150,176 L150,252 M270,176 L270,252" class="mc-tickline"/>
    <text x="110" y="272" text-anchor="middle" class="mc-pali">uppāda</text>
    <text x="110" y="286" text-anchor="middle" class="mc-si">උප්පාද</text>
    <text x="110" y="300" text-anchor="middle" class="mc-small">arising</text>
    <text x="210" y="272" text-anchor="middle" class="mc-pali">ṭhiti</text>
    <text x="210" y="286" text-anchor="middle" class="mc-si">ඨිති</text>
    <text x="210" y="300" text-anchor="middle" class="mc-small">presence</text>
    <text x="310" y="272" text-anchor="middle" class="mc-pali">bhaṅga</text>
    <text x="310" y="286" text-anchor="middle" class="mc-si">භංග</text>
    <text x="310" y="300" text-anchor="middle" class="mc-small">dissolution</text>
    <text x="210" y="152" text-anchor="middle" class="mc-small">one moment of consciousness, in three phases</text>
    ${
      MOTION
        ? `<circle r="4.5" class="mc-dot">
             <animateMotion dur="3.6s" repeatCount="indefinite"
               path="M70,250 L150,176 L270,176 L350,250"/>
           </circle>`
        : ""
    }`;

  /* --- A2: one material unit --- */
  const chips = OCTAD.map((o, i) => {
    const col = i % 4;
    const row = Math.floor(i / 4);
    const x = 428 + col * 84;
    const y = 168 + row * 62;
    return `
      <g class="mc-chip" data-octad="${o.id}" role="button" tabindex="0"
         aria-label="${o.en}, ${o.pali}">
        <rect x="${x}" y="${y}" width="78" height="54" rx="7"
              class="mc-chiprect${i < 4 ? " mc-chiprect--great" : ""}"/>
        <text x="${x + 39}" y="${y + 20}" text-anchor="middle" class="mc-chipen">${o.en}</text>
        <text x="${x + 39}" y="${y + 33}" text-anchor="middle" class="mc-pali">${o.pali}</text>
        <text x="${x + 39}" y="${y + 46}" text-anchor="middle" class="mc-si">${o.si}</text>
      </g>`;
  }).join("");

  const a2 = `
    ${panel(410, 84, 360, 240, "one material unit · rūpa kalāpa · රූප කලාප", "kalapa")}
    <rect x="420" y="160" width="340" height="128" rx="9" class="mc-cluster"/>
    ${chips}
    <text x="590" y="146" text-anchor="middle" class="mc-small">eight qualities that are never found apart</text>
    <text x="590" y="308" text-anchor="middle" class="mc-small">solid outline = the four great elements · mahābhūta</text>`;

  /* --- A3: how the two line up --- */
  const ticks = Array.from({ length: 17 }, (_, i) => {
    const x = 812 + i * 20;
    return `<path d="M${x},196 L${x},218" class="mc-tickline"/>`;
  }).join("");

  const a3 = `
    ${panel(790, 84, 380, 240, "how they line up", "moment")}
    <rect x="806" y="166" width="336" height="20" rx="6" class="mc-bar"/>
    <text x="974" y="180" text-anchor="middle" class="mc-barlabel">one rūpa kalāpa lasts this long</text>
    ${ticks}
    <text x="974" y="238" text-anchor="middle" class="mc-small">17 mind-moments</text>
    <text x="808" y="266" class="mc-small">Matter is slow and mind is fast. In the time one</text>
    <text x="808" y="282" class="mc-small">material group arises and breaks up, seventeen</text>
    <text x="808" y="298" class="mc-small">moments of consciousness have come and gone.</text>`;

  /* --- B: the seventeen-moment series --- */
  const BW = 60, GAP = 5.6, X0 = 40, BY = 432, BH = 82;
  const boxX = (i) => X0 + i * (BW + GAP);
  const boxC = (i) => boxX(i) + BW / 2;

  const stages = VITHI.map((v, i) => `
    <g class="mc-stage mc-stage--${v.cls}" data-stage="${i}" role="button" tabindex="0"
       aria-label="moment ${v.n}, ${v.pali}">
      <rect x="${boxX(i)}" y="${BY}" width="${BW}" height="${BH}" rx="7" class="mc-stagerect"/>
      <text x="${boxC(i)}" y="${BY + 20}" text-anchor="middle" class="mc-stagenum">${v.n}</text>
      <text x="${boxC(i)}" y="${BY + 40}" text-anchor="middle" class="mc-stageen">${v.en}</text>
      <text x="${boxC(i)}" y="${BY + 56}" text-anchor="middle" class="mc-stagepali">${short(v.pali)}</text>
      <text x="${boxC(i)}" y="${BY + 71}" text-anchor="middle" class="mc-si mc-stagesi">${shortSi(v.si)}</text>
    </g>`).join("");

  const bracket = (from, to, label, cls = "") => {
    const x1 = boxX(from);
    const x2 = boxX(to) + BW;
    const mid = (x1 + x2) / 2;
    return `
      <path d="M${x1},422 L${x1},412 L${x2},412 L${x2},422"
            class="mc-bracket ${cls.replace("mc-group--", "mc-bracket--")}"/>
      <text x="${mid}" y="404" text-anchor="middle" class="mc-group ${cls}">${label}</text>`;
  };

  const b = `
    <text x="36" y="372" class="mc-title">one act of seeing, in full</text>
    <text x="36" y="390" class="mc-small">citta vīthi · චිත්ත වීථි — the cognitive series. Read left to right. It happens below the threshold of noticing.</text>

    ${bracket(0, 2, "bhavaṅga · භවංග")}
    ${bracket(3, 6, "taking the object in")}
    ${bracket(7, 7, "the branch", "mc-group--branch")}
    ${bracket(8, 14, "javana · ජවන — the only moments that make kamma", "mc-group--javana")}
    ${bracket(15, 16, "registration")}

    <path d="M${boxC(7)},${BY + BH} L${boxC(7)},556" class="mc-wire mc-wire--dot"/>
    <g class="mc-yoniso" data-yoniso>
      <rect x="${boxC(7) - 130}" y="556" width="260" height="56" rx="9" class="mc-yorect"/>
      ${iconAt("observer", boxC(7) - 108, 584, 16, "mc-icon mc-icon--yo")}
      <text x="${boxC(7) - 92}" y="580" class="mc-stageen">wise attention</text>
      <text x="${boxC(7) - 92}" y="596" class="mc-pali">yoniso manasikāra
        <tspan class="mc-si"> · යෝනිසෝ මනසිකාර</tspan></text>
    </g>
    <text x="${boxC(7) + 146}" y="580" class="mc-small">Applied here, the seven javana moments run</text>
    <text x="${boxC(7) + 146}" y="596" class="mc-small">wholesome. Not applied, they run unwholesome.</text>
    <text x="${boxC(7) + 146}" y="612" class="mc-small">The object is identical either way.</text>

    <path d="M20,${BY + 40} L36,${BY + 40}" class="mc-wire"/>
    <path d="M${boxX(16) + BW + 4},${BY + 40} L${boxX(16) + BW + 20},${BY + 40}" class="mc-wire"/>
    ${stages}`;

  /* --- C: the caveat --- */
  const c = `
    ${panel(30, 644, 1140, 96, "what layer is this", "limits")}
    <text x="72" y="700" class="mc-small">None of this detail is in the suttas. The seventeen-moment series, the three sub-moments and the eight-fold material group come from the</text>
    <text x="72" y="716" class="mc-small">Abhidhamma and its commentaries — the Visuddhimagga and the Abhidhammattha Saṅgaha. Theravāda holds them; other traditions do not, and</text>
    <text x="72" y="732" class="mc-small">some reject the analysis outright. Treat it as a very detailed model, clearly labelled, rather than as something the Buddha is recorded as saying.</text>`;

  return `
  <div class="micro" data-micro>
    <div class="machine__scroller">
      <svg class="micro__svg" viewBox="0 0 1200 760" role="img"
           aria-label="The micro board: one mind-moment in three phases, one material unit of eight qualities, the timing relation between them, and the seventeen-moment cognitive series with the branch point at the determining moment.">
        <rect x="12" y="12" width="1176" height="736" rx="14" class="mx-board"/>
        <text x="36" y="44" class="mc-title mc-title--main">underneath the board</text>
        <text x="36" y="64" class="mc-small">zoom in far enough and the blocks on the main board are themselves made of series. click anything.</text>
        ${a1}${a2}${a3}${b}${c}
      </svg>
    </div>

    <p class="board-hint">Wide board — drag it sideways to see the rest.</p>
    <div class="sim" data-microsim>
      <div class="sim__head">
        ${icon("vithi")}
        <span class="sim__title">Run one cognitive series</span>
        <span class="sim__sub">seventeen moments, one flicker of seeing</span>
      </div>
      <div class="sim__controls">
        <button class="dg-btn" data-mc="run">run the series</button>
        <button class="dg-btn" data-mc="yoniso" aria-pressed="false">wise attention: off</button>
        <button class="dg-btn" data-mc="reset">reset</button>
      </div>
      <div class="sim__stage">
        <span class="sim__step" data-mcstep>idle</span>
        <p class="sim__text" data-mctext>
          Click any moment to read it, or run the whole series. Watch what happens at
          moment 08 — everything before it is either a result of past kamma or purely
          functional, and everything after it is already committed.
        </p>
      </div>
    </div>

    <div class="machine__panel" data-mcpanel>
      <div class="machine__phead">
        <span class="machine__picon">${icon("kalapa")}</span>
        <span class="machine__pname">the micro layer</span>
        <span class="machine__ppali">paramattha</span>
        <span class="machine__psi">පරමත්ථ</span>
        <span class="machine__psys">the fine-grained model</span>
      </div>
      <p class="machine__prole">
        The main board draws a moment you could notice. This one draws what the
        Abhidhamma says a single such moment is actually made of — and the striking
        result is that the same structure appears again: a long passive run-up, one
        point where it branches, and a short window where anything is written.
      </p>
      <p class="machine__pnote">
        <b>votthapana</b> here is <b>the gap</b> there. Same branch, two scales.
      </p>
      <a class="machine__plink" href="#/gap">See the gap on the main board &rarr;</a>
    </div>
  </div>`;
}

function short(p) {
  const map = {
    "atīta-bhavaṅga": "bhavaṅga",
    "bhavaṅga-calana": "calana",
    "bhavaṅgupaccheda": "upaccheda",
    "pañcadvārāvajjana": "āvajjana",
    "cakkhu-viññāṇa": "viññāṇa",
    "sampaṭicchana": "sampaṭic.",
    "tadārammaṇa": "tadāram.",
  };
  return map[p] || p;
}
function shortSi(s) {
  const map = {
    "අතීත භවංග": "භවංග",
    "භවංග චලන": "චලන",
    "භවංග උපච්ඡේද": "උපච්ඡේද",
    "පඤ්චද්වාරාවජ්ජන": "ආවජ්ජන",
    "චක්ඛු විඤ්ඤාණ": "විඤ්ඤාණ",
    "සම්පටිච්ඡන": "සම්පටි.",
    "තදාරම්මණ": "තදාරම්.",
  };
  return map[s] || s;
}

/* ---------- interactivity ---------- */

export function wireMicro(el) {
  const step = el.querySelector("[data-mcstep]");
  const text = el.querySelector("[data-mctext]");
  const stages = [...el.querySelectorAll(".mc-stage")];
  const chips = [...el.querySelectorAll(".mc-chip")];
  let running = false;

  const clear = () => {
    stages.forEach((s) => s.classList.remove("is-run", "is-sel"));
    chips.forEach((c) => c.classList.remove("is-sel"));
  };

  function showStage(i) {
    const v = VITHI[i];
    clear();
    stages[i].classList.add("is-sel");
    step.innerHTML =
      `<b>${v.n}</b> ${v.en} <i>${v.pali}</i> <span class="sim__si">${v.si}</span> · ${kindOf(v.cls)}`;
    text.innerHTML = v.d;
  }

  stages.forEach((s, i) => {
    s.addEventListener("click", () => !running && showStage(i));
    s.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); showStage(i); }
    });
  });

  chips.forEach((c) => {
    const act = () => {
      const o = OCTAD.find((x) => x.id === c.dataset.octad);
      clear();
      c.classList.add("is-sel");
      step.innerHTML =
        `<b>${o.en}</b> <i>${o.pali}</i> <span class="sim__si">${o.si}</span> · ${o.kind}`;
      text.innerHTML =
        `${o.d} <br><span class="sim__note">All eight arise together and break up together. ` +
        `There is no such thing as a single one of them on its own.</span>`;
    };
    c.addEventListener("click", () => !running && act());
    c.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); act(); }
    });
  });

  const btn = (n) => el.querySelector(`[data-mc="${n}"]`);

  btn("yoniso").addEventListener("click", () => {
    const on = !el.classList.contains("is-yoniso");
    el.classList.toggle("is-yoniso", on);
    btn("yoniso").setAttribute("aria-pressed", String(on));
    btn("yoniso").textContent = `wise attention: ${on ? "on" : "off"}`;
    if (!running) {
      step.innerHTML = `<b>08</b> votthapana <span class="sim__si">වොත්ථපන</span> · the branch`;
      text.innerHTML = on
        ? "Wise attention applied at the determining moment. The same object, the same first seven moments — and now the seven javana run <span class='halt'>wholesome</span>. Nothing about the object changed."
        : "No wise attention at the determining moment. The seven javana run unwholesome by default, and the disposition written is the one you already had.";
    }
  });

  btn("run").addEventListener("click", async () => {
    if (running) return;
    running = true;
    el.classList.add("is-running");
    const dwell = MOTION ? 900 : 0;

    for (let i = 0; i < VITHI.length; i++) {
      clear();
      stages[i].classList.add("is-run");
      const v = VITHI[i];
      step.innerHTML =
        `<b>${v.n}</b> ${v.en} <i>${v.pali}</i> <span class="sim__si">${v.si}</span> · ${kindOf(v.cls)}`;
      text.innerHTML = v.d;
      await sleep(dwell);
    }

    clear();
    step.innerHTML = `<b>done</b> back to bhavaṅga`;
    text.innerHTML =
      "The stream falls back into bhavaṅga, and the whole series passes unnoticed. " +
      "Thousands of these make up what you experience as one continuous glance at something.";
    el.classList.remove("is-running");
    running = false;
  });

  btn("reset").addEventListener("click", () => {
    clear();
    el.classList.remove("is-yoniso", "is-running");
    btn("yoniso").setAttribute("aria-pressed", "false");
    btn("yoniso").textContent = "wise attention: off";
    step.textContent = "idle";
    text.innerHTML =
      "Click any moment to read it, or run the whole series. Watch what happens at moment 08 — everything before it is either a result of past kamma or purely functional, and everything after it is already committed.";
  });
}

function kindOf(cls) {
  return {
    bhav: "resting stream",
    kiriya: "functional — makes no kamma",
    vipaka: "resultant — makes no kamma",
    branch: "the branch point",
    javana: "karmically active",
  }[cls];
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
