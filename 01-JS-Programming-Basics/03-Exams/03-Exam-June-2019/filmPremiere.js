function filmPremiere(input) {
    let movieName = input[0];
    let moviePackage = input[1];
    let ticketsCount = Number(input[2]);
    let price = 0;

    switch (movieName) {
        case "John Wick":
            switch (moviePackage) {
                case "Drink":
                    price = 12.00;
                    break;
                case "Popcorn":
                    price = 15.00;
                    break;
                case "Menu":
                    price = 19.00;
                    break;
            }
            break;
        case "Star Wars":
            switch (moviePackage) {
                case "Drink":
                    price = 18.00;
                    break;
                case "Popcorn":
                    price = 25.00;
                    break;
                case "Menu":
                    price = 30.00;
                    break;
            }
            break;
        case "Jumanji":
            switch (moviePackage) {
                case "Drink":
                    price = 9.00;
                    break;
                case "Popcorn":
                    price = 11.00;
                    break;
                case "Menu":
                    price = 14.00;
                    break;
            }
            break;
    }

    let totalBill = ticketsCount * price;

    if (movieName === "Star Wars" && ticketsCount >= 4) {
        totalBill = totalBill * 0.70;
    } else if (movieName === "Jumanji" && ticketsCount === 2) {
        totalBill = totalBill * 0.85;
    }

    console.log(`Your bill is ${totalBill.toFixed(2)} leva.`);
}

filmPremiere(["Star Wars",
    "Popcorn",
    "4"])