function printTowns(arr) {

    let arrToWorkOn = arr.splice(0);

    while (arrToWorkOn.length > 0) {
        let currentTown = arrToWorkOn.shift().split(" | ")

        let towns = {
            town: currentTown[0],
            latitude: Number(currentTown[1]).toFixed(2),
            longitude: Number(currentTown[2]).toFixed(2),

        }

        console.log(towns);
    }
}


printTowns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);