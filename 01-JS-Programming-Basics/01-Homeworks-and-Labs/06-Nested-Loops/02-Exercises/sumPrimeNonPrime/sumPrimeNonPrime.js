function sumPrimeNonPrime(input) {
    let index = 0;
    let command = input[index];
    index++;
    let sumPrimeNumbers = 0;
    let sumNonPrimeNumbers = 0;

    while (command !== "stop") {
        let isPrime = true;
        let currentNumber = Number(command);
        //if number is negative
        if (currentNumber < 0) {
            console.log("Number is negative.");
            command = input[index];
            index++;
            continue;
        }
        // sum of prime numbers
        if (currentNumber === 1) {
            sumPrimeNumbers += currentNumber;
            command = input[index];
            index++;
            continue;
        }

        for (let i = 2; i < currentNumber; i++) {
            if (currentNumber % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            sumPrimeNumbers += currentNumber;
        } else {
            sumNonPrimeNumbers += currentNumber;
        }
        command = input[index];
        index++;
    }

    console.log(`Sum of all prime numbers is: ${sumPrimeNumbers}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrimeNumbers}`);
}

sumPrimeNonPrime(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"])