function charactersInRange(firstChar, lastChar) {

    let printLine = "";
    let startingRange = Math.min(firstChar.charCodeAt(), lastChar.charCodeAt());
    let endRange = Math.max(firstChar.charCodeAt(), lastChar.charCodeAt());

    for (let i = startingRange + 1; i < endRange; i++) {

        if (i + 1 === endRange) {
            printLine += `${String.fromCharCode(i)}`;
        } else {
            printLine += `${String.fromCharCode(i)} `;
        }
    }

    console.log(printLine);
}

charactersInRange('C',
    '#'
);
