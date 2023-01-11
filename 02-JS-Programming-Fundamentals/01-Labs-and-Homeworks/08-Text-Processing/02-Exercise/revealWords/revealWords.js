function revealWords(words, stringTemplate) {

    let splittedWordsToSearchFor = words.split(', ');
    let splittedStringTemplate = stringTemplate.split(' ');
    let wordToSearchFor = splittedWordsToSearchFor.shift();

    for (let currentWord of splittedStringTemplate) {

        if (currentWord.includes('*') && currentWord.length === wordToSearchFor.length) {
            let index = splittedStringTemplate.indexOf(currentWord);
            splittedStringTemplate.splice(index, 1, wordToSearchFor);
            // let replacedText = stringTemplate.replace('*'.repeat(currentWord.length), wordToSearchFor);
            wordToSearchFor = splittedWordsToSearchFor.shift();
        }
    }

    console.log(splittedStringTemplate.join(' '));
}

revealWords('great',
    'softuni is ***** place for learning new programming languages');