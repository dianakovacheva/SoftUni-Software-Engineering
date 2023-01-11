function firstAndLastKNumbers(arrayOfNumbers) {

    let numberK = arrayOfNumbers[0];

    let firstK = arrayOfNumbers.slice(1, numberK + 1);
    let lastK = arrayOfNumbers.slice(arrayOfNumbers.length - numberK);
    console.log(firstK.join(" "));
    console.log(lastK.join(" "));
}


firstAndLastKNumbers([2,
    7, 8, 9]
);