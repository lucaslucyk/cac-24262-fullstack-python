const custom = document.createElement("p")
custom.innerText = "custom"
custom.className = "custom"


function getItem(id){
    const url = `https://.../${id}`
    return fetch(url).then(res => res.json())
}

window.addEventListener("DOMContentLoaded", () => {
    
    function getter(event){
        getItem(5)
    }

    const b = document.querySelector("#sample")
    const btn = document.querySelector("#btn")
    const fn = (event) => {
        document.body.appendChild(custom)
    }

    b.addEventListener("click", (event) => {
        console.log(event)
    })

    // lo mismo que hacerlo asi
    btn.addEventListener("click", () => {getItem(5)})
})
