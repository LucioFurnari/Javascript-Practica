console.log(1+1);
try {
    autenticarUsuario();
}catch (error){
    console.log(error);
}
console.log(2+2);

function autenticarUsuario() {
    return new Promise((resolve,reject) => {
        const error = true

        setTimeout(() => {
            if(!error){
                resolve(`Usuario Autenticado`);
            }else{
                reject(`Usuario no registrado`);
            }
        }, timeout);
    })
}