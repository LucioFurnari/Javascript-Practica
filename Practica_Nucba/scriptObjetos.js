const personas = [
    { id: 0, name: "Ariel", lastName: "Perez"},
    { id: 1, name: "Nico", lastName: "Perez"},
    { id: 2, name: "Vale", lastName: "Gonzales"}
];

for(let i=0; i<personas.length;i++){
    console.log(personas[i].name);
}

let numbers = [1, 5, 10, 15];
let pizza = ["Salami","Napolitana","Champinion"];
let doubles = numbers.map(function(x) {
   return x * 2;
});
let resta = numbers.map((z)=> {
    return z-1;
})
let listaPizza = pizza.map((p)=>{
    return (`Pizza de ${p}`);
})

console.log(personas[0].name);
console.log(doubles);
console.log(resta);
console.log(listaPizza);

let newDoubles = [];
for (let i=0; i<numbers.length; i++){
    newDoubles.push(numbers[i]*2);
}
console.log(newDoubles);