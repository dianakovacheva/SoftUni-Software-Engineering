function club(input) {
    let targetIncome = Number(input[0]);
    let totalIncome = 0;

    for (let i = 1; i <= input.length; i += 2) {
        if (input[i] === "Party!") {
            console.log(`We need ${(targetIncome - totalIncome).toFixed(2)} leva more.`);
            break;
        }

        let cocktailName = input[i];
        let cocktailCount = input[i + 1];
        let cocktailPrice = cocktailName.length;
        let totalPrice = cocktailCount * cocktailPrice;

        if (totalPrice % 2 !== 0) {
            totalPrice *= 0.75;
        }

        totalIncome += totalPrice;

        if (totalIncome >= targetIncome) {
            console.log("Target acquired.");
            break;
        }
    }
    console.log(`Club income - ${totalIncome.toFixed(2)} leva.`);
}

club(["500","Bellini","6","Bamboo","7","Party!"])