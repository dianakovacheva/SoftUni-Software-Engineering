function pointsValidation(array) {
    let x1 = array[0];
    let y1 = array[1];
    let x2 = array[2];
    let y2 = array[3];

    let formula = Math.pow(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2), 0.5);
    let isValid = false;

    if (x1 > 0 && y1 > 0 && x2 > 0 && y2 > 0) {
        isValid = true;
    }

    if (isValid) {
        console.log(`${x1, y1} to ${x2, y2} is valid`);
    }
}

pointsValidation([3, 0, 0, 4]);