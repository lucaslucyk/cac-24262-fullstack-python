let persona = new Object()
persona.nombre = "John"
persona.apellido = "Doe"
persona.edad = 30
persona.dni = "12345678"

console.log(persona)


persona.nombre = "Lucas"
console.log(persona)

console.log(typeof "Lucas")
console.log(typeof persona)


// con literales

let persona2 = {
    nombre: "Lucas",
    apellido: "Doe",
    edad: 30,
    dni: "12345678"
}
console.log(persona2)

let persona3 = {
    nombre: "Lucas",
    apellido: "Doe22",
    edad: 30,

    // metodos
    saludar: function (){return `Hola soy ${persona3.nombre}, ${persona3.apellido}`},
    saludarFlecha: () => `Hola soy ${persona3.nombre}, ${persona3.apellido}`
}

console.log(persona3.saludar())
console.log(persona3.saludarFlecha())


console.log(persona.nombre)
console.log(persona["nombre"])


let attr = "apellido"
console.log(persona[attr])


// clases -- plantillas
class Persona {
    constructor(nombre, apellido, edad, dni){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.dni = dni
    }

    saludar (){
        return `Hola soy ${this.nombre}, ${this.apellido}`
    }
    saludarFlecha = () => `Hola soy ${this.nombre}, ${this.apellido}`
}

const p = new Persona("Lucas", "lucyk", 30, "12345678")
const p3 = new Persona("John", "Doe", 30, "12345678")

console.log(p3.saludar())
console.log(p)
console.log(p.nombre)

console.log(p.saludar())
console.log(p.saludarFlecha())

function PersonaFn(nombre, apellido, edad, dni){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.dni = dni

    this.saludar = () => `Hola soy ${this.nombre}, ${this.apellido}`
}

p2 = new PersonaFn("Lucas", "lucyk", 30, "12345678")
console.log(p2)




// strings
let nombreString = "Lucas"
let nombre = new String("Lucas")
console.log(typeof nombreString)
console.log(typeof nombre)

console.log(nombre, nombreString, nombreString.toString())
console.log(nombre === nombreString)
console.log(nombreString === nombre.toString())

console.log(Symbol())

// tipos de datos primitivos
// "asd" // string
// 654 // number
// true // boolean
// 2n // bigint
// undefined // undefined
// symbol // symbol
// null // object

console.log(typeof null)

// tipos de datos -- objetos

// new String()
// new Number()
// ...
// new Persona()
// {} []
// new Map() new Set()


class Persona2 {

    constructor (nombre, apellido, edad, dni){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.dni = dni
    }

    getNombre(){
        return this.nombre
    }

    getEdad(){

        return this.edad < 18 ? 0 : this.edad

        if (this.edad < 18) return 0
        return this.edad
    }
}

p5 = new Persona2("Lucas", "lucyk", 15, "12345678")
console.log(p5.getNombre())
console.log(p5.nombre)
console.log(p5.getEdad())
console.log(p5.edad)

let n = "Lucas"
function x (nombre) {
    nombre = "Otro"
}

console.log(n)
console.log(x(n))
console.log(n)


let n2 = {nombre: "Lucas"}
function x2 (persona) {
    persona.nombre = "Otro"
}

console.log(n2)
console.log(x2(n2))
console.log(n2)


