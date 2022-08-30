function cinemaTicket(input) {

    let day = input[0];
    let price;

    /*
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Friday":
                price = 12;
                console.log(price);
                break;
            case "Wednesday":
            case "Thursday":
                price = 14;
                console.log(price);
                break;
            default:
                price = 16;
                console.log(price);
                break;
        }
    
    */

    if (day === "Monday" || day === "Tuesday" || day === "Friday") {
        price = 12;
    } else if (day === "Wednesday" || day === "Thursday") {
        price = 14;
    } else if (day === "Saturday" || day === "Sunday") {
        price = 16;
    }

    console.log(price);
}

cinemaTicket(["Sunday"]);