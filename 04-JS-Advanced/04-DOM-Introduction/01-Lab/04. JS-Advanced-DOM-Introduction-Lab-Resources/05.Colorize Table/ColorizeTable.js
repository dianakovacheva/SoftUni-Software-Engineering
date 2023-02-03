function colorize() {
    const trElements = document.getElementsByTagName('tr');
    const trElementsArray = Array.from(trElements);
    for (let i = 0; i < trElementsArray.length; i++) {
        if (i % 2 !== 0) {
            trElementsArray[i].style.backgroundColor = 'teal';
        }
    }
}