function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let brokenHelmetCount = 0;
    let brokenSwordCount = 0;
    let brokenShieldCount = 0;
    let brokenArmorCount = 0;


    for (let currentFight = 1; currentFight <= lostFightsCount; currentFight++) {

        if (currentFight % 2 === 0) {
            brokenHelmetCount++;
        }
        if (currentFight % 3 === 0) {
            brokenSwordCount++;
        }

        if (currentFight % 6 === 0) {
            brokenShieldCount++;
            if (brokenShieldCount % 2 === 0) {
                brokenArmorCount++;
            }
        }
    }

    let totalExpences = (brokenHelmetCount * helmetPrice + brokenSwordCount * swordPrice
        + brokenShieldCount * shieldPrice + brokenArmorCount * armorPrice);

    console.log(`Gladiator expenses: ${totalExpences.toFixed(2)} aureus`);
}

gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
);