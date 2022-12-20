function mirrorWords(arr) {
    let text = arr.shift();
    let patternResult = text.matchAll(/(?<symbol>@|#)(?<firstWord>[A-Za-z]{3,})\1{2}(?<secondWord>[A-Za-z]{3,})\1/g);
    let validPairsCount = 0;
    let mirrorWordsObject = {};
    // Valid word pairs
    for (const match of patternResult) {
        validPairsCount++;
        let firstWord = match.groups.firstWord;
        let secondWord = match.groups.secondWord;
        // Reverse second word
        let reversedSecondWord = secondWord.split('').reverse().join('');
        // Array to collect all valid mirror words
        let occurrenceWord = [];
        for (let i = 0; i < reversedSecondWord.length; i++) {
            // Compare ASCII values of current character of the second and the first word 
            let currentCharSecondWord = reversedSecondWord.charCodeAt(i);
            let currentCharFirstWord = firstWord.charCodeAt(i);
            if (currentCharSecondWord != currentCharFirstWord) {
                occurrenceWord = [];
                break;
            } else {
                occurrenceWord.push(secondWord[i]);
            }
        }
        // Set the mirrorWordsObject key and values
        if (occurrenceWord.length > 0) {
            mirrorWordsObject[firstWord] = secondWord;
        }
    }
    // Print the count of all valid pairs found
    if (validPairsCount !== 0) {
        console.log(`${validPairsCount} word pairs found!`);
    } else {
        console.log('No word pairs found!');
    }
    let entries = Object.entries(mirrorWordsObject);
    let mirrorWordsArray = [];
    // Push all valid mirror words to the mirrorWordsArray
    for (const [word, mirrorWord] of entries) {
        mirrorWordsArray.push(`${word} <=> ${mirrorWord}`);
    }
    // Print all valid mirror words
    let mirrorWordsObjectSize = Object.keys(mirrorWordsObject).length
    if (mirrorWordsObjectSize !== 0) {
        console.log('The mirror words are:');
        console.log(mirrorWordsArray.join(', '));
    } else {
        console.log('No mirror words!');
    }
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);