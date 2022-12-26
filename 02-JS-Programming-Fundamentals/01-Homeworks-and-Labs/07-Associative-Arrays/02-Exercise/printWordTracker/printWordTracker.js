function printWordTracker(arr) {
    let arrayOfSearchingWords = arr.shift().split(' ');
    let wordTrackerObject = {};
    // Set the searching words in the object
    for (const searchingWord of arrayOfSearchingWords) {
        wordTrackerObject[searchingWord] = 0;
    }
    // Check if the object includes any word from the array of words
    for (const currentWord of arr) {
        if (wordTrackerObject.hasOwnProperty(currentWord)) {
            // If yes, increment the word's count by 1
            wordTrackerObject[currentWord]++;
        }
    }
    // Sort the words by count in descending order
    let entriesWordTrackerObject = Object.entries(wordTrackerObject);
    let sortedObject = entriesWordTrackerObject.sort((a, b) => b[1] - a[1]);
    // Print out the result in the wished format
    for (const [word, count] of sortedObject) {
        console.log(`${word} - ${count}`);
    }
}

printWordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);