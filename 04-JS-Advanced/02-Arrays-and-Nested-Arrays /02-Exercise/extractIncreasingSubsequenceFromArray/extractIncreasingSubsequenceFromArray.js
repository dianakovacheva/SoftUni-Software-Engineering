function extractIncreasingSubsequenceFromArray(arrOfNumbers) {
    let resultArr = [];
    let biggestNum = arrOfNumbers.shift();
    resultArr = [biggestNum];
    for (let i = 0; i < arrOfNumbers.length; i++) {
        let currentNum = arrOfNumbers[i];
        if (biggestNum <= currentNum) {
            biggestNum = currentNum;
            resultArr.push(biggestNum);
        }
    }
    return resultArr;
}

extractIncreasingSubsequenceFromArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);
extractIncreasingSubsequenceFromArray([1,
    2,
    3,
    4]
);
extractIncreasingSubsequenceFromArray([20,
    3,
    2,
    15,
    6,
    1]
);