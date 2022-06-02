function cuadradoPromise(value) {
    // if(typeof value !== "number"){
    //     return Promise.reject(`Error, el valor ${value} ingresado no es un numero`);
    // }
    return new Promise((resolve,reject)=>{
        if(typeof value === "number") {
            setTimeout(() => {
            resolve({
                value,
                result: value*value
            })
            }
            , 1000);
        }else {
            reject(`Error, el valor ${value} ingresado no es un numero`)
        }
})

}

cuadradoPromise(0)
    .then(obj=> {
        // console.log(obj);
        console.log("Inicio Promise");
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(1);
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(2);
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise("3");
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(4);
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(5);
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        console.log("Fin Promise");
    })
    .catch(err => console.error(err));


function Test(valor) {
    return new Promise((resolve,reject) => {
            if(valor == "hola"){
                resolve(valor)
            }else{
                reject("Palabra incorrecta")
            }
    })
    // setTimeout(()=> {new Promise((resolve,reject) => {
    //     if(value == "hola"){
    //         resolve(value)
    //     }else{
    //         reject("Palabra incorrecta")
    //     }
    // })}, 3000);
}

Test("hola")
    .then(val => console.log(`la palabra es ${val}`))
    .catch(err => console.error(err))