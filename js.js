//MAPEANDO TODO O DOM
let ramdomNumber = Math.floor(Math.random()*10) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const buttonReset = document.querySelector('button');

//INICIANDO A CHECAGEM DO INPUT
let guessCount = 1;
buttonReset.style.display = 'none';

function checkGuess(){
    const userGuess = Number(guessField.value);
    if (guessField === 1) {
        guesses.textContent = 'Palpite '
    }

    guesses.textContent += userGuess + " , "; 

    if (userGuess === ramdomNumber) {
        lastResult.textContent = 'Parabens!!! Voçê acertou!!!';
        lastResult.style.background = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 5) {
        lastResult.textContent = 'GAMER OVER';
        lowOrHi.textContent = '';
        setGameOver();
    }else{
        lastResult.textContent = 'Errado';
        lastResult.style.background = 'red';
        if (userGuess < ramdomNumber) {
            lowOrHi.textContent = ' Ultimos palpites foram baixos';
        }else if( userGuess > ramdomNumber){
            lowOrHi.textContent = ' Ultimos palpites foram altos';
        }
    }

    guessCount++;
    guessField.value = " ";
    guessField;focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    buttonReset.style.display = 'block';
    buttonReset.addEventListener('click', resetGame);
}

function resetGame(){
    guessCount = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
    for (const resetPara of resetParas) {
        resetPara.textContent = " ";
    }

    guessField.disabled = false;
    guessSubmit.disabled = false;
    buttonReset.style.display = 'none';
    guessField.value = ' ';
    guessField.focus();
    lastResult.style.background = '#bec0c1';
    ramdomNumber = Math.floor(Math.random()*10) + 1;
}



