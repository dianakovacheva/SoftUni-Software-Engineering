function calculatePreviousDay(year, month, day) {
    const nextDay = new Date(year, month - 1, day - 1);
    const newYear = nextDay.getFullYear();
    const newMonth = nextDay.getMonth() + 1;
    const newDay = nextDay.getDate();
    // Return date of the previous day in the format: `{year}-{month}-{day}`
    console.log(`${newYear}-${newMonth}-${newDay}`);
}

calculatePreviousDay(2016, 9, 30);
calculatePreviousDay(2015, 5, 10);