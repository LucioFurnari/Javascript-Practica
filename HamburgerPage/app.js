const divContainer = document.querySelector(".container");
const orderCard = document.querySelector(".orderCard div ul")
const orderCard_Total = document.querySelector(".orderCard p")
console.log(orderCard_Total);
const TotalTextcontent = orderCard_Total.textContent
let total = 0

function createItems(item) {
    const div = document.createElement("div");
    const parraf = document.createElement("p");
    const img = document.createElement("img");
    const description = document.createElement("p");
    const price = document.createElement("p");
    const button = document.createElement("button");
    const list = document.createElement("li");
    let cont = 1
    
    button.addEventListener("click", () => {
        let ordenPrice = item.price;
        let ordenName = item.hamburger;
        list.textContent = `${ordenName}` + ` ${cont++}x`;
        total += ordenPrice;
        orderCard.appendChild(list);
        // console.log(ordenName);
        // console.log(ordenPrice); 
        console.log(total);
        orderCard_Total.textContent = TotalTextcontent + total;
    })
    
    img.setAttribute("src",item.img);
    parraf.textContent = item.hamburger;
    price.textContent = `$${item.price}`;
    description.textContent = item.description;
    button.textContent = "Order Now";

    div.appendChild(parraf);
    div.appendChild(description);
    div.appendChild(img);
    div.appendChild(price);
    div.appendChild(button);
    divContainer.appendChild(div);
}

hamburguersList.map(item => {createItems(item)});

