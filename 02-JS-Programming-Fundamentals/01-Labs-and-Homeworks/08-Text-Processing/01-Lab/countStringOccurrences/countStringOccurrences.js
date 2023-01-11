function countStringOccurrences(text, wordToSearch) {

    let splittedText = text.split(' ');
    let numberWordOccurrence = 0;

    for (let currentWord of splittedText) {
        if (currentWord === wordToSearch) {
            numberWordOccurrence++;
        }
    }

    console.log(numberWordOccurrence);
}

countStringOccurrences('softuni is great place for learning new programming languages',
    'softuni');