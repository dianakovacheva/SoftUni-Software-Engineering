function challengeTheWedding(input) {
    let numMens = Number(input[0]);
    let numWomen = Number(input[1]);
    let maxNumTables = Number(input[2]);
    let availableSeats = maxNumTables * 2;
    let printLine = "";


    for (let j = 1; j <= numMens; j++) {
        for (let k = 1; k <= numWomen; k++) {
            if (availableSeats === 0) {
                break;
            }
            printLine += `(${j} <-> ${k}) `
            availableSeats -= 2;
        }
    }
    console.log(printLine);
}
challengeTheWedding(["2", "2", "3"]);