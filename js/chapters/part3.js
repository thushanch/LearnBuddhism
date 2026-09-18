/* ==========================================================================
   Chapters 07–09 — the seam, the update rule, and what is running in the background
   ========================================================================== */

export const gap = {
  id: "gap",
  num: "07",
  group: "The seam",
  title: "The one cuttable edge",
  pali: "vedanā → taṇhā",
  blocks: [
    ["lead",
      "Everything so far has been description. This is the chapter where the description turns into something you can use, and it turns on a single step of the chain."],

    ["p",
      "Feeling arises. That is not negotiable — contact produces a valence tag, and the tag is applied before you have any say in it. What happens next is where the whole thing is decided."],

    ["fig", "gap",
      "Send an input, then send the same input again with the observer attached. *Nothing about the feeling changes* — pleasant is still pleasant, unpleasant is still unpleasant. What changes is whether the feeling is handed forward.",
    ],

    ["h", "Why this edge and no other"],

    ["p",
      "Look at what sits on either side of it. Upstream, the conditions are already in place — a body, functioning sense ports, an object arriving. None of that is available to intervene on in the moment. Downstream, once craving has fired, clinging and becoming follow almost mechanically; by then you are arguing with momentum."],

    ["p",
      "The edge between them is different because craving is not produced by feeling. It is produced by feeling *plus not seeing the feeling clearly*. Add the seeing and the second condition fails."],

    ["code",
      `// the default path
onFeeling(tag) {
  crave(tag);              // fires immediately, no gate
}

// with sati attached
onFeeling(tag) {
  observe(tag);            // "this is a pleasant feeling"
  // the tag is fully registered. it is simply not handed on.
}`],

    ["h", "What the observer is"],

    ["p",
      "_Sati_ — usually translated as mindfulness, which has been worn smooth by overuse. The word literally means *remembering*, or keeping something in view. Not relaxation, not blankness, not detachment from experience."],

    ["p",
      "In the systems reading it is close to a monitoring process that samples the stream without modifying it. The key property is that it does not intervene. It does not suppress the feeling, argue with it, or replace it with a nicer one. It only notes what is present — and that alone is enough to break the automaticity, because automatic and observed are mutually exclusive states."],

    ["cards", [
      { idx: "IS", t: "Noticing what is here", pali: "sati",
        d: "Knowing the pleasant feeling is pleasant, while it is still happening, not afterwards in the recap." },
      { idx: "IS NOT", t: "Suppression", pali: "",
        d: "Pushing the feeling down is just aversion wearing a calm face. It feeds the chain from the other side." },
      { idx: "IS NOT", t: "Indifference", pali: "",
        d: "Numbness is not the goal and the texts treat it as a failure state. The feeling is fully felt. It is just not obeyed." },
      { idx: "IS NOT", t: "A one-time fix", pali: "",
        d: "The gap has to be seen every time. This is why the fix is a training programme and not a patch." },
    ]],

    ["h", "The three flavours of craving"],

    ["p",
      "The texts split _taṇhā_ into three, and the split maps cleanly onto the three feeling tags:"],

    ["map", [
      ["kāma-taṇhā", "*wanting toward* — pleasant tag, so: get more, keep it, repeat it"],
      ["bhava-taṇhā", "*wanting to be* — craving for existence, continuation, becoming someone. The most durable of the three"],
      ["vibhava-taṇhā", "*wanting not to be* — craving for annihilation, escape, for the unpleasant thing and oneself with it to stop existing"],
    ]],

    ["p",
      "That third one is important and often left out of introductions. The urge to be rid of yourself is not the exit. It is the loop running in a different direction, and the texts classify it as craving like any other."],

    ["note", "On the word gap",
      "It is a teaching device, not a claim about a measurable interval. There is no evidence for a fixed number of milliseconds between feeling and craving, and the texts do not offer one. What is being described is the difference between a step that happens with awareness and the same step happening without it."],

    ["h", "Scale"],

    ["p",
      "This is one edge, and it fires thousands of times a day. Which is the discouraging reading and also the encouraging one: you do not have to find a rare opportunity. The opportunity is the next thing that happens."],
  ],
};

export const karma = {
  id: "karma",
  num: "08",
  group: "The seam",
  title: "The update rule",
  pali: "kamma — action",
  blocks: [
    ["lead",
      "_Kamma_ means action. That is the whole word. Not fate, not justice, not a balance sheet, not a cosmic accountant. The Buddhist innovation was to narrow it further: what counts as action is *intention*."],

    ["quote",
      "It is intention that I call kamma. Having intended, one acts — by body, by speech, by mind.",
      "Aṅguttara Nikāya 6.63"],

    ["fig", "karma",
      "A three-step cycle with no external bookkeeping. Intention produces action, action leaves a trace in your dispositions, and those dispositions weight the next intention. *The only place the system can be written to is the present one.*"],

    ["h", "Where the trace is stored"],

    ["p",
      "In the [fourth aggregate](#/khandha). _Saṅkhārā_ — formations — is both the place intentions come from and the place their residue lands. Act from irritation and the disposition toward irritation is very slightly reinforced. Act from generosity and the same thing happens in the other direction."],

    ["p",
      "That is the entire mechanism, and it is doing far more work than any metaphysical account of karma. You are not being scored. You are being shaped, continuously, by what you actually do, and the shaping is the consequence."],

    ["h", "What it is not"],

    ["cards", [
      { idx: "NOT", t: "A justice system", pali: "",
        d: "Nothing is weighing your deeds and issuing a verdict. There is no mechanism in the texts that does this, and treating misfortune as a deserved sentence is a misuse the discourses explicitly reject." },
      { idx: "NOT", t: "Determinism", pali: "",
        d: "The Buddha argued directly against the view that everything is caused by past action. If it were, no change would be possible and the whole path would be pointless." },
      { idx: "NOT", t: "The only cause", pali: "",
        d: "The texts list several orders of causation — physical, biological, mental, and others. Karma is one of them, not a theory of everything. Illness has causes; so does weather." },
      { idx: "NOT", t: "A record you can read", pali: "",
        d: "The detailed workings of karma are listed among the things declared unprofitable to speculate about. The instruction is to attend to present intention, not to audit the past." },
    ]],

    ["h", "The write head is always now"],

    ["p",
      "This is the practical consequence and it is the reason the chapter sits here rather than earlier. Whatever the past has loaded into the dispositions, the only point at which anything is being written is the intention forming right now."],

    ["p",
      "Which is exactly the same point [chapter 07](#/gap) identified. The gap between feeling and craving is where intention is decided. Karma is not a separate topic from the gap; it is what the gap is *for*."],

    ["code",
      `// dispositions are not a record. they are current weights.
function act(intention) {
  const outcome = perform(intention);
  dispositions = update(dispositions, intention);  // the trace
  return outcome;
}
// nothing reads dispositions back as a score.
// they simply make the same intention easier next time.`],

    ["note", "Merit is not escape",
      "Good actions produce good conditions — pleasant results, a better situation, in traditional terms a better rebirth. All of that is still inside the loop. Accumulating merit improves your position in the system; it does not exit the system. The texts are quite clear that these are different projects."],
  ],
};

export const roots = {
  id: "roots",
  num: "09",
  group: "The seam",
  title: "Three processes always running",
  pali: "akusala-mūla — the unwholesome roots",
  blocks: [
    ["lead",
      "Every unskilful action traces back to one of three roots. They are not sins and they are not personality traits. They are closer to background processes that consume the system's capacity whether or not anything is asking them to."],

    ["fig", "roots", "The load figures are illustrative, not measured. The claim in the texts is only that these three are always present in some degree until something specifically addresses them.",
      {
        rows: [
          { name: "greed", pali: "lobha", desc: "pulling toward — acquiring, keeping, repeating", load: 74 },
          { name: "hatred", pali: "dosa", desc: "pushing away — irritation, resistance, ill will", load: 61 },
          { name: "delusion", pali: "moha", desc: "not seeing clearly — the one that hides the other two", load: 88 },
        ],
      },
    ],

    ["h", "Why three and why these"],

    ["p",
      "Because they exhaust the possible relationships to a feeling tag. Pleasant produces pulling. Unpleasant produces pushing. Neutral produces neither, and in the absence of either the system simply fails to look — which is the third root."],

    ["p",
      "So the three roots are not an additional theory. They are [the three feeling tags](#/gap) read one step later, after craving has fired."],

    ["h", "Delusion is the one that matters"],

    ["p",
      "_Moha_ — also called _avijjā_, not-seeing, when it appears at the head of the dependency chain. It is listed third and it is first in importance, because it is the condition the other two run under. Greed and grasping only work if the object looks like it will last and like it will satisfy. Remove that misreading and greed has nothing to grip."],

    ["p",
      "This is why the path is not primarily about behaving better. Behaving better is part of it and it is genuinely load-bearing, but you can suppress greed and aversion indefinitely without touching the thing that generates them. Only seeing clearly does that."],

    ["h", "The inverses"],

    ["map", [
      ["alobha", "*non-greed* — not asceticism. Generosity, and the ability to let go of something without a fight"],
      ["adosa", "*non-hatred* — active goodwill, _mettā_. Not the absence of anger so much as the presence of something else"],
      ["amoha", "*non-delusion* — seeing what is actually the case. This is the one the whole training programme is aimed at"],
    ]],

    ["note", "A word on the translations",
      "Greed, hatred and delusion are strong English words and they make the three roots sound like something only bad people have. The Pali is milder and more universal — attraction, resistance, and not-seeing. Every mind does all three, constantly, mostly at low intensity. That is the claim."],

    ["h", "The connection to the loop"],

    ["p",
      "These three are what the fire in [chapter 01](#/loop) is burning. When the texts talk about the fires being extinguished, these are the fires — named explicitly, by these three names. Which is the subject of [chapter 12](#/exit)."],
  ],
};
