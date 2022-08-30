function workingHours(input) {

    let hour = Number(input[0]);
    let day = input[1];

    switch (day) {
        case "Sunday":
            console.log("closed");
            break;
    
        default:
            if (hour >= 10 && hour < 18) {
                console.log("open");
            } else {
                console.log("closed");
            }
            break;
    }

}

workingHours(["11", "Monday"]);

