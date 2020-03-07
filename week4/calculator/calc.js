const readlineSync = require('readline-sync');

function addTwoInputNumbers(number1, number2) {
    return 'Adding ' + number1 + ' with ' + number2 + ' gives you a result of: ' + (number1 + number2)
}
function multiplyTwoInputNumbers(number1, number2) {
    return 'Multiply ' + number1 + ' with ' + number2 + ' gives you a result of: ' + (number1 * number2)
}
function subTwoInputNumbers(number1, number2) {
    return 'Subtract ' + number1 + ' with ' + number2 + ' gives you a result of: ' + (number1 - number2)
}
function divideTwoInputNumbers(number1, number2) {
    return 'Dividing ' + number1 + ' with ' + number2 + ' gives you a result of: ' + (number1 / number2)
}

var firstNumber = readlineSync.questionInt('Please enter your first number: ');
var secondNumber = readlineSync.questionInt('Please enter your second number: ');
var selectedOperator = readlineSync.question('Please enter the operation to perform: add, sub, mul, div: ');

if (selectedOperator === 'add') {
    console.log(addTwoInputNumbers(firstNumber, secondNumber))
} else if (selectedOperator === 'sub') {
    console.log(subTwoInputNumbers(firstNumber, secondNumber))
} else if (selectedOperator === 'mul') {
    console.log(multiplyTwoInputNumbers(firstNumber, secondNumber))
} else if (selectedOperator === 'div') {
    console.log(divideTwoInputNumbers(firstNumber, secondNumber))
}