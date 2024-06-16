const pessoa = {
 nome: 'Joao',
 age:22,
  speak(){ 
    console.log(this.nome)
    console.log(pessoa.nome)
    //obecjt

  }}
  pessoa.speak() //chamando a funcao

  // bind 
  /**
   *  passamos um objecto no qaul que querremos ser resolvido o des
   */

  const talk = pessoa.speak.bind(pessoa)// sempre o this sera resolvido para pessoa
talk() //chamando a funcao

