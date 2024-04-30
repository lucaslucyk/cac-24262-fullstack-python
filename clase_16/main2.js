// comparaciones de objetos

class Perro {

    constructor (nombre, raza, color){
        this.nombre = nombre
        this.raza = raza
        this.color = color
    }

    ladar(){
        console.log(`${this.nombre} dice guau`)
    }

    equalsTo(otroPerro){
        return this.raza === otroPerro.raza && this.color === otroPerro.color
    }
}

const p1 = new Perro("Lucas", "pastor aleman", "negro")
const p2 = new Perro("Firu", "pastor aleman", "negro")


console.log(p1 === p2)
console.log(p1.equalsTo(p2))

console.log(p2.equalsTo(p1))

