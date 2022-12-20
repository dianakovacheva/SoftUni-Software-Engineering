function treasureHunt(arr) {
    let treasureChest = arr.shift()
    if (treasureChest !== '') {
        treasureChest = treasureChest.split('|')
    }
    else {
        treasureChest = [];
    }

    let commandRow = arr.shift();

    while (commandRow !== "Yohoho!") {
        let splitedCommandRow = commandRow.split(' ');
        let command = splitedCommandRow[0];

        switch (command) {
            case "Loot":
                let items = splitedCommandRow.slice(1);
                items.forEach(item => {
                    if (!treasureChest.includes(item)) {
                        treasureChest.unshift(item);
                    }
                });
                break;
            case "Drop":
                let index = Number(splitedCommandRow[1]);
                if (index >= 0 && index < treasureChest.length) {
                    let removedLoot = treasureChest.splice(index, 1);
                    treasureChest.push(removedLoot[0]);
                }
                break;
            case "Steal":
                let stolenItems = [];
                let count = Number(splitedCommandRow[1]);

                // if (treasureChest.length < count) 
                //for (let i = 0; i < count; i++) {
                let counter = 1;
                while (counter <= count && treasureChest.length > 0) {
                    let currentItem = treasureChest.splice(-1, 1);
                    stolenItems.unshift(currentItem[0]);
                    counter++;
                }
                console.log(stolenItems.join(', '));
                break;
        }

        commandRow = arr.shift();
    }


    let leftItemsCount = treasureChest.length;

    if (leftItemsCount > 0) {
        let sumLengthEachItem = 0;
        for (let element of treasureChest) {
            sumLengthEachItem += element.length;
        }

        let averageTreasureGain = sumLengthEachItem / leftItemsCount;
        console.log(`Average treasure gain: ${averageTreasureGain.toFixed(2)} pirate credits.`);
    }
    else {
        console.log("Failed treasure hunt.");

    }
}

treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])
    ;