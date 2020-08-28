const readline = require("readline-sync");

const F = parseFloat(readline.question("Qual a temperatura (Fahrenheit)? ", { encoding:'utf8' }));

const C = (F-32)*5/9;

console.log("Celcius: " + C);