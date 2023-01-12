function convertWordsToUppercase(string) {
    let stringToArray = string.match(/[A-Za-z0-9]+/g);
    // Join the array of words by ', ' and convert all letters to upper case
    let resultString = stringToArray.join(', ').toUpperCase();
    // Print the result on a single line
    console.log(resultString);
}

convertWordsToUppercase('Hi, how are you?');
convertWordsToUppercase('hello');
convertWordsToUppercase('Functions in JS can be nested, i.e. hold other functions');