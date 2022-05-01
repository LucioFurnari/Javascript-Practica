const form = document.querySelector("#formulario");
console.log(form);
form.addEventListener("submit", ejecutarApi);

function ejecutarApi(e) {
    // e.preventDeafault();
    console.log(e);
    console.log(form);
}

const title = document.querySelector(".title");
const text = document.querySelector(".text");

function changeColor() {
    title.style.color = "red";
    console.log(title);
}

function changeText() {
    text.textContent = " cambio del texto";
    console.log(text);
}

function createDiv() {
    for(let i=0;i < 5;i++){
        div = document.createElement("div");
        div.classList.add("divClass")
        document.body.appendChild(div);
        
    }
    div.addEventListener("click", ()=>{
        window.setTimeout(()=>{document.querySelector(`.divClass`).style.backgroundColor = "green"}, 2000)
    })
}



window.setTimeout(changeColor, 2000);
window.setTimeout(changeText, 2000);
window.setTimeout(createDiv, 2000)

