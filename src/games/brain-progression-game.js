import launchGame, { getRandomNumber } from '../game-engine.js';

const createProgression = (amountNumbersProgression, maxRandomNumber) => {
  const stepProgression = getRandomNumber(maxRandomNumber);
  let currentNumberProgression = getRandomNumber(maxRandomNumber);
  const numbersProgression = [];

  for (let j = 0; j < amountNumbersProgression; j += 1) {
    numbersProgression.push(currentNumberProgression);
    currentNumberProgression += stepProgression;
  }

  return numbersProgression;
};

const generateRound = () => {
  const maxRandomNumber = 5;
  const amountNumbersProgression = 10;
  const numbersProgression = createProgression(amountNumbersProgression, maxRandomNumber);
  const indexHiddenNumber = getRandomNumber(amountNumbersProgression, 0);

  const answer = String(numbersProgression[indexHiddenNumber]);
  numbersProgression[indexHiddenNumber] = '..';

  const question = numbersProgression.join(' ');

  return [question, answer];
};

export const launchBrainProgressionGame = () => {
  const description = 'What number is missing in the progression?';
  launchGame(generateRound, description);
};

export default launchBrainProgressionGame;
