function mountainRun(input) {
    let recordInsSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSecondsClimbingOneMeter = Number(input[2]);

    let climberTime = distanceInMeters * timeInSecondsClimbingOneMeter;
    let extraTime = Math.floor(distanceInMeters / 50) * 30;
    let totalTime = climberTime + extraTime;

    if (totalTime < recordInsSeconds) {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${(totalTime - recordInsSeconds).toFixed(2)} seconds slower.`);
    }

}

mountainRun(["1377",
    "389",
    "3"])


