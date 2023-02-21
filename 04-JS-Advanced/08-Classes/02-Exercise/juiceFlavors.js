function juiceFlavors(array) {
    const juices = {};
    const bottles = {};
    for (const currentRow of array) {
        let [fruit, quantity] = currentRow.split(' => ');
        let currentData = {};
        if (!Object.values(juices)
            .map((x) => x.fruit)
            .includes(fruit)) {
            currentData = {
                fruit,
                quatity: Number(quantity),
            };
            juices[fruit] = currentData;
        } else {
            currentData = juices[fruit];
            currentData.quatity += Number(quantity);
        }
        let currentBottles = 0;
        while (currentData.quatity >= 1000) {
            currentBottles++;
            currentData.quatity -= 1000;
        }
        if (!Object.values(bottles).map((x) => x.fruit).includes(fruit) && currentBottles !== 0) {
            currentData = {
                fruit,
                bottles: currentBottles,
            };
            bottles[fruit] = currentData;
        } else if (Object.values(bottles)
            .map((x) => x.fruit)
            .includes(fruit)) {
            currentData = bottles[fruit];
            currentData.bottles += currentBottles;
        }
    }
    for (const juice of Object.entries(bottles)) {
        console.log(`${juice[0]} => ${juice[1].bottles}`);
    }
}

juiceFlavors([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);
juiceFlavors([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);