#!/usr/bin/env node
import readlineSync from 'readline-sync';

const targetAmountCorrectAnswers = 3;
let userAmountCorrectAnswers = 0;
const maxRandomNumber = 5;
const amountNumbersProgression = 10;
let stepProgression;
let correctAnswer;
let playerAnswer;
let indexHiddenNumber;
let outputProgression = '';
let currentNumberProgression;

const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}!`);
console.log('What number is missing in the progression?');

for (let index = 0; index < targetAmountCorrectAnswers; index += 1) {
  stepProgression = Math.floor(Math.random() * maxRandomNumber + 1);
  indexHiddenNumber = Math.floor(Math.random() * amountNumbersProgression);
  currentNumberProgression = Math.floor(Math.random() * maxRandomNumber + 1);
  outputProgression = '';

  for (let j = 0; j < amountNumbersProgression; j += 1) {
    if (indexHiddenNumber === j) {
      outputProgression += '.. ';
      correctAnswer = currentNumberProgression;
    } else {
      outputProgression += `${currentNumberProgression} `;
    }

    currentNumberProgression += stepProgression;
  }

  console.log(`Question: ${outputProgression}`);
  playerAnswer = Number(readlineSync.question('Your answer: '));

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
