function sumFirstLast(arr) {
    const stringToNum = arr.slice().map(x => Number(x));
    const firstElement = stringToNum.shift();
    const lastElement = stringToNum.pop();
    let sum = firstElement + lastElement;

    return sum;
}

sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);