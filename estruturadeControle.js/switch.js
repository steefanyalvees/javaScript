// // switch no lugar de usar many ifs 
// no swith ele executa todas as linhas, todas as condicoes,
// ele so para se usarmos break

const printResult = function (nota){
  switch (Math.floor(nota)){
    case 10:
    case 9:   // nesse caso todos os cases estao ligados a sentence abaixo
    case 8:
        console.log('case10,9 and 8 honours')
        break


   switch (Math.ceil(nota)){
    case 7: case 6: case 5:
      console.log('case10,9 and 8 they all passed')
      console.log('uhuuu')
      break

          
   switch (Math.ceil(nota)){
    case 4: case 3: case 2:
      console.log('they all failed')
      console.log('saddd')
      
      break  // se tirar o break, ele executa tudo
          //com o brea ele para quando acha um valor certo

  } default:   // acessar por ultimo
        console.log('nota invalida')

}}}

printResult(10)
printResult(6)
printResult(2)

