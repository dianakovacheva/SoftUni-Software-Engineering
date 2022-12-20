function thePianist(arr) {
    let numOfPieces = Number(arr.shift());
    let piecesCollectionObject = {};
    let currentLine = arr.shift();
    // Set each piece information to the pianosObject
    for (let i = 0; i < numOfPieces; i++) {
        const [piece, composer, key] = currentLine.split('|');
        currentLine = arr.shift();
        piecesCollectionObject[piece] = { composer, key };
    }
    // Different commands, each on a new line, separated by "|", until the "Stop" command is given
    while (currentLine !== 'Stop') {
        let splittedLine = currentLine.split('|');
        let command = splittedLine[0];
        switch (command) {
            case "Add":
                let piece = splittedLine[1];
                let composer = splittedLine[2];
                let key = splittedLine[3];
                if (!piecesCollectionObject.hasOwnProperty(piece)) {
                    piecesCollectionObject[piece] = { composer, key };
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                } else {
                    console.log(`${piece} is already in the collection!`);
                }
                break;
            case "Remove":
                let pieceToRemove = splittedLine[1];
                if (!piecesCollectionObject.hasOwnProperty(pieceToRemove)) {
                    console.log(`Invalid operation! ${pieceToRemove} does not exist in the collection.`);
                } else {
                    delete piecesCollectionObject[pieceToRemove];
                    console.log(`Successfully removed ${pieceToRemove}!`);
                }
                break;
            case "ChangeKey":
                let pieceToChangeKey = splittedLine[1];
                let newKey = splittedLine[2];
                if (!piecesCollectionObject.hasOwnProperty(pieceToChangeKey)) {
                    console.log(`Invalid operation! ${pieceToChangeKey} does not exist in the collection.`);
                } else {
                    piecesCollectionObject[pieceToChangeKey].key = newKey;
                    console.log(`Changed the key of ${pieceToChangeKey} to ${newKey}!`);
                }
                break;
        }
        currentLine = arr.shift();
    }
    // Upon receiving the "Stop" command, you need to print all pieces in your collection in the following format: "{Piece} -> Composer: {composer}, Key: {key}"
    for (const currentPiece in piecesCollectionObject) {
        let piece = currentPiece;
        let composer = piecesCollectionObject[currentPiece].composer;
        let key = piecesCollectionObject[currentPiece].key;
        console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
    }
}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
);