document.querySelector("#js-button").addEventListener("click", (event) => {
    let table = document.querySelector("#js-table")
    let newRow = table.insertRow(table.rows.length)
    let cell1 = newRow.insertCell(0)
    let cell2 = newRow.insertCell(1)

    cell1.innerHTML = "custom"
    cell2.innerHTML = "custom 2"
})