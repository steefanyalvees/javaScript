/* forma de agrupar muliplo valures in forma linear
* com um index, vc acessa o array pelo seus elementos
* in java Array e fixo, em JavaScript nao e 
* ele e heterogenio, e ele cresce e diminui facilmente. 
* 
*/

const valores = [1,3,5,7,9] // array 5 valores, porem 4 positions
console.log (valores[0], valores[3], valores[1])
console.log(valores.length)
console.log(valores.push({id:2}, false, null, 'teste')) // da pra colocar varias coisas no array, mas vira uma confusao
delete valores [0] // will delete a value
// push - add value no array
// pop - remove value do array
// delete - 

const userInput = prompt("Please enter your name:");
console.log("User's name is:", userInput);
