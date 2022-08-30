function lunchBreak(input) {

    let serialName = input[0];
    let episodeDuration = Number(input[1]);
    let breakTimeDuration = Number(input[2]);

    let lunchDuration = 1/8 * breakTimeDuration;
    let restTime = 1/4 * breakTimeDuration;

    let leftTime = breakTimeDuration - lunchDuration - restTime - episodeDuration;

    if (leftTime >= 0) {
        console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(leftTime)} minutes free time.`);
    } else {
        let neededTime = Math.ceil(Math.abs(leftTime));
        console.log(`You don't have enough time to watch ${serialName}, you need ${neededTime} more minutes.`);
    }

}

lunchBreak(["Game of Thrones",
"60",
"96"]);