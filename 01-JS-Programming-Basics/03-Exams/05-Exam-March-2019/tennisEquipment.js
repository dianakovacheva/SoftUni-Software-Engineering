function tennisEquipment(input) {
    let racketPrice = Number(input[0]);
    let racketsCount = Number(input[1]);
    let sneakersCount = Number(input[2]);
    let sneakersPrice = 1 / 6 * racketPrice;
    let totalRacketExpences = racketsCount * racketPrice;
    let totalSneaketsExpences = sneakersCount * sneakersPrice;
    let otherEquipmentExpences = (totalRacketExpences + totalSneaketsExpences) * 0.20;
    let totalExpences = totalRacketExpences + totalSneaketsExpences + otherEquipmentExpences;
    let priceToBePaidByDjokovic = 1 / 8 * totalExpences;
    let priceToBePaidBySponsors = 7 / 8 * totalExpences;

    console.log(`Price to be paid by Djokovic ${Math.floor(priceToBePaidByDjokovic)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(priceToBePaidBySponsors)}`);
}

tennisEquipment(["386", "7", "4",])