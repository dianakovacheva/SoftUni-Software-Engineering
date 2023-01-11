function convertor(money) {

    const EXCHANGE_RATES = 1.79549;
    let usd = Number(money[0]);
    let bgn = usd * EXCHANGE_RATES;

    console.log(bgn);
}

convertor(["12.5"]);