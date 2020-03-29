const readlineSync = require('readline-sync');

const name = readlineSync.question('May I have your name? ');

readlineSync.question('Hello ' + name + ', Welcome to Super Mario ! Press Enter to begin. ');

const enemys = ['Koopa Troopa', 'Bowser', 'Waluigi']
const treasureBox = ['Health', 'Coins', 'Stars', 'Grow']
var prize = []
let playerHealth = 50
const options = ['Walk', 'Exit', 'Treasure']
let pickUp = treasureBox[Math.floor(Math.random() * treasureBox.length)];

function mario() {
    const attackPower = Math.floor(Math.random() * (10 - 4 + 3) + 5)
    const enemy = enemys[Math.floor(Math.random() * enemys.length)]
    let enemysHealth = 50
    const enemysPower = Math.floor(Math.random() * (10 - 4 + 2) + 5)

    const index = readlineSync.keyInSelect(options, 'What do you want to do next?')

    if (options[index] == 'Exit') {``
        return playerHealth = 0;
    } else if (options[index] == 'Treasure') {
        console.log(name + ': \n' + playerHealth + '\nTreasure Box: ' + pickUp)
    } else if (options[index] === 'Walk') {
        let key = Math.random()
        if (key <= .3) {
            console.log('Walking.... ')
        } else if (key >= .3) {
            console.log(enemy + ' showed up.')

            while (enemysHealth > 0 && playerHealth > 0) {

                const user = readlineSync.question('What do you want to do? Enter "r" to run or "a" to attack or "h" for health: ')

                switch (user) {
                    case 'r':
                        const run = Math.random()
                        if (run < .7) {
                            console.log('Before you can run ' + enemy + ' attacks you with: ' + enemysPower)
                        } else {
                            console.log('You Got Away!!')
                            return playerHealth = 0;
                            break
                            
                        }
                    case 'a':
                        enemysHealth -= attackPower
                        console.log('You attacked ' + enemy + ' with ' + attackPower + ' attack power')

                        playerHealth -= enemysPower
                        console.log('Enemy just attacked you with: ' + enemysPower + ' attack power.' + '\nYour enemy health is ' + enemysHealth)

                        if (enemysHealth <= 0) {
                            console.log('You killed ' + enemy + '\n' + enemy + ' left: ' + 'the Key open the treasure. '+ '\n' + 'You pickup a ' + pickUp )
                            let loot = Math.random()
                            if (loot <= .4) {
                                prize.push(pickUp)
                            }
                        } else if (playerHealth <= 0) {
                            console.log(enemy + ' has vanquished you. You are dead NOW.')
                        }
                    
                    case 'h':
                        playerHealth = playerHealth
                        console.log('Your health is ' + playerHealth)
                }
            }
        }
    }
}

while (playerHealth > 0) {
    playerRestore = function () {
        playerActive = true;
        playerHealth = 50
    };
    playerRestore()
    mario()
}