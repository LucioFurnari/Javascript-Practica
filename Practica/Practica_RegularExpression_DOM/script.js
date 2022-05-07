const form = document.getElementsByClassName("formulario");
const inputs = document.querySelector(".formulario,input");
const alert = document.querySelector(".alert");

const expresiones = {
    usuario: /^[a-zA-Z]{0,32}$/,
    password: /^[a-zA-Z0-9]{0,32}$/
};

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "usuario":
            if(e.target.value.match(expresiones.usuario)){
                console.log("Correcto");
                alert.classList.add("alert");
                alert.classList.remove("formulario_incorrecto");
                
            }else{
                console.log("Incorrecto");
                alert.classList.remove("alert");
                alert.classList.add("formulario_incorrecto");
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