function worldSwimmingRecord(input) {

    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let swimmerPace = Number(input[2]);

    let totalTime = distanceInMeters * swimmerPace + Math.floor(distanceInMeters / 15) * 12.5;

    if (totalTime < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        let differenceInTime = Math.abs(recordInSeconds - totalTime);
        console.log(`No, he failed! He was ${differenceInTime.toFixed(2)} seconds slower.`);
    }
}


worldSwimmingRecord(["10464",
"1500",
"20"]);