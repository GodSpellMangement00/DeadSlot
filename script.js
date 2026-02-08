/* =========================
   THEME TOGGLE (DARK / LIGHT)
   ========================= */
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌙";
  }
});

/* =========================
   AUTO UPDATE YEAR
   ========================= */
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

/* =========================
   SCROLL REVEAL ANIMATION
   ========================= */
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* =========================
   PROJECT FILTER (OPTIONAL)
   ========================= */
const filterButtons = document.querySelectorAll(".filters button");
const projects = document.querySelectorAll(".project");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.textContent.toLowerCase();

    projects.forEach((project) => {
      if (filter === "all") {
        project.style.display = "block";
      } else {
        project.classList.contains(filter)
          ? (project.style.display = "block")
          : (project.style.display = "none");
      }
    });
  });
});

/* =========================
   COPY DISCORD ID ON CLICK
   ========================= */
const discordId = "1121062759971430510";
const discordElements = document.querySelectorAll("[data-copy-discord]");

discordElements.forEach((el) => {
  el.addEventListener("click", () => {
    navigator.clipboard.writeText(discordId);
    el.textContent = "Copied!";
    setTimeout(() => (el.textContent = "Copy Discord ID"), 1500);
  });
});
