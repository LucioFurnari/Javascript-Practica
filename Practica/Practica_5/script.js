//Variables
const form = document.getElementById("formulario");
const inputs = document.querySelector("#formulario,.input-1,.input-2,.input_email");
const text = document.querySelector(".text");
const password = document.querySelector(".text_password");
const email = document.querySelector(".text_email");

//Expresiones/Regex
const expresiones = {
    usuario: /^[a-zA-Z]{1,32}$/,
    password: /^[a-zA-Z0-9]{3,7}$/,
    email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
};

//Funciones
const alertCorrect = (param) => {
    param.target.classList.add("formulario_correcto");
    param.target.classList.remove("formulario_incorrecto");
}
const alertIncorrect = (param) =>{
    param.target.classList.remove("formulario_correcto");
    param.target.classList.add("formulario_incorrecto");
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "usuario":
            if(expresiones.usuario.test(e.target.value)){
                console.log("Correcto");
                alertCorrect(e);
                users.username = e.target.value;
                text.textContent = users.username;
                return true
                // inputs.classList.add("formulario_correcto");
                // inputs.classList.remove("formulario_incorrecto");    
            }else{
                console.log("Incorrecto");
                alertIncorrect(e);
                users.username = ``;
                text.textContent = users.username;
                return false
                // inputs.classList.remove("formulario_correcto");
                // inputs.classList.add("formulario_incorrecto");              
            }
            break;
        case "password":
            if(expresiones.password.test(e.target.value)){
                console.log("La constraseña es correcta");
                users.password = e.target.value;
                password.textContent = users.password;
            }else {
                console.log("La constraseña tiene que tener un maximo de 7 caracteres");
                users.password = ``;
                password.textContent = users.password;
            }
            break; 
        case "email":
            if(expresiones.email.test(e.target.value)){
                console.log("El email es valido");
                users.email = e.target.value;
                email.textContent = users.email;
            }else {
                console.log("El email NO es valido");
                users.email = ``;
                email.textContent = users.email;
            }      
        default:
            break;
    }
};


const logSubmit = (e) => {
    if (validarFormulario){
        console.log("Form Submitted");
    }else {
        console.log("Complete the username");
    }
    e.preventDefault();
}

//EventLs

inputs.addEventListener("keyup", validarFormulario);
form.addEventListener("submit", logSubmit);