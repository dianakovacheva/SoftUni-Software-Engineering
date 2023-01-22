function townsToJSON(arr) {
    let townsArr = [];
    const initialArr = arr.slice(1);
    for (const info of initialArr) {
        const currentInfo = info.split('|').filter(x => x);
        let [townName, townLatitude, townLongitude] = currentInfo;
        // Latitude and Longitude must be parsed to numbers, and represented till the second digit after the decimal point
        townLatitude = Number(Number(townLatitude).toFixed(2));
        townLongitude = Number(Number(townLongitude).toFixed(2));
        const townsObj = {
            Town: townName.trim(),
            Latitude: townLatitude,
            Longitude: townLongitude,
        };
        townsArr.push(townsObj);
    }
    // The output should be an array of objects wrapped in JSON.stringify()
    const jsonResult = JSON.stringify(townsArr);
    console.log(jsonResult);
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);
townsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
);