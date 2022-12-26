function partyTime(arr) {
    let allGuestsListObj = new Map();
    let currentLine = arr.shift();
    let comingGuests = arr;
    //List with the guests at position before recieving the command 'PARTY'
    while (currentLine !== "PARTY") {
        if (currentLine === "PARTY") {
            break;
        }
        // Set the list of all guests
        allGuestsListObj.set(currentLine);
        currentLine = arr.shift();
    }
    // Check out if the coming guests are in the guests list
    for (const currentGuest of comingGuests) {
        // Delete the coming guests from the allGuestsListObj to find out who didn't come to the party
        // allGuestsListObj is left only with the guests who didn't come to the party
        if (allGuestsListObj.has(currentGuest)) {
            allGuestsListObj.delete(currentGuest);
        }
    }
    // Console log the count of guests, who didn't come to the party
    console.log(allGuestsListObj.size);
    // Print the VIP guest (guests starting with a digit)

    for (let key of allGuestsListObj.keys()) {
        if (key.match(/^\d/)) {
            console.log(key);
        } else {
            console.log(key);
        }
    }
}

partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);