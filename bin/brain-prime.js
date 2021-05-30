#!/usr/bin/env node

import { runGame, getQuestionsAnswers, isPrime } from '../src/index.js';

const nameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const [questions, answers] = getQuestionsAnswers(1, 174, isPrime);

runGame(nameQuestion, questions, answers);
