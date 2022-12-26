function loadingBar(number) {

    let maxNumOfSymbols = 10;
    isStillLoading = true;

    let printLine = "";
    let numOfPercentageSymbol = number / 10;
    let numOfDots = maxNumOfSymbols - numOfPercentageSymbol;

    let percenrage = "%".repeat(numOfPercentageSymbol);
    let dots = ".".repeat(numOfDots);

    if (number >= 100) {
        isStillLoading = false;
        printLine += `[${percenrage}]`;
    } else {
        printLine += `${number}% [${percenrage}${dots}]`;
    }

    if (isStillLoading) {
        console.log(printLine);
        console.log("Still loading...");
    } else {
        console.log("100% Complete!");
        console.log(printLine);

    }
}

loadingBar(100);