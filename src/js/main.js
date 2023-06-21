document.querySelector(".menu").addEventListener("click", function () {
  var menuItems = document.querySelector(".menu-items");
  menuItems.style.display =
    menuItems.style.display === "block" ? "none" : "block";
});
