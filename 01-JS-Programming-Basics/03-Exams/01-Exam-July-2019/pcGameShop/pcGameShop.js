function pcGameShop(input) {
    let soldGamesCount = Number(input[0]);
    let soldHearthstoneCount = 0;
    let soldForniteCount = 0;
    let soldOverwatchCount = 0;
    let soldOthersCount = 0;

    for (let i = 1; i < input.length; i++) {
        let gameName = input[i];

        if (gameName === "Hearthstone") {
            soldHearthstoneCount++;
        } else if (gameName === "Fornite") {
            soldForniteCount++;
        } else if (gameName === "Overwatch") {
            soldOverwatchCount++;
        } else {
            soldOthersCount++;
        }

    }
    let percentageSoldHearthstone = soldHearthstoneCount / soldGamesCount * 100;
    let percentageSoldFornite = soldForniteCount / soldGamesCount * 100;
    let percentageSoldOverwatch = soldOverwatchCount / soldGamesCount * 100;
    let percentageSoldOthers = soldOthersCount / soldGamesCount * 100;

    console.log(`Hearthstone - ${percentageSoldHearthstone.toFixed(2)}%`);
    console.log(`Fornite - ${percentageSoldFornite.toFixed(2)}%`);
    console.log(`Overwatch - ${percentageSoldOverwatch.toFixed(2)}%`);
    console.log(`Others - ${percentageSoldOthers.toFixed(2)}%`);
    
}

pcGameShop(["3","Hearthstone","Diablo 2","Star Craft 2"])