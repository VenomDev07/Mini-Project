let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#sub-btn');
const userinput = document.querySelector('#guessNum');
const prevGuess = document.querySelector('#guessCount');
const remGuess = document.querySelector('#remGuess');
const lowOrHigh = document.querySelector('#LowOrHigh');
const startOver = document.querySelector('#result');

const p = document.createElement('p');

let playGame = true;
let guesses = [];
let numGuess = 1;

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess = parseInt(userinput.value);
        validateGuess(guess)
        console.log(guess);
        
    })
}

function validateGuess(guess){
    if(guess <= 0 || guess > 100 || isNaN(guess)){
        alert('Please Enter a Valid Number');
    }
    else{
        guesses.push(guess);
        if(numGuess > 10){
            displayGuess(guess);
            displayMessage(`GAME OVER. Random Number was ${randomNum}`)
            endGame();
        }
        else{
            checkGuess(guess);
            displayGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNum){
        displayMessage(`You Guessed it Right 🥳`)
    }
    else if(guess < randomNum){
        displayMessage(`Toooo Low`);
    }
    else if(guess > randomNum){
        displayMessage(`Toooo High`)
    }
}

function displayGuess(guess){
    userinput.value = '';
    prevGuess.innerHTML += `${guess},`
    numGuess++;
    remGuess.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHigh.textContent = message;
}

function endGame(){
    userinput.value = '';
    userinput.setAttribute('disabled','');
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click',(e)=>{
        randomNum = parseInt(Math.random() * 100 + 1);
        guesses = []
        prevGuess.innerHTML = '';
        remGuess.innerHTML = `${11 - numGuess}`;
        numGuess = 1;
        userinput.removeAttribute('disabled');
        startOver.removeChild(p);
        lowOrHigh = '';
        playGame = true;
    })
}