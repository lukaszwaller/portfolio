document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.getElementById("toggle");

  toggleSwitch.addEventListener("change", function () {
    if (toggleSwitch.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  });

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme("dark");
    toggleSwitch.checked = true;
  } else {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);

      if (currentTheme === "dark") {
        toggleSwitch.checked = true;
      }
    } else {
      setTheme("light");
    }
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }
});
