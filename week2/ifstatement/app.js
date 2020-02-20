var x = 1
var y = 3
console.log (x > y)
//
if (x > y){
    console.log('is greater than')
}else{
    console.log('is not greater than')
}
// 
var animal = 'cat'
    console.log (animal.length)
if (animal.length === 3){
    console.log('is the length')
}
// 
if ('cat' === 'dog'){
    console.log('they are the same')
} else{
    console.log('they are not the same')
}
///
var person = {
    name: "Bobby",
    age: 12
};
console.log(Object.keys(person))
////////
if (person.age === 12) {
    console.log(person.age);
}
/////////////
if (person.age > 18){
    console.log("bobby can go to the movies")
} else {
    console.log("bobby can't go to the movies")
}
// //////
 console.log(person.name.charAt(0))

if (person.name.charAt(0).startsWith("B")){
    console.log("bobby can go to the moves")
} else {
    console.log("bobby cant go to the movies")
};

if (person.name.charAt(0).startsWith("B")&&(person.age > 18)){
    console.log("bobby can go to the moves")
} else {
    console.log("bobby cant go to the movies")
};
//
