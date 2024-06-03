// if else if 
Number.prototype.entre = function(inicio, fim){

  return this >= inicio && this <= fim // se estiver entre o inicio e fim vai retornar true

}

const imprimirResultado= function (nota){
  if (nota.entre(9,10)){   // chechando a primeira condicao
    console.log('quadro de honra')
  } else if (nota.entre(7, 8.99)){ //else if - check essa tnm, se for falso
    console.log('aprovado')       // pula para o proximo, ate achar um verdadeiro
  } else if (nota.entre(5.9, 6.9)){
    console.log('foi quase!!')
  }
  
  else (console.log(' failed'))                               // caso n ache, ele executa o else{}
}

imprimirResultado(6.5)