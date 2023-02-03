function argumentInfo() {
    const argumentsArray = Array.from(arguments);
    const counterObj = {};
    argumentsArray.forEach(argument => {
        // find out the type of the argument
        const typeofArg = typeof argument;
        // print each argument description on a new line
        console.log(`${typeofArg}: ${argument}`);
        // check if the type of the argument already exists in the counterObj
        if (!counterObj[typeofArg]) {
            counterObj[typeofArg] = 0;
        }
        counterObj[typeofArg]++;
    });
    // print a tally with counts for each type in descending order, each on a new line
    let objEnties = Object.entries(counterObj).sort((a, b) => b[1] - a[1]);
    objEnties.forEach(entrie => {
        const [type, count] = entrie;
        console.log(`${type} = ${count}`);
    });
}

// argumentInfo('cat', 42, 54, 56, function () { console.log('Hello world!'); });
argumentInfo({ name: 'bob' }, 3.333, 9.999);