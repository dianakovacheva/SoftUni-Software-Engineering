function addAndRemoveElements(arrOfCommands) {
    let initialNum = 1;
    let resultArr = [];

    arrOfCommands.forEach(command => {
        switch (command) {
            case "add":
                resultArr.push(initialNum);
                break;
            case "remove":
                resultArr.pop();
                break;
        }
        initialNum++;
    });

    if (resultArr.length === 0) {
        console.log('Empty');
    } else {
        resultArr.forEach(num => {
            console.log(num);
        })
    }
};

addAndRemoveElements([
    'add',
    'add',
    'add',
    'add'
]);
console.log('---------');
addAndRemoveElements([
    'add',
    'add',
    'remove',
    'add',
    'add'
]);
console.log('---------');
addAndRemoveElements([
    'remove',
    'remove',
    'remove'
]);