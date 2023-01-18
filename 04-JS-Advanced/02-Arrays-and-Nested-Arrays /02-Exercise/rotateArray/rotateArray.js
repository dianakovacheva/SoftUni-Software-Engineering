function rotateArray(arr, num) {
    let resultArr = arr;

    for (let i = 0; i < num; i++) {
        let lastElement = arr.pop();
        resultArr.unshift(lastElement);
    }

    console.log(resultArr.join(' '));
}

rotateArray(['1',
    '2',
    '3',
    '4'],
    2
);
rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15
);