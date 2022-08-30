function backToThePast(input) {
    let money = Number(input[0]);
    let yearToLive = Number(input[1]);
    let age = 18;
    let wantedYear = 1800;
    let spendMoney = 0;

    for (let i = wantedYear; i <= yearToLive; i++) {
        let currentYear = i;
        if (currentYear % 2 === 0) {
            spendMoney += 12000;
        } else {
            spendMoney += 12000 + (50 * age);
        }
        age++;
    }

    let diff = Math.abs(money - spendMoney);

    if (money >= spendMoney) {
        console.log(`Yes! He will live a carefree life and will have ${Math.abs(diff).toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${Math.abs(diff).toFixed(2)} dollars to survive.`);
    }
}

backToThePast(["100000.15", "1808"]);