//Selectores
const $Selector = document.querySelector("#selector");
const $option = document.querySelector("#selector option");
const $ContainerDiv = document.querySelector(".container");
$option.innerText = "Marca";
console.log($option);

//DataBase
const optionList = [
    {
        Marca: "Pitusas",
        Modelo: "Con relleno"
    }
]
const coloresList = {
    Color: {
        color:"rojo",
    }
}

$option.innerHTML = JSON.stringify(optionList[0]);
$option.innerHTML = coloresList.Color.color;

///

$ContainerDiv.querySelector("p").textContent = coloresList.Color.color;