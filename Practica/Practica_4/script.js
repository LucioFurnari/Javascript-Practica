
for (i=0;i<10;i++){
row = document.createElement("div");
row.classList.add(`row${i}`);
row.style.border ="1px solid black"
row.style.height = "4rem"
row.style.display ="flex"
document.querySelector(".container").appendChild(row);
    for(z=0;z<5;z++){
        cube = document.createElement("div");
        cube.classList.add(`cube${z}`)
        cube.style.border ="1px solid black"
        cube.style.width = "12rem"

        // console.log(`.row${i}`, `.cube${z}`)
        row.appendChild(cube);
    }
}

esteCuadrito = document.querySelector(`.row${i} .cube${z}`);
console.log(esteCuadrito);
// cube.addEventListener("click",() => {
//     cube.style.backgroundColor = "red";
//     // esteCuadrito = document.querySelector(`.row${i}`, `.cube${z}`)
//     // esteCuadrito.style.backgroundColor = "red";
//     // console.log(esteCuadrito);
// })