const btnAbrirTXT = document.querySelector("#abrirTxt");
btnAbrirTXT.addEventListener("click", obtenerDatos);

function obtenerDatos() {
    const url = " data/datos.txt";
    fetch(url)
    .then(res =>{
        console.log(res.status);
        console.log(res.statusText);
        console.log(res.type);
        console.log(res.url); 
    })
        
    .then(datos => {
        console.log(datos);
        const body = document.querySelector("body");
        const parrafo = document.createElement("p");
        parrafo.textContent = datos;
        body.appendChild(parrafo);
    })
    .catch
}