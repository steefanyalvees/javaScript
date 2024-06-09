// gerar valor padrao

function soma1(a,b,c)
{
  a = a || 1
  b = b || 1
  c = c || 1
  return a+b+c
}

console.log(soma1(), soma1(3), soma1(1,1))

/** valor pasao do es2015, bem mais facil de digitar */

function soma2(a=1, b=2,c=3)
{
  return a +b +c 
}
console.log(soma2(soma2(1,1), soma2(2,1), soma2(0,0,0)))