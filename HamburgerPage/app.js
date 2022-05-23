const divContainer = document.querySelector(".container");

function createItems(item) {
    const div = document.createElement("div");
    const parraf = document.createElement("p");
    const img = document.createElement("img");
    const description = document.createElement("p");
    const price = document.createElement("p");
    const button = document.createElement("button");

    img.setAttribute("src",item.img);
    parraf.textContent = item.hamburger;
    price.textContent = `$${item.price}`;
    description.textContent = item.description;
    button.textContent = "BUY";

    div.appendChild(parraf);
    div.appendChild(description);
    div.appendChild(img);
    div.appendChild(price);
    div.appendChild(button);
    divContainer.appendChild(div);
}

hamburguersList.forEach(item => {createItems(item)});