const Button = document.querySelector(".nav-button");
const NavMenu = document.querySelector(".nav-links");

Button.addEventListener("click", () => {
    NavMenu.classList.toggle("nav-links-toggle")
});