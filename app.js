
//group p1,p2 in an object
const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
//get the winnig score that the user chose
const winningScoreSelect = document.querySelector('#playto');
//initialize a variable that the winning score starts from 3, incase the user doesn't change the winscore
//the winningScore changes in the function when the winningSelector is clicked
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            //has-text-success is from Bulma that gives color green
            //has-text-danger is from Bulma that gives color red
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');

            //make the buttons disabled when the game is over
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

//when p1 or p2 is clicked, call function updateScores
p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})

winningScoreSelect.addEventListener('change', function () {
    //parseInt geting number out of a string
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        //has-text-success color green, text-danger color red
        p.display.classList.remove('has-text-success', 'has-text-danger');

        //make the button un disable again to start new gamme
        p.button.disabled = false;
    }
}
