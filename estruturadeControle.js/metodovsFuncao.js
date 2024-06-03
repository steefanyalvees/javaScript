//*Função
//  Uma função é um bloco de código projetado para realizar uma tarefa
//  específica.
//  É uma entidade independente que pode ser definida e chamada 
//  independentemente de qualquer objeto.
//  Funções podem receber argumentos, realizar operações e retornar 
//  valores.

function saudacao(nome) {
  return `Olá, ${nome}!`;
}

// Chamando a função
console.log(saudacao('Alice'));

// Método
// Um método é semelhante a uma função em termos de funcionalidade,
//  mas está associado a um objeto. 
//  Métodos são funções que pertencem a um objeto e 
//  são usados para operar sobre os dados contidos dentro do objeto.

const pessoa = {
  nome: 'Bob',
  saudar: function() {
      return `Olá, ${this.nome}!`;
  }
};

// Chamando o método
console.log(pessoa.saudar());


// podemos colocar
