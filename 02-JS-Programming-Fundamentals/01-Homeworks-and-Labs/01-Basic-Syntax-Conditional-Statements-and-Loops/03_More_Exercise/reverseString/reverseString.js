function reverseString(input) {
    let inputAsString = input.toString();
    let reversedWord = [];

    for (let i = 0; i < inputAsString.length; i++) {
        let letter = inputAsString[i][0];
        reversedWord.unshift(letter)
    }

    console.log(reversedWord.join(''));
}

reverseString("SoftUni");