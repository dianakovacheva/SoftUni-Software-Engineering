function lettersCombinations(input) {
    let stratingLetter = input[0];
    let endingLetter = input[1];
    let letterToScip = input[2];
    let letterCombinationsCounter = 0;

    for (let i = "a"; i === "z"; i++) {
        if (i === letterToScip) {
            continue;
        } else {
            letterCombinationsCounter++;
            console.log(stratingLetter);
        }
    }

}

lettersCombinations(["a", "c", "b"]);