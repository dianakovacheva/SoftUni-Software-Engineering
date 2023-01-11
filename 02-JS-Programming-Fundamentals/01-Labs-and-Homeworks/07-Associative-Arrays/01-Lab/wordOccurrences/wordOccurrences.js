function wordOccurrences(arr) {
    let wordsObj = {};
    // Loop till you reach the length of the array
    for (let index = 0; index < arr.length; index++) {
        let currentWord = arr[index];
        // Check if the current word exists in the object
        if (!wordsObj.hasOwnProperty(currentWord)) {
            // If doesn't exist, set its value(count) to 0
            wordsObj[currentWord] = 0;
        } // else increment its value(count) with 1 each time the word occurs
        wordsObj[currentWord] += 1;
    }
    // Get the object entries (returns arrays) to be able to sort the numbers in descending order
    let wordsObjEntries = Object.entries(wordsObj);
    let sortedWordsObj = wordsObjEntries.sort((a, b) => b[1] - a[1]);
    // Print the result in the wished format
    for (const [word, count] of sortedWordsObj) {
        console.log(`${word} -> ${count} times`);
    }
}

wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);