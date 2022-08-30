function touristShop(input) {
    let budget = Number(input[0]);
    let productsCount = 0;
    let totalPrice = 0;
    let productPrice;

    for (let i = 1; i < input.length; i += 2) {
        if (input[i] === "Stop") {
            break;
        }
        let productName = input[i];
        productsCount++;
        productPrice = Number(input[i + 1]);

        if (productsCount % 3 === 0) {
            productPrice = productPrice / 2;
        }
        totalPrice += productPrice;
        budget -= productPrice;
    }

    if (productPrice > budget) {
        console.log("You don't have enough money!");
        console.log(`You need ${Math.abs(budget).toFixed(2)} leva!`);
    } else {
        console.log(`You bought ${productsCount} products for ${totalPrice.toFixed(2)} leva.`);
    }
}

touristShop(["54",
"Thermal underwear",
"24",
"Sunscreen",
"45"])

