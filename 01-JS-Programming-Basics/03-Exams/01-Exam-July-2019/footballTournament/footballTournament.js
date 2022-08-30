function footballTournament(input) {
    let name = input[0];
    let gamesCount = Number(input[1]);
    let totalWonPoints = 0;
    let totalWonGames = 0;
    let totalEqualResultedGames = 0;
    let totalLostGames = 0;

    for (let i = 2; i <= input.length; i++) {
        let tournamentResult = input[i];

        switch (tournamentResult) {
            case "W":
                totalWonPoints += 3;
                totalWonGames++;
                break;
            case "D":
                totalEqualResultedGames++;
                totalWonPoints++;
                break;
            case "L":
                totalLostGames++;
                break;
        }
    }

    let winRate = totalWonGames / gamesCount * 100;

    if (gamesCount <= 0) {
        console.log(`${name} hasn't played any games during this season.`);
    } else {
        console.log(`${name} has won ${totalWonPoints} points during this season.`);
        console.log("Total stats:");
        console.log(`## W: ${totalWonGames}`);
        console.log(`## D: ${totalEqualResultedGames}`);
        console.log(`## L: ${totalLostGames}`);
        console.log(`Win rate: ${winRate.toFixed(2)}%`);
    }

}

footballTournament(["Chelsea",
    "0"])