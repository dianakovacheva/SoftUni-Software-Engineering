function teamAccount(arrayOfStrings) {

    let gameNames = arrayOfStrings.shift();
    let resultArr = gameNames.split(' ');

    for (let i = 0; i < arrayOfStrings.length; i++) {
        let splittedRow = arrayOfStrings[i].split(' ');
        let command = splittedRow[0];

        if (command !== "Play!") {
            switch (command) {
                case "Install":
                    let toInstallGamesName = splittedRow[1];
                    if (!resultArr.includes(toInstallGamesName)) {
                        resultArr.push(toInstallGamesName);
                    }
                    break;
                case "Uninstall":
                    let toUninstallGamesName = splittedRow[1];
                    if (resultArr.includes(toUninstallGamesName)) {
                        let index = resultArr.indexOf(toUninstallGamesName);
                        resultArr.splice(index, 1);
                    }
                    break;
                case "Update":
                    let toUpdateGamesName = splittedRow[1];
                    if (resultArr.includes(toUpdateGamesName)) {
                        let index = resultArr.indexOf(toUpdateGamesName);
                        resultArr.splice(index, 1);
                        resultArr.push(toUpdateGamesName);
                    }
                    break;
                case "Expansion":
                    let splittedCurrentGame = splittedRow[1].split('-');
                    let [gameName, expansion] = splittedCurrentGame;
                    if (resultArr.includes(gameName)) {
                        let index = resultArr.indexOf(gameName);
                        resultArr.splice(index + 1, 0, `${gameName}:${expansion}`);
                    }
                    break;
            }
        }
    }

    console.log(resultArr.join(' '));
}

teamAccount(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']
);