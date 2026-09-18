/* ==========================================================================
   render.js — turns chapter block arrays into HTML
   Content files stay declarative; all markup decisions live here.
   ========================================================================== */

import { diagram } from "./diagrams.js";

/* ---------- escaping + inline formatting ---------- */

export function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Inline mini-syntax used throughout the content files:
 *   *bold*        -> <strong>
 *   _pali_        -> italic green Pali term
 *   `code`        -> mono "systems term" chip
 *   [text](#/id)  -> link
 */
export function fmt(s) {
  return esc(s)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/`([^`]+)`/g, '<span class="sys">$1</span>')
    .replace(/\*([^*]+)\*/g, "<strong>$1</strong>")
    .replace(/_([^_]+)_/g, '<span class="pali">$1</span>');
}

/* ---------- block renderers ---------- */

const blocks = {
  lead: (t) => `<p class="lead reveal">${fmt(t)}</p>`,

  p: (t) => `<p class="reveal">${fmt(t)}</p>`,

  h: (t) => `<h2 class="reveal">${fmt(t)}</h2>`,

  h3: (t) => `<h3 class="reveal">${fmt(t)}</h3>`,

  list: (items) =>
    `<ul class="reveal">${items.map((i) => `<li>${fmt(i)}</li>`).join("")}</ul>`,

  olist: (items) =>
    `<ol class="reveal">${items.map((i) => `<li>${fmt(i)}</li>`).join("")}</ol>`,

  note: (label, body) => `
    <aside class="note reveal">
      <span class="note__label">${esc(label)}</span>
      ${splitParas(body)}
    </aside>`,

  warn: (label, body) => `
    <aside class="note note--warn reveal">
      <span class="note__label">${esc(label)}</span>
      ${splitParas(body)}
    </aside>`,

  quote: (text, cite) => `
    <blockquote class="quote reveal">
      <p>${fmt(text)}</p>
      ${cite ? `<cite>${esc(cite)}</cite>` : ""}
    </blockquote>`,

  /** Pali term -> systems term mapping rows. */
  map: (rows) => `
    <div class="maptable reveal">
      ${rows
        .map(
          ([from, to]) => `
        <div class="maprow">
          <span class="maprow__from">${esc(from)}</span>
          <span class="maprow__arrow" aria-hidden="true">&rarr;</span>
          <span class="maprow__to">${fmt(to)}</span>
        </div>`
        )
        .join("")}
    </div>`,

  cards: (items) => `
    <div class="cards reveal">
      ${items
        .map(
          (c) => `
        <div class="card">
          ${c.idx ? `<div class="card__idx">${esc(c.idx)}</div>` : ""}
          <div class="card__t">${fmt(c.t)}</div>
          ${c.pali ? `<div class="card__pali">${esc(c.pali)}</div>` : ""}
          <p class="card__d">${fmt(c.d)}</p>
        </div>`
        )
        .join("")}
    </div>`,

  /** Pseudocode block. Lines prefixed with // are dimmed automatically. */
  code: (src) => `
    <pre class="codeblock reveal"><code>${src
      .trim()
      .split("\n")
      .map((line) => {
        const e = esc(line);
        return e.replace(
          /(\/\/.*$)/,
          '<span class="c">$1</span>'
        );
      })
      .join("\n")}</code></pre>`,

  /** Named diagram from diagrams.js, wrapped in a captioned figure. */
  fig: (name, caption, opts) => {
    const body = diagram(name, opts || {});
    return `
      <figure class="figure reveal" data-diagram="${esc(name)}">
        <div class="figure__frame">${body}</div>
        ${caption ? `<figcaption class="figure__cap">${fmt(caption)}</figcaption>` : ""}
      </figure>`;
  },

  /** Raw HTML from a content file that builds its own component. */
  html: (h) => `<div class="reveal">${h}</div>`,
};

function splitParas(body) {
  return String(body)
    .split("\n\n")
    .map((p) => `<p>${fmt(p.trim())}</p>`)
    .join("");
}

/* ---------- chapter assembly ---------- */

export function renderChapter(ch, prev, next) {
  const body = ch.blocks
    .map(([kind, ...args]) => {
      const fn = blocks[kind];
      if (!fn) {
        console.warn("unknown block kind:", kind);
        return "";
      }
      return fn(...args);
    })
    .join("\n");

  return `
    <article class="chapter" data-chapter="${esc(ch.id)}">
      <div class="chapter__eyebrow">
        <span>${esc(ch.num)}</span>
        <span>${esc(ch.group)}</span>
      </div>
      <h1 class="chapter__title">${fmt(ch.title)}</h1>
      ${ch.pali ? `<p class="chapter__pali">${esc(ch.pali)}${ch.si ? `<span class="chapter__si">${esc(ch.si)}</span>` : ""}</p>` : ""}
      ${body}
      ${chapNav(prev, next)}
    </article>`;
}

function chapNav(prev, next) {
  if (!prev && !next) return "";
  return `
    <nav class="chapnav" aria-label="Chapter navigation">
      ${
        prev
          ? `<a href="#/${esc(prev.id)}">
               <span class="chapnav__dir">&larr; Previous</span>
               <span class="chapnav__t">${esc(prev.title)}</span>
             </a>`
          : "<span></span>"
      }
      ${
        next
          ? `<a class="chapnav__next" href="#/${esc(next.id)}">
               <span class="chapnav__dir">Next &rarr;</span>
               <span class="chapnav__t">${esc(next.title)}</span>
             </a>`
          : "<span></span>"
      }
    </nav>`;
}
