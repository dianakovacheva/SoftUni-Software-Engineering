function composeObj(arrayOfStrings) {
    const calorieObj = {};
    for (let i = 0; i < arrayOfStrings.length; i += 2) {
        const productName = arrayOfStrings[i];
        const calories = Number(arrayOfStrings[i + 1]);
        calorieObj[productName] = calories;
    }
    console.log(calorieObj);
}

composeObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
composeObj(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
