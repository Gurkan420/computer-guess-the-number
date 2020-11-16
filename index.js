let minGuess = 0
let maxGuess = 100
let guess


// 4. Avkommentera den sista raden i funktionen `start`. Det är ett exempel på **string interpolation**.


document.getElementById('too-high-btn').addEventListener("click", function () {
    maxGuess = guess
    guess = Math.floor((minGuess + maxGuess) / 2)
    setMessage(`Is it ${guess}?`)

})
document.getElementById("is-correct-btn").addEventListener("click", function () {
    setMessage("WOHOOOOOOOOOo")
})

document.getElementById("too-low-btn").addEventListener("click", function () {
    minGuess = guess
    guess = Math.floor((minGuess + maxGuess) / 2)
    setMessage(`Is it ${guess}?`)
})


function setMessage(msg) {
    document.getElementById('message').innerText = msg
}

function start() {
    document.getElementById('before-start').style.display = 'none'
    document.querySelector('main').style.display = 'block'


    setMessage(`Is it ${guess}?`)
}
document
    .getElementById('start-btn')
    .addEventListener('click', start)
    
    guess = 50
setMessage()


