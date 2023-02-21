function solve(array) {
    const brandsObj = {};
    array.forEach(element => {
        const [carBrand, carModel, producedCars] = element.split(' | ');
        if (!brandsObj.hasOwnProperty(carBrand)) {
            brandsObj[carBrand] = {};
        };
        if (!brandsObj[carBrand].hasOwnProperty(carModel)) {
            brandsObj[carBrand][carModel] = 0;
        }
        brandsObj[carBrand][carModel] += Number(producedCars);
    });
    for (const [brand, model] of Object.entries(brandsObj)) {
        console.log(brand);
        for (const key in model) {
            console.log(`###${key} -> ${model[key]}`);
        }
    }
}

solve(
    ['Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10'
    ]);