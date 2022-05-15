// Selectores
const $Selector = document.querySelector("#selector");
const $SelectorTwo = document.querySelector("#selectorTwo");
const $SelectorThree = document.querySelector("#selectorThree");
const $option = document.querySelectorAll("select#selector > option");//Toma los option del selector
const $ContainerDiv = document.querySelectorAll("div.card > p");
const $ContainerCardTitle = document.querySelector("div.card > h2");
const $ContainerCardImage = document.querySelector("div.card > img");

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
        Sabor:"Chcolate",
        image:"css/images/chocolinas.jpg"
    },
    {
        Marca:"Don Satur",
        image:"css/images/don_satur.png"
    }
]
const coloresList = {
    Color: {
        color:"rojo",
    }
}

// Function

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

// Filter

const imageList = optionList.filter((e) => e.image);
console.log(imageList);

// Events ///////////

$Selector.addEventListener("change",(e) => {
    $ContainerDiv[0].textContent = e.target.value;
})

$SelectorTwo.addEventListener("change",(e) => {
    $ContainerDiv[1].textContent = e.target.value;
})

$SelectorThree.addEventListener("change",e =>{
    $ContainerCardTitle.textContent = e.target.value;
    i = e.target.value;
    const List = optionList.filter((event) => {if(event.Marca == i){return event.Marca}});
    // console.log(List);
    // console.log(List[0].image);
    $ContainerCardImage.setAttribute("src",List[0].image)
})
console.log($ContainerCardImage);