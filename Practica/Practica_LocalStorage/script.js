//Almacenar en el localStorage

localStorage.setItem("nombre","Ariel Deckay");

const producto = {
    nombre:"Shampoo",
    cantidad:5
}

const strProduct = JSON.stringify(producto);
localStorage.setItem("Producto",strProduct);

const meses = ["Enero","Febrero","Marzo"]; //Crea Array
const strMeses = JSON.stringify(meses); //Lo convierte a stringa, el localStorage solo muestra string
localStorage.setItem("Meses",strMeses); //Guarda Array en localStorage

//Sacarlo del localStorage

const localMeses = localStorage.getItem("Meses");
console.log(localMeses);
const strLocalMeses = JSON.parse(localMeses) //Transforma un string en objeto
console.log(strLocalMeses);

//Remover item

localStorage.removeItem("nombre");

//Agregar un value a un key

strLocalMeses.push("Abril");
localStorage.setItem("Meses", JSON.stringify(strLocalMeses))//Usamos setItem para actualizar el contenido del localStorage

