function calculateTimeToWalk(steps, footPrintLengthInMeter, speedKMPerHour) {
    let distance = steps * footPrintLengthInMeter;
    let speed = speedKMPerHour * 1000 / 3600;
    // Every 500 meters the student rests and takes a 1-minute break
    let rest = Math.floor(distance / 500) * 60;
    let time = (distance / speed) + rest;
    let hours = Math.floor(time / 3600).toFixed(0).padStart(2, '0');
    let minutes = Math.floor(time / 60).toFixed(0).padStart(2, '0');
    let seconds = (time % 60).toFixed(0).padStart(2, '0');
    console.log(`${hours}:${minutes}:${seconds}`);
}

calculateTimeToWalk(4000, 0.60, 5);
calculateTimeToWalk(2564, 0.70, 5.5);