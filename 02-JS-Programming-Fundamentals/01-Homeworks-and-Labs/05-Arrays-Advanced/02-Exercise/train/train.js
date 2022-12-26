function train(array) {

    // The shift() method removes the first element from an array and returns that removed element
    let numberOfPassengers = array.shift().split(' ').map(Number);
    let maxCapacityEachWagon = Number(array.shift());

    // The array without the removed elements
    for (let i = 0; i < array.length; i++) {
        // .split(' ') divides a string into an ordered list of substrings by searching for the pattern, 
        // puts these substrings into an array, and returns the array.
        let currentRow = array[i].split(' ');

        if (currentRow[0] === "Add") {
            let newPassengersToBeAdded = Number(currentRow[1]);
            numberOfPassengers.push(newPassengersToBeAdded);
        } else {
            for (let j = 0; j < numberOfPassengers.length; j++) {
                let currentCountOfPassengers = numberOfPassengers[j];
                let addPassengers = Number(currentRow[0]);

                if (currentCountOfPassengers + addPassengers <= maxCapacityEachWagon) {
                    numberOfPassengers[j] += addPassengers;
                    break;
                }
            }
        }
    }

    console.log(numberOfPassengers.join(' '));
}

train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']
)