function perfectNumber(number) {

    let numberToDivideTo = 1;
    let sumOfDivisors = 0;

    for (let i = numberToDivideTo; i < number; i++) {
        if (number % i === 0) {
            sumOfDivisors += i;
        }
    }

    if (sumOfDivisors === number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

perfectNumber(1236498);