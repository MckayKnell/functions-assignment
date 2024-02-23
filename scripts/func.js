//1

// let array = ["longest", "second", "third"];

// function longestWord() {
//   let longestWord = "";
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "string" && array[i].length > longestWord.length) {
//       longestWord = array[i];
//     }
//   }
//   return longestWord;
// }

// console.log(longestWord());

//2

const word = "ryan";

function switchLetters(word) {
  word = word.split("");
  temp = word[0];
  word[0] = word[word.length - 1];
  word[word.length - 1] = temp;
  return word.join("");
}

console.log(switchLetters(word));

3;
const array = [5, 2, 8];

function sumOfNum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(sumOfNum(array));

//4
const arrayOne = [1, 2, 3];
const arrayTwo = [4, 5, 6];

function combineArrays(arrayOne, arrayTwo) {
  const finalArray = [];
  const arrayLengths = arrayOne.length + arrayTwo.length;
  console.log(arrayLengths);
  for (let i = 0; i < arrayLengths; i++) {
    if (i % 2 === 0) {
      const shiftedArray = arrayOne.shift();
      finalArray.push(shiftedArray);
    } else if (i % 2 != 0) {
      const shiftedArray = arrayTwo.shift();
      finalArray.push(shiftedArray);
    }
  }
  return finalArray;
}

console.log(combineArrays(arrayOne, arrayTwo));

//ian gave me instruction to skip 5, 8, and 9
//6

const string = "This string has several different values";
function longestWord(string) {
  let str = string.split(" ");
  let longest = 0;
  let word = null;
  for (let i = 0; i <= str.length - 1; i++) {
    if (longest < str[i].length) {
      longest = str[i].length;
      word = str[i];
    }
  }
  return word;
}

console.log(longestWord(string));

//7
const myString = "Hi there";
const strinTwo = "";

function returnAlpha(string) {
  const capitalize = string.toUpperCase();

  const array = capitalize.split("");

  const sortArray = array.sort();

  const result = sortArray.join(" ");

  return result;
}

console.log(returnAlpha(myString));

//10
const base = 4;
const exponent = 2;

function returnPow(base, exponent) {
  let result = 1;
  for (i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

console.log(returnPow(base, exponent));
