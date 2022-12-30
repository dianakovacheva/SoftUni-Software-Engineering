function prinRevealedWords(words, templateText) {

    let wordsToSearchFor = words.split(', ');
    let textWithReplacedWords = templateText;

    for (let word of wordsToSearchFor) {
        let pattern = '*'.repeat(word.length);
        textWithReplacedWords = textWithReplacedWords.replace(pattern, word);
    }
    console.log(textWithReplacedWords);
}

prinRevealedWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
);