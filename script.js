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

    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      themeColorMeta.setAttribute(
        "content",
        theme === "dark" ? "#1a1a1a" : "#ffffff"
      );
    }

    const pictureTheme = theme === "dark" ? "light" : "dark";

    if (profileAvif) {
      profileAvif.srcset = `assets/avif/me-${pictureTheme}.avif`;
    }
    if (profileWebp) {
      profileWebp.srcset = `assets/webp/me-${pictureTheme}.webp`;
    }
    if (profileImg) {
      profileImg.srcset = `assets/avatars/me-${pictureTheme}.png`;
    }
  }

  const currentTheme = localStorage.getItem("theme");

  if (currentTheme) {
    toggleSwitch.checked = currentTheme === "dark";
    setTheme(currentTheme);
  } else {
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    toggleSwitch.checked = prefersDark;
    setTheme(prefersDark ? "dark" : "light");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const parts = [
      "many", "Ger", "\n","gart", "Stutt", "\n", "60", "Str. ", "berger ", "Nürn", "\n", "Zwaller", "Lukas "
  ]
  const address = parts.reverse().join("");

  const addressElement = document.getElementById("address");
  if (addressElement) {
    addressElement.textContent = address;
  }
});
