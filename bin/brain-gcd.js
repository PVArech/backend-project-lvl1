#!/usr/bin/env node

import { runGame, getRandomInt, gcd } from '../src/index.js';

const nameQuestion = 'Find the greatest common divisor of given numbers.';
const questions = [];
const answers = [];
for (let i = 0; i < 3; i += 1) {
  const a = getRandomInt(1, 101);
  const b = getRandomInt(1, 101);
  const result = gcd(a, b);

  questions.push(`${a} ${b}`);
  answers.push(`${result}`);
}

runGame(nameQuestion, questions, answers);
