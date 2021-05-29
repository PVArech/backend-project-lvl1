#!/usr/bin/env node

import { runGame, getRandomInt } from '../src/index.js';

const nameQuestion = 'What number is missing in the progression?';
const questions = [];
const answers = [];
for (let i = 0; i < 3; i += 1) {
  const arithmeticProgression = getRandomInt(5, 11);
  let start = getRandomInt(1, 50);
  const step = getRandomInt(1, 6);
  const hiddenNumber = getRandomInt(0, arithmeticProgression);
  questions[i] = [];
  for (let k = 0; k < arithmeticProgression; k += 1) {
    if (k !== hiddenNumber) {
      questions[i].push(`${start}`);
      start += step;
    } else {
      questions[i].push('..');
      answers.push(`${start}`);
      start += step;
    }
  }
}

runGame(nameQuestion, questions, answers);
