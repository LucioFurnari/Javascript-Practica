const aplicarDescuento = new Promise((resolve, reject)=>{
    const dto = true;
    if(dto){
        resolve("Descuento aplicado");
    } else {
        reject("Descuento no aplicado");
    }
});

aplicarDescuento
    .then(res => {
        console.log(res);
    })
    .catch(error => {
        console.log(error);
    })

console.log(aplicarDescuento);
//Existen 3 estados de las promesas
/*
fulfilled -> Cuando la promesa se cumplió
rejected -> Cuando la promesa no se cumplió
pending -> Cuando queda en pendiente
*/