'use strict';
// unique number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '😒 no number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = ' 🦄 correct number';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'to high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost';
    }
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '   to low';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
