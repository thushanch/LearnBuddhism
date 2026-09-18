/* ==========================================================================
   machine.js — the whole system on one board

   Every part of the teaching drawn once, as a single circuit: six input
   ports, the bus, the pipeline, the loop closing on itself, the store where
   dispositions accumulate, the background processes, and the one branch out.

   Click any block to inspect it. The main trace is a single path, because
   the whole point is that this is one process and not fifteen topics.
   ========================================================================== */

const MOTION =
  typeof window === "undefined" ||
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- part reference: what the inspector shows ---------- */

export const PARTS = {
  ports: {
    label: "six input ports", pali: "saḷāyatana", sys: "I/O", ch: "senses",
    role: "Eye, ear, nose, tongue, body — and mind as the sixth, a port like the others rather than the thing reading them.",
    note: "Aggregate ① rūpa lives here: the physical side, sense organs included.",
  },
  bus: {
    label: "consciousness", pali: "viññāṇa", sys: "event stream", ch: "khandha",
    role: "Awareness of something, through one specific port, arising with its object and passing with it.",
    note: "Aggregate ⑤. Not a witness sitting above the six ports. There is no seat at the head of the table.",
  },
  contact: {
    label: "contact", pali: "phassa", sys: "coincidence", ch: "senses",
    role: "A port, an object, and awareness of that port present at the same time. Not a fourth component — the name for the coincidence.",
    note: "Everything downstream depends on this, and this depends on conditions already in place.",
  },
  feeling: {
    label: "feeling", pali: "vedanā", sys: "valence tag", ch: "gap",
    role: "Every event gets stamped pleasant, unpleasant or neutral, automatically, before anything else touches it.",
    note: "Aggregate ②. This step is not optional and cannot be trained away. What follows it can.",
  },
  perception: {
    label: "perception", pali: "saññā", sys: "classifier", ch: "khandha",
    role: "Matches the incoming pattern against stored ones and returns a label. Blue. Threat. My name.",
    note: "Aggregate ③. The label arrives so fast it feels like a property of the object rather than output of your own machinery.",
  },
  gap: {
    label: "the gap", pali: "—", sys: "the only slack in the circuit", ch: "gap",
    role: "Feeling has arisen. Craving has not fired yet. Every other joint in this board is welded; this one is not.",
    note: "The entire training programme exists to make this interval observable. See chapter 07.",
  },
  observer: {
    label: "observer", pali: "sati", sys: "monitor", ch: "practice",
    role: "Samples the stream without modifying it. Knows the pleasant feeling as a pleasant feeling, while it is happening.",
    note: "Not suppression and not indifference. Automatic and observed are simply mutually exclusive states.",
  },
  craving: {
    label: "craving", pali: "taṇhā", sys: "the keep-alive signal", ch: "gap",
    role: "The demand that the next moment be other than this one. Pull it closer, push it away, or go find something louder.",
    note: "Named in the second noble truth as the cause. Remove this and the loop loses its fuel.",
  },
  clinging: {
    label: "clinging", pali: "upādāna", sys: "holding a reference", ch: "chain",
    role: "Craving held and defended until it hardens into a position, an identity, a view worth protecting.",
    note: "The same Pali word also means fuel. That is not a coincidence in the texts.",
  },
  becoming: {
    label: "becoming", pali: "bhava", sys: "momentum", ch: "chain",
    role: "The holding sets a trajectory. A way of being is now underway and will land somewhere.",
    note: "Also the second flavour of craving — wanting to be, wanting to continue.",
  },
  birth: {
    label: "birth", pali: "jāti", sys: "instantiation", ch: "loop",
    role: "The trajectory lands. A new situation, a new identity, a new instance carrying the momentum.",
    note: "Read across lifetimes or across moments — the mechanism is identical at either scale.",
  },
  decay: {
    label: "decay and death", pali: "jarāmaraṇa", sys: "termination", ch: "chain",
    role: "Whatever is instantiated ages and ends. And nothing in the process has corrected the original misreading.",
    note: "Which is why the trace runs back to where it started rather than stopping here.",
  },
  avijja: {
    label: "not seeing", pali: "avijjā", sys: "the root misreading", ch: "roots",
    role: "Not lack of information. A standing misread of the situation: that things last, that they satisfy, that they belong to someone.",
    note: "First link of the chain and the deepest of the three roots. It is the condition the other two run under.",
  },
  store: {
    label: "dispositions", pali: "saṅkhārā", sys: "the store", ch: "karma",
    role: "Habits, intentions, tendencies — the accumulated shape of how this system responds. Written to by every action.",
    note: "Aggregate ④, and where kamma actually lives. Not a ledger being scored. Current weights, biasing the next move.",
  },
  roots: {
    label: "background processes", pali: "lobha · dosa · moha", sys: "always running", ch: "roots",
    role: "Pulling toward, pushing away, and not seeing. Three responses that exhaust the three feeling tags.",
    note: "These are the fires that nibbāna refers to going out. Named explicitly, by these three names.",
  },
  magga: {
    label: "training programme", pali: "magga", sys: "the intervention", ch: "path",
    role: "Eight parts in three layers: wisdom sets the direction, conduct lowers the noise floor, training steadies the instrument.",
    note: "It is not a separate subject. Its entire job is to install and maintain the observer above — which is the only thing that can see the gap.",
  },
  exit: {
    label: "unbinding", pali: "nibbāna", sys: "the process ends", ch: "exit",
    role: "Reachable only through the gap. Feeling arises, is known, and is not handed on — so nothing downstream is fed.",
    note: "Not a destination. The word means going out, as a fire goes out when it stops being fed.",
  },
};

/* ---------- geometry helpers ---------- */

function mod(id, cx, cy, w, h, label, pali, opts = {}) {
  const x = cx - w / 2;
  const y = cy - h / 2;
  const badge = opts.badge
    ? `<g class="mx-badge">
         <circle cx="${x + 17}" cy="${y + 17}" r="9"/>
         <text x="${x + 17}" y="${y + 20.5}" text-anchor="middle">${opts.badge}</text>
       </g>`
    : "";
  return `
    <g class="mx-mod ${opts.cls || ""}" data-part="${id}" role="button" tabindex="0"
       aria-label="${label}${pali && pali !== "—" ? ", " + pali : ""}">
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="9" class="mx-rect"/>
      <text x="${cx}" y="${cy - (pali ? 3 : -4)}" text-anchor="middle" class="mx-name">${label}</text>
      ${pali ? `<text x="${cx}" y="${cy + 14}" text-anchor="middle" class="mx-pali">${pali}</text>` : ""}
      ${badge}
    </g>`;
}

function tick(x, y, deg) {
  return `<path d="M-5,-4 L5,0 L-5,4 Z" class="mx-tick" transform="translate(${x},${y}) rotate(${deg})"/>`;
}

/* ---------- the board ---------- */

const PORTS = [
  ["eye", "cakkhu"],
  ["ear", "sota"],
  ["nose", "ghāna"],
  ["tongue", "jivhā"],
  ["body", "kāya"],
  ["mind", "mano"],
];

const ROOT_ROWS = [
  ["greed", "lobha", "pulling toward", 74],
  ["hatred", "dosa", "pushing away", 61],
  ["delusion", "moha", "not seeing at all", 88],
];

/* The whole circuit as one continuous trace: bus to contact to feeling,
   through the gap, round the bottom, into the store, and back to the ports. */
const TRACE =
  "M232,250 L320,250 L470,250 L630,250 L800,250 L970,250 " +
  "L970,400 L800,400 L630,400 L320,400 L320,530 " +
  "C180,530 96,470 96,378";

export function machineView() {
  const portBoxes = PORTS.map(([en, pali], i) => {
    const y = 116 + i * 44;
    const cy = y + 19;
    return `
      <g class="mx-port${i === 5 ? " mx-port--mind" : ""}">
        <rect x="40" y="${y}" width="142" height="38" rx="7" class="mx-rect"/>
        <text x="54" y="${cy + 4}" class="mx-portname">${en}</text>
        <text x="170" y="${cy + 4}" text-anchor="end" class="mx-pali">${pali}</text>
      </g>
      <path d="M182,${cy} C 198,${cy} 200,250 212,250" class="mx-wire"/>`;
  }).join("");

  const rootRows = ROOT_ROWS.map(([en, pali, desc, load], i) => {
    const y = 596 + i * 26;
    return `
      <text x="492" y="${y}" class="mx-portname">${en}</text>
      <text x="566" y="${y}" class="mx-pali">${pali}</text>
      <text x="646" y="${y}" class="mx-small">${desc}</text>
      <rect x="810" y="${y - 8}" width="300" height="6" rx="3" class="mx-loadbg"/>
      <rect x="810" y="${y - 8}" width="${(300 * load) / 100}" height="6" rx="3" class="mx-load"/>
      <text x="1124" y="${y}" class="mx-small">${load}%</text>`;
  }).join("");

  return `
  <div class="machine" data-machine>
    <div class="machine__scroller">
      <svg class="machine__svg" viewBox="0 0 1200 700" role="img"
           aria-label="A single board showing the whole system: six input ports, a bus, the pipeline from contact through feeling and the gap to craving, the loop closing through becoming, birth and decay back to the root misreading and the store of dispositions, background processes along the bottom, and one branch out to unbinding.">

        <rect x="12" y="12" width="1176" height="676" rx="14" class="mx-board"/>
        <text x="36" y="44" class="mx-title">the system</text>
        <text x="36" y="64" class="mx-small">one process, drawn once. click any block.</text>

        <!-- the single continuous trace everything sits on -->
        <path id="mx-trace" d="${TRACE}" class="mx-trace"/>
        ${tick(400, 250, 0)}${tick(555, 250, 0)}${tick(718, 250, 0)}${tick(890, 250, 0)}
        ${tick(970, 335, 90)}
        ${tick(890, 400, 180)}${tick(718, 400, 180)}${tick(490, 400, 180)}
        ${tick(320, 470, 90)}${tick(103, 430, 285)}

        <!-- input block -->
        <g class="mx-badge mx-badge--free">
          <circle cx="42" cy="90" r="9"/><text x="42" y="93.5" text-anchor="middle">1</text>
        </g>
        <text x="58" y="94" class="mx-group">i/o ports · saḷāyatana</text>
        <g class="mx-mod mx-mod--frame" data-part="ports" role="button" tabindex="0"
           aria-label="six input ports, saḷāyatana">
          <rect x="30" y="102" width="162" height="280" rx="10" class="mx-frame"/>
        </g>
        ${portBoxes}

        <!-- bus -->
        <g class="mx-mod" data-part="bus" role="button" tabindex="0" aria-label="consciousness, viññāṇa">
          <rect x="212" y="116" width="20" height="258" rx="10" class="mx-rect mx-rect--accent"/>
        </g>
        <g class="mx-badge mx-badge--free">
          <circle cx="222" cy="96" r="9"/><text x="222" y="99.5" text-anchor="middle">5</text>
        </g>
        <text x="204" y="394" text-anchor="end" class="mx-pali">viññāṇa</text>

        <text x="256" y="200" class="mx-group">pipeline · paṭiccasamuppāda</text>
        <text x="232" y="358" class="mx-group">the loop closing</text>

        <!-- the pipeline -->
        ${mod("contact", 320, 250, 130, 56, "contact", "phassa")}
        ${mod("feeling", 470, 250, 140, 56, "feeling", "vedanā", { badge: "2", cls: "mx-mod--key" })}
        ${mod("perception", 430, 140, 150, 52, "perception", "saññā", { badge: "3" })}
        <path d="M470,222 L452,170" class="mx-wire mx-wire--dash"/>
        <text x="514" y="144" class="mx-small">papañca &#8594;</text>

        <!-- the gap, and the only thing that can see it -->
        <g class="mx-mod mx-mod--gap" data-part="gap" role="button" tabindex="0" aria-label="the gap">
          <rect x="565" y="204" width="130" height="92" rx="9" class="mx-gaprect"/>
          <text x="630" y="246" text-anchor="middle" class="mx-name">the gap</text>
          <text x="630" y="264" text-anchor="middle" class="mx-small">not welded</text>
        </g>
        ${mod("magga", 720, 48, 190, 44, "training programme", "sīla · samādhi · paññā", { cls: "mx-mod--prog" })}
        <path d="M720,70 L720,92" class="mx-wire mx-wire--dot mx-obswire"/>
        ${mod("observer", 720, 120, 150, 52, "observer", "sati", { cls: "mx-mod--obs" })}
        <path d="M680,146 L648,200" class="mx-wire mx-wire--dot mx-obswire"/>

        ${mod("craving", 800, 250, 140, 56, "craving", "taṇhā", { cls: "mx-mod--hot" })}
        ${mod("clinging", 970, 250, 140, 56, "clinging", "upādāna", { cls: "mx-mod--hot" })}

        <!-- the branch out -->
        <path d="M692,212 C 760,170 800,132 873,124" class="mx-wire mx-wire--dash mx-exitwire"/>
        <text x="742" y="188" class="mx-small mx-exitwire">if not handed on</text>
        ${mod("exit", 960, 120, 170, 52, "unbinding", "nibbāna", { cls: "mx-mod--exit" })}

        <!-- the loop closing -->
        ${mod("becoming", 970, 400, 140, 56, "becoming", "bhava", { cls: "mx-mod--hot" })}
        ${mod("birth", 800, 400, 140, 56, "birth", "jāti", { cls: "mx-mod--hot" })}
        ${mod("decay", 630, 400, 140, 56, "decay and death", "jarāmaraṇa", { cls: "mx-mod--hot" })}
        ${mod("avijja", 320, 400, 180, 56, "not seeing", "avijjā", { cls: "mx-mod--hot" })}
        <text x="480" y="434" text-anchor="middle" class="mx-small">and the misreading is never corrected</text>

        <!-- the store -->
        ${mod("store", 320, 530, 200, 64, "dispositions", "saṅkhārā", { badge: "4" })}
        <text x="320" y="574" text-anchor="middle" class="mx-small">where kamma is written</text>

        <!-- background processes -->
        <g class="mx-mod mx-mod--frame" data-part="roots" role="button" tabindex="0"
           aria-label="background processes">
          <rect x="470" y="552" width="690" height="112" rx="10" class="mx-frame mx-rootsframe"/>
        </g>
        <text x="492" y="574" class="mx-group">background processes · akusala-mūla</text>
        ${rootRows}
        <path d="M900,552 L900,432" class="mx-wire mx-wire--dash mx-rootwire"/>
        <path d="M556,552 C 480,548 440,548 424,536" class="mx-wire mx-wire--dash mx-rootwire"/>

        <!-- legend -->
        <text x="36" y="598" class="mx-group">the five subsystems · pañcakkhandhā</text>
        <text x="36" y="620" class="mx-small">1 rūpa · form &#160; 2 vedanā · the tag &#160; 3 saññā · the classifier</text>
        <text x="36" y="638" class="mx-small">4 saṅkhārā · the store &#160; 5 viññāṇa · the stream</text>
        <text x="36" y="658" class="mx-small">regions of this board. no sixth region, and none of them is you.</text>

        ${
          MOTION
            ? `<circle r="6" class="mx-token" data-token>
                 <animateMotion dur="16s" repeatCount="indefinite" rotate="auto">
                   <mpath href="#mx-trace"/>
                 </animateMotion>
               </circle>`
            : ""
        }
      </svg>
    </div>

    <div class="machine__controls">
      <button class="dg-btn" data-mx="observer" aria-pressed="false">attach observer</button>
      <button class="dg-btn" data-mx="cut" aria-pressed="false">cut the fuel</button>
      <button class="dg-btn" data-mx="reset">reset</button>
      <span class="machine__hint">or click any block on the board</span>
    </div>

    <div class="machine__panel" data-panel>
      <div class="machine__phead">
        <span class="machine__pname" data-pname>the system</span>
        <span class="machine__ppali" data-ppali>saṃsāra</span>
        <span class="machine__psys" data-psys>one running process</span>
      </div>
      <p class="machine__prole" data-prole>
        Six ports feeding one bus, a short pipeline, and a trace that returns to
        where it started. Nobody built it and nobody is keeping you in it. It
        runs because each turn produces the fuel for the next one.
      </p>
      <p class="machine__pnote" data-pnote>
        Click any block to inspect it. The one branch leaving the board is at
        the top right, and it is reachable from exactly one place.
      </p>
      <a class="machine__plink" data-plink href="#/start">Read chapter 00 &rarr;</a>
    </div>
  </div>`;
}

/* ---------- interactivity ---------- */

export function wireMachine(el) {
  const svg = el.querySelector(".machine__svg");
  const panel = {
    name: el.querySelector("[data-pname]"),
    pali: el.querySelector("[data-ppali]"),
    sys: el.querySelector("[data-psys]"),
    role: el.querySelector("[data-prole]"),
    note: el.querySelector("[data-pnote]"),
    link: el.querySelector("[data-plink]"),
  };

  const mods = [...svg.querySelectorAll(".mx-mod")];

  function select(id) {
    const p = PARTS[id];
    if (!p) return;
    mods.forEach((m) => m.classList.toggle("is-sel", m.dataset.part === id));
    el.classList.add("is-inspecting");
    panel.name.textContent = p.label;
    panel.pali.textContent = p.pali;
    panel.sys.textContent = p.sys;
    panel.role.textContent = p.role;
    panel.note.textContent = p.note;
    panel.link.href = `#/${p.ch}`;
    panel.link.textContent = "Read the chapter →";
  }

  mods.forEach((m) => {
    m.addEventListener("click", () => select(m.dataset.part));
    m.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        select(m.dataset.part);
      }
    });
  });

  const btn = (name) => el.querySelector(`[data-mx="${name}"]`);

  btn("observer").addEventListener("click", () => {
    const on = !el.classList.contains("is-observing");
    el.classList.toggle("is-observing", on);
    btn("observer").setAttribute("aria-pressed", String(on));
    btn("observer").textContent = on ? "observer attached" : "attach observer";
    if (on) select("gap");
  });

  btn("cut").addEventListener("click", () => {
    const on = !el.classList.contains("is-cut");
    el.classList.toggle("is-cut", on);
    btn("cut").setAttribute("aria-pressed", String(on));
    btn("cut").textContent = on ? "fuel cut" : "cut the fuel";
    if (on) select("exit");
  });

  btn("reset").addEventListener("click", () => {
    el.classList.remove("is-observing", "is-cut", "is-inspecting");
    mods.forEach((m) => m.classList.remove("is-sel"));
    btn("observer").setAttribute("aria-pressed", "false");
    btn("observer").textContent = "attach observer";
    btn("cut").setAttribute("aria-pressed", "false");
    btn("cut").textContent = "cut the fuel";
    panel.name.textContent = "the system";
    panel.pali.textContent = "saṃsāra";
    panel.sys.textContent = "one running process";
    panel.role.textContent =
      "Six ports feeding one bus, a short pipeline, and a trace that returns to where it started. Nobody built it and nobody is keeping you in it. It runs because each turn produces the fuel for the next one.";
    panel.note.textContent =
      "Click any block to inspect it. The one branch leaving the board is at the top right, and it is reachable from exactly one place.";
    panel.link.href = "#/start";
    panel.link.textContent = "Read chapter 00 →";
  });
}
