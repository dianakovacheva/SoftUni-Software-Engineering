function sortAnArrayBy2Criteria(arrayOfStrings) {

    let ascendingOrder = arrayOfStrings.sort((a, b) => a.length - b.length || a.localeCompare(b));

    // ascendingOrder.forEach(element => {
    //     console.log(element);
    // });

    for (let element of ascendingOrder) {
        console.log(element);
    }
}

sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);