function rightPlace(firstString, char, secondString) {
    let editedString = "";

    for (let i = 0; i < firstString.length; i++) {
        let currentChar = firstString[i];

        if (currentChar === "_") {
            // Replacing the currentChar with char
            currentChar = char;
        }

        editedString += currentChar;
    }

    // if (editedString === secondString) {
    //     console.log("Matched");
    // } else {
    //     console.log("Not Matched");
    // }

    console.log(editedString === secondString ? "Matched" : "Not Matched");
}

rightPlace('Str_ng', 'i', 'String');