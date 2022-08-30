function easterEggs(input) {
    let totalEggsCount = Number(input[0]);
    let redEggsCount = 0;
    let orangeEggsCount = 0;
    let blueEggsCount = 0;
    let greenEggsCount = 0;

    for (let i = 1; i < input.length; i++) {
        let currentEggsColor = input[i];

        switch (currentEggsColor) {
            case "red":
                redEggsCount++;
                red = currentEggsColor;
                break;
            case "orange":
                orangeEggsCount++;
                orange = currentEggsColor;
                break;
            case "blue":
                blueEggsCount++;
                blue = currentEggsColor;
                break;
            case "green":
                greenEggsCount++;
                green = currentEggsColor;
                break;
        }
    }

    console.log(`Red eggs: ${redEggsCount}`);
    console.log(`Orange eggs: ${orangeEggsCount}`);
    console.log(`Blue eggs: ${blueEggsCount}`);
    console.log(`Green eggs: ${greenEggsCount}`);

    if (redEggsCount > orangeEggsCount) {
        if (redEggsCount > blueEggsCount) {
            if (redEggsCount > greenEggsCount) {
                console.log(`Max eggs: ${redEggsCount} -> red`);
            } else {
                console.log(`Max eggs: ${greenEggsCount} -> green`);
            }
        } else {
            if (blueEggsCount > greenEggsCount) {
                console.log(`Max eggs: ${blueEggsCount} -> blue`);
            } else {
                console.log(`Max eggs: ${greenEggsCount} -> green`);
            }
        }
    } else {
        if (orangeEggsCount > blueEggsCount) {
            if (orangeEggsCount > greenEggsCount) {
                console.log(`Max eggs: ${orangeEggsCount} -> orange`);
            } else {
                console.log(`Max eggs: ${greenEggsCount} -> green`);
            }
        } else {
            if (blueEggsCount > greenEggsCount) {
                console.log(`Max eggs: ${blueEggsCount} -> blue`);
            } else {
                console.log(`Max eggs: ${greenEggsCount} -> green`);
            }
        }
    }
}

easterEggs(["7",
    "orange",
    "blue",
    "green",
    "green",
    "blue",
    "red",
    "green"])

