function bestPlayer(input) {

    let mostGoalsCount = 0;
    let bestPlayerName = "";

    for (let i = 0; i < input.length; i += 2) {
        let playerName = input[i];
        let tempGoalsCount = Number(input[i + 1]);
        if (input[i] === "END") {
            break;
        }

        if (tempGoalsCount === mostGoalsCount) {
            console.log(`${input[i - 2]} is the best player!`);
            break;
        }

        bestPlayerName = playerName;

        if (tempGoalsCount > mostGoalsCount) {
            mostGoalsCount = tempGoalsCount;
        }

        if (tempGoalsCount >= 10) {
            break;
        }
    }

    if (mostGoalsCount >= 3) {
        console.log(`${bestPlayerName} is the best player!`);
        console.log(`He has scored ${mostGoalsCount} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${mostGoalsCount} goals.`);
    }
}

bestPlayer(["Rooney",
"1",
"Junior",
"2",
"Paolinio",
"2",
"END"])
