'use strict';

// storing element in variable

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0Ele = document.querySelector('#score--0');
const score1Ele = document.querySelector('#score--1');
const diceImgEle = document.querySelector('.dice');
const newGameBtn = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdScoreBtn = document.querySelector('.btn--hold');
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');
// starting condition

score0Ele.textContent = 0;
score1Ele.textContent = 0;
diceImgEle.classList.add('hidden');
let scores = [0, 1];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// switch player function
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// rolling dice code
// onclick of dice btn execute the follwing step
rollDiceBtn.addEventListener('click', function () {
  if (playing) {
    //step 1 Generate the random number between 1-6
    const diceNumber = Math.trunc(Math.random() * 6 + 1);
    console.log(diceNumber);
    // step 2 Display the generated number of dice
    diceImgEle.classList.remove('hidden');
    diceImgEle.src = `dice-${diceNumber}.png`;
    // step 3 if the number is 1
    if (diceNumber !== 1) {
      // add dice number to current score

      currentScore += diceNumber; // currentScore = currentScore + diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;

      // currentScore0El.textContent = currentScore;
    } else {
      // switch to another player
      switchPlayer();
    }
  }
});

// hold button click code
holdScoreBtn.addEventListener('click', function () {
  if (playing) {
    // add the current score to main score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;
      diceImgEle.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
  //check if the score is >= 100 then it is winner
  // switch to other player
});
newGameBtn.addEventListener('click', function () {
  location.reload();
});
