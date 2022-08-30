function footballSouvenirs(input) {
    let country = input[0];
    let souvenirType = input[1];
    let boughtSouvenirCount = Number(input[2]);
    let price = 0;

    switch (country) {
        case "Argentina":
            switch (souvenirType) {
                case "flags":
                    price = 3.25;
                    break;
                case "caps":
                    price = 7.20;
                    break;
                case "posters":
                    price = 5.10;
                    break;
                case "stickers":
                    price = 1.25;
                    break;
            }
            break;
        case "Brazil":
            switch (souvenirType) {
                case "flags":
                    price = 4.20;
                    break;
                case "caps":
                    price = 8.50;
                    break;
                case "posters":
                    price = 5.35;
                    break;
                case "stickers":
                    price = 1.20;
                    break;
            }
            break;
        case "Croatia":
            switch (souvenirType) {
                case "flags":
                    price = 2.75;
                    break;
                case "caps":
                    price = 6.90;
                    break;
                case "posters":
                    price = 4.95;
                    break;
                case "stickers":
                    price = 1.10;
                    break;
            }
            break;
        case "Denmark":
            switch (souvenirType) {
                case "flags":
                    price = 3.10;
                    break;
                case "caps":
                    price = 6.50;
                    break;
                case "posters":
                    price = 4.80;
                    break;
                case "stickers":
                    price = 0.90;
                    break;
            }
            break;
    }

    let totalExpences = boughtSouvenirCount * price;

    if (country !== "Argentina" && country !== "Brazil" && country !== "Croatia" && country !== "Denmark") {
        console.log("Invalid country!");
    } else if (souvenirType !== "flags" && souvenirType !== "caps" && souvenirType !== "posters" && souvenirType !== "stickers") {
        console.log("Invalid stock!");
    } else {
        console.log(`Pepi bought ${boughtSouvenirCount} ${souvenirType} of ${country} for ${totalExpences.toFixed(2)} lv.`);
    }
}

footballSouvenirs(["USA",
    "slamka",
    "18"])

