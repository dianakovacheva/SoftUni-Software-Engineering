function printEveryNthElementFromAnArray(arr, num) {
    let resultArr = [];
    for (let i = 0; i < arr.length; i += num) {
        resultArr.push(arr[i]);
    }
    return resultArr;
}

printEveryNthElementFromAnArray(['5',
    '20',
    '31',
    '4',
    '20'],
    2
);
printEveryNthElementFromAnArray(['dsa',
    'asd',
    'test',
    'tset'],
    2

);
printEveryNthElementFromAnArray(['1',
    '2',
    '3',
    '4',
    '5'],
    6
);
