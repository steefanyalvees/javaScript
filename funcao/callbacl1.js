// callback e passar uma funcao, e essa funcao sera chamada quando um evento acontecer
// passsa a funcao e ele chama de volta. toda vez que um evento acontecer 

const brands = [' ford', 'mercades', 'fiat']
function show(name,indice){
  console.log(`${indice+1}.${name}`)
}
brands.forEach(show)


// sem callback 

const grades = [2.2,2.6,4.6,7.7,9.9]
let notasBaixas = [] //array vazio  {
  for ( let i in notas) // em cima das notas
  {
  if (notasBaixas < 7.0){
    notasBaixas.push(notas[i])
  }
  }
console.log(notasBaixas)

//com callback - bem mias facil,sem precisar usar for or criar 2 arrays 
const notasBaixas2 = notas.filter(function (nota)
{
  return nota <7
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota<7)
console.log(notasBaixas)
