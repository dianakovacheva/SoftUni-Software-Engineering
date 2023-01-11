function printPascalCaseSplitter(string) {
    let result = string[0];
    let stringToLowerCase = string.toLowerCase();

    for (let i = 1; i < string.length; i++) {
        if (string[i] !== stringToLowerCase[i]) {
            result += ', ';
        }
        result += string[i];
    }
    console.log(result);
}

printPascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');