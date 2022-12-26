function arrayRotation(array, numberOfRotations) {
    let rotatedArray = [];

    for (let i = numberOfRotations; i > 0; i--) {
        array.push(array.shift());
    }

    rotatedArray = array;

    console.log(rotatedArray.join(" "));
}

arrayRotation([2, 4, 15, 31], 5);