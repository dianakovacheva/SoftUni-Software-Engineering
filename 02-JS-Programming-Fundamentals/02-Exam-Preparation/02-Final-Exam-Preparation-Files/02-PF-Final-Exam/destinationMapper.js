function destinationMapper(stringInput) {
    // Filter only the valid places on the map
    let destinationsArray = [];
    let text = stringInput;
    let patternResult = text.matchAll(/(?<symbol>=|\/)(?<destination>[A-Z][A-Za-z]{2,})\1/g);
    for (const match of patternResult) {
        let currentDestination = match.groups.destination;
        destinationsArray.push(currentDestination);
    }
    // Calculate travel points. Sum the lengths of all the valid destinations
    let sumTravelPoints = 0;
    for (const currentDestination of destinationsArray) {
        let currentDestinationLength = currentDestination.length;
        sumTravelPoints += currentDestinationLength;
    }
    // Print on the first line: "Destinations: {destinations joined by ', '}"
    console.log(`Destinations: ${destinationsArray.join(', ')}`);
    // Print on the second line: "Travel Points: {travel_points}"
    console.log(`Travel Points: ${sumTravelPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");