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
        const aviso = document.querySelector("#promesa");
        const parrafo = document.createElement("p");
        parrafo.textContent = res;
        aviso.appendChild(parrafo);
    })
    .catch(error => {
        console.log(error);
        const aviso = document.querySelector("#promesa");
        const parrafo = document.createElement("p");
        parrafo.textContent = error;
        aviso.appendChild(parrafo);
    })

console.log(aplicarDescuento);
//Existen 3 estados de las promesas
/*
fulfilled -> Cuando la promesa se cumplió
rejected -> Cuando la promesa no se cumplió
pending -> Cuando queda en pendiente
*/