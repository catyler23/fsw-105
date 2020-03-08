// 1)
var phrase = 'hello'
var uppercasedHello = phrase.toUpperCase()
console.log(uppercasedHello)
var lowercasedHello = uppercasedHello.toLowerCase()
console.log(lowercasedHello)

// 2)
var str = "capreases";
var n = (str.length / 2);
console.log(Math.floor(n))

// 3)
var str = "Welcome to my inspired world";
var res = str.split(" ");
console.log(res)

var res2 = str.split(" ",2);
console.log(res2)


// 4)
function sayName(firstHalf, secondHalf) {
    var phrase = 'It iS a Great Day.';
    // console.log(phrase.length)
    var firstHalf = phrase.slice(0, 9)
    //    console.log(firstHalf)
    var secondHalf = phrase.slice(9)
    //    console.log(secondHalf)
    console.log(firstHalf.toUpperCase() + secondHalf.toLowerCase())

} sayName('firstHalf', 'secondHalf')


// 5) code challenge
function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {

        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }

    return splitStr.join(' '); 
 }

 console.log(titleCase("I'm a little tea pot"));


/////////// Array Method

var fruit = ['banana', 'apple', 'orange', 'watermelon'];
var vegetables = ['carrot', 'tomato', 'pepper', 'lettuce'];

/* console.log('fruit: ', fruit);
    console.log('vegetables: ', vegetables);*/


// 1)
vegetables.pop()
console.log(vegetables);

// 2)
fruit.shift()
console.log(fruit);

// 3)
var orangeIndex = fruit.indexOf('orange')
console.log(orangeIndex);

// 4)
fruit.push(1)
console.log(fruit);

// 5)
console.log(vegetables.length);

// 6)
vegetables.push(3)
console.log(vegetables);

// 7)

var newArray = fruit.concat(vegetables)
console.log(newArray)

// 8)
newArray.splice(4,2)
console.log(newArray)

// 9)
newArray.reverse()
console.log(newArray)

// 10)
console.log(newArray.join())
