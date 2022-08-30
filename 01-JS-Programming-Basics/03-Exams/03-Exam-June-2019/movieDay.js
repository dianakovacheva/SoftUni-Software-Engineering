function movieDay(input) {
    let actionTime = Number(input[0]);
    let scenesCount = Number(input[1]);
    let sceneDuration = Number(input[2]);

    let preparationTime = actionTime * 0.15;
    let sceneFilmingTime = scenesCount * sceneDuration;
    let neededTime = preparationTime + sceneFilmingTime;

    let diff = Math.abs(actionTime - neededTime);

    if (actionTime >= neededTime) {
        console.log(`You managed to finish the movie on time! You have ${Math.round(diff)} minutes left!`);
    } else {
        console.log(`Time is up! To complete the movie you need ${Math.round(diff)} minutes.`);
    }
}

movieDay(["60",
    "15",
    "3"])

