import readlineSync from 'readline-sync';

const numberOfRounds = 3;

export default (game, description) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log(description);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, currentAnswer] = game();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== currentAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was ${currentAnswer}.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
