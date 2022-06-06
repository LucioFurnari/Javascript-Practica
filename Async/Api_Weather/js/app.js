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
    if(ciudad == ""){
        console.log("El input esta vacio");
    }else {
        consultarAPI(ciudad,pais)
    }
}

function consultarAPI(ciudad, pais){
    const apiKey = "4bdda9b7b6a4d3a1dd20a4a879e28e91"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if(data.cod === "404"){
                console.log("No existe la ciudad");
            }
            console.log(data)
        })
        
}



/* 
Validacion para que no envien input vacios
Mostrar valores en el DOM
temp: 283.15
temp_max: 283.15
temp_min: 283.15
Para mostrar en grados celcius restar 273.15
Mostrar un cartel de error que dure aprox 5 segundos
*/