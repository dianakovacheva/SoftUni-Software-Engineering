function numbers(arr) {
    let numbers = arr.shift().split(' ').map(x => Number(x));

    let command = arr.shift();

    while (command !== "Finish") {
        let commandArray = command.split(' ');
        let currentCommand = commandArray[0];
        let value = Number(commandArray[1]);

        switch (currentCommand) {
            case "Add":
                numbers.push(value);
                break;
            case "Remove":
                let indexOfNumberToRemove = numbers.indexOf(value);
                numbers.splice(indexOfNumberToRemove, 1);
                break;
            case "Replace":
                let replacement = Number(commandArray[2]);
                let indexToReplace = numbers.indexOf(value);
                numbers[indexToReplace] = replacement;
                break;
            case "Collapse":
                for (let i = numbers.length - 1; i >= 0; i--) {
                    if (numbers[i] < value) {
                        numbers.splice(i, 1);
                    }
                }
                break;
        }

        command = arr.shift();
    }

    console.log(numbers.join(' '));
}

numbers(["1 4 5 19",
    "Add 1",
    "Remove 4",
    "Finish"])
    ;