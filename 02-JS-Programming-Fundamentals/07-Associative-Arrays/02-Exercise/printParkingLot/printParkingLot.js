function printParkingLot(arrayOfString) {
    let parkingList = new Map();
    // Split by ", " all element in the array of string
    let fullList = arrayOfString.map(el => el.split(', '));
    // Get the command and the number of the current car
    fullList.forEach(currentCar => {
        const command = currentCar[0];
        const carNumber = currentCar[1];
        // Set command and carNumber as key and value at the parkingLot
        if (command === "IN") {
            parkingList.set(carNumber, command);
        } else if (command === "OUT") {
            parkingList.delete(carNumber);
        }
    });
    // Sort the car numbers in ascending order
    let sortedCarNumbers = Array.from(parkingList).sort((a, b) => a[0].localeCompare(b[0]));
    // If the parking lot is empty
    if (sortedCarNumbers.length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        // Console log all car numbers which are in the parking lot
        sortedCarNumbers.forEach(currentCarNumber => {
            console.log(currentCarNumber[0]);
        });
    }
}

printParkingLot(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);

printParkingLot(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
);