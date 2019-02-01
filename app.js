const puzzleEl = document.querySelector('#word');
const guessesEl = document.querySelector('#status')
let game1;
window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess)
    renderHangman()
})

const renderHangman = () => {
    puzzleEl.textContent = '';
    guessesEl.textContent = game1.statusMessage;

    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span');
        letterEl.textContent = letter;
        puzzleEl.appendChild(letterEl)
    })
}


const startGame = async () => {
    const puzzle = await getPuzzle('2');
    game1 = new Hangman(puzzle, 5)
    renderHangman()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()