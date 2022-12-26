function printPartyTime(arr) {
    let currentLine = arr.shift();
    let VIPGuests = [];
    let regularGuests = [];
    let comingGuests = arr;

    while (currentLine !== "PARTY") {
        if (currentLine === "PARTY") {
            break;
        }
        // Check if current line starts with a digit -> VIP guest
        const isVIP = !isNaN(currentLine[0]);
        if (isVIP) {
            VIPGuests.push(currentLine);
        } else {
            regularGuests.push(currentLine);
        }
        currentLine = arr.shift();
    }
    // Concatinate both guest lists (VIPguests and regularGuests)
    let allGuestList = VIPGuests.concat(regularGuests);
    // Remove the coming guest from the list 
    // allGuestList is lefr only with the guest, who didn't come to the party
    for (const currentGuest of comingGuests) {
        allGuestList.splice(allGuestList.indexOf(currentGuest), 1);
    }
    // Print out the count of all not coming guests and their "ID"
    console.log(allGuestList.length);
    allGuestList.forEach(currentGuest => console.log(currentGuest));
}

printPartyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]
);