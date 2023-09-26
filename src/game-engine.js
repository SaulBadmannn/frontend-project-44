import readlineSync from 'readline-sync';

const launchGame = (generateRound, description) => () => {
  const amountRounds = 3;

  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  console.log(description);

  for (let i = 0; i < amountRounds; i += 1) {
    const [question, answer] = generateRound();

    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer !== answer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${playerName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${playerName}!`);
};

export const getRandomNumber = (maxRandomNumber, minRandomNumber = 1) => {
  const randomFloatNumber = Math.random() * maxRandomNumber + minRandomNumber;
  return Math.floor(randomFloatNumber);
};

export default launchGame;
