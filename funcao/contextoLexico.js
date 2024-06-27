/**
 * contexto lexico, closure
 * contexto como as coisas sao declaradas dentro a linguagem
 * 
 *  */ 
const valor = 'valorGlobal' // vai achar primeiro esse 

function minhaFuncao(){
   console.log(valor) // n esse, mesmo que foi definido perto do funcao
}

function exec()
{
  const valor= 'local'
  minhaFuncao()
}

exec()

/**
 * nesse caso a funcao mostrar primeiro o valor global (como passados)
 * mesmo que o valor foi atribuido dentro dentro da funcao
 * 
 */