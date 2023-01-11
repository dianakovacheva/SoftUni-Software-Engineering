function printSubstring(string, startingIndex, countElementsToSubstring) {

    let result = string.substring(startingIndex, startingIndex + countElementsToSubstring);
    console.log(result);
}

printSubstring('SkipWord', 4, 7);