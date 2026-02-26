/* ==========================================================================
   Theme toggle override (Light/Dark/Pip-Boy)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  const THEMES = ["light", "pipboy"];
  const htmlEl = document.documentElement;
  const themeIcon = document.getElementById("theme-icon");
  const themeToggle = document.getElementById("theme-toggle");

  const setIcon = function (mode) {
    if (!themeIcon) {
      return;
    }
    themeIcon.classList.remove("fa-sun", "fa-moon", "fa-terminal");
    if (mode === "pipboy") {
      themeIcon.classList.add("fa-terminal");
    } else {
      themeIcon.classList.add("fa-sun");
    }
  };

  const applyTheme = function (theme) {
    if (theme === "pipboy") {
      htmlEl.setAttribute("data-theme", "pipboy");
    } else {
      htmlEl.removeAttribute("data-theme");
    }
    setIcon(theme);
  };

  const getInitialTheme = function () {
    const params = new URLSearchParams(window.location.search);
    const forced = params.get("theme");
    if (THEMES.includes(forced)) {
      localStorage.setItem("theme", forced);
      return forced;
    }

    const stored = localStorage.getItem("theme");
    if (THEMES.includes(stored)) {
      return stored;
    }

    return "light";
  };

  const getCurrentTheme = function () {
    return htmlEl.getAttribute("data-theme") === "pipboy" ? "pipboy" : "light";
  };

  const toggleTheme = function () {
    const currentTheme = getCurrentTheme();
    const currentIndex = THEMES.indexOf(currentTheme);
    const nextTheme = THEMES[(currentIndex + 1) % THEMES.length];
    localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
  };

  const updatePipboyAge = function () {
    const stats = document.querySelector(".author__stats");
    const ageEl = document.getElementById("pipboy-age");
    if (!stats || !ageEl) {
      return;
    }
    const dobStr = stats.getAttribute("data-dob");
    if (!dobStr) {
      return;
    }
    const dob = new Date(dobStr);
    if (Number.isNaN(dob.getTime())) {
      return;
    }
    const now = new Date();
    let age = now.getFullYear() - dob.getFullYear();
    const monthDiff = now.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < dob.getDate())) {
      age -= 1;
    }
    ageEl.textContent = age.toString();
  };

  applyTheme(getInitialTheme());
  updatePipboyAge();

  if (themeToggle) {
    themeToggle.addEventListener("click", function (event) {
      event.preventDefault();
      toggleTheme();
    });
  }
});
