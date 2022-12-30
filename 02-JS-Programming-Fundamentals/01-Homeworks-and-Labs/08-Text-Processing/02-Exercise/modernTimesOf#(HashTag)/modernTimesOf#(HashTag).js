function modernTimesOfHashTag(string) {
    let splittedString = string.split(' ');
    let logWord = true;
    for (let currentWord of splittedString) {
        let specialWord = [];
        logWord = true;
        let splittedLetters = currentWord.split('');
        if (currentWord.startsWith('#') && currentWord.length > 1) {
            for (let j = 1; j < currentWord.length; j++) {
                let currentLetter = splittedLetters[j];
                if (currentLetter.toLowerCase().charCodeAt() >= 97 && currentLetter.toLowerCase().charCodeAt() <= 122) {
                    specialWord.push(currentLetter);
                } else {
                    logWord = false;
                    break;
                }
            }
            if (logWord) {
                console.log(specialWord.join(''));
            }
        }
    }
}

modernTimesOfHashTag('The symbol # is known #vari"ously in English-speaking #regions as the #number sign');