document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a").forEach(function (link) {
    if (link.textContent.trim() === "Magyar") {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const target = "/hu" + window.location.pathname;
        fetch(target, { method: "HEAD" })
          .then(function (response) {
            if (response.ok) {
              window.location.href = target;
            } else {
              alert("Ez az oldal nem érhető el magyarul.");
            }
          })
          .catch(function () {
            alert("Ez az oldal nem érhető el magyarul.");
          });
      });
    }
  });
});
