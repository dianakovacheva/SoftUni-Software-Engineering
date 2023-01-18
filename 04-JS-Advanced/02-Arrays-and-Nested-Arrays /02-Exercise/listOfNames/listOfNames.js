function printListOfNames(arr) {
    const sortedArr = arr.sort((a, b) => a.localeCompare(b));
    let counter = 1;
    sortedArr.forEach(element => {
        console.log(`${counter}.${element}`);
        counter++
    });
}

printListOfNames(["John", "Bob", "Christina", "Ema"]);