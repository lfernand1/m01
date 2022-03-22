const prompt = require ('prompt-sync')();

function calcular (num, ndois) {
let add = num + ndois
console.log ('a soma é', add)
let sub = num - ndois
console.log ('a subtração é', sub)
let div = num % ndois
console.log ('a divisão é', div)
let mti = num * ndois
console.log ('a multiplicação é', mti)
} 

let umnum = +prompt ('digite um numero')
let doisnum = +prompt ('digite outro numero')
 
calcular(umnum,doisnum)