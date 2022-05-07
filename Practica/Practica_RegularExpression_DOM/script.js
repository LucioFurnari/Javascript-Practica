//Variables
const form = document.getElementsByClassName("formulario");
const inputs = document.querySelector("#formulario input");
// const alert = document.querySelector(".alert");

//Expresiones/Regex
const expresiones = {
    usuario: /^[a-zA-Z]{0,32}$/,
    password: /^[a-zA-Z0-9]{0,32}$/
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
            if(e.target.value.match(expresiones.usuario)){
                console.log("Correcto");
                alertCorrect(e);
                // inputs.classList.add("formulario_correcto");
                // inputs.classList.remove("formulario_incorrecto");               
            }else{
                console.log("Incorrecto");
                alertIncorrect(e);
                // inputs.classList.remove("formulario_correcto");
                // inputs.classList.add("formulario_incorrecto");
            }
            break;
        case "password":
            if(expresiones.password.test(e.target.value)){
                console.log("La constraseña es correcta");
            }else {
                console.log("La constraseña solo usa numeros y letras");
            }
            break;    
    default:
            break;
    }
};

inputs.addEventListener("keyup", validarFormulario);