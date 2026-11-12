// Light and dark switch: the button names the theme it switches to.
const root = document.documentElement;
const themeBtn = document.getElementById("theme");
const label = () => themeBtn.setAttribute("aria-label", root.getAttribute("data-theme") === "dark" ? "Switch to light theme" : "Switch to dark theme");
label();
themeBtn.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try { localStorage.setItem("kestrine-theme", next); } catch (e) {}
  label();
});

// Close the mobile menu after a link is picked, on a click outside it, or on Escape.
const menu = document.querySelector(".menu");
menu.addEventListener("click", (e) => { if (e.target.closest("a")) menu.open = false; });
document.addEventListener("click", (e) => { if (menu.open && !menu.contains(e.target)) menu.open = false; });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && menu.open) { menu.open = false; menu.querySelector("summary").focus(); } });

// Highlight the workflow being read in the sticky index.
const tocLinks = document.querySelectorAll(".toc a");
const tocIo = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (!e.isIntersecting) continue;
    tocLinks.forEach((a) => a.setAttribute("aria-current", a.hash === `#${e.target.id}` ? "true" : "false"));
  }
}, { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll(".entry").forEach((el) => tocIo.observe(el));

// Demo form: no backend, so confirm in place.
const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const note = document.getElementById("form-note");
  const email = form.elements.email;
  if (!email.checkValidity()) {
    note.textContent = "Add your work email and we'll write back.";
    note.className = "form-note";
    email.focus();
    return;
  }
  note.textContent = "Got it. Look for an email from our credit team within a day.";
  note.className = "form-note ok";
  form.reset();
});

// Illos: each illustration loops while it is on screen and pauses when it is not.
// Under reduced motion it holds its first frame and this does nothing.
if (!matchMedia("(prefers-reduced-motion: reduce)").matches)
  for (const el of document.querySelectorAll("[data-illos]")) {
    el.style.setProperty("--illos-play", "paused");
    new IntersectionObserver((entries) => {
      for (const e of entries) el.style.setProperty("--illos-play", e.isIntersecting ? "running" : "paused");
    }).observe(el);
  }
