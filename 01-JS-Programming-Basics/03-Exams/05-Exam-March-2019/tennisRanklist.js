function tennisRanklist(input) {
    let tournamentsCount = Number(input[0]);
    let startingPoints = Number(input[1]);
    let wonPoints = 0;
    let wonTournamentsCount = 0;

    for (let i = 2; i < input.length; i++) {
        let currentTournamentStage = input[i];

        if (currentTournamentStage === "W") {
            wonPoints += 2000;
            wonTournamentsCount++;
        } else if (currentTournamentStage === "F") {
            wonPoints += 1200;
        } else {
            wonPoints += 720;
        }
    }
    let totalPoints = startingPoints + wonPoints;

    let averagePoints = wonPoints / tournamentsCount;
    let percentageWonTournaments = wonTournamentsCount / tournamentsCount * 100;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${percentageWonTournaments.toFixed(2)}%`);
}

tennisRanklist(["4",
    "750",
    "SF",
    "W",
    "SF",
    "W"])

