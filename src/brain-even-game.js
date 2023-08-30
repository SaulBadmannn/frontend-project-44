import * as gameEngine from './game-engine.js';

const LaunchBrainEvenGame = () => {
  const targetAmountCorrectAnswers = 3;
  let userAmountCorrectAnswers = 0;
  let randomNumber = 0;
  const maxRandomNumber = 100;
  let correctAnswer;
  let playerAnswer;
  let question;

  gameEngine.greetingPlayer();
  const playerName = gameEngine.getPlayerName();

  for (let index = 0; index < targetAmountCorrectAnswers; index += 1) {
    randomNumber = Math.floor(Math.random() * maxRandomNumber + 1);
    question = randomNumber;

    if (randomNumber % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }

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

export default LaunchBrainEvenGame;
