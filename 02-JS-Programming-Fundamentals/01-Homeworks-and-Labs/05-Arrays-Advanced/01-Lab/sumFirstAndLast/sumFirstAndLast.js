function sumFirstAndLast(arrayOfString) {

    let firstElement = Number(arrayOfString[0]);
    let lastElement = Number(arrayOfString[arrayOfString.length - 1]);
    let sum = firstElement + lastElement;

    console.log(sum);
}

sumFirstAndLast(['20', '30', '40']);