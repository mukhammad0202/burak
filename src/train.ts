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

/*
  Traditional API 
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

/*
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

/*
    request join
    self destroy
*/

// ============================== K-TASK ===============================

function countVowels(str: string): number {
  const vowels: string[] = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  let vowelCount: number = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }

  return vowelCount;
}

console.log(countVowels("string"));
console.log(countVowels("TypeScript"));
