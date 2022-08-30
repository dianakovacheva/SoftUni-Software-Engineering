function bestPlayer(input) {
    let bestPlayersPointsCount = 0;
    let bestPlayerName = "";

    for (let i = 0; i < input.length; i += 2) {
        let currentPlayerName = input[i];
        let currentPlayerGoalsCount = Number(input[i + 1]);

        if (input[i] === "END") {
            break;
        }

        if (currentPlayerGoalsCount === bestPlayersPointsCount) {
            console.log(`${input[i - 2]} is the best player!`);
            break;
        }

        bestPlayerName = currentPlayerName;

        if (currentPlayerGoalsCount > bestPlayersPointsCount) {
            bestPlayersPointsCount = currentPlayerGoalsCount;
        }

        if (currentPlayerGoalsCount >= 10) {
            break;
        }
    }

    if (bestPlayersPointsCount >= 3) {
        console.log(`${bestPlayerName} is the best player!`);
        console.log(`He has scored ${bestPlayersPointsCount} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${bestPlayersPointsCount} goals.`);
    }
}

bestPlayer(["Neymar", "2",
    "Ronaldo",
    "1",
    "Messi",
    "3",
    "END"])
