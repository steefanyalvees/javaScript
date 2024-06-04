// for in  para percorrer um array
// for in da/percorre o indice do elmento, n os valores
const notas = [6.4, 6.4, 6.7]

for(let i in notas)
  {
    console.log(i, notas[i])
  }

  const pessoa ={ 
  nome:'Anna',
  sobrenome: 'Silva'}

  for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
  }