var imageLinks = document.querySelectorAll(".image-link");
var fixedDiv = document.getElementById("image-name");

imageLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    var name = link.dataset.name;
    fixedDiv.textContent = name;
    fixedDiv.style.display = "block";
  });

  link.addEventListener("mouseout", () => {
    fixedDiv.style.display = "none";
  });
});
