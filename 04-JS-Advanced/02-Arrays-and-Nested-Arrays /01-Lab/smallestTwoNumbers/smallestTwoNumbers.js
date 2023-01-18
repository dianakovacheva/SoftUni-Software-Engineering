function smallestTwoNumbers(arr) {
    const arrayOfNum = arr.slice();
    const sortedNum = arrayOfNum.sort((a, b) => a - b);
    const firstTwoSmallestNum = sortedNum.splice(0, 2);
    console.log(firstTwoSmallestNum.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);