import launchGame from '../game-engine.js';

const generateRound = () => {
  let randomNumber = 0;
  const maxRandomNumber = 20;
  const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19];
  let answer;

  randomNumber = Math.floor(Math.random() * maxRandomNumber + 1);

  const question = randomNumber;

  if (primeNumbers.includes(randomNumber)) {
    answer = 'yes';
  } else {
    answer = 'no';
  }

  return [question, answer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const launchBrainPrimeGame = launchGame(generateRound, description);

export default launchBrainPrimeGame;
