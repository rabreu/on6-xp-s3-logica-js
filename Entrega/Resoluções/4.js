const readline = require('readline-sync')

const num1 = parseFloat(readline.question("Numero 1: "))
const num2 = parseFloat(readline.question("Numero 2: "))
const num3 = parseFloat(readline.question("Numero 3: "))


function soma(num1, num2, num3) {
    if(isNaN(num1))
        num1 = 0;
    if(isNaN(num2))
        num2 = 0;
    if(isNaN(num3))
        num3 = 0;
    return num1+num2+num3;
}

console.log(soma(num1, num2, num3))