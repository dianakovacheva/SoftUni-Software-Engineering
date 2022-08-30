function easterTrip(input) {
    let destination = input[0];
    let dateOption = input[1];
    let nightsCount = Number(input[2]);
    let pricePerNight = 0;

    switch (destination) {
        case "France":
            switch (dateOption) {
                case "21-23":
                    pricePerNight = 30.00;
                    break;
                case "24-27":
                    pricePerNight = 35.00;
                    break
                case "28-31":
                    pricePerNight = 40.00;
                    break
            }
            break;
        case "Italy":
            switch (dateOption) {
                case "21-23":
                    pricePerNight = 28.00;
                    break;
                case "24-27":
                    pricePerNight = 32.00;
                    break
                case "28-31":
                    pricePerNight = 39.00;
                    break
            }
            break;
        case "Germany":
            switch (dateOption) {
                case "21-23":
                    pricePerNight = 32.00;
                    break;
                case "24-27":
                    pricePerNight = 37.00;
                    break
                case "28-31":
                    pricePerNight = 43.00;
                    break
            }
            break;
    }

    let totalExpences = nightsCount * pricePerNight;
    console.log(`Easter trip to ${destination} : ${totalExpences.toFixed(2)} leva.`);
}

easterTrip(["France",
    "28-31",
    "8"])


