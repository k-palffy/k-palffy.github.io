document.addEventListener("DOMContentLoaded", function () {
  const target = window.location.pathname.replace(/^\/hu/, "") || "/";
  document.querySelectorAll("a.nav-link").forEach(function (link) {
    if (link.textContent.trim() !== "English") return;
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
              alert("This page is not available in English.");
            }
          })
          .catch(function () {
            alert("This page is not available in English.");
          });
      },
      true
    );
  });
});
