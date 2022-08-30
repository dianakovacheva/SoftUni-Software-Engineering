function birthdayParty(a) {
    let rent = Number(a);
    let cakePrice = rent * 0.20;
    let drinksPrice = cakePrice * 0.55;
    let animatorPrice = rent * 1 / 3;

    let totalExpences = rent + cakePrice + drinksPrice + animatorPrice;

    console.log(totalExpences);
}

birthdayParty(3720)