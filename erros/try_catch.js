//erros try and catch

function pegarErro(erro)
{ 
  throw  ('10')}  //lancando esse error na tela

function imprimirName (obj)
{
  try{ // pegar o erro
  console.log(obj.name.toUpperCase())
  } catch (e){
    pegarErro(e)
  } finally {  //sempre executado 
    console.log('final') 
  }

  }
  const obj = {nome:'stefany'}
  imprimirName(obj)

  