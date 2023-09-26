import launchGame, { getRandomNumber } from '../game-engine.js';

const getLessNumber = (number1, number2) => {
  if (number1 > number2) {
    return number2;
  }

  return number1;
};

const getAnswer = (lessNumber, number1, number2) => {
  let currentDivisor;
  let greatestCommonDivisor;

  currentDivisor = lessNumber;
  greatestCommonDivisor = 1;

  for (let j = 0; j < lessNumber; j += 1) {
    if (number1 % currentDivisor === 0 && number2 % currentDivisor === 0) {
      greatestCommonDivisor = currentDivisor;
      break;
    }

    currentDivisor -= 1;
  }

  return greatestCommonDivisor;
};

const generateRound = () => {
  const maxRandomNumber = 20;

  const randomNumber1 = getRandomNumber(maxRandomNumber);
  const randomNumber2 = getRandomNumber(maxRandomNumber);

  const lessRandomNumber = getLessNumber(randomNumber1, randomNumber2);

  const answer = String(getAnswer(lessRandomNumber, randomNumber1, randomNumber2));
  const question = `${randomNumber1} ${randomNumber2}`;

  return [question, answer];
};

const description = 'Find the greatest common divisor of given numbers.';

const launchBrainGcdGame = launchGame(generateRound, description);

export default launchBrainGcdGame;
