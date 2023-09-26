import launchGame, { getRandomNumber } from '../game-engine.js';

const getAnswer = (number1, number2, symbolOperator) => {
  switch (symbolOperator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return number1 + number2;
  }
};

const generateRound = () => {
  const maxRandomNumber = 10;
  const symbolsOperator = ['+', '-', '*'];

  const randomNumber1 = getRandomNumber(maxRandomNumber);
  const randomNumber2 = getRandomNumber(maxRandomNumber);

  const randomOperator = symbolsOperator[getRandomNumber(symbolsOperator.length, 0)];

  const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  const answer = String(getAnswer(randomNumber1, randomNumber2, randomOperator));

  return [question, answer];
};

const description = 'What is the result of the expression?';

const launchBrainCalcGame = launchGame(generateRound, description);

export default launchBrainCalcGame;
