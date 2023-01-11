function printCircleArea(inputPar) {
    let circleArea;
    if (typeof inputPar == 'number') {
        // Calculate the circle area
        circleArea = inputPar ** 2 * Math.PI;
        // Print the area rounded to two decimal places
        console.log(circleArea.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof inputPar}.`);
    }
}

printCircleArea(5);
printCircleArea('name');