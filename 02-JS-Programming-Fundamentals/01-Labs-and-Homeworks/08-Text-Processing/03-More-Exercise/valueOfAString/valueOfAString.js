function valueOfAString(arr) {

    let string = arr[0].split('');
    let inputType = arr[1];
    let lowerCaseLetters = '';
    let upperCaseLetters = '';
    let isLowerCase = false;
    let sum = 0;

    switch (inputType) {
        case 'LOWERCASE':
            for (let i = 0; i < string.length; i++) {
                if (string[i].charCodeAt() >= 97 && string[i].charCodeAt() <= 122) {
                    lowerCaseLetters += string[i];
                    isLowerCase = true;
                }
            }
            break;
        case 'UPPERCASE':
            for (let i = 0; i < string.length; i++) {
                if (string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90) {
                    upperCaseLetters += string[i];
                }
            }
            break;
    }

    if (isLowerCase) {
        for (let i = 0; i < lowerCaseLetters.length; i++) {
            let currentLetter = lowerCaseLetters[i];
            sum += currentLetter.charCodeAt();
        }
    } else {
        for (let i = 0; i < upperCaseLetters.length; i++) {
            let currentLetter = upperCaseLetters[i];
            sum += currentLetter.charCodeAt();
        }
    }

    console.log(`The total sum is: ${sum}`);
};

valueOfAString(['AC/DC',
    'UPPERCASE']
);