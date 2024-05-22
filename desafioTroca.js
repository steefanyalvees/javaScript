let a = 1;
let b = 2;
// in order to 
// a = b;  wont work 
// b = a;



// trocar valores variaveis, criamos uma terceira variavel para armazenar temporariamente

let temporariaVariavel = a;
a = b; // aqui o a vale 94
b = temporariaVariavel; // o b, pega o valor da var temporario ( 7)

console.log( a,b)

//outra froma de trocar
[a,b] = [b,a]