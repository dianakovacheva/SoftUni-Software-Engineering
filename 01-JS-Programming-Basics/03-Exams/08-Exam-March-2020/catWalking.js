function catWalking(input) {
    let walkingTimeInMinutes = Number(input[0]);
    let walksCount = Number(input[1]);
    let caloriesPerDay = Number(input[2]);
    let burnedCaloriesPerMinute = 5;

    let totalMinutesWalk = walksCount * walkingTimeInMinutes;
    let totalBurnedCaloriesPerDay = totalMinutesWalk * burnedCaloriesPerMinute;
    let enoughtWalks = caloriesPerDay * 0.50;

    if (totalBurnedCaloriesPerDay >= enoughtWalks) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalBurnedCaloriesPerDay}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalBurnedCaloriesPerDay}.`);
    }

}

catWalking(["15",
    "2",
    "500"])

