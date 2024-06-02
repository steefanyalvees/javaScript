function compras(trabalho1, trabalho2)
{   

  const comprarSorvete = trabalho1 || trabalho2 // (ou) nesse caso se o primeiro for true, nem checa o proximo
  const comprarTv50 = trabalho1 && trabalho2 // precisa analizar o segundo caso seja positivo, mas se o primeiro for falso, a expressao inteira e falso, nem olha para o segundo
  //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
  const comprarTv32 = trabalho1 != trabalho2 // se for diferente
  const serSaudavel = !comprarSorvete // fia saudavel se n comprar sorvete

  
  // objecto 
  return {comprarSorvete, comprarTv50,comprarTv32,serSaudavel}
 // sendo criado sem atribuir um objevto e o valor again
 //comprarSorverte : comprarSorvete // ao inves disso
}

console.log(compras(true, true))//true
console.log(compras(true,false)) //false
console.log(compras(true, false)) // true
console.log(compras(true))//false