function balls(input) {
    let ballsCount = Number(input[0]);
    let points = 0;
    let totalPoints = 0;
    let redBallsCount = 0;
    let orangeBallCount = 0;
    let yellowBallCount = 0;
    let whiteBallCount = 0;
    let blackBallCount = 0;
    let otherColorBallCount = 0;
    let dividedBlackBallCount = 0;

    for (let i = 1; i < input.length; i++) {
        let color = input[i];
        switch (color) {
            case "red":
                points = 5;
                totalPoints += points;
                redBallsCount++;
                break;
            case "orange":
                points = 10;
                totalPoints += points;
                orangeBallCount++;
                break;
            case "yellow":
                points = 15;
                totalPoints += points;
                yellowBallCount++;
                break;
            case "white":
                points = 20;
                totalPoints += points;
                whiteBallCount++;
                break;
            case "black":
                points = Math.floor(totalPoints / 2);
                totalPoints = points;
                blackBallCount++;
                dividedBlackBallCount++;
                break;
            default:
                otherColorBallCount++;
        }

        if (color !== "red" && color !== "orange" && color !== "yellow" && color !== "white" && color !== "black") {
            continue;
        }
    }

    console.log(`Total points: ${totalPoints}`);
    console.log(`Red balls: ${redBallsCount}`);
    console.log(`Orange balls: ${orangeBallCount}`);
    console.log(`Yellow balls: ${yellowBallCount}`);
    console.log(`White balls: ${whiteBallCount}`);
    console.log(`Other colors picked: ${otherColorBallCount}`);
    console.log(`Divides from black balls: ${dividedBlackBallCount}`);

}

balls(["3",
    "white",
    "black",
    "pink"])


