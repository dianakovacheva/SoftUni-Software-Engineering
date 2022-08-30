function vacation(input) {
    let index = 0;
    let neededMoney = Number(input[index]);
    index++;
    let availableMoney = Number(input[index]);
    index++;
    let spendDayCounter = 0;
    let daysCounter = 0;
    let canSaveMoney = true;

    while (neededMoney > availableMoney) {
        daysCounter++;
        let command = input[index];
        index++;
        let tempMoney = Number(input[index]);
        index++;

        switch (command) {
            case "spend":
                availableMoney -= tempMoney;
                spendDayCounter++;
                break;
            case "save":
                availableMoney += tempMoney;
                spendDayCounter = 0;
                break;
        }

        if (availableMoney < 0) {
            availableMoney = 0;
        }

        if (spendDayCounter === 5) {
            console.log("You can't save the money.");
            console.log(daysCounter);
            canSaveMoney = false;
            break;
        }
    }

    if (canSaveMoney) {
        console.log(`You saved the money for ${daysCounter} days.`);
    }
}

vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])