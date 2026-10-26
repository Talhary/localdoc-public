// Theme preference: "system" (default), "light" or "dark". Stored per browser; page works without storage.
(function () {
  var KEY = "localcast-theme";

  function read() {
    try { return localStorage.getItem(KEY) || "system"; } catch (e) { return "system"; }
  }

  function apply(mode) {
    if (mode === "light" || mode === "dark") document.documentElement.setAttribute("data-theme", mode);
    else document.documentElement.removeAttribute("data-theme");
    var buttons = document.querySelectorAll(".theme-switch button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("aria-pressed", String(buttons[i].dataset.mode === mode));
    }
  }

  // Applied immediately (script is in <head>) to avoid a flash of the wrong theme.
  apply(read());

  document.addEventListener("DOMContentLoaded", function () {
    apply(read());
    document.querySelectorAll(".theme-switch button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var mode = btn.dataset.mode;
        try { localStorage.setItem(KEY, mode); } catch (e) {}
        apply(mode);
      });
    });
  });
})();
