function inventory(arr) {

    let herosList = [];

    arr.forEach(currentRow => {
        let [heroName, heroLevel, items] = currentRow.split(' / ');

        let currentHero = {
            name: heroName,
            level: Number(heroLevel),
            items: items,
        };

        herosList.push(currentHero);
    });

    herosList.sort((a, b) => a.level - b.level);

    for (let currentHero of herosList) {
        console.log(`Hero: ${currentHero.name}`);
        console.log(`level => ${currentHero.level}`);
        console.log(`items => ${currentHero.items}`);
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    );