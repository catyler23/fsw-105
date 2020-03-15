// // function addTwoInputNumbers(number1, number2) {
// //     return "Adding " + number1 + " with " + number2 + " gives you a result of: " + (number1 + number2)
// // }
// // console.log(addTwoInputNumbers(25, 15));

// //////

// function largeInputNumbers(num1, num2, num3) {
//     return Math.max(num1, num2, num3)
// }
// console.log(largeInputNumbers(12, 15, 31))

// ///////

// function isEvenOrOdd(num) {
//     if (num % 2 === 0) {
//         return 'even';
//     } else {
//         return 'odd';
//     }
// } console.log(isEvenOrOdd (2))

////// Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.

let str1 = 'abcdefghijklmnopqrstuvwxyz'
let str2 = 'I needs money'
console.log(str1.includes(20))
function characters(home) {
    // console.log(home.length)
    if (home.length >= 20) {
        console.log(home.concat(home))
    } else (home /2) {
       
    };
}; characters(str1)
characters(str2)