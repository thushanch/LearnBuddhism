/* ==========================================================================
   machine.js — the whole system on one board

   Every part of the teaching drawn once, as a single circuit: six input
   ports, the bus, the pipeline, the loop closing on itself, the store where
   dispositions accumulate, the background processes, and the one branch out.

   Each block carries an icon, the English name, the Pali, and the Pali in
   Sinhala script underneath. Click one to inspect it; run a scenario to
   watch an ordinary moment travel the whole trace.
   ========================================================================== */

import { iconAt, icon } from "./icons.js";

const MOTION =
  typeof window === "undefined" ||
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- part reference: what the inspector shows ---------- */

export const PARTS = {
  ports: {
    label: "six input ports", pali: "saḷāyatana", si: "සළායතන",
    sys: "I/O", ch: "senses", ic: "ports",
    role: "Eye, ear, nose, tongue, body — and mind as the sixth, a port like the others rather than the thing reading them.",
    note: "Aggregate ① rūpa lives here: the physical side, sense organs included.",
    ex: [
      "Light reaches the eye. Nothing has been decided yet.",
      "A sound arrives at the ear before you know what made it.",
      "A thought appears at the mind-door. Nothing came from outside.",
      "Six channels — and the sixth is not in charge of the other five.",
    ],
  },
  bus: {
    label: "consciousness", pali: "viññāṇa", si: "විඤ්ඤාණ",
    sys: "event stream", ch: "khandha", ic: "bus",
    role: "Awareness of something, through one specific port, arising with its object and passing with it.",
    note: "Aggregate ⑤. Not a witness sitting above the six ports. There is no seat at the head of the table.",
    ex: [
      "Eye-consciousness: there is seeing. That is the whole of it.",
      "Close your eyes and eye-consciousness does not wait around — it stops.",
      "Six kinds, one per port. Never a seventh that watches the other six.",
    ],
  },
  contact: {
    label: "contact", pali: "phassa", si: "ඵස්ස",
    sys: "coincidence", ch: "senses", ic: "contact",
    role: "A port, an object, and awareness of that port present at the same time. Not a fourth component — the name for the coincidence.",
    note: "Everything downstream depends on this, and this depends on conditions already in place.",
    ex: [
      "Eye + a face + seeing. Remove any one and nothing happens.",
      "You stare at a page and read nothing: attention was elsewhere, so there was no contact.",
      "Someone says your name in a noisy room and suddenly there is contact.",
    ],
  },
  feeling: {
    label: "feeling", pali: "vedanā", si: "වේදනා",
    sys: "valence tag", ch: "gap", ic: "feeling",
    role: "Every event gets stamped pleasant, unpleasant or neutral, automatically, before anything else touches it.",
    note: "Aggregate ②. This step is not optional and cannot be trained away. What follows it can.",
    ex: [
      "First sip of hot plain tea: pleasant. You did not choose that.",
      "A mosquito at your ear: unpleasant, instantly, before any thought about it.",
      "The wall opposite you: neutral — which is why you have not noticed it.",
      "Note that all three are tags, not emotions. Emotion comes later.",
    ],
  },
  perception: {
    label: "perception", pali: "saññā", si: "සඤ්ඤා",
    sys: "classifier", ch: "khandha", ic: "perception",
    role: "Matches the incoming pattern against stored ones and returns a label. Blue. Threat. My name.",
    note: "Aggregate ③. The label arrives so fast it feels like a property of the object rather than output of your own machinery.",
    ex: [
      "A coiled rope on a dark path reads as a snake before you can check.",
      "A word in a language you know cannot be heard as plain sound any more.",
      "You recognise a friend from fifty metres by how they walk.",
      "The label feels like it was in the object. It was not.",
    ],
  },
  gap: {
    label: "the gap", pali: "vedanā → taṇhā", si: "පරතරය",
    sys: "the only slack in the circuit", ch: "gap", ic: "gap",
    role: "Feeling has arisen. Craving has not fired yet. Every other joint on this board is welded; this one is not.",
    note: "The entire training programme exists to make this interval observable. See chapter 07.",
    ex: [
      "The phone buzzes and is felt as pleasant. Your hand has not moved yet.",
      "The remark lands as unpleasant. You have not replied yet.",
      "The evening is felt as neutral. The app is not open yet.",
      "In each case the feeling is already finished. Only what follows is open.",
    ],
  },
  observer: {
    label: "observer", pali: "sati", si: "සති · සිහිය",
    sys: "monitor", ch: "practice", ic: "observer",
    role: "Samples the stream without modifying it. Knows the pleasant feeling as a pleasant feeling, while it is happening.",
    note: "Not suppression and not indifference. Automatic and observed are simply mutually exclusive states.",
    ex: [
      "Noting 'unpleasant' while it is still unpleasant, not in the recap afterwards.",
      "Feeling the full sting of a remark and not answering it.",
      "Not: pretending you are fine. Not: going numb. Both of those feed the chain.",
    ],
  },
  craving: {
    label: "craving", pali: "taṇhā", si: "තණ්හා",
    sys: "the keep-alive signal", ch: "gap", ic: "craving",
    role: "The demand that the next moment be other than this one. Pull it closer, push it away, or go find something louder.",
    note: "Named in the second noble truth as the cause. Remove this and the loop loses its fuel.",
    ex: [
      "Pleasant → one more. Unpleasant → make it stop. Neutral → find the phone.",
      "kāma-taṇhā — wanting the thing.",
      "bhava-taṇhā — wanting to be someone. The most durable of the three.",
      "vibhava-taṇhā — wanting to not be. Also craving, and not the exit.",
    ],
  },
  clinging: {
    label: "clinging", pali: "upādāna", si: "උපාදාන",
    sys: "holding a reference", ch: "chain", ic: "clinging",
    role: "Craving held and defended until it hardens into a position, an identity, a view worth protecting.",
    note: "The same Pali word also means fuel. That is not a coincidence in the texts.",
    ex: [
      "The opinion becomes 'my position'.",
      "The habit becomes 'the kind of person I am'.",
      "The plan becomes something to defend rather than something to examine.",
    ],
  },
  becoming: {
    label: "becoming", pali: "bhava", si: "භව",
    sys: "momentum", ch: "chain", ic: "becoming",
    role: "The holding sets a trajectory. A way of being is now underway and will land somewhere.",
    note: "Also the second flavour of craving — wanting to be, wanting to continue.",
    ex: [
      "Twenty minutes on, you are still arguing with a driver who has long gone.",
      "The mood outlives the thing that caused it, which is the whole problem.",
      "Nothing has to sustain this now. It sustains itself.",
    ],
  },
  birth: {
    label: "birth", pali: "jāti", si: "ජාති",
    sys: "instantiation", ch: "loop", ic: "birth",
    role: "The trajectory lands. A new situation, a new identity, a new instance carrying the momentum.",
    note: "Read across lifetimes or across moments — the mechanism is identical at either scale.",
    ex: [
      "An 'insulted person' comes into existence and occupies the rest of the afternoon.",
      "A new situation arrives already shaped by how the last one was handled.",
      "The traditional reading spans lives; the moment-to-moment reading spans seconds.",
    ],
  },
  decay: {
    label: "decay and death", pali: "jarāmaraṇa", si: "ජරාමරණ",
    sys: "termination", ch: "chain", ic: "decay",
    role: "Whatever is instantiated ages and ends. And nothing in the process has corrected the original misreading.",
    note: "Which is why the trace runs back to where it started rather than stopping here.",
    ex: [
      "The mood fades. The situation closes. Nothing was learned from it.",
      "The good mood ends too. That is the same fact, not a different one.",
      "Ending is not the exit — the conditions for the next round are already set.",
    ],
  },
  avijja: {
    label: "not seeing", pali: "avijjā", si: "අවිජ්ජා",
    sys: "the root misreading", ch: "roots", ic: "avijja",
    role: "Not lack of information. A standing misread of the situation: that things last, that they satisfy, that they belong to someone.",
    note: "First link of the chain and the deepest of the three roots. It is the condition the other two run under.",
    ex: [
      "Acting as though this feeling is going to last.",
      "Acting as though getting the thing will finally settle it.",
      "Acting as though there is someone in here to be insulted.",
      "You can know all three are false and still act this way. That is the point.",
    ],
  },
  store: {
    label: "dispositions", pali: "saṅkhārā", si: "සංඛාර",
    sys: "the store", ch: "karma", ic: "store",
    role: "Habits, intentions, tendencies — the accumulated shape of how this system responds. Written to by every action.",
    note: "Aggregate ④, and where kamma actually lives. Not a ledger being scored. Current weights, biasing the next move.",
    ex: [
      "Snap at someone once and snapping is very slightly easier next time.",
      "Sit with the discomfort once and sitting with it is very slightly easier next time.",
      "Nothing is keeping score. Something is being shaped.",
    ],
  },
  roots: {
    label: "background processes", pali: "lobha · dosa · moha", si: "ලෝභ · දෝස · මෝහ",
    sys: "always running", ch: "roots", ic: "roots",
    role: "Pulling toward, pushing away, and not seeing. Three responses that exhaust the three feeling tags.",
    note: "These are the fires that nibbāna refers to going out. Named explicitly, by these three names.",
    ex: [
      "lobha at low volume: reaching for the phone with no reason to.",
      "dosa at low volume: a flicker of irritation at a slow queue.",
      "moha at full volume: not having noticed either of the above.",
      "The English words are far heavier than the Pali. These run in everyone, constantly.",
    ],
  },
  magga: {
    label: "training programme", pali: "magga", si: "මග්ග",
    sys: "the intervention", ch: "path", ic: "magga",
    role: "Eight parts in three layers: wisdom sets the direction, conduct lowers the noise floor, training steadies the instrument.",
    note: "Its entire job is to install and maintain the observer below — the only thing that can see the gap.",
    ex: [
      "sīla — not lying, so there is no story to maintain and no cycles spent on it.",
      "samādhi — one thread instead of nine.",
      "paññā — seeing how it works, not agreeing that it works that way.",
      "All eight together, none of them finished before the next starts.",
    ],
  },
  exit: {
    label: "unbinding", pali: "nibbāna", si: "නිබ්බාන · නිවන",
    sys: "the process ends", ch: "exit", ic: "exit",
    role: "Reachable only through the gap. Feeling arises, is known, and is not handed on — so nothing downstream is fed.",
    note: "Not a destination. The word means going out, as a fire goes out when it stops being fed.",
    ex: [
      "The fires named are greed, hatred and delusion. Those are what go out.",
      "Not a place, not a reward, and not you being deleted — there was no you to delete.",
      "An arahant still feels pleasant and unpleasant. What ended was the grasping.",
    ],
  },
};

/* ---------- scenarios: one ordinary moment, traced end to end ---------- */

const SEQ = [
  "ports", "bus", "contact", "feeling", "gap",
  "craving", "clinging", "becoming", "birth", "decay", "avijja", "store",
];

const SHARED = {
  birth: "A version of you is now instantiated around this. It will last as long as it is fed.",
  decay: "It fades, as everything does. Nothing about the misreading has been corrected.",
  avijja: "The whole run assumed this mattered, would last, and was happening to someone.",
  store: "The disposition is updated. The same response is now marginally cheaper to run.",
};

export const SCENARIOS = [
  {
    id: "buzz",
    label: "your phone buzzes",
    si: "දුරකථනය කම්පනය වේ",
    lines: {
      ports: "The body-door registers a vibration against your leg. Nothing has been decided.",
      bus: "Body-consciousness arises. There is knowing-of-a-buzz, and nothing more yet.",
      contact: "Port, object and knowing coincide. This is contact — and it is already over.",
      feeling: "Tagged pleasant. It might be the message you have been waiting for.",
      gap: "The pleasant tag is complete. What happens next is the only thing still open.",
      craving: "Wanting. Your hand is moving toward the pocket before you decided anything.",
      clinging: "It becomes yours to check. Being interrupted is now a right you hold.",
      becoming: "A pattern sets. The next buzz will be easier to obey than this one was.",
    },
  },
  {
    id: "cutin",
    label: "a trishaw cuts in front of you",
    si: "ත්‍රීරෝද රථයක් ඉදිරියට පනී",
    lines: {
      ports: "Eye-door. A shape crosses your line, closer than it should be.",
      bus: "Eye-consciousness. Seeing has happened. No judgement is in it yet.",
      contact: "Eye, form and seeing together. Contact.",
      feeling: "Unpleasant. Immediate, physical, and entirely before any thought about it.",
      gap: "The unpleasant tag has fully landed. Nothing downstream has fired.",
      craving: "Aversion — the demand that this not be happening. It is already happening.",
      clinging: "It stops being about the road. It becomes about respect, and about you.",
      becoming: "The irritation outlives the trishaw by twenty minutes and one argument.",
    },
  },
  {
    id: "kade",
    label: "frying smell from a kade",
    si: "කඩේකින් එන ආහාර සුවඳ",
    lines: {
      ports: "Nose-door. Oil, chilli, smoke, carried on warm air.",
      bus: "Nose-consciousness. There is smelling.",
      contact: "Nose, odour and smelling coincide.",
      feeling: "Pleasant, and faster than recognition — you liked it before you named it.",
      gap: "Pleasant has been registered in full. The rest is not compulsory.",
      craving: "Wanting. Not wanting food, exactly. Wanting the pleasant tag again.",
      clinging: "A plan forms, and you become someone who is going to stop there.",
      becoming: "The route home quietly reshapes itself around a place that sells this.",
    },
  },
  {
    id: "memory",
    label: "a thing you said years ago",
    si: "වසර ගණනාවකට පෙර කී දෙයක්",
    lines: {
      ports: "Mind-door — the sixth port. Nothing arrived from outside. This one is internal.",
      bus: "Mind-consciousness. The memory is known, exactly the way a sound is known.",
      contact: "Mind, mental object and knowing together. Structurally identical to seeing.",
      feeling: "Unpleasant. The body responds as though it were happening now, because to the system it is.",
      gap: "The feeling is real and complete. Nothing yet demands you do anything about it.",
      craving: "vibhava-taṇhā — wanting it not to have happened. Which is not on offer.",
      clinging: "You begin rehearsing the better version. The story is now yours to defend.",
      becoming: "The memory is reinforced by the rehearsal and gets cheaper to trigger.",
    },
  },
];

const OBSERVED_LINE =
  "The feeling is known <b>as</b> a feeling — fully felt, and not handed on. " +
  "<span class='halt'>The chain stops here.</span> Nothing downstream is fed, " +
  "so nothing is written to the store and the loop gets no fuel from this moment.";

/* ---------- geometry helpers ---------- */

function mod(id, cx, cy, w, h, part, opts = {}) {
  const x = cx - w / 2;
  const y = cy - h / 2;
  const badge = opts.badge
    ? `<g class="mx-badge">
         <circle cx="${x + 16}" cy="${y + 16}" r="9"/>
         <text x="${x + 16}" y="${y + 19.5}" text-anchor="middle">${opts.badge}</text>
       </g>`
    : "";
  const rectCls = opts.rectCls || "mx-rect";

  if (opts.flat) {
    return `
    <g class="mx-mod ${opts.cls || ""}" data-part="${id}" role="button" tabindex="0"
       aria-label="${part.label}, ${part.pali}">
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="9" class="${rectCls}"/>
      ${iconAt(part.ic, x + 22, cy, 18)}
      <text x="${x + 40}" y="${cy - 2}" class="mx-name">${part.label}</text>
      <text x="${x + 40}" y="${cy + 12}" class="mx-pali">${part.pali}
        <tspan class="mx-si"> · ${part.si}</tspan></text>
    </g>`;
  }

  return `
    <g class="mx-mod ${opts.cls || ""}" data-part="${id}" role="button" tabindex="0"
       aria-label="${part.label}, ${part.pali}">
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="9" class="${rectCls}"/>
      ${iconAt(part.ic, cx, cy - 22, 18)}
      <text x="${cx}" y="${cy + 1}" text-anchor="middle" class="mx-name">${part.label}</text>
      <text x="${cx}" y="${cy + 15}" text-anchor="middle" class="mx-pali">${part.pali}</text>
      <text x="${cx}" y="${cy + 29}" text-anchor="middle" class="mx-si">${part.si}</text>
      ${badge}
    </g>`;
}

function tick(x, y, deg) {
  return `<path d="M-5,-4 L5,0 L-5,4 Z" class="mx-tick" transform="translate(${x},${y}) rotate(${deg})"/>`;
}

/* ---------- the board ---------- */

const PORTS = [
  ["eye", "cakkhu", "ඇස"],
  ["ear", "sota", "කන"],
  ["nose", "ghāna", "නාසය"],
  ["tongue", "jivhā", "දිව"],
  ["body", "kāya", "කය"],
  ["mind", "mano", "මනස"],
];

const ROOT_ROWS = [
  ["greed", "lobha", "ලෝභ", "pulling toward", 74],
  ["hatred", "dosa", "දෝස", "pushing away", 61],
  ["delusion", "moha", "මෝහ", "not seeing at all", 88],
];

const R1 = 250;   // the pipeline
const R2 = 412;   // the loop closing
const STORE_Y = 534;

/* The whole circuit as one continuous trace: bus to contact to feeling,
   through the gap, round the bottom, into the store, and back to the ports. */
const TRACE =
  `M232,${R1} L320,${R1} L470,${R1} L630,${R1} L800,${R1} L970,${R1} ` +
  `L970,${R2} L800,${R2} L630,${R2} L320,${R2} L320,${STORE_Y} ` +
  `C180,${STORE_Y} 96,470 96,374`;

export function machineView() {
  const portBoxes = PORTS.map(([en, pali, si], i) => {
    const y = 112 + i * 42;
    const cy = y + 19;
    return `
      <g class="mx-port${i === 5 ? " mx-port--mind" : ""}">
        <rect x="40" y="${y}" width="142" height="38" rx="7" class="mx-rect"/>
        <text x="52" y="${cy + 4}" class="mx-portname">${en}</text>
        <text x="170" y="${cy - 2}" text-anchor="end" class="mx-pali">${pali}</text>
        <text x="170" y="${cy + 10}" text-anchor="end" class="mx-si">${si}</text>
      </g>
      <path d="M182,${cy} C 198,${cy} 200,${R1} 212,${R1}" class="mx-wire"/>`;
  }).join("");

  const rootRows = ROOT_ROWS.map(([en, pali, si, desc, load], i) => {
    const y = 598 + i * 24;
    return `
      <text x="492" y="${y}" class="mx-portname">${en}</text>
      <text x="566" y="${y}" class="mx-pali">${pali}</text>
      <text x="628" y="${y}" class="mx-si">${si}</text>
      <text x="700" y="${y}" class="mx-small">${desc}</text>
      <rect x="840" y="${y - 8}" width="270" height="6" rx="3" class="mx-loadbg"/>
      <rect x="840" y="${y - 8}" width="${(270 * load) / 100}" height="6" rx="3" class="mx-load"/>
      <text x="1124" y="${y}" class="mx-small">${load}%</text>`;
  }).join("");

  const P = PARTS;

  return `
  <div class="machine" data-machine>
    <div class="machine__scroller">
      <svg class="machine__svg" viewBox="0 0 1200 700" role="img"
           aria-label="A single board showing the whole system: six input ports, a bus, the pipeline from contact through feeling and the gap to craving, the loop closing through becoming, birth and decay back to the root misreading and the store of dispositions, background processes along the bottom, and one branch out to unbinding.">

        <rect x="12" y="12" width="1176" height="676" rx="14" class="mx-board"/>
        <text x="36" y="44" class="mx-title">the system</text>
        <text x="36" y="64" class="mx-small">one process, drawn once. click any block, or run a scenario below.</text>

        <!-- the single continuous trace everything sits on -->
        <path id="mx-trace" d="${TRACE}" class="mx-trace"/>
        ${tick(400, R1, 0)}${tick(555, R1, 0)}${tick(718, R1, 0)}${tick(890, R1, 0)}
        ${tick(970, 340, 90)}
        ${tick(890, R2, 180)}${tick(718, R2, 180)}${tick(480, R2, 180)}
        ${tick(320, 478, 90)}${tick(103, 440, 285)}

        <!-- input block -->
        <g class="mx-badge mx-badge--free">
          <circle cx="42" cy="90" r="9"/><text x="42" y="93.5" text-anchor="middle">1</text>
        </g>
        <text x="58" y="94" class="mx-group">i/o ports · saḷāyatana · සළායතන</text>
        <g class="mx-mod mx-mod--frame" data-part="ports" role="button" tabindex="0"
           aria-label="six input ports, saḷāyatana">
          <rect x="30" y="100" width="162" height="270" rx="10" class="mx-frame"/>
        </g>
        ${portBoxes}

        <!-- bus -->
        <g class="mx-mod" data-part="bus" role="button" tabindex="0" aria-label="consciousness, viññāṇa">
          <rect x="212" y="112" width="20" height="248" rx="10" class="mx-rect mx-rect--accent"/>
        </g>
        <g class="mx-badge mx-badge--onbar">
          <circle cx="222" cy="130" r="8"/><text x="222" y="133.5" text-anchor="middle">5</text>
        </g>
        <text x="204" y="378" text-anchor="end" class="mx-pali">viññāṇa</text>
        <text x="204" y="392" text-anchor="end" class="mx-si">විඤ්ඤාණ</text>

        <text x="256" y="196" class="mx-group">pipeline · paṭiccasamuppāda · පටිච්චසමුප්පාද</text>
        <text x="232" y="362" class="mx-group">the loop closing</text>

        <!-- the pipeline -->
        ${mod("contact", 320, R1, 130, 76, P.contact)}
        ${mod("feeling", 470, R1, 140, 76, P.feeling, { badge: "2", cls: "mx-mod--key" })}
        ${mod("perception", 430, 132, 150, 76, P.perception, { badge: "3" })}
        <path d="M470,212 L452,174" class="mx-wire mx-wire--dash"/>
        <text x="514" y="128" class="mx-small">papañca &#8594;</text>

        <!-- the gap, and the only thing that can see it -->
        ${mod("gap", 630, R1, 130, 104, P.gap, { cls: "mx-mod--gap", rectCls: "mx-gaprect" })}
        <text x="630" y="288" text-anchor="middle" class="mx-small">not welded</text>

        ${mod("magga", 720, 46, 200, 46, P.magga, { cls: "mx-mod--prog", flat: true })}
        <path d="M720,69 L720,88" class="mx-wire mx-wire--dot mx-obswire"/>
        ${mod("observer", 720, 128, 150, 76, P.observer, { cls: "mx-mod--obs" })}
        <path d="M680,166 L648,196" class="mx-wire mx-wire--dot mx-obswire"/>

        ${mod("craving", 800, R1, 140, 76, P.craving, { cls: "mx-mod--hot" })}
        ${mod("clinging", 970, R1, 140, 76, P.clinging, { cls: "mx-mod--hot" })}

        <!-- the branch out -->
        <path d="M694,220 C 780,190 820,140 873,132" class="mx-wire mx-wire--dash mx-exitwire"/>
        <text x="782" y="176" class="mx-small mx-exitwire">if not handed on</text>
        ${mod("exit", 960, 128, 170, 76, P.exit, { cls: "mx-mod--exit" })}

        <!-- the loop closing -->
        ${mod("becoming", 970, R2, 140, 76, P.becoming, { cls: "mx-mod--hot" })}
        ${mod("birth", 800, R2, 140, 76, P.birth, { cls: "mx-mod--hot" })}
        ${mod("decay", 630, R2, 150, 76, P.decay, { cls: "mx-mod--hot" })}
        ${mod("avijja", 320, R2, 180, 76, P.avijja, { cls: "mx-mod--hot" })}
        <text x="482" y="466" text-anchor="middle" class="mx-small">and the misreading is never corrected</text>

        <!-- the store -->
        ${mod("store", 320, STORE_Y, 200, 80, P.store, { badge: "4" })}
        <text x="320" y="590" text-anchor="middle" class="mx-small">where kamma is written</text>

        <!-- background processes -->
        <g class="mx-mod mx-mod--frame" data-part="roots" role="button" tabindex="0"
           aria-label="background processes">
          <rect x="470" y="552" width="690" height="112" rx="10" class="mx-frame mx-rootsframe"/>
        </g>
        <text x="492" y="576" class="mx-group">background processes · akusala-mūla · අකුසල මූල</text>
        ${rootRows}
        <path d="M900,552 L900,452" class="mx-wire mx-wire--dash mx-rootwire"/>
        <path d="M556,552 C 480,548 440,548 424,542" class="mx-wire mx-wire--dash mx-rootwire"/>

        <!-- legend -->
        <text x="36" y="606" class="mx-group">the five subsystems · pañcakkhandhā · පඤ්චක්ඛන්ධ</text>
        <text x="36" y="626" class="mx-small">1 rūpa · form &#160; 2 vedanā · the tag &#160; 3 saññā · the classifier</text>
        <text x="36" y="644" class="mx-small">4 saṅkhārā · the store &#160; 5 viññāṇa · the stream</text>
        <text x="36" y="662" class="mx-small">regions of this board. no sixth region, and none of them is you.</text>

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

    <p class="board-hint">Wide board — drag it sideways to see the rest.</p>
    <div class="sim" data-sim>
      <div class="sim__head">
        ${icon("citta")}
        <span class="sim__title">Run one moment through the whole board</span>
        <span class="sim__sub">pick something ordinary and watch where it goes</span>
      </div>
      <div class="sim__picks">
        ${SCENARIOS.map(
          (s) => `
          <button class="sim__pick" data-scenario="${s.id}">
            <span class="sim__picken">${s.label}</span>
            <span class="sim__picksi">${s.si}</span>
          </button>`
        ).join("")}
      </div>
      <div class="sim__controls">
        <button class="dg-btn" data-mx="observer" aria-pressed="false">attach observer · සති</button>
        <button class="dg-btn" data-mx="cut" aria-pressed="false">cut the fuel</button>
        <button class="dg-btn" data-mx="reset">reset</button>
      </div>
      <div class="sim__stage" data-simstage>
        <span class="sim__step" data-simstep>idle</span>
        <p class="sim__text" data-simtext>
          Pick a scenario. The same event runs differently depending on whether the
          observer is attached, so try one both ways.
        </p>
      </div>
    </div>

    <div class="machine__panel" data-panel>
      <div class="machine__phead">
        <span class="machine__picon" data-picon>${icon("system")}</span>
        <span class="machine__pname" data-pname>the system</span>
        <span class="machine__ppali" data-ppali>saṃsāra</span>
        <span class="machine__psi" data-psi>සංසාර</span>
        <span class="machine__psys" data-psys>one running process</span>
      </div>
      <p class="machine__prole" data-prole>
        Six ports feeding one bus, a short pipeline, and a trace that returns to
        where it started. Nobody built it and nobody is keeping you in it. It
        runs because each turn produces the fuel for the next one.
      </p>
      <p class="machine__pnote" data-pnote>
        Click any block to inspect it. The one branch leaving the board is at the
        top right, and it is reachable from exactly one place.
      </p>
      <ul class="machine__pex" data-pex></ul>
      <a class="machine__plink" data-plink href="#/start">Read chapter 00 &rarr;</a>
    </div>
  </div>`;
}

/* ---------- interactivity ---------- */

const DEFAULT_PANEL = {
  label: "the system",
  pali: "saṃsāra",
  si: "සංසාර",
  sys: "one running process",
  ic: "system",
  role:
    "Six ports feeding one bus, a short pipeline, and a trace that returns to where it started. " +
    "Nobody built it and nobody is keeping you in it. It runs because each turn produces the fuel for the next one.",
  note:
    "Click any block to inspect it. The one branch leaving the board is at the top right, " +
    "and it is reachable from exactly one place.",
  ex: [],
  ch: "start",
};

export function wireMachine(el) {
  const svg = el.querySelector(".machine__svg");
  const mods = [...svg.querySelectorAll(".mx-mod")];

  const panel = {
    ic: el.querySelector("[data-picon]"),
    name: el.querySelector("[data-pname]"),
    pali: el.querySelector("[data-ppali]"),
    si: el.querySelector("[data-psi]"),
    sys: el.querySelector("[data-psys]"),
    role: el.querySelector("[data-prole]"),
    note: el.querySelector("[data-pnote]"),
    ex: el.querySelector("[data-pex]"),
    link: el.querySelector("[data-plink]"),
  };

  const sim = {
    step: el.querySelector("[data-simstep]"),
    text: el.querySelector("[data-simtext]"),
  };

  let running = false;

  function paint(p, linkLabel) {
    panel.ic.innerHTML = icon(p.ic);
    panel.name.textContent = p.label;
    panel.pali.textContent = p.pali;
    panel.si.textContent = p.si;
    panel.sys.textContent = p.sys;
    panel.role.textContent = p.role;
    panel.note.textContent = p.note;
    panel.ex.innerHTML = (p.ex || []).map((e) => `<li>${e}</li>`).join("");
    panel.link.href = `#/${p.ch}`;
    panel.link.textContent = linkLabel;
  }

  function select(id) {
    const p = PARTS[id];
    if (!p) return;
    mods.forEach((m) => m.classList.toggle("is-sel", m.dataset.part === id));
    el.classList.add("is-inspecting");
    paint(p, "Read the chapter →");
  }

  mods.forEach((m) => {
    m.addEventListener("click", () => {
      if (running) return;
      select(m.dataset.part);
    });
    m.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        select(m.dataset.part);
      }
    });
  });

  /* ---- scenario runner ---- */

  const modFor = (id) => mods.find((m) => m.dataset.part === id);
  const clearRun = () => mods.forEach((m) => m.classList.remove("is-run", "is-halt"));

  async function run(scenario) {
    if (running) return;
    running = true;
    el.classList.add("is-running");
    clearRun();
    mods.forEach((m) => m.classList.remove("is-sel"));

    const observing = el.classList.contains("is-observing");
    const stop = observing ? SEQ.indexOf("gap") + 1 : SEQ.length;
    const dwell = MOTION ? 1500 : 0;

    for (let i = 0; i < stop; i++) {
      const id = SEQ[i];
      clearRun();
      modFor(id).classList.add("is-run");

      const p = PARTS[id];
      sim.step.innerHTML =
        `<b>${String(i + 1).padStart(2, "0")}</b> ${p.label} ` +
        `<i>${p.pali}</i> <span class="sim__si">${p.si}</span>`;

      const last = observing && id === "gap";
      sim.text.innerHTML = last
        ? OBSERVED_LINE
        : scenario.lines[id] || SHARED[id] || p.role;

      paint(p, "Read the chapter →");
      await sleep(dwell);
    }

    if (observing) {
      clearRun();
      modFor("gap").classList.add("is-halt");
      sim.step.innerHTML = `<b>halt</b> the chain stopped at the gap`;
    } else {
      sim.step.innerHTML = `<b>13</b> and round again`;
      sim.text.innerHTML =
        "The store now biases the next moment, and the next moment arrives at the same six ports. " +
        "That is the loop — not a punishment, just a process that produced its own fuel.";
    }

    el.classList.remove("is-running");
    running = false;
  }

  el.querySelectorAll("[data-scenario]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const s = SCENARIOS.find((x) => x.id === btn.dataset.scenario);
      el.querySelectorAll("[data-scenario]").forEach((b) =>
        b.classList.toggle("is-on", b === btn)
      );
      run(s);
    });
  });

  /* ---- state switches ---- */

  const btn = (name) => el.querySelector(`[data-mx="${name}"]`);

  btn("observer").addEventListener("click", () => {
    const on = !el.classList.contains("is-observing");
    el.classList.toggle("is-observing", on);
    btn("observer").setAttribute("aria-pressed", String(on));
    btn("observer").textContent = on ? "observer attached · සති" : "attach observer · සති";
    if (!running) {
      select("gap");
      sim.text.innerHTML = on
        ? "Observer attached. Run a scenario now and watch where it stops."
        : "Observer detached. Feeling will hand straight over to craving.";
    }
  });

  btn("cut").addEventListener("click", () => {
    const on = !el.classList.contains("is-cut");
    el.classList.toggle("is-cut", on);
    btn("cut").setAttribute("aria-pressed", String(on));
    btn("cut").textContent = on ? "fuel cut" : "cut the fuel";
    if (!running) select("exit");
  });

  btn("reset").addEventListener("click", () => {
    el.classList.remove("is-observing", "is-cut", "is-inspecting", "is-running");
    clearRun();
    mods.forEach((m) => m.classList.remove("is-sel"));
    el.querySelectorAll("[data-scenario]").forEach((b) => b.classList.remove("is-on"));
    btn("observer").setAttribute("aria-pressed", "false");
    btn("observer").textContent = "attach observer · සති";
    btn("cut").setAttribute("aria-pressed", "false");
    btn("cut").textContent = "cut the fuel";
    sim.step.textContent = "idle";
    sim.text.textContent =
      "Pick a scenario. The same event runs differently depending on whether the observer is attached, so try one both ways.";
    paint(DEFAULT_PANEL, "Read chapter 00 →");
  });

  paint(DEFAULT_PANEL, "Read chapter 00 →");
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
