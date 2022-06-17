import { APICall } from "./API_Call.js";

const form = document.querySelector("#weather-form"),
    inputEmpty = document.createElement("p");



form.addEventListener("submit", (event) => {
    const inputCity = document.querySelector("#city-name").value;
    const countrySelect = document.querySelector("#country-code").value;
    console.log(inputCity);
    console.log(countrySelect);
    event.preventDefault()
    inputEmpty.textContent = "";
    if(inputCity == ""){
        form.appendChild(inputEmpty);
        inputEmpty.textContent = "No deje el campo vacio";
    }else {
        APICall(inputCity,countrySelect)
    }
})