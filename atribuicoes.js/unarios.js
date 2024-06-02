let num1 = 1
let num2 = 2

num1++ // acrecsenta, uma unidade ao valor da unidade // pos fixed
num2++
console.log(num1)
console.log(num2)

--num1 // tem  prioridade em cima do ++
--num2
console.log(num1, num2) // pre fixed

console.log(++num1 === num2--) // true 
// nessecaso o numb1  vale 2 e e comparado com o valor numb2
// e so entao o valor e diminuido
