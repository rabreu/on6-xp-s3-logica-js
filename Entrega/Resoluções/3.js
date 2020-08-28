const readline = require('readline-sync')

const metros = parseFloat(readline.question("Qual o valor (metros)? "))

const milimetros = metros * 1000;

console.log("Milimetros: " + milimetros + "mm")