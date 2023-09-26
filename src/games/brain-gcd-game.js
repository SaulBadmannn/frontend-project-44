import launchGame, { getRandomNumber } from '../game-engine.js';

const getLessNumber = (number1, number2) => {
  if (number1 > number2) {
    return number2;
  }

  return number1;
};

const generateRound = () => {
  let randomNumber1 = 0;
  let randomNumber2 = 0;
  const maxRandomNumber = 20;
  let currentDivisor;
  let greatestCommonDivisor;

  randomNumber1 = getRandomNumber(maxRandomNumber);
  randomNumber2 = getRandomNumber(maxRandomNumber);

  const lessRandomNumber = getLessNumber(randomNumber1, randomNumber2);

  currentDivisor = lessRandomNumber;
  greatestCommonDivisor = 1;

  for (let j = 0; j < lessRandomNumber; j += 1) {
    if (randomNumber1 % currentDivisor === 0 && randomNumber2 % currentDivisor === 0) {
      greatestCommonDivisor = currentDivisor;
      break;
    }

    currentDivisor -= 1;
  }

  const answer = String(greatestCommonDivisor);
  const question = `${randomNumber1} ${randomNumber2}`;

  return [question, answer];
};

const description = 'Find the greatest common divisor of given numbers.';

const launchBrainGcdGame = launchGame(generateRound, description);

export default launchBrainGcdGame;
