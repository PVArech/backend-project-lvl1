#!/usr/bin/env node

import { runGame, getRandomInt, isEven } from '../src/index.js';

const nameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
const questions = [];
const answers = [];
for (let i = 0; i < 3; i += 1) {
  const num = getRandomInt(1, 30);
  questions.push(num);
  answers.push(isEven(num) ? 'yes' : 'no');
}

runGame(nameQuestion, questions, answers);
