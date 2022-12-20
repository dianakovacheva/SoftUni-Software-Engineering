function printMirrorWords(arr) {
    let text = arr.shift();
    let patternResult = text.matchAll(/(?<symbol>@|#)(?<firstWord>[A-Za-z]{3,})\1{2}(?<secondWord>[A-Za-z]{3,})\1/g);
    let validWordPairsCount = 0;
    let mirrorWordsArray = [];
    // Valid word pairs
    for (const match of patternResult) {
        validWordPairsCount++;
        let firstWord = match.groups.firstWord;
        let secondWord = match.groups.secondWord;
        // Reverse second word
        let reversedSecondWord = secondWord.split('').reverse().join('');
        // Check if reversed second word is mirror to the first word
        if (reversedSecondWord == firstWord) {
            mirrorWordsArray.push(`${firstWord} <=> ${secondWord}`);
        }
    }
    // Print the count of all valid word pairs found
    if (validWordPairsCount == 0) {
        console.log('No word pairs found!');
    } else {
        console.log(`${validWordPairsCount} word pairs found!`);
    }
    // Print all valid mirror words if found
    if (mirrorWordsArray.length == 0) {
        console.log('No mirror words!');
    } else {
        console.log('The mirror words are:');
        console.log(mirrorWordsArray.join(', '));
    }
}

printMirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);
console.log('-----');
printMirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
console.log('-----');
printMirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);