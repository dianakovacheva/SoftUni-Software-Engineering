function starEnigma(data) {
    let messagesCount = Number(data.shift());
    let pattern = /@(?<planetName>[A-Z][a-z]+)[^@\-!:>]*:(?<planetPopulation>\d+)[^@\-!:>]*!(?<attackType>[A|D])![^@\-!:>]*->(?<soldierCount>\d+)/;
    let attackedPlanets = [];
    let desctroyedPlanets = [];

    for (let i = 0; i < messagesCount; i++) {
        let currentEncryptedMessage = data[i];
        // Count all the letters [s,t,a,r] - case insensitive
        // Remove the count from the current ASCII value of each symbol of the encrypted message
        let count = currentEncryptedMessage
            .toLowerCase()
            .split('')
            .filter((char) => char === 's' || char === 't' || char === 'a' || char === 'r')
            .length;
        // Dectrypt the each message
        let decryptetMessage = currentEncryptedMessage
            .split('')
            .map((char) => String.fromCharCode(char.charCodeAt(0) - count))
            .join('');
        // Find all matches of the decrypted information
        let regExpMatch = decryptetMessage.match(pattern);
        // If the decrypted messages match the regExp
        // Push the attacked planets to attackedPlanets
        // Push the desctroyed planets to desctroyedPlanets
        if (regExpMatch) {
            if (regExpMatch[3] === 'A') {
                attackedPlanets.push(regExpMatch[1]);
            } else {
                desctroyedPlanets.push(regExpMatch[1]);
            }
        }
    }
    // Calculate the number of all attacked planets
    let attackedPlanetsCount = attackedPlanets.length;
    console.log(`Attacked planets: ${attackedPlanetsCount}`);
    // Order the planets by name alphabetically
    let sortedAttackedPlanets = attackedPlanets.sort((a, b) => a.localeCompare(b));
    // Print the attacked planets
    sortedAttackedPlanets.forEach(planetName => {
        console.log(`-> ${planetName}`);
    });
    // Calculate the number of all desctroyed planets
    let desctroyedPlanetsCount = desctroyedPlanets.length;
    console.log(`Destroyed planets: ${desctroyedPlanetsCount}`);
    // Order the planets by name alphabetically
    let sortedPlanetNames = desctroyedPlanets.sort((a, b) => a.localeCompare(b));
    // Print the destroyed planets
    sortedPlanetNames.forEach(destroyedPlanetName => {
        console.log(`-> ${destroyedPlanetName}`);
    })
}

starEnigma([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
]);

console.log('---------------');

starEnigma([
    '2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR'
]);