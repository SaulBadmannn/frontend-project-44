import readlineSync from 'readline-sync';

export const greetingPlayer = () => {
  console.log('Welcome to the Brain Games!');
};

export const getPlayerName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  return playerName;
};

export const askQuestion = (question) => {
  console.log(`Question: ${question}`);
};

export const getPlayerAnswer = () => {
  const playerAnswer = readlineSync.question('Your answer: ');
  return playerAnswer;
};

export const isPlayerAnswerCorrect = (playerAnswer, correctAnswer, playerName) => {
  let isAnswerCorrect;
  const convertCorrectAnswer = String(correctAnswer);

  if (playerAnswer === convertCorrectAnswer) {
    console.log('Correct!');
    isAnswerCorrect = true;
  } else {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`);
    isAnswerCorrect = false;
  }

  return isAnswerCorrect;
};

export const CheckCorrectAnswers = (targetCorrectAnswers, userCorrectAnswers, playerName) => {
  if (userCorrectAnswers === targetCorrectAnswers) {
    console.log(`Congratulations, ${playerName}!`);
  }
};
