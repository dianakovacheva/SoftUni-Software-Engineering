function wildZoo(arr) {
    let currentLine = arr.shift();
    let animalsObject = {};
    let areasObject = {};
    while (currentLine !== 'EndDay') {
        let splittedLine = currentLine.split(': ');
        let command = splittedLine[0];
        let animalInfo = splittedLine[1].split('-');
        let animalName = animalInfo[0];
        switch (command) {
            case "Add":
                let neededFood = Number(animalInfo[1]);
                let area = animalInfo[2];
                if (!animalsObject.hasOwnProperty(animalName)) {
                    animalsObject[animalName] = { neededFood, area };
                } else {
                    animalsObject[animalName].neededFood += neededFood;
                }
                break;
            case "Feed":
                let foodQunatity = Number(animalInfo[1]);
                if (animalsObject.hasOwnProperty(animalName)) {
                    animalsObject[animalName].neededFood -= foodQunatity;
                    if (animalsObject[animalName].neededFood <= 0) {
                        delete animalsObject[animalName];
                        console.log(`${animalName} was successfully fed`);
                    }
                }
                break;
        }
        currentLine = arr.shift();
    }
    console.log('Animals:');
    for (const animal in animalsObject) {
        console.log(` ${animal} -> ${animalsObject[animal].neededFood}g`);
    }
    for (const animal in animalsObject) {
        let area = animalsObject[animal].area;
        if (!areasObject.hasOwnProperty(area)) {
            areasObject[area] = 0;
        }
        areasObject[area] += 1;
    }
    console.log('Areas with hungry animals:');
    for (const area in areasObject) {
        console.log(` ${area}: ${areasObject[area]}`);
    }
}

wildZoo(["Add: Bonie-3490-RiverArea",
    "Add: Sam-5430-DeepWoodsArea",
    "Add: Bonie-200-RiverArea",
    "Add: Maya-4560-ByTheCreek",
    "Feed: Maya-2390",
    "Feed: Bonie-3500",
    "Feed: Johny-3400",
    "Feed: Sam-5500",
    "EndDay"])


