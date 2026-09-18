/* ==========================================================================
   path.js — මාර්ගය · the path, complete

   Three sections.

   1. The thirty-seven wings to awakening, which is the Buddha's own list of
      what he taught (DN 16) — and the observation that they are fourteen
      distinct qualities reused, not thirty-seven separate things. The counts
      here are computed from the data rather than asserted, so they cannot
      drift: the commentarial reckoning gives viriya nine times, sati eight,
      paññā five, samādhi four, saddhā twice, and nine qualities once each.

   2. The gradual training — the order the path is actually walked in, which
      the eightfold path does not give you because it is a description rather
      than a procedure.

   3. The ten fetters as a register, and what each of the four stages clears.
   ========================================================================== */

import { icon } from "./icons.js";

const MOTION =
  typeof window === "undefined" ||
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- the fourteen ---------- */

export const QUALITIES = {
  viriya:    { pali: "viriya",        si: "විරිය",     en: "energy",        ic: "bolt",
    d: "Effort applied and sustained. The most-repeated quality in the whole list, which is the tradition saying something about what actually limits progress." },
  sati:      { pali: "sati",          si: "සති",       en: "mindfulness",   ic: "observer",
    d: "Keeping something in view. Second most repeated, and the one the entire main board turns on." },
  panna:     { pali: "paññā",         si: "පඤ්ඤා",     en: "wisdom",        ic: "magga",
    d: "Seeing how it works. Appears under four different names — vīmaṃsā, paññā, dhammavicaya, sammā-diṭṭhi — which is why it is easy to miss that they are one thing." },
  samadhi:   { pali: "samādhi",       si: "සමාධි",     en: "collectedness", ic: "practice",
    d: "The mind gathered into one piece instead of scattered." },
  saddha:    { pali: "saddhā",        si: "සද්ධා",     en: "confidence",    ic: "marks",
    d: "Not belief. Enough working trust to try the method before you have results — and it appears only twice, always paired with wisdom to balance it." },
  chanda:    { pali: "chanda",        si: "ඡන්ද",      en: "desire to do",  ic: "craving",
    d: "Wanting to do the thing. Note that this is wholesome desire, and the texts are content to use the same family of words as for craving." },
  citta:     { pali: "citta",         si: "චිත්ත",     en: "mind",          ic: "citta",
    d: "Consciousness itself taken as the base of accomplishment — the mind applied to the task." },
  piti:      { pali: "pīti",          si: "පීති",      en: "rapture",       ic: "feeling",
    d: "Gladness with an edge of energy in it. Arises on the way and is explicitly not the destination." },
  passaddhi: { pali: "passaddhi",     si: "පස්සද්ධි",  en: "tranquillity",  ic: "bhavanga",
    d: "Body and mind settling. The step between rapture and collectedness." },
  upekkha:   { pali: "upekkhā",       si: "උපේක්ඛා",   en: "equanimity",    ic: "marks",
    d: "Even-mindedness. Last of the seven awakening factors, and not the same as the neutral feeling of the same name." },
  sankappa:  { pali: "sammā-saṅkappa", si: "සංකප්ප",   en: "intention",     ic: "karma",
    d: "The direction the will is set in: letting go, goodwill, not harming." },
  vaca:      { pali: "sammā-vācā",    si: "වාචා",      en: "speech",        ic: "senses",
    d: "No lying, nothing that divides people, no harshness, no empty chatter." },
  kammanta:  { pali: "sammā-kammanta", si: "කම්මන්ත",  en: "action",        ic: "clinging",
    d: "Restraint at the point where intention becomes irreversible." },
  ajiva:     { pali: "sammā-ājīva",   si: "ආජීව",      en: "livelihood",    ic: "store",
    d: "Not earning in a way that requires harm." },
};

/* ---------- the seven sets ---------- */

export const SETS = [
  {
    id: "satipatthana", pali: "cattāro satipaṭṭhānā", si: "සතර සතිපට්ඨාන",
    en: "four foundations of mindfulness", n: 4, ch: "practice",
    d: "The four domains observation is developed in. They widen as they go: from the coarsest signal to the mechanism itself.",
    items: [
      ["kāyānupassanā", "කායානුපස්සනා", "the body", "sati"],
      ["vedanānupassanā", "වේදනානුපස්සනා", "feelings", "sati"],
      ["cittānupassanā", "චිත්තානුපස්සනා", "states of mind", "sati"],
      ["dhammānupassanā", "ධම්මානුපස්සනා", "the processes", "sati"],
    ],
  },
  {
    id: "padhana", pali: "cattāro sammappadhānā", si: "සතර සම්මප්පධාන",
    en: "four right efforts", n: 4, ch: "path",
    d: "One quality, energy, in four modes. Stated as a maintenance loop rather than as an exhortation — prevent, abandon, arouse, sustain.",
    items: [
      ["saṃvara-padhāna", "සංවර පධාන", "prevent what has not arisen", "viriya"],
      ["pahāna-padhāna", "පහාන පධාන", "abandon what has arisen", "viriya"],
      ["bhāvanā-padhāna", "භාවනා පධාන", "arouse what has not arisen", "viriya"],
      ["anurakkhaṇā-padhāna", "අනුරක්ඛණා පධාන", "maintain what has arisen", "viriya"],
    ],
  },
  {
    id: "iddhipada", pali: "cattāro iddhipādā", si: "සතර ඉද්ධිපාද",
    en: "four bases of accomplishment", n: 4, ch: "practice",
    d: "Four different things any one of which can carry the work. Which one drives you is temperament, not doctrine.",
    items: [
      ["chanda", "ඡන්ද", "wanting to do it", "chanda"],
      ["viriya", "විරිය", "energy", "viriya"],
      ["citta", "චිත්ත", "mind applied to it", "citta"],
      ["vīmaṃsā", "වීමංසා", "investigation", "panna"],
    ],
  },
  {
    id: "indriya", pali: "pañca indriyāni", si: "පඤ්ච ඉන්ද්‍රිය",
    en: "five faculties", n: 5, ch: "path",
    d: "Five capacities under development. Traditionally balanced in pairs — confidence against wisdom, energy against collectedness — with mindfulness holding the middle and never able to be excessive.",
    items: [
      ["saddhā", "සද්ධා", "confidence", "saddha"],
      ["viriya", "විරිය", "energy", "viriya"],
      ["sati", "සති", "mindfulness", "sati"],
      ["samādhi", "සමාධි", "collectedness", "samadhi"],
      ["paññā", "පඤ්ඤා", "wisdom", "panna"],
    ],
  },
  {
    id: "bala", pali: "pañca balāni", si: "පඤ්ච බල",
    en: "five powers", n: 5, ch: "path",
    d: "The identical five — listed twice on purpose. As faculties they are being developed; as powers they have become unshakeable. Same qualities, different maturity.",
    items: [
      ["saddhā", "සද්ධා", "confidence", "saddha"],
      ["viriya", "විරිය", "energy", "viriya"],
      ["sati", "සති", "mindfulness", "sati"],
      ["samādhi", "සමාධි", "collectedness", "samadhi"],
      ["paññā", "පඤ්ඤා", "wisdom", "panna"],
    ],
  },
  {
    id: "bojjhanga", pali: "satta bojjhaṅgā", si: "සත්ත බොජ්ඣංග",
    en: "seven factors of awakening", n: 7, ch: "practice",
    d: "In sequence, and the sequence matters: mindfulness notices, investigation examines, energy sustains, and the last four are what a settling mind does on its own.",
    items: [
      ["sati", "සති", "mindfulness", "sati"],
      ["dhammavicaya", "ධම්මවිචය", "investigation", "panna"],
      ["viriya", "විරිය", "energy", "viriya"],
      ["pīti", "පීති", "rapture", "piti"],
      ["passaddhi", "පස්සද්ධි", "tranquillity", "passaddhi"],
      ["samādhi", "සමාධි", "collectedness", "samadhi"],
      ["upekkhā", "උපේක්ඛා", "equanimity", "upekkha"],
    ],
  },
  {
    id: "magga", pali: "ariya aṭṭhaṅgika magga", si: "ආර්ය අෂ්ටාංගික මාර්ගය",
    en: "the eightfold path", n: 8, ch: "path",
    d: "The one everybody knows, and the only set that carries the ethics factors. Three of its eight appear nowhere else in the thirty-seven.",
    items: [
      ["sammā-diṭṭhi", "සම්මා දිට්ඨි", "complete view", "panna"],
      ["sammā-saṅkappa", "සම්මා සංකප්ප", "complete intention", "sankappa"],
      ["sammā-vācā", "සම්මා වාචා", "complete speech", "vaca"],
      ["sammā-kammanta", "සම්මා කම්මන්ත", "complete action", "kammanta"],
      ["sammā-ājīva", "සම්මා ආජීව", "complete livelihood", "ajiva"],
      ["sammā-vāyāma", "සම්මා වායාම", "complete effort", "viriya"],
      ["sammā-sati", "සම්මා සති", "complete mindfulness", "sati"],
      ["sammā-samādhi", "සම්මා සමාධි", "complete collectedness", "samadhi"],
    ],
  },
];

/** Occurrence counts, derived rather than stated, so they cannot drift. */
export function tally() {
  const counts = {};
  let total = 0;
  for (const s of SETS)
    for (const [, , , q] of s.items) {
      counts[q] = (counts[q] || 0) + 1;
      total++;
    }
  return { counts, total, distinct: Object.keys(counts).length };
}

/* ---------- the gradual training ---------- */

export const GRADUAL = [
  { n: "01", pali: "saddhā", si: "සද්ධා", en: "hearing it, and being willing to test it",
    noise: 100,
    d: "Someone explains the teaching and you find it worth trying. Not belief — working trust, of the kind you extend to any method before you have results.",
    why: "Nothing below this can start without it, because every later stage costs effort you would not spend on something you thought was nonsense." },
  { n: "02", pali: "sīla", si: "සීල", en: "restraint in what you do and say",
    noise: 82,
    d: "The precepts, and behind them the principle: stop doing the things that require concealment.",
    why: "A mind maintaining a cover story has no capacity left to observe with. This is the first and biggest drop in the noise floor." },
  { n: "03", pali: "santuṭṭhi", si: "සන්තුට්ඨි", en: "wanting less",
    noise: 70,
    d: "Contentment with little. Traditionally stated as a monastic austerity; the lay version is simply fewer open loops.",
    why: "Every want in progress is a background process. Fewer of them, more available capacity." },
  { n: "04", pali: "indriyasaṃvara", si: "ඉන්ද්‍රියසංවර", en: "guarding the six doors",
    noise: 58,
    d: "Receiving input without launching the elaboration that normally follows. Not looking at less — doing less with what arrives.",
    why: "This is papañca prevention, and it is where the main board's gap first becomes a practice rather than a diagram." },
  { n: "05", pali: "sati-sampajañña", si: "සති සම්පජඤ්ඤ", en: "knowing what you are doing while you do it",
    noise: 46,
    d: "Clear awareness in ordinary acts — walking, eating, reaching, speaking. The texts list the mundane activities deliberately.",
    why: "Formal sitting is rehearsal. This is where the capacity is actually built, and without it the cushion does not transfer." },
  { n: "06", pali: "nīvaraṇappahāna", si: "නීවරණ ප්‍රහාණය", en: "putting down the five hindrances",
    noise: 34,
    d: "Wanting, ill will, dullness, agitation, doubt. Recognise which is present, know what feeds it, stop feeding it.",
    why: "These are the five specific things that prevent collectedness. Not obstacles in general — a named, finite, addressable list." },
  { n: "07", pali: "jhāna", si: "ධ්‍යාන", en: "collectedness, deepening in stages",
    noise: 20,
    d: "Four stages, each shedding a factor: applied thought goes, then rapture, then pleasure, leaving equanimity and one-pointedness.",
    why: "Raises the resolution. Everything after this depends on being able to observe at a grain that a scattered mind cannot reach." },
  { n: "08", pali: "vipassanā", si: "විපස්සනා", en: "turning that steadiness on the process",
    noise: 12,
    d: "The collected mind directed at arising and passing rather than at its object. This is where the three marks stop being propositions.",
    why: "Calm alone changes nothing structural. This is what the calm was for." },
  { n: "09", pali: "tevijjā", si: "තෙවිජ්ජා", en: "the three knowledges",
    noise: 5,
    d: "Past lives; how beings pass away and reappear; and the ending of the taints. The first two are traditional; the third is the one the texts treat as decisive.",
    why: "Stated as the content of the awakening night itself — three findings, in order, the last of which is the actual break." },
  { n: "10", pali: "vimutti", si: "විමුක්ති", en: "release, and knowing it is release",
    noise: 0,
    d: "The fires out, and the knowledge that they are out. The texts always give both halves — the second is what makes it verifiable rather than a mood.",
    why: "The exit condition from chapter 12, reached by walking the nine stages above it." },
];

/* ---------- the ten fetters ---------- */

export const FETTERS = [
  ["01", "sakkāya-diṭṭhi", "සක්කාය දිට්ඨි", "the view that there is a self in here", "lower",
   "The first to go, and it is the anattā argument finally landing rather than being agreed with."],
  ["02", "vicikicchā", "විචිකිච්ඡා", "paralysing doubt", "lower",
   "Not honest questioning — the specific inability to commit to a direction. It ends because something has been seen, not because it was argued away."],
  ["03", "sīlabbata-parāmāsa", "සීලබ්බත පරාමාස", "trusting rites to do the work", "lower",
   "Taking the form for the thing. Notably this includes over-trusting the practice itself."],
  ["04", "kāmarāga", "කාමරාග", "sensual desire", "lower",
   "Weakened at the second stage, gone at the third. Note how late this is — much later than most people assume the first stage means."],
  ["05", "byāpāda", "ව්‍යාපාද", "ill will", "lower",
   "Same schedule as sensual desire, and for the same structural reason: both are reactions to the feeling tag."],
  ["06", "rūparāga", "රූපරාග", "desire for fine-material existence", "higher",
   "Attachment to the jhāna states themselves. A refined pleasant state is still a pleasant state."],
  ["07", "arūparāga", "අරූපරාග", "desire for formless existence", "higher",
   "The same, one level subtler."],
  ["08", "māna", "මාන", "conceit", "higher",
   "Not arrogance. The bare comparing — better than, worse than, equal to — which survives long after arrogance has gone."],
  ["09", "uddhacca", "උද්ධච්ච", "restlessness", "higher",
   "A residual unsettledness, very fine, and one of the last things to go."],
  ["10", "avijjā", "අවිජ්ජා", "not seeing", "higher",
   "The head of the chain from chapter 06, and the last fetter to fall. Everything else was downstream of it."],
];

export const STAGES = [
  { id: "sotapanna", pali: "sotāpanna", si: "සෝවාන්", en: "stream-enterer",
    clears: [0, 1, 2], weakens: [],
    d: "The first three fall permanently. Traditionally: at most seven more lives, and no falling back.",
    note: "Notice what this is <b>not</b>. Craving is untouched. What has gone is the view that there is someone here for the craving to belong to." },
  { id: "sakadagami", pali: "sakadāgāmi", si: "සකදාගාමී", en: "once-returner",
    clears: [0, 1, 2], weakens: [3, 4],
    d: "The same three gone, and sensual desire and ill will substantially weakened — not yet ended.",
    note: "The only stage defined by attenuation rather than by destruction, which is why it is the least discussed of the four." },
  { id: "anagami", pali: "anāgāmi", si: "අනාගාමී", en: "non-returner",
    clears: [0, 1, 2, 3, 4], weakens: [],
    d: "All five lower fetters gone. Sensual desire and ill will do not arise at all.",
    note: "Only now is craving for sense objects actually finished — four fetters and three stages after the process began." },
  { id: "arahant", pali: "arahant", si: "රහත්", en: "fully released",
    clears: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], weakens: [],
    d: "All ten. The fires named on the main board are out, and nothing is being written to the loop.",
    note: "The five higher fetters are the ones nobody expects: attachment to refined states, bare comparison, and a residual restlessness. Coarse wrongdoing went nine fetters ago." },
];

/* ---------- markup ---------- */

function qualityChips() {
  const { counts } = tally();
  return Object.entries(QUALITIES)
    .sort((a, b) => counts[b[0]] - counts[a[0]])
    .map(
      ([id, q]) => `
      <button class="pq" data-quality="${id}">
        <span class="pq__n">${counts[id]}</span>
        <span class="pq__body">
          <span class="pq__pali">${q.pali}</span>
          <span class="pq__si">${q.si}</span>
          <span class="pq__en">${q.en}</span>
        </span>
      </button>`
    )
    .join("");
}

function setCards() {
  return SETS.map(
    (s) => `
    <section class="pset" data-set="${s.id}">
      <header class="pset__head">
        <span class="pset__n">${s.n}</span>
        <span>
          <span class="pset__en">${s.en}</span>
          <span class="pset__pali">${s.pali}<span class="pset__si">${s.si}</span></span>
        </span>
      </header>
      <p class="pset__d">${s.d}</p>
      <div class="pset__items">
        ${s.items
          .map(
            ([pali, si, en, q]) => `
          <div class="pitem" data-q="${q}">
            <span class="pitem__pali">${pali}</span>
            <span class="pitem__si">${si}</span>
            <span class="pitem__en">${en}</span>
          </div>`
          )
          .join("")}
      </div>
    </section>`
  ).join("");
}

function gradualCards() {
  return GRADUAL.map(
    (g, i) => `
    <button class="pg" data-grad="${i}">
      <span class="pg__n">${g.n}</span>
      <span class="pg__body">
        <span class="pg__en">${g.en}</span>
        <span class="pg__pali">${g.pali}<span class="pg__si">${g.si}</span></span>
      </span>
    </button>`
  ).join("");
}

function fetterRows() {
  return FETTERS.map(
    ([n, pali, si, en, band], i) => `
    <button class="pf pf--${band}" data-fetter="${i}">
      <span class="pf__n">${n}</span>
      <span class="pf__body">
        <span class="pf__pali">${pali}<span class="pf__si">${si}</span></span>
        <span class="pf__en">${en}</span>
      </span>
      <span class="pf__state" data-state>held</span>
    </button>`
  ).join("");
}

export function pathView() {
  const t = tally();

  return `
  <div class="pathb" data-path>

    <h2 class="kx-h">The thirty-seven · බෝධිපාක්ෂික ධර්ම</h2>
    <p class="kx-lead">
      Near the end of his life the Buddha named the teachings to be preserved — not
      the whole canon, but <b>thirty-seven things in seven sets</b>. This is as close
      as there is to his own answer to "what did you teach."
    </p>
    <p class="kx-lead">
      And they are not thirty-seven separate things. Count the distinct qualities and
      you get <b>${t.distinct}</b>, reused across the sets in different arrangements.
      Press any one below and watch it light up everywhere it occurs.
    </p>

    <div class="pq__grid">${qualityChips()}</div>

    <div class="dg-readout" data-qout>
      ${t.total} items. ${t.distinct} distinct qualities. Press one to trace it.
    </div>

    <div class="pset__grid">${setCards()}</div>

    <h2 class="kx-h">The order it is walked in · අනුපුබ්බ සික්ඛා</h2>
    <p class="kx-lead">
      The eightfold path is a <i>description</i> — eight things developed together,
      none finished before the next starts. The <b>gradual training</b> is the
      <i>procedure</i>: the sequence the texts actually lay out, over and over, in
      the same order.
    </p>
    <p class="kx-lead">
      Read as a system, every stage exists to lower the noise floor for the next one.
      Step through it and watch the meter.
    </p>

    <div class="pgrad">
      <div class="pgrad__track">${gradualCards()}</div>
      <div class="pmeter">
        <div class="pmeter__head">
          <span class="pmeter__label">noise floor</span>
          <span class="pmeter__val" data-noise>100</span>
        </div>
        <div class="pmeter__bar"><i data-noisebar style="height:100%"></i></div>
        <div class="pmeter__foot">how much of the mind is committed to something else</div>
      </div>
    </div>

    <div class="sim__controls">
      <button class="dg-btn" data-walk>walk it</button>
      <button class="dg-btn" data-gradreset>reset</button>
    </div>
    <div class="dg-readout" data-gout>
      Ten stages. Press any one to read it, or walk the whole thing.
    </div>

    <h2 class="kx-h">What actually changes · දස සංයෝජන</h2>
    <p class="kx-lead">
      Ten fetters, and four stages that clear them. This is the tradition's answer to
      "how would anyone know they were getting anywhere" — and it is unusually
      specific about the order.
    </p>

    <div class="pstages">
      ${STAGES.map(
        (s) => `
        <button class="pstage" data-stage="${s.id}">
          <span class="pstage__en">${s.en}</span>
          <span class="pstage__pali">${s.pali}</span>
          <span class="pstage__si">${s.si}</span>
          <span class="pstage__n">${s.clears.length}${s.weakens.length ? " + " + s.weakens.length : ""}</span>
        </button>`
      ).join("")}
      <button class="pstage" data-stage="none">
        <span class="pstage__en">not yet</span>
        <span class="pstage__pali">puthujjana</span>
        <span class="pstage__si">පෘථග්ජන</span>
        <span class="pstage__n">0</span>
      </button>
    </div>

    <div class="pfetters">${fetterRows()}</div>

    <div class="dg-readout" data-fout>
      Press a stage. The register above shows which of the ten it clears — and the
      surprise for most people is how late sensual desire appears.
    </div>

    <div class="machine__panel" data-panel>
      <div class="machine__phead">
        <span class="machine__picon" data-picon>${icon("magga")}</span>
        <span class="machine__pname" data-pname>the path</span>
        <span class="machine__ppali" data-ppali>magga</span>
        <span class="machine__psi" data-psi>මාර්ගය</span>
        <span class="machine__psys" data-psys>fourteen qualities, one order</span>
      </div>
      <p class="machine__prole" data-prole>
        Three things on one board: what the Buddha said he taught, the order it is
        walked in, and how anyone would know they were getting anywhere. Press
        anything to open it.
      </p>
      <p class="machine__pnote" data-pnote>
        The thirty-seven and the gradual training are both sutta material. The count
        of fourteen distinct qualities is commentarial — and it is arithmetic, so you
        can check it yourself against the sets above.
      </p>
      <ul class="machine__pex" data-pex></ul>
      <a class="machine__plink" data-plink href="#/path">Read chapter 10 &rarr;</a>
    </div>
  </div>`;
}

/* ---------- interactivity ---------- */

export function wirePath(el) {
  const t = tally();
  const qout = el.querySelector("[data-qout]");
  const gout = el.querySelector("[data-gout]");
  const fout = el.querySelector("[data-fout]");
  const noiseVal = el.querySelector("[data-noise]");
  const noiseBar = el.querySelector("[data-noisebar]");
  const items = [...el.querySelectorAll(".pitem")];
  const gradBtns = [...el.querySelectorAll("[data-grad]")];
  const fetterBtns = [...el.querySelectorAll("[data-fetter]")];
  let walking = false;

  const p = {
    name: el.querySelector("[data-pname]"),
    pali: el.querySelector("[data-ppali]"),
    si: el.querySelector("[data-psi]"),
    sys: el.querySelector("[data-psys]"),
    role: el.querySelector("[data-prole]"),
    note: el.querySelector("[data-pnote]"),
    ex: el.querySelector("[data-pex]"),
    icon: el.querySelector("[data-picon]"),
  };

  function paint(o) {
    p.icon.innerHTML = icon(o.ic || "magga");
    p.name.textContent = o.label;
    p.pali.textContent = o.pali;
    p.si.textContent = o.si;
    p.sys.textContent = o.sys;
    p.role.innerHTML = o.role;
    p.note.innerHTML = o.note;
    p.ex.innerHTML = (o.ex || []).map((e) => `<li>${e}</li>`).join("");
  }

  /* --- quality tracing --- */

  el.querySelectorAll("[data-quality]").forEach((b) => {
    b.addEventListener("click", () => {
      const id = b.dataset.quality;
      const q = QUALITIES[id];
      const on = !b.classList.contains("is-on");

      el.querySelectorAll("[data-quality]").forEach((x) => x.classList.remove("is-on"));
      items.forEach((n) => n.classList.remove("is-lit"));
      el.classList.toggle("is-tracing", on);

      if (!on) {
        qout.innerHTML = `${t.total} items. ${t.distinct} distinct qualities. Press one to trace it.`;
        return;
      }

      b.classList.add("is-on");
      const hits = items.filter((n) => n.dataset.q === id);
      hits.forEach((n) => n.classList.add("is-lit"));

      const where = SETS.filter((s) => s.items.some(([, , , qq]) => qq === id))
        .map((s) => s.en)
        .join(", ");

      qout.innerHTML =
        `<b>${q.pali}</b> <span class="pq__si">${q.si}</span> — ${q.en}. ` +
        `Appears <b>${t.counts[id]}</b> ${t.counts[id] === 1 ? "time" : "times"}, ` +
        `in ${where}.<div class="pq__d">${q.d}</div>`;

      paint({
        label: q.en, pali: q.pali, si: q.si, ic: q.ic,
        sys: `${t.counts[id]} of the 37`,
        role: q.d,
        note: `One of the fourteen distinct qualities. The thirty-seven are these fourteen, arranged seven ways.`,
        ex: [],
      });
    });
  });

  /* --- the gradual training --- */

  function showGrad(i) {
    const g = GRADUAL[i];
    gradBtns.forEach((b, j) => {
      b.classList.toggle("is-on", j === i);
      b.classList.toggle("is-done", j < i);
    });
    noiseVal.textContent = g.noise;
    noiseBar.style.height = `${g.noise}%`;
    gout.innerHTML =
      `<div class="kx-runhead">${g.n} · ${g.en} <i>${g.pali}</i> ` +
      `<span class="pq__si">${g.si}</span></div>${g.d}` +
      `<div class="pg__why"><b>Why it comes here:</b> ${g.why}</div>`;
    paint({
      label: g.en, pali: g.pali, si: g.si, ic: "magga",
      sys: `stage ${g.n} of 10`,
      role: g.d,
      note: `<b>Why it comes here:</b> ${g.why}`,
      ex: [],
    });
  }

  gradBtns.forEach((b, i) =>
    b.addEventListener("click", () => !walking && showGrad(i))
  );

  el.querySelector("[data-walk]").addEventListener("click", async () => {
    if (walking) return;
    walking = true;
    for (let i = 0; i < GRADUAL.length; i++) {
      showGrad(i);
      await sleep(MOTION ? 2100 : 0);
    }
    gradBtns.forEach((b) => b.classList.add("is-done"));
    gout.innerHTML =
      `<div class="kx-runhead">done · from 100 to 0</div>` +
      `Every stage lowered the floor for the next one. That is the whole argument for ` +
      `why ethics sits near the top of a list that ends in release — not because it is ` +
      `the entry fee, but because a mind with nothing to conceal is quiet enough to ` +
      `observe with.`;
    walking = false;
  });

  el.querySelector("[data-gradreset]").addEventListener("click", () => {
    walking = false;
    gradBtns.forEach((b) => b.classList.remove("is-on", "is-done"));
    noiseVal.textContent = "100";
    noiseBar.style.height = "100%";
    gout.textContent = "Ten stages. Press any one to read it, or walk the whole thing.";
  });

  /* --- the fetter register --- */

  function setStage(id) {
    const s = STAGES.find((x) => x.id === id);
    el.querySelectorAll("[data-stage]").forEach((b) =>
      b.classList.toggle("is-on", b.dataset.stage === id)
    );

    fetterBtns.forEach((b, i) => {
      const state = b.querySelector("[data-state]");
      b.classList.remove("is-cleared", "is-weak");
      if (s && s.clears.includes(i)) {
        b.classList.add("is-cleared");
        state.textContent = "gone";
      } else if (s && s.weakens.includes(i)) {
        b.classList.add("is-weak");
        state.textContent = "weakened";
      } else {
        state.textContent = "held";
      }
    });

    if (!s) {
      fout.innerHTML =
        "All ten held. This is the ordinary starting position, and the texts have a " +
        "plain word for it — <i>puthujjana</i>, one of the many.";
      paint({
        label: "not yet", pali: "puthujjana", si: "පෘථග්ජන", ic: "loop",
        sys: "0 of 10 cleared",
        role: "All ten fetters intact. The ordinary condition, and the one the whole site has been describing.",
        note: "Not a judgement. A starting state.",
        ex: [],
      });
      return;
    }

    fout.innerHTML =
      `<div class="kx-runhead">${s.en} · <i>${s.pali}</i> ` +
      `<span class="pq__si">${s.si}</span></div>${s.d}` +
      `<div class="pg__why">${s.note}</div>`;

    paint({
      label: s.en, pali: s.pali, si: s.si, ic: "exit",
      sys: `${s.clears.length} of 10 cleared`,
      role: s.d,
      note: s.note,
      ex: FETTERS.filter((_, i) => s.clears.includes(i)).map(
        ([n, pali, si, en]) => `<b>${n} ${pali}</b> <i>${si}</i> — ${en}`
      ),
    });
  }

  el.querySelectorAll("[data-stage]").forEach((b) =>
    b.addEventListener("click", () => setStage(b.dataset.stage))
  );

  fetterBtns.forEach((b, i) =>
    b.addEventListener("click", () => {
      const [n, pali, si, en, band, d] = FETTERS[i];
      paint({
        label: en, pali, si, ic: band === "lower" ? "clinging" : "avijja",
        sys: `fetter ${n} · ${band} five`,
        role: d,
        note:
          band === "lower"
            ? "One of the five lower fetters — the ones that bind to the sense sphere."
            : "One of the five higher fetters, and these are the ones nobody expects.",
        ex: [],
      });
    })
  );
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
