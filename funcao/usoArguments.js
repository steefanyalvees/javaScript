/**
 * argumentos e um array 
 */

function soma(){
  let soma = 0
  for (i in arguments) // para cada possica do array
{
  soma+= arguments[i] // somando a cada elemento do array 
}
return soma} //retorando o valor

console.log(soma())
console.log(soma(1))
console.log(soma(1.1,1.1))