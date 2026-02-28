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
      toggle.classList.add("is-switching");
      applyTheme(body.classList.contains("dark") ? "light" : "dark");
      setTimeout(() => toggle.classList.remove("is-switching"), 220);
    });
  }

  document.querySelectorAll("nav.toc a, .btn[href^='#']").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const id = a.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 24, behavior: "smooth" });
    });
  });

  const tocLinks = Array.from(document.querySelectorAll(".toc a"));
  const sections = tocLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const setActive = () => {
    const mark = window.scrollY + 140;
    sections.forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const link = tocLinks.find((l) => l.getAttribute("href") === `#${section.id}`);
      if (!link) return;
      if (mark >= top && mark < bottom) {
        tocLinks.forEach((l) => l.classList.remove("is-active"));
        link.classList.add("is-active");
      }
    });
  };

  setActive();
  window.addEventListener("scroll", setActive, { passive: true });

  const revealTargets = document.querySelectorAll("main section");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealTargets.forEach((node) => {
      node.classList.add("reveal-up");
      observer.observe(node);
    });
  } else {
    revealTargets.forEach((node) => node.classList.add("in-view"));
  }

  document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "p" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      window.print();
    }
  });
});
