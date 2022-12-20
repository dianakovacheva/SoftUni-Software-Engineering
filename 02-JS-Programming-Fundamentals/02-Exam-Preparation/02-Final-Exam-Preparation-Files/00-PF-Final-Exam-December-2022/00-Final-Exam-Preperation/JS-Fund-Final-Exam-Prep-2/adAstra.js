function adAstra(string) {
    let data = string.shift();
    let pattern = /(\||#)(?<itemName>[A-Za-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;
    let patternResult = data.matchAll(pattern);
    let productsArr = [];
    let totalCalories = 0;
    let caloriesNeededEachDay = 2000;
    for (const match of patternResult) {
        let itemName = match.groups.itemName;
        let expirationDate = match.groups.date;
        let calories = Number(match.groups.calories);
        productsArr.push({ itemName, expirationDate, calories });
        totalCalories += calories;
    }
    // Calculate how many days you can last with the food you have
    let daysCount = totalCalories / caloriesNeededEachDay;
    // print the amount of days you will be able to last with the food you have
    console.log(`You have food to last you for: ${Math.trunc(daysCount)} days!`);
    // Print the output for each food item
    productsArr.forEach((product) => {
        console.log(`Item: ${product.itemName}, Best before: ${product.expirationDate}, Nutrition: ${product.calories}`);
    });
}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);