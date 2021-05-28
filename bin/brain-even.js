#!/usr/bin/env node

import { getAnswer, getTest } from '../src/eli.js';

console.log('Welcome to the Brain Games! ');
const name = getAnswer('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
getTest(name);
