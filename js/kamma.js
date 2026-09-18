/* ==========================================================================
   kamma.js — පින් · පව් · විපාක · මරණය

   The everyday Sinhala Buddhist framework, laid out properly: what counts as
   merit and what counts as demerit, the three ways kamma is classified by how
   it ripens, and the death process — the last cognitive series, the death
   consciousness, and the relinking consciousness that follows it.

   Source layer: the ten bases of merit and the ten courses of action are in
   the suttas. The classification of kamma by function, priority and timing,
   and the detail of the death process, are Abhidhamma and commentary. Both
   are marked on the board.
   ========================================================================== */

import { icon } from "./icons.js";

const MOTION =
  typeof window === "undefined" ||
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- පින් — the ten bases of merit ---------- */

export const PUNNA = [
  ["dāna", "දාන", "giving", "Anything given away, and the giving matters more than the amount. The texts are specific that intention before, during and after all count."],
  ["sīla", "සීල", "virtue", "Not harming. Restraint at the point where intention becomes an irreversible act."],
  ["bhāvanā", "භාවනා", "cultivation", "Meditation, in the broad sense: developing the mind rather than only managing behaviour."],
  ["apacāyana", "අපචායන", "reverence", "Respect toward those worth respecting. Unfashionable, and it is on the list."],
  ["veyyāvacca", "වෙය්‍යාවච්ච", "service", "Helping, doing the work, being useful. Merit from labour rather than from gifts."],
  ["pattidāna", "පත්තිදාන", "sharing merit", "Offering the merit of what you did to others. Note that it does not reduce yours."],
  ["pattānumodanā", "පත්තානුමෝදනා", "rejoicing", "Being genuinely glad at someone else's good act. Free, and it is its own merit."],
  ["dhammassavana", "ධම්මස්සවන", "listening", "Hearing the teaching."],
  ["dhammadesanā", "ධම්මදේසනා", "teaching", "Explaining it to someone, without expecting anything for it."],
  ["diṭṭhijjukamma", "දිට්ඨිජ්ජුකම්ම", "straightening view", "Correcting how you see things. Listed last and it underwrites the other nine."],
];

/* ---------- පව් — the ten courses of unwholesome action ---------- */

export const PAPA = [
  { door: "body", si: "කාය", items: [
    ["pāṇātipāta", "පාණාතිපාත", "killing"],
    ["adinnādāna", "අදින්නාදාන", "taking what is not given"],
    ["kāmesu micchācāra", "කාමේසු මිච්ඡාචාර", "sexual misconduct"],
  ]},
  { door: "speech", si: "වචී", items: [
    ["musāvāda", "මුසාවාද", "lying"],
    ["pisuṇā vācā", "පිසුණා වාචා", "speech that divides people"],
    ["pharusā vācā", "ඵරුසා වාචා", "harsh speech"],
    ["samphappalāpa", "සම්ඵප්පලාප", "chatter with nothing in it"],
  ]},
  { door: "mind", si: "මනෝ", items: [
    ["abhijjhā", "අභිජ්ඣා", "covetousness"],
    ["byāpāda", "බ්‍යාපාද", "ill will"],
    ["micchā diṭṭhi", "මිච්ඡා දිට්ඨි", "wrong view"],
  ]},
];

/* ---------- විපාක — three ways kamma is classified ---------- */

export const VIPAKA = [
  {
    id: "kicca", title: "by what it does", pali: "kicca", si: "කෘත්‍යය",
    d: "Four roles. Only the first one produces a rebirth; the other three modify what the first one produced.",
    items: [
      ["janaka", "ජනක", "productive", "Generates the relinking consciousness and the results that follow. This is the one that decides where you land."],
      ["upatthambhaka", "උපත්ථම්භක", "supportive", "Produces nothing itself, but sustains and prolongs what the productive kamma set up."],
      ["upapīḷaka", "උපපීළක", "obstructive", "Weakens and interferes. The good result is there and keeps being undercut."],
      ["upaghātaka", "උපඝාතක", "destructive", "Cuts another kamma's effect off entirely and substitutes its own. The strongest of the four."],
    ],
  },
  {
    id: "pakadana", title: "by which ripens first", pali: "pākadāna", si: "පාක දාන",
    d: "When several are pending, this is the order of precedence. The fourth is everything left over.",
    items: [
      ["garuka", "ගරුක", "weighty", "Jhāna attainment on one side, the gravest acts on the other. Cannot be overtaken by anything else — if one exists, it goes first."],
      ["āsanna", "ආසන්න", "death-proximate", "What is done or recalled close to death. This is why the texts take the last hours seriously, and why people are reminded of their good acts then."],
      ["āciṇṇa", "ආචිණ්ණ", "habitual", "What you did repeatedly. In the absence of the first two, the habit decides — which is a quiet argument for what you do on ordinary days."],
      ["kaṭattā", "කටත්තා", "reserve", "Everything else, accumulated. Takes over when none of the above applies."],
    ],
  },
  {
    id: "pakakala", title: "by when it ripens", pali: "pākakāla", si: "පාක කාල",
    d: "Mapped, in the Abhidhamma, onto which of the seven javana moments did the work.",
    items: [
      ["diṭṭhadhamma-vedanīya", "දිට්ඨධම්ම වේදනීය", "in this life", "The first javana moment. Weakest, and if the conditions do not arrive in this life it lapses."],
      ["upapajja-vedanīya", "උපපජ්ජ වේදනීය", "in the next life", "The seventh javana moment. If it does not ripen in the very next existence, it lapses."],
      ["aparāpariya-vedanīya", "අපරාපරිය වේදනීය", "in any life after", "Javana moments two to six. This one never lapses while the process continues — it waits."],
      ["ahosi", "අහෝසි", "lapsed", "Did not get its conditions in time and no longer will. Not cancelled by anything — simply out of time."],
    ],
  },
];

/* ---------- මරණය — the last series, and what follows ---------- */

export const DEATH = [
  { n: "01", en: "the stream, running out", pali: "bhavaṅga", si: "භවාංග", cls: "bhav",
    t: "Ordinary resting consciousness, as it has been all along. Life is ending; this does not know that." },
  { n: "02", en: "turning toward", pali: "manodvārāvajjana", si: "මනෝද්වාරාවජ්ජන", cls: "kiriya",
    t: "The mind-door opens on an object one last time. Functional — it makes no kamma." },
  { n: "03", en: "the last run", pali: "maraṇāsanna javana", si: "මරණාසන්න ජවන", cls: "javana",
    t: "The final impulsion. <b>Five moments, not the usual seven</b> — weaker, because the body supporting it is failing. This is the last kamma of the life." },
  { n: "04", en: "registering", pali: "tadārammaṇa", si: "තදාරම්මණ", cls: "vipaka",
    t: "An after-image of the object, if it was strong enough. Sometimes present, sometimes not." },
  { n: "05", en: "death consciousness", pali: "cuti citta", si: "චුති සිත", cls: "cuti",
    t: "<b>The last citta of this life.</b> It performs one function — passing away — and it makes no kamma. Nothing about it is dramatic; it is the same resting consciousness doing its final job." },
  { n: "06", en: "relinking", pali: "paṭisandhi citta", si: "පටිසන්ධි සිත", cls: "patis",
    t: "<b>The first citta of the next life</b>, arising immediately, with no interval. It takes the <i>same object</i> the last javana took — which is why that object matters so much." },
  { n: "07", en: "the stream again", pali: "bhavaṅga", si: "භවාංග", cls: "bhav",
    t: "And the resting stream resumes, in a new existence, conditioned by the one before it. Nothing travelled. The relation is conditionality, not transport." },
];

/* ---------- what the last javana takes as its object ---------- */

export const OBJECTS = [
  {
    id: "kamma", pali: "kamma", si: "කර්මය", label: "the act itself",
    d: "The volitional act re-presents itself — you are, in effect, doing it again. Most often a habitual act, or a weighty one.",
    ex: "Someone who gave all their life finds themselves, at the end, in the act of giving.",
  },
  {
    id: "nimitta", pali: "kamma-nimitta", si: "කර්ම නිමිත්ත", label: "a sign of the act",
    d: "Not the act but something bound up with it — an object, a place, an instrument, a sound associated with what was habitually done.",
    ex: "A temple, a robe, a chanted line. Or, on the other side, the weapon.",
  },
  {
    id: "gati", pali: "gati-nimitta", si: "ගති නිමිත්ත", label: "a sign of where next",
    d: "A sign of the destination itself, appearing before it is reached.",
    ex: "The traditional accounts describe visions of the coming realm. Treat the accounts as the tradition's, and note that the mechanism is what this board is about.",
  },
];

/* ---------- the 31 realms ---------- */

export const REALMS = [
  ["4", "apāya", "අපාය", "the states of loss"],
  ["1", "manussa", "මනුෂ්‍ය", "human"],
  ["6", "deva", "දේව", "sense-sphere heavens"],
  ["16", "rūpa", "රූප බ්‍රහ්ම", "fine-material, reached through jhāna"],
  ["4", "arūpa", "අරූප බ්‍රහ්ම", "immaterial"],
];

/* ---------- board ---------- */

function punnaList() {
  return PUNNA.map(
    ([p, si, en, d], i) => `
    <button class="kx-row" data-punna="${i}">
      <span class="kx-n">${String(i + 1).padStart(2, "0")}</span>
      <span>
        <span class="kx-pali">${p}</span>
        <span class="kx-si">${si}</span>
        <span class="kx-en">${en}</span>
      </span>
    </button>`
  ).join("");
}

function papaList() {
  return PAPA.map(
    (g) => `
    <div class="kx-group">
      <div class="kx-ghead">${g.door} <span class="kx-si">${g.si}</span> <b>${g.items.length}</b></div>
      ${g.items
        .map(
          ([p, si, en]) => `
        <div class="kx-row kx-row--static">
          <span class="kx-n">&middot;</span>
          <span>
            <span class="kx-pali">${p}</span>
            <span class="kx-si">${si}</span>
            <span class="kx-en">${en}</span>
          </span>
        </div>`
        )
        .join("")}
    </div>`
  ).join("");
}

function vipakaPanels() {
  return VIPAKA.map(
    (v) => `
    <section class="kx-panel">
      <header class="kx-phead">
        <span class="kx-ptitle">${v.title}</span>
        <span class="kx-ppali">${v.pali}</span>
        <span class="kx-si">${v.si}</span>
      </header>
      <p class="kx-pdesc">${v.d}</p>
      <div class="kx-items">
        ${v.items
          .map(
            ([p, si, en, d], i) => `
          <button class="kx-item" data-vipaka="${v.id}:${i}">
            <span class="kx-ipali">${p}<span class="kx-si">${si}</span></span>
            <span class="kx-ien">${en}</span>
            <span class="kx-id">${d}</span>
          </button>`
          )
          .join("")}
      </div>
    </section>`
  ).join("");
}

function deathTrack() {
  return DEATH.map(
    (d, i) => `
    <div class="kx-step kx-step--${d.cls}" data-step="${i}">
      <span class="kx-stepn">${d.n}</span>
      <span class="kx-stepen">${d.en}</span>
      <span class="kx-steppali">${d.pali}</span>
      <span class="kx-stepsi">${d.si}</span>
    </div>`
  ).join("");
}

export function kammaView() {
  return `
  <div class="kamma" data-kamma>

    <section class="kx-two">
      <div class="kx-col kx-col--good">
        <header class="kx-chead">
          ${icon("magga")}
          <span class="kx-ctitle">පින් · merit</span>
          <span class="kx-cpali">dasa puññakiriya vatthu</span>
          <span class="kx-cn">10</span>
        </header>
        <p class="kx-cnote">
          Ten bases, and only three of them involve giving anything or sitting
          anywhere. Notice how many are free.
        </p>
        ${punnaList()}
      </div>

      <div class="kx-col kx-col--bad">
        <header class="kx-chead">
          ${icon("roots")}
          <span class="kx-ctitle">පව් · demerit</span>
          <span class="kx-cpali">dasa akusala kammapatha</span>
          <span class="kx-cn">10</span>
        </header>
        <p class="kx-cnote">
          Ten courses of action, sorted by which door they come out of. Three
          of them never leave the mind, and they count.
        </p>
        ${papaList()}
      </div>
    </section>

    <div class="kx-src">
      Both lists above are sutta material. Everything below is Abhidhamma and
      commentary — the same caveat the micro board carries.
    </div>

    <h2 class="kx-h">විපාක · how it ripens</h2>
    <p class="kx-lead">
      Kamma is intention, and <b>vipāka</b> is what comes of it. The tradition does
      not treat that as one process — it classifies it three ways at once, and any
      given kamma has a value in all three columns.
    </p>
    <div class="kx-panels">${vipakaPanels()}</div>

    <h2 class="kx-h">මරණය · the last series, and the first</h2>
    <p class="kx-lead">
      Death, in this analysis, is not a special event with its own machinery. It is
      the ordinary cognitive series from [the micro board](#/micro) running one last
      time, with a weaker javana — and then the next moment of consciousness arises
      somewhere else. <b>There is no gap and nothing crosses it.</b>
    </p>

    <div class="kx-track">${deathTrack()}</div>

    <div class="sim" data-runner>
      <div class="sim__head">
        ${icon("citta")}
        <span class="sim__title">What the last run takes as its object</span>
        <span class="sim__sub">three possibilities, and the next life takes the same one</span>
      </div>
      <div class="sim__picks">
        ${OBJECTS.map(
          (o) => `
          <button class="sim__pick" data-object="${o.id}">
            <span class="sim__picken">${o.label}</span>
            <span class="sim__picksi">${o.pali} · ${o.si}</span>
          </button>`
        ).join("")}
      </div>
      <div class="sim__controls">
        <button class="dg-btn" data-run>run the death process</button>
        <button class="dg-btn" data-reset>reset</button>
      </div>
      <div class="dg-readout" data-out>
        Pick an object, then run it. Watch where the series stops being this life
        and starts being the next one — and notice that nothing moves between them.
      </div>
    </div>

    <h2 class="kx-h">And where it lands · 31 භව</h2>
    <div class="kx-realms">
      ${REALMS.map(
        ([n, p, si, d]) => `
        <div class="kx-realm">
          <span class="kx-realmn">${n}</span>
          <span class="kx-realmp">${p}<span class="kx-si">${si}</span></span>
          <span class="kx-realmd">${d}</span>
        </div>`
      ).join("")}
      <div class="kx-realm kx-realm--total">
        <span class="kx-realmn">31</span>
        <span class="kx-realmp">in total</span>
        <span class="kx-realmd">
          Eleven of them sense-sphere, twenty beyond it. All thirty-one are
          <b>inside the loop</b> — which is the point the whole site keeps making.
          A better realm is a better position in the system, not the way out.
        </span>
      </div>
    </div>

    <div class="machine__panel" data-panel>
      <div class="machine__phead">
        <span class="machine__picon" data-picon>${icon("karma")}</span>
        <span class="machine__pname" data-pname>merit, demerit, and what comes of them</span>
        <span class="machine__ppali" data-ppali>kamma · vipāka</span>
        <span class="machine__psi" data-psi>පින් · පව් · විපාක</span>
        <span class="machine__psys" data-psys>the everyday frame</span>
      </div>
      <p class="machine__prole" data-prole>
        This is the layer most people actually grew up with, and it is usually
        taught as a moral ledger. It is not one. Kamma is intention, vipāka is
        what conditions produce, and no one is keeping score — which makes the
        classifications above mechanical rather than judicial. Click anything to
        open it.
      </p>
      <p class="machine__pnote" data-pnote>
        Merit improves your position. It does not end the process. See
        <b>chapter 08</b> on why those are different projects.
      </p>
      <ul class="machine__pex" data-pex></ul>
      <a class="machine__plink" data-plink href="#/karma">Read the chapter on kamma &rarr;</a>
    </div>
  </div>`;
}

/* ---------- interactivity ---------- */

const DEFAULT = {
  label: "merit, demerit, and what comes of them",
  pali: "kamma · vipāka", si: "පින් · පව් · විපාක", sys: "the everyday frame",
  role:
    "This is the layer most people actually grew up with, and it is usually taught as a moral ledger. It is not one. Kamma is intention, vipāka is what conditions produce, and no one is keeping score — which makes the classifications above mechanical rather than judicial. Click anything to open it.",
  note:
    "Merit improves your position. It does not end the process. See chapter 08 on why those are different projects.",
  ex: [], ch: "karma", link: "Read the chapter on kamma →",
};

export function wireKamma(el) {
  const p = {
    name: el.querySelector("[data-pname]"),
    pali: el.querySelector("[data-ppali]"),
    si: el.querySelector("[data-psi]"),
    sys: el.querySelector("[data-psys]"),
    role: el.querySelector("[data-prole]"),
    note: el.querySelector("[data-pnote]"),
    ex: el.querySelector("[data-pex]"),
    link: el.querySelector("[data-plink]"),
  };
  const out = el.querySelector("[data-out]");
  const steps = [...el.querySelectorAll(".kx-step")];
  let running = false;
  let object = null;

  function paint(o) {
    p.name.textContent = o.label;
    p.pali.textContent = o.pali;
    p.si.textContent = o.si;
    p.sys.textContent = o.sys;
    p.role.innerHTML = o.role;
    p.note.innerHTML = o.note;
    p.ex.innerHTML = (o.ex || []).map((e) => `<li>${e}</li>`).join("");
    p.link.href = `#/${o.ch}`;
    p.link.textContent = o.link || "Read the chapter →";
  }

  const clearSel = () =>
    el.querySelectorAll(".is-sel").forEach((n) => n.classList.remove("is-sel"));

  el.querySelectorAll("[data-punna]").forEach((b) => {
    b.addEventListener("click", () => {
      const [pali, si, en, d] = PUNNA[Number(b.dataset.punna)];
      clearSel();
      b.classList.add("is-sel");
      paint({
        label: en, pali, si, sys: "a base of merit",
        role: d,
        note: "One of ten. The list is in the suttas, and the ordering is not a ranking.",
        ex: [], ch: "karma", link: "Read the chapter on kamma →",
      });
    });
  });

  el.querySelectorAll("[data-vipaka]").forEach((b) => {
    b.addEventListener("click", () => {
      const [gid, i] = b.dataset.vipaka.split(":");
      const g = VIPAKA.find((x) => x.id === gid);
      const [pali, si, en, d] = g.items[Number(i)];
      clearSel();
      b.classList.add("is-sel");
      paint({
        label: en, pali, si, sys: g.title,
        role: d,
        note: `One of four, classified <b>${g.title}</b> — <i>${g.pali}</i>. Any given kamma has a value in this column and in the other two at the same time.`,
        ex: [], ch: "karma", link: "Read the chapter on kamma →",
      });
    });
  });

  el.querySelectorAll("[data-object]").forEach((b) => {
    b.addEventListener("click", () => {
      object = OBJECTS.find((o) => o.id === b.dataset.object);
      el.querySelectorAll("[data-object]").forEach((x) =>
        x.classList.toggle("is-on", x === b)
      );
      out.innerHTML =
        `<b>${object.pali}</b> <span class="kx-si">${object.si}</span> — ${object.d}` +
        `<div class="kx-ex">${object.ex}</div>` +
        `<div class="kx-hint">Now run it.</div>`;
    });
  });

  async function run() {
    if (running) return;
    if (!object) object = OBJECTS[0];
    el.querySelectorAll("[data-object]").forEach((x) =>
      x.classList.toggle("is-on", x.dataset.object === object.id)
    );
    running = true;
    steps.forEach((s) => s.classList.remove("is-live", "is-done"));

    for (let i = 0; i < DEATH.length; i++) {
      steps.forEach((s, j) => {
        s.classList.toggle("is-live", j === i);
        s.classList.toggle("is-done", j < i);
      });
      const d = DEATH[i];
      let body = d.t;
      if (d.cls === "javana")
        body += ` Its object here is <b>${object.pali}</b> <span class="kx-si">${object.si}</span> — ${object.label}.`;
      if (d.cls === "patis")
        body += ` So this one takes <b>${object.pali}</b> too. The object is the thread, and it is the only thing the two lives have in common.`;
      out.innerHTML =
        `<div class="kx-runhead">${d.n} · ${d.en} <i>${d.pali}</i> ` +
        `<span class="kx-si">${d.si}</span></div>${body}`;
      await sleep(MOTION ? 1900 : 0);
    }

    steps.forEach((s) => s.classList.remove("is-live"));
    steps.forEach((s) => s.classList.add("is-done"));
    out.innerHTML =
      `<div class="kx-runhead">done · and it is already the next life</div>` +
      `No soul made the trip, no interval passed, and nothing was transferred. ` +
      `One citta conditioned the next, exactly as it had been doing all along — ` +
      `the only difference is that this time the next one arose somewhere else. ` +
      `That is what <b>punabbhava</b> <span class="kx-si">පුනර්භවය</span> means: ` +
      `again-becoming, not again-being-you.`;
    running = false;
  }

  el.querySelector("[data-run]").addEventListener("click", run);
  el.querySelector("[data-reset]").addEventListener("click", () => {
    running = false;
    object = null;
    clearSel();
    steps.forEach((s) => s.classList.remove("is-live", "is-done"));
    el.querySelectorAll("[data-object]").forEach((x) => x.classList.remove("is-on"));
    out.textContent =
      "Pick an object, then run it. Watch where the series stops being this life and starts being the next one — and notice that nothing moves between them.";
    paint(DEFAULT);
  });

  paint(DEFAULT);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
