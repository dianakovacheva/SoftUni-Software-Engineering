function hospital(input) {
    let numDays = Number(input[0]);
    let numDoctors = 7;
    let numTreatedPatients = 0;
    let numUntreatedPatients = 0;

    for (let i = 1; i <= numDays; i++) {
        let numCurrentPatients = Number(input[i]);

        if (i % 3 === 0) {
            if (numUntreatedPatients > numTreatedPatients) {
                numDoctors++;
            }
        }

        if (numCurrentPatients <= numDoctors) {
            numTreatedPatients += numCurrentPatients;
        } else if (numCurrentPatients > numDoctors) {
            numUntreatedPatients += numCurrentPatients - numDoctors;
            numTreatedPatients += numDoctors;
        }
    }

    console.log(`Treated patients: ${numTreatedPatients}.`);
    console.log(`Untreated patients: ${numUntreatedPatients}.`);
}

hospital(["6", "25", "25", "25", "25", "25", "2"]);