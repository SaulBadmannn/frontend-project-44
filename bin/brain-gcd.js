#!/usr/bin/env node
import readlineSync from 'readline-sync';

const targetAmountCorrectAnswers = 3;
let userAmountCorrectAnswers = 0;
let randomNumber1 = 0;
let randomNumber2 = 0;
const maxRandomNumber = 20;
let correctAnswer;
let playerAnswer;
let lessRandomNumber;
let currentDivisor;
let greatestCommonDivisor;

const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}!`);
console.log('Find the greatest common divisor of given numbers.');

for (let index = 0; index < targetAmountCorrectAnswers; index++) {
    randomNumber1 = Math.floor(Math.random() * maxRandomNumber + 1);
    randomNumber2 = Math.floor(Math.random() * maxRandomNumber + 1);

    randomNumber1 > randomNumber2 ? lessRandomNumber = randomNumber2 : lessRandomNumber = randomNumber1;
    currentDivisor = lessRandomNumber;
    greatestCommonDivisor = 1;

    for (let j = 0; j < lessRandomNumber; j++) {
        if (randomNumber1 %  currentDivisor === 0 && randomNumber2 %  currentDivisor === 0) {
            greatestCommonDivisor = currentDivisor;
            break;
        }

        currentDivisor -= 1;
    }

    correctAnswer = greatestCommonDivisor;

    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
    playerAnswer = Number(readlineSync.question('Your answer: '));

    if (playerAnswer === correctAnswer) {
        console.log('Correct!');
        userAmountCorrectAnswers += 1;
    } else {
        console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`)
        break;
    }
}

if (userAmountCorrectAnswers === targetAmountCorrectAnswers) {
    console.log(`Congratulations, ${playerName}!`)
}
