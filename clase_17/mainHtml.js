console.log("hola")

document.getElementById('text').innerHTML = 'hola mundo'



if(typeof Storage !== undefined){
    
    let value = localStorage.getItem('persona1')
    if (value !== null){
        document.getElementById('text').innerHTML = value
    }
    document.getElementById('text').innerHTML = value ? value : 'no hay valor'

    localStorage.setItem('persona1', 'Lucas')
}


