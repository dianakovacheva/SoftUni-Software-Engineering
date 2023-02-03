function getFibonator() {
    let [firstNum, secondNum] = [0, 1];
    // 0, 1, 1, 2, 3, 5, 8, 13
    return () => {
        let sum = firstNum + secondNum;
        // update the value of the fistNum with the next number (secondNum)
        firstNum = secondNum;
        // update the value of the secondNum with the value of the sum
        secondNum = sum;
        return firstNum;
    }
}


let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
