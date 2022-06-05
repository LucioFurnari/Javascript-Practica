const NavMenuButton = document.querySelector(".nav-button");
const NavMenu = document.querySelector(".nav-links");

const Img = document.querySelector(".img-gallery .gallery");

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
console.log(Images.length);

let x = 0;
Img.setAttribute("src",Images[x].url)

function changeImage(e) {
    if(e == "right"){
        if (x < Images.length-1){
            
            x++
            console.log(x); 
            Img.setAttribute("src",Images[x].url)      
        }
    }
    if(e == "left"){
        if(x > 0){
            x--
            console.log(x);
            Img.setAttribute("src",Images[x].url)
        }
    }
}

//////////
NavMenuButton.addEventListener("click", () => {
    NavMenu.classList.toggle("nav-links-toggle")
});

ButtonRight.addEventListener("click", (event) => {
    changeImage(event.target.value)
})
ButtonLeft.addEventListener("click", (event) => {
    changeImage(event.target.value)
} )

console.log(ButtonRight.value);