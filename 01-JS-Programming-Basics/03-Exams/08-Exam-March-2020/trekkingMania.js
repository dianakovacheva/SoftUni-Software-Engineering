function trekkingMania(input) {
    let groupsCount = Number(input[0]);
    let totalPeoplecount = 0;
    let mountain = "";

    let peopleClimbingMusala = 0;
    let peopleClimbingMonBlanc = 0;
    let peopleClimbingKilimandscharo = 0;
    let peopleClimbingK2 = 0;
    let peopleClimbingEverest = 0;

    for (let i = 1; i < input.length; i++) {
        let peopleCountFromEachGroup = Number(input[i]);
        totalPeoplecount += peopleCountFromEachGroup;

        if (peopleCountFromEachGroup <= 5) {
            mountain = "Musala";
            peopleClimbingMusala += peopleCountFromEachGroup;
        } else if (peopleCountFromEachGroup >= 6 && peopleCountFromEachGroup <= 12) {
            mountain = "Mon blanc";
            peopleClimbingMonBlanc += peopleCountFromEachGroup;
        } else if (peopleCountFromEachGroup >= 13 && peopleCountFromEachGroup <= 25) {
            mountain = "Kilimandscharo";
            peopleClimbingKilimandscharo += peopleCountFromEachGroup;
        } else if (peopleCountFromEachGroup >= 26 && peopleCountFromEachGroup <= 40) {
            mountain = "K2";
            peopleClimbingK2 += peopleCountFromEachGroup;
        } else {
            mountain = "Everest";
            peopleClimbingEverest += peopleCountFromEachGroup;
        }
    }

    let percentagePeopleClimbingMusala = peopleClimbingMusala / totalPeoplecount * 100;
    let percentagePeopleClimbingMonBlanc = peopleClimbingMonBlanc / totalPeoplecount * 100;
    let percentagePeopleClimbingKilimandscharo = peopleClimbingKilimandscharo / totalPeoplecount * 100;
    let percentagePeopleClimbingK2 = peopleClimbingK2 / totalPeoplecount * 100;
    let percentagePeopleClimbingEverest = peopleClimbingEverest / totalPeoplecount * 100;

    console.log(`${percentagePeopleClimbingMusala.toFixed(2)}%`);
    console.log(`${percentagePeopleClimbingMonBlanc.toFixed(2)}%`);
    console.log(`${percentagePeopleClimbingKilimandscharo.toFixed(2)}%`);
    console.log(`${percentagePeopleClimbingK2.toFixed(2)}%`);
    console.log(`${percentagePeopleClimbingEverest.toFixed(2)}%`);
}

trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])


