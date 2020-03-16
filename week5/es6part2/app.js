// 1) Replace all the vars with let and const. Alter the code however necessary to make sure this continues to work (so the pet's name isn't "John", but instead "spot" is returned). You only need to delete var and insert let and const
//John is the pet owner, and his name should be stored differently than the other names.

let name = "John"

const age = 101

function runForLoops(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] };
        let name;
        if (pets[i] === 'cat') {
            name = 'fluffy'
        } else {
            name = 'spot'
        }
        console.log('pet name:', name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log('man name:', name)
    return petObjects;
}
runForLoops(['cat', 'dog'])



/* 2) ) Re-write this .map() using an arrow function:
Be aware that if JavaScript sees a { directly after the => it will think it's starting a function, and not starting an object, so the : will be an unexpected symbol.*/

const carrots = ['bright orange', 'ripe', 'rotten']


vegetables = arra => {
    return arra.map(carrot => {
        return { type: "carrot", name: carrot}
    });
}; console.log(vegetables(carrots))


/* 3) Re-write this .filter() using an arrow function: */

const people = [
    {
        name: "Princess Peach",
        friendly: false
    }, {
        name: 'Luigi',
        friendly: true
    }, {
        name: 'Mario',
        friendly: true
    }, {
        name: 'Bower',
        friendly: false
    }
]

// const result = people.filter(function(person){
//    if(person.friendly === true)
//     return person
// })
// console.log(result)

const result9 = people.filter(person => person.friendly === true)
console.log(result9)

/* 4)  Re-write the following functions to be arrow functions: */

// function doMathSum(a,b){
//     return a + b
// }

const result6 = (a,b) => {return a + b;}
console.log(result6(4,3))


// let produceProduct = function(a, b){
//     return a * b
// }
const result2 = (a,b) => {return a * b;}
console.log(result2(4,3))


/* 5) Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:*/
//Hi Kat Stark, how does it feel to be 40?

// firstName should default to "Jane"
// lastName should default to "Doe"
// age should default to 100


printString =(first,last,age) => {
     console.log(`"Hi" ${first} ${last}, how does it feel to be ${age} ? ` )

    }; printString('Jane','Doe', 100)


/*
// 6) Use template literals to build the string from #5* */




/* 7) Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.*/

const animals = [
    {type: 'dog', name: 'theodore'},
    {type: 'cat', name: 'whiskers'},
    {type: 'pig', name: 'piglette'},
    {type: 'dog', name: 'sparky'}
]
const result24 = animals.filter(arr => arr.type === 'dog' ? true : false);
console.log(result24)

/* 8) Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:
*/


printString2 =(first,location) => {
     console.log(`"Hi" ${first}! 

Welcome to ${location}. 

I hope you enjoy your stay. Please ask the president in ${location} if you need anything.` )

    }; printString2('Janice','Hawaii')