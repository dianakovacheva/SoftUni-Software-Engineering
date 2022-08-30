function minNumberIndex(input) {
    let tempMinNumber = input[0];
    let indexTempMinNumber = 0; 

    // for (let i = 1; i < input.length; i++) {
    //     if (number > input[i]) {
    //         number = input[i];
    //     }
    // }

    //console.log(input.indexOf(number));


    for (let i = 1; i < input.length; i++) {
        if (tempMinNumber > input[i]) {
            tempMinNumber = input[i];
            indexTempMinNumber = i;
        }
    }
 
    console.log(`The min number is: ${tempMinNumber}`);
    console.log(`The min number is with index ${indexTempMinNumber}`);
}

minNumberIndex([2, 5, 1, 17, 15, 13, 11])