function vetParking(input) {
    let daysCount = Number(input[0]);
    let hoursCountEachDay = Number(input[1]);
    let parkingPricePerHour = 0;
    let totalExpencesEachDay = 0;
    let totalExpences = 0;

    for (let i = 1; i <= daysCount; i++) {
        totalExpencesEachDay = 0;
        for (let j = 1; j <= hoursCountEachDay; j++) {
            if (i % 2 === 0 && j % 2 !== 0) {
                parkingPricePerHour = 2.50;
            } else if (i % 2 !== 0 && j % 2 === 0) {
                parkingPricePerHour = 1.25;
            } else {
                parkingPricePerHour = 1.00;
            }
            totalExpencesEachDay += parkingPricePerHour;
        }
        console.log(`Day: ${i} - ${totalExpencesEachDay.toFixed(2)} leva`);
        totalExpences += totalExpencesEachDay;
    }
    console.log(`Total: ${totalExpences.toFixed(2)} leva`);
}

vetParking(["5",
    "2"])
