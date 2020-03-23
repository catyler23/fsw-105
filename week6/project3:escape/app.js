const readlineSync = require('readline-sync');

var playerName = readlineSync.question('May I have your name? ')
let isAlive = true;
let hasKey = false;

const intro = `Welcome to the Escape Room Stimulation!`;

console.log(intro);

while (isAlive == true) {
    const menuID = readlineSync.keyIn(`Press the number keys to enter an option \n 1. Put hand in hole \n 2. Find the key, or \n 3. Open the door \n Enter your selection:`, {limit: '$<1-3>'});

    if (menuID == 1) {

        console.log(`Oh no! ${playerName}, you put your hand in the hole and it was a trap! You are Dead. Sorry!`);
        isAlive = false;

    } else if (menuID == 2 && hasKey == false) {

        console.log(`${playerName}, You found the key successfully..... proceed with the game!`);
        hasKey = true;

    } else if (menuID == 2 && hasKey == true) {

        console.log(`${playerName}, You already found the key earlier... move to the next step!`);


    } else if (menuID == 3 && hasKey == false) {

        console.log(`You can turn the handle of the door... It is locked... find the key first!`);

    } else if (menuID == 3 && hasKey == true) {

        console.log(`Congratulations ${playerName}!  You have found the key and have successfully unlocked the door!`);
        isAlive = false;
    }
};