function pascalCaseSplitter(string) {
    let splittedString = string.split('');
    let resultArr = [];
    let capitalLetterIndexes = [];

    splittedString.forEach((char, index) => {
        // Upper case ASCII Table value
        if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
            capitalLetterIndexes.push(index);
        }
    });

    for (let i = 0; i < capitalLetterIndexes.length; i++) {
        if (i == capitalLetterIndexes.length - 1) {
            resultArr.push(splittedString.slice(capitalLetterIndexes[i]).join(''))

        } else {
            resultArr.push(splittedString.slice(capitalLetterIndexes[i], capitalLetterIndexes[i + 1]).join(''))
        }
    };

    console.log(resultArr.join(', '));
}

pascalCaseSplitter('ThisIsSoAnnoyingToDo');