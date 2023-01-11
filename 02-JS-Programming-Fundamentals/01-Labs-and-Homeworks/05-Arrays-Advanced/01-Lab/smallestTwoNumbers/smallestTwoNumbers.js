function smallestTwoNumbers(arrayOfNumbers) {

    let sortedInAscendingOrder = arrayOfNumbers.sort((a, b) => {
        return a - b;
    });

    let result = sortedInAscendingOrder.slice(0, 2);

    console.log(result.join(" "));
}

smallestTwoNumbers([3, 0, 10, 4, 7, 3]);