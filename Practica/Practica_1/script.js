let FunctionOne = () => {
return console.log("Estas en casa 1");
}
let FunctionTwo = () =>{
    return console.log("Estas en casa 2")
}


let FunctionExample = (parametro) =>{
switch (parametro) {
    case "casa 1":
        FunctionOne();
        break;
    case "casa 2":
        FunctionTwo();
        break;
}
}
let select = prompt(`En cual casa quieres entrar ? casa 1 o casa 2`)
FunctionExample(select);