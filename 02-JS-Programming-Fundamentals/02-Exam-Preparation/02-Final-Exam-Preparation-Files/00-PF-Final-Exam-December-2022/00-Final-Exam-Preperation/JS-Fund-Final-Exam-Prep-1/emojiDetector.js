function emojiDetector(arr) {
    let text = arr.shift();
    let emojisCount = 0;
    let coolEmojisArray = [];
    let digits = text.match(/\d/g);
    let coolThresholdSum = 1;
    // Cool threshold is obtained by multiplying all the digits found in the input
    for (const number of digits) {
        coolThresholdSum *= (Number(number));
    }
    // All emojis found in the text
    let resultEmojis = text.matchAll(/(:{2}|\*{2})(?<word>[A-Z][a-z]{2,})\1/g);
    for (const match of resultEmojis) {
        let emoji = match[0];
        let emojiName = match.groups.word;
        emojisCount++;
        // Calculate the coolness of all valid emojis. The coolness of the emoji is determined by summing all the ASCII values of all letters in the emoji
        let emojiCoolness = 0;
        for (let i = 0; i < emojiName.length; i++) {
            emojiCoolness += emojiName.charCodeAt(i);
        }

        if (emojiCoolness > coolThresholdSum) {
            coolEmojisArray.push(emoji);
        }
    }
    // Print the result and all cool emojis
    console.log(`Cool threshold: ${coolThresholdSum}`);
    // Print the count of all emojis found in the text
    console.log(`${emojisCount} emojis found in the text. The cool ones are:`);
    for (const currentEmoji of coolEmojisArray) {
        console.log(currentEmoji);
    }
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);