import readlineSync from 'readline-sync';

export const getAnswer = (str) => { // ждем ответ на вопрос, вопрос в переменной str
  const value = readlineSync.question(`${str}`);
  return value;
};

const getRandomInt = (min, max) => { // генератор числа
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue)) + minValue; // max не вкл., min вкл.
};

const isEven = (num) => { // определение четности числа, true четное, false не четное
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

/* const resultGame = (good, name, answerToQuestion, Answer) => {
  if (good) { // игрок ответил правильно на три вопроса
    console.log(`Congratulations, ${name}!`);
  } else { // игрок лажанул ;-)
    console.log(`'${answerToQuestion}' is wrong answer ;(. Correct answer was '${Answer}'.`);
    console.log(`Let's try again, ${name}!`);
  }
}; */

export const getTest = (name) => { // тестирование игрока
  // let good = true;
  // let answerToQuestion = '';
  // let Answer = '';

  for (let i = 0; i < 3; i += 1) {
    const num = getRandomInt(1, 30);
    console.log(`Question: ${num}`); // число для ответа игроку
    const answerToQuestion = getAnswer('Your answer: '); // ответ игрока
    const Answer = isEven(num) ? 'yes' : 'no'; // правильный ответ в игре

    if ((answerToQuestion === 'yes' || answerToQuestion === 'no') && Answer === answerToQuestion) { // проверяем ответ игрока
      console.log('Correct!');
    } else {
      return console.log(`'${answerToQuestion}' is wrong answer ;(. Correct answer was '${Answer}'.
Let's try again, ${name}!`);
      // good = false; // игрок ответил не верно (yes/no)
      // break;
    }
  }
  return console.log(`Congratulations, ${name}!`);
  // resultGame(good, name, answerToQuestion, Answer);
};
