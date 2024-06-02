// destructoring.js 



/** 
 * verificar onde os [] estao, para ser um array ou para ser um destructoring
 *  Exemplo ARRAY :
 * const array[1,2,3];
 * Exemplo DESTRUCTURING
 * const[a] = 10
 */

const [a] = [1] // o destructure (a) recebe  valor do array [1]
console.log(a)

const [ p1,p2,p3,p4 = 5] = [10,9,8,7,9]
console.log(p3)
// ignora o primeiro array, e o primeiro elemento do segundo array
const[,[, nota]] = [[,8,9], [2,4,6]]
console.log(nota)
