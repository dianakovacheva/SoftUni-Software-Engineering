function walking(input) {
    let targetSteps = 10000;
    let i = 0;
    let stepsCount = 0;
    let command = input[i];
    i++;

    while(command !== "Going home") {
        let tempSteps = Number(command);
        stepsCount += tempSteps;

        if(stepsCount >= targetSteps) {
            break;
        }

        command = input[i];
        i++;
    }

    if(command === "Going home") {
        let tempSteps = Number(input[i]);
        i++;
        stepsCount += tempSteps;
    }

    let stepDifference = Math.abs(targetSteps - stepsCount);
    if (targetSteps <= stepsCount) {
            console.log("Goal reached! Good job!");
            console.log(`${stepDifference} steps over the goal!`);
    } else {
        console.log(`${stepDifference} more steps to reach goal.`);
    }
}

walking(["1000",
"1500",
"2000",
"6500"])


