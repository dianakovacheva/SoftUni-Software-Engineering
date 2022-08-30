function gameNumberWars(input) {
    let firstPlayerName = input[0];
    let secondPlayerName = input[1];
    let pointsCountFirstPlayer = 0;
    let pointsCountSecondPlayer = 0;
    let gameEnded = false;


    for (let i = 2; i < input.length; i += 2) {
        let cardFirstPlayer = Number(input[i]);
        let cardSecondPlayer = Number(input[i + 1]);

        if (input[i] === "End of game") {
            gameEnded = true;
            console.log(`${firstPlayerName} has ${pointsCountFirstPlayer} points`);
            console.log(`${secondPlayerName} has ${pointsCountSecondPlayer} points`);
            break;
        }

        if (cardFirstPlayer > cardSecondPlayer) {
            pointsCountFirstPlayer += (cardFirstPlayer - cardSecondPlayer);
        } else if (cardFirstPlayer < cardSecondPlayer) {
            pointsCountSecondPlayer += (cardSecondPlayer - cardFirstPlayer);
        } else {
            console.log("Number wars!");
            if (input[i + 2] > input[i + 3]) {
                console.log(`${firstPlayerName} is winner with ${pointsCountFirstPlayer} points`);
            } else {
                console.log(`${secondPlayerName} is winner with ${pointsCountSecondPlayer} points`);
            }
            gameEnded = true;
            break;
        }
    }

    if (!gameEnded) {
        if (pointsCountFirstPlayer > pointsCountSecondPlayer) {
            console.log(`${firstPlayerName} is winner with ${pointsCountFirstPlayer} points`);
        } else {
            console.log(`${secondPlayerName} is winner with ${pointsCountSecondPlayer} points`);
        }
    }

}



gameNumberWars(["Aleks",
    "Georgi",
    "4",
    "5",
    "3",
    "2",
    "4",
    "3",
    "4",
    "4",
    "5",
    "2"])









