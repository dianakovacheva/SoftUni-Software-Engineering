function spiceMustFlow(startingYield) {

    let daysCount = 0;
    let totalAmountExtractedSpices = 0;

    while (startingYield >= 100) {
        daysCount++;
        totalAmountExtractedSpices += startingYield - 26;
        startingYield -= 10;
    }
    console.log(daysCount);

    if (daysCount !== 0) {
        console.log(totalAmountExtractedSpices - 26);
    } else {
        console.log(totalAmountExtractedSpices);
    }
}

spiceMustFlow(450);