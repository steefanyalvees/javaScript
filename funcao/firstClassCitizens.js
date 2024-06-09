/* funcao em JS e chamado de cidadao de primeira class 
* higer order function. pode ser tratada como um dado 
* pode te ter uma funcao dentro dela
* linguagem multiparadigrama (oo, function)
*/

/* declarar em forma literal */

function fun1(){ // parametros 
  // declara smt, se n declararmos nd, vem como undefined, bloco obrigatorio

}

/**
 * armazenar de forma de variavel, const and let  */
const fun2 = function(){  // variavel const fun2

}
 /**
  * podemos armazenar uma funcao tbm dentro de um array
  */
const array= [function(a,b){ return a+b}, fun1,fun2]
console.log(array[0][2])

/**
 * tbm podemos armazenar dentro de um object
 * 
 */
const obj = {}
  obj.speak = function(){return 'Yep'}

  /**
   * funcao para outra funcao, funcao como parametro
   */
function run(fun) {
  fun()
}// chamando a funcao

run(function(){
  console.log('executing')
}) /// passando essa funcao como parametro

function classroom(classmates) {
 console.log (classmates.name, classmates.lastName)}

 const classmates = { // definindo o objeto
  name :'Stefany',
  lastName :'Alves'
 }
  classroom(classmates); // Chame a função e passe o objeto como argumento




  /**
   * ememplo de fazer uma funcao 3
   */


  const carr = { //criradno um objeto
    carrBrand: ('Fordy'),
    carrYear: 2022,
    carrColor:('Black'),
    carrPrice : 80.0
  }
  
  
  function myCar(carr){

    console.log(' this is my dream car ' + carr.carrYear)
  }
  myCar(carr) // envocando a funcao 

/**
 * funcao que recebe outra funcao e retorna
 */
function add (a,b){
{
    return function (c)
      {
        console.log(a+b+c)
      }

}}
add(2,3)(2)