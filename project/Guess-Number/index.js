let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessFeild")
const guessSlot = document.querySelector(".guesses")
const remaing = document.querySelector(".lastResult")
const lowOrHiValue = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement("p");

let prevGuess = []
let numGuss = 1
let playGame = true

if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);//user input value ly ni k liye parseInt kiya
        validateGuess(guess); // pasy kr diya guess number ko validateGuess function me
    });
}


// add validation to the input field
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a number between 1 and 100")
    } else if (guess < 1) {
        alert("Please enter a number more than 1")
    }
    else if (guess > 100) {
        alert("Please enter less than 100")
    }else{
        prevGuess.push(guess)
        // check game over condition
        if (numGuss === 11 ) {
           displayGuess(guess)
           displayMessage(`Game Over. Random number was ${randomNumber}`)
           endGame() // game end ho gya
        }else {
            displayGuess(guess)
            checkGuess(guess)

        }
    }
 }


function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`Congratulations! You got it right!`)
        endGame()
    }else if (guess < randomNumber) {
        displayMessage(`Number is too low`)
    }else if (guess > randomNumber) {
        displayMessage(`Number is too high`)
    }
}

function displayGuess(guess) {
    userInput.value = "" // userValye ko clear krne k liye
    guessSlot.innerHTML += `${guess}` // guess value add kr ty ja ay gy 
    numGuss++;// add value to numGuss
    remaing.innerHTML = `${11 - numGuss} guesses left` // remaining guesses ko update krne k liye
}


function displayMessage(message) {
lowOrHiValue.innerHTML = `<h2>${message}</h2>`
}


function endGame() {
    userInput.value = "" // value ko clear krne k liye
    userInput.setAttribute("disabled", '')// userInput ko disable krne k liye
    p.classList.add("button")
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`//add new game button
    startOver.appendChild(p)
    playGame = false
    newGame()
}


function newGame() {
  const newGameButton =  document.querySelector("#newGame")
  newGameButton.addEventListener("click", function () {
    randomNumberand = parseInt(Math.random() * 100 + 1);
    // random number ko reset krne k liye 
    prevGuess = []
    numGuss = 1
    guessSlot.innerHTML = ""
    // remaing guesses ko reset krne k liye
    remaing.innerHTML = `${11 - numGuss} guesses left`
    userInput.removeAttribute("disabled") // remove disable from userInput
    startOver.removeChild(p)// remove new game button
    lowOrHiValue.innerHTML = `<h2>Start guessing...</h2>`
    playGame = true
  })

}