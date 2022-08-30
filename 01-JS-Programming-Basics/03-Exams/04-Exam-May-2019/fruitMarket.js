function fruitMarket(input) {

    let strawberryPrice = Number(input[0]);
    let bananasQuantity = Number(input[1]);
    let orangesQuantity = Number(input[2]);
    let raspberryQuantity = Number(input[3]);
    let strawberryQuantity = Number(input[4]);

    let raspberryPrice = strawberryPrice / 2;
    let orangesPrice = raspberryPrice * 0.60;
    let bananasPrice = raspberryPrice * 0.20;

    let total = strawberryPrice * strawberryQuantity + bananasPrice * bananasQuantity +
        orangesPrice * orangesQuantity + raspberryPrice * raspberryQuantity;

    console.log(total.toFixed(2));
}

fruitMarket(["63.5",
    "3.57",
    "6.35",
    "8.15",
    "2.5"
])