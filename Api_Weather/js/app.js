const inputCity = document.querySelector("#city-name").value;
const countrySelect = document.querySelector("#country-code").value;
const form = document.querySelector("#weather-form")

async function APICall (city,country){
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${"4bdda9b7b6a4d3a1dd20a4a879e28e91"}`
    const answer = await fetch(url)
    const data = await answer.json()
    console.log(data);
}

form.addEventListener("submit", (event) => {
    event.preventDefault()
    APICall(inputCity,countrySelect)
})
