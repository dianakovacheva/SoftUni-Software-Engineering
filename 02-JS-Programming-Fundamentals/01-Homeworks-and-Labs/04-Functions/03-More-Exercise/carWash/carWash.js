function carWash(commandsArray) {

    let totalValue = 0;
    let soapPercentageValue = 10;
    let waterPercentageValue = 0.20;
    let vacuumCleanerPercentageValue = 0.25;
    let mudPercentageValue = 0.1;

    for (let i = 0; i < commandsArray.length; i++) {
        let currentCommand = commandsArray[i];

        switch (currentCommand) {
            case "soap": totalValue += soapPercentageValue; break;
            case "water": totalValue += totalValue * waterPercentageValue; break;
            case "vacuum cleaner": totalValue += totalValue * vacuumCleanerPercentageValue; break;
            case "mud": totalValue -= totalValue * mudPercentageValue; break;
        }
    }

    console.log(`The car is ${totalValue.toFixed(2)}% clean.`);
}

carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);