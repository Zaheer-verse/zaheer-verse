document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const toggle = document.getElementById("theme-toggle");
  const yearEl = document.getElementById("current-year");

  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const applyTheme = (theme) => {
    body.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  };

  const saved = localStorage.getItem("theme");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(saved || (systemDark ? "dark" : "light"));

  if (toggle) {
    toggle.addEventListener("click", () => {
      applyTheme(body.classList.contains("dark") ? "light" : "dark");
    });
  }

  const reveal = document.querySelector(".reveal-up");
  if (reveal) {
    requestAnimationFrame(() => reveal.classList.add("in-view"));
  }
});
