function weatherForecast(input) {

    let degrees = Number(input[0]);

    if (degrees >= 26.00 && degrees <= 35.00) {
        console.log("Hot");
    } else if (degrees >= 20.1 && degrees <= 25.9) {
        console.log("Warm");
    } else if (degrees >= 15 && degrees <= 20.00) {
        console.log("Mild");
    } else if (degrees >= 12.00 && degrees <= 14.9) {
        console.log("Cool");
    } else if (degrees >= 5 && degrees <= 11.9) {
        console.log("Cold");
    } else {
        console.log("unknown");
    }
}

weatherForecast(["0"])