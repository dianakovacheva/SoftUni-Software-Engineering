function celsiusToFahrenheit(input) {
    let degreeInCelsius = Number(input[0]);
    let degreeToFahrenheit = degreeInCelsius * 9 / 5 + 32;

    console.log(degreeToFahrenheit.toFixed(2));
}

celsiusToFahrenheit(["32.3"])