function darts(input) {
    let playerName = input[0];
    let startingPoints = 301;
    let successfullShotsCount = 0;
    let unsuccessfulShotsCount = 0;

    for (let i = 1; i < input.length; i += 2) {
        let sector = input[i];
        let currentPoints = Number(input[i + 1]);

        if (input[i] === "Retire" || startingPoints === 0) {
            break;
        }
        if (sector === "Double") {
            currentPoints *= 2;
        } else if (sector === "Triple") {
            currentPoints *= 3;
        }
        if (startingPoints >= currentPoints) {
            startingPoints -= currentPoints;
            successfullShotsCount++;
        } else {
            unsuccessfulShotsCount++;
            continue;
        }

    }
    if (startingPoints === 0) {
        console.log(`${playerName} won the leg with ${successfullShotsCount} shots.`);
    } else {
        console.log(`${playerName} retired after ${unsuccessfulShotsCount} unsuccessful shots.`);
    }
}


darts(["Stephen Bunting",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Double",
"7",
"Single",
"12",
"Double",
"1",
"Single",
"1"])






