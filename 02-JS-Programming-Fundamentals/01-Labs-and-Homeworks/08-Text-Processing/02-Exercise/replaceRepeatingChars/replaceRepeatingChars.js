function replaceRepeatingChars(string) {
    let splittedString = string.split('');
    let resultArr = [];

    for (let i = 0; i < splittedString.length; i++) {
        let currentElement = splittedString[i];
        let nextElement = splittedString[i + 1];

        if (currentElement !== nextElement) {
            resultArr.push(currentElement);
        }
    }
    console.log(resultArr.join(''));
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');