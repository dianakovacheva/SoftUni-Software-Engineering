function transportPrice(input) {
    let kilometersCount = Number(input[0]);
    let dayTime = input[1];
    let dayPriceProKM = 0;
    let nightPriceProKM = 0;
    let startingCosts = 0;
    let totalExpencesDuringDayTime = 0;
    let totalExpencesDuringNightTime = 0;

    if (kilometersCount < 20) {
        startingCosts = 0.70;
        if (dayTime === "day") {
            dayPriceProKM = 0.79;
            totalExpencesDuringDayTime = dayPriceProKM * kilometersCount + startingCosts;
        } else if (dayTime === "night") {
            nightPriceProKM = 0.90;
            totalExpencesDuringNightTime = nightPriceProKM * kilometersCount + startingCosts;
        } if (totalExpencesDuringDayTime < totalExpencesDuringNightTime) {
            console.log(totalExpencesDuringNightTime.toFixed(2));
        } else {
            console.log(totalExpencesDuringDayTime.toFixed(2));
        }
    } else if (kilometersCount >= 20 && kilometersCount < 100) {
        if (dayTime === "day") {
            dayPriceProKM = 0.09;
            totalExpencesDuringDayTime = dayPriceProKM * kilometersCount;
        } else if (dayTime === "night") {
            nightPriceProKM = 0.09;
            totalExpencesDuringNightTime = nightPriceProKM * kilometersCount;
        } if (totalExpencesDuringDayTime < totalExpencesDuringNightTime) {
            console.log(totalExpencesDuringNightTime.toFixed(2));
        } else {
            console.log(totalExpencesDuringDayTime.toFixed(2));
        }
    } else if (kilometersCount > 100) {
        if (dayTime === "day") {
            dayPriceProKM = 0.06;
            totalExpencesDuringDayTime = dayPriceProKM * kilometersCount;
        } else if (dayTime === "night") {
            nightPriceProKM = 0.06;
            totalExpencesDuringNightTime = nightPriceProKM * kilometersCount;
        } if (totalExpencesDuringDayTime < totalExpencesDuringNightTime) {
            console.log(totalExpencesDuringNightTime.toFixed(2));
        } else {
            console.log(totalExpencesDuringDayTime.toFixed(2));
        }
    }
}

transportPrice(["180", "night"])