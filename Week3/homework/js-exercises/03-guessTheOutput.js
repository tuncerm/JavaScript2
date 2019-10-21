// In this exercise you'll be presented with a code snippet. Your task is to guess the output and write out your reasoning in 50 words or less.
//
// ```js
// // Snippet
// let a = 10;
// const x = (function() {
//   a = 12;
//   return function() {
//     alert(a);
//   };
// })();
//
// x();
// ```

console.log("Since x is assigned to an iife which sets 'a' to 12 and returns a function that alerts with 'a', calling it will create an alert with a message of '12'.");
