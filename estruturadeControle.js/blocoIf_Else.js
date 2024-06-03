// se quisermos colocar varias sequencias de bloco com o if
// precisamos usar {} exemplo
if(9>7)
  console.log('hello') 
  console.log('hi') // nesse caso a segunda sempre sera executada, pois
                    // n tem chaves, indepedente da condicao

if (9>7){
  console.log('hello')  //agora, as duas serao executadas, de acorod com a condicao{}
  console.log('hi') // bom sempre usar chaves
}

function test2(num)
{
  if (num >7)  // esse ponto e virGULA FAZ COM QUE O PROGRAMA LEIA ESSA LINHA
      console.log(num)         // linha vazia, melhor n USAR PONTO E VIRGULA 
}

test2(9)
test2(7)