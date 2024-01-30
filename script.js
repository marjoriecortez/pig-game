'use strict';

// Declaration
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const rollBtn = document.querySelector('.btn--roll');
const diceEl = document.querySelector('.dice');

// Initial Values
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden');

// Switch Player Function
const switchPlayer = function () {};

rollBtn.addEventListener('click', function () {
  // Random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
});
