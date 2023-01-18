function pieceOfPie(flavorsArr, firstTargetFlavor, secondTargetFlavor) {
    let resultArr = [];
    if (flavorsArr.includes(firstTargetFlavor) && flavorsArr.includes(secondTargetFlavor)) {
        const startIndex = flavorsArr.indexOf(firstTargetFlavor);
        const endIndex = flavorsArr.indexOf(secondTargetFlavor);
        resultArr = flavorsArr.slice(startIndex, endIndex + 1);
    }
    return resultArr;
}

pieceOfPie([
    'Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
);
console.log('---------------');
pieceOfPie([
    'Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
);