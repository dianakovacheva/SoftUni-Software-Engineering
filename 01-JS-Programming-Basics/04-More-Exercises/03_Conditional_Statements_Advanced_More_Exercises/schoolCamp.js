function schoolCamp(input) {
    let season = input[0];
    let groupType = input[1];
    let studentsCount = Number(input[2]);
    let nightsCount = Number(input[3]);
    let priceProNight = 0;
    let sportType = "";

    switch (season) {
        case "Winter":
            if (groupType === "girls" || groupType === "boys") {
                priceProNight = 9.60;
            } else {
                priceProNight = 10.00;
            }

            if (groupType === "girls") {
                sportType = "Gymnastics";
            } else if (groupType === "boys") {
                sportType = "Judo";
            } else {
                sportType = "Ski";
            }
            break;
        case "Spring":
            if (groupType === "girls" || groupType === "boys") {
                priceProNight = 7.20;
            } else {
                priceProNight = 9.50;
            }

            if (groupType === "girls") {
                sportType = "Athletics";
            } else if (groupType === "boys") {
                sportType = "Tennis";
            } else {
                sportType = "Cycling";
            }
            break;
        case "Summer":
            if (groupType === "girls" || groupType === "boys") {
                priceProNight = 15.00;
            } else {
                priceProNight = 20.00;
            }

            if (groupType === "girls") {
                sportType = "Volleyball";
            } else if (groupType === "boys") {
                sportType = "Football";
            } else {
                sportType = "Swimming";
            }
            break;
    }

    let sum = studentsCount * nightsCount * priceProNight;

    if (studentsCount >= 50) {
        sum *= 0.50;
    } else if (studentsCount >= 20 && studentsCount < 50) {
        sum *= 0.85;
    } else if (studentsCount >= 10 && studentsCount < 20) {
        sum *= 0.95;
    }

    console.log(`${sportType} ${sum.toFixed(2)} lv.`);

}

schoolCamp(["Summer", "boys", "60", "7"]);