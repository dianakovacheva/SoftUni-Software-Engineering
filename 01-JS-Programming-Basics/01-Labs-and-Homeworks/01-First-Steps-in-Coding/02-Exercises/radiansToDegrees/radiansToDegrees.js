function radiansToDegrees(input) {

    let rad = Number(input[0]);
    let degrees = rad * 180 / Math.PI;

    console.log(degrees);
}

radiansToDegrees(["6.2832"]);