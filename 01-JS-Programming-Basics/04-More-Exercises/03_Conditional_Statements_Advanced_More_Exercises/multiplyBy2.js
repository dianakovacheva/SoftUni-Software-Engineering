function multiplyBy2(input) {

    for (let i = 0; i < input.length; i++) {
        let currentNumber = Number(input[i]);
        if (currentNumber >= 0) {
            console.log(`Result: ${(currentNumber * 2).toFixed(2)}`);
        } else {
            console.log("Negative number!");
            break;
        }
    }
}

multiplyBy2(["-123"]);