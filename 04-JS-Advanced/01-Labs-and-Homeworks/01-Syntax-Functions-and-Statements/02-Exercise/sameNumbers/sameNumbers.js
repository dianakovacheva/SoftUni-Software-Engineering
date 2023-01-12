function checkIfSameNumber(num) {
    const numToStringArray = num.toString().split('');
    const numToCompareWith = Number(numToStringArray.shift());
    let sum = numToCompareWith;
    let isTrue = true;
    // Check if all the digits in the array are the same or not
    for (let i = 0; i < numToStringArray.length; i++) {
        let currentNum = Number(numToStringArray[i]);
        sum += currentNum;
        if (currentNum !== numToCompareWith) {
            isTrue = false;
        }
    }
    // Print on the console true if all numbers are the same and false if not
    if (isTrue) {
        console.log('true');
    } else {
        console.log('false');
    }
    // Print the sum of all digits
    console.log(sum);
}

checkIfSameNumber(2222222);
checkIfSameNumber(1234);