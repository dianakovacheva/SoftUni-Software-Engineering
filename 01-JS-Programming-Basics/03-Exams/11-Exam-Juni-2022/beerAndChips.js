function beerAndChips(input) {

    let name = input[0];
    let budget = Number(input[1]);
    let beerCount = Number(input[2]);
    let chipsCount = Number(input[3]);

    let beerPrice = 1.20;
    let totalBeerExpences = beerCount * beerPrice;
    let totalChipsExpences = Math.ceil((0.45 * totalBeerExpences) * chipsCount);
    let totalExpences = totalBeerExpences + totalChipsExpences;

    let diff = Math.abs(budget - totalExpences);

    if(budget >= totalExpences) {
        console.log(`${name} bought a snack and has ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`${name} needs ${diff.toFixed(2)} more leva!`);
    }

}

beerAndChips(["Valentin",
"5",
"2",
"4"])

