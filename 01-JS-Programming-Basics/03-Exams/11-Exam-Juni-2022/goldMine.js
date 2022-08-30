function goldMine(input) {
    let locationsCount = Number(input.shift());

    while (input.length > 0) {
        let expectedAverageGoldQuantityPerDay = Number(input.shift());
        let daysCount = Number(input.shift());
        let foundGold = 0;

        let index = 0;
        while (index <= daysCount - 1) {
            foundGold += Number(input.shift());
            index++;
        }
        let averageGold = foundGold / daysCount;
        let diff = Math.abs(expectedAverageGoldQuantityPerDay - averageGold);

        if (averageGold >= expectedAverageGoldQuantityPerDay) {
            console.log(`Good job! Average gold per day: ${averageGold.toFixed(2)}.`);
        } else {
            console.log(`You need ${diff.toFixed(2)} gold.`);
        }
    }

}

goldMine(["1",
    "5",
    "3",
    "10",
    "1",
    "3"])
