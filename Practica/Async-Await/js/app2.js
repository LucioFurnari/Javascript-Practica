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

const app = async ()=> {
    try {
        // const clientes = await descargarClientes()
        // console.log(clientes);
        // const productos = await descargarProductos()
        // console.log(productos);

        const respuesta = await Promise.all([descargarClientes(),descargarProductos()])
        console.log(respuesta);
    } catch (error){
        console.log(error);
    }
}

app()