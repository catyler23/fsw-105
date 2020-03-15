
// Use the built-in array method .filter() to solve all of these problems:
// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

// const fiveAndGreaterOnly = [3,6,8,2]
// const result = fiveAndGreaterOnly.filter(function(num){
//     if (num > 5)
//     return num
// })
// console.log(result);


//***** 

// 2) Given an array of numbers, return a new array that only includes the even numbers.

// const evensOnly = [3,6,8,2]
// const result = evensOnly.filter(function(num){
//     if (num % 2 === 0){
//         return num
//     }
// })
//     console.log(result)

//***** 

//3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

// const fiveCharactersOrFewerOnly = ['dog', 'wolf', 'by', 'family','eaten','camping']
// const result = fiveCharactersOrFewerOnly.filter(function(char){
//     if (char.length <= 5){
//         return char
//     }

// })
//  console.log(result)


//***** 

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

// const peopleWhoBelongToTheIlluminati = [
//     {name: 'Angelina Jolie' , member: true},
//     {name: 'Eric Jones' , member: false},
//     {name: 'Paris Hilton', member: true},
//     {name: 'Kanye West' , member: false},
//     {name: 'Bob Ziroll', member: true},
// ]

// const result = peopleWhoBelongToTheIlluminati.filter(function(belong){
//     if(belong.member === true)
//     return belong
// })
//    console.log(result)

//***** 

// 5) Make a filtered list of all the people who are old enough to see The Matrix (younger than 18)


// const ofAge = [
//     {name: 'Angelina Jolie' , age: 80},
//     {name: 'Eric Jones' , age: 2},
//     {name: 'Paris Hilton' , age: 5},
//     {name: 'Kanye West' , age: 16},
//     {name: 'Bob Ziroll' , age: 100},
// ]
// const result = ofAge.filter(function(ages){
//     if (ages.age > 18)
//     return ages
// })
//  console.log(result)


//--------------------------------

// Use the built-in .map() method on arrays to solve all of these problems:
// 1) Make an array of numbers that are doubles of the first array

// const doubleNumbers = [2,5,100]
// const result = doubleNumbers.map(function(num){
//     return num * 2
// })
//  console.log(result)

//***** 

// 2) Take an array of numbers and make them strings

// const stringItUp = [2,5,100]
// const result = stringItUp.map(function(num){
//     return num.toString()
// })
//     console.log(result)

//***** 

// 3) Capitalize each of an array of names

// const capitalizeNames = [ 'john', 'JACOB', 'jinGleHeimer', 'schmidt']
// const result = capitalizeNames.map(function(name){
//     return name.charAt(0).toUpperCase() + name.substr(1)
// })
//     console.log(result)

//***** 

// 4) Make an array of strings of the names

// const nameOnly = [
//     {name: 'Angelina Jolie' , age: 80},
//     {name: 'Eric Jones' , age: 2},
//     {name: 'Paris Hilton' , age: 5},
//     {name: 'Kanye West' , age: 16},
//     {name: 'Bob Ziroll' , age: 100},
// ]

// const result = nameOnly.map(function(names){
//     return names.name
// })
// console.log(result)

//***** 

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix

// const makeStrings = [
//     {name: 'Angelina Jolie' , age: 80},
//     {name: 'Eric Jones' , age: 2},
//     {name: 'Paris Hilton' , age: 5},
//     {name: 'Kanye West' , age: 16},
//     {name: 'Bob Ziroll' , age: 100},
// ]

// const result = makeStrings.map(function(string){
//     if( string.age >= 18)
//     return (string.name + ' can go see the matrix')
//     else(string.age <= 18)
//     return (string.name + " is under age")
// })
//  console.log(result)

//***** 

// 6) Make an array of the names in h1s, and the ages in h2s

// const readyToPutInTheDOM = [
//     {name: 'Angelina Jolie' , age: 80},
//     {name: 'Eric Jones' , age: 2},
//     {name: 'Paris Hilton' , age: 5},
//     {name: 'Kanye West' , age: 16},
//     {name: 'Bob Ziroll' , age: 100},
// ]

// const result = readyToPutInTheDOM.map(function(dom){
//     return '<h1>' + dom.name + "</h1>" + '<h2>' + dom.age + '</h2>'
// })
// console.log(result)

//---------------------------------

// Use the built-in .reduce() method on arrays to solve all of these problems:
// 1) Turn an array of numbers into a total of all the numbers

// const total = [1,2,3]

// const result = total.reduce(function(final , num){
//     final += num
//     return final
// })
//  console.log(result)

//***** 

// 2) Turn an array of numbers into a long string of all those numbers. 
// Didnt work 

const stringConcat = [1, 2, 3]

const result = stringConcat.join(function (final) {

    return final
})
console.log(result)
//*****

// 3) Turn an array of voter objects into a count of how many people voted

// const voters = [
//     { name: "Bob", age: 30 , voted: true },
//     { name: "Jake", age: 32, voted: true },
//     { name: "Kate", age: 25, voted: false },
//     { name: "Sam", age: 20, voted: false },
//     { name: "Phil", age: 21, voted: true},
//     { name: "Ed", age: 55, voted: true },
//     { name: "Tami",age: 54, voted: true },
//     { name: "Mary", age: 31, voted: false},
//     { name: "Becky", age: 43, voted: false },
//     { name: "Joey", age: 41, voted: true },
//     { name: "Jeff", age: 30, voted: true },
//     { name: "Zack",age: 19, voted: false },
// ]

// const result = voters.reduce(function(final,voter){
//     if(voter.voted){
//         final++
//     }
//     return final
// }, 0)
// console.log(result)


//***** not finished with these three

// Note: You don't necessarily have to use reduce for this, so try to think of multiple ways you could solve this.

// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

// function shoppingSpree

//***** 

// 5) Given an array of arrays, flatten them into a single array

//**** 

// Note: Take a look at Array.concat() to help with this one

// 6) Given an array of potential voters, return an object representing the results of the vote
// Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.

//--------------------

// Use the built-in .sort() method on arrays to solve all of these problems:
// 1) Sort an array from smallest number to largest

// const leastToGreatest = [1,3,5,2,90,20]
// leastToGreatest.sort(function(a,b){
//     return a - b
// })
// console.log(leastToGreatest)

// 2) Sort an array from largest number to smallest

// const greatestToLeast = [1,3,5,2,90,20]
// greatestToLeast.sort(function(a,b){
//     return b - a
// })
// console.log(greatestToLeast)


// 3) Sort an array from shortest string to longest

// const lengthSort = ['dog', 'wolf', 'by', 'family', 'eaten']

// lengthSort.sort(function(a, b){
//     return a.length - b.length
// })
// console.log(lengthSort)

// 4) Sort an array alphabetically
// const alphabetical = ['dog', 'wolf', 'by', 'family', 'eaten']
// alphabetical.sort(function(a , b){
//      if(a < b) { 
//         return - 1; }
// })
// console.log(alphabetical)

// 5) Sort the objects in the array by age

// const byAge = [
//     { name: 'Quiet Samuari', age: 22},
//     { name: 'Arrogant Ambassador', age: 100},
//     { name: 'Missunderstood Observer', age: 2},
//     { name: 'Unlucky Swami', age: 77},
// ]

// byAge.sort(function(a,b){
//     if (a.age < b.age) {
//         return - 1
//     }
// })
// console.log(byAge)
