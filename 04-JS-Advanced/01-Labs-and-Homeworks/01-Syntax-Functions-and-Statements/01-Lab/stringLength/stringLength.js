function printStringLength(firstArg, secondArg, thirdArg) {
    const totalStringsLength = firstArg.length + secondArg.length + thirdArg.length;
    const averageLenght = totalStringsLength / 3;
    console.log(totalStringsLength);
    console.log(Math.floor(averageLenght));
}

printStringLength('chocolate', 'ice cream', 'cake');
printStringLength('pasta', '5', '22.3');