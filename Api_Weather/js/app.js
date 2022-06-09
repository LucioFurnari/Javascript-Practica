import { APICall } from "./API_Call.js";

const form = document.querySelector("#weather-form")


form.addEventListener("submit", (event) => {
    const inputCity = document.querySelector("#city-name").value;
    const countrySelect = document.querySelector("#country-code").value;
    event.preventDefault()
    APICall(inputCity,countrySelect)
    console.log(inputCity);
    console.log(countrySelect);
})