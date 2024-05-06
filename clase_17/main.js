let personas = ["Lucas", "John", "Maria"]
let p = new Array("Lucas", "John", "Maria")


console.log(personas)
console.log(p)

console.log(personas === p)



// para acceder

console.log(personas[2])
console.log(p.length)
console.log(personas[3])

personas[0] = "Mario"
personas

personas[3] = "Luigi"
personas


// recorrer array

for (let i = 0; i < personas.length; i++) {
    console.log(i, personas[i])
}

// tambien con while
let x = 0
while (x < personas.length) {
    console.log(x, personas[x])
    x++
}

// for of
for (let persona of personas) {
    console.log(persona)
}


// modicar array

// push -> agregar elemento al final de una lista
// pop -> eliminar el ultimo elemento de una lista
// shift -> eliminar el primer elemento
// unshift -> agregar un elemento al principio

p
p.push("Luigi")
p

p.pop()
p

p.unshift("Mario")
p

p.shift()
p

personas
p

console.log(personas.concat(p))



// copiar y modificar

let sample = [1,2,3,4,5,6,7,8,9,10]
let copy = sample


console.log(sample)
console.log(copy)


copy[0] = 100
console.log(copy)
console.log(sample)


sample[1] = 200
console.log(copy)
console.log(sample)


// clonar con slice
let s2 = sample.slice()
let s3 = sample.slice(0, 5)
console.log(s2)
console.log(s3)

console.log(sample)
console.log(s2)

s2[4] = 500
console.log(sample)
console.log(s2)


// slice

let n = [1,2,3,4,5,6,7,8,9,10, 101, 102]
n.splice(3, 0, 500)

console.log(n)
n.sort()
console.log(n)

// ordenar
let n2 = [1,2,7,4,8,6]
console.log(n2)



n2.sort()
console.log(n2)

n2.reverse()
console.log(n2)


let names = ["Lucas", "Juan", "Mario"]
names.sort()
console.log(names)


let numbers = new Array(1,2,3,4,5,6,7,3,8,9,10, 101, 102)
numbers.sort()
console.log(numbers)


// filtros, busquedas y modificaciones

// filter
// find
// map

function esPar(n){
    return n % 2 === 0
}

console.log(numbers.filter(esPar))

console.log(numbers.filter(function (n){
    return n % 2 !== 0
}))

console.log(numbers.filter(n => n > 100))


console.log(numbers.find(n => n === 3))


const perso = [{
    name: "Lucas",
    age: 30
},{
    name: "Juan",
    age: 20
}, {
    name: "Lucas",
    age: 10
}]

console.log(perso.find(p => p.name === "Lucas"))

console.log(perso.map(p => p.age * 2))
console.log(perso)


