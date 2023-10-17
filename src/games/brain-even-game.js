import launchGame, { getRandomNumber } from '../game-engine.js';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }

  return false;
};

const generateRound = () => {
  const maxRandomNumber = 100;

  const randomNumber = getRandomNumber(maxRandomNumber);
  const question = randomNumber;

  let answer;

  if (isEven(randomNumber)) {
    answer = 'yes';
  } else {
    answer = 'no';
  }

  return [question, answer];
};

export const launchBrainEvenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  launchGame(generateRound, description);
};

export default launchBrainEvenGame;
