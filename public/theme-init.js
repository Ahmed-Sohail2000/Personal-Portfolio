// Runs before first paint. Sets the theme so there is no flash of the wrong
// palette. External (not inline) so the Content-Security-Policy can keep
// script-src 'self' with no 'unsafe-inline'.
(function () {
  try {
    var stored = localStorage.getItem("theme");
    document.documentElement.setAttribute(
      "data-theme",
      stored === "dark" ? "dark" : "light"
    );
  } catch {
    document.documentElement.setAttribute("data-theme", "light");
  }
})();
