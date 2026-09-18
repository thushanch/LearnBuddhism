/* ==========================================================================
   icons.js — one line-art glyph per concept

   All drawn on a 24x24 grid, stroke-only, no fill, no shadows, so they
   inherit colour from whatever they sit in and stay legible at 16px.
   ========================================================================== */

const P = {
  /* --- the board --- */

  // six slots funnelling into one line
  ports: "M3 5h4M3 12h4M3 19h4M7 5c5 0 4 7 5 7M7 12h5M7 19c5 0 4-7 5-7M12 12h9",

  // parallel conductors
  bus: "M5 3v18M10 3v18M15 3v18M20 3v18",

  // two arrows meeting
  contact: "M2 12h7M22 12h-7M9 9l3 3-3 3M15 9l-3 3 3 3",

  // a tag, clipped on
  feeling: "M3 11V4h7l10 10-7 7L3 11zM7 7.5h.01",

  // a funnel that sorts
  perception: "M3 5h18l-7 8v6l-4 2v-8L3 5z",

  // a line with a deliberate break in it
  gap: "M2 12h5M17 12h5M10 6v12M14 6v12",

  // an open eye
  observer: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7zM12 15a3 3 0 100-6 3 3 0 000 6",

  // a magnet
  craving: "M5 4v8a7 7 0 0014 0V4h-5v8a2 2 0 01-4 0V4H5z",

  // a closed padlock
  clinging: "M7 11V8a5 5 0 0110 0v3M5 11h14v9H5z",

  // fast-forward: momentum already underway
  becoming: "M3 6l8 6-8 6V6zM13 6l8 6-8 6V6z",

  // a sprout
  birth: "M12 21v-9M12 12C12 8 9 6 5 6c0 4 3 6 7 6zM12 14c0-3 3-5 7-5 0 3-3 5-7 5z",

  // an hourglass
  decay: "M6 3h12M6 21h12M8 3v4l4 5 4-5V3M8 21v-4l4-5 4 5v4",

  // an eye that is shut
  avijja: "M2 10s4 6 10 6 10-6 10-6M4 15l-2 2M12 17v3M20 15l2 2",

  // stacked storage
  store: "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6",

  // three processes at different loads
  roots: "M5 21V10M12 21V3M19 21v-8",

  // the eight-spoked wheel
  magga: "M12 3a9 9 0 100 18 9 9 0 000-18zM12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4M12 9.6a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8",

  // a door with the way out marked
  exit: "M14 3H5v18h9M14 12h7M18 8l4 4-4 4",

  /* --- the micro board --- */

  // a cluster that always travels together
  kalapa:
    "M12 3.4a2 2 0 100 4 2 2 0 000-4M18.1 5.9a2 2 0 100 4 2 2 0 000-4M20.6 12a2 2 0 100 4 2 2 0 000-4M15.5 18.1a2 2 0 100 4 2 2 0 000-4M8.5 18.1a2 2 0 100 4 2 2 0 000-4M3.4 12a2 2 0 100 4 2 2 0 000-4M5.9 5.9a2 2 0 100 4 2 2 0 000-4M12 10a2 2 0 100 4 2 2 0 000-4",

  // one pulse of the clock
  citta: "M2 12h4l3-7 4 14 3-7h6",

  // a staged pipeline
  vithi: "M2 12h5M9 12h6M17 12h5M7 9l2 3-2 3M15 9l2 3-2 3",

  // the resting stream between processes
  bhavanga: "M2 12c2-4 4-4 6 0s4 4 6 0 4-4 6 0",

  // impulsion
  javana: "M13 2L4 14h6l-1 8 9-12h-6l1-8z",

  // the three sub-moments of a single mind-moment
  moment: "M4 20V9M4 9l4-5 4 5M12 20V9M12 9l4-5 4 5M20 20V9",

  /* --- shared --- */

  loop: "M4 9a8 8 0 1114 5M4 4v5h5",
  marks: "M4 7h16M4 12h10M4 17h6",
  report: "M6 3h9l4 4v14H6V3zM15 3v4h4M9 13h7M9 17h5",
  khandha: "M12 3l9 4.5-9 4.5-9-4.5L12 3zM3 12l9 4.5 9-4.5M3 16.5L12 21l9-4.5",
  senses: "M3 6h5M3 12h5M3 18h5M8 6c6 0 4 6 6 6M8 12h6M8 18c6 0 4-6 6-6M14 12h7",
  chain: "M9 13a4 4 0 005.7 0l2.6-2.6a4 4 0 10-5.7-5.7L10.1 6.2M15 11a4 4 0 00-5.7 0l-2.6 2.6a4 4 0 105.7 5.7l1.5-1.5",
  karma: "M12 3v4M12 17v4M3 12h4M17 12h4M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8",
  practice: "M12 4a8 8 0 100 16 8 8 0 000-16zM12 8v4l3 2",
  limits: "M12 3L2 21h20L12 3zM12 10v5M12 18h.01",
  glossary: "M4 4h7v16H4zM13 4h7v16h-7zM6.5 8h2M15.5 8h2",
  system: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6zM10 7h4M7 10v4M17 10v4M10 17h4",
};

/** Inline icon for HTML contexts. */
export function icon(name, cls = "") {
  const d = P[name];
  if (!d) return "";
  return `<svg class="ic ${cls}" viewBox="0 0 24 24" aria-hidden="true"
    fill="none" stroke="currentColor" stroke-width="1.6"
    stroke-linecap="round" stroke-linejoin="round"><path d="${d}"/></svg>`;
}

/** Icon as an SVG group, for placing inside a larger diagram. */
export function iconAt(name, cx, cy, size = 18, cls = "mx-icon") {
  const d = P[name];
  if (!d) return "";
  const s = size / 24;
  return `<g class="${cls}" transform="translate(${cx - size / 2},${cy - size / 2}) scale(${s})"
    fill="none" stroke-width="${1.6 / s}" stroke-linecap="round"
    stroke-linejoin="round"><path d="${d}"/></g>`;
}

export const ICON_NAMES = Object.keys(P);
