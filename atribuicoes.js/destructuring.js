//tirar elemtnos de um array ou um object {} object// [] array
// tirar algo da estrutu
// es2015 
const car = {  // obj carro aqui 
  color : 'blue',
  marca : ' fordy', 
  price : {
    brazilPrice: 50.000,
    irelandPrice: 10.000
  }}

  console.log(car.color)
  // usando outro recurso ao inves de car.color
  const {marca,price} = car // chaves para representar o destrucuting// o que tirar
  // tire de dentro da estrutura (car) a marca e o price
  console.log( marca,price)

  //EXTRAIA DO OBJTO CARRO E ARMAZENE NAS VARIAVEIS M AND P
  // USAMOS {} PARA MOSTRAR Q E UM DESTRUCTURING
  const { marca : m, price : p} = car
  console.log(m,p)




  let person = {
    name:' stefany',
    age: 22,
    address : {
      numberHouse : 20,
      apartmentBlock : 3,
    }

  }

  //console.log(numberHouse) // n sera mostrado pq let doent let us 

