function trainTheTrainers(input) {
    let index = 0;
    let judgeCount = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let presentationCount = 0;
    let sumAllGrades = 0;

    while (command !== "Finish") {
        let presentationName = command;
        let currentGradesSum = 0;
        presentationCount++;
        for (let i = 0; i < judgeCount; i++) {
            let grade = Number(input[index]);
            index++;
            currentGradesSum += grade;
        }
        let currentAverageGrade = currentGradesSum / judgeCount;
        sumAllGrades += currentAverageGrade;
        console.log(`${presentationName} - ${currentAverageGrade.toFixed(2)}.`);
        command = input[index];
        index++;
    }
    let averageGradeAllPresentations = sumAllGrades / presentationCount;
    console.log(`Student's final assessment is ${averageGradeAllPresentations.toFixed(2)}.`);
}

trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])
