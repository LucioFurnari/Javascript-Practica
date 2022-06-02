function cuentaCallback(value,callback) {
    setTimeout(() => {
        callback(value,value*value);
    }, 1000);
}

cuentaCallback(0,(value,result)=> {
    console.log("Inicia Callback");
    console.log(`Callback: ${value}, ${result}`);
    cuentaCallback(1,(value,result)=> {   
        console.log(`Callback: ${value}, ${result}`);
        cuentaCallback(2,(value,result)=> {
            console.log(`Callback: ${value}, ${result}`);
        })
    })
})

function CuentaPromise(value) {
    if(typeof value !== "number"){
        return Promise.reject(`Error, el valor ${value} ingresado no es un número`);
    }
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value*value,
            });
        }, 1000);
    })
}

CuentaPromise(0)
.then(obj => {
    console.log("Inicio Primise");
    console.log(`Promise ${obj.value}, ${obj.result}`);
    return CuentaPromise(1);
})
.then(obj => {
    console.log(`Promise ${obj.value}, ${obj.result}`);
    return CuentaPromise(2);
})
.then(obj => {
    console.log(`Promise ${obj.value}, ${obj.result}`);
    return CuentaPromise(3);
})
.catch(err => console.error(err));

////

function cuentaAsync(value) {
    if (typeof value !== "number"){
        return Promise.reject(`Error, el valor ${value} no es un número`);
    }

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            })
        }, 1000);
    })
}

const funcionAsincronaExpresada = async () => {
    try {
        let obj = await cuentaAsync(6);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuentaAsync(7);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuentaAsync(8);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
    } catch(err) {
        console.error(err);
    }
}

funcionAsincronaExpresada();