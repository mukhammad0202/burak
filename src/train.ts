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
   folder => KEBAB
   css => SNAKE                                 button_style
 -Error handling
   

*/
