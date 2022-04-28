button = document.createElement("button");
buttonText = document.createTextNode("El boton xd");
button.appendChild(buttonText);

/////////////////

divContainer = document.createElement("div");
divContainer.style.width = "200px";
divContainer.style.backgroundColor = "orange";

// divContent = document.createElement("div");

document.body.appendChild(button);

button.addEventListener("click", function  () {
    document.body.appendChild(divContainer);
    divItemsList = [];
    for (i=0;i < 5; i++){
    divContent = document.createElement("div")
    divContent.className = ("div"+i);

    divContainer.appendChild(divContent);
    ////////////////////////
    divContent.style.height = "50px";
    divContent.style.backgroundColor = "red";
    divContent.style.border = "1px solid black"
    divContent.style.display = "flex"
        for (x=0;x < 5;x++){
            
            divItems = document.createElement("div");
            divItemsList.push(divItems);
            divItems.className = ("item"+x);
            // divItems.addEventListener("click", function () {
            //     tralala = document.querySelector(`.item${x}`);
            //     tralala.style.backgroundColor = "blue";
            // })
            divContent.appendChild(divItems);
            divItems.style.width = "100%"
            divItems.style.border = "1px solid black"
        }
    }    
    // con = document.querySelectorAll("div","item");
    // console.log(con);
    // con.addEventListener("click", function () {
    //     divItems.style.backgroundColor = "blue"
    // })
}
)



title = document.querySelector(".titulo")

title.addEventListener("click", function () {
    title.style.backgroundColor = "red";
})