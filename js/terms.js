/* ==========================================================================
   terms.js — the full Pali / systems mapping used across the site
   [pali, literal sense, systems term, note]
   ========================================================================== */

export const TERMS = [
  ["saṃsāra", "wandering on, flowing", "the loop",
   "Not a place and not a punishment. A process that keeps re-instantiating because nothing has stopped it."],

  ["nibbāna", "going out, unbinding", "the process ends",
   "A fire word. Not a destination, not annihilation. The fires named are greed, hatred and delusion."],

  ["dukkha", "badly-fitting, off-centre", "structural instability",
   "Translated as suffering, which turns a mechanical claim into a mood. An axle sitting wrong in its hub."],

  ["anicca", "not-lasting", "everything is a stream",
   "No component of experience is a stored value. Everything is mid-change."],

  ["anattā", "not-self", "no owner field",
   "The slot is removed, not filled with something else. Not a denial that you exist."],

  ["taṇhā", "thirst", "the keep-alive signal",
   "The demand that this moment be other than it is. The one mechanism named as the cause."],

  ["upādāna", "fuel, taking up", "holding a reference",
   "Craving held and defended until it becomes a position. The same word is used for fuel."],

  ["kamma", "action", "the update rule",
   "Narrowed by the Buddha to mean intention. Shapes dispositions; does not keep a score."],

  ["cetanā", "intention, will", "what actually gets written",
   "The thing kamma was redefined as. The only part of the mechanism available to the present moment."],

  ["saṅkhārā", "things put together", "compiled routines",
   "Both the fourth aggregate and the second link. Habits, intentions, dispositions — where the trace lands."],

  ["viññāṇa", "knowing-apart", "the event stream",
   "Always consciousness of something through a specific port. Not a witness sitting above the senses."],

  ["vedanā", "what is felt", "the valence tag",
   "Pleasant, unpleasant, neutral. Applied automatically to every event. Not emotion."],

  ["saññā", "recognising", "the classifier",
   "Pattern-match against what has been seen before, returning a label that feels like a property of the object."],

  ["rūpa", "form, appearance", "hardware and I/O",
   "The material aggregate, including the sense organs themselves."],

  ["khandha", "heap, bundle", "subsystem",
   "Deliberately unglamorous word. Five of them, and none of them is you."],

  ["phassa", "touching", "contact",
   "Port, object and awareness coinciding. Not a fourth component — the name for the coincidence."],

  ["saḷāyatana", "six bases", "six input ports",
   "Eye, ear, nose, tongue, body, mind. Mind is a port on the bus, not the user of the other five."],

  ["mano", "mind", "the sixth port",
   "Takes thoughts as objects the way the eye takes colours. Demoted from control room to channel."],

  ["paṭiccasamuppāda", "dependent arising", "the dependency chain",
   "Twelve conditions, closing on themselves. The central mechanism and the reason a fix exists."],

  ["avijjā", "not-knowing", "the root misreading",
   "Not ignorance of facts. A standing misread: that things last, satisfy, and belong to someone."],

  ["bhava", "becoming", "momentum into the next state",
   "The trajectory set up by clinging. Also the second kind of craving — wanting to be."],

  ["jāti", "birth", "instantiation",
   "Read across lifetimes in the commentaries, or across moments. The mechanism is the same either way."],

  ["sati", "remembering, keeping in view", "the observer process",
   "Translated as mindfulness. Samples the stream without modifying it — that non-interference is the point."],

  ["samādhi", "collectedness", "single-threading",
   "The mind gathered into one piece. An instrument, not an achievement."],

  ["samatha", "calming", "raising the resolution",
   "Steadying attention. On its own it produces calm and no structural change."],

  ["vipassanā", "seeing clearly", "attaching the profiler",
   "Watching the process while it runs. What the steadiness is for."],

  ["paññā", "understanding", "reading the source",
   "Not accumulated knowledge. Direct recognition of how the mechanism operates."],

  ["sīla", "conduct", "lowering the noise floor",
   "Read as engineering rather than morality: a mind maintaining a cover story has no capacity left to observe with."],

  ["magga", "path", "the training programme",
   "Eight parts, developed together, not in sequence. The fourth field of the bug report."],

  ["sammā", "complete, well-formed", "properly aligned",
   "Prefixed to all eight path factors. Translated as right, which imports a morality that is not in the word."],

  ["lobha", "greed", "pulling toward",
   "One of the three roots. Milder in Pali than the English suggests — attraction, at any intensity."],

  ["dosa", "hatred", "pushing away",
   "Resistance and ill will, again at any intensity. Irritation counts."],

  ["moha", "delusion", "not seeing",
   "The root that conceals the other two. Same referent as avijjā, named as a root rather than a link."],

  ["mettā", "friendliness", "default goodwill",
   "The active inverse of ill will. A disposition cultivated deliberately, not a feeling waited for."],

  ["papañca", "proliferation", "unbounded elaboration",
   "A small input triggering a large expansion, which is then mistaken for information about the world."],

  ["tilakkhaṇa", "three marks", "runtime properties",
   "Impermanence, instability, no-owner. One observation stated three times at increasing depth."],

  ["arahant", "worthy one", "exit condition met",
   "Fires out, processes still running until the body ends. Not in a trance and not elsewhere."],

  ["nīvaraṇa", "hindrance", "interrupt",
   "Five of them, treated as conditions with causes rather than as personal failings."],

  ["punabbhava", "again-becoming", "re-instantiation",
   "The word usually rendered rebirth. What continues is a process, not an entity."],

  ["idappaccayatā", "this-conditionality", "condition, not trigger",
   "When this is, that comes to be. Weaker than causation, and the whole path depends on that looseness."],
];

/* Pali in Sinhala script, keyed by the Pali form above. Where the everyday
   Sinhala word differs from the Pali and is the one people actually use, both
   are given, separated by a middle dot. */
export const SI = {
  "saṃsāra": "සංසාර",
  "nibbāna": "නිබ්බාන · නිවන",
  "dukkha": "දුක්ඛ · දුක",
  "anicca": "අනිච්ච",
  "anattā": "අනත්ත",
  "taṇhā": "තණ්හා",
  "upādāna": "උපාදාන",
  "kamma": "කම්ම · කර්ම",
  "cetanā": "චේතනා",
  "saṅkhārā": "සංඛාර",
  "viññāṇa": "විඤ්ඤාණ",
  "vedanā": "වේදනා",
  "saññā": "සඤ්ඤා",
  "rūpa": "රූප",
  "khandha": "ඛන්ධ",
  "phassa": "ඵස්ස",
  "saḷāyatana": "සළායතන",
  "mano": "මන · මනස",
  "paṭiccasamuppāda": "පටිච්චසමුප්පාද",
  "avijjā": "අවිජ්ජා",
  "bhava": "භව",
  "jāti": "ජාති",
  "sati": "සති · සිහිය",
  "samādhi": "සමාධි",
  "samatha": "සමථ",
  "vipassanā": "විපස්සනා",
  "paññā": "පඤ්ඤා",
  "sīla": "සීල",
  "magga": "මග්ග · මාර්ග",
  "sammā": "සම්මා",
  "lobha": "ලෝභ",
  "dosa": "දෝස",
  "moha": "මෝහ",
  "mettā": "මෙත්තා",
  "papañca": "පපඤ්ච",
  "tilakkhaṇa": "තිලක්ඛණ",
  "arahant": "අරහත් · රහත්",
  "nīvaraṇa": "නීවරණ",
  "punabbhava": "පුනබ්භව",
  "idappaccayatā": "ඉදප්පච්චයතා",
  "rūpa kalāpa": "රූප කලාප",
  "cittakkhaṇa": "චිත්තක්ෂණ",
  "citta vīthi": "චිත්ත වීථි",
  "bhavaṅga": "භවංග",
  "javana": "ජවන",
  "votthapana": "වොත්ථපන",
  "yoniso manasikāra": "යෝනිසෝ මනසිකාර",
};

/* The micro layer. Abhidhamma and commentary, not the suttas — see the
   micro board, which says so on its own face. */
TERMS.push(
  ["rūpa kalāpa", "a group of form", "smallest unit of matter",
   "Eight qualities that never occur apart: the four great elements plus colour, odour, taste and nutritive essence."],

  ["cittakkhaṇa", "a moment of mind", "one clock tick",
   "One moment of consciousness, in three phases: arising, presence, dissolution. Seventeen of them span one material group."],

  ["citta vīthi", "a track of mind", "the pipeline",
   "The seventeen-moment series that one act of seeing actually is. It runs entirely below the threshold of noticing."],

  ["bhavaṅga", "factor of becoming", "the idle loop",
   "The resting stream the mind falls back into between cognitive series. Not blankness — just nothing being processed."],

  ["javana", "running swiftly", "the only write-enabled stage",
   "Seven moments in the middle of the series. The only ones in it that make kamma; everything else is resultant or functional."],

  ["votthapana", "determining", "the branch instruction",
   "The moment the series decides which way it will run. This is the gap on the main board, at a much smaller scale."],

  ["yoniso manasikāra", "attention from the origin", "wise attention",
   "Attention applied at the determining moment. Applied, the seven impulsions run wholesome; not applied, they run unwholesome. The object is identical either way."]
);

/* Which glyph stands for which term in the term map. */
export const ICON_FOR = {
  "saṃsāra": "loop", "nibbāna": "exit", "dukkha": "marks", "anicca": "marks",
  "anattā": "khandha", "taṇhā": "craving", "upādāna": "clinging", "kamma": "karma",
  "cetanā": "karma", "saṅkhārā": "store", "viññāṇa": "bus", "vedanā": "feeling",
  "saññā": "perception", "rūpa": "ports", "khandha": "khandha", "phassa": "contact",
  "saḷāyatana": "senses", "mano": "senses", "paṭiccasamuppāda": "chain",
  "avijjā": "avijja", "bhava": "becoming", "jāti": "birth", "sati": "observer",
  "samādhi": "practice", "samatha": "practice", "vipassanā": "observer",
  "paññā": "magga", "sīla": "magga", "magga": "magga", "sammā": "magga",
  "lobha": "craving", "dosa": "roots", "moha": "avijja", "mettā": "practice",
  "papañca": "perception", "tilakkhaṇa": "marks", "arahant": "exit",
  "nīvaraṇa": "limits", "punabbhava": "birth", "idappaccayatā": "chain",
  "rūpa kalāpa": "kalapa", "cittakkhaṇa": "citta", "citta vīthi": "vithi",
  "bhavaṅga": "bhavanga", "javana": "javana", "votthapana": "gap",
  "yoniso manasikāra": "observer",
};

/* The citta classification. Same layer as the micro board: Abhidhamma and
   commentary, not sutta. */
TERMS.push(
  ["citta", "what knows", "one moment of consciousness",
   "A single event of knowing an object. One at a time, arising and passing. Eighty-nine types, or a hundred and twenty-one counted the long way."],

  ["cetasika", "belonging to mind", "the accompanying factors",
   "Fifty-two mental factors that colour a citta. Seven are in every citta without exception; the rest arrive in fixed combinations."],

  ["kusala", "skilful, wholesome", "writes, in the good direction",
   "A citta that makes kamma toward the wholesome. One of the four functional kinds."],

  ["akusala", "unskilful", "writes, in the other direction",
   "Rooted in greed, hatred or delusion. Twelve of them, and they only ever occur at the javana stage."],

  ["vipāka", "ripening", "resultant — makes none itself",
   "The fruit of kamma already made. Seeing and hearing are these, which is why you cannot be praised or blamed for them."],

  ["kiriya", "functional", "runs and writes nothing",
   "Does its job and leaves no trace. An arahant's actions are these — the loop keeps running and stops being fed."],

  ["kāmāvacara", "of the sense sphere", "the ordinary set",
   "The 54 cittas of ordinary experience: 12 unwholesome, 18 rootless, 24 beautiful."],

  ["lokuttara", "beyond the world", "path and fruition",
   "Eight cittas — four paths and four fruits. Counted against the five jhāna factors they become forty, which is how 89 becomes 121."],

  ["somanassa", "gladness of mind", "the joy flag",
   "One value of the feeling field in a citta. Its opposite here is not sadness but upekkhā — neutrality."],

  ["upekkhā", "looking on", "the neutral flag",
   "Equanimity. As a feeling it is neutral; as a quality developed on the path it is something much stronger than indifference."],

  ["asaṅkhārika", "unprompted", "fired without urging",
   "A citta that arises spontaneously rather than after encouragement. Held to be the stronger of the pair, for better or worse."],

  ["jhāna", "absorption", "a stable deep state",
   "Five of them in the Abhidhamma scheme, four in the sutta scheme. Instruments, not achievements."],

  ["sotāpanna", "stream-enterer", "first exit condition met",
   "The first of four stages. Certain fetters are gone and cannot return, and the process is now bounded rather than open-ended."],
);

Object.assign(SI, {
  "citta": "සිත",
  "cetasika": "චෛතසික",
  "kusala": "කුසල",
  "akusala": "අකුසල",
  "vipāka": "විපාක",
  "kiriya": "ක්‍රියා",
  "kāmāvacara": "කාමාවචර",
  "lokuttara": "ලෝකෝත්තර",
  "somanassa": "සෝමනස්ස",
  "upekkhā": "උපේක්ඛා",
  "asaṅkhārika": "අසංඛාරික",
  "jhāna": "ධ්‍යාන",
  "sotāpanna": "සෝවාන්",
});

Object.assign(ICON_FOR, {
  "citta": "citta", "cetasika": "kalapa", "kusala": "magga", "akusala": "roots",
  "vipāka": "loop", "kiriya": "gear", "kāmāvacara": "khandha",
  "lokuttara": "exit", "somanassa": "feeling", "upekkhā": "marks",
  "asaṅkhārika": "javana", "jhāna": "practice", "sotāpanna": "exit",
});

/* පින් · පව් · විපාක · මරණය — the everyday frame. The first two are sutta
   material; the classifications and the death process are commentarial. */
TERMS.push(
  ["puñña", "merit", "improves the position",
   "Good action and its result. Ten bases in the suttas, and most of them cost nothing. Improves where you land — does not end the process."],

  ["pāpa", "demerit", "the other direction",
   "Also called apuñña. Ten courses of unwholesome action: three by body, four by speech, three that never leave the mind."],

  ["dāna", "giving", "the first base",
   "The intention before, during and after all count, and the amount counts least of the three."],

  ["kammapatha", "course of action", "a completed act",
   "A full course, not a passing impulse. This is why intention that never becomes anything is treated differently from intention that does."],

  ["garuka kamma", "weighty", "takes precedence",
   "Jhāna attainment on one side, the gravest acts on the other. If one exists, nothing else gets to ripen first."],

  ["āciṇṇa kamma", "habitual", "the default that decides",
   "What you did repeatedly. In the absence of anything weighty or death-proximate, the habit is what determines the next becoming."],

  ["ahosi kamma", "it was", "lapsed",
   "Did not get its conditions in time and no longer will. Not forgiven and not cancelled — simply out of time."],

  ["maraṇāsanna javana", "death-proximate impulsion", "the last write",
   "The final run of impulsion moments — five rather than the usual seven, because the body supporting it is failing."],

  ["cuti citta", "falling-away consciousness", "the last citta",
   "The final moment of a life. It performs one function, passing away, and makes no kamma at all."],

  ["paṭisandhi citta", "relinking consciousness", "the first citta",
   "The first moment of the next existence, arising immediately with no interval, taking the same object the last impulsion took."],

  ["gati-nimitta", "sign of destination", "the next state, seen early",
   "One of three possible objects of the final impulsion, alongside the act itself and a sign associated with it."],
);

Object.assign(SI, {
  "puñña": "පින්",
  "pāpa": "පව්",
  "dāna": "දාන",
  "kammapatha": "කම්මපථ",
  "garuka kamma": "ගරුක කර්ම",
  "āciṇṇa kamma": "ආචිණ්ණ කර්ම",
  "ahosi kamma": "අහෝසි කර්ම",
  "maraṇāsanna javana": "මරණාසන්න ජවන",
  "cuti citta": "චුති සිත",
  "paṭisandhi citta": "පටිසන්ධි සිත",
  "gati-nimitta": "ගති නිමිත්ත",
});

Object.assign(ICON_FOR, {
  "puñña": "magga", "pāpa": "roots", "dāna": "karma", "kammapatha": "karma",
  "garuka kamma": "karma", "āciṇṇa kamma": "store", "ahosi kamma": "decay",
  "maraṇāsanna javana": "javana", "cuti citta": "exit",
  "paṭisandhi citta": "birth", "gati-nimitta": "citta",
});
