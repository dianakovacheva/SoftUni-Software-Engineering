function oscarsCeremony(input) {
    let rentCost = Number(input[0]);
    let statuettesPrice = rentCost * 0.70;
    let cateringCost = statuettesPrice * 0.85;
    let soundCost = cateringCost / 2;
    let totalCost = rentCost + statuettesPrice + cateringCost + soundCost;

    console.log(totalCost.toFixed(2));
}

oscarsCeremony(["5555"])