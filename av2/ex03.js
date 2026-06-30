const input = require('readline-sync');
const num = input.question("informe o numero");
console.log(`${num % 2 === 0 ? "par" : "impar"}`);
