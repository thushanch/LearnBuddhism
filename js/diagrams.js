/* ==========================================================================
   diagrams.js — SVG system illustrations
   Every diagram is a pure function returning markup. Interactive ones get
   wired up by initDiagrams() after the chapter is in the DOM.

   House rules (from the brand guide): flat colour, no shadows, one accent
   idea per figure, labels in Poppins, machine text in mono.
   ========================================================================== */

import { TERMS, SI, ICON_FOR } from "./terms.js";
import { icon } from "./icons.js";

const MOTION =
  typeof window === "undefined" ||
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- small builders ---------- */

function defs(ns) {
  return `<defs>
    <marker id="${ns}-ah" viewBox="0 0 10 10" refX="9" refY="5"
            markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 Z" class="dg-arrowhead"/>
    </marker>
    <marker id="${ns}-aha" viewBox="0 0 10 10" refX="9" refY="5"
            markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 Z" class="dg-arrowhead--accent"/>
    </marker>
  </defs>`;
}

/** A labelled node box. Text is left-aligned inside the box. */
function node(x, y, w, h, { num, label, pali, cls = "dg-box" } = {}) {
  const left = x - w / 2 + 12;
  const top = y - h / 2;
  return `
    <g>
      <rect x="${x - w / 2}" y="${top}" width="${w}" height="${h}" rx="8" class="${cls}"/>
      ${num ? `<text x="${left}" y="${top + 16}" class="dg-mono">${num}</text>` : ""}
      <text x="${left}" y="${top + (num ? 32 : 22)}" class="dg-label">${label}</text>
      ${pali ? `<text x="${left}" y="${top + (num ? 46 : 38)}" class="dg-pali">${pali}</text>` : ""}
    </g>`;
}

const svg = (vb, inner, label) =>
  `<svg class="dg" viewBox="${vb}" role="img" aria-label="${label}" preserveAspectRatio="xMidYMid meet">${inner}</svg>`;

/* ==========================================================================
   01 — The loop (saṃsāra)
   ========================================================================== */

function dgLoop() {
  const ns = "lp";
  const cx = 250, cy = 210, r = 126;
  const ring = `M${cx},${cy - r} A${r},${r} 0 0 1 ${cx},${cy + r} A${r},${r} 0 0 1 ${cx},${cy - r}`;

  // Direction ticks at the arc midpoints, rotated to the clockwise tangent.
  const tick = (deg) => {
    const a = (deg * Math.PI) / 180;
    const px = cx + r * Math.sin(a);
    const py = cy - r * Math.cos(a);
    return `<path d="M-5,-4 L5,0 L-5,4 Z" class="dg-arrowhead--accent"
              transform="translate(${px.toFixed(1)},${py.toFixed(1)}) rotate(${deg})"/>`;
  };

  return svg(
    "0 0 700 420",
    `${defs(ns)}
     <path id="${ns}-track" d="${ring}" class="dg-edge dg-edge--accent" opacity="0.55"/>
     ${[45, 135, 225, 315].map(tick).join("")}

     <!-- what the loop turns on. kept inside the clear band between the nodes -->
     <text x="${cx}" y="${cy - 6}" text-anchor="middle" class="dg-mono">while (fuel)</text>
     <text x="${cx}" y="${cy + 16}" text-anchor="middle" class="dg-sm">it runs because</text>
     <text x="${cx}" y="${cy + 33}" text-anchor="middle" class="dg-sm">it is fed</text>

     ${node(cx, cy - r, 124, 48, { label: "spawn", pali: "jāti — birth", cls: "dg-box dg-box--accent" })}
     ${node(cx + r, cy, 124, 48, { label: "sense", pali: "phassa — contact", cls: "dg-box dg-box--accent" })}
     ${node(cx, cy + r, 124, 48, { label: "crave", pali: "taṇhā — thirst", cls: "dg-box dg-box--accent" })}
     ${node(cx - r, cy, 124, 48, { label: "carry", pali: "bhava — becoming", cls: "dg-box dg-box--accent" })}

     <!-- the branch that is almost never taken -->
     <path d="M320,${cy + r} L478,${cy + r}" class="dg-edge dg-edge--dash" marker-end="url(#${ns}-ah)"/>
     <text x="399" y="${cy + r - 14}" text-anchor="middle" class="dg-mono">if (craving == 0)</text>
     ${node(560, cy + r, 150, 48, { label: "break", pali: "nibbāna — unbinding" })}

     ${
       MOTION
         ? `<circle r="6" class="dg-token">
              <animateMotion dur="11s" repeatCount="indefinite">
                <mpath href="#${ns}-track"/>
              </animateMotion>
            </circle>`
         : `<circle cx="${cx}" cy="${cy - r}" r="6" class="dg-token"/>`
     }`,
    "The cycle of rebirth drawn as a program loop with four stations and one unused break branch."
  );
}

/* ==========================================================================
   02 — Three runtime properties (tilakkhaṇa)
   ========================================================================== */

function dgMarks() {
  const panel = (x, title, pali, art, caption) => `
    <g transform="translate(${x},0)">
      <rect x="0" y="0" width="210" height="222" rx="10" class="dg-box"/>
      <text x="16" y="28" class="dg-label">${title}</text>
      <text x="16" y="46" class="dg-pali">${pali}</text>
      <g transform="translate(0,58)">${art}</g>
      <text x="16" y="200" class="dg-sm">${caption}</text>
    </g>`;

  const stream = `
    <path d="M16,50 C 50,10 66,90 100,50 S 150,10 194,50"
          class="dg-edge dg-edge--accent dg-flow" />
    <path d="M16,80 C 50,40 66,120 100,80 S 150,40 194,80"
          class="dg-edge dg-edge--accent dg-flow" opacity="0.45"/>`;

  const unstable = `
    <g class="${MOTION ? "dg-breathe" : ""}">
      <rect x="62" y="20" width="86" height="54" rx="6" class="dg-box dg-box--accent"
            transform="rotate(-7 105 47)"/>
    </g>
    <path d="M40,96 L170,96" class="dg-edge"/>
    <path d="M105,84 L105,96" class="dg-edge dg-edge--dash"/>`;

  const empty = `
    <rect x="52" y="22" width="106" height="62" rx="8"
          fill="none" stroke="var(--line-strong)" stroke-width="1.5" stroke-dasharray="6 5"/>
    <text x="105" y="58" text-anchor="middle" class="dg-mono">null</text>
    <text x="105" y="104" text-anchor="middle" class="dg-sm">no owner field</text>`;

  return svg(
    "0 0 700 230",
    `${panel(10, "nothing holds still", "anicca", stream, "every part is a stream, not a stored value")}
     ${panel(245, "nothing sits stable", "dukkha", unstable, "no configuration stays balanced")}
     ${panel(480, "nothing owns it", "anattā", empty, "there is no field called self")}`,
    "Three panels: a flowing stream, a tilted unstable box, and an empty dashed box labelled null."
  );
}

/* ==========================================================================
   03 — Inspecting the self (anattā)
   ========================================================================== */

function dgSelf() {
  const ns = "sf";
  const lanes = [
    ["rūpa", "form — the hardware and its sensors"],
    ["vedanā", "feeling — the valence tag on each event"],
    ["saññā", "perception — the classifier"],
    ["saṅkhārā", "formations — habits, policies, intentions"],
    ["viññāṇa", "consciousness — the awareness of each event"],
  ];

  const laneRows = lanes
    .map(([pali, desc], i) => {
      const y = 48 + i * 48;
      return `
        <path d="M330,${y} L520,${y}" class="dg-edge dg-edge--accent ${MOTION ? "dg-flow" : ""}"
              style="animation-delay:${i * 0.35}s"/>
        <text x="322" y="${y + 4}" text-anchor="end" class="dg-pali">${pali}</text>
        <text x="532" y="${y + 4}" class="dg-sm">${desc}</text>`;
    })
    .join("");

  return svg(
    "0 0 900 330",
    `${defs(ns)}
     <rect x="40" y="110" width="140" height="80" rx="10" class="dg-box dg-box--accent"/>
     <text x="110" y="145" text-anchor="middle" class="dg-label">self</text>
     <text x="110" y="166" text-anchor="middle" class="dg-mono">assumed</text>

     <path d="M186,150 L244,150" class="dg-edge" marker-end="url(#${ns}-ah)"/>
     <text x="215" y="138" text-anchor="middle" class="dg-mono">look</text>

     ${laneRows}

     <text x="110" y="240" text-anchor="middle" class="dg-sm">what you look for</text>
     <text x="110" y="258" text-anchor="middle" class="dg-sm">is not returned</text>`,
    "A box labelled self is inspected and resolves into five separate flowing streams."
  );
}

/* ==========================================================================
   04 — Six input ports (saḷāyatana)
   ========================================================================== */

function dgSenses() {
  const ns = "sn";
  const ports = [
    ["eye", "cakkhu"],
    ["ear", "sota"],
    ["nose", "ghāna"],
    ["tongue", "jivhā"],
    ["body", "kāya"],
    ["mind", "mano"],
  ];

  const rows = ports
    .map(([en, pali], i) => {
      const y = 34 + i * 52;
      const last = i === ports.length - 1;
      return `
        <rect x="14" y="${y - 20}" width="150" height="40" rx="8"
              class="dg-box${last ? " dg-box--grow" : ""}"/>
        <text x="28" y="${y - 2}" class="dg-label">${en}</text>
        <text x="28" y="${y + 13}" class="dg-pali">${pali}</text>
        <path d="M168,${y} C 220,${y} 230,175 288,175"
              class="dg-edge ${MOTION ? "dg-flow" : ""}" style="animation-delay:${i * 0.25}s"/>`;
    })
    .join("");

  return svg(
    "0 0 760 360",
    `${defs(ns)}
     ${rows}
     <rect x="292" y="24" width="14" height="302" rx="7" class="dg-box dg-box--accent"/>
     <text x="299" y="${18}" text-anchor="middle" class="dg-mono">bus</text>

     <path d="M312,175 L368,175" class="dg-edge dg-edge--accent" marker-end="url(#${ns}-aha)"/>
     ${node(452, 175, 152, 52, { label: "contact", pali: "phassa", cls: "dg-box dg-box--accent" })}
     <path d="M530,175 L586,175" class="dg-edge dg-edge--accent" marker-end="url(#${ns}-aha)"/>
     ${node(672, 175, 152, 52, { label: "feeling", pali: "vedanā", cls: "dg-box dg-box--accent" })}

     <text x="14" y="352" class="dg-sm">mind is the sixth port, not the user of the other five</text>`,
    "Six input ports feed a shared bus, which produces contact and then feeling."
  );
}

/* ==========================================================================
   05 — The dependency chain (paṭiccasamuppāda)
   ========================================================================== */

function dgChain() {
  const ns = "ch";
  const W = 140, H = 52;
  const R1 = 62, R2 = 210, R3 = 358;

  const L = [
    ["01", "ignorance", "avijjā", 95, R1],
    ["02", "formations", "saṅkhārā", 265, R1],
    ["03", "consciousness", "viññāṇa", 435, R1],
    ["04", "name & form", "nāmarūpa", 605, R1],
    ["05", "six senses", "saḷāyatana", 605, R2],
    ["06", "contact", "phassa", 430, R2],
    ["07", "feeling", "vedanā", 270, R2],
    ["08", "craving", "taṇhā", 75, R2],
    ["09", "clinging", "upādāna", 95, R3],
    ["10", "becoming", "bhava", 265, R3],
    ["11", "birth", "jāti", 435, R3],
    ["12", "decay & death", "jarāmaraṇa", 605, R3],
  ];

  const boxes = L.map(([num, label, pali, x, y], i) =>
    node(x, y, W, H, {
      num,
      label,
      pali,
      cls: i === 6 || i === 7 ? "dg-box dg-box--grow" : "dg-box",
    })
  ).join("");

  const arrow = (x1, y1, x2, y2, extra = "") =>
    `<path d="M${x1},${y1} L${x2},${y2}" class="dg-edge${extra}" marker-end="url(#${ns}-ah)"/>`;

  const edges = `
    ${arrow(165, R1, 189, R1)}
    ${arrow(335, R1, 359, R1)}
    ${arrow(505, R1, 529, R1)}
    <path d="M605,${R1 + 26} L605,${R2 - 26}" class="dg-edge" marker-end="url(#${ns}-ah)"/>
    ${arrow(535, R2, 506, R2)}
    ${arrow(360, R2, 346, R2)}
    <path d="M5,${R2 + 26} C 5,${R2 + 70} 95,${R2 + 60} 95,${R3 - 26}"
          class="dg-edge" fill="none" marker-end="url(#${ns}-ah)"/>
    ${arrow(165, R3, 189, R3)}
    ${arrow(335, R3, 359, R3)}
    ${arrow(505, R3, 529, R3)}`;

  // The wide gap between feeling and craving is the point of the drawing.
  const cut = `
    <path d="M200,${R2} L156,${R2}" class="dg-edge" stroke="var(--grow)" stroke-width="2"
          marker-end="url(#${ns}-ah)"/>
    <circle cx="178" cy="${R2}" r="7" fill="var(--bg)" stroke="var(--grow)" stroke-width="2"/>
    <path d="M174,${R2 - 4} L182,${R2 + 4} M182,${R2 - 4} L174,${R2 + 4}"
          stroke="var(--grow)" stroke-width="1.6"/>
    <path d="M178,${R2 - 30} L178,${R2 - 12}" class="dg-edge dg-edge--dash" stroke="var(--grow)"/>
    <text x="178" y="${R2 - 38}" text-anchor="middle" class="dg-pali">the gap</text>
    <text x="178" y="${R2 + 54}" text-anchor="middle" class="dg-sm">feeling does not have</text>
    <text x="178" y="${R2 + 70}" text-anchor="middle" class="dg-sm">to become craving</text>`;

  // Closing edge: 12 back round to 01.
  const loopBack = `
    <path d="M605,${R3 + 26} C 605,440 605,448 560,448 L 30,448 C 8,448 8,440 8,414 L 8,${R1}
             C 8,${R1 - 4} 10,${R1} 22,${R1}"
          class="dg-edge dg-edge--dash dg-edge--accent" fill="none" marker-end="url(#${ns}-aha)"/>
    <text x="300" y="442" text-anchor="middle" class="dg-mono">and the conditions are set again</text>`;

  return svg(
    "0 0 720 470",
    `${defs(ns)}${edges}${cut}${loopBack}${boxes}`,
    "Twelve linked conditions arranged as a snaking pipeline that loops back on itself, with a marked break point between feeling and craving."
  );
}

/* ==========================================================================
   06 — Karma as a state update
   ========================================================================== */

function dgKarma() {
  const ns = "km";
  return svg(
    "0 0 680 300",
    `${defs(ns)}
     ${node(130, 70, 190, 56, { label: "intention", pali: "cetanā", cls: "dg-box dg-box--accent" })}
     ${node(545, 70, 190, 56, { label: "act", pali: "kamma", cls: "dg-box dg-box--accent" })}
     ${node(338, 232, 210, 56, { label: "disposition", pali: "saṅkhāra", cls: "dg-box dg-box--grow" })}

     <path d="M226,70 L448,70" class="dg-edge dg-edge--accent ${MOTION ? "dg-flow" : ""}"
           marker-end="url(#${ns}-aha)"/>
     <text x="337" y="56" text-anchor="middle" class="dg-mono">body, speech, mind</text>

     <path d="M580,98 C 596,180 520,232 445,232" class="dg-edge dg-edge--accent" fill="none"
           marker-end="url(#${ns}-aha)"/>
     <text x="586" y="176" class="dg-sm">leaves a trace</text>

     <path d="M231,232 C 120,232 96,180 108,98" class="dg-edge dg-edge--accent" fill="none"
           marker-end="url(#${ns}-aha)"/>
     <text x="16" y="176" class="dg-sm">biases the next one</text>

     <text x="337" y="140" text-anchor="middle" class="dg-mono">no ledger. no scorekeeper.</text>
     <text x="337" y="162" text-anchor="middle" class="dg-sm">only a system that keeps updating itself</text>`,
    "Intention leads to action, action leaves a trace in disposition, and disposition biases the next intention."
  );
}

/* ==========================================================================
   07 — The eight-part training programme
   ========================================================================== */

function dgPath(items) {
  return `<div class="path8">${items
    .map(
      (layer) => `
      <section class="path8__layer">
        <header class="path8__lhead">
          <span class="path8__lname">${layer.name}</span>
          <span class="path8__lpali">${layer.pali}</span>
          <span class="path8__lrole">${layer.role}</span>
        </header>
        <p class="path8__ldesc">${layer.desc}</p>
        <div class="path8__items">
          ${layer.items
            .map(
              (it) => `
            <div class="path8__item">
              <span class="path8__n">${it.n}</span>
              <div>
                <span class="path8__t">${it.t}</span>
                <span class="path8__p">${it.p}</span>
                <p class="path8__d">${it.d}</p>
              </div>
            </div>`
            )
            .join("")}
        </div>
      </section>`
    )
    .join("")}</div>`;
}

/* ==========================================================================
   08 — Root processes (the three unwholesome roots)
   ========================================================================== */

function dgRoots(rows) {
  return `
    <div class="proc">
      <div class="proc__bar">
        <span>root processes</span>
        <span class="proc__hint">always running unless something stops them</span>
      </div>
      <div class="proc__head">
        <span>process</span><span>pāli</span><span>presents as</span><span>load</span>
      </div>
      ${rows
        .map(
          (r) => `
        <div class="proc__row">
          <span class="proc__name">${r.name}</span>
          <span class="proc__pali">${r.pali}</span>
          <span class="proc__desc">${r.desc}</span>
          <span class="proc__load"><i style="width:${r.load}%"></i><b>${r.load}%</b></span>
        </div>`
        )
        .join("")}
    </div>`;
}

/* ==========================================================================
   09 — Interactive: the gap between feeling and craving
   ========================================================================== */

function dgGapDemo() {
  const stages = [
    ["contact", "phassa"],
    ["feeling", "vedanā"],
    ["gap", "sati"],
    ["craving", "taṇhā"],
    ["clinging", "upādāna"],
    ["becoming", "bhava"],
  ];

  return `
    <div class="gapdemo" data-interactive="gap">
      <div class="gapdemo__track">
        ${stages
          .map(
            ([en, pali], i) => `
          <div class="gapdemo__stage${i === 2 ? " is-gap" : ""}" data-stage="${i}">
            <span class="gapdemo__en">${en}</span>
            <span class="gapdemo__pali">${pali}</span>
          </div>`
          )
          .join("")}
      </div>

      <div class="dg-controls">
        <button class="dg-btn" data-send="pleasant">send pleasant input</button>
        <button class="dg-btn" data-send="unpleasant">send unpleasant input</button>
        <button class="dg-btn" data-send="neutral">send neutral input</button>
        <button class="dg-btn" data-observer aria-pressed="false">observer: off</button>
      </div>

      <div class="dg-readout" data-readout>
        Idle. Send an input and watch what the chain does with it.
      </div>
    </div>`;
}

/* ==========================================================================
   10 — Interactive: what "going out" means (nibbāna)
   ========================================================================== */

function dgExit() {
  const ns = "ex";
  const fuels = [
    ["greed", "lobha", 60],
    ["hatred", "dosa", 160],
    ["delusion", "moha", 260],
  ];

  return `
    <div class="exitfig" data-interactive="exit">
      ${svg(
        "0 0 660 330",
        `${defs(ns)}
         <g data-fuel>
           ${fuels
             .map(
               ([en, pali, y], i) => `
             <rect x="14" y="${y - 24}" width="150" height="48" rx="8" class="dg-box dg-box--accent"/>
             <text x="28" y="${y - 4}" class="dg-label">${en}</text>
             <text x="28" y="${y + 13}" class="dg-pali">${pali}</text>
             <path d="M168,${y} C 260,${y} 300,285 392,285"
                   class="dg-edge dg-edge--accent ${MOTION ? "dg-flow" : ""}"
                   style="animation-delay:${i * 0.4}s"/>`
             )
             .join("")}
         </g>

         <rect x="352" y="282" width="180" height="12" rx="6" class="dg-box"/>
         <text x="442" y="316" text-anchor="middle" class="dg-mono">the burning</text>

         <g data-flame class="${MOTION ? "dg-flame" : ""}">
           <path d="M442,96 C 492,168 484,236 442,278 C 400,236 392,168 442,96 Z"
                 fill="var(--accent-soft)" opacity="0.9"/>
           <path d="M442,168 C 466,204 462,240 442,264 C 422,240 418,204 442,168 Z"
                 fill="var(--bg)" opacity="0.55"/>
         </g>

         <text x="600" y="150" text-anchor="middle" class="dg-sm" data-exitnote>fed</text>`,
        "Three fuel lines feed a flame. Cutting the fuel lets the flame go out."
      )}
      <div class="dg-controls">
        <button class="dg-btn" data-cut>cut the fuel supply</button>
        <button class="dg-btn" data-restore>restore</button>
      </div>
      <div class="dg-readout" data-readout>
        The fire burns because it is fed. Nothing else keeps it going.
      </div>
    </div>`;
}

/* ==========================================================================
   11 — Interactive: the five aggregates
   ========================================================================== */

function dgKhandha(items) {
  return `
    <div class="khandha" data-interactive="khandha">
      ${items
        .map(
          (k, i) => `
        <button class="khandha__row" aria-expanded="${i === 0}" type="button">
          <span class="khandha__n">0${i + 1}</span>
          <span>
            <span class="khandha__name">${k.t}<span class="khandha__pali">${k.pali}</span></span>
            <span class="khandha__one">${k.one}</span>
            <span class="khandha__body">${k.body.map((p) => `<p>${p}</p>`).join("")}</span>
          </span>
        </button>`
        )
        .join("")}
      <div class="khandha__ghost">06 &nbsp;&middot;&nbsp; there is no sixth row</div>
    </div>`;
}

/* ==========================================================================
   12 — Searchable term map
   ========================================================================== */

function dgGloss() {
  return `
    <div class="gloss" data-interactive="gloss">
      <label class="visually-hidden" for="glossq">Filter terms</label>
      <input class="gloss__search" id="glossq" type="search" autocomplete="off"
             placeholder="filter — try craving, fire, ජවන, observer">
      <div class="gloss__list" data-list>
        ${TERMS.map(
          ([pali, lit, sys, note]) => `
          <div class="gloss__item"
               data-hay="${[pali, SI[pali] || "", lit, sys, note].join(" ").toLowerCase().replace(/"/g, "")}">
            <span class="gloss__pali">
              <span class="gloss__ic">${icon(ICON_FOR[pali] || "glossary")}</span>${pali}
              <span class="gloss__si">${SI[pali] || ""}</span>
              <span class="gloss__lit">${lit}</span>
            </span>
            <span class="gloss__sys">${sys}</span>
            <span class="gloss__def">${note}</span>
          </div>`
        ).join("")}
      </div>
      <p class="gloss__empty" data-empty hidden>no term matches that.</p>
    </div>`;
}

/* ==========================================================================
   registry
   ========================================================================== */

const registry = {
  loop: dgLoop,
  marks: dgMarks,
  self: dgSelf,
  senses: dgSenses,
  chain: dgChain,
  karma: dgKarma,
  gap: dgGapDemo,
  exit: dgExit,
  path8: (o) => dgPath(o.items),
  roots: (o) => dgRoots(o.rows),
  khandha: (o) => dgKhandha(o.items),
  gloss: dgGloss,
};

export function diagram(name, opts) {
  const fn = registry[name];
  if (!fn) {
    console.warn("unknown diagram:", name);
    return `<p class="dg-readout">missing diagram: ${name}</p>`;
  }
  return fn(opts);
}

/* ==========================================================================
   interactivity
   ========================================================================== */

export function initDiagrams(root) {
  root.querySelectorAll('[data-interactive="gap"]').forEach(wireGap);
  root.querySelectorAll('[data-interactive="exit"]').forEach(wireExit);
  root.querySelectorAll('[data-interactive="khandha"]').forEach(wireKhandha);
  root.querySelectorAll('[data-interactive="gloss"]').forEach(wireGloss);
}

function wireGloss(el) {
  const input = el.querySelector(".gloss__search");
  const items = [...el.querySelectorAll(".gloss__item")];
  const empty = el.querySelector("[data-empty]");

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    let hits = 0;
    items.forEach((it) => {
      const match = !q || it.dataset.hay.includes(q);
      it.hidden = !match;
      if (match) hits++;
    });
    empty.hidden = hits > 0;
  });
}

function wireKhandha(el) {
  el.querySelectorAll(".khandha__row").forEach((row) => {
    row.addEventListener("click", () => {
      const open = row.getAttribute("aria-expanded") === "true";
      el.querySelectorAll(".khandha__row").forEach((r) =>
        r.setAttribute("aria-expanded", "false")
      );
      row.setAttribute("aria-expanded", open ? "false" : "true");
    });
  });
}

function wireGap(el) {
  const stages = [...el.querySelectorAll(".gapdemo__stage")];
  const readout = el.querySelector("[data-readout]");
  const obsBtn = el.querySelector("[data-observer]");
  let observer = false;
  let running = false;

  const VALENCE = {
    pleasant: ["pleasant", "pull it closer", "wanting"],
    unpleasant: ["unpleasant", "push it away", "aversion"],
    neutral: ["neutral", "reach for something louder", "restlessness"],
  };

  obsBtn.addEventListener("click", () => {
    observer = !observer;
    obsBtn.setAttribute("aria-pressed", String(observer));
    obsBtn.textContent = `observer: ${observer ? "on" : "off"}`;
    readout.innerHTML = observer
      ? 'Observer attached. <b>sati</b> does not block the feeling. It just makes the gap long enough to be noticed.'
      : "Observer detached. Feeling will hand straight over to craving.";
  });

  const clear = () => stages.forEach((s) => s.classList.remove("is-live", "is-halt", "is-done"));

  el.querySelectorAll("[data-send]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      if (running) return;
      running = true;
      clear();

      const kind = btn.dataset.send;
      const [tone, pull, label] = VALENCE[kind];
      const stop = observer ? 3 : stages.length;
      const step = MOTION ? 480 : 0;

      for (let i = 0; i < stop; i++) {
        stages[i].classList.add("is-live");
        if (i === 0) readout.innerHTML = `Input arrives at a sense port. <b>contact</b> happens.`;
        if (i === 1)
          readout.innerHTML = `The event is tagged <b>${tone}</b>. This part is not optional — feeling is automatic.`;
        if (i === 2 && observer)
          readout.innerHTML = `Feeling is <b>seen</b> as feeling. The urge to ${pull} arises and is not taken up.`;
        if (i === 2 && !observer)
          readout.innerHTML = `The gap passes unnoticed. Nothing was there to notice it.`;
        if (i === 3) readout.innerHTML = `<b>${label}</b> fires. The system now wants the next moment to be different.`;
        if (i === 4) readout.innerHTML = `The wanting is held on to. It becomes a position worth defending.`;
        await sleep(step);
        if (i < stop - 1) stages[i].classList.replace("is-live", "is-done");
      }

      if (observer) {
        stages[2].classList.remove("is-live");
        stages[2].classList.add("is-halt");
        readout.innerHTML = `<span class="halt">Chain stops here.</span> Feeling arose, was known, and passed. Nothing downstream was fed.`;
      } else {
        stages[stages.length - 1].classList.add("is-done");
        readout.innerHTML = `Chain completes. <b>becoming</b> is set up, and the loop has its fuel for the next turn.`;
      }
      running = false;
    });
  });
}

function wireExit(el) {
  const fuel = el.querySelector("[data-fuel]");
  const flame = el.querySelector("[data-flame]");
  const note = el.querySelector("[data-exitnote]");
  const readout = el.querySelector("[data-readout]");

  el.querySelector("[data-cut]").addEventListener("click", () => {
    fuel.classList.add("is-cut");
    flame.classList.add("is-out");
    note.textContent = "out";
    readout.innerHTML =
      'The flame is not hiding somewhere else now, and it has not been destroyed. It was never a thing — it was a process, and the process stopped. <b>nibbāna</b> is that word: going out, unbinding.';
  });

  el.querySelector("[data-restore]").addEventListener("click", () => {
    fuel.classList.remove("is-cut");
    flame.classList.remove("is-out");
    note.textContent = "fed";
    readout.innerHTML = "The fire burns because it is fed. Nothing else keeps it going.";
  });
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
