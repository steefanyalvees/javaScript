let dobro = function(a){
  return 2 * a}

  // escrevendo com o arrow function ( funcao menor)
dobro = (a) => {
  return 2*a
}

// mais reduzida, tirar os paranteses se tiver apenas um parametro 

dobro = a => 2 * a // funcao 

console.log(dobro(Math.PI))

let hi = function(){
  return 'hello'

}
// arrow
ola = () => 'hello' // ou tbm
ola = _ =>' hello'

console.log(hi(), ola())