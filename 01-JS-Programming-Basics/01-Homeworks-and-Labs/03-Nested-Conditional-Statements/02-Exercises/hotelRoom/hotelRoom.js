function hotelRoom(input) {
    let month = input[0];
    let nightsCount = Number(input[1]);
    let studioNightPrice = 0;
    let apartmentNightPrice = 0;

    switch (month) {
        case "May":
        case "October":
            studioNightPrice = 50.00;
            apartmentNightPrice = 65.00;

            if (nightsCount > 7 && nightsCount <= 14) {
                studioNightPrice = studioNightPrice * 0.95;
            } else if (nightsCount > 14) {
                studioNightPrice = studioNightPrice * 0.70;
            }
            break;
        case "June":
        case "September":
            studioNightPrice = 75.20;
            apartmentNightPrice = 68.70;

            if (nightsCount > 14) {
                studioNightPrice = studioNightPrice * 0.80;
            }
            break;
        case "July":
        case "August":
            studioNightPrice = 76.00;
            apartmentNightPrice = 77.00;
            break;
    }

    if (nightsCount > 14) {
        apartmentNightPrice = apartmentNightPrice * 0.90;
    }

    let totalCostsApartment = Math.abs(nightsCount * apartmentNightPrice);
    let totalCostsStudio = Math.abs(nightsCount * studioNightPrice);

    console.log(`Apartment: ${totalCostsApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${totalCostsStudio.toFixed(2)} lv.`);
}

hotelRoom(["August",
"20"])

