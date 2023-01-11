function foodDelivery(input) {

    const CHICKEN_MENU_PRICE = 10.35;
    const FISH_MENU_PRICE = 12.40;
    const VEGETERIAN_MENU_PRICE = 8.15;
    const DELIVERY_PRICE = 2.50;

    let chickenMenuCount = Number(input[0]);
    let fishMenuCount = Number(input[1]);
    let vegeterianMenuCount = Number(input[2]);

    let foodCost = chickenMenuCount * CHICKEN_MENU_PRICE + fishMenuCount * FISH_MENU_PRICE + vegeterianMenuCount * VEGETERIAN_MENU_PRICE;
    let dessertPrice = foodCost * 0.2;
    let orderTotal = foodCost + dessertPrice + DELIVERY_PRICE;

    console.log(orderTotal);
}

foodDelivery(["9 ",
"2 ",
"6 "]
);