function balls(input) {
    let ballsCount = Number(input[0]);
    let redBallsCount = 0;
    let orangeBallsCount = 0;
    let yellowBallsCount = 0;
    let whiteBallsCount = 0;
    let blackBallsCount = 0;
    let otherColorBallsCount = 0;
    let totalPoints = 0;

    for (let i = 1; i < input.length; i++) {
        let currentColor = input[i];

        switch (currentColor) {
            case "red":
                redBallsCount++;
                totalPoints += 5;
                break;
            case "orange":
                orangeBallsCount++;
                totalPoints += 10;
                break;
            case "yellow":
                yellowBallsCount++;
                totalPoints += 15;
                break;
            case "white":
                whiteBallsCount++;
                totalPoints += 20;
                break;
            case "black":
                blackBallsCount++;
                totalPoints = Math.floor(totalPoints / 2);
        }

        if (currentColor !== "red" && currentColor !== "orange" && currentColor !== "yellow"
            && currentColor !== "white" && currentColor !== "black") {
            otherColorBallsCount++;
            continue;
        }
    }

    console.log(`Total points: ${totalPoints}`);
    console.log(`Red balls: ${redBallsCount}`);
    console.log(`Orange balls: ${orangeBallsCount}`);
    console.log(`Yellow balls: ${yellowBallsCount}`);
    console.log(`White balls: ${whiteBallsCount}`);
    console.log(`Other colors picked: ${otherColorBallsCount}`);
    console.log(`Divides from black balls: ${blackBallsCount}`);



}

balls(["5",
    "red",
    "red",
    "ddd",
    "ddd",
    "ddd"])
