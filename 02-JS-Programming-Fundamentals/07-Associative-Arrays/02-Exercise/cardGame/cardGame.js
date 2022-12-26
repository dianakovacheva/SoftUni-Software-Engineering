function cardGame(arr) {
    // Initialize power multipliers
    let suits = {
        'C': 1,
        'D': 2,
        'H': 3,
        'S': 4
    };
    let faces = {
        '1': 10,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    };
    // Create result collection
    let playersObject = {};
    // For every element from the array
    for (let currentLine of arr) {
        // Parse element
        // -- split every line by ': ' -> result -> person name and cards as string
        // -- split cards by ', ' -> result -> array of cards
        let [personName, cards] = currentLine.split(': ');
        cards = cards.split(', ');
        // Store all the information in the result collection
        // -- if the current person is not recorded, create new Set
        // -- add new cards to person's set
        if (playersObject.hasOwnProperty(personName) == false) {
            playersObject[personName] = new Set();
        }
        for (let currentCard of cards) {
            playersObject[personName].add(currentCard);
        }
    }
    // For every entry in result collection
    for (let [currentPersonName, currentPersonCards] of Object.entries(playersObject)) {
        let power = 0;
        // - for every card in entry
        // -- calculate power
        for (let card of currentPersonCards) {
            let facePower = faces[card[0]];
            let suitPower = suits[card.slice(-1)];
            power += facePower * suitPower
        }
        // -- print name and total power for each person stored in result collection
        console.log(`${currentPersonName}: ${power}`);
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);