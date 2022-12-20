function blackFlag(arr) {

    let dayCounter = 0;
    let daysOfPlunder = Number(arr[0]);
    let dailyPlunder = Number(arr[1]);
    let expectedPlunder = Number(arr[2]);
    let totalGainedPlunder = 0;

    // Every third day: Add additional plunder to their total gain, which is 50% of the daily plunder
    // Every fifth day: They lose 30% of their total plunder

    for (let i = 0; i < daysOfPlunder; i++) {
        dayCounter++;
        totalGainedPlunder += dailyPlunder;

        if (dayCounter % 3 === 0) {
            totalGainedPlunder += dailyPlunder * 0.50;
        }

        if (dayCounter % 5 === 0) {
            totalGainedPlunder *= 0.70;
        }
    }

    if (totalGainedPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalGainedPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percentageOfTarget = (totalGainedPlunder / expectedPlunder) * 100;
        console.log(`Collected only ${percentageOfTarget.toFixed(2)}% of the plunder.`);
    }
}

blackFlag(["10",
    "20",
    "380"]
);