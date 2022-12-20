function manOWar(arr) {
    let pirateShipStatus = arr.shift().split('>').map(x => Number(x));
    let warshipStatus = arr.shift().split('>').map(x => Number(x));
    let maxHealth = Number(arr.shift());

    let commandArray = arr.shift();
    let isLost = false;
    let isWon = false;


    while (commandArray !== "Retire" && !isLost && !isWon) {
        let splitedArray = commandArray.split(' ');
        let command = splitedArray[0];
        let index = Number(splitedArray[1]);


        switch (command) {
            case "Fire":
                let damage = Number(splitedArray[2]);
                if (index >= 0 && index < warshipStatus.length) {
                    warshipStatus[index] -= damage;
                }

                if (warshipStatus[index] <= 0) {
                    isWon = true;
                }
                break;
            case "Defend":
                let endIndex = Number(splitedArray[2]);
                let damages = Number(splitedArray[3]);
                if (index >= 0 && index < pirateShipStatus.length && endIndex >= 0 && endIndex < pirateShipStatus.length && endIndex > index) {

                    for (let i = index; i <= endIndex; i++) {
                        pirateShipStatus[i] -= damages;
                        if (pirateShipStatus[i] <= 0) {
                            isLost = true;
                            break;
                        }
                    }

                }
                break;
            case "Repair":
                let health = Number(splitedArray[2]);
                if (index >= 0 && index < pirateShipStatus.length) {
                    pirateShipStatus[index] = Math.min(pirateShipStatus[index] + health, maxHealth)
                    // if (pirateShipStatus[index] + health <= maxHealth) {
                    //     pirateShipStatus[index] += health;
                    // } else {
                    //     pirateShipStatus[index] = maxHealth;
                    // }
                }

                break;
            case "Status":
                let counterNeedRepairSoon = 0;
                for (let section of pirateShipStatus) {
                    if (section < maxHealth * 0.2) {
                        counterNeedRepairSoon++;
                    }
                }
                console.log(`${counterNeedRepairSoon} sections need repair.`);
                break;
        }
        commandArray = arr.shift()
    }

    let sumPirateShip = 0;

    for (let section of pirateShipStatus) {
        sumPirateShip += section;
    }

    let sumWarship = 0;

    for (let section of warshipStatus) {
        sumWarship += section;
    }

    if (isLost) {
        console.log("You lost! The pirate ship has sunken.");
    }
    else if (isWon) {
        console.log("You won! The enemy ship has sunken.");
    } else {
        console.log(`Pirate ship status: ${sumPirateShip}\nWarship status: ${sumWarship}`);
    }
}

manOWar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 300",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])


