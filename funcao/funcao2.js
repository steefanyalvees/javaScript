//Armazenando uma funcao em uma variavel ( muito rar, nem toda linaguagem aceita isso)
//constante recebe a funcao 
const printSoma = function(a,b)
{
  console.log(a+b)

}

printSoma(2,3)

//Armazanando uma funcao arrow em uma variavel (=> no lugar de funcion)
const soma =(a,b) => // forma reduzida
  {
    return a+b
  }
  console.log(soma(2,3))
// forma reduzida de criar uma funcao 
  /// diminundo ainda mais retorno implicito
  const subtracao = (a,b) => a-b
  console.log(subtracao(2,3))

  // arrow funcitons com um parametro so 
  const print2 = a => console.log(a)
  print2('legal')