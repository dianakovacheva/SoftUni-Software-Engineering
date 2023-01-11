function sumSeconds(input) {

    let timeFirstPlayer = Number(input[0]);
    let timeSecondPlayer = Number(input[1]);
    let timeThirdPlayer = Number(input[2]);

    let totalTime = timeFirstPlayer + timeSecondPlayer + timeThirdPlayer;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if(seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

sumSeconds (["14", "12",
"10"])
