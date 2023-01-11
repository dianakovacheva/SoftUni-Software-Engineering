function centuriesToMinutes(numOfCenturies) {
    let numOfDayPerYear = 365.2422;
    let numYearsPerCenturie = numOfCenturies * 100;
    let numDayPerCenturie = Math.trunc(numYearsPerCenturie * numOfDayPerYear);
    let numHoursPerCenturie = numDayPerCenturie * 24;
    let numMinutesPerCenturie = numHoursPerCenturie * 60;

    console.log(`${numOfCenturies} centuries = ${numYearsPerCenturie} years = ${numDayPerCenturie} days = ${numHoursPerCenturie} hours = ${numMinutesPerCenturie} minutes`);
}

centuriesToMinutes(1);