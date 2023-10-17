import launchGame, { getRandomNumber } from '../game-engine.js';

const isNumberPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const generateRound = () => {
  const maxRandomNumber = 20;

  const randomNumber = getRandomNumber(maxRandomNumber);

  let answer;

  if (isNumberPrime(randomNumber)) {
    answer = 'yes';
  } else {
    answer = 'no';
  }

  const question = randomNumber;

  return [question, answer];
};

const launchBrainPrimeGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  launchGame(generateRound, description);
};

export default launchBrainPrimeGame;
