function palindromeIntegers(arrayOfNumbers) {

    let isPalindrome = true;

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        let currentNumberToString = arrayOfNumbers[i].toString();

        for (let j = 0; j < currentNumberToString.length; j++) {
            let firstElement = currentNumberToString[j];
            let lastElement = currentNumberToString.charAt(currentNumberToString.length - 1);

            if (firstElement !== lastElement) {
                isPalindrome = false;
                break;
            } else {
                isPalindrome = true;
                break;
            }
        }

        if (isPalindrome) {
            console.log("true");
        } else {
            console.log("false");
        }

    }
}

palindromeIntegers([32, 2, 232, 1010]);