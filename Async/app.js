function cuadradoPromise(value) {
    return new Promise((resolve,reject) => {    
            if(typeof value === "number"){
                setTimeout(() => {
                    resolve({
                        value,
                        result: value*value
                    })
                }, 1000);
                
            }else {
                reject(`Error, el valor ${value} ingresado no es un numero`)
            }
    })
}

async function functionAsincrona() {
    try {
        console.log("Inicio Async Function"); 
        let obj = await cuadradoPromise(0);
        console.log(`Async Function: ${obj.value}.${obj.result}`);

        obj = await cuadradoPromise(1);
        console.log(`Async Function: ${obj.value}.${obj.result}`);

        obj = await cuadradoPromise(2);
        console.log(`Async Function: ${obj.value}.${obj.result}`);

        obj = await cuadradoPromise(3);
        console.log(`Async Function: ${obj.value}.${obj.result}`);

        obj = await cuadradoPromise(4);
        console.log(`Async Function: ${obj.value}.${obj.result}`);

        console.log("Fin");
    } catch (err) {
        console.error(err);
    }
}

functionAsincrona();