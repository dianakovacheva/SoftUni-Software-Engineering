function stringSubstring(wordToSearchFor, string) {

    let textArr = string.split(' ');
    let isFound = false;

    for (let i = 0; i < textArr.length; i++) {
        let currentWord = textArr[i];

        if (currentWord.toLowerCase() === wordToSearchFor.toLowerCase()) {
            isFound = true;
            break;
        }
    }


    if (isFound) {
        console.log(wordToSearchFor);
    } else {
        console.log(`${wordToSearchFor} not found!`);
    }
}

stringSubstring('python',
    'JavaScript is the best programming language'
);