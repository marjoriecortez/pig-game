'use strict';

// Declaration
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');

const diceEl = document.querySelector('.dice');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');

const rollBtn = document.querySelector('.btn--roll');

// Initial Values
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden');

// Switch Player Function
const switchPlayer = function () {
  player0.classList.toggle('.player--active');
  player1.classList.toggle('.player--active');
};

rollBtn.addEventListener('click', function () {
  // Random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // Display Dice Roll
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // if not rolled 1, add dice numbers every roll and display to current score
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
  // if rolled 1, switch player
  else {
    switchPlayer();
  }
});
