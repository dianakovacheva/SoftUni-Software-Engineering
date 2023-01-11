function printDayOfWeek(stringParm) {
    let numDay;
    switch (stringParm) {
        case "Monday": numDay = 1; break;
        case "Tuesday": numDay = 2; break;
        case "Wednesday": numDay = 3; break;
        case "Thursday": numDay = 4; break;
        case "Friday": numDay = 5; break;
        case "Saturday": numDay = 6; break;
        case "Sunday": numDay = 7; break;
        default: numDay = 'error';
    }
    return numDay;
}

printDayOfWeek('Monday');
printDayOfWeek('Friday');
printDayOfWeek('Invalid');