const form = document.querySelector("#formulario");
console.log(form);
form.addEventListener("submit", ejecutarApi);

function ejecutarApi(e) {
    // e.preventDeafault();
    console.log(e);
    console.log(form);
}