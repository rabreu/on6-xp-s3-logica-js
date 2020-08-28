const readline = require("readline-sync");

const C = parseFloat(readline.question("Qual a temperatura (Celcius)? ", { encoding:'utf8' }));

const F = 9*C/5 + 32;

console.log("Fahrenheit: " + F);