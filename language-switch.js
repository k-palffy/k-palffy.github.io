document.addEventListener("DOMContentLoaded", function () {
  const target = "/hu" + window.location.pathname;
  document.querySelectorAll("a.nav-link").forEach(function (link) {
    if (link.textContent.trim() !== "Magyar") return;
    link.setAttribute("href", target);
    link.removeAttribute("target");
    link.addEventListener(
      "click",
      function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        fetch(target, { method: "HEAD" })
          .then(function (r) {
            if (r.ok) {
              window.location.assign(target);
            } else {
              alert("Ez az oldal nem érhető el magyarul.");
            }
          })
          .catch(function () {
            alert("Ez az oldal nem érhető el magyarul.");
          });
      },
      true
    );
  });
});
