#!/usr/bin/env node
import readlineSync from 'readline-sync';

const targetAmountCorrectAnswers = 3;
let userAmountCorrectAnswers = 0;
let randomNumber1 = 0;
let randomNumber2 = 0;
const maxRandomNumber = 10;
const amountOperators = 3;
let randomNumberOperator;
let correctAnswer;
let playerAnswer;
let symbolOperator;

const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}!`);
console.log('What is the result of the expression?');

for (let index = 0; index < targetAmountCorrectAnswers; index++) {
    randomNumber1 = Math.floor(Math.random() * maxRandomNumber + 1);
    randomNumber2 = Math.floor(Math.random() * maxRandomNumber + 1);
    randomNumberOperator = Math.floor(Math.random() * amountOperators + 1);

    switch(randomNumberOperator) {
        case 1:
            symbolOperator = '+';
            correctAnswer = randomNumber1 + randomNumber2;
            break;
        case 2:
            symbolOperator = '-';
            correctAnswer = randomNumber1 - randomNumber2;
            break;
        case 3:
            symbolOperator = '*';
            correctAnswer = randomNumber1 * randomNumber2;
            break;    
    }

    console.log(`Question: ${randomNumber1} ${symbolOperator} ${randomNumber2}`);
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
