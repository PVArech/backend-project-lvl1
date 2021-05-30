#!/usr/bin/env node

import { runGame, getQuestionsAnswers } from '../src/index.js';

const nameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const [questions, answers] = getQuestionsAnswers(1, 30, true);

runGame(nameQuestion, questions, answers);
