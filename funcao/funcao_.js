// uma funcao em javascript e como se fosse uma classe em java 

function Carro(speed = 200, delta = 5){
  let speedToday = 0 //aqui o atributo esta privado


this.acelerar = function(){ //metodo esta publico
    if(speedToday + delta <= speed){
      speedToday += delta 
  }
}}

//se quiseremos criar umm atributo privado, nosfazemos isso com o
//let or var or const, para variavel usar (let)

// se quisermos  que algo seja visiel fora da funcao, usar o this 

//instanciado o objecto
const uno = new Carro
uno.speed()
console.log(uno.speedToday)
