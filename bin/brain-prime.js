#!/usr/bin/env node

import { runGame, getRandomInt, isPrime } from '../src/index.js';

const nameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const questions = [];
const answers = [];
for (let i = 0; i < 3; i += 1) {
  const num = getRandomInt(1, 174);
  questions.push(num);
  answers.push(isPrime(num) ? 'yes' : 'no');
}

runGame(nameQuestion, questions, answers);
