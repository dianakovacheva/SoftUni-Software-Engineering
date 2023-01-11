function requiredReading(numPages, numPagesReadInOneHour, numDays) {

    let totalTimeToReadTheBook = numPages / numPagesReadInOneHour;
    let numHoursNeededEachDay = totalTimeToReadTheBook / numDays;

    console.log(numHoursNeededEachDay);
}

requiredReading(432, 15, 4);