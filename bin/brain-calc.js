#!/usr/bin/env node

import { runGame, getRandomInt } from '../src/index.js';

const nameQuestion = 'What is the result of the expression?';
const questions = [];
const answers = [];
for (let i = 0; i < 3; i += 1) {
  let operation = '';
  const num = getRandomInt(1, 4);
  const a = getRandomInt(1, 30);
  const b = getRandomInt(1, 10);
  let result = 0;

  switch (num) {
    case 1:
      operation = '+';
      result = a + b;
      break;
    case 2:
      operation = '-';
      result = a - b;
      break;
    default:
      operation = '*';
      result = a * b;
      break;
  }
  questions.push(`${a} ${operation} ${b}`);
  answers.push(`${result}`);
}

runGame(nameQuestion, questions, answers);
