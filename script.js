let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelectorAll(".dark-mode-toggle");
const navbarLinks = document.querySelector(".navbar-links");
const links = navbarLinks.querySelectorAll(".link");

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
  enableDarkMode();
} else {
  disableDarkMode();
}

darkModeToggle.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    const checkbox = document.getElementById("check");
    if (checkbox.checked) {
      checkbox.checked = !checkbox.checked;
    }
  });
});
