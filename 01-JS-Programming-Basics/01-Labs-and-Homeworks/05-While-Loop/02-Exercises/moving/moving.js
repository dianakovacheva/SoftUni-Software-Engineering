function moving(input) {
    let i = 0;
    let width = Number(input[i]);
    i++;
    let length = Number(input[i]);
    i++;
    let heigth = Number(input[i]);
    i++;
    let appartmentVolume = width * length * heigth;
    let command = input[i];
    i++;

    while (command !== "Done") {
        let freeSpace = Number(command);
        appartmentVolume -= freeSpace;

        if(appartmentVolume < 0) {
            console.log(`No more free space! You need ${Math.abs(appartmentVolume)} Cubic meters more.`);
            break;
        }

        command = input[i];
        i++;
    }

    if(appartmentVolume >= 0) {
        console.log(`${appartmentVolume} Cubic meters left.`);
    }
}

moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])

