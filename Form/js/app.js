const Form = document.querySelector("#testForm")
const inputTitle = document.querySelector("#titleInput");
const inputText = document.querySelector("#textInput");
const button = document.querySelector("#formSubmit");

const ArrayTest = [];


console.log(button);

function getValue(event) {
    event.preventDefault()
    vTitle = inputTitle.value
    vText = inputText.value
    obj = {
        tittle:vTitle,
        text:vText
    }
    ArrayTest.push(obj)
    console.log(vTitle);
    console.log(vText);
    console.log("Hola esto es un submit");
    console.log(ArrayTest);
    return ArrayTest
}

Form.addEventListener("submit",getValue);
