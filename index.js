const MAX_NUMBER = 100
const MIN_NUMBER = 0

let guess

// 4. Avkommentera den sista raden i funktionen `start`. Det är ett exempel på **string interpolation**.


document.getElementById('too-high-btn').addEventListener("click", function () {
    
setMessage(`Is it ${guess = guess -1}?`)

})
document.getElementById("is-correct-btn").addEventListener("click", function () {
    setMessage("WOHOOOOOOOOOo")
})

document.getElementById("too-low-btn").addEventListener("click", function () {
    setMessage(`Is it ${guess++}?`)
    
})


function setMessage(msg) {
    document.getElementById('message').innerText = msg
}

function start() {
    document.getElementById('before-start').style.display = 'none'
    document.querySelector('main').style.display = 'block'

    guess = 0

    setMessage(`Is it ${guess}?`)
}
document
    .getElementById('start-btn')
    .addEventListener('click', start)
    
    
setMessage()


