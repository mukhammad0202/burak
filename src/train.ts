// ======================================= G-TASK ==============================

// function getHighestIndex(arr: number[]): number {
//   if (arr.length === 0) {
//     return -1;
//   }

//   let max = arr[0];
//   let maxIndex = 0;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//       maxIndex = i;
//     }
//   }

//   return maxIndex;
// }
// console.log(getHighestIndex([5, 21, 12, 21, 8]));

// ============================ H-TASK =============================================

// function getPositive(arr: number[]): string {
//   let positiveNums = "";

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       positiveNums += arr[i];
//     }
//   }

//   return positiveNums;
// }

// console.log(getPositive([1, -4, 2]));

// ============================ H2-TASK =============================================

// function getDigits(input: string): string {
//   return input
//     .split("")
//     .filter((char) => /\d/.test(char))
//     .join("");
// }

// const result = getDigits("m14i1t");
// console.log(result);

/*
Project Standards:
 -Logging Standards
 -Naming Standards:
   function, methods, veriable => CAMEL case    goHome
   class => PASCAL                              MemberService
   folder, file => KEBAB
   css => SNAKE                                 button_style
 -Error handling
*/

/*  Request:
  Traditional API ( form POST )
  Rest API
  GrapthQL API
 ...
*/

// =============================== I-TASK =================

// function majorityElement(arr: number[]): number | null {
//   const countMap: { [key: number]: number } = {};

//   arr.forEach((num) => {
//     countMap[num] = (countMap[num] || 0) + 1;
//   });

//   let majorityElement = null;
//   let maxCount = 0;

//   for (const num in countMap) {
//     if (countMap[num] > maxCount) {
//       maxCount = countMap[num];
//       majorityElement = parseInt(num);
//     }
//   }

//   return majorityElement;
// }

// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));

/* Frontend Development
  Traditional FrontEnd Development  =>  BSSR (Adminka)  =>  EJS
  Modern Frontend Development       =>  SPA (Users' application) =>  React
*/

// =============================== J-TASK =================

// function findLongestWord(sentence: string): string {
//   const words = sentence.split(" ");

//   let longestWord = "";

//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }

// console.log(findLongestWord("I come from Uzbekistan"));

//==================

/* Cookie
    request join
    self destroy
*/

// ============================== K-TASK ===============================

// function countVowels(str: string): number {
//   const vowels: string[] = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

//   let vowelCount: number = 0;
//   for (let char of str) {
//     if (vowels.includes(char)) {
//       vowelCount++;
//     }
//   }

//   return vowelCount;
// }

// console.log(countVowels("string"));
// console.log(countVowels("TypeScript"));

/*
Validation:
Frontend validation,
Backend validation
Database validation
 */

// ================================= L-TASK ==================================

// function reverseSentence(sentence: string): string {
//   return sentence
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .join(" ");
// }

// console.log(reverseSentence("we like coding!"));

// ================================= M-TASK ==================================

// function getSquareNumbers(arr: number[]): { number: number; square: number }[] {
//   return arr.map((num) => ({
//     number: num,
//     square: num * num,
//   }));
// }

// const result = getSquareNumbers([1, 2, 3]);
// console.log(result);

// ================================= N-TASK ==================================

// function palindromCheck(str: string): boolean {
//   const reversedStr = str.split("").reverse().join("");

//   return str === reversedStr;
// }

// console.log(palindromCheck("dad"));
// console.log(palindromCheck("son"));

// ================================= O-TASK ==================================

// function calculateSumOfNumbers(arr: any[]): number {
//   return arr.reduce((sum, value) => {
//     if (typeof value === "number") {
//       return sum + value;
//     }
//     return sum;
//   }, 0);
// }

// console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]));

// ================================= P-TASK ==================================

// function objectToArray(obj: { [key: string]: any }): [string, any][] {
//   return Object.entries(obj);
// }

// const result = objectToArray({ a: 10, b: 20 });
// console.log(result);

// ================================= Q-TASK ==================================
// function hasProperty(obj: object, prop: string): boolean {
//   return obj.hasOwnProperty(prop);
// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model"));
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));

// ================================= R-TASK ==================================

// function calculate(expression: string): number {
//   return eval(expression);
// }

// console.log(calculate("1+3"));
// console.log(calculate("92+119"));
// console.log(calculate("88+192"));

// ================================= S-TASK ==================================

// function missingNumber(nums: number[]): number {
//   const n = nums.length;
//   const expectedSum = (n * (n + 1)) / 2;
//   const actualSum = nums.reduce((acc, num) => acc + num, 0);

//   return expectedSum - actualSum;
// }

// console.log(missingNumber([3, 0, 1]));

// ================================= T-TASK ==================================

// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//   let mergedArray: number[] = [];
//   let i = 0;
//   let j = 0;

//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       mergedArray.push(arr1[i]);
//       i++;
//     } else {
//       mergedArray.push(arr2[j]);
//       j++;
//     }
//   }

//   while (i < arr1.length) {
//     mergedArray.push(arr1[i]);
//     i++;
//   }

//   while (j < arr2.length) {
//     mergedArray.push(arr2[j]);
//     j++;
//   }

//   return mergedArray;
// }

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

// ================================= U-TASK ==================================

function sumOdds(n: number): number {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 !== 0) {
      count++;
    }
  }
  return count;
}

console.log(sumOdds(9));
console.log(sumOdds(11));
