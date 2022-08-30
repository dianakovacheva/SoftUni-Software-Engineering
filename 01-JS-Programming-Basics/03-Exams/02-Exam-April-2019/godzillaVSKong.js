function godzillaVSKong(input) {
    let budget = Number(input[0]);
    let numberOfExtraMan = Number(input[1]);
    let clothingCostForOnePerson = Number(input[2]);

    let decorCost = budget * 0.10;
    let totalClothigCost = numberOfExtraMan * clothingCostForOnePerson;


    if (numberOfExtraMan > 150) {
        totalClothigCost = totalClothigCost * 0.90;
    }

    let totalCost = decorCost + totalClothigCost;

    let diff = Math.abs(budget - totalCost);

    if (totalCost > budget) {

        console.log("Not enough money!");
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }
}

godzillaVSKong(["9587.88",
    "222",
    "55.68"])

