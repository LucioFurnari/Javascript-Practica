let reg = /([a-z])\w/;

const input = document.querySelector("#textInput");
const button = document.querySelector("button");

function validarText(value) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(reg.test(value)){
                resolve("La clave es correcta")
            }else {
                reject("La clave es incorrecta")
            }
        }, 2000);
    })
}

async function funcionAsincrona(clave) {
    try{
        // let result = await validarText(clave);
        // console.log(result);
        console.log(await validarText(clave));
    } catch(err){
        console.error(err);
    }
    // try {
    //     console.log(await validarText(clave));
    // }catch(err){
    //     console.error(err);
    // }
}

const ejecutarFunction = () => {funcionAsincrona(input.value)}

button.addEventListener("click",ejecutarFunction)

