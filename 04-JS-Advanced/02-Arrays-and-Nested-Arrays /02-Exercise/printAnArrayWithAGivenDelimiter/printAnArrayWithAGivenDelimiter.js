function printAnArrayWithAGivenDelimiter(arr, delimiter) {
    let resultString = arr.join(delimiter);
    console.log(resultString);
}

printAnArrayWithAGivenDelimiter(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
);
printAnArrayWithAGivenDelimiter(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_'
);