/* quando trabalhamos com tipos primitivos em javascript,
cada valor tem seu valor, sao independetes
ja com objetos, que a atribuicao e feia por referencia 
*/
let valor
console.log(valor) // variavel foi declarada mas n foi inicializada * undefined
console.log(valor2) // nao foi nem declarada * is not defined 

// null - nao tem valor, nem espaco na memoria 
valor = null // aqui esta inicializada, mas n apontando para nenhum lugar de memoria.
// null e tipo para apagar o endereco de memoria da variavel, mas ela esta declarada 

const produto = {}
console.log(produto.preco) // nesse caso o preco nao esta definido
console.log(produto.preco.a) // nesse caso a esta ligado a  preco ( que nao esta declarado)
