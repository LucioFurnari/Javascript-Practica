//Selectores
const $Selector = document.querySelector("#selector");
const $option = document.querySelectorAll("select#selector > option");//Toma los option del selector
const $ContainerDiv = document.querySelectorAll("div.container > p");


console.log($option);
console.log($ContainerDiv);
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

///
$option.innerText = JSON.stringify(optionList[0]);
$option[0].innerText = coloresList.Color.color;
$option[1].innerText = "Marca";
///
$ContainerDiv[0].textContent = coloresList.Color.color;
$ContainerDiv[1].textContent = coloresList.Color.color;