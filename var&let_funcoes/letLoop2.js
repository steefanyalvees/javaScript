const funcs = [] //array vazio
for(let i = 0; i<5; i++)
  {funcs.push(function()
  {

    console.log(i)
  })

  }  //funcao sabe o local onde ela foi definida(nesse caso)

  funcs [2]()  //position array. aqui ele lembra onde esta a position
  funcs [3]()