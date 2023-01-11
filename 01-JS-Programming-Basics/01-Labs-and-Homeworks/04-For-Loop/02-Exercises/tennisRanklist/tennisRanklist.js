function tennisRanklist(input) {
    let index = 0;
    let tournamentCount = Number(input[index]);
    index++;
    let startingPoints = Number(input[index]);
    index++;
    
    let pointsCounter = 0;

    let winCounter = 0;

    for (let i = 2; i < input.length; i++) {
        let tournamentStage = input[i];

        switch (tournamentStage) {
            case "W":
                pointsCounter += 2000;
                winCounter++;
                break;
            case "F":
                pointsCounter += 1200;
                break;
            case "SF":
                pointsCounter += 720;
                break;
        }
    }
    let finalPoints = startingPoints + pointsCounter;
    let averagePoints = Math.floor(pointsCounter / tournamentCount);
    let percentWonTournaments = winCounter / tournamentCount * 100;
    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(`${percentWonTournaments.toFixed(2)}%`);
}

tennisRanklist(["4",
"750",
"SF",
"W",
"SF",
"W"])
