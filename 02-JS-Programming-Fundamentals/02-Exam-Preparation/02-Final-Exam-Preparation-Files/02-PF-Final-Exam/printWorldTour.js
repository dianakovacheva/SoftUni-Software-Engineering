function printWorldTour(arr) {
    let listOfStops = arr.shift();
    let currentLine = arr.shift();
    // Different commands
    while (currentLine !== "Travel") {
        let splittedLine = currentLine.split(':');
        let command = splittedLine[0];
        // After each command, print the current state of the string
        switch (command) {
            case "Add Stop":
                let index = Number(splittedLine[1]);
                let stringToAdd = splittedLine[2];
                if (index >= 0 && index <= listOfStops.length) {
                    let stringFirstPart = listOfStops.slice(0, index);
                    let stringLastPart = listOfStops.slice(index);
                    listOfStops = stringFirstPart + stringToAdd + stringLastPart;
                }
                console.log(listOfStops);
                break;
            case "Remove Stop":
                let startIndex = Number(splittedLine[1]);
                let endIndex = Number(splittedLine[2]);
                if (startIndex >= 0 && startIndex <= endIndex && endIndex <= listOfStops.length - 1) {
                    let firstPart = listOfStops.substring(0, startIndex);
                    let lastPart = listOfStops.substring(endIndex + 1);
                    listOfStops = firstPart + lastPart;
                }
                console.log(listOfStops);
                break;
            case "Switch":
                let oldString = splittedLine[1];
                let newString = splittedLine[2];
                let pattern = new RegExp(oldString, 'g');
                listOfStops = listOfStops.replace(pattern, newString);
                console.log(listOfStops);
                break;
        }
        currentLine = arr.shift();
    }
    // After the "Travel" command, print the following: "Ready for world tour! Planned stops: {string}"
    console.log(`Ready for world tour! Planned stops: ${listOfStops}`);
}

printWorldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);
