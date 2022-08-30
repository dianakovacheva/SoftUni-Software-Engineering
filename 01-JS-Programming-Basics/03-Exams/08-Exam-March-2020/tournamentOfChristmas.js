function tournamentOfChristmas(input) {

    let dayCount = Number(input[0]);
    let totalWonMoney = 0;
    let tempDailyNumWins = 0;
    let tempDailyNumLoses = 0;
    let numDaysAsWinner = 0;
    let numDaysAsLoser = 0;
    let dailyWonMoney = 0;

    for (let i = 1; i < input.length; i += 2) {


        if (input[i] === "Finish") {
            if (tempDailyNumWins > tempDailyNumLoses) {
                dailyWonMoney *= 1.10;
                numDaysAsWinner++;
            } else {
                numDaysAsLoser++;
            }
            totalWonMoney += dailyWonMoney;
            tempDailyNumWins = 0;
            tempDailyNumLoses = 0;
            dailyWonMoney = 0;
            i--;
            continue;
        }
        let currentResult = input[i + 1];

        if (currentResult === "win") {
            tempDailyNumWins++;
            dailyWonMoney += 20;
        } else {
            tempDailyNumLoses++;
        }
    }

    if (numDaysAsWinner > numDaysAsLoser) {
        totalWonMoney *= 1.20;
        console.log(`You won the tournament! Total raised money: ${totalWonMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalWonMoney.toFixed(2)}`);
    }

}


tournamentOfChristmas(["2",
    "volleyball",
    "win",
    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish"])
