function arrayModifier(arr) {

    let arrayOfNumbers = arr.shift().split(' ').map(x => Number(x));
    let commandArray = arr.shift();

    while (commandArray !== "end") {
        let splitedCommandArray = commandArray.split(' ');
        let command = splitedCommandArray.shift();
        let index1 = Number(splitedCommandArray.shift());
        let index2 = Number(splitedCommandArray.shift());

        switch (command) {
            case "swap":
                let temp = arrayOfNumbers[index2];
                let secondTemp = arrayOfNumbers[index1];
                arrayOfNumbers[index1] = temp;
                arrayOfNumbers[index2] = secondTemp;
                break;
            case "multiply":
                arrayOfNumbers[index1] *= arrayOfNumbers[index2];
                break;
            case "decrease":
                for (let i = 0; i < arrayOfNumbers.length; i++) {
                    arrayOfNumbers[i]--;
                }
                break;
        }

        commandArray = arr.shift()
    }

    console.log(arrayOfNumbers.join(', '));
}

arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]
);