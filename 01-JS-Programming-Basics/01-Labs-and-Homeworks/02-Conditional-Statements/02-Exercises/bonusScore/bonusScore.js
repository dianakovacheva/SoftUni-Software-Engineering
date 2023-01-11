function bonusScore(input) {

    let startPoints = Number(input[0]);
    let bonusPoints = 0.0;


    if (startPoints <= 100) {
        bonusPoints = bonusPoints + 5;
    } else if (startPoints > 100 && startPoints <= 1000) {
        bonusPoints = bonusPoints + startPoints * 0.2;
    } else {
        bonusPoints = bonusPoints + startPoints * 0.1;
    }

    if (startPoints % 2 === 0) {
        bonusPoints += 1;
    //} else if (Number.isInteger(startPoints / 5) && (startPoints / 5) % 2 !== 0) {
    } else if (startPoints % 10 === 5) {
        bonusPoints += 2;
    }

    let totalPoints = startPoints + bonusPoints;

    console.log(bonusPoints);
    console.log(totalPoints);
}

bonusScore(["175"])