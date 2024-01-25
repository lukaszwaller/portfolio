document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.getElementById("toggle");

  toggleSwitch.addEventListener("change", function () {
    setTheme(toggleSwitch.checked ? "dark" : "light");
  });

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }

  const currentTheme = localStorage.getItem("theme");

  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    toggleSwitch.checked = currentTheme === "dark";
  } else {
    toggleSwitch.checked = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(toggleSwitch.checked ? "dark" : "light");
  }
});
