let navMenu = document.querySelector(".nav-menu");
let navMenuBtn = document.querySelector(".nav-menu-btn");

navMenuBtn.addEventListener("click", () => {
  if (navMenu.style.display === "flex") {
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "flex";
  }
});
