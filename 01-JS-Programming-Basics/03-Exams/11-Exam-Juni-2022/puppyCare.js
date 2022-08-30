function puppyCare(input) {
    let boughtDogFoodInKg = Number(input[0] * 1000);
    let eatedDogFoodInGr = 0;

    for (let i = 1; i < input.length; i++) {
        if (input[i] === "Adopted") {
            break;
        }

        let currentEatenDogFood = Number(input[i]);
        eatedDogFoodInGr += currentEatenDogFood;
    }

    let diff = Math.abs(boughtDogFoodInKg - eatedDogFoodInGr);

    if (boughtDogFoodInKg >= eatedDogFoodInGr) {
        console.log(`Food is enough! Leftovers: ${diff} grams.`);
    } else {
        console.log(`Food is not enough. You need ${diff} grams more.`);
    }
}

puppyCare(["2",
    "999",
    "456",
    "999",
    "999",
    "123",
    "456",
    "Adopted"])

