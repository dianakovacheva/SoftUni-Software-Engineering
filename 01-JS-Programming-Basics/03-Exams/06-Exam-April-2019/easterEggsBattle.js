function easterEggsBattle(input) {
    let eggsCountFirstPlayer = Number(input[0]);
    let eggsCountSecondPlayer = Number(input[1]);

    for (let i = 2; i < input.length; i++) {
        let currentWinner = input[i];

        if (eggsCountFirstPlayer === 0 || eggsCountSecondPlayer === 0 || input[i] === "End") {
            console.log(`Player one has ${eggsCountFirstPlayer} eggs left.`);
            console.log(`Player two has ${eggsCountSecondPlayer} eggs left.`);
            break;
        }

        if (currentWinner === "one") {
            eggsCountSecondPlayer--;
        } else {
            eggsCountFirstPlayer--;
        }
    }

    if (eggsCountFirstPlayer === 0) {
        console.log(`Player one is out of eggs. Player two has ${eggsCountSecondPlayer} eggs left.`);
    } else if (eggsCountSecondPlayer === 0) {
        console.log(`Player two is out of eggs. Player one has ${eggsCountFirstPlayer} eggs left.`);
    }
}


easterEggsBattle(["6",
    "3",
    "one",
    "two",
    "two",
    "one",
    "one"
])