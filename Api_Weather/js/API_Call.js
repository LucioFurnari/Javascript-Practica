
const img = document.querySelector(".response-container img");
const temp = document.querySelector(".response-container .temp");
const tempMax = document.querySelector(".response-container .temp-max");
const tempMin = document.querySelector(".response-container .temp-min");

export async function APICall (city,country){
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${"4bdda9b7b6a4d3a1dd20a4a879e28e91"}&units=metric `
    const answer = await fetch(url)
    const data = await answer.json()
    console.log(data);
    img.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)

    temp.textContent = `${data.main.temp} °C` ;
    tempMax.textContent = data.main.temp_max;
    tempMin.textContent = data.main.temp_min;
}