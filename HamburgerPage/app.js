const divContainer = document.querySelector(".container");
const orderCard = document.querySelector(".orderCard div ul")

function createItems(item) {
    const div = document.createElement("div");
    const parraf = document.createElement("p");
    const img = document.createElement("img");
    const description = document.createElement("p");
    const price = document.createElement("p");
    const button = document.createElement("button");

    button.addEventListener("click",() => {
        let ordenPrice = item.price;
        let ordenName = item.hamburger;
        const list = document.createElement("li");
        list.textContent = ordenName;
        orderCard.appendChild(list);
        console.log(ordenName);
        console.log(ordenPrice);
        
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

hamburguersList.forEach(item => {createItems(item)});

