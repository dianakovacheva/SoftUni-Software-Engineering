function matchDates(arr) {
    let currentDate = arr.shift();
    let pattern = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    // Find all valid dates
    while ((arr = pattern.exec(currentDate)) !== null) {
        let day = arr.groups['day'];
        let month = arr.groups['month'];
        let year = arr.groups['year'];
        // Print each date in the following format: "Day: {day}, Month: {month}, Year: {year}" 
        // each on a new line
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);