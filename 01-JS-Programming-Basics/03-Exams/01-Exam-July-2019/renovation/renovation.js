function renovation(input) {
    let wallHeigth = Number(input[0]);
    let wallWidth = Number(input[1]);
    let percentageWallOpenings = Number(input[2]);

    let allWallPainted = false;
    let totalWallArea = wallHeigth * wallWidth * 4;
    let netWallArea = Math.ceil(totalWallArea - totalWallArea * percentageWallOpenings / 100);
    let paintedWallArea = 0;
    let leftPaint = 0;

    for (let i = 3; i < input.length; i++) {
        if (input[i] === "Tired!") {
            break;
        }
        if (allWallPainted) {
            leftPaint += Number(input[i]);
        } else {
            paintedWallArea += Number(input[i]);
        }
        if (paintedWallArea >= netWallArea) {
            leftPaint += paintedWallArea-netWallArea;
            allWallPainted = true;
        }
    }

    if (allWallPainted && leftPaint === 0) {
        console.log("All walls are painted! Great job, Pesho!");
    } else if (allWallPainted) {
        console.log(`All walls are painted and you have ${leftPaint} l paint left!`);
    } else {
        console.log(`${netWallArea - paintedWallArea} quadratic m left.`);
    }
}

renovation(["2", "3", "25", "6", "7", "8"])
