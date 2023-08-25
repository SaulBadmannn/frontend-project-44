#!/usr/bin/env node
import readlineSync from 'readline-sync';

const targetAmountCorrectAnswers = 3;
let userAmountCorrectAnswers = 0;
let randomNumber = 0;
const maxRandomNumber = 20;
const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19];
let correctAnswer;
let playerAnswer;

const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

for (let index = 0; index < targetAmountCorrectAnswers; index += 1) {
  randomNumber = Math.floor(Math.random() * maxRandomNumber + 1);

  if (primeNumbers.includes(randomNumber)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  console.log(`Question: ${randomNumber}`);
  playerAnswer = readlineSync.question('Your answer: ');

  if (playerAnswer === correctAnswer) {
    console.log('Correct!');
    userAmountCorrectAnswers += 1;
  } else {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`);
    break;
  }
}

if (userAmountCorrectAnswers === targetAmountCorrectAnswers) {
  console.log(`Congratulations, ${playerName}!`);
}
