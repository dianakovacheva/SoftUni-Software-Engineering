function extractText() {
    // Get the ul element with id "items"
    const ulElement = document.getElementById('items');
    // Get all it's children
    const liElements = ulElement.children;
    const liElementsArray = Array.from(liElements);
    let resultArray = [];
    // Get the text content of each li item
    for (const li of liElementsArray) {
        const liElementText = li.textContent;
        // Push each text content to the resultArray
        resultArray.push(liElementText);
    }
    // Get the result element
    const textAreaElement = document.getElementById('result');
    // Set it's value to resultArray, joined by new line
    textAreaElement.value = resultArray.join('\n');
}