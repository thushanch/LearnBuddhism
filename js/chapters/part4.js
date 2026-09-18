/* ==========================================================================
   Chapters 10–14 — the programme, the exit, and the audit
   ========================================================================== */

export const path = {
  id: "path",
  num: "10",
  group: "The programme",
  title: "The eight-part programme",
  pali: "ariya aṭṭhaṅgika magga — the noble eightfold path",
  si: "අරිය අට්ඨංගික මග්ග",
  blocks: [
    ["lead",
      "The fourth field of the [bug report](#/report) is the fix, and the fix is not a belief to adopt or a ritual to perform. It is eight simultaneous changes to how the system handles itself, grouped into three layers."],

    ["p",
      "Two things to get straight before the list. First, _sammā_ is usually translated *right*, which imports a morality that is not there — it means something closer to *complete*, *well-formed*, *properly aligned*. Second, the eight are not stages. They are not sequential and you do not finish one before starting the next. They are developed together, and each one holds the others up."],

    ["fig", "path8", "Three layers. Wisdom sets the direction, ethics makes the instrument quiet enough to use, training makes it steady enough to see with. *Remove any layer and the other two stop working.*",
      {
        items: [
          {
            name: "Wisdom", pali: "paññā", role: "what the system is doing",
            desc: "Understanding the situation accurately, and letting that understanding set the direction of travel. Placed first because without it the other six have no reason to be arranged this way rather than some other way.",
            items: [
              { n: "01", t: "Complete view", p: "sammā-diṭṭhi",
                d: "Seeing the four truths and the three marks as descriptions of what is actually happening, rather than as propositions to agree with. In practice: not expecting stability from things that do not have it." },
              { n: "02", t: "Complete intention", p: "sammā-saṅkappa",
                d: "The direction the will is set in — toward letting go rather than acquiring, toward goodwill rather than ill will, toward not harming. This is the aggregate where karma is written, aimed deliberately." },
            ],
          },
          {
            name: "Conduct", pali: "sīla", role: "reducing the noise",
            desc: "Usually read as the ethics module and treated as the optional moral bit. It is better read as engineering. Actions that harm others generate remorse, defensiveness and concealment, and all three make the mind too noisy to observe anything in. Conduct is what lowers the noise floor.",
            items: [
              { n: "03", t: "Complete speech", p: "sammā-vācā",
                d: "No lying, no speech that divides people, no harshness, no chatter with nothing in it. Four specific things, not a vague instruction to be nice." },
              { n: "04", t: "Complete action", p: "sammā-kammanta",
                d: "Not killing, not taking what is not given, not causing harm through sexual conduct. Restraint at the point where intention becomes irreversible." },
              { n: "05", t: "Complete livelihood", p: "sammā-ājīva",
                d: "Not earning a living in a way that requires harm. Named explicitly in the texts: trade in weapons, in living beings, in poisons, in intoxicants, in meat production." },
            ],
          },
          {
            name: "Training", pali: "samādhi", role: "getting access",
            desc: "The three that do the direct work on the mechanism. Effort supplies the energy, mindfulness supplies the observation, collection supplies the steadiness that makes observation fine-grained enough to be useful.",
            items: [
              { n: "06", t: "Complete effort", p: "sammā-vāyāma",
                d: "Four tasks, stated as a maintenance loop: prevent unskilful states that have not arisen, abandon those that have, arouse skilful states that have not arisen, sustain those that have." },
              { n: "07", t: "Complete mindfulness", p: "sammā-sati",
                d: "Continuous observation across four domains — body, feelings, states of mind, and the processes themselves. This is the observer from chapter 07, developed until it runs by default." },
              { n: "08", t: "Complete collectedness", p: "sammā-samādhi",
                d: "The mind gathered into one piece instead of scattered across many. Not trance and not blankness. The stability that makes the other seven usable." },
            ],
          },
        ],
      },
    ],

    ["h", "Why ethics is in the engineering, not beside it"],

    ["p",
      "This is the part most likely to be skipped by someone approaching Buddhism as a technique, and it is the part the texts are least willing to negotiate on. The argument is not that you should be good because goodness is rewarded. It is that a mind carrying concealment, remorse and defensiveness cannot be observed clearly, because too much of its capacity is committed to maintaining a story."],

    ["p",
      "In the systems reading: you cannot profile a process that is spending most of its cycles on cover-up. _Sīla_ is what frees the cycles."],

    ["h", "Nothing here is sequential"],

    ["p",
      "The order of the eight is a grouping, not a path through. You start with a rough version of all eight and they refine each other. View improves conduct; conduct quiets the mind; a quiet mind sees more clearly; seeing more clearly improves view. It is a loop, deliberately — the counter-loop to the one in chapter 01."],

    ["note", "The middle way",
      "The framing the Buddha gave this in his first talk: it avoids two failed strategies. Chasing pleasant states does not work because they do not hold. Punishing yourself does not work either — he had tried it for years and reported that it produced nothing but a ruined body. What is left is the unglamorous middle: train the instrument and look."],
  ],
};

export const practice = {
  id: "practice",
  num: "11",
  group: "The programme",
  title: "Attaching the debugger",
  pali: "samatha & vipassanā",
  si: "සමථ · විපස්සනා",
  blocks: [
    ["lead",
      "Meditation in this framework is not relaxation and not an altered state. It is the part of the programme where you get direct access to the mechanism while it runs."],

    ["p",
      "Two operations, usually taught as a pair, doing different jobs."],

    ["cards", [
      { idx: "OP 01", t: "Steadying", pali: "samatha",
        d: "Gathering the attention onto one object until it stops scattering. The output is a mind stable enough to sustain a single focus. On its own it produces calm and nothing further." },
      { idx: "OP 02", t: "Seeing clearly", pali: "vipassanā",
        d: "Turning that steady attention onto the process itself and watching states arise and pass. The output is direct observation of the three marks, rather than agreement with them." },
    ]],

    ["p",
      "The division of labour is the point. _Samatha_ raises the resolution; _vipassanā_ is what you do with the resolution. Calm without seeing changes nothing structural — it is a pleasant state, and pleasant states are subject to the same instability as any other. Seeing without calm does not get far enough in to see anything fine-grained."],

    ["h", "The five interrupts"],

    ["p",
      "Five specific obstructions are named, and the list is oddly practical — it reads like a troubleshooting table, which is roughly what it is."],

    ["map", [
      ["kāmacchanda", "*wanting* — attention keeps leaving toward something more appealing"],
      ["byāpāda", "*ill will* — irritation at the object, the practice, the noise outside, yourself"],
      ["thīna-middha", "*dullness* — the system is on but nothing is being resolved. Low signal"],
      ["uddhacca-kukkucca", "*agitation and remorse* — too much energy, or the mind returning to something it cannot settle"],
      ["vicikicchā", "*doubt* — not honest questioning, but the specific paralysis of being unable to commit to a direction"],
    ]],

    ["p",
      "Each is treated as a condition with causes, not a personal failing. The instruction is the same in each case: recognise which one is present, know what feeds it, stop feeding it. That is the same move as [chapter 07](#/gap), applied to the practice itself."],

    ["h", "The four foundations"],

    ["p",
      "The main instruction set for mindfulness — the _satipaṭṭhāna_ — covers four domains, and they widen in scope as they go:"],

    ["olist", [
      "*Body* — breath, posture, physical sensation. The coarsest signal and therefore the easiest to hold. Almost every tradition starts here.",
      "*Feelings* — the pleasant, unpleasant and neutral tags, watched as they are applied. This is the domain that opens the gap.",
      "*States of mind* — noticing the overall condition present: contracted, scattered, greedy, clear. The state itself as an object, rather than its contents.",
      "*Processes* — watching the mechanism directly: the hindrances arising, the aggregates operating, the links conditioning each other.",
    ]],

    ["note", "On jhāna",
      "The deep states of collectedness get a great deal of attention and a lot of argument. What matters for this site is the structural role: they are conditions in which observation becomes very fine-grained, not achievements in themselves. The texts treat them as instruments and warn specifically against clinging to them — a refined pleasant state is still a pleasant state, and craving for it is still craving."],

    ["h", "What is actually being trained"],

    ["p",
      "Not the ability to concentrate on a breath. That is a side effect. What is being trained is the capacity for the observer to be present during ordinary experience — so that when a feeling is tagged at four in the afternoon in a difficult conversation, something is there to see it before the chain moves on."],

    ["p",
      "Formal sitting is the rehearsal. The gap is the performance."],
  ],
};

export const exit = {
  id: "exit",
  num: "12",
  group: "The exit",
  title: "Going out",
  pali: "nibbāna — unbinding, extinguishing",
  si: "නිබ්බාන · නිවන",
  blocks: [
    ["lead",
      "The word does not mean paradise, and it does not mean annihilation. It means what happens to a fire when it stops being fed."],

    ["p",
      "_Nibbāna_ — Sanskrit _nirvāṇa_ — is built from a verb meaning to go out, to be extinguished, to be unbound. It is a fire word, chosen deliberately, and everything confusing about the concept becomes less confusing once you take the metaphor at face value."],

    ["fig", "exit",
      "Cut the supply and watch. *The fire does not go anywhere.* It is not relocated, not stored, not destroyed as a thing would be destroyed. It was a process that depended on fuel, and the fuel stopped. The three lines are named in the texts: greed, hatred, delusion."],

    ["h", "The fire simile, as the texts use it"],

    ["p",
      "A wanderer named Vacchagotta once pressed the Buddha on where an awakened person goes after death. The reply was a question: if a fire in front of you went out, which direction would you say it had gone — north, south, east, west?"],

    ["p",
      "The question is malformed. The fire was never a thing that occupied positions; it was a process that ran while conditions supported it. Asking where it went applies a category it never fit. The point is not that the answer is unknown. The point is that the question does not parse."],

    ["quote",
      "The fire has gone out. To ask where it went is to ask the wrong kind of question.",
      "After Majjhima Nikāya 72, the Aggi-Vacchagotta discourse"],

    ["h", "Two stages"],

    ["map", [
      ["sa-upādisesa nibbāna", "*with fuel remaining.* The fires are out, but the body and its processes continue. This is the awakened person still alive — still feeling pleasant and unpleasant, still eating, still ageing. What ended is the craving, not the experience"],
      ["anupādisesa nibbāna", "*without fuel remaining.* At the end of that life, the processes that were still running finish. Nothing is set up to continue"],
    ]],

    ["p",
      "The first stage is the one worth attending to, because it is the one described in operational terms. An arahant is not in a trance and not elsewhere. The system runs on, with the three background processes terminated and nothing being written to the loop."],

    ["h", "Why it is not annihilation"],

    ["p",
      "Because there was nothing there to annihilate. [Chapter 03](#/marks) did this work already: the search for a self returns empty. If no permanent entity was ever running, then nothing is destroyed when the process stops — a self that did not exist cannot be ended."],

    ["p",
      "The texts treat *the awakened person is annihilated* and *the awakened person continues eternally* as equally wrong, and both for the same reason: each assumes an entity the analysis never found. This is why the questions get set aside rather than answered."],

    ["warn", "Where the metaphor strains hardest",
      "Calling this escaping the system is useful for getting started and is not quite right. Escape implies a place you were in and a place you go to. Nothing in the texts describes _nibbāna_ as a destination. Unbinding is the better word: not moving elsewhere, but ceasing to be tied."],

    ["h", "What is said about it positively"],

    ["p",
      "Not much, and deliberately. The descriptions are overwhelmingly negative in form — the unconditioned, the unborn, the deathless, the end of craving, the end of the fires. This is not evasion. A conditioned vocabulary built for describing conditioned things is not expected to reach past them."],

    ["p",
      "What is stated without hedging is that it is attainable, that it is attainable in this life, and that the method for reaching it is the eight-part programme. On that the texts are entirely unambiguous."],
  ],
};

export const limits = {
  id: "limits",
  num: "13",
  group: "The exit",
  title: "Where this metaphor breaks",
  pali: "the audit",
  blocks: [
    ["lead",
      "A metaphor that is never audited becomes a belief. Here is every place the computer picture actively misleads, listed plainly, because you should not repeat any of the previous twelve chapters without knowing these."],

    ["h", "01 — There is no programmer"],

    ["p",
      "This is the biggest one by a distance. Every phrase like *the system*, *escape*, *the exit* smuggles in a designer, and Buddhism has no creator in it. Nobody wrote _saṃsāra_, nobody maintains it, nobody set the exit condition, and nobody is being escaped from. It is self-sustaining and unauthored. If reading this site has left you with a vague sense of an architect somewhere off-screen, delete that — it is the metaphor's residue, not the content."],

    ["h", "02 — It is not a simulation"],

    ["p",
      "The simulation reading says the world is fake and something realer sits behind it. Buddhism does not say this. The analysis is about how experience is *constructed*, not about whether the world is genuine. Sense objects are treated as real, actions have real consequences, and there is no hidden base layer to wake up into. _Anicca_ is not the same claim as unreality."],

    ["h", "03 — Conditionality is not mechanism"],

    ["p",
      "I have drawn arrows and used the word *causes*, and the Pali relation is weaker than either. _Idappaccayatā_ — this-conditionality — says that when the condition is present the result becomes possible, not that it is forced. The whole path depends on that looseness. Drawn as a circuit diagram, the chain looks more deterministic than it is."],

    ["h", "04 — Karma is not a function call"],

    ["p",
      "The pseudocode in [chapter 08](#/karma) makes karma look cleanly computable. The texts go the other way and list its detailed workings among the things that are unfathomable and not worth speculating about. Intention shapes disposition — that much is stated. Anything more precise than that is my metaphor, not the source."],

    ["h", "05 — Nirvana is not a break statement"],

    ["p",
      "A `break` exits a loop and control resumes somewhere else. There is no somewhere else here. The loop diagram in chapter 01 needs an exit arrow to be drawable at all, and that arrow is the most misleading line on this whole site."],

    ["h", "06 — This is the early-texts layer only"],

    ["p",
      "Everything here is drawn from the Pali discourses, which is the common floor beneath all Buddhist traditions. It is not the whole building. Mahāyāna adds the bodhisattva ideal and reframes the goal substantially. Zen would consider this entire site an elaborate way of missing the point. Vajrayāna, Pure Land, Theravāda forest traditions — all of them would recognise these terms and use them differently. Treat this as one floor, clearly labelled."],

    ["h", "07 — Reading is not the thing"],

    ["p",
      "The most important limit. Every source text insists that this is known by doing, not by understanding — and specifically warns about the person who has an excellent conceptual grasp and has changed nothing. A very clear map of a territory is still not the territory, and a systems diagram is an unusually seductive map."],

    ["note", "What the metaphor is good for",
      "It is good for one thing: getting past the assumption that this is a religion asking you to believe something. The underlying argument really is mechanical, really is about cause and condition, and really does end in a procedure. Once the metaphor has done that job, let it go. It is a ladder, and the texts have their own well-known line about what to do with a raft once you are across."],

    ["h", "Where to go instead"],

    ["p",
      "If any of this landed, go to the sources rather than to more explanations of the sources. The Majjhima Nikāya and Saṃyutta Nikāya are freely available in English translation and are far stranger, drier and better than any summary. And find someone who actually practises, because the parts of this that matter are not transmitted by websites."],
  ],
};

export const glossary = {
  id: "glossary",
  num: "14",
  group: "Reference",
  title: "Term map",
  pali: "pāli to systems, in one place",
  blocks: [
    ["lead",
      "Every mapping used on this site, with the literal sense of the Pali alongside. Where the English translation is misleading, that is noted."],
    ["fig", "gloss", "Type to filter. The literal column is worth reading — most of these words are more concrete in Pali than their English translations suggest."],
  ],
};
