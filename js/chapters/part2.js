/* ==========================================================================
   Chapters 04–06 — the architecture
   ========================================================================== */

export const khandha = {
  id: "khandha",
  num: "04",
  group: "Architecture",
  title: "Five subsystems",
  pali: "pañcakkhandhā — the five heaps",
  si: "පඤ්චක්ඛන්ධ",
  blocks: [
    ["lead",
      "Take the thing you call yourself apart and the early texts say you get five components. Not four, not six. The number matters less than the exercise: every part is listed, and none of the parts is you."],

    ["p",
      "_Khandha_ means heap, or bundle, or aggregate — deliberately unglamorous words. Not organs, not faculties, not levels of soul. Piles of stuff that happen to be running together."],

    ["fig", "khandha",
      "Open each one. The order is not arbitrary: it runs roughly from the outside in, from hardware to the awareness that knows any of it is happening.",
      {
        items: [
          {
            t: "form", pali: "rūpa", one: "the physical side, including the sensors",
            body: [
              "The body and everything material about it — the eye as an organ, the ear as an organ, the nervous system, and the physical world insofar as it registers.",
              "Systems reading: <em>hardware and its I/O</em>. This is the only aggregate made of matter. The other four are events.",
              "Note what is already missing. There is no homunculus in here. The eye is listed as a component, not as a window someone is looking through.",
            ],
          },
          {
            t: "feeling", pali: "vedanā", one: "the pleasant / unpleasant / neutral tag",
            body: [
              "Not emotion. Something much smaller and faster: the raw valence stamped onto every single experience the moment it registers. Pleasant, unpleasant, or neither.",
              "Systems reading: <em>an automatic tag attached to every event before anything else processes it</em>. It is not optional and it is not a decision. By the time you notice an experience it already has a tag.",
              "This aggregate is where the whole thing becomes tractable. Chapter 07 is entirely about what happens immediately after this tag is applied.",
            ],
          },
          {
            t: "perception", pali: "saññā", one: "recognition and labelling",
            body: [
              "The part that matches incoming patterns against stored ones and returns a name. Blue. Dog. Threat. My mother's voice.",
              "Systems reading: <em>the classifier</em>. It is fast, it is mostly right, and it is heavily shaped by everything it has classified before.",
              "It is also where a lot of trouble starts, because the label arrives so fast that it feels like a property of the object rather than an output of your own machinery.",
            ],
          },
          {
            t: "formations", pali: "saṅkhārā", one: "habits, intentions, dispositions",
            body: [
              "The widest and most important of the five. Volitions, drives, attitudes, reflexes, moods, the accumulated shape of how you tend to respond.",
              "Systems reading: <em>the policy layer</em> — compiled routines built out of everything you have previously done, which decide what happens next without being consulted.",
              "This is where <span class=\"pali\">kamma</span> is written. Not in a ledger somewhere. Here, in the dispositions that the last action left behind. See chapter 08.",
            ],
          },
          {
            t: "consciousness", pali: "viññāṇa", one: "the knowing-of, per sense, per moment",
            body: [
              "The bare fact of awareness. Crucially, in the early texts this is always awareness <em>of</em> something through a specific channel: eye-consciousness, ear-consciousness, mind-consciousness. Six kinds, one per port.",
              "Systems reading: <em>the event stream</em>, not the observer of the stream. It arises with its object and passes with it.",
              "This is the one people most want to promote to self, because it feels like the witness. The texts head that off directly: consciousness is dependently arisen like everything else. No object, no consciousness.",
            ],
          },
        ],
      },
    ],

    ["h", "The point of the list"],

    ["p",
      "The exercise in the discourses is relentless and always the same. Take each aggregate. Ask: is it permanent? No. Is what is impermanent satisfactory? No. Is what is unsatisfactory fit to be called *mine*, or *me*, or *my self*? No."],

    ["p",
      "Then repeat for the next one. Then repeat for all five taken together. There is no leftover. The dashed sixth row in the diagram is the whole argument: you were expecting one and there is not one."],

    ["code",
      `// the standard enquiry, run over every component
for (const part of [rupa, vedana, sanna, sankhara, vinnana]) {
  assert(!isPermanent(part));   // it changes
  assert(!isReliable(part));    // so it cannot be leaned on
  assert(!isOwned(part));       // so calling it "mine" is a category error
}
// no sixth part is returned. the search terminates empty.`],

    ["note", "Why five and not some other number",
      "Because the list is built for a purpose, not for completeness. It is the smallest decomposition that covers every candidate for a self a listener might propose: body, sensation, recognition, will, awareness. Each one gets checked and ruled out. Other schemes in the texts slice the same territory differently — six elements, eighteen sense-elements, twelve bases. Same method, different granularity."],

    ["h", "Clinging to the heaps"],

    ["p",
      "The full phrase in the texts is usually not the five aggregates but the five _upādānakkhandhā_ — the five aggregates *subject to clinging*. That qualifier is doing real work. The problem is never that the components exist. The problem is the grip taken on them."],

    ["p",
      "So the goal is not to dismantle yourself. It is to stop holding a running process as though it were property."],
  ],
};

export const senses = {
  id: "senses",
  num: "05",
  group: "Architecture",
  title: "Six input ports",
  pali: "saḷāyatana — the six bases",
  si: "සළායතන",
  blocks: [
    ["lead",
      "The system has six input channels, not five. Mind is one of them — a sense organ, sitting on the bus alongside the eye and the ear, taking thoughts as its objects the way the eye takes colours."],

    ["fig", "senses",
      "Six ports, one shared bus. *Contact* is not an extra part — it is the name for a port, an object, and awareness coinciding. Immediately downstream sits feeling, and nothing can get from a port to anywhere else without passing through it."],

    ["h", "Mind as a sixth sense, not a supervisor"],

    ["p",
      "This is a genuinely strange move if you are used to Western frameworks, where mind is the thing that receives what the senses deliver. Here it is demoted to being one of them. Thoughts, memories and mental images arrive at the mind-port exactly as sounds arrive at the ear-port: as objects, from outside the awareness that registers them."],

    ["p",
      "Notice what this does. If mind is a port rather than a control room, then there is no control room. There is a bus with six things plugged into it and no seat at the head of the table. That is the architectural version of [anattā](#/marks)."],

    ["h", "Contact is a coincidence, not a component"],

    ["map", [
      ["phassa", "*contact* — what you call the meeting of a port, an object, and the consciousness of that port. Three conditions present at once. Not a fourth thing"],
      ["indriya", "*the port itself* — the faculty, the physical channel"],
      ["ārammaṇa", "*the object* — what arrives at that port"],
      ["viññāṇa", "*the awareness* — arising with that specific port, not floating free above all six"],
    ]],

    ["p",
      "That last row is easy to skim past and it is the load-bearing one. There is no general-purpose consciousness that then decides to look through the eye. Eye-consciousness arises *because* there is an eye and a visible object. Remove either and it does not arise. It is an event, not a resident."],

    ["h", "Guarding the ports"],

    ["p",
      "Out of this architecture comes a very practical instruction, _indriyasaṃvara_ — restraint of the sense faculties. It is regularly misread as sensory deprivation: look at less, hear less, want less input."],

    ["p",
      "It is not that. The instruction is to not grasp at the signs and features of what arrives — that is, to receive the input without immediately launching the elaboration that follows it. The port stays open. What changes is what gets done with what comes through."],

    ["note", "Why this chapter exists",
      "It sets up the next two. The chain of dependent origination runs straight through these ports, and the one place it can be interrupted sits two steps downstream of them. If the architecture is not clear, the interruption point looks arbitrary."],

    ["h", "Papañca — the elaboration problem"],

    ["p",
      "There is a term for what happens when the ports are unguarded: _papañca_, usually translated as conceptual proliferation. A sound arrives. Within a second there is a story about who made it, what they meant by it, what it says about you, and what you are going to do. None of that was in the sound."],

    ["p",
      "The systems reading is unkind and accurate: a small input triggers an unbounded expansion, and the expansion is then treated as data about the world. Most of what the mind-port handles is not incoming at all. It is the system's own output, fed back in and mistaken for news."],
  ],
};

export const chain = {
  id: "chain",
  num: "06",
  group: "Architecture",
  title: "The dependency chain",
  pali: "paṭiccasamuppāda — dependent origination",
  si: "පටිච්චසමුප්පාද",
  blocks: [
    ["lead",
      "Twelve links, each conditioning the next, closing back on itself. This is the central mechanism of the whole teaching and the reason the fix is possible: a chain of conditions is a chain you can break."],

    ["p",
      "The general principle is stated first, and it is worth having before the list. *When this exists, that comes to be. With the arising of this, that arises. When this does not exist, that does not come to be. With the ceasing of this, that ceases.* Four lines. Everything else is an application of them."],

    ["fig", "chain",
      "Twelve conditions, running left to right, then back, then forward again — and closing. *The widest gap in the drawing is the important one.* Every other link follows from its predecessor with something close to inevitability. That one does not have to.",
    ],

    ["h", "Walking the links"],

    ["map", [
      ["01 avijjā", "*not seeing how it works.* Not stupidity, and not lack of information. A standing misreading of the situation — that things last, satisfy, and belong to someone"],
      ["02 saṅkhārā", "*formations.* On that misreading, intentions and habits get built. The system compiles routines from a faulty premise"],
      ["03 viññāṇa", "*consciousness.* Those routines carry forward as awareness that lands somewhere and keeps going"],
      ["04 nāmarūpa", "*name and form.* Awareness needs something to be awareness of: a body and the mental factors that come with it"],
      ["05 saḷāyatana", "*six ports.* A body-mind organised into channels"],
      ["06 phassa", "*contact.* Port meets object meets awareness"],
      ["07 vedanā", "*feeling.* Contact is tagged pleasant, unpleasant or neutral. Automatically"],
      ["08 taṇhā", "*craving.* The tag is acted on. Pleasant — more. Unpleasant — away. Neutral — find something else"],
      ["09 upādāna", "*clinging.* Craving is held and defended. It becomes a position, an identity, a view worth protecting"],
      ["10 bhava", "*becoming.* The holding sets a trajectory. A way of being is now underway"],
      ["11 jāti", "*birth.* That trajectory lands. A new situation, a new identity, a new instance"],
      ["12 jarāmaraṇa", "*decay and death.* Whatever is born ages and ends. And the not-seeing was never corrected"],
    ]],

    ["h", "How to read the arrows"],

    ["p",
      "Not as strict causation, and not as a timeline. The relation is *conditionality*: link two cannot arise without link one, but link one does not force link two the way a struck ball forces the next one. Condition, not trigger. The distinction sounds academic and it is the difference between a mechanism you are subject to and one you can work with."],

    ["p",
      "Nor is it twelve sequential events. The traditional commentaries read the chain across three lifetimes; other readings run the whole twelve links in the space of a single moment of experience. Both readings are defended in the tradition, and the mechanism is identical at either scale. Nothing on this site depends on choosing."],

    ["h", "Where to cut"],

    ["p",
      "The chain has twelve joints, and almost all of them are welded shut. You cannot decide not to have a body. You cannot decide not to have sense ports. You cannot decide that contact will not be tagged with a feeling — that one in particular is worth stating plainly, because a lot of bad meditation advice is built on the assumption that you can."],

    ["p",
      "One joint is different. Between *feeling* and *craving* there is no necessity. Feeling is produced by conditions that are already in place; craving is a response, and a response can be seen as it happens. It is the only edge in the diagram with slack in it."],

    ["note", "The second arc",
      "The chain is always taught twice. Forward, it is the origin of suffering. Run in reverse — with the ceasing of ignorance, formations cease; with the ceasing of formations, consciousness ceases, and so on — it is the account of the exit. Same twelve links, same arrows, stated as a stopping instead of an arising."],

    ["p",
      "So the next chapter is just this one, zoomed in on a single edge."],
  ],
};
