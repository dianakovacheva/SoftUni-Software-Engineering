function finalCompetition(input) {

    let dancersCount = Number(input[0]);
    let pointsCount = Number(input[1]);
    let season = input[2];
    let location = input[3];
    let percentageExpences = 0;
    let wonMoney = 0;
    let leftMoneyAfterExpences = 0;
    let charityMoney = 0;

    switch (location) {
        case "Bulgaria":
            switch (season) {
                case "summer":
                    percentageExpences = 0.05;
                    break;
                case "winter":
                    percentageExpences = 0.08;
                    break;
            }
            break;
        case "Abroad":
            switch (season) {
                case "summer":
                    percentageExpences = 0.10;
                    break;
                case "winter":
                    percentageExpences = 0.15;
                    break;
            }
            break;
    }

    if (location === "Bulgaria") {
        wonMoney = pointsCount * dancersCount;
        leftMoneyAfterExpences = wonMoney - wonMoney * percentageExpences;
        charityMoney = leftMoneyAfterExpences * 0.75;
    } else if (location === "Abroad") {
        wonMoney = dancersCount * pointsCount + ((dancersCount * pointsCount) * 0.50);
        leftMoneyAfterExpences = wonMoney - wonMoney * percentageExpences;
        charityMoney = leftMoneyAfterExpences * 0.75;
    }

    let dancerMoney = (leftMoneyAfterExpences - charityMoney) / dancersCount;

    console.log(`Charity - ${charityMoney.toFixed(2)}`);
    console.log(`Money per dancer - ${dancerMoney.toFixed(2)}`);
}

finalCompetition(["25",
    "98",
    "winter",
    "Bulgaria"])
