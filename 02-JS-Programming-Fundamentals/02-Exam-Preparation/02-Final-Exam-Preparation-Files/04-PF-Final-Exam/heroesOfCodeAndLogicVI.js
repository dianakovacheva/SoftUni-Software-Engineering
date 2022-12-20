function heroesOfCodeAndLogicVI(arr) {
    let numHeros = Number(arr.shift());
    let currentLine = arr.shift();
    let aliveHerosObject = {};
    let maxHP = 100;
    let maxMP = 200;
    // Take all heros
    for (let i = 0; i < numHeros; i++) {
        const currentHeroInfo = currentLine.split(' ');
        const herosName = currentHeroInfo[0];
        const herosHP = Number(currentHeroInfo[1]);
        const herosMP = Number(currentHeroInfo[2]);
        // Set all heros to the object 'aliveHerosObject'
        aliveHerosObject[herosName] = { herosHP, herosMP };
        currentLine = arr.shift();
    }

    while (currentLine !== 'End') {
        let splittedCurrentLine = currentLine.split(' - ');
        let command = splittedCurrentLine[0];
        let heroName = splittedCurrentLine[1];
        switch (command) {
            case "CastSpell":
                let neededMP = Number(splittedCurrentLine[2]);
                let spellName = splittedCurrentLine[3];
                if (aliveHerosObject.hasOwnProperty(heroName)) {
                    if (neededMP <= aliveHerosObject[heroName].herosMP) {
                        aliveHerosObject[heroName].herosMP -= neededMP;
                        console.log(`${heroName} has successfully cast ${spellName} and now has ${aliveHerosObject[heroName].herosMP} MP!`);
                    } else {
                        console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
                    }
                }
                break;
            case "TakeDamage":
                let damage = Number(splittedCurrentLine[2]);
                let attacker = splittedCurrentLine[3];
                aliveHerosObject[heroName].herosHP -= damage;
                if (aliveHerosObject[heroName].herosHP <= 0) {
                    console.log(`${heroName} has been killed by ${attacker}!`);
                    delete aliveHerosObject[heroName];
                } else {
                    console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${aliveHerosObject[heroName].herosHP} HP left!`);
                }
                break;
            case "Recharge":
                let amount = Number(splittedCurrentLine[2]);
                if (aliveHerosObject[heroName].herosMP + amount > maxMP) {
                    let receivedAmountRecovery = maxMP - aliveHerosObject[heroName].herosMP;
                    aliveHerosObject[heroName].herosMP = maxMP;
                    console.log(`${heroName} recharged for ${receivedAmountRecovery} MP!`);
                } else {
                    aliveHerosObject[heroName].herosMP += amount;
                    console.log(`${heroName} recharged for ${amount} MP!`);
                }
                break;
            case "Heal":
                let amountHPToIncrease = Number(splittedCurrentLine[2]);
                if (aliveHerosObject[heroName].herosHP + amountHPToIncrease > maxHP) {
                    let receivedAmountHP = maxHP - aliveHerosObject[heroName].herosHP;
                    aliveHerosObject[heroName].herosHP = maxHP;
                    console.log(`${heroName} healed for ${receivedAmountHP} HP!`);
                } else {
                    aliveHerosObject[heroName].herosHP += amountHPToIncrease;
                    console.log(`${heroName} healed for ${amountHPToIncrease} HP!`);
                }
                break;
        }
        currentLine = arr.shift();
    }

    for (const key in aliveHerosObject) {
        console.log(`${key}\n  HP: ${aliveHerosObject[key].herosHP}\n  MP: ${aliveHerosObject[key].herosMP}`);
    }
}

heroesOfCodeAndLogicVI([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]);

console.log('----------------------------');

heroesOfCodeAndLogicVI([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
]);