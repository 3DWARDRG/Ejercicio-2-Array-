/*

// Ejercicio 1

let numbersrandom=[];
for(let i=1;i < 11; i++){
    numbersrandom.push(Math.floor(Math.random()*10))
};

console.log(numbersrandom);
*/

// Ejercicio 2
/*
let userInput = prompt("Ingrese varias palabras separadas por coma");

while(!userInput.includes(",")){
    userInput= prompt("Por favor, asegúrate de ingresar varias palabras separadas por coma");
}

let userInputArray= userInput.split(",");

console.log(userInputArray)

*/

// Ejercicio 3

let numbers=[10,40,30,20,15,5];
numbers.sort((a,b) => a - b);

let minnumber= Math.min(...numbers);
let maxnumber= Math.max(...numbers);
alert("El numero mayor de los numeros proporcionados es " + maxnumber + " y el numero menor de los numeros proporcionados es " + minnumber + ".");