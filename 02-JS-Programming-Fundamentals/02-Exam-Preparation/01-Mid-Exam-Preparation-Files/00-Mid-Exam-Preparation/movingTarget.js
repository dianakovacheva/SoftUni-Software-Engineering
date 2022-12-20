function movingTarget(arr) {
    let targets = arr
        .shift()
        .split(' ')
        .map(x => Number(x));

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
                let sliceStart = index - power;
                let sliceEnd = index + power + 1;
                let sliceSize = power * 2 + 1;
                if (sliceStart >= 0 && sliceEnd <= targets.length - 1) {
                    targets.splice(sliceStart, sliceSize);
                } else {
                    console.log("Strike missed!");
                }
                break;
        }
        commandArray = arr.shift();
    }

    console.log(targets.join('|'));
}

movingTarget((["1 2 3 4 5",
    "Add 1 3",
    "End"])
);