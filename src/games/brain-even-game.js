import launchGame from '../game-engine.js';

const generateRound = () => {
  let randomNumber = 0;
  const maxRandomNumber = 100;
  let answer;

  randomNumber = Math.floor(Math.random() * maxRandomNumber + 1);
  const question = randomNumber;

  if (randomNumber % 2 === 0) {
    answer = 'yes';
  } else {
    answer = 'no';
  }

  return [question, answer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export const launchBrainEvenGame = launchGame(generateRound, description);

export default launchBrainEvenGame;
