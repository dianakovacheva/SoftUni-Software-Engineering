function dayOfWeek(dayNumber) {

    let dayOfTheWeek = "";

    if (dayNumber === 1) {
        dayOfTheWeek = "Monday";
    } else if (dayNumber === 2) {
        dayOfTheWeek = "Tuesday";
    } else if (dayNumber === 3) {
        dayOfTheWeek = "Wednesday";
    } else if (dayNumber === 4) {
        dayOfTheWeek = "Thursday";
    } else if (dayNumber === 5) {
        dayOfTheWeek = "Friday";
    } else if (dayNumber === 6) {
        dayOfTheWeek = "Saturday";
    } else if (dayNumber === 7) {
        dayOfTheWeek = "Sunday";
    } else {
        console.log("Invalid day!");
    }

    console.log(dayOfTheWeek);
}

dayOfWeek(11);