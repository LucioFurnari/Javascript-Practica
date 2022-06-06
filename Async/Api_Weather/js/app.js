const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");

const DivContainer = document.querySelector(".temp-container");
const Temperatura = document.querySelector(".temp");
const TemperaturaMaxima = document.querySelector(".temp-max");
const TemperaturaMinima = document.querySelector(".temp-min");
/////////

window.addEventListener("load", () => {
    formulario.addEventListener("submit", buscarClima)
})

function buscarClima(e) {
    e.preventDefault()
    console.log("Buscando Clima");
    const ciudad = document.querySelector("#ciudad").value
    const pais = document.querySelector("#pais").value
    if(ciudad == ""){
        const inputVacio = document.createElement("p");
        inputVacio.textContent = "El input esta vacio"
        formulario.appendChild(inputVacio);
        setTimeout(() => {
            formulario.removeChild(inputVacio)
        }, 3000);
        // console.log("El input esta vacio");
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
                const MensajeError = document.createElement("p");
                MensajeError.textContent = "No existe la ciudad"
                MensajeError.style.display = "inline"
                MensajeError.style.background = "red";
                MensajeError.style.color = "white";
                DivContainer.appendChild(MensajeError)
                setTimeout(() => {
                    DivContainer.removeChild(MensajeError);
                }, 5000);
                // console.log("No existe la ciudad");
            }else {
                Temperatura.textContent = `Temperatura: ${parseInt(data.main.temp - 273.15)} C°"`;
                TemperaturaMaxima.textContent = `Temperatura Maxima: ${parseInt(data.main.temp_max - 273.15)} C°`;
                TemperaturaMinima.textContent = `Temperatura Minima: ${parseInt(data.main.temp_min - 273.15)} C°`;
                console.log(data)
                console.log(data.main.temp);
            }
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