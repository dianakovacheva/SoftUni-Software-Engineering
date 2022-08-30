function extremeValues(input) {

    let tempMaxNumber = input[0];
    let indexMaxNumber = 0;
    let tempMinNumber = input[0];
    let indexTempMinNumber = 0;


    for (let i = 1; i < input.length; i++) {
        if (tempMinNumber > input[i]) {
            tempMinNumber = input[i];
            indexTempMinNumber = i;
        }

        if (tempMaxNumber < input[i]) {
            tempMaxNumber = input[i];
            indexMaxNumber = i;
        }
    }

    console.log(`The min number is: ${tempMinNumber}`);
    console.log(`The min number is with index ${indexTempMinNumber}`);
    console.log(`The max number is: ${tempMaxNumber}`);
    console.log(`The max number is with index ${indexMaxNumber}`);

}

extremeValues([2, 50, 1, 17, 15, 0, 11])