// Selectores
const $Selector = document.querySelector("#selector");
const $SelectorTwo = document.querySelector("#selectorTwo");
const $SelectorThree = document.querySelector("#selectorThree");
const $option = document.querySelectorAll("select#selector > option");//Toma los option del selector
const $ContainerDiv = document.querySelectorAll("div.card > p");
const $ContainerCardTitle = document.querySelectorAll("div.card > h2");

console.log($option);
console.log($ContainerDiv);
// DataBase
const optionList = [
    {
        Marca:"Pitusas",
        Sabor: "Chocolate"
    },
    {
        Marca:"Mana",
        Sabor:"Vanilla"
    }, 
    {
        Marca:"Chocolinas",
        Sabor:"Chcolate"
    },
    {
        Marca:"Don Satur"
    }
]
const coloresList = {
    Color: {
        color:"rojo",
    }
}

// Function
// $option.forEach((option) => { 
//     option.textContent = optionList.filter((el)=> { el.Marca});
// });

for(let i=0;i < $option.length;i++){
    $option[i].textContent = optionList[i].Marca;
}
for(let i=0;i<optionList.length;i++){
    Newoption = document.createElement("option");
    Newoption.textContent = optionList[i].Marca;
    $SelectorTwo.appendChild(Newoption);
}
optionList.forEach(el => {
    Newoption = document.createElement("option");
    Newoption.textContent = el.Marca;
    $SelectorThree.appendChild(Newoption);
})

// Events

$Selector.addEventListener("change",(e) => {
    $ContainerDiv[0].textContent = e.target.value;
})

$SelectorTwo.addEventListener("change",(e) => {
    $ContainerDiv[1].textContent = e.target.value;
})

$SelectorThree.addEventListener("change",e =>{
    $ContainerCardTitle[0].textContent = e.target.value;
})