import launchGame, { getRandomNumber } from '../game-engine.js';

const getAnswer = (number) => {
  const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19];

  if (primeNumbers.includes(number)) {
    return 'yes';
  }

  return 'no';
};

const generateRound = () => {
  const maxRandomNumber = 20;

  const randomNumber = getRandomNumber(maxRandomNumber);

  const answer = getAnswer(randomNumber);
  const question = randomNumber;

  return [question, answer];
};

const launchBrainPrimeGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  launchGame(generateRound, description);
};

export default launchBrainPrimeGame;
