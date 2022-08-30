function basketballEquipment(input) {
    let basketballCourseExpences = Number(input[0]);
    let shoesPrice = basketballCourseExpences * 0.60;
    let clothingPrice = shoesPrice * 0.80;
    let ballPrice = 1 / 4 * clothingPrice;
    let accessoriesPrice = 1 / 5 * ballPrice;

    let totalExpences = basketballCourseExpences + shoesPrice
        + clothingPrice + ballPrice + accessoriesPrice;

    console.log(totalExpences.toFixed(2));
}

basketballEquipment(["550"])