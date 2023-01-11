function toyShop(input) {

    let holidayPrice = Number(input[0]);
    let puzzelsCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);


    let orderQuantity = puzzelsCount + dollsCount + bearsCount + minionsCount + trucksCount;

    let totalOrderPrice = puzzelsCount * 2.60 + dollsCount * 3
        + bearsCount * 4.10 + minionsCount * 8.20 + trucksCount * 2;


    if (orderQuantity >= 50) {
        totalOrderPrice = totalOrderPrice * 0.75;
    }

    totalOrderPrice = totalOrderPrice * 0.90;

    let restMoney = Math.abs(totalOrderPrice - holidayPrice);


    if (totalOrderPrice >= holidayPrice) {
        console.log(`Yes! ${restMoney.toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${restMoney.toFixed(2)} lv needed.`)
    }
}

toyShop(["320",
"8",
"2",
"5",
"5",
"1"]);