const NavMenuButton = document.querySelector(".nav-button");
const NavMenu = document.querySelector(".nav-links");

const Img = document.querySelector(".img-gallery img");

const ButtonLeft = document.querySelector(".button-left");
const ButtonRight = document.querySelector(".button-right");

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

NavMenuButton.addEventListener("click", () => {
    NavMenu.classList.toggle("nav-links-toggle")
});

let cont = 1;
ButtonRight.addEventListener("click", () => {   
    if( cont < Images.length){
        console.log(cont);
        Img.setAttribute("src", Images[cont].url)
        cont++
    }  
})
ButtonLeft.addEventListener("click", () => {
    
});