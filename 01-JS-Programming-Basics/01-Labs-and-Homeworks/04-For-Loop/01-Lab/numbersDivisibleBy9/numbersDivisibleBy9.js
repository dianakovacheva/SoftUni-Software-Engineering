function numbersDivisibleBy9(input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let sum = 0;
    let temp = "";

    for (let i = startNumber; i <= endNumber; i++) {
        if (i % 9 === 0) {
            temp = temp + i + "\n";
            sum += i;
        }
    }

    console.log(`The sum: ${sum}`);
    console.log(temp);
}

numbersDivisibleBy9(["100", "200"]);