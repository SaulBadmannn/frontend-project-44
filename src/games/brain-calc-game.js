import launchGame from '../game-engine.js';

const generateRound = () => {
  let randomNumber1 = 0;
  let randomNumber2 = 0;
  const maxRandomNumber = 10;
  const amountOperators = 3;
  let symbolOperator;
  let answer;

  randomNumber1 = Math.floor(Math.random() * maxRandomNumber + 1);
  randomNumber2 = Math.floor(Math.random() * maxRandomNumber + 1);
  const randomNumberOperator = Math.floor(Math.random() * amountOperators + 1);

  switch (randomNumberOperator) {
    case 1:
      symbolOperator = '+';
      answer = randomNumber1 + randomNumber2;
      break;
    case 2:
      symbolOperator = '-';
      answer = randomNumber1 - randomNumber2;
      break;
    case 3:
      symbolOperator = '*';
      answer = randomNumber1 * randomNumber2;
      break;
    default:
      symbolOperator = '+';
      answer = randomNumber1 + randomNumber2;
      break;
  }

  const question = `${randomNumber1} ${symbolOperator} ${randomNumber2}`;
  answer = String(answer);

  return [question, answer];
};

const description = 'What is the result of the expression?';

const launchBrainCalcGame = launchGame(generateRound, description);

export default launchBrainCalcGame;
