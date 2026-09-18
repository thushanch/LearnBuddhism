/* ==========================================================================
   app.js — shell, hash router, theme, scroll reveal
   ========================================================================== */

import { CHAPTERS, byId, grouped } from "./chapters/index.js";
import { renderChapter, esc } from "./render.js";
import { initDiagrams } from "./diagrams.js";
import { machineView, wireMachine } from "./machine.js";

const main = document.getElementById("main");
const railLinks = document.getElementById("railLinks");
const railProg = document.getElementById("railProg");
const app = document.getElementById("app");

/* ---------- theme ---------- */

const themeBtn = document.getElementById("themeToggle");
const themeLabel = document.getElementById("themeLabel");

function paintTheme() {
  themeLabel.textContent =
    document.documentElement.dataset.theme === "source" ? "Source" : "Rendered";
}

themeBtn.addEventListener("click", () => {
  const next =
    document.documentElement.dataset.theme === "source" ? "rendered" : "source";
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem("lb-theme", next);
  } catch (e) {
    /* storage blocked — the theme still applies for this session */
  }
  paintTheme();
});
paintTheme();

/* ---------- rail ---------- */

function buildRail() {
  const boardLink = `
    <div class="rail__group">The board</div>
    <a class="rail__link" href="#/" data-id="__home">
      <span class="rail__num">&#9632;</span>
      <span>The whole machine</span>
    </a>`;

  railLinks.innerHTML = boardLink + grouped()
    .map(
      (g) => `
      <div class="rail__group">${esc(g.name)}</div>
      ${g.items
        .map(
          (c) => `
        <a class="rail__link" href="#/${esc(c.id)}" data-id="${esc(c.id)}">
          <span class="rail__num">${esc(c.num)}</span>
          <span>${esc(c.title)}</span>
        </a>`
        )
        .join("")}`
    )
    .join("");
  railProg.textContent = `${CHAPTERS.length} chapters`;
}

function markCurrent(id) {
  railLinks.querySelectorAll(".rail__link").forEach((a) => {
    if (a.dataset.id === id) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
}

/* ---------- mobile rail ---------- */

const railToggle = document.getElementById("railToggle");
const scrim = document.getElementById("scrim");

function setRail(open) {
  app.classList.toggle("is-rail-open", open);
  railToggle.setAttribute("aria-expanded", String(open));
}
railToggle.addEventListener("click", () =>
  setRail(!app.classList.contains("is-rail-open"))
);
scrim.addEventListener("click", () => setRail(false));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setRail(false);
});

/* ---------- home ---------- */

function homeView() {
  return `
    <section class="home">
      <header class="home__head">
        <p class="home__kicker reveal">a systems reading of early buddhism</p>
        <h1 class="home__h1 reveal">The whole thing is one machine.</h1>
        <p class="home__sub reveal">
          Not fifteen separate doctrines — one process, with six inputs, a short
          pipeline, a loop that closes on itself, and exactly one branch out.
          Here it is on a single board. Click any block to see what it is, then
          read the chapter behind it.
        </p>
      </header>

      ${machineView()}

      <div class="home__foot reveal">
        <a class="home__cta" href="#/start">Start reading <span aria-hidden="true">&rarr;</span></a>
        <p class="home__note">
          Fifteen chapters, eleven diagrams, forty terms mapped. Chapter 13 is a
          full audit of everywhere this computer metaphor misleads — read that
          one before you repeat any of the rest.
        </p>
      </div>
    </section>`;
}

/* ---------- reveal on scroll ---------- */

let io;
function observeReveals(root) {
  if (io) io.disconnect();
  const nodes = [...root.querySelectorAll(".reveal")];

  if (!("IntersectionObserver" in window)) {
    nodes.forEach((n) => n.classList.add("is-in"));
    return;
  }

  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
  );

  nodes.forEach((n) => io.observe(n));

  // Anything already on screen at load should not wait for a scroll event.
  requestAnimationFrame(() => {
    nodes.forEach((n) => {
      if (n.getBoundingClientRect().top < window.innerHeight) n.classList.add("is-in");
    });
  });
}

/* ---------- router ---------- */

function route() {
  const hash = location.hash.replace(/^#\/?/, "");
  const id = hash || null;

  if (!id) {
    main.innerHTML = homeView();
    markCurrent("__home");
    document.title = "Escaping the System — Buddhism read as an engineering report";
  } else {
    const ch = byId[id];
    if (!ch) {
      location.replace("#/");
      return;
    }
    const i = CHAPTERS.indexOf(ch);
    main.innerHTML = renderChapter(ch, CHAPTERS[i - 1], CHAPTERS[i + 1]);
    markCurrent(id);
    document.title = `${ch.num} · ${ch.title} — Escaping the System`;
  }

  initDiagrams(main);
  const board = main.querySelector("[data-machine]");
  if (board) wireMachine(board);
  observeReveals(main);
  setRail(false);
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  main.focus({ preventScroll: true });
}

/* ---------- keyboard chapter paging ---------- */

document.addEventListener("keydown", (e) => {
  if (e.target.matches("input, textarea, select")) return;
  if (e.metaKey || e.ctrlKey || e.altKey) return;

  const hash = location.hash.replace(/^#\/?/, "");
  const i = CHAPTERS.findIndex((c) => c.id === hash);

  if (e.key === "ArrowRight" && i < CHAPTERS.length - 1) {
    location.hash = `#/${CHAPTERS[i + 1].id}`;
  } else if (e.key === "ArrowLeft" && i > 0) {
    location.hash = `#/${CHAPTERS[i - 1].id}`;
  }
});

/* ---------- go ---------- */

buildRail();
window.addEventListener("hashchange", route);
route();
