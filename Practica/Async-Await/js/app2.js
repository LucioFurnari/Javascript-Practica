function descargarClientes() {
    console.log("Descargando Clientes....");
    return new Promise (resolve => {
        setTimeout(()=> {
            resolve("Cliente descargados");
        },5000)
    })
}

function descargarProductos(){
    console.log("Descargando Productos...");
    return new Promise(resolve => {
        setTimeout(()=> {
            resolve("Productos descargados")
        }, 3000)
    })
}

const app = ()=> {
    descargarClientes()
    descargarProductos()
}

app()