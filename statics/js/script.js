var app = document.getElementById("typewriter");

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString("Developer")
  .pauseFor(2500)
  .deleteAll()
  .typeString("Freelancer")
  .pauseFor(2500)
  .start();

(() => {
  "use strict";

  // const storedTheme = localStorage.getItem("theme");
  const storedTheme = "bs-light";

  const getPreferredTheme = () => {
    if (storedTheme) {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: bs-dark)").matches
      ? "bs-dark"
      : "bs-light";
  };

  const setThemeIcon = function (theme) {
    if (theme === "bs-light") {
      document
        .getElementById("my_logo")
        .setAttribute("src", "../../statics/img/ST_1.2.1.png");
    } else if (theme === "bs-dark") {
      document
        .getElementById("my_logo")
        .setAttribute("src", "../../statics/img/ST_1.2.2.png");
    }
  };

  const setTheme = function (theme) {
    if (
      theme === "auto" &&
      window.matchMedia("(prefers-color-scheme: bs-dark)").matches
    ) {
      document.documentElement.setAttribute("data-bs-theme", "bs-dark");
      setThemeIcon(theme);
    } else {
      document.documentElement.setAttribute("data-bs-theme", theme);
      setThemeIcon(theme);
    }
  };

  setTheme(getPreferredTheme());

  const showActiveTheme = (theme) => {
    const activeThemeIcon = document.querySelector(".theme-icon-active");
    const btnToActive = document.querySelector(
      `[data-bs-theme-value="${theme}"]`
    );

    const svgOfActiveBtn = btnToActive
      .querySelector("div i")
      .getAttribute("class");

    document.querySelectorAll("[data-bs-theme-value]").forEach((element) => {
      element.classList.remove("active");
    });

    btnToActive.classList.add("active");
    activeThemeIcon.firstElementChild.setAttribute("class", svgOfActiveBtn);
  };

  window
    .matchMedia("(prefers-color-scheme: bs-dark)")
    .addEventListener("change", () => {
      if (storedTheme !== "bs-light" || storedTheme !== "bs-dark") {
        setTheme(getPreferredTheme());
      }
    });

  window.addEventListener("DOMContentLoaded", () => {
    showActiveTheme(getPreferredTheme());

    document.querySelectorAll("[data-bs-theme-value]").forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const theme = toggle.getAttribute("data-bs-theme-value");
        // localStorage.setItem("theme", theme);
        setTheme(theme);
        showActiveTheme(theme);
      });
    });
  });

  
})();
