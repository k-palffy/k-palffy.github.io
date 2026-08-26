document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a");

  links.forEach(function (link) {
    if (link.textContent.trim() === "Magyar") {
      link.addEventListener("click", function (event) {
        event.preventDefault();

        const path = window.location.pathname;

        if (path.includes("/en/")) {
          window.location.href = path.replace("/en/", "/hu/");
        } else {
          window.location.href = "/hu/index.html";
        }
      });
    }
  });
});
