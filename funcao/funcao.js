/* object in javaScript  e uma funcao 
 * class tbm e uma funcao 
 * executa um processo, corpo da funcao e um bloco 
*/

/* funcao pode ou nao retornar alguma coisa. 
* bloco de codigo, funcao tem um nome -- bloco de codigo nomeado
* recebe parametros de entrada ( como se fosse ingredientes)
  funcao e o presidente da cidade ( very importate)
  nao liga para paremetros, como ouras linguagens
*/

function printSoma(a, b)
{
 console.log(a+b) //aqui n retorna nd como resposta
}
printSoma(2,3) // aqui chamos a funcao e retornamos uma resposta

function soma (a, b =7)
{
  return a+b
}
console.log(soma(2,)) // n passamos o segundo paramtro 