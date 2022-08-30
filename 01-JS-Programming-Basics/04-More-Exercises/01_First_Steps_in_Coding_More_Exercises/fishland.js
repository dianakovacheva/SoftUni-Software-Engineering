function fishland(input) {
    let skumriaPriceProKG = Number(input[0]);
    let cacaPriceProKG = Number(input[1]);
    let palamudQuantityInKG = Number(input[2]);
    let safridQuantityInKG = Number(input[3]);
    let shellsQuantityInKG = Number(input[4]);
    let palamutPriceProKG = skumriaPriceProKG * 1.60;
    let safridPriceProKG = cacaPriceProKG * 1.80;
    let shellsPriceProKG = 7.50;

    let totalExpences = palamudQuantityInKG * palamutPriceProKG + safridQuantityInKG * safridPriceProKG + shellsQuantityInKG * shellsPriceProKG;
    console.log(totalExpences.toFixed(2));
}

fishland(["7.79", "5.35", "9.3", "0", "0"])