function maxNumberIndex(input) {
    let tempMaxNumber = input[0];
    let indexMaxNumber = 0;


    for(let i = 1; i < input.length; i++) {
        if(tempMaxNumber < input[i]) {
            tempMaxNumber = input[i];
            indexMaxNumber = i;
        }
    }
    console.log(`The max number is: ${tempMaxNumber}`);
    console.log(`The max number is with index ${indexMaxNumber}`);
}

maxNumberIndex([2, 5, 4, 17, 15, 13, 11])