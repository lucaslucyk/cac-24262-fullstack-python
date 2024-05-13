let edad = 25;
const nombre = "Lucas"
var ciudad = "Madrid";

//let 6variable = 3; // SyntaxError: No se puede iniciar una variable con un número

function saludar(nombre) {
    console.log(`Hola ${nombre}!`)
}
saludar("Lucas")

const saludo = (persona) => `Hola ${persona}!`
console.log(saludo("John"))

// arrays

let nombres = ["Lucas", "John", "Maria"]
let ns = new Array("Lucas", "John", "Maria")

console.log(nombres)
console.log(ns)

nombres.push("Doe")
console.log(nombres)

nombres.pop()
console.log(nombres)

let numbers = [1,2,3,4,5,6]

let duplicar = numbers.map(n => n * 2)
console.log(duplicar)

let filtrar = numbers.filter(n => n > 3)
console.log(filtrar)

const log = n => {console.log(n)}
duplicar.forEach(log)

let suma = numbers.reduce((acum, numero) => acum + numero, 0)
console.log(suma)


let num = 123
console.log(typeof num.toString())

let n = "5"
console.log(n + 10)
console.log(typeof n)

let entero = parseInt(n)
console.log(typeof entero)
console.log(entero + 10)

let flotante = parseFloat("30.7")
console.log(typeof flotante)

