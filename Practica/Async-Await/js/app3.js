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
        parraf.textContent = dato.author;
        body.appendChild(parraf);
    })
}

const obtenerDatos = async () => {
    try {
        fetch(url)
        const datos =  await datos.json()
        const photos = await photos
        console.log(photos);
    }
    catch (err) {
        console.log(err);
    }
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
