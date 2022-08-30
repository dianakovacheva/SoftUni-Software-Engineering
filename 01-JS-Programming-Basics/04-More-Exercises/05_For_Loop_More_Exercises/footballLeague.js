function footballLeague(input) {
    let capacity = Number(input[0]);
    let numFans = Number(input[1]);
    let numPeopleSectorA = 0;
    let numPeopleSectorB = 0;
    let numPeopleSectorV = 0;
    let numPeopleSectorG = 0;

    for (let i = 2; i < input.length; i++) {
        let currentSector = input[i];

        if (currentSector === "A") {
            numPeopleSectorA++;
        } else if (currentSector === "B") {
            numPeopleSectorB++;
        } else if (currentSector === "V") {
            numPeopleSectorV++;
        } else {
            numPeopleSectorG++;
        }
    }

    let percentagePeopleSectorA = numPeopleSectorA / numFans * 100;
    let percentagePeopleSectorB = numPeopleSectorB / numFans * 100;
    let percentagePeopleSectorV = numPeopleSectorV / numFans * 100;
    let percentagePeopleSectorG = numPeopleSectorG / numFans * 100;
    let percentageAllFans = numFans / capacity * 100;

    console.log((`${percentagePeopleSectorA.toFixed(2)}%`));
    console.log((`${percentagePeopleSectorB.toFixed(2)}%`));
    console.log((`${percentagePeopleSectorV.toFixed(2)}%`));
    console.log((`${percentagePeopleSectorG.toFixed(2)}%`));
    console.log((`${percentageAllFans.toFixed(2)}%`));
}

footballLeague(["76",
    "10",
    "A",
    "V",
    "V",
    "V",
    "G",
    "B",
    "A",
    "V",
    "B",
    "B"
])