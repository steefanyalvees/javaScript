//como programar com javaScript
//run timer
//back end - node
//front end - browser, html,css
// dentro de node todo arquivo e um modulo

let a = 123 //local
global.b = 123 // global
this.c = 456

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c) // msm que o this

// mais commum usar isso aqui em node, instead of this
// module.exports = {e:22, f:false, g:'test'}

