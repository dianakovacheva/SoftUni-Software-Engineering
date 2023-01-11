function piccolo(arr) {
    let carsArr = [];

    for (let i = 0; i < arr.length; i++) {
        let currentCar = arr[i].split(', ');
        let direction = currentCar[0];
        let carNumber = currentCar[1];
        switch (direction) {
            case "IN":
                if (direction === "IN") {
                    carsArr.push(carNumber)
                }
                break;
            case "OUT":
                if (direction === "OUT") {
                    let index = carsArr.indexOf(carNumber);
                    carsArr.splice(index, 1);
                }
                break;
        }
    }

    let sortedCarNumbers = carsArr.sort((a, b) => a.localeCompare(b));

    if (sortedCarNumbers.length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        sortedCarNumbers.forEach(currentCarNumber => {
            console.log(currentCarNumber);
        });
    }
}

piccolo(['IN, CA2844AA',
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