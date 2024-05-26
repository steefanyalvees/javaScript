// em javascript ele aveita verdadeiro ou falso, porem tem outros tipos tbm 
let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //in this case duas negacoes sao verdadedeira ( - + -= +)
// resultado posivito

isAtivo = 1
console.log(!isAtivo) // nesse o resultado com uma negacao sera falso

// tipos de verdadeiros

console.log('os verdadeiros')
console.log( !!3)
console.log(!!-1)
console.log(!!' ')
console.log(!! 'texto')
console.log(!![]) //array
console.log(!!Infinity)
console.log(!!(isAtivo = true))
// all would be declared as true)

console.log('os falsos')
console.log( !!0)
console.log(!!'') // string vazia e falso
console.log(!!null)
console.log(!!NaN) // no a number
console.log(!!undefined)
console.log(!!(isAtivo = false))

// se uma das expressoes for verdadeiro, vai retornar o primeiro valor 
// verdadeiro 

console.log(!!(''| null | 0 || ' hello')) // true 
