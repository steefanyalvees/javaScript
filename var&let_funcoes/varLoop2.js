const func = []
for(var i =o; i<4; i++)
  {
    func.push(function()
      {
        console.log(i) //looping 

      }
    )

  }

  func[2]() // fora do loop
  func[8]()
/*
nesse contexto a func sera = 10, e como se a var  nao lembrasse
do valor na hora que o loop parou de ser executado, etnao n retorna o valor
de 2 e 8 e sim o valor total 10
*/