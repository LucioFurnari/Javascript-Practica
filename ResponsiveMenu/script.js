const Button = document.querySelector(".nav-button");
const NavMenu = document.querySelector(".nav-links");

const Img = document.querySelector(".img-gallery img")

const Images = [
    {
        url:"images/image-1.jpg"
    },
    {
        url:"images/image-2.jpg"
    },
    {
        url:"images/image-3.jpg"
    },
    {
        url:"images/image-4.jpg"
    },
    {
        url:"images/image-5.jpg"
    }
];

Img.setAttribute("src",Images[0].url)

Button.addEventListener("click", () => {
    NavMenu.classList.toggle("nav-links-toggle")
});