'use strict';

class Game {
  constructor() {
    this.userScore = 0;
    this.computerScore = 0;
  }

  computerPlay() {
    let randIntComputerMove = Math.floor(Math.random() * 3);
    let moves = ['rock', 'paper', 'scissors'];
    return moves[randIntComputerMove];
  }

  userPlay() {
    return prompt('rock, paper, or scissors?').toLowerCase();
  }

  playRound() {
    const userPlay = this.userPlay();
    const computerPlay = this.computerPlay();
    console.log(
      `The user played ${userPlay}, the computer played ${computerPlay}`
    );
    if (userPlay === computerPlay) return 'draw';
    if (userPlay === 'rock' && computerPlay === 'paper') return 'computer';
    if (userPlay === 'rock' && computerPlay === 'scissors') return 'user';
    if (userPlay === 'paper' && computerPlay === 'scissors') return 'computer';
    if (userPlay === 'paper' && computerPlay === 'rock') return 'user';
    if (userPlay === 'scissors' && computerPlay === 'rock') return 'computer';
    if (userPlay === 'scissors' && computerPlay === 'paper') return 'user';
  }

  reportScore() {
    console.log(
      `The user has ${this.userScore} points and the computer has ${this.computerScore} points!`
    );
  }

  newGame() {
    this.userScore = 0;
    this.computerScore = 0;

    let numRounds = 5;
    for (let i = 0; i < numRounds; i++) {
      let winner = this.playRound();
      if (winner === 'draw') {
        console.log('This is a draw!');
        numRounds++;
      }
      if (winner === 'computer') {
        this.computerScore++;
        console.log('The computer won this round!');
      }
      if (winner === 'user') {
        this.userScore++;
        console.log('The user won this round!');
      }
      this.reportScore();
    }
    if (this.userScore > this.computerScore)
      console.log('The user wins the match!');
    if (this.computerScore > this.userScore)
      console.log('The computer wins the match!');
  }
}

let game = new Game();

const btnNewGame = document.querySelector('.new__game');
btnNewGame.addEventListener('click', function () {
  game.newGame();
});
