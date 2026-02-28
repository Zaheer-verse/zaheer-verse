document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeToggle = document.getElementById("theme-toggle");
  const splash = document.getElementById("splash");
  const yearEl = document.getElementById("current-year");

  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const applyTheme = (theme) => {
    body.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  };

  const savedTheme = localStorage.getItem("theme");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(savedTheme || (systemDark ? "dark" : "light"));

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      themeToggle.classList.add("is-switching");
      const nextTheme = body.classList.contains("dark") ? "light" : "dark";
      applyTheme(nextTheme);
      setTimeout(() => themeToggle.classList.remove("is-switching"), 220);
    });
  }

  if (splash) {
    setTimeout(() => {
      splash.classList.add("hide");
      setTimeout(() => splash.remove(), 900);
    }, 1450);
  }

  const roles = [
    "Computer Science Student.",
    "IoT Developer.",
    "Content Writer.",
    "Database Administrator.",
    "Frontend Web Developer."
  ];

  const dynamicText = document.getElementById("dynamic-text");
  if (dynamicText) {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const typeRole = () => {
      const role = roles[roleIndex];
      if (!deleting) {
        charIndex += 1;
        dynamicText.textContent = role.slice(0, charIndex);
      } else {
        charIndex -= 1;
        dynamicText.textContent = role.slice(0, charIndex);
      }

      if (!deleting && charIndex === role.length) {
        deleting = true;
        setTimeout(typeRole, 1200);
        return;
      }

      if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }

      setTimeout(typeRole, deleting ? 36 : 75);
    };

    typeRole();
  }

  const chips = document.querySelectorAll(".chip");
  const skillCards = document.querySelectorAll(".skill-card");
  const skillsGrid = document.querySelector(".skills-grid");
  const navRight = document.querySelector(".nav-right");
  const menuToggle = document.querySelector(".menu-toggle");

  skillCards.forEach((card, idx) => {
    card.style.setProperty("--stagger", String(idx % 9));
  });

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      if (skillsGrid) skillsGrid.classList.add("in-view");
      chips.forEach((btn) => {
        btn.classList.remove("active");
        btn.setAttribute("aria-selected", "false");
      });

      chip.classList.add("active");
      chip.setAttribute("aria-selected", "true");

      const filter = chip.dataset.filter;
      let visibleIdx = 0;
      skillCards.forEach((card) => {
        const show = filter === "all" || card.dataset.cat === filter;
        card.style.display = show ? "" : "none";
        if (show) {
          card.style.setProperty("--stagger", String(visibleIdx % 9));
          card.classList.remove("skill-bump");
          requestAnimationFrame(() => card.classList.add("skill-bump"));
          setTimeout(() => card.classList.remove("skill-bump"), 420);
          visibleIdx += 1;
        }
      });
    });
  });

  const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
  const observedSections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (menuToggle && navRight) {
    const closeMenu = () => {
      navRight.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    };

    menuToggle.addEventListener("click", () => {
      const open = navRight.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    navLinks.forEach((link) => link.addEventListener("click", closeMenu));

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
    const scrollMark = window.scrollY + 140;
    observedSections.forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const link = navLinks.find((a) => a.getAttribute("href") === `#${section.id}`);
      if (!link) return;
      if (scrollMark >= top && scrollMark < bottom) {
        navLinks.forEach((a) => a.classList.remove("is-active"));
        link.classList.add("is-active");
      }
    });
  };

  setActiveLink();
  window.addEventListener("scroll", setActiveLink, { passive: true });

  const revealTargets = document.querySelectorAll("[data-reveal], .skills-grid, .skill-card, .project-card, .contact-card");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );

    revealTargets.forEach((target) => observer.observe(target));
  } else {
    revealTargets.forEach((target) => target.classList.add("in-view"));
  }

  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  if (form && status) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      status.style.color = "inherit";
      status.textContent = "Sending...";

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" }
        });

        if (response.ok) {
          status.style.color = "#11a65f";
          status.textContent = "Message sent successfully!";
          form.reset();
        } else {
          status.style.color = "#db4343";
          status.textContent = "Failed to send message. Try again.";
        }
      } catch (error) {
        status.style.color = "#db4343";
        status.textContent = "Failed to send message. Try again.";
      }
    });
  }
});
