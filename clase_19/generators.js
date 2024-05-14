
const words = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit"]

function randomWord(n) {
    let randomWords = []
    for (let i = 0; i < n; i++) {
        randomWords.push(words[Math.floor(Math.random() * words.length)])
    }
    return randomWords
}

function* randomWords(n) {
    for (let i = 0; i < n; i++) {
        yield words[Math.floor(Math.random() * words.length)]
    }
}


document.querySelector("#js-button").addEventListener("click", (event) => {
    let table = document.querySelector("#js-table")
    let newRow = table.insertRow(table.rows.length)
    let cell1 = newRow.insertCell(0)
    let cell2 = newRow.insertCell(1)


    let generador = randomWords(5)
    let rnd = Array.from(generador)

    let resultado = rnd.join(" ")

    cell1.innerHTML = randomWord(2)
    cell2.innerHTML = resultado
})