function theLift(arr) {

    let wagonCapacity = 4;
    let waitingPeopleCount = Number(arr.shift());
    let liftCurrentState = arr.shift().split(' ').map(x => Number(x));


    for (let currentWagon = 0; currentWagon < liftCurrentState.length; currentWagon++) {
        let currentWagonFreeSpace = wagonCapacity - liftCurrentState[currentWagon];

        if (currentWagonFreeSpace > 0) {
            let boardedPeople = Math.min(currentWagonFreeSpace, waitingPeopleCount);
            liftCurrentState[currentWagon] += boardedPeople;
            waitingPeopleCount -= boardedPeople;
        }
    }

    if (liftCurrentState[liftCurrentState.length - 1] < wagonCapacity) {
        console.log("The lift has empty spots!");
    } else if (waitingPeopleCount > 0 && liftCurrentState[liftCurrentState.length - 1] === 4) {
        console.log(`There isn't enough space! ${waitingPeopleCount} people in a queue!`);
    }

    console.log(liftCurrentState.join(' '));
}

theLift([
    "10",
    "0 2 0"
]
);