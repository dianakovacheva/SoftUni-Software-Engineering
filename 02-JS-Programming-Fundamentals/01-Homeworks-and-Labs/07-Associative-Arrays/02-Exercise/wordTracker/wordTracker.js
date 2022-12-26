function wordTracker(arr) {
    let wordsToSearchFor = arr.shift().split(' ');
    let wordTrackerObject = {};

    for (let i = 0; i < wordsToSearchFor.length; i++) {
        let counter = 0;
        let searchingWord = wordsToSearchFor[i];
        for (let j = 0; j < arr.length; j++) {
            let currentWordInString = arr[j];
            if (searchingWord === currentWordInString) {
                counter++;
                wordTrackerObject[searchingWord] = counter;
            }
        }
    }

    let entriesResultObject = Object.entries(wordTrackerObject);
    let sortedCounts = entriesResultObject.sort((a, b) => b[1] - a[1]);

    for (const [word, count] of sortedCounts) {
        console.log(`${word} - ${count}`);
    }
}

wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
);