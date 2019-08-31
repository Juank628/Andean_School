let navMenu = document.querySelector(".nav-menu");
let navMenuBtn = document.querySelector(".nav-menu-btn");

navMenuBtn.addEventListener("click", () => {
  if (navMenu.className === "nav-menu nav-menu-show") {
    navMenu.className = "nav-menu nav-menu-hidden";
  } else {
    navMenu.className = "nav-menu nav-menu-show";
  }
});
