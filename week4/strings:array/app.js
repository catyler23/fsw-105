// //1)
// var str = 'hello'
// var phrase2 = 'hello World'
// function capitalizeAndLowercase(phrase){
// var uppercasedHello = phrase.toUpperCase()
// var lowercasedHello = uppercasedHello.toLowerCase()
// var uppercasedLowercased = uppercasedHello.concat(lowercasedHello)
// console.log(uppercasedLowercased)
// }
// capitalizeAndLowercase(str)
// capitalizeAndLowercase(phrase2)




// // 2) Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().

// var str = "capreases";
// var alpha = "abcdefghij"
// function findMiddleIndex (Juan){
// var n = (Juan.length / 2);
// console.log(Math.floor(n))
// }
// findMiddleIndex(str)
// findMiddleIndex(alpha)


// // 3) Make a function that uses slice() and the other functions you've written to return the first half of the string.

var str = "12345678";
// console.log(str.length / 2)
function morning(inspired){
var s = (inspired.slice (0, inspired.length /2))
console.log(s)
}morning(str)



// 4) Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased. (If the string length is odd, capitalize the shorter of the first half.)

// var phrase = 'It iS a Great Day.';
// var green = "Hello World"
// function sayName(blue) {
//     console.log(blue.length)
//     var firstHalf = blue.slice(0 , blue.length /2)
//     //    console.log(firstHalf)
//     var secondHalf = blue.slice(blue.length / 2)
//     //    console.log(secondHalf)
//     console.log(firstHalf.toUpperCase() + secondHalf.toLowerCase())

// } sayName(phrase)
// sayName(green)


// // 5) code challenge
// function titleCase(str) {
//     var splitStr = str.toLowerCase().split(' ');
//     for (var i = 0; i < splitStr.length; i++) {

//         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
//     }

//     return splitStr.join(' ');
// }

// console.log(titleCase("I'm a little tea pot"));


// /////////// Array Method

// var fruit = ['banana', 'apple', 'orange', 'watermelon'];
// var vegetables = ['carrot', 'tomato', 'pepper', 'lettuce'];

// /* console.log('fruit: ', fruit);
//     console.log('vegetables: ', vegetables);*/


// // 1)
// vegetables.pop()
// console.log(vegetables);

// // 2)
// fruit.shift()
// console.log(fruit);

// // 3)
// var orangeIndex = fruit.indexOf('orange')
// console.log(orangeIndex);

// // 4)
// fruit.push(1)
// console.log(fruit);

// // 5)
// console.log(vegetables.length);

// // 6)
// vegetables.push(3)
// console.log(vegetables);

// // 7)

// var newArray = fruit.concat(vegetables)
// console.log(newArray)

// // 8)
// newArray.splice(4, 2)
// console.log(newArray)

// // 9)
// newArray.reverse()
// console.log(newArray)

// // 10)
// console.log(newArray.join())
