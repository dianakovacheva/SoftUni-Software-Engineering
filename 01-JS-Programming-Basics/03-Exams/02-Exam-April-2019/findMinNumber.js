function findMinNumber(input) {
    let number = input[0];
    for(let i = 1; i < input.length; i++) {
        if(number > input[i]) {
            number = input[i];
        }
    }
    console.log(number);
}

findMinNumber([2, 5, 4, 17, 15, 13, 1])