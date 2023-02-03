function extract(content) {
    const contentElement = document.getElementById('content');
    const pattern = /\(([^(]+)\)/g;
    const matches = contentElement.textContent.matchAll(pattern);
    let resultArray = [];
    for (const match of matches) {
        resultArray.push(match[1]);
    }
    return resultArray.join('; ');
}
