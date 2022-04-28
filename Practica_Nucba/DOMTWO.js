title = document.querySelector("#H1");
checkbox = document.getElementById("INPUT_CHECK")
// console.dir(title)
// console.dir(checkbox)
body = document.querySelector("body");
// div = document.createElement("div").style.borderBlockColor = "red"
divContent = document.createTextNode("esto es un div");
document.body.appendChild(div)
div.appendChild(divContent)

title.addEventListener("click", () => {
    console.log("hiciste click");
    title.style.backgroundColor = "red";
    title.style.fontSize = "60px"
    
})

console.log(title);