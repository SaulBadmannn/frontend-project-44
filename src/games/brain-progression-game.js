import launchGame from '../game-engine.js';

const generateRound = () => {
  const maxRandomNumber = 5;
  const amountNumbersProgression = 10;
  let outputProgression = '';
  let currentNumberProgression;
  let answer;

  const stepProgression = Math.floor(Math.random() * maxRandomNumber + 1);
  const indexHiddenNumber = Math.floor(Math.random() * amountNumbersProgression);
  currentNumberProgression = Math.floor(Math.random() * maxRandomNumber + 1);
  outputProgression = '';

  for (let j = 0; j < amountNumbersProgression; j += 1) {
    if (indexHiddenNumber === j) {
      outputProgression += '.. ';
      answer = String(currentNumberProgression);
    } else {
      outputProgression += `${currentNumberProgression} `;
    }

    currentNumberProgression += stepProgression;
  }

  const question = `${outputProgression}`;

  return [question, answer];
};

const description = 'What number is missing in the progression?';

export const launchBrainProgressionGame = launchGame(generateRound, description);

export default launchBrainProgressionGame;
