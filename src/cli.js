import readlineSync from 'readline-sync';

export default () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export const getName = () => { // знакомство с игроком
  console.log('Welcome to the Brain Games! ');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const setQuestion = (nameQuestion) => console.log(`${nameQuestion}`);

export const getAnswerToQuestion = (Question) => {
  console.log(`Question: ${Question}`); // вопрос игроку
  const answerToQuestion = readlineSync.question('Your answer: '); // ответ игрока
  return answerToQuestion;
};

export const correctAnswer = (name) => console.log(`Congratulations, ${name}!`);

export const incorrectAnswer = (name, answerToQuestion, answer) => console.log(`'${answerToQuestion}' is wrong answer ;(. Correct answer was '${answer}'.
Let's try again, ${name}!`);
