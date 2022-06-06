const inputLatitude = document.querySelector("#latitude");
const inputLongitude = document.querySelector("#longitude");




function Apifetch(lat,lon) {
    const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}
                &lon=${lon}&appid=${"4bdda9b7b6a4d3a1dd20a4a879e28e91"}`    
    const respuesta = fetch(url)
    const data = respuesta.json()
    return data
}



async function test(){
    try {
        await Apifetch(inputLatitude,inputLongitude);
        console.log(Apifetch);
        // const respuesta = await fetch(url)
        // const data = await respuesta.json()
        // console.log(data);
        // console.log(data.list[0].components);

        // const components = data.list[0].components;
        // for (const property in components){
        //     console.log(`${property}: ${components[property]}`);
        // }
        // if(data.cod == "400"){
        //     console.log("Error, no ingreso un numero");
        // }
    } catch (err) {
        console.log(err);  
    }
}
test()

