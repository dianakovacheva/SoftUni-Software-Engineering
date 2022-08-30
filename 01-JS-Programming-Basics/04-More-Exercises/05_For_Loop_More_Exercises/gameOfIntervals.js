function gameOfIntervals(input) {
    let peopleCount = Number(input[0]);
    let endResult = 0;
    let numbersCountBetween0And9 = 0;
    let numbersCountBetween10And19 = 0;
    let numbersCountBetween20And29 = 0;
    let numbersCountBetween30And39 = 0;
    let numbersCountBetween40And50 = 0;
    let invalidNumbersCount = 0;

    for (let i = 1; i < input.length; i++) {
        let currentNumber = Number(input[i]);

        if (currentNumber >= 0 && currentNumber <= 9) {
            endResult += currentNumber * 0.20;
            numbersCountBetween0And9++;
        } else if (currentNumber >= 10 && currentNumber <= 19) {
            endResult += currentNumber * 0.30;
            numbersCountBetween10And19++;
        } else if (currentNumber >= 20 && currentNumber <= 29) {
            endResult += currentNumber * 0.40;
            numbersCountBetween20And29++;
        } else if (currentNumber >= 30 && currentNumber <= 39) {
            endResult += 50;
            numbersCountBetween30And39++;
        } else if (currentNumber >= 40 && currentNumber <= 50) {
            endResult += 100;
            numbersCountBetween40And50++;
        } else if (currentNumber < 0 || currentNumber > 50) {
            endResult = endResult / 2;
            invalidNumbersCount++;
        }
    }

    let percentageNumCountBetween0And9 = numbersCountBetween0And9 / peopleCount * 100;
    let percentageNumCountBetween10And19 = numbersCountBetween10And19 / peopleCount * 100;
    let percentageNumCountBetween20And29 = numbersCountBetween20And29 / peopleCount * 100;
    let percentageNumCountBetween30And39 = numbersCountBetween30And39 / peopleCount * 100;
    let percentageNumCountBetween40And50 = numbersCountBetween40And50 / peopleCount * 100;
    let percentageInvalideNumCount = invalidNumbersCount / peopleCount * 100;

    console.log(endResult.toFixed(2));
    console.log(`From 0 to 9: ${percentageNumCountBetween0And9.toFixed(2)}%`);
    console.log(`From 10 to 19: ${percentageNumCountBetween10And19.toFixed(2)}%`);
    console.log(`From 20 to 29: ${percentageNumCountBetween20And29.toFixed(2)}%`);
    console.log(`From 30 to 39: ${percentageNumCountBetween30And39.toFixed(2)}%`);
    console.log(`From 40 to 50: ${percentageNumCountBetween40And50.toFixed(2)}%`);
    console.log(`Invalid numbers: ${percentageInvalideNumCount.toFixed(2)}%`);
}
gameOfIntervals(["10",
    "43",
    "57",
    "-12",
    "23",
    "12",
    "0",
    "50",
    "40",
    "30",
    "20"
])