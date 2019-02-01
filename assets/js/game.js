// Declare variables
let score = 0;
let wins = 0;
let losses = 0;
let gameStatus = false;
let randomNumber = 0;

// Declare Gems
let gems = {
    blue: 0,
    navy: 0,
    teal: 0,
    purple: 0
};
console.log('gems: ', gems)

// Functions

let crystalClick = function() { 
    // If game status is true
    if (gameStatus) {
    // add value of crystal clicked to score
    let gemWord = $(this).attr("id");
    score += gems[gemWord];
    // update score view
    $('#score').html(score);
    // if score is same as randomNumber run youWin
    if (score === randomNumber) youWin();
    // if score is greater than randomNumber run youLose
    else if (score > randomNumber) youLose();
    }
}

let startGame = function() {
    // Set game status to start
    gameStatus = true;
    // assign random values to gems
    for (let i in gems) {
        gems[i] = Math.ceil(Math.random() * 8);
    }
    console.log('Gems with random values: ', gems)
    // assign players random number
    randomNumber = Math.ceil(Math.random() * 10+10);
    $('#randomNumber').html(randomNumber)
}

// Set On Click Functions
$('#startButton').on('click', startGame);
$('.crystal').on('click', crystalClick);

let youWin = function () {
wins++;
$('#wins').html(wins)
gameStatus = false;
alert('You win!');
    resetGame();
}

let youLose = function () {
losses++;
$('#losses').html(losses)
gameStatus = false;
alert('You lose!');
    resetGame();
}

let resetGame = function () {
    score = 0;
    randomNumber = '';
    $('#score').html(score)
    startGame()
}


