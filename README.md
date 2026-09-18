# Escaping the System

A systems-engineering reading of early Buddhism. One machine, drawn once, then taken
apart over fifteen short chapters.

The premise: treat the situation the early discourses describe as a *system* — six
input ports, a bus, a short pipeline, a loop that closes on itself, and exactly one
branch out. Treat the teaching as the report of someone who reverse-engineered it and
found the exit.

It is a teaching device, not doctrine. Chapter 13 is a full audit of everywhere the
metaphor misleads, and it is not optional reading.

---

## What is in it

**The board** — the landing page is the whole system on a single screen. Every block is
clickable and opens an inspector with the Pali term, the systems counterpart, and a link
to its chapter. Two switches change the board's state: attaching the observer (`sati`)
lights the gap and dims everything downstream of it; cutting the fuel stops the loop and
lights the exit.

**Fifteen chapters**, in reading order:

| | Chapter | Pali |
|---|---|---|
| 00 | Read this first | the terms of the metaphor |
| 01 | You are inside a loop | saṃsāra |
| 02 | The bug report | cattāri ariyasaccāni |
| 03 | Three runtime properties | tilakkhaṇa |
| 04 | Five subsystems | pañcakkhandhā |
| 05 | Six input ports | saḷāyatana |
| 06 | The dependency chain | paṭiccasamuppāda |
| 07 | The one cuttable edge | vedanā → taṇhā |
| 08 | The update rule | kamma |
| 09 | Three processes always running | akusala-mūla |
| 10 | The eight-part programme | ariya aṭṭhaṅgika magga |
| 11 | Attaching the debugger | samatha & vipassanā |
| 12 | Going out | nibbāna |
| 13 | Where this metaphor breaks | the audit |
| 14 | Term map | 40 terms, searchable |

**Three interactive figures** beyond the board: the five aggregates (chapter 04), the
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
  machine.js          the one-window board and its inspector
  render.js           turns chapter block arrays into HTML
  diagrams.js         the eleven figures, plus the interactive wiring
  terms.js            the Pali / systems mapping
  chapters/           content only — part1..part4, registered in index.js
styles/
  tokens.css          brand palette and type scale, both themes
  base.css            reset, typography, the contour texture
  app.css             shell and components
  diagrams.css        figures and interactive panels
  machine.css         the board
icons/                generated contour textures
brand/                mark and wordmarks
tools/serve.mjs       zero-dependency static server
```

Content files are declarative. A chapter is a list of typed blocks — `p`, `h`, `map`,
`cards`, `code`, `fig`, `note`, `quote` — and `render.js` owns every markup decision, so
writing a chapter never means writing HTML. Inline, `*bold*`, `_pali_`, `` `systems
term` `` and `[link](#/id)` are the whole syntax.

Adding a chapter: write the object, export it, add it to the array in
`js/chapters/index.js`. The rail, the prev/next links and the routing follow from that
array.

Adding a figure: write a function returning markup in `diagrams.js`, register it, and
reference it from a chapter with `["fig", "name", "caption"]`.

---

## Design

Built to the Thushan Chamika brand guide.

- **Palette** — Deep Ocean Blue `#14416B` leads; Water Blue `#1E78B0` and Natural Green
  `#2E6B4F` accent; Off-White `#F6F7F4` is space; Slate Ink `#1C2A33` is text. Green is
  reserved throughout for Pali terms and for the one thing that can be cut, so the colour
  carries meaning rather than decoration.
- **Type** — Poppins for display, Inter for body. A system monospace stack is used for
  machine text (code, readouts, labels); it is a utility face, not a third brand font.
- **Motif** — the topographic contour, generated into `icons/` and held at low contrast
  behind everything. It is the only background element.
- **Themes** — *Rendered* (light, brand default) and *Source* (dark). The switch is at the
  bottom of the rail and changes nothing but colour.
- `prefers-reduced-motion` is respected: CSS animation is disabled globally and the
  path-following animations are not emitted at all.

---

## On the content

Drawn from the Pali Nikāyas, which is the layer all Buddhist traditions share. Later
developments — Mahāyāna, Zen, Vajrayāna, Pure Land — reframe much of this, sometimes
radically. What is here is the common floor, not the whole building, and chapter 13 says
so at length.

Where the traditions disagree, the site says so rather than picking a side. Where the
English translation of a term is misleading, the Pali is given and the mistranslation is
named.
