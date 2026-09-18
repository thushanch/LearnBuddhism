# Escaping the System

**Live: <https://thushanch.github.io/LearnBuddhism/>**

A systems-engineering reading of early Buddhism. One machine, drawn once, then taken
apart over fifteen short chapters — with the Pali, the Sinhala, and a worked everyday
example for every part of it.

The premise: treat the situation the early discourses describe as a *system* — six
input ports, a bus, a short pipeline, a loop that closes on itself, and exactly one
branch out. Treat the teaching as the report of someone who reverse-engineered it and
found the exit.

It is a teaching device, not doctrine. Chapter 13 is a full audit of everywhere the
metaphor misleads, and it is not optional reading.

---

## What is in it

**The board** — the landing page is the whole system on a single screen. Every block
carries a glyph, the English name, the Pali, and the Pali in Sinhala script. Click one and
an inspector opens with its systems counterpart, three or four everyday examples, and a
link to its chapter. Two switches change the board's state: attaching the observer
(*sati*) lights the gap and dims everything downstream of it; cutting the fuel stops the
loop and lights the exit.

**The simulator** — pick one ordinary moment (a phone buzzing, a trishaw cutting in, a
frying smell, a thing you said years ago) and watch it travel the entire trace, block by
block, with a line of narration at each step. Run the same moment again with the observer
attached and it stops at the gap instead of completing the loop. That contrast is the
whole argument, made in about twenty seconds.

**The micro board** (`#/micro`) — the second window, underneath the first:

- one material unit — *rūpa kalāpa*, the eight qualities that are never found apart
- one mind-moment — *cittakkhaṇa*, in its three phases: arising, presence, dissolution
- how they line up — one material group lasts seventeen mind-moments
- the seventeen-moment cognitive series — *citta vīthi*, which is what one flicker of
  seeing actually is

Run the series and watch it move. Toggle wise attention (*yoniso manasikāra*) and the
seven *javana* moments switch from unwholesome to wholesome with nothing about the object
changed. The determining moment, *votthapana*, is the gap from the main board at a much
smaller scale — the same branch, two zoom levels.

This layer is Theravāda Abhidhamma and its commentaries, not the suttas, and the board
says so on its own face rather than in a footnote.

**The සිත් වර්ග board** (`#/cittas-board`) — the third window: the Abhidhamma
classification of consciousness. The four spheres with their counts, the 54
sense-sphere cittas broken into unwholesome, rootless and beautiful, and the 52
mental factors below.

The point it is built to make: the eighty-nine are not a list anybody memorised
item by item. The eight greed-rooted cittas are three binary fields — joy or
equanimity, with or without wrong view, prompted or unprompted — and two cubed is
eight. The eight wholesome cittas have the same shape with one field swapped:
knowledge in place of wrong view. Set the three switches and watch a citta get
named in Pali and Sinhala, with an everyday example of what it looks like.

**The පින් · පව් · විපාක · මරණය board** (`#/kamma-board`) — the fourth window, and
the layer most Sri Lankan readers actually grew up with. The ten bases of merit and
the ten courses of unwholesome action, sorted by which door they come out of. Then
the three ways the tradition classifies how kamma ripens — by what it does, by which
ripens first, and by when — because any given kamma has a value in all three columns
at once.

Then the death process, run step by step: the last cognitive series with its weaker
five-moment impulsion, the death consciousness, and the relinking consciousness that
arises immediately after it with no interval. Pick what the final impulsion takes as
its object — the act, a sign of the act, or a sign of the destination — and the
relinking consciousness takes the same one. **Nothing crosses.** That is the whole
point of the board, and it is what *punabbhava* means: again-becoming, not
again-being-you.

**Sixteen chapters**, in reading order:

| | Chapter | Pali | Sinhala |
|---|---|---|---|
| 00 | Read this first | the terms of the metaphor | |
| 01 | You are inside a loop | saṃsāra | සංසාර |
| 02 | The bug report | cattāri ariyasaccāni | චත්තාරි අරියසච්ච |
| 03 | Three runtime properties | tilakkhaṇa | තිලක්ඛණ |
| 04 | Five subsystems | pañcakkhandhā | පඤ්චක්ඛන්ධ |
| 05 | Six input ports | saḷāyatana | සළායතන |
| 06 | The dependency chain | paṭiccasamuppāda | පටිච්චසමුප්පාද |
| 07 | The one cuttable edge | vedanā → taṇhā | වේදනා → තණ්හා |
| 08 | The update rule | kamma | කම්ම |
| 09 | Three processes always running | akusala-mūla | අකුසල මූල |
| 10 | The eight-part programme | ariya aṭṭhaṅgika magga | අරිය අට්ඨංගික මග්ග |
| 11 | Attaching the debugger | samatha & vipassanā | සමථ · විපස්සනා |
| 12 | Going out | nibbāna | නිබ්බාන · නිවන |
| 13 | Where this metaphor breaks | the audit | |
| 14 | Eighty-nine kinds of mind | citta | සිත් වර්ග |
| 15 | Term map | 71 terms, searchable in English, Pali or Sinhala | |

**Three interactive figures** beyond the two boards: the five aggregates (chapter 04), the
feeling-to-craving pipeline (chapter 07), and the fire that goes out when you cut its
supply (chapter 12).

---

## Running it

No build step, no dependencies. It is ES modules and CSS, so it needs to be served over
HTTP rather than opened as a file.

```bash
node tools/serve.mjs 4173
```

Then open <http://localhost:4173>. Any static server works equally well.

---

## How it is put together

```
index.html            shell: rail, main, theme bootstrap
js/
  app.js              hash router, theme, rail, scroll reveal
  machine.js          the main board, its inspector and the simulator
  micro.js            the micro board: kalapa, cittakkhana, citta vithi
  cittas.js           the sith warga board: the 89, the 52, the field decoder
  kamma.js            merit, demerit, how kamma ripens, and the death process
  icons.js            one line-art glyph per concept, on a 24x24 grid
  render.js           turns chapter block arrays into HTML
  diagrams.js         the eleven chapter figures, plus interactive wiring
  terms.js            the Pali / Sinhala / systems mapping
  chapters/           content only — part1..part4, registered in index.js
styles/
  tokens.css          brand palette and type scale, both themes
  base.css            reset, typography, the contour texture
  app.css             shell and components
  diagrams.css        chapter figures and interactive panels
  machine.css         the main board, the simulator, Sinhala and icon styling
  micro.css           the micro board
  cittas.css          the sith warga board and its decoder
  kamma.css           the merit / demerit / vipaka / death board
icons/                generated contour textures
brand/                mark and wordmarks
tools/serve.mjs       zero-dependency static server
```

Content files are declarative. A chapter is a list of typed blocks — `p`, `h`, `map`,
`cards`, `code`, `fig`, `note`, `quote` — and `render.js` owns every markup decision, so
writing a chapter never means writing HTML. Inline, `*bold*`, `_pali_`, `` `systems term` ``
and `[link](#/id)` are the whole syntax.

**Adding a chapter:** write the object, export it, add it to the array in
`js/chapters/index.js`. The rail, the prev/next links and the routing follow from that
array.

**Adding a figure:** write a function returning markup in `diagrams.js`, register it, and
reference it from a chapter with `["fig", "name", "caption"]`.

**Adding a board block:** add an entry to `PARTS` in `machine.js` with its Pali, Sinhala,
icon name and examples, then place it with `mod()`. The inspector, the simulator narration
and the keyboard handling all read from that one entry.

---

## Design

Built to the Thushan Chamika brand guide.

- **Palette** — Deep Ocean Blue `#14416B` leads; Water Blue `#1E78B0` and Natural Green
  `#2E6B4F` accent; Off-White `#F6F7F4` is space; Slate Ink `#1C2A33` is text. Green is
  reserved throughout for Pali terms and for the one thing that can be cut, so the colour
  carries meaning rather than decoration.
- **Type** — Poppins for display, Inter for body. Noto Sans Sinhala carries the Sinhala,
  always a step smaller than the Pali it sits under, so it reads as a gloss rather than
  competing for the line. A system monospace stack carries machine text — code, readouts,
  labels. Both are utility faces, not additional brand fonts.
- **Sinhala** — given as Pali in Sinhala script, which is what Sri Lankan dhamma usage
  actually looks like. Where the everyday Sinhala word differs and is the one people
  reach for, both appear, separated by a middle dot: නිබ්බාන · නිවන.
- **Icons** — one glyph per concept, stroke-only on a 24x24 grid, inheriting colour from
  whatever they sit in. No filled shapes, no shadows. The eight-spoked wheel is the only
  traditional form used, and only for the eightfold path.
- **Motif** — the topographic contour, generated into `icons/` and held at low contrast
  behind everything. It is the only background element.
- **Themes** — *Rendered* (light, brand default) and *Source* (dark). The switch is at the
  bottom of the rail and changes nothing but colour.
- `prefers-reduced-motion` is respected: CSS animation is disabled globally, path-following
  animations are not emitted at all, and both simulators step instantly instead of
  dwelling.

---

## On the content

The main site is drawn from the Pali Nikāyas, which is the layer all Buddhist traditions
share. Later developments — Mahāyāna, Zen, Vajrayāna, Pure Land — reframe much of this,
sometimes radically. What is there is the common floor, not the whole building, and
chapter 13 says so at length.

The micro board is one floor down and a different kind of source: Theravāda Abhidhamma
and its commentaries, chiefly the Visuddhimagga and the Abhidhammattha Saṅgaha. It is
labelled as such on the board itself, because a model that detailed is easy to mistake
for a transcript.

Where the traditions disagree, the site says so rather than picking a side. Where the
English translation of a term is misleading, the Pali is given and the mistranslation is
named.

---

## Deploying

The site is live at <https://thushanch.github.io/LearnBuddhism/>.

`.github/workflows/pages.yml` publishes it on every push to `main`, and can also be run
by hand from the Actions tab. Nothing is built — the artifact is the repository as it
stands, which is the point of keeping the site dependency-free.
