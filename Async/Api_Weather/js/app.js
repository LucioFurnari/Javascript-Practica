const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");

window.addEventListener("load", () => {
    formulario.addEventListener("submit", buscarClima)
})

function buscarClima(e) {
    e.preventDefault()
    console.log("Buscando Clima");
    const ciudad = document.querySelector("#ciudad").value
    const pais = document.querySelector("#pais").value

    consultarAPI(ciudad,pais)
}

function consultarAPI(ciudad, pais){
    const apiKey = "4bdda9b7b6a4d3a1dd20a4a879e28e91"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`
    fetch(url)
        .then(res => res.json())
        .then(data =>console.log(data))
        .catch(err => console.error(err))
}