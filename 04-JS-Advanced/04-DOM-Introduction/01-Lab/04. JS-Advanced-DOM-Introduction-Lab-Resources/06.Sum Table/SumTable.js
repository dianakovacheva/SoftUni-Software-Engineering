function sumTable() {
    const tdElements = document.querySelectorAll('td:nth-of-type(2)');
    const tdElementsArray = Array.from(tdElements);
    let totalSum = 0;
    for (let i = 0; i < tdElementsArray.length - 1; i++) {
        const row = tdElementsArray[i];
        const tdElementsText = row.textContent;
        totalSum += Number(tdElementsText);
    }
    const sumElement = document.getElementById('sum');
    sumElement.textContent = totalSum;
}