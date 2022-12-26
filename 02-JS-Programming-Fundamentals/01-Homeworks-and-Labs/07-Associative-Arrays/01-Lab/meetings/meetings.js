function meetings(arr) {
    let meetingsObj = {};
    // Iterating through the properties of the array
    // Creating two variables (day, name), using destructuring
    for (const currentLine of arr) {
        let [day, name] = currentLine.split(' ');
        // Check if you receive the same weekday twice
        if (!meetingsObj.hasOwnProperty(day)) {
            meetingsObj[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }
    // Print out the scheduled meeting days and the person names
    for (const key in meetingsObj) {
        console.log(`${key} -> ${meetingsObj[key]}`);
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);