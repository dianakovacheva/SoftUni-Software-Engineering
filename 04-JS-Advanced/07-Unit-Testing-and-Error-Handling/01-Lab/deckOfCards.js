function printDeckOfCards(cardsArray) {
    let face;
    let suit;
    let validCardsArr = [];
    const validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validCardsSuits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663',
    };
    while (cardsArray.length) {
        const currentCard = cardsArray.shift();
        if (currentCard.length > 2) {
            face = currentCard.slice(0, 2);
            suit = currentCard.slice(2);
        } else {
            [face, suit] = currentCard;
        }
        // break the program when an invalid card definition is passed as input
        if (!validCardFaces.includes(face) || !validCardsSuits.hasOwnProperty(suit)) {
            return console.log(`Invalid card: ${face}${suit}`);
        } else {
            validCardsArr.push(`${face}${validCardsSuits[suit]}`)
        }
    }
    console.log(validCardsArr.join(' '));
};

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);