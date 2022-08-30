function careOfPuppy(input) {
    let boughtQuantityDogFood = Number(input[0] * 1000);
    let eatenQuantityDogFood = 0;

    for (let i = 1; i < input.length; i++) {
        if (input[i] === "Adopted") {
            break;
        }
        let currentQuantityEatenFood = Number(input[i]);
        eatenQuantityDogFood += currentQuantityEatenFood;
    }
    let diff = Math.abs(boughtQuantityDogFood - eatenQuantityDogFood);
    if (boughtQuantityDogFood >= eatenQuantityDogFood) {
        console.log(`Food is enough! Leftovers: ${Math.round(diff)} grams.`);
    } else {
        console.log(`Food is not enough. You need ${Math.round(diff)} grams more.`);
    }
}

careOfPuppy(["4",
    "130",
    "345",
    "400",
    "180",
    "230",
    "120",
    "Adopted"])





