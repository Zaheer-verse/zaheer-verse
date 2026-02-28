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

  const sections = Array.from(document.querySelectorAll("main .section[id]"));
  const navLinks = Array.from(document.querySelectorAll(".nav-links a[href^='#']"));
  const navRight = document.querySelector(".nav-right");
  const menuToggle = document.querySelector(".menu-toggle");

  if (menuToggle && navRight) {
    const closeMenu = () => {
      navRight.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    };

    menuToggle.addEventListener("click", () => {
      const open = navRight.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (event) => {
      if (!navRight.contains(event.target)) closeMenu();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    const mobileMq = window.matchMedia("(max-width: 760px)");
    const syncMenuState = () => {
      if (!mobileMq.matches) closeMenu();
    };
    if (mobileMq.addEventListener) {
      mobileMq.addEventListener("change", syncMenuState);
    } else {
      mobileMq.addListener(syncMenuState);
    }
    syncMenuState();
  }

  const setActiveLink = () => {
    const pos = window.scrollY + 140;
    sections.forEach((section) => {
      const link = navLinks.find((a) => a.getAttribute("href") === `#${section.id}`);
      if (!link) return;
      const inRange = pos >= section.offsetTop && pos < section.offsetTop + section.offsetHeight;
      if (inRange) {
        navLinks.forEach((a) => a.classList.remove("is-active"));
        link.classList.add("is-active");
      }
    });
  };

  setActiveLink();
  window.addEventListener("scroll", setActiveLink, { passive: true });

  const revealTargets = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealTargets.forEach((node) => observer.observe(node));
  } else {
    revealTargets.forEach((node) => node.classList.add("in-view"));
  }
});
