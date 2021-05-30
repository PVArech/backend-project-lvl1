import {
  getName, setQuestion, getAnswerToQuestion, correctAnswer, incorrectAnswer,
} from './cli.js';

export const getRandomInt = (min, max) => { // генератор числа
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue)) + minValue; // max не вкл., min вкл.
};

export const isEven = (num) => { // определение четности числа, true четное, false не четное
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

export const gcd = (a, b) => { // наибольший общий делитель
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

export const isPrime = (num) => { // простое число?
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const runGame = (nameQuestion, questions, answers) => {
  const name = getName();
  setQuestion(nameQuestion);
  for (let i = 0; i < 3; i += 1) {
    let answerToQuestion = '';
    if (Array.isArray(questions[i])) {
      answerToQuestion = getAnswerToQuestion(questions[i].join(' '));
    } else {
      answerToQuestion = getAnswerToQuestion(questions[i]);
    }

    if (answerToQuestion === answers[i]) {
      console.log('Correct!');
    } else {
      return incorrectAnswer(name, answerToQuestion, answers[i]);
    }
  }
  return correctAnswer(name);
};
