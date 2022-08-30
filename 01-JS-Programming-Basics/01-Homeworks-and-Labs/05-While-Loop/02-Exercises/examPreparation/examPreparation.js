function examPreparation(input) {
    let index = 0;
    let negativeGrade = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    let negativeGradeCount = 0;
    let sumGrade = 0;
    let problemsCounter = 0;
    let problemName = "";
    let isBreakNeeded = false;

    while (command !== "Enough") {

        problemName = command;
        let tempGrade = Number(input[index]);
        index++;

        if (tempGrade <= 4) {
            negativeGradeCount++;
        }

        if (negativeGradeCount === negativeGrade) {
            isBreakNeeded = true;
            console.log(`You need a break, ${negativeGradeCount} poor grades.`);
            break;
        }

        sumGrade += tempGrade;
        problemsCounter++;

        command = input[index];
        index++;
    }

    if (!isBreakNeeded) {
        let averageGrade = sumGrade / problemsCounter;

    console.log(`Average score: ${averageGrade.toFixed(2)}`);
    console.log(`Number of problems: ${problemsCounter}`);
    console.log(`Last problem: ${problemName}`);
    }
}


examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])

