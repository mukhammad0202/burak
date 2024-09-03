// console.log("Exucuted");

// import moment from "moment";

// const currentTime = moment().format("YYYY MM DD");
// console.log(currentTime);

// const person: string = "Paulo";
// const count: number = 100;

// Architectural pattern: MVC, Dependnecy Injection, MVP

// MVC => Model View Controller

// Design pattern: Middleware, Decotar

// ======================================= G-TASK ==============================

function getHighestIndex(arr) {
  if (arr.length === 0) {
    return -1;
  }

  let maxIndex = 0;
  let maxValue = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
      maxIndex = i;
    }
  }
  return maxIndex;
}
const result = getHighestIndex([5, 21, 12, 21, 8]);
console.log(result);
