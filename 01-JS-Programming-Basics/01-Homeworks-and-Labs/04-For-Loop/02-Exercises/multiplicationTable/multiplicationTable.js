function multiplicationTable(input) {

    let myNumber = Number(input[0]);

    for (let i = 1; i <= 10; i++) {

        let sum = i * myNumber;
        console.log(`${i} * ${myNumber} = ${sum}`);

    }
}

multiplicationTable(["5"]);