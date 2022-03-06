'use strict';

class Game {
  constructor() {
    this.userScore = 0;
    this.computerScore = 0;
    this.scoreBoardText = '';
  }

  computerPlay() {
    let randIntComputerMove = Math.floor(Math.random() * 3);
    let moves = ['rock', 'paper', 'scissors'];
    return moves[randIntComputerMove];
  }

  playRound(userPlay) {
    const computerPlay = this.computerPlay();
    let winner;
    this.scoreBoardText = `The user played ${userPlay}, the computer played ${computerPlay}`;
    if (userPlay === computerPlay) return 'draw';
    if (userPlay === 'rock' && computerPlay === 'paper') winner = 'computer';
    if (userPlay === 'rock' && computerPlay === 'scissors') winner = 'user';
    if (userPlay === 'paper' && computerPlay === 'scissors')
      winner = 'computer';
    if (userPlay === 'paper' && computerPlay === 'rock') winner = 'user';
    if (userPlay === 'scissors' && computerPlay === 'rock') winner = 'computer';
    if (userPlay === 'scissors' && computerPlay === 'paper') winner = 'user';

    this.updateBoard(winner);
  }

  reportScore() {
    scoreBoard.innerHTML = `${this.scoreBoardText} The user has ${this.userScore} points and the computer has ${this.computerScore} points!`;
  }

  updateBoard(winner) {
    if (winner === 'draw') {
      this.scoreBoardText += `. This is a draw!`;
    }
    if (winner === 'computer') {
      this.computerScore++;
      this.scoreBoardText += `. The computer won this round!`;
    }
    if (winner === 'user') {
      this.userScore++;
      this.scoreBoardText += '. The user won this round!';
    }
    this.reportScore();

    // if (this.userScore > this.computerScore)
    //   console.log('The user wins the match!');
    // if (this.computerScore > this.userScore)
    //   console.log('The computer wins the match!');
  }

  resetGame() {
    this.userScore = 0;
    this.computerScore = 0;
    scoreBoard.innerHTML = 'New Game!';
  }
}

let game = new Game();

const btnNewGame = document.querySelector('.new__game');
const btnRock = document.querySelector('.btn__rock');
const btnPaper = document.querySelector('.btn__paper');
const btnScissors = document.querySelector('.btn__scissors');
const scoreBoard = document.querySelector('.scoreboard');

btnNewGame.addEventListener('click', function () {
  game.resetGame();
});
btnRock.addEventListener('click', function () {
  game.playRound('rock');
});
btnPaper.addEventListener('click', function () {
  game.playRound('paper');
});
btnScissors.addEventListener('click', function () {
  game.playRound('scissors');
});
