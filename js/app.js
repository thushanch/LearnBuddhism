/* ==========================================================================
   app.js — shell, hash router, theme, scroll reveal
   ========================================================================== */

import { CHAPTERS, byId, grouped } from "./chapters/index.js";
import { renderChapter, esc } from "./render.js";
import { initDiagrams } from "./diagrams.js";
import { machineView, wireMachine } from "./machine.js";
import { microView, wireMicro } from "./micro.js";
import { cittasView, wireCittas } from "./cittas.js";
import { kammaView, wireKamma } from "./kamma.js";
import { pathView, wirePath } from "./path.js";

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
    </a>
    <a class="rail__link" href="#/path-board" data-id="path-board">
      <span class="rail__num">&#9642;</span>
      <span>මාර්ගය · the path</span>
    </a>
    <a class="rail__link" href="#/micro" data-id="micro">
      <span class="rail__num">&#9642;</span>
      <span>Underneath the board</span>
    </a>
    <a class="rail__link" href="#/cittas-board" data-id="cittas-board">
      <span class="rail__num">&#9642;</span>
      <span>සිත් වර්ග · the eighty-nine</span>
    </a>
    <a class="rail__link" href="#/kamma-board" data-id="kamma-board">
      <span class="rail__num">&#9642;</span>
      <span>පින් · පව් · විපාක · මරණය</span>
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
          Not a set of separate doctrines — one process, with six ways in, a short
          chain of steps, a loop that closes on itself, and exactly one way out.
          Here it is on a single board.
        </p>
      </header>

      <div class="howto reveal">
        <div class="howto__head">
          <span class="howto__t">How to read this board</span>
          <span class="howto__si">මෙය කියවන ආකාරය</span>
        </div>
        <ol class="howto__steps">
          <li>
            <b>Start at the left.</b> Six ways the world gets in — eye, ear, nose,
            tongue, body, and mind. Mind is one of the six, not the boss of them.
          </li>
          <li>
            <b>Follow the blue line.</b> That is one moment, travelling. It goes
            right across the top, turns down, comes back along the bottom, and
            arrives where it started. Nothing pushes it. Each turn makes the fuel
            for the next.
          </li>
          <li>
            <b>Stop at the dashed green box.</b> <i>The gap.</i> Every other joint
            on the board is welded shut. This is the only one with any give in it,
            and the whole teaching is about that one gap.
          </li>
          <li>
            <b>Then press a button.</b> Run a scenario and watch one ordinary
            moment take the whole trip. Then attach the observer and run the same
            one again — it stops at the gap instead of going round.
          </li>
        </ol>
        <p class="howto__foot">
          Every block is clickable, and each one gives you the Pali, the Sinhala,
          plain English, and a few everyday examples.
        </p>
      </div>

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

function pathPage() {
  return `
    <section class="microwrap">
      <header class="home__head">
        <p class="home__kicker reveal">what he said he taught</p>
        <h1 class="home__h1 reveal">Fourteen things, arranged seven ways.</h1>
        <p class="home__sub reveal">
          Asked near the end of his life what should be preserved, the Buddha named
          thirty-seven things in seven sets. Count the distinct qualities in them and
          you get fourteen — the same handful, reused. Below that: the order the path
          is actually walked in, and the ten-flag register that says what changes.
        </p>
      </header>

      ${pathView()}

      <div class="home__foot reveal">
        <a class="home__cta" href="#/path">Read the chapter on the eightfold path <span aria-hidden="true">&rarr;</span></a>
        <a class="machine__plink" href="#/practice">or the one on meditation &rarr;</a>
        <p class="home__note">
          The thirty-seven and the gradual training are sutta material. The reduction
          to fourteen is commentarial — and it is arithmetic, so the board computes it
          rather than asserting it.
        </p>
      </div>
    </section>`;
}

function kammaPage() {
  return `
    <section class="microwrap">
      <header class="home__head">
        <p class="home__kicker reveal">the everyday frame</p>
        <h1 class="home__h1 reveal">පින්, පව්, විපාක, මරණය.</h1>
        <p class="home__sub reveal">
          Merit, demerit, what comes of them, and what happens at the end. This is
          the layer most people actually grew up with, and it is almost always
          taught as a moral ledger with someone keeping score. It is not one — and
          the machinery underneath is more interesting than the ledger.
        </p>
      </header>

      ${kammaView()}

      <div class="home__foot reveal">
        <a class="home__cta" href="#/karma">Read the chapter on kamma <span aria-hidden="true">&rarr;</span></a>
        <a class="machine__plink" href="#/micro">or the series this all runs on &rarr;</a>
        <p class="home__note">
          The two lists at the top are sutta material. The classifications and the
          death process are Abhidhamma and commentary, and the board says so where
          the line falls.
        </p>
      </div>
    </section>`;
}

function cittasPage() {
  return `
    <section class="microwrap">
      <header class="home__head">
        <p class="home__kicker reveal">the fine grain · abhidhamma</p>
        <h1 class="home__h1 reveal">Eighty-nine kinds of mind.</h1>
        <p class="home__sub reveal">
          The Abhidhamma sorts consciousness into eighty-nine types, or a hundred
          and twenty-one counted the long way. It sounds like something you would
          have to memorise. It is not — the types are generated by a handful of
          fields, most of them a straight yes or no, and the count falls out of
          the fields. Set the switches below and watch a citta get named.
        </p>
      </header>

      ${cittasView()}

      <div class="home__foot reveal">
        <a class="home__cta" href="#/micro">Where these actually run <span aria-hidden="true">&rarr;</span></a>
        <p class="home__note">
          Abhidhamma and commentary, not the suttas — the same caveat the micro
          board carries, for the same reason.
        </p>
      </div>
    </section>`;
}

function microPage() {
  return `
    <section class="microwrap">
      <header class="home__head">
        <p class="home__kicker reveal">the fine-grained model · abhidhamma</p>
        <h1 class="home__h1 reveal">Underneath the board.</h1>
        <p class="home__sub reveal">
          Zoom in on any single block of the main board and it turns out to be a
          series of its own. Here is the smallest unit of matter, the smallest unit
          of mind, and the seventeen moments that one flicker of seeing actually is —
          with the same branch point showing up again, at a much smaller scale.
        </p>
      </header>

      ${microView()}

      <div class="home__foot reveal">
        <a class="home__cta" href="#/">Back to the main board <span aria-hidden="true">&rarr;</span></a>
        <a class="machine__plink" href="#/cittas-board">or the eighty-nine kinds of mind &rarr;</a>
        <p class="home__note">
          This layer is Theravāda Abhidhamma and its commentaries, not the suttas.
          The board says so itself, at the bottom.
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
  } else if (id === "path-board") {
    main.innerHTML = pathPage();
    markCurrent("path-board");
    document.title = "මාර්ගය · the path — Escaping the System";
  } else if (id === "kamma-board") {
    main.innerHTML = kammaPage();
    markCurrent("kamma-board");
    document.title = "පින් · පව් · විපාක · මරණය — Escaping the System";
  } else if (id === "cittas-board") {
    main.innerHTML = cittasPage();
    markCurrent("cittas-board");
    document.title = "සිත් වර්ග · the eighty-nine — Escaping the System";
  } else if (id === "micro") {
    main.innerHTML = microPage();
    markCurrent("micro");
    document.title = "Underneath the board — Escaping the System";
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
  const micro = main.querySelector("[data-micro]");
  if (micro) wireMicro(micro);
  const cittas = main.querySelector("[data-cittas]");
  if (cittas) wireCittas(cittas);
  const kamma = main.querySelector("[data-kamma]");
  if (kamma) wireKamma(kamma);
  const pathb = main.querySelector("[data-path]");
  if (pathb) wirePath(pathb);
  observeReveals(main);
  setRail(false);
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  main.focus({ preventScroll: true });
}

/* ---------- keyboard chapter paging ---------- */

// Bracket keys, or alt+arrow. Bare arrows are deliberately left alone: on a
// long page they are how people scroll, and hijacking them makes the page
// lurch a chapter at a time.
document.addEventListener("keydown", (e) => {
  if (e.target instanceof Element && e.target.closest("input, textarea, select")) return;
  if (e.metaKey || e.ctrlKey) return;

  const back = e.key === "[" || (e.altKey && e.key === "ArrowLeft");
  const fwd = e.key === "]" || (e.altKey && e.key === "ArrowRight");
  if (!back && !fwd) return;

  const hash = location.hash.replace(/^#\/?/, "");
  const i = CHAPTERS.findIndex((c) => c.id === hash);
  if (i === -1) return;

  e.preventDefault();
  if (fwd && i < CHAPTERS.length - 1) location.hash = "#/" + CHAPTERS[i + 1].id;
  else if (back && i > 0) location.hash = "#/" + CHAPTERS[i - 1].id;
});

/* ---------- go ---------- */

buildRail();
window.addEventListener("hashchange", route);
route();
