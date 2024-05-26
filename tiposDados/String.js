const schoolNames = 'Adalberto Nascimento'
console.log(schoolNames.charAt(4)) // para printar a letra especifica
console.log(schoolNames.charCodeAt(2))// n pega o proprio valor, pega o valor da tablea unicode// codigo da table html
console.log(schoolNames.indexOf('3')) // da pra saber qual digitio esta dentro da tabela
console.log(schoolNames.substring(1)) // vai mostrar a partir da letra 1 ate o final
console.log(schoolNames.substring(0, 3))// vai mostrar o 0 ao 3 caracteris
console.log(schoolNames.replace(2, 's'))
console.log('Names: '.concat(schoolNames).concat('!!'))

// Array 
console.log('Ste, Jeni,Thi,Le,Deh'.split(',')) // usamos split para dividir o array entre as virgulas