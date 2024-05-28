/* ao contrario da const, o let nao ignora as chaves
*/

let numero = 1
{
  let numero = 2
  console.log('dentro =', numero)
}

console.log('fora=', numero)

// vai printr dois valores diferentes, pq um esta lendo o bloco separados
// por chaves, e o outro fora do bloco 

/* variaveis definidas com a funca VAR tem scoop global, e scoop de funcao
* variaveis definidas com let, tem scoop global, funcao e de bloco. 
um scoop a mais */
