function petShop(foodPackagesCount) {
    
    const DOGFOODPRICE = 2.5;
    const CATFOODPRICE = 4;

    let numDogFoodPackages = Number(foodPackagesCount[0]);
    let numCatFoodPackages = Number(foodPackagesCount[1]);

    let totalFoodCosts = Number(numDogFoodPackages * DOGFOODPRICE + numCatFoodPackages * CATFOODPRICE);

    console.log(totalFoodCosts + " lv.");
}

petShop([13, 9]);

