import * as gameEngine from './game-engine.js';

const LaunchBrainProgressionGame = () => {
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
  let question;

  gameEngine.greetingPlayer();
  const playerName = gameEngine.getPlayerName();

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

    question = `${outputProgression}`;
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

export default LaunchBrainProgressionGame;
