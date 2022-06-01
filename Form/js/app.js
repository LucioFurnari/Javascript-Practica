const Form = document.querySelector("#testForm")
const inputTitle = document.querySelector("#titleInput");
const inputText = document.querySelector("#textInput");
const button = document.querySelector("#formSubmit");



console.log(button);

function getValue(event) {
    event.preventDefault()
    ArrayTest = [];
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
    return obj
    window.localStorage.setItem(obj.tittle,obj.text)
}
Form.addEventListener("submit",getValue);

