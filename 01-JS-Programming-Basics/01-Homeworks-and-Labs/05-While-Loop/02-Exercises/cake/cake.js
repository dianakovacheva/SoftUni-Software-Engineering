function cake(input) {
    let i = 0;
    let width = Number(input[i]);
    i++;
    let height = Number(input[i]);
    i++;
    let cakeSize = width * height;
    let command = input[i];
    i++;

    while(command !== "STOP") {
        let piecesCake = Number(command);
        cakeSize -= piecesCake;

        if(cakeSize < 0) {
            console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
            break;
        }

        command = input[i];
        i++;
    }

    if(cakeSize >= 0) {
        console.log(`${cakeSize} pieces are left.`);
    }
}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

