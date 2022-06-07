const inputLatitude = document.querySelector("#latitude");
const inputLongitude = document.querySelector("#longitude");
const btnSubmit = document.querySelector("#submit");
const form = document.querySelector("#formulario");

const lista = document.querySelector(".list");
const DivAqi = document.querySelector(".main-aqi");

function createList(key,value){
    const list_item = document.createElement("li");
    list_item.textContent = `${key}: ${value}`;
    lista.appendChild(list_item)
    setTimeout(() => {
        lista.removeChild(list_item)
    }, 5000);
}
function AirQualityIndex(aqi){
    switch (aqi) {
        case 1:
            DivAqi.style.backgroundColor = "green";
            break;
        case 2:
            DivAqi.style.backgroundColor = "limegreen";
            break;
        case 3:
            DivAqi.style.backgroundColor = "yellow";
            break;
        case 4:
            DivAqi.style.backgroundColor = "orange";
            break;
        case 5:
            DivAqi.style.backgroundColor = "red";
            break;
        default:
            break;
    }
}
async function Apifetch(lat,lon){
    try {
        if(lat == "" || lon == "") {
            console.log("No deje el formulario en blanco");
        }else {
            const latitude = parseInt(lat)
            const longitude = parseInt(lon)
            const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${"4bdda9b7b6a4d3a1dd20a4a879e28e91"}`    
            const respuesta = await fetch(url)
            const data = await respuesta.json()
            console.log(data);

            const components = data.list[0].components
            const aqi = data.list[0].main.aqi
            console.log(aqi);

            for (const property in components){
                createList(property,components[property])
            }
            AirQualityIndex(aqi)
        }
    } catch (err) {
        console.log(err);  
    }
}


form.addEventListener("submit", (e) => {
    e.preventDefault()
    Apifetch(inputLatitude.value,inputLongitude.value)
})