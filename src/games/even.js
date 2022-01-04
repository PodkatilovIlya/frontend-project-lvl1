import generateRandomNum from '../utils.js';
import startGame from '../index.js';

const isEven = (num) => num % 2;

const generateRound = () => {
  const number = generateRandomNum(1, 50);
  const currentAnswer = isEven(number) ? 'no' : 'yes';

  return [number, currentAnswer];
};

export default () => {
  startGame(
    generateRound,
    'Answer "yes" if the number is even, otherwise answer "no"',
  );
};
