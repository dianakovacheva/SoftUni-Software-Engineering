function fruitMarket(a,b,c,d,e) {
    let strawberryPrice = Number(a);
    let bananasCountInKilogram = Number(b);
    let orangesCountInKilogram = Number(c);
    let raspberryCountInKilogram = Number(d);
    let strawberryCountInKilogram = Number(e);

    let raspberryPrice = strawberryPrice / 2;
    let orangesPrice = raspberryPrice * 0.60;
    let bananasPrice = raspberryPrice * 0.20;

    let sumStrawberry = strawberryCountInKilogram * strawberryPrice;
    let sumBananas = bananasCountInKilogram * bananasPrice;
    let sumOranges = orangesCountInKilogram * orangesPrice;
    let sumRaspberry = raspberryCountInKilogram * raspberryPrice;

    let totalSum = sumStrawberry + sumBananas + sumOranges + sumRaspberry;

    console.log(totalSum.toFixed(2));
}

fruitMarket("63.5","3.57","6.35","8.15","2.5")