function easterParty(input) {
    let guestCount = Number(input[0]);
    let expencesPerGuest = Number(input[1]);
    let budget = Number(input[2]);

    if (guestCount >= 10 && guestCount <= 15) {
        expencesPerGuest *= 0.85;
    } else if (guestCount > 15 && guestCount <= 20) {
        expencesPerGuest *= 0.80;
    } else if (guestCount > 20) {
        expencesPerGuest *= 0.75;
    }

    let cakePrice = budget * 0.10;

    let totalExpences = guestCount * expencesPerGuest + cakePrice;
    let diff = Math.abs(budget - totalExpences);

    if (budget >= totalExpences) {
        console.log(`It is party time! ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`No party! ${diff.toFixed(2)} leva needed.`);
    }
}

easterParty(["8",
    "25",
    "340"])

