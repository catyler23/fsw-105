// step 1)__

var officeItems = [
  "stapler",
  "monitor",
  "computer",
  "desk",
  "lamp",
  "computer",
  "lamp",
  "stapler",
  "computer",
  "computer"
];

// var search = "computer";

// var count = officeItems.reduce(function(n, val) {
//   return n + (val === search);
// }, 0);
// console.log(count);


// function countItemOnList(nameOfList, itemToBeSearched)
// {
//     var numberOfItems = 0;
//     for(i=0; i < nameOfList.length; i++)
//     {
//         if (nameOfList[i] === itemToBeSearched)
//         {
//             numberOfItems = numberOfItems + 1;
//         }
//     }
//     console.log("Final Count: " + numberOfItems);
// }
//     countItemOnList(officeItems, "computer");
//////////////////////////////////////////////////


var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  },
  {
    name: "Madeline",
    age: 80,
    gender: "female"
  },
  {
    name: "Cheryl",
    age: 22,
    gender: "female"
  },
  {
    name: "Sam",
    age: 30,
    gender: "male"
  },
  {
    name: "Suzy",
    age: 4,
    gender: "female"
  }
];

// step 2)__

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
  if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18) {
    console.log("They can go to the movies");
  } else {
    console.log("They can't go to the movies");
  }
}

// step 3)__

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if (peopleWhoWantToSeeMadMaxFuryRoad[0].age > 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max")
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max")
    }
}

//step 4)__

// var gender = ''
// for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
//   if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'male') {
//     gender = 'him'
//   } else {
//     gender = 'she'
//   }

//   if (peopleWhoWantToSeeMadMaxFuryRoad[0].age > 18) {
//     console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max" + " don't let " + gender + " in.")
//   } else {
//     console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max" + " don't let " + gender + " in.")
//   }
// }

// step 5)__

// for (var i = 0; i <= 101; i++){
//     if([i] % 2 === 0){
//         console.log([i])
//     }
// }

/// Extra 

///only one more problem

// var light = [
//   [2, 5, 435, 4, 3],
//   [1, 1, 1, 1, 3],
//   [9, 3, 4, 2]
// ];


// let {

  // isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!'); /// Tenary Operations