const readlineSync = require('readline-sync');

var playerName = readlineSync.question('May I have your name? ')
let isAlive = true;
let hasKey = false;

const intro = `Welcome to the Escape Room Stimulation!`;

console.log(intro);

while (isAlive == true) {
    const gameMenuOptions = readlineSync.keyIn(`Press the number keys to enter an option \n 1. Put hand in hole \n 2. Find the key, or \n 3. Open the door \n Enter your selection:`, { limit: `$< 1-3>` });
        console.log(typeof gameMenuOptions)   
    if (gameMenuOptions == 1) {

        console.log(`Oh no! ${playerName}, it was a trap! You are Dead. Sorry!`);
        isAlive = false;

    } else if (gameMenuOptions == 2 && hasKey == false) {

        console.log(`You found the key successfully..... proceed with the game!`);
        hasKey = true;

    } else if (gameMenuOptions == 2 && hasKey == true) {

        console.log(`You already found the key earlier... move to the next step!`);


    } else if (gameMenuOptions == 3 && hasKey == false) {

        console.log(`You can turn the handle of the door... It is locked... find the key first!`);

    } else if (gameMenuOptions == 3 && hasKey == true) {

        console.log(`Congratulations!  You have found the key and have successfully unlocked the door!`);
        isAlive = false;
    }
};