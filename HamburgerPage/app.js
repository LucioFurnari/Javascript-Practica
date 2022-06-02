//DOM elements
const divContainer = document.querySelector(".cardContainer");
const orderCard = document.querySelector(".orderCard div ul")
const orderCard_Total = document.querySelector(".orderCard p")
const TotalTextcontent = orderCard_Total.textContent

//Variables
let total = 0 //Total mostrado en la orden.

function createItems(item) {
    const Card = document.createElement("div");
    Card.classList.add("card");
    const cardTitle = document.createElement("h3");
    const img = document.createElement("img");
    const description = document.createElement("p");

    /// Elementos del orden Card
    const price = document.createElement("p");
    const button = document.createElement("button");
    
    const list = document.createElement("li");
    const listButton = document.createElement("button");
    listButton.textContent = "x";
    let cont = 1 //Contador por cada hamburguesa ordenada.
    let totalprice = 0; //precio a sumar al total.
    
    button.addEventListener("click", () => {
        let ordenPrice = item.price;
        let ordenName = item.hamburger;
        list.textContent = `${ordenName}` + ` ${cont++}/u`;
        totalprice += ordenPrice
        total += ordenPrice;
        list.appendChild(listButton)
        orderCard.appendChild(list);
        // console.log(ordenName);
        // console.log(ordenPrice); 
        console.log(total);
        orderCard_Total.textContent = TotalTextcontent + total;
    })
    
    listButton.addEventListener("click",() => {
        orderCard.removeChild(list);
        cont = 1;
        total -= totalprice ;
        orderCard_Total.textContent = TotalTextcontent + total;
        totalprice = 0;        
    })

    img.setAttribute("src",item.img);
    cardTitle.textContent = item.hamburger;
    price.textContent = `$${item.price}`;
    description.textContent = item.description;
    button.textContent = "Order Now";

    Card.appendChild(cardTitle);
    Card.appendChild(description);
    Card.appendChild(img);
    Card.appendChild(price);
    Card.appendChild(button);
    divContainer.appendChild(Card);
}

hamburguersList.map(item => {createItems(item)});

