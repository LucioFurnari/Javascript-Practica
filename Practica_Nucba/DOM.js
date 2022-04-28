var MostrarTitulo = document.getElementsByClassName("title");
console.log(MostrarTitulo[0]);


change = () => {
Titulo = document.getElementsByClassName("title").item(0);
Titulo.firstChild.data = "Hola";
body = document.getElementsByTagName("body")[0]
newElement = document.createElement("P");
newText = document.createTextNode("Esto es un texto");
newElement.appendChild(newText)
body.appendChild(newElement)
}
change()

title = (text) => {
    title = text
    const heading = document.createElement("h2");
    const headingText = document.createTextNode(title)
    heading.appendChild(headingText);
    document.body.appendChild(heading);
}

title(prompt("ingrese un texto "))

parrafo = document.getElementsByClassName("parrafo")[0]
parrafoTexto = document.createTextNode("buenas esto es un texto xd")
parrafo.appendChild(parrafoTexto)

////////////////////

function setBackground(color) {
    myBody = document.getElementsByTagName("body")[0];
    myBodyElements = myBody.getElementsByTagName("p");
    myp = myBodyElements[1]
    myp.style.background = color;
}

function choiceColor (choiceC) {
    choiceC(prompt("Elija un color"))
}

// choiceColor(setBackground)

function createDiv(params) {
    const myBody = document.getElementsByTagName("body")[0]
    const createDIV = document.createElement("div");
    const divContent = document.createTextNode("Esto es un div");
    myBody.appendChild(createDIV)
    createDIV.appendChild(divContent)
    createDIV.style.maxWidth ="200px";
    createDIV.style.backgroundColor = "red";
    
}
createDiv()