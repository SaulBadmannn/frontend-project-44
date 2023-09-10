import launchGame from '../game-engine.js';

const generateRound = () => {
  let randomNumber1 = 0;
  let randomNumber2 = 0;
  const maxRandomNumber = 20;
  let lessRandomNumber;
  let currentDivisor;
  let greatestCommonDivisor;

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

  const answer = String(greatestCommonDivisor);
  const question = `${randomNumber1} ${randomNumber2}`;

  return [question, answer];
};

const description = 'Find the greatest common divisor of given numbers.';

const launchBrainGcdGame = launchGame(generateRound, description);

export default launchBrainGcdGame;
