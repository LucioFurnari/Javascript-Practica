//Primer parrafo
const parrafo1 = document.createElement("p");
parrafo1.textContent = "El parrafo xd";
parrafo1.classList.add("categoria", "paseo");


//Segundo parrafo
const parrafo2 = document.createElement("p");
parrafo2.textContent="Titulo parrafo";
parrafo2.classList.add("titulo");

//Tercer parrafo
const parrafo3 = document.createElement("p");
parrafo3.textContent = "$2500 mensuales";
parrafo3.classList.add("precio");

//Div

const info = document.createElement("div");
info.classList.add("info");
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);
document.body.appendChild(info);

//Crear Img
const img = document.createElement("img");
img.src = "imagen.jpg";


//Creamos el div contenedor CARD
const contenedorCard = document.createElement("div");
contenedorCard.classList.add("contenedor-cards");
contenedorCard.appendChild(img);
contenedorCard.appendChild(info);
document.body.appendChild(contenedorCard);



//////////////////
const form = document.querySelector("#formulario");
console.log(form);
form.addEventListener("submit", ejecutarApi);

function ejecutarApi(e) {
    // e.preventDeafault();
    console.log(e);
    console.log(form);
}

const title = document.querySelector(".title");
const text = document.querySelector(".text");

function changeColor() {
    title.style.color = "red";
    console.log(title);
}

function changeText() {
    text.textContent = " cambio del texto";
    console.log(text);
}

function createDiv() {
    for(let i=0;i < 5;i++){
        div = document.createElement("div");
        div.classList.add("divClass")
        document.body.appendChild(div);
        
    }
    div.addEventListener("click", ()=>{
        window.setTimeout(()=>{document.querySelector(`.divClass`).style.backgroundColor = "green"}, 2000)
    })
}



window.setTimeout(changeColor, 2000);
window.setTimeout(changeText, 2000);
window.setTimeout(createDiv, 2000)

