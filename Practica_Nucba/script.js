let dias = "lunes, martes, miercoles, jueves, viernes";
let ArrayDias = dias.split(" ")
console.log(dias.length);
console.log(dias.toUpperCase())
console.log(dias.replaceAll(",","-"))
console.log(ArrayDias)

let mes1 = ["enero", "febrero", "marzo", "abril", "mayo", "junio"];
let mes2 = ["agosot", "septiembre", "octubre", "noviembre", "diciembre"];
mes1.push(mes2)

console.log(mes1)
//////////

function saludar(nombre,nombr2,nombre3){
    console.log("Hola", nombre);
    console.log("Chau", nombre);
    console.log("Como andas?", nombre);
}

function procesarSaludo(fn) {
    fn("Ariel")
}

procesarSaludo(saludar);

//////////

function Dsiplayer(some){
    console.log(some);
}

function myCalulator(num1, num2, callback){
    let sum = num1 + num2;
    callback(sum);
}

myCalulator(5,5,Dsiplayer);

//////////////

function saludar(nombre) {
    console.log("Hola Mundo", nombre);
}

function procesarSaludo(saludar){
    saludar("Ariel");
}

procesarSaludo(saludar);

////////////////

// function calcular(n1,n2,fn){
//     console.log(fn(n1,n2));
// }
// function dividir(n1,n2){
//     return n1/n2;
// }
// function restar(n1,n2){
//     return n1-n2;
// }

// calcular(15,3,dividir);
// calcular(15,3,restar);

///////////


function multiplicar (n1,n2){
    console.log(n1*n2);
    
}

function sumar(n1,n2) {
    console.log(n1+n2);
}

function concatenar(text1,text2) {
    console.log(text1 + text2);
}

function Option(OptOne,OptTwo) {
    
    if (OptOne > OptTwo) {
        console.log("Opcion 1 es mayor");
    } else {
        console.log("Opcion 2 es mayor");
    }
}

function callback(z,x,callb) {
    callb(z,x)
    
}


let type = prompt("Que opcion quiere realizar ? sumar, multiplicar, concatenar, comparar : ");
// let OptOne = parseInt(prompt("Ingrese un numero"));
// let OptTwo = parseInt(prompt("Ingrese otro numero"));

function OptionOne() {
    let OptOne = parseInt(prompt("Ingrese un numero"));
    return OptOne;
}
function OptionTwo() {
    let OptTwo = parseInt(prompt("Ingrese otro numero"));
    return OptTwo;
}


switch (type) {
    case "sumar":
        let SumarNumOne = parseInt(prompt("Ingrese primer numero"));
        let SumarNumTwo = parseInt(prompt("Ingrese segundo numero"));
        callback(NumOne,NumTwo,sumar)
        break;
    case "multiplicar":
        let MultiNumOne = parseInt(prompt("Ingrese primer numero"));
        let MultiNumTwo = parseInt(prompt("Ingrese segundo numero"));
        callback(Num1,Num2,multiplicar)
        break;
    case "concatenar":
        let TextOne = prompt("Ingrese un texto");
        let TextTwo = prompt("Ingrese otro texto");
        callback(TextOne,TextTwo,concatenar);
        break
    case "comparar":
        // let OptOne = parseInt(prompt("Ingrese un numero"));
        // let OptTwo = parseInt(prompt("Ingrese otro numero"));
        callback(OptionOne,OptionTwo,Option)
}



// let NumOne = parseInt(prompt("Ingrese primer numero"));
// let NumTwo = parseInt(prompt("Ingrese segundo numero"));

// let WordOne = prompt("Primera palabra");
// let WordTwo = prompt("Segunda palabra");




// callback(NumOne,NumTwo,sumar);
// callback(WordOne,WordTwo,concatenar);
