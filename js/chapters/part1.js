/* ==========================================================================
   Chapters 00–03 — the premise and the system as found
   ========================================================================== */

export const start = {
  id: "start",
  num: "00",
  group: "Orientation",
  title: "Read this first",
  pali: "the terms of the metaphor",
  blocks: [
    ["lead",
      "This whole site runs one idea: treat the situation the Buddha described as a *system*, and treat his teaching as a report written by someone who took that system apart and found the exit."],

    ["p",
      "It is a teaching device, not a doctrine. The point of a good metaphor is that it makes the moving parts visible. The point of an honest one is that it tells you where it stops working — so there is a whole chapter on that at the end, and you should read it."],

    ["h", "Why this particular metaphor"],

    ["p",
      "Most introductions to Buddhism start with culture: robes, temples, incense, a story about a prince. Those are real, but they are not the argument. The argument underneath is unusually mechanical, and it sounds like this:"],

    ["olist", [
      "Here is a process you are currently running.",
      "Here is exactly what keeps it running.",
      "If you remove that, it stops.",
      "Here is the procedure for removing it."],
    ],

    ["p",
      "That is the shape of a diagnosis, not a creed. Four steps: symptom, cause, proof the cause is removable, method. If you have ever debugged something, you already know this shape. The rest of this site is filling in the details."],

    ["h", "The rules I am holding myself to"],

    ["cards", [
      { idx: "RULE 01", t: "Every mapping is one-to-one",
        d: "Each Pali term gets one systems counterpart and keeps it across all fifteen chapters. No term drifts to mean whatever is convenient." },
      { idx: "RULE 02", t: "The Pali stays visible",
        d: "The original word is always shown next to the translation, because the English words — suffering, self, craving — all carry baggage the Pali does not." },
      { idx: "RULE 03", t: "No invented doctrine",
        d: "If the texts do not say something, this site does not say it either. Where the traditions disagree, that gets said out loud." },
      { idx: "RULE 04", t: "The metaphor gets audited",
        d: "The last chapter lists every place the computer picture is actively misleading. Read it before you repeat any of this to anyone." },
    ]],

    ["h", "How to move through it"],

    ["p",
      "Fifteen short chapters, in order, each with one diagram. Three of the diagrams are interactive — the aggregates, the gap, and the fire. Those three are the ones worth playing with rather than reading."],

    ["p",
      "There is a theme switch at the bottom of the map on the left. *Rendered* is the world as it presents itself. *Source* is the same content with the lights off. It changes nothing but the colours; it is a joke about the subject matter, and you are allowed to ignore it."],

    ["note", "On the word system",
      "A system here means only this: a set of parts whose behaviour follows from how they are connected. It does not mean anyone built it, designed it, or is running it. That distinction matters enough that it gets its own chapter."],

    ["h", "A note on where this comes from"],

    ["p",
      "The material is drawn from the early discourses — the Pali Nikāyas — because that is the layer all Buddhist traditions share. Later developments in Mahāyāna, Zen, Vajrayāna and elsewhere reframe a lot of this, sometimes radically. What is here is the common floor, not the whole building."],

    ["quote",
      "Both formerly and now, it is only suffering that I describe, and the ending of suffering.",
      "Majjhima Nikāya 22, paraphrased"],
  ],
};

export const loop = {
  id: "loop",
  num: "01",
  group: "The system",
  title: "You are inside a loop",
  pali: "saṃsāra — wandering on",
  blocks: [
    ["lead",
      "_Saṃsāra_ is usually translated as the cycle of rebirth, which makes it sound like a place you are stuck in. It is closer to a process you are stuck *as*."],

    ["p",
      "The word literally means wandering, or flowing on. Not a location. Not a prison someone built. A pattern that keeps re-instantiating because nothing has stopped it. If you want a mechanical picture: a loop with no exit condition being met."],

    ["fig", "loop",
      "Four stations, turning clockwise. The dashed branch on the right is the `break` — it exists, it is reachable, and almost nothing ever takes it. *Note what is at the centre:* the loop is not powered from outside. It runs on what the last turn of the loop produced."],

    ["h", "The four stations"],

    ["map", [
      ["jāti", "*spawn* — a new instance starts, carrying momentum but no fixed identity from the last one"],
      ["phassa", "*sense* — input lands. Something is seen, heard, thought"],
      ["taṇhā", "*crave* — the system wants the next moment to be other than this one"],
      ["bhava", "*carry* — that wanting hardens into a direction, and the direction sets up the next spawn"],
    ]],

    ["p",
      "Read it forward and the mechanism is unremarkable. Something happens, you want it different, the wanting shapes what you do, what you do shapes what happens next. That is the loop. It runs at the scale of a lifetime and also at the scale of the last eleven seconds."],

    ["h", "The loop is self-fuelling"],

    ["p",
      "This is the part worth slowing down on. There is no external process keeping _saṃsāra_ going. The output of each turn is the input of the next. In the texts the standing image is fire: it keeps burning exactly as long as it is fed, and the feeding is not done by anyone."],

    ["code",
      `// what the loop is actually doing
while (fuel > 0) {
  const event = sense();        // phassa
  const want  = react(event);   // taṇhā
  fuel        = commit(want);   // bhava — the reaction becomes the next fuel
}
// there is no else branch. nothing is watching for one.`],

    ["note", "The exit is not hidden",
      "Nothing about this system is locked. There is no guard, no gatekeeper, no permission you need. The exit condition is simply that the loop stops being fed — and the whole difficulty is that feeding it is the most natural thing the system does."],

    ["h", "What rebirth does and does not claim"],

    ["p",
      "Traditional Buddhism holds that the loop crosses the boundary of a single life. What it specifically denies is that anything solid crosses with it. There is no soul making the trip. The usual image is a flame lit from another flame: the causal link is real, the continuity of substance is not. If that is a step too far for you, everything downstream of here still holds — the mechanism is the same whether you read the loop as spanning lives or spanning moments."],

    ["quote",
      "A being is not reborn; a process continues.",
      "The standard gloss on punabbhava — literally, again-becoming"],
  ],
};

export const report = {
  id: "report",
  num: "02",
  group: "The system",
  title: "The bug report",
  pali: "cattāri ariyasaccāni — the four true things",
  blocks: [
    ["lead",
      "The Four Noble Truths get taught as a list of beliefs. They are not a list of beliefs. They are a diagnosis in four fields, and they have the exact structure of a report you would file against any misbehaving system."],

    ["html", `
      <div class="bug">
        <header class="bug__head">
          <span class="bug__id">SN 56.11</span>
          <span class="bug__title">Process never reaches a stable state</span>
          <span class="bug__state">resolved</span>
        </header>
        <div class="bug__row">
          <span class="bug__k">01 Symptom</span>
          <span class="bug__v"><strong>There is dukkha.</strong>
            Every state the system reaches is unsatisfactory, including the good ones.
            Not because they are bad, but because none of them hold.
            <span class="pali">dukkha</span></span>
        </div>
        <div class="bug__row">
          <span class="bug__k">02 Root cause</span>
          <span class="bug__v"><strong>Craving is the cause.</strong>
            The system runs a continuous demand that the current state be other than it is.
            That demand is what re-arms the loop.
            <span class="pali">samudaya</span></span>
        </div>
        <div class="bug__row">
          <span class="bug__k">03 Reproducible?</span>
          <span class="bug__v"><strong>Yes — and therefore removable.</strong>
            The symptom tracks the cause exactly. Remove the demand and the symptom stops.
            This is the claim the whole thing rests on.
            <span class="pali">nirodha</span></span>
        </div>
        <div class="bug__row">
          <span class="bug__k">04 Fix</span>
          <span class="bug__v"><strong>An eight-part training programme.</strong>
            Not a belief, not a ritual, not a one-time patch. A set of changes to how the
            system handles its own inputs.
            <span class="pali">magga</span></span>
        </div>
        <div class="bug__row">
          <span class="bug__k">Prescribed action</span>
          <span class="bug__v">Each field has a verb attached. Understand the symptom.
            Let go of the cause. Realise the stopping. Develop the path.
            You are not asked to believe any of the four — you are asked to do something with each.</span>
        </div>
      </div>`],

    ["h", "Dukkha is not sadness"],

    ["p",
      "This is the single most damaging mistranslation in the field. _Dukkha_ rendered as suffering makes the first truth sound like a mood — life is pain — which is both depressing and obviously false. Plenty of life is lovely."],

    ["p",
      "The word is older and more mechanical than that. The usual etymology points at an axle sitting badly in its wheel hub: _su-_ is well-fitting, _du-_ is badly-fitting. Something is off-centre. It turns, but it grinds. The claim is not that experience is painful. The claim is that no configuration of it sits properly, because every configuration is in motion."],

    ["map", [
      ["dukkha-dukkha", "*the obvious kind* — pain, loss, illness. Nobody needed telling"],
      ["vipariṇāma-dukkha", "*the kind inside good things* — the pleasant state is real, and it is already leaving"],
      ["saṅkhāra-dukkha", "*the structural kind* — anything assembled from moving parts cannot hold still. This is the one the first truth is actually about"],
    ]],

    ["note", "Why this matters for the metaphor",
      "The third kind is the systems claim. It is not saying your life is bad. It is saying that a process built out of conditions cannot reach a resting state, in the same way a running program cannot be simultaneously running and finished. The instability is structural, not emotional."],

    ["h", "The second truth is the actual discovery"],

    ["p",
      "Diagnosing instability is easy. Anyone can notice that things do not last. The non-obvious move is the second truth: naming one specific mechanism as the cause and claiming that removing it is sufficient."],

    ["p",
      "That is a falsifiable-shaped claim about a mechanism, and it is what makes the third truth possible. If the cause were just being alive, or having a body, or the passage of time, there would be no fix. It is not any of those. It is _taṇhā_ — a particular reflex that fires between one part of the chain and the next, and that reflex has a seam in it."],

    ["p",
      "Chapter [07 finds the seam](#/gap). Everything between here and there is working out where it sits."],
  ],
};

export const marks = {
  id: "marks",
  num: "03",
  group: "The system",
  title: "Three runtime properties",
  pali: "tilakkhaṇa — the three marks",
  blocks: [
    ["lead",
      "Three things are said to be true of everything inside the system. Not three rules imposed on it — three properties that fall out of how it is built."],

    ["fig", "marks",
      "The three marks are not independent claims stacked up. They are one observation stated three times, at increasing depth."],

    ["h", "01 — Nothing holds still"],

    ["p",
      "_Anicca_. Every component is in the middle of changing. Nothing in the system is a stored value; everything is a stream that is currently being computed. The chair is not a thing that lasts, it is a process slow enough to look like one."],

    ["p",
      "This is the least controversial of the three and the easiest to nod at without absorbing. The nodding version is *things change*. The absorbed version is: there is no moment at which anything is finished being what it is."],

    ["h", "02 — Nothing sits stable"],

    ["p",
      "_Dukkha_, again, and now in its structural sense. This follows directly from the first. If every part is in motion, then no arrangement of parts can be held. You can reach a state you like. You cannot *stay* in it, because staying is not an operation this system supports."],

    ["p",
      "Note the logic: the second mark is a consequence, not an extra complaint. The grinding is not added to the world. It is what change feels like from inside something that is trying to hold on."],

    ["h", "03 — Nothing owns it"],

    ["p",
      "_Anattā_. This is the sharp one, and the one that separates Buddhism from nearly everything else in the ancient world, including the Indian traditions it grew up beside. Every one of those had some version of a true self underneath — _ātman_, a soul, an owner. Buddhism removes it."],

    ["p",
      "Not replaces it with a different self. Removes the slot."],

    ["fig", "self",
      "The standard investigation: look for the owner, find only components. Every one of the five streams can be watched. None of them is doing the watching. There is no sixth stream that is you."],

    ["h", "What anattā is not saying"],

    ["p",
      "It is not saying you do not exist. Something is clearly reading this. It is not nihilism, and the texts are unusually explicit about rejecting that reading — a wanderer once asked the Buddha directly whether there is a self, then whether there is not, and got silence both times, on the grounds that both questions assume a slot that is not there."],

    ["cards", [
      { idx: "NOT", t: "You are an illusion", pali: "",
        d: "The processes are real and they really run. What is absent is an owner standing behind them, not the activity itself." },
      { idx: "NOT", t: "Nothing matters", pali: "",
        d: "Consequences still follow from actions. If anything they follow more cleanly, because there is no one to be exempted from them." },
      { idx: "IS", t: "No permanent core", pali: "anattā",
        d: "No part of you is unchanging, separate, or in control of the rest. Check each part in turn and none qualifies." },
      { idx: "IS", t: "A process, not a thing", pali: "",
        d: "Self is a verb the system conjugates continuously, and mistakes for a noun it owns." },
    ]],

    ["note", "The practical edge",
      "This is not philosophy for its own sake. Almost everything the system defends, it defends on behalf of a self. Remove the self that is being defended and an enormous amount of the machinery has nothing left to do. That is the point of the enquiry, and why it is treated as liberating rather than bleak."],

    ["quote",
      "Whatever is impermanent is unsatisfactory. Whatever is unsatisfactory is not self.",
      "The standard formula, repeated across the Saṃyutta Nikāya"],
  ],
};
