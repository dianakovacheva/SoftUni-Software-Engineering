function sumDigits(number) {

    let numberToString = String(number);
    let sumOfDigits = 0;

    for (let i = 0; i < numberToString.length; i++) {
        let currentChar = numberToString[i];
        sumOfDigits += Number(currentChar);
    }

    console.log(sumOfDigits);
}

sumDigits(543);