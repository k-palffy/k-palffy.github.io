document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a");

  links.forEach(function (link) {
    if (link.textContent.trim() === "English") {
      link.addEventListener("click", function (event) {
        event.preventDefault();

        const path = window.location.pathname;

        if (path.includes("/hu/")) {
          window.location.href = path.replace("/hu/", "/en/");
        } else {
          window.location.href = "/en/index.html";
        }
      });
    }
  });
});
