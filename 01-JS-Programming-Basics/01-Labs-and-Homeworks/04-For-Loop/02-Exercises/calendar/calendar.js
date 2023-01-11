function printCalendar() {
    let numDays;
    for (let i = 1; i <= 12; i++) {
        switch (i) {
            case 1: numDays = 31; month = 'January'; break;
            case 2: numDays = 28; month = 'February'; break;
            case 3: numDays = 31; month = 'March'; break;
            case 4: numDays = 30; month = 'April'; break;
            case 5: numDays = 31; month = 'May'; break;
            case 6: numDays = 30; month = 'June'; break;
            case 7: numDays = 31; month = 'July'; break;
            case 8: numDays = 31; month = 'August'; break;
            case 9: numDays = 30; month = 'September'; break;
            case 10: numDays = 31; month = 'October'; break;
            case 11: numDays = 30; month = 'November'; break;
            case 12: numDays = 31; month = 'December'; break;
        }

        console.log(month);
        for (let j = 1; j <= numDays; j++) {
            console.log(j);
        }
    }
}

printCalendar()