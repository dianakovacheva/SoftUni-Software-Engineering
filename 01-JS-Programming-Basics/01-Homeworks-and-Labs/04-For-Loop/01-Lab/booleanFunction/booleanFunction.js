function greaterThan10(num) {
    if (num > 10) {
        return true;
    } else {
        return false;
    }
}

function greaterThan10v2(num) {
    return num >10;
}


let testNumber = 9;

console.log(greaterThan10(testNumber));
console.log(greaterThan10v2(testNumber));