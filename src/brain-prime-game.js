import * as gameEngine from './game-engine.js';

const LaunchBrainPrimeGame = () => {
  const targetAmountCorrectAnswers = 3;
  let userAmountCorrectAnswers = 0;
  let randomNumber = 0;
  const maxRandomNumber = 20;
  const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19];
  let correctAnswer;
  let playerAnswer;
  let question;

  gameEngine.greetingPlayer();
  const playerName = gameEngine.getPlayerName();

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let index = 0; index < targetAmountCorrectAnswers; index += 1) {
    randomNumber = Math.floor(Math.random() * maxRandomNumber + 1);

    if (primeNumbers.includes(randomNumber)) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }

    question = `${randomNumber}`;
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

export default LaunchBrainPrimeGame;
