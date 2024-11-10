function getRandomChoice() {
    let choices = ["snake", "water", "gun"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if ((playerChoice === "snake" && computerChoice === "water") ||
        (playerChoice === "water" && computerChoice === "gun") ||
        (playerChoice === "gun" && computerChoice === "snake")) {
        return "Player wins!";
    } else {
        return "Computer wins!";
    }
}

function startGame() {
    document.getElementById('start').style.display = 'none';
    document.getElementById('ply').style.display = 'block';
    document.getElementById('endOptions').style.display = 'none';
    document.getElementById('result').innerText = '';
}

function choose(playerChoice) {
    document.getElementById('result').innerText = 'Waiting for result...';
    setTimeout(() => {
        let computerChoice = getRandomChoice();
        let result = determineWinner(playerChoice, computerChoice);
        document.getElementById('result').innerText = `Player chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
        document.getElementById('endOptions').style.display = 'block';
    }, 1000);
}

function playAgain() {
    document.getElementById('result').innerText = '';
    document.getElementById('endOptions').style.display = 'none';
}

function exitGame() {
    document.getElementById('ply').style.display = 'none';
}