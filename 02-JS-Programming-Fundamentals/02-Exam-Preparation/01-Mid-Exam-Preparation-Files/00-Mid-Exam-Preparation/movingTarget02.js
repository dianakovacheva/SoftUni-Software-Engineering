function movingTarget(arr) {
    let targets = arr.shift().split(' ').map(x => Number(x));
    let commandArray = arr.shift();

    while (commandArray !== "End") {
        let splitedCommandArray = commandArray.split(' ');
        let command = splitedCommandArray[0];
        let index = Number(splitedCommandArray[1]);
        let power = Number(splitedCommandArray[2]);

        switch (command) {
            case "Shoot":
                if (index >= 0 && index <= targets.length - 1) {
                    targets[index] -= power;
                    if (targets[index] <= 0) {
                        targets.splice(index, 1);
                    }
                }
                break;
            case "Add":
                if (index >= 0 && index <= targets.length - 1) {
                    targets.splice(index, 0, power);
                } else {
                    console.log("Invalid placement!");
                }
                break;
            case "Strike":
                let arrayStart = index - power;
                let arrayEnd = index + power + 1;
                let arraySize = 2 * power + 1;
                if (arrayStart >= 0 && arrayEnd <= targets.length - 1) {
                    targets.splice(arrayStart, arraySize);
                } else {
                    console.log("Strike missed!");
                }
                break;
        }

        commandArray = arr.shift();
    }

    console.log(targets.join('|'));
}

movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]);