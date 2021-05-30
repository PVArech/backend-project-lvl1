#!/usr/bin/env node

import { runGame, getRandomInt, isPrime } from '../src/index.js';

const question = [];
const answer = [];
const nameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

for (let k = 0; k < 3; k += 1) {
  const number = getRandomInt(1, 174);
  question.push(number);
  answer.push(isPrime(number) ? 'yes' : 'no');
}

runGame(nameQuestion, question, answer);
