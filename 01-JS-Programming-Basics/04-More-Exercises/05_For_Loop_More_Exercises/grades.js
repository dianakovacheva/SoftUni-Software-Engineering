function grades(input) {
    let studentsCount = Number(input[0]);
    let topStudentsCount = 0;
    let between4_00And4_99StudentsCount = 0;
    let between3_00And3_99StudentsCount = 0;
    let failedStudentsCount = 0;
    let sumOfAllNotes = 0;

    for (let i = 1; i < input.length; i++) {
        let currentNote = Number(input[i]);
        if (currentNote >= 5.00) {
            topStudentsCount++;
            sumOfAllNotes += currentNote;
        } else if (currentNote >= 4.00 && currentNote <= 4.99) {
            between4_00And4_99StudentsCount++;
            sumOfAllNotes += currentNote;
        } else if (currentNote >= 3.00 && currentNote <= 3.99) {
            between3_00And3_99StudentsCount++;
            sumOfAllNotes += currentNote;
        } else if(currentNote >= 2.00 && currentNote <= 2.99) {
            failedStudentsCount++;
            sumOfAllNotes += currentNote;
        }
    }

    let percentageTopStudents = topStudentsCount / studentsCount * 100;
    let percentageBetween4_00And4_99Students = between4_00And4_99StudentsCount / studentsCount * 100;
    let percentageBetween3_00And3_99Students = between3_00And3_99StudentsCount / studentsCount * 100;
    let percentageFailedStudents = failedStudentsCount / studentsCount * 100;
    let averageNote = sumOfAllNotes / studentsCount;

    console.log(`Top students: ${percentageTopStudents.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${percentageBetween4_00And4_99Students.toFixed(2)}%`);
    console.log((`Between 3.00 and 3.99: ${percentageBetween3_00And3_99Students.toFixed(2)}%`));
    console.log(`Fail: ${percentageFailedStudents.toFixed(2)}%`);
    console.log(`Average: ${averageNote.toFixed(2)}`);
}

grades(["6",
    "2",
    "3",
    "4",
    "5",
    "6",
    "2.2"
])