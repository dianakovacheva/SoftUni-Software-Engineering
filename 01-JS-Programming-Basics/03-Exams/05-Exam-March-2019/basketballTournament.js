function basketballTournament(input) {
    let tournamentName = input[0];
    let wonGamesCount = 0;
    let losedGamesCount = 0;
    let diff = 0;
    let totalGamesCount = wonGamesCount + losedGamesCount;

    for (let i = 1; i < input.length; i++) {
        let currentGameCount = Number(input[i]);
        for (let j = 2; j < currentGameCount; j += 2) {
            let firstTeamPoints = Number(input[j]);
            let secondTeamPoints = Number(input[j + 1]);
            
        }
    }

}

basketballTournament(["Dunkers",
    "2",
    "75",
    "65",
    "56",
    "73",
    "Fire Girls",
    "3",
    "67",
    "34",
    "83",
    "98",
    "66",
    "45",
    "End of tournaments"])
