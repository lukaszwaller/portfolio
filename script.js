document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.getElementById("toggle");

  toggleSwitch.addEventListener("change", function () {
    setTheme(toggleSwitch.checked ? "dark" : "light");
  });

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      document.querySelector(".profile-pic").src = "assets/me-light.png";
    } else {
      document.querySelector(".profile-pic").src = "assets/me-dark.png";
    }
  }

  const currentTheme = localStorage.getItem("theme");

  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    toggleSwitch.checked = currentTheme === "dark";

    if (currentTheme === "dark") {
      document.querySelector(".profile-pic").src = "assets/me-light.png";
    } else {
      document.querySelector(".profile-pic").src = "assets/me-dark.png";
    }
  } else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    toggleSwitch.checked = prefersDark;
    setTheme(prefersDark ? "dark" : "light");
  }
});

