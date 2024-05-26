const nome = 'Rebeca'
const age = '12'
const address = 'Brazil'
//concatenacao

console.log( nome + age + address)

/* nao podemos ter quebra de linha dentro de uma string
* mas e possivel fazer isso no template String 
exemplo bellow */ 

// nesse exemplo, ele vai mostrar todas as linhas puladas, espacos
const template = ` 
 Hello 
 ${nome} 
 e
  linda

`
console.log(template)

const birthday = 'Wednesday'

const name = `
her bday is on ${birthday}, 
we are happpy for her
we love her
 happy 
 ${birthday}
`
console.log(name)

const count = ('Lets count together')
const numb = ` ${count }
1
2
3
4
5
6
7
8
9`

console.log (numb)

///// expresoes//

console.log(`1+1= ${1 +1}`)
// expressoes comecam com $ 

const up = text => text.toUpperCase()
console.log(`Eii.. ${up('cuidado')}`)