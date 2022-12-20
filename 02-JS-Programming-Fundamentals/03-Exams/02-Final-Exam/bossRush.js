function bossRush(arr) {
    let number = Number(arr.shift());
    let pattern = /\|(?<name>[A-Z]{4,})\|:#(?<title>[A-Za-z]+\s[A-Za-z]+)#/g;
    for (let i = 0; i < number; i++) {
        let currentLine = arr[i];
        let patternResult = currentLine.matchAll(pattern);
        if (currentLine.match(pattern)) {
            for (const match of patternResult) {
                let bossName = match.groups.name;
                let title = match.groups.title;
                let strength = bossName.length;
                let armor = title.length;
                console.log(`${bossName}, The ${title}`);
                console.log(`>> Strength: ${strength}`);
                console.log(`>> Armor: ${armor}`);
            }
        } else {
            console.log('Access denied!');
        }
    }
}

bossRush(['3',
'|STEFAN|:#H1gh Overseer#',
'|IVAN|:#Master detective#',
'|KARL|: #Marketing lead#'])
;