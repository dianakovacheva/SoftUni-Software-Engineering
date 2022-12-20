function deckOfCards(arr) {
    let listOfCards = arr.shift().split(', ');
    let numberOfCommands = Number(arr.shift());

    for (let i = 0; i < numberOfCommands; i++) {
        let command;
        let splitedCurrentCommandArray = arr[i].split(' ');
        if (splitedCurrentCommandArray[1] === "At,") {
            command = splitedCurrentCommandArray.splice(0, 2).join(' ');
        }
        else {
            command = splitedCurrentCommandArray.splice(0, 1)[0];
        }

        switch (command) {
            case "Add,":
                let cardToAdd = splitedCurrentCommandArray.splice(0).join(' ');

                if (!listOfCards.includes(cardToAdd)) {
                    listOfCards.push(cardToAdd);
                    console.log("Card successfully added");
                } else {
                    console.log("Card is already in the deck");
                }
                break;
            case "Remove,":
                let cardNameToRemove = splitedCurrentCommandArray.splice(0).join(' ');
                let indexOfCard = listOfCards.indexOf(cardNameToRemove);

                if (indexOfCard === -1) {
                    console.log("Card not found");
                } else {
                    listOfCards.splice(indexOfCard, 1);
                    console.log("Card successfully removed");
                }

                break;
            case "Remove At,":
                let index = splitedCurrentCommandArray[0];

                if (index >= 0 && index <= listOfCards.length - 1) {
                    listOfCards.splice(index, 1);
                    console.log("Card successfully removed");
                } else {
                    console.log("Index out of range");
                }
                break;
            case "Insert,":
                let indexOfElement = Number(splitedCurrentCommandArray[0].split(',')[0]);
                let cardToInsert = splitedCurrentCommandArray.splice(1).join(' ');

                if (indexOfElement >= 0 && indexOfElement <= listOfCards.length - 1 && !listOfCards.includes(cardToInsert)) {
                    listOfCards.splice(indexOfElement, 0, cardToInsert);
                    console.log("Card successfully added");
                } else if (indexOfElement >= 0 && indexOfElement <= listOfCards.length - 1 && listOfCards.includes(cardToInsert)) {
                    console.log("Card is already added");
                } else {
                    console.log("Index out of range");
                }

                break;
        }
    }

    console.log(listOfCards.join(', '));
}

deckOfCards(["Ace of Diamonds, Queen of Hearts, King of Clubs",
    "3",
    "Add, King of Diamonds",
    "Insert, 2, Jack of Spades",
    "Remove, Ace of Diamonds"])
    ;