function vacation(numOfPeople, groupType, day) {

    let singlePricePerPerson = 0;

    switch (groupType) {
        case "Students":
            switch (day) {
                case "Friday":
                    singlePricePerPerson = 8.45;
                    break;
                case "Saturday":
                    singlePricePerPerson = 9.80;
                    break;
                case "Sunday":
                    singlePricePerPerson = 10.46;
                    break;
            }
            break;
        case "Business":
            switch (day) {
                case "Friday":
                    singlePricePerPerson = 10.90;
                    break;
                case "Saturday":
                    singlePricePerPerson = 15.60;
                    break;
                case "Sunday":
                    singlePricePerPerson = 16.00;
                    break;
            }
            break;
        case "Regular":
            switch (day) {
                case "Friday":
                    singlePricePerPerson = 15.00;
                    break;
                case "Saturday":
                    singlePricePerPerson = 20.00;
                    break;
                case "Sunday":
                    singlePricePerPerson = 22.50;
                    break;
            }
            break;
    }

    let totalPrice = numOfPeople * singlePricePerPerson;

    if (groupType === "Students" && numOfPeople >= 30) {
        totalPrice *= 0.85;
    } else if (groupType === "Business" && numOfPeople >= 100) {
        totalPrice = (numOfPeople - 10) * singlePricePerPerson;
    } else if (groupType === "Regular" && numOfPeople >= 10 && numOfPeople <= 20) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(100, "Regular", "Saturday");