// this dentro de um a funcao arrow ele e fixo 
function Pessoa()
  {
 this.idade = 9

 setInterval(()=> {
  this.idade++
  console.log(this.idade)
 }, 1000 // a cada um segundo
 
  )}

  new Pessoa()
 