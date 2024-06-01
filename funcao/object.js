//obejct colecao de chave e valor
const year = '2022' // contexto lexico 1 {onde a variavel esta definida, fisico: broswer,file}

function exec(){ // funcao 
    const year = '2024' // const dentro da funcao = context lexico 2
    return year

}

//objetos sao grupos aninhados de pares nome/valor
const client = {
  nome:'stefany', //obecto 
  idade: 33,
}