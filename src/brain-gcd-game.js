import * as gameEngine from './game-engine.js';

const LaunchBrainGcdGame = () => {
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
  let question;

  gameEngine.greetingPlayer();
  const playerName = gameEngine.getPlayerName();

  console.log('Find the greatest common divisor of given numbers.');

  for (let index = 0; index < targetAmountCorrectAnswers; index += 1) {
    randomNumber1 = Math.floor(Math.random() * maxRandomNumber + 1);
    randomNumber2 = Math.floor(Math.random() * maxRandomNumber + 1);

    if (randomNumber1 > randomNumber2) {
      lessRandomNumber = randomNumber2;
    } else {
      lessRandomNumber = randomNumber1;
    }

    currentDivisor = lessRandomNumber;
    greatestCommonDivisor = 1;

    for (let j = 0; j < lessRandomNumber; j += 1) {
      if (randomNumber1 % currentDivisor === 0 && randomNumber2 % currentDivisor === 0) {
        greatestCommonDivisor = currentDivisor;
        break;
      }

      currentDivisor -= 1;
    }

    correctAnswer = greatestCommonDivisor;
    question = `${randomNumber1} ${randomNumber2}`;
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

export default LaunchBrainGcdGame;
