function skeleton(input) {
    let controlTimeInMinutes = Number(input[0]);
    let controlInSeconds = Number(input[1]);
    let distance = Number(input[2]);
    let timeInSecondsFor100Meters = Number(input[3]);

    let controlTimeInSeconds = controlTimeInMinutes * 60 + controlInSeconds;
    let slowerTimeCount = distance / 120;
    let totalSlowerTimeInSeconds = slowerTimeCount * 2.5;
    let playerTime = distance / 100 * timeInSecondsFor100Meters - totalSlowerTimeInSeconds;


    let diff = Math.abs(playerTime - controlTimeInSeconds);

    if (playerTime <= controlTimeInSeconds) {
        console.log("Marin Bangiev won an Olympic quota!");
        console.log(`His time is ${playerTime.toFixed(3)}.`);
    } else {
        console.log(`No, Marin failed! He was ${diff.toFixed(3)} second slower.`);
    }
}

skeleton(["2",
    "12",
    "1200",
    "10"])


