function skiTrip(input) {
    let stayingDaysCount = Number(input[0]);
    let accommodationType = input[1];
    let review = input[2];
    let price = 0;

    switch (accommodationType) {
        case "room for one person":
            price = (stayingDaysCount - 1) * 18.00;
            break;
        case "apartment":
            price = (stayingDaysCount - 1) * 25.00;
            if(stayingDaysCount < 10) {
                price = price * 0.70;
            } else if(stayingDaysCount >= 10 && stayingDaysCount <= 15) {
                price = price * 0.65;
            } else {
                price = price * 0.50;
            }
            break;
        case "president apartment":
            price = (stayingDaysCount - 1) * 35.00;
            if(stayingDaysCount < 10) {
                price = price * 0.90;
            } else if(stayingDaysCount >= 10 && stayingDaysCount <= 15) {
                price = price * 0.85;
            } else {
                price = price * 0.80;
            }
            break;

    }

    if(review === "positive") {
        price = price * 1.25;
    } else {
        price = price * 0.90;
    }

    console.log(`${price.toFixed(2)}`);
}

skiTrip(["12",
"room for one person",
"positive"]);