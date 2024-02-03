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
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');

// Initial Values
let scores, currentScore, activePlayer, playing;

const initial = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  diceEl.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};

// declare function on global
initial();

// Switch Player Function
const switchPlayer = function () {
  // Current score should be zero
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;

  // if player is 0, switch to 1, vice versa
  activePlayer = activePlayer === 0 ? 1 : 0;

  // Only one at a time can be the active player
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

// Roll button
rollBtn.addEventListener('click', function () {
  if (playing) {
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
  }
});

// Hold Button
holdBtn.addEventListener('click', function () {
  if (playing) {
    // current score will add to global score
    scores[activePlayer] += currentScore;

    // display the overall score on the global score
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // if score is >= 100, active player is the winner, else, switch player
    if (scores[activePlayer] >= 100) {
      // finish gane
      playing = false;

      // player winner
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      // remove player active
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      // hide dice display
      diceEl.classList.add('hidden');
    }

    // If global score is not 100, switch player
    else {
      switchPlayer();
    }
  }
});

// New Game button
newBtn.addEventListener('click', function () {
  initial();
});
