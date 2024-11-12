(() => {
  // <stdin>
  var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
  var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
  var themeToggleBtn = document.getElementById("theme-toggle");
  if (themeToggleDarkIcon)
    themeToggleDarkIcon.style.display = "none";
  if (themeToggleLightIcon)
    themeToggleLightIcon.style.display = "none";
  if (themeToggleBtn)
    themeToggleBtn.style.display = "none";
  document.documentElement.classList.remove("dark");
  localStorage.setItem("color-theme", "light");
  if (themeToggleBtn) {
    themeToggleBtn.removeEventListener("click", function() {
    });
  }
})();
