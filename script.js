document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.getElementById("toggle");

  toggleSwitch.addEventListener("change", function () {
    setTheme(toggleSwitch.checked ? "dark" : "light");
  });

  const currentTheme = localStorage.getItem("theme");

  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark") {
      toggleSwitch.checked = true;
    }
  } else {
    toggleSwitch.checked = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }
});
