import * as gameEngine from '../game-engine.js';

const LaunchBrainCalcGame = () => {
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
  let question;

  gameEngine.greetingPlayer();
  const playerName = gameEngine.getPlayerName();

  console.log('What is the result of the expression?');

  for (let index = 0; index < targetAmountCorrectAnswers; index += 1) {
    randomNumber1 = Math.floor(Math.random() * maxRandomNumber + 1);
    randomNumber2 = Math.floor(Math.random() * maxRandomNumber + 1);
    randomNumberOperator = Math.floor(Math.random() * amountOperators + 1);

    switch (randomNumberOperator) {
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
      default:
        symbolOperator = '+';
        correctAnswer = randomNumber1 + randomNumber2;
        break;
    }

    question = `${randomNumber1} ${symbolOperator} ${randomNumber2}`;
    gameEngine.askQuestion(question);
    playerAnswer = gameEngine.getPlayerAnswer();

    if (gameEngine.isPlayerAnswerCorrect(playerAnswer, correctAnswer, playerName)) {
      userAmountCorrectAnswers += 1;
    } else {
      break;
    }
  }

  gameEngine.CheckCorrectAnswers(targetAmountCorrectAnswers, userAmountCorrectAnswers, playerName);
};

export default LaunchBrainCalcGame;
