function roadRadar(currentSpeed, area) {
    const speedLimitObj = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    }
    let status = '';
    // Calculate the speed difference
    let difference = Math.abs(currentSpeed - speedLimitObj[area]);
    if (difference <= 20) {
        status = 'speeding';
    } else if (difference > 20 && difference <= 40) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    }
    // Print the output on the console
    if (currentSpeed <= speedLimitObj[area]) {
        console.log(`Driving ${currentSpeed} km/h in a ${speedLimitObj[area]} zone`);
    } else {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimitObj[area]} - ${status}`);
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');