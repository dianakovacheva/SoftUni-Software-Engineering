function playingCards(face, suit) {
    const validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validCardsSuits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663',
    };
    if (!validCardFaces.includes(face)) {
        throw new TypeError('Invalid face');
    } else if (!validCardsSuits.hasOwnProperty(suit)) {
        throw new TypeError('Invalid suit');
    }
    const cardsObj = {
        face,
        suit,
        toString() {
            return this.face + validCardsSuits[this.suit];
        }
    };
    return cardsObj;
}

const cards = [
    playingCards('A', 'S'), // A♠
    playingCards('10', 'H'), // 10♥
    // playingCards('1', 'C') // Invalid face
];

console.log(cards.join('\n'));

