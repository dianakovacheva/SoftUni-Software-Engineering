function getNumDaysInMonth(month, year) {
    let daysCount = new Date(year, month, 0).getDate();
    return daysCount;
}

getNumDaysInMonth(1, 2012);
getNumDaysInMonth(2, 2021);