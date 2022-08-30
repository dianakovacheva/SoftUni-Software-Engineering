function godzillaVsKong(input) {

    let budget = Number(input[0]);
    let statistCount = Number(input[1]);
    let clothingPrice = Number(input[2]);

    let decor = budget * 0.10;

    if (statistCount > 150) {
        clothingPrice = clothingPrice * 0.90;
    }


    let costs = clothingPrice * statistCount + decor;
    let differents = Math.abs(budget - costs);

    if (costs > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${differents.toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${differents.toFixed(2)} leva left.`);
    }

}

godzillaVsKong(["20000",
"120",
"55.5"]);