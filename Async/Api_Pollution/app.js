const inputLatitude = document.querySelector("#latitude");
const inputLongitude = document.querySelector("#longitude");
const btnSubmit = document.querySelector("#submit");
const form = document.querySelector("#formulario");

const lista = document.querySelector(".list");

function createList(key,value){
    const list_item = document.createElement("li");
    list_item.textContent = `${key}: ${value}`;
    lista.appendChild(list_item)
    setTimeout(() => {
        lista.removeChild(list_item)
    }, 5000);
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
            for (const property in components){
                createList(property,components[property])
            }
        }
        // const respuesta = await fetch(url)
        // const data = await respuesta.json()
        // console.log(data);
        // console.log(data.list[0].components);

        // const components = data.list[0].components;
        // for (const property in components){
        //     console.log(`${property}: ${components[property]}`);
        // }
    } catch (err) {
        console.log(err);  
    }
}


form.addEventListener("submit", (e) => {
    e.preventDefault()
    Apifetch(inputLatitude.value,inputLongitude.value)
})