document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a");

  links.forEach(function (link) {
    if (link.textContent.trim() === "Magyar") {
      link.addEventListener("click", function (event) {
        event.preventDefault();

        const path = window.location.pathname;
        const page = path.substring(path.lastIndexOf("/") + 1) || "index.html";

        window.location.href = "/hu/" + page;
      });
    }
  });
});
