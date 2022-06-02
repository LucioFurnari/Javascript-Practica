const url = "https://picsum.photos/list";
const body = document.querySelector("body");

document.addEventListener("DOMContentLoaded",function (){
    obtenerDatosAsync()
})

// const obtenerDatos = () => {
//     fetch(url)
//         .then(datos => datos.json())
//         .then(photos => console.log(photos))
//         .catch(error => console.log(error))
// }

function mostrarHTML (datos) {
    const body = document.querySelector("body");
    
    datos.map(dato => {
        const parraf = document.createElement("p");
        const image = document.createElement("img");
        parraf.textContent = dato.author;
        image.setAttribute("src",dato.post_url);
        body.appendChild(parraf);
        body
    })
}


const obtenerDatosAsync = async () => {
    try {
        const resultado = await fetch(url)
        const JSON = await resultado.json();
        mostrarHTML(JSON)
        console.log(JSON);
    }catch(error){
        console.log(error);
    }
}
