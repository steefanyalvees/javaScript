function rand ({ min = 0, max=1000}) // funcao que retorna um numero aleatorio
// operador destructuring ({})
//*ao inves de usar o ob.min, ob.max, ele ja vai tirar direto do objeto
// usando um structuring

{
  const valor = Math.random() * (max- min) + min
  return Math.floor(valor)
}
//chamando/ usando um objeceto 

const obj = {max:50,min:40}
console.log(rand(obj))
console.log(rand({min:955}))
