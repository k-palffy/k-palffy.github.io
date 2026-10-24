document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a").forEach(function (link) {
    if (link.textContent.trim() === "English") {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const target = window.location.pathname.replace(/^\/hu/, "") || "/";
        fetch(target, { method: "HEAD" })
          .then(function (response) {
            if (response.ok) {
              window.location.href = target;
            } else {
              alert("This page is not available in English.");
            }
          })
          .catch(function () {
            alert("This page is not available in English.");
          });
      });
    }
  });
});
