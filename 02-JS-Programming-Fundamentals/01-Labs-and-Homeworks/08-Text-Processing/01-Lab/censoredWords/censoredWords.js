function censoredWords(text, singelWord) {

    // while (text.includes(singelWord)) {
    //     text = text.replace(singelWord, "*".repeat(singelWord.length));
    // }
    // console.log(text);

    let censoredText = text;

    while (censoredText.includes(singelWord)) {
        censoredText = censoredText.replace(singelWord, "*".repeat(singelWord.length));
    }

    console.log(censoredText);

}

censoredWords('Find the hidden word', 'hidden');