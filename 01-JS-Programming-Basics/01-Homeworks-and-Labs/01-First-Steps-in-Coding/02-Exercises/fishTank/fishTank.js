function fishTank(input) {

    let lenghtInCentimeters = Number(input[0]);
    let widthInCentimeters = Number(input[1]);
    let heightInCentimeters = Number(input[2]);
    let percent = Number(input[3]);

    let tankVolume = lenghtInCentimeters * widthInCentimeters * heightInCentimeters;
    let volumeInLiter = tankVolume * 0.001;
    let neededWater = volumeInLiter * (1 - percent / 100);

    console.log(neededWater);

}

fishTank(["105 ",
"77 ",
"89 ",
"18.5 "]
)