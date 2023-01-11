function sumNumbers(n, m) {
    let totalSum = 0;
    // Parse 'n' and 'm' to number
    const firstNum = Number(n);
    const secondNum = Number(m);
    // Calculate the sum of all numbers from firstNum to secondNum
    for (let i = firstNum; i <= secondNum; i++) {
        totalSum += i;
    }
    return totalSum;
}

sumNumbers('1', '5');
sumNumbers('-8', '20');