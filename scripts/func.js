// 1;

// const array = ["longest", "second", "third"];

// function wordArr() {
//   let longestWord = "";
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "string" && array[i].length > longestWord.length) {
//       longestWord = array[i];
//     }
//   }
//   return longestWord;
// }

// console.log(wordArr());

//2

// const challengeTwoWord = "ryan";

// function switchLetters(word) {
//   word = word.split("");
//   temp = word[0];
//   word[0] = word[word.length - 1];
//   word[word.length - 1] = temp;
//   return word.join("");
// }

// console.log(switchLetters(challengeTwoWord));

// 3;
// const numArr = [5, 2, 8];

// function sumOfNum(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// }

// console.log(sumOfNum(numArr));

// //4
// const arrayOne = [1, 2, 3];
// const arrayTwo = [4, 5, 6];

// function combineArrays(arrayOne, arrayTwo) {
//   const finalArray = [];
//   const arrayLengths = arrayOne.length + arrayTwo.length;
//   console.log(arrayLengths);
//   for (let i = 0; i < arrayLengths; i++) {
//     if (i % 2 === 0) {
//       const shiftedArray = arrayOne.shift();
//       finalArray.push(shiftedArray);
//     } else if (i % 2 != 0) {
//       const shiftedArray = arrayTwo.shift();
//       finalArray.push(shiftedArray);
//     }
//   }
//   return finalArray;
// }

// console.log(combineArrays(arrayOne, arrayTwo));

// //ian gave me instruction to skip 5, 8, and 9
//6

// const myString = "This string has several different values";
// function longestWord(string) {
//   let strArr = string.split(" ");
//   let longestLen = 0;
//   let longestWord = null;
//   for (let i = 0; i <= strArr.length - 1; i++) {
//     if (longestLen < strArr[i].length) {
//       longestLen = strArr[i].length;
//       longestWord = strArr[i];
//     }
//   }
//   return longestWord;
// }

// console.log(longestWord(myString));

//7
// const myString = "Hi there";
// const stringTwo = "";

// function returnAlpha(string) {
//   const capitalize = string.toLowerCase();

//   const array = capitalize.split("");

//   const sortArray = array.sort();

//   const result = sortArray.join("");

//   return result;
// }

// console.log(returnAlpha(myString));

// //10
// const baseNum = 4;
// const exponentNum = 2;

// function returnPow(base, exponent) {
//   let result = 1;
//   for (i = 0; i < exponent; i++) {
//     result *= base;
//   }
//   return result;
// }

// console.log(returnPow(baseNum, exponentNum));
