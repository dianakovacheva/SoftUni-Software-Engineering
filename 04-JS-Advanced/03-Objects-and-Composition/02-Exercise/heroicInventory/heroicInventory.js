function createHeroesRegister(arrayOfStrings) {
    // Store the data about every hero
    let heroesArr = [];
    arrayOfStrings.forEach(row => {
        let [name, level, ...rest] = row.split(' / ');
        let items = rest;
        if (items.length !== 0) {
            items = items.join('').split(', ');
        }
        level = Number(level);
        heroesArr.push({
            name,
            level,
            items,
        });
    });
    // The output is a JSON representation of the data for all the stored heroes
    const jsonResult = JSON.stringify(heroesArr);
    console.log(jsonResult);
}

createHeroesRegister([
    'Hes / 1'
]);
createHeroesRegister(['Jake / 1000 / Gauss, HolidayGrenade']);