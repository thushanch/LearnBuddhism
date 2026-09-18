/* ==========================================================================
   Chapter registry — order is the reading order and the rail order.
   ========================================================================== */

import { start, loop, report, marks } from "./part1.js";
import { khandha, senses, chain } from "./part2.js";
import { gap, karma, roots } from "./part3.js";
import { path, practice, exit, limits, cittas, glossary } from "./part4.js";

export const CHAPTERS = [
  start,
  loop,
  report,
  marks,
  khandha,
  senses,
  chain,
  gap,
  karma,
  roots,
  path,
  practice,
  exit,
  limits,
  cittas,
  glossary,
];

export const byId = Object.fromEntries(CHAPTERS.map((c) => [c.id, c]));

/** Chapters grouped in rail order, preserving first-seen group order. */
export function grouped() {
  const out = [];
  for (const c of CHAPTERS) {
    let g = out.find((x) => x.name === c.group);
    if (!g) out.push((g = { name: c.group, items: [] }));
    g.items.push(c);
  }
  return out;
}
