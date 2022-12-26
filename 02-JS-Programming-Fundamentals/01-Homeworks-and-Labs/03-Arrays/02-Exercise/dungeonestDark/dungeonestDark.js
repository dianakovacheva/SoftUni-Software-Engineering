function dungeonestDark(arr) {

    let health = 100;
    let coins = 0;
    let roomCounter = 0;
    let isNotKilled = true;


    let splittedRooms = arr[0].split('|');

    for (let i = 0; i < splittedRooms.length; i++) {
        roomCounter++;
        let currentRoom = splittedRooms[i].split(' ');
        let item = currentRoom[0];
        let number = Number(currentRoom[1]);

        switch (item) {
            case "potion":
                if (health + number > 100) {
                    number = 100 - health;
                    health = 100;
                } else {
                    health += number;
                }
                console.log(`You healed for ${number} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case "chest":
                console.log(`You found ${number} coins.`);
                coins += number;
                break;
            default:
                let monsterName = item;
                health -= number;

                if (health > 0) {
                    console.log(`You slayed ${monsterName}.`);
                } else {
                    isNotKilled = false;
                    console.log(`You died! Killed by ${monsterName}.`);
                    console.log(`Best room: ${roomCounter}`);
                    break;
                }
        }

        if (!isNotKilled) {
            break;
        }
    }

    if (isNotKilled) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}


dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);