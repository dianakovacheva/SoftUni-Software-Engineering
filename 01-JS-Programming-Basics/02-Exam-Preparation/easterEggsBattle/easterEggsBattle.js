function easterEggsBattle(input) {
    let firstPlayerEggsCount = Number(input[0]);
    let secondPlayerEggsCount = Number(input[1]);
    let index = 2;
    let command = input[index];
    index++;

    while (command !== "End") {
        if (command === "one") {
            secondPlayerEggsCount--;
        } else {
            firstPlayerEggsCount--;
        }

        if (firstPlayerEggsCount < 0) {
            console.log(`Player one is out of eggs. Player two has ${secondPlayerEggsCount} eggs left.`);
            break;
        } else {
            console.log(`Player two is out of eggs. Player one has ${firstPlayerEggsCount} eggs left.`);
        } break;
    }
    command = input[index];
    index++;

    if (command === "End") {
        console.log(`Player one has ${firstPlayerEggsCount} eggs left.`);
    } else {
        console.log(`Player two has ${secondPlayerEggsCount} eggs left.`);
    }

}

easterEggsBattle(["5"
    , "4"
    , "one"
    , "two"
    , "one",
    "two",
    "two",
    "End"
])