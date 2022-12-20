function activationKeys(arr) {
    let rawActivationKey = arr.shift();
    let currentLine = arr.shift();
    while (currentLine !== "Generate") {
        let splittedLine = currentLine.split('>>>');
        let command = splittedLine[0];
        switch (command) {
            case "Contains":
                let substring = splittedLine[1];
                if (!rawActivationKey.includes(substring)) {
                    console.log('Substring not found!');
                } else {
                    console.log(`${rawActivationKey} contains ${substring}`);
                }
                break;
            case "Flip":
                let caseType = splittedLine[1];
                let startIndexToFlipLetter = splittedLine[2];
                let endIndexToFlipLetter = splittedLine[3];
                if (caseType === "Upper") {
                    rawActivationKey = rawActivationKey.substring(0, startIndexToFlipLetter) + rawActivationKey.substring(startIndexToFlipLetter, endIndexToFlipLetter).toUpperCase() + rawActivationKey.substring(endIndexToFlipLetter);
                    console.log(rawActivationKey);
                } else {
                    rawActivationKey = rawActivationKey.substring(0, startIndexToFlipLetter) + rawActivationKey.substring(startIndexToFlipLetter, endIndexToFlipLetter).toLowerCase() + rawActivationKey.substring(endIndexToFlipLetter);
                    console.log(rawActivationKey);
                }
                break;
            case "Slice":
                let startIndex = Number(splittedLine[1]);
                let endIndex = Number(splittedLine[2]);
                rawActivationKey = rawActivationKey.substring(0, startIndex) + rawActivationKey.substring(endIndex);
                console.log(rawActivationKey);
                break;
        }
        currentLine = arr.shift();
    }
    console.log(`Your activation key is: ${rawActivationKey}`);
}

activationKeys((["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"])
);