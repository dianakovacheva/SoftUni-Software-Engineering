function trekkingMania(input) {
    let index = 0;
    let groupsCount = Number(input[index]);
    index++;
    let peopleCount = Number(input[index]);
    index++;

    let peopeClimbingMusala = 0;
    let peopleClimbingMontBlanc = 0;
    let peopleClimbingKilimandscharo = 0;
    let peopleClimbingK2 = 0;
    let peopleClimbingEverest = 0;

    for (let i = 1; i <= groupsCount; i++) {
        let Mountain = "";
        if (peopleCount <= 5) {
            Mountain = "Musala";
            peopeClimbingMusala += peopleCount;
        } else if (peopleCount >= 6 && peopleCount <= 12) {
            Mountain = "Mont Blanc";
            peopleClimbingMontBlanc += peopleCount;
        } else if (peopleCount >= 13 && peopleCount <= 25) {
            Mountain = "Kilimandscharo";
            peopleClimbingKilimandscharo += peopleCount;
        } else if (peopleCount >= 26 && peopleCount <= 40) {
            Mountain = "K2";
            peopleClimbingK2 += peopleCount;
        } else {
            Mountain = "Everest";
            peopleClimbingEverest += peopleCount;
        }
        peopleCount = Number(input[index]);
        index++;

    }
    let totalPeople = peopeClimbingMusala + peopleClimbingMontBlanc + peopleClimbingKilimandscharo + peopleClimbingK2 + peopleClimbingEverest;
    let percentClimbingMusala = peopeClimbingMusala / totalPeople * 100;
    let percentClimbingMontBlanc = peopleClimbingMontBlanc / totalPeople * 100;
    let percentClimbingKilimandscharo = peopleClimbingKilimandscharo / totalPeople * 100;
    let percentClimbingK2 = peopleClimbingK2 / totalPeople * 100;
    let percentClimbingEverest = peopleClimbingEverest / totalPeople * 100;
    console.log(`${percentClimbingMusala.toFixed(2)}%`);
    console.log(`${percentClimbingMontBlanc.toFixed(2)}%`);
    console.log(`${percentClimbingKilimandscharo.toFixed(2)}%`);
    console.log(`${percentClimbingK2.toFixed(2)}%`);
    console.log(`${percentClimbingEverest.toFixed(2)}%`);

}

trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])
