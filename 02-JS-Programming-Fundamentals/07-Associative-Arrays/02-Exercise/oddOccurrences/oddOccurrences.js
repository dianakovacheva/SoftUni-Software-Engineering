function oddOccurrences(string) {
    let splittedWords = string
        .split(' ')
        .map(currentWord => currentWord.toLowerCase());
    let resultObject = {};
    let resultArray = [];

    for (let i = 0; i < splittedWords.length; i++) {
        const currentWord = splittedWords[i];
        if (!resultObject.hasOwnProperty(currentWord)) {
            resultObject[currentWord] = 0;
        }
        resultObject[currentWord]++;
    }

    let objectEntries = Object.entries(resultObject);
    let sortedObject = objectEntries.sort((a, b) => b[1] - a[1]);

    for (const [element, count] of sortedObject) {
        if (count % 2 !== 0) {
            resultArray.push(element);
        }
    }

    console.log(resultArray.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');