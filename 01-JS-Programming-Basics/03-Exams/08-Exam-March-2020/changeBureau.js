function changeBureau(input) {
    let oneBitcoin = 1168;
    let oneChineseYuan = 0.15;
    let oneDollar = 1.76;
    let oneEUR = 1.95;

    let bitcoinCoinsCount = Number(input[0]);
    let chineseYuanCoinsCount = Number(input[1]);
    let commision = Number(input[2]);

    let bitcoinValueinLV = bitcoinCoinsCount * oneBitcoin;
    let chinesYuantoDollars = chineseYuanCoinsCount * oneChineseYuan;
    let dollarsValue = chinesYuantoDollars * oneDollar;
    let totalValueInLV = bitcoinValueinLV + dollarsValue;
    let lvToEUR = totalValueInLV / oneEUR;

    let commisionToPay = commision / 100 * lvToEUR;
    let totalChangedMoney = (lvToEUR - commisionToPay).toFixed(2);

    console.log(totalChangedMoney);
}

changeBureau(["7",
    "50200.12",
    "3"])


