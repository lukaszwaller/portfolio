document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.getElementById("toggle");
  const profileAvif = document.getElementById("profile-avif");
  const profileWebp = document.getElementById("profile-webp");
  const profileImg = document.querySelector(".profile-pic");

  toggleSwitch.addEventListener("change", function () {
    setTheme(toggleSwitch.checked ? "dark" : "light");
  });

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      profileAvif.srcset = "assets/avif/me-light.avif";
      profileWebp.srcset = "assets/webp/me-light.webp";
      profileImg.src = "assets/png/me-light.png";
    } else {
      profileAvif.srcset = "assets/avif/me-dark.avif";
      profileWebp.srcset = "assets/avif/me-dark.webp";
      profileImg.src = "assets/png/me-dark.png";
    }
  }

  const currentTheme = localStorage.getItem("theme");

  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    toggleSwitch.checked = currentTheme === "dark";
    setTheme(currentTheme);
  } else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    toggleSwitch.checked = prefersDark;
    setTheme(prefersDark ? "dark" : "light");
  }
});
