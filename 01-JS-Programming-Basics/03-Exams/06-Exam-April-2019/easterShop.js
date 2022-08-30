function easterShop(input) {
    let availableEggsCount = Number(input[0]);
    let soldEggsCount = 0;
    let wantedEggsCount = 0;

    for (let i = 1; i < input.length; i += 2) {
        let command = input[i];
        let eggsCount = Number(input[i + 1]);
        if (command === "Close") {
            console.log("Store is closed!");
            console.log(`${soldEggsCount} eggs sold.`);
            break;
        }

        if (command === "Buy") {
            wantedEggsCount = eggsCount;
            if (wantedEggsCount > availableEggsCount) {
                console.log("Not enough eggs in store!");
                console.log(`You can buy only ${availableEggsCount}.`);
                break;
            }
            availableEggsCount -= eggsCount;
            soldEggsCount += eggsCount;
        } else if (command === "Fill") {
            availableEggsCount += eggsCount;
        }
    }
}

easterShop(["20",
"Fill",
"30",
"Buy",
"15",
"Buy",
"20",
"Close"])





