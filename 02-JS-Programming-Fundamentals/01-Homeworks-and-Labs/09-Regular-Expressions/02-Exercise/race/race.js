function race(arr) {
    let participants = arr.shift().split(', ');
    let currentLine = arr.shift();
    let namesPattern = /[A-Za-z]+/g;
    let digitsPattern = /[0-9]/g;
    let participantsObject = {};
    while (currentLine !== 'end of race') {
        let resultName = currentLine.match(namesPattern).join('');
        let resultDigits = currentLine.match(digitsPattern).join('');
        let distance = 0;
        // Calculate to distance for each participants
        if (participants.includes(resultName)) {
            for (const digit of resultDigits) {
                distance += Number(digit);
            }
            // Creat object with all participants
            if (!participantsObject.hasOwnProperty(resultName)) {
                participantsObject[resultName] = 0;
            }
            participantsObject[resultName] += distance;
        }
        currentLine = arr.shift();
    }
    // Racers ordered by distance in descending
    let sortedDistanceEachRacer = Object.entries(participantsObject).sort((a, b) => b[1] - a[1]);
    // The names of the top 3 racers
    const firstPlace = sortedDistanceEachRacer[0][0];
    const secondPlace = sortedDistanceEachRacer[1][0];
    const thirdPlace = sortedDistanceEachRacer[2][0];
    // Print the top 3 racers ordered by distance in descending
    console.log(`1st place: ${firstPlace}`);
    console.log(`2nd place: ${secondPlace}`);
    console.log(`3rd place: ${thirdPlace}`);
}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
);