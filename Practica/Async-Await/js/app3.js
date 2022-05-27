const url = "https://picsum.photos/list";
const body = document.querySelector("body");

document.addEventListener("DOMContentLoaded",function (){
    obtenerDatos()
})

const obtenerDatos = () => {
    fetch(url)
        .then(datos => datos.json())
        .then(photos => console.log(photos))
        .catch(error => console.log(error))
}