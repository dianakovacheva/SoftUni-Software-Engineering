function printAverageSchoolGrades(arr) {
    let studentsObj = {};
    for (const currentLine of arr) {
        let splittedInfo = currentLine.split(' ');
        // "shift" takes the value at index 0, as the name of the student
        let studentName = splittedInfo.shift();
        // Find if the name of the student exist
        if (!studentsObj.hasOwnProperty(studentName)) {
            // The key doesn't exist. Creating an empty array
            studentsObj[studentName] = [];
        }
        // The key exists. Concatenating the values
        studentsObj[studentName] = studentsObj[studentName].concat(splittedInfo);
    }
    // Sum all student grades
    for (const key in studentsObj) {
        let sum = 0;
        studentsObj[key].forEach(note => {
            sum += Number(note);
        });
        // Find the average grades of each student
        let averageNote = sum / studentsObj[key].length;
        studentsObj[key] = averageNote;
    }
    // Sort the keys alphabetically
    let studentEntries = Object.entries(studentsObj);
    let sortedNames = studentEntries.sort((a, b) => a[0].localeCompare(b[0]));
    // Print the output
    for (const [name, averageNote] of sortedNames) {
        console.log(`${name}: ${averageNote.toFixed(2)}`);
    }
}

printAverageSchoolGrades(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']
);