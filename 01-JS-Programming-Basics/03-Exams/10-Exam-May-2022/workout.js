function workout(input) {
    let daysCount = Number(input[0]);
    let dayKilometersCount = Number(input[1]);
    let targetKilometers = 1000;
    let ranKilometers = dayKilometersCount;

    for (let i = 2; i < input.length; i++) {
        dayKilometersCount *= (1 + Number(input[i]) / 100);
        ranKilometers += dayKilometersCount;

    }

    let diff = Math.abs(targetKilometers - ranKilometers);

    if (ranKilometers >= targetKilometers) {
        console.log(`You've done a great job running ${Math.ceil(diff)} more kilometers!`);
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(diff)} more kilometers`);
    }
}

workout(["4",
"100",
"30",
"50",
"60",
"80"])
