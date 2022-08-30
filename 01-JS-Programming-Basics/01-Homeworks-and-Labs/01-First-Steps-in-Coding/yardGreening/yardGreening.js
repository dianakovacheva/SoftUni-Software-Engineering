function yardGreening(input) {
    let numSquareMeters = Number(input[0]);
    const PRICE_SQUAREMETER = 7.61;
    const DISCOUNT_PERCENTAGE = 18;

    let price = numSquareMeters * PRICE_SQUAREMETER;
    let discount = price * (DISCOUNT_PERCENTAGE / 100);
    let finalPrice = price - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening(["550"])