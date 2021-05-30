#!/usr/bin/env node

import { runGame, getRandomInt, isPrime } from '../src/index.js';

const nameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const question = [];
const answer = [];
for (let i = 0; i < 3; i += 1) {
  const number = getRandomInt(1, 174);
  question.push(number);
  answer.push(isPrime(number) ? 'yes' : 'no');
}

runGame(nameQuestion, question, answer);
