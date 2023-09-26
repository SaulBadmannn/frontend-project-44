import launchGame, { getRandomNumber } from '../game-engine.js';

const getAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }

  return 'no';
};

const generateRound = () => {
  const maxRandomNumber = 100;

  const randomNumber = getRandomNumber(maxRandomNumber);
  const question = randomNumber;

  const answer = getAnswer(randomNumber);

  return [question, answer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export const launchBrainEvenGame = launchGame(generateRound, description);

export default launchBrainEvenGame;