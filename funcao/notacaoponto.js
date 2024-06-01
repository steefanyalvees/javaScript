//anotacao ponto accessa os membros

console.log(Math.ceil(6.1)) //ponto para acessar uma funcao definida no objeto
//objcto nesse caso e math
const obj1  = {} //criando contante
// duas formas de declarar//
obj1.nome = 'bola' //ponto para acessar o objecto
obj1 ['nome'] = ' bola2' // mais flexivel
console.log(obj1.nome)

 // .. anotacao ponto//  criar um atributo dentro do objecto
 // ele cria automaticamente msm sem declarar anterioramente.

 // exemplo com a funcao

 function Obj(nome)
 {
   this.nome = nome // ficara publico esse atributo//

 }