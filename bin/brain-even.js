#!/usr/bin/env node
import readlineSync from 'readline-sync';

const targetAmountCorrectAnswers = 3;
let userAmountCorrectAnswers = 0;
let randomNumber = 0;
const maxRandomNumber = 100;
let correctAnswer;
let playerAnswer;

const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let index = 0; index < targetAmountCorrectAnswers; index += 1) {
  randomNumber = Math.floor(Math.random() * maxRandomNumber + 1);

  if (randomNumber % 2 === 0) {
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
