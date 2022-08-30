function oscars(input) {
    let actorName = input[0];
    let pointsReceivedFromAcademy = Number(input[1]);
    let judgeCount = Number(input[2]);


    for (let i = 3; i < input.length; i += 2) {
        let judgeName = input[i].length;
        let currentReceivedPoints = Number(input[i + 1]);
        pointsReceivedFromAcademy += judgeName * currentReceivedPoints / 2;
    
        if (pointsReceivedFromAcademy >= 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${pointsReceivedFromAcademy.toFixed(1)}!`);
            break;
        }
    }
    

    let diff = Math.abs(1250.5 - pointsReceivedFromAcademy);

    if (pointsReceivedFromAcademy < 1250.5) {
        console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`);
    }
}

oscars(["MJ",
    "430",
    "4",
    "Fyre Sofia",
    "50",
    "Black Angus",
    "43",
    "John Snow",
    "39",
    "Freddie Mercury",
    "40"])

