{
  {
    {
      {
        var what = 'what??'}  //scoop
      }
    }
  } // dentro de blocos de codigos 
  console.log(what) // ate fora do bloco, a variavel var conseguimos deixar visivel

  function test(){
    var local = 123
  }

  // test(local) // nao conseguimos chamar essa variavel  
  /*nao estara visivel fora da funcao 
  * quand criamos uma variavel fora de uma funcao, essa variavel e publica, 
  *ou seja qaulquer um pode mudar o valor, nao e bom
  * var sao global, ou em um scoop de funcao ( que so sera visivel dentro da funcao)
  */

  var numb1 = 1  //pq e um bloco de codigo, nos ainda pormos ver tudo
  {
    var numb1 = 2  // subscreve from 1 to 2
    console.log('dentro=', numb1)
  }

  console.log('fora=', numb1)