const readline = require('readline-sync')

const num = readline.questionInt("Número: ")

function somatoria(num) {
    let s = 0;
    for(let i = 1; i <= num; i++)
        s = s + i;
    return s;
}

console.log(somatoria(num))