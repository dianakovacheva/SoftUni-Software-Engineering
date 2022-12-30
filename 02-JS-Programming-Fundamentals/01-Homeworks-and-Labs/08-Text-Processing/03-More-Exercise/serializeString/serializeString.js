function serializeString(arr) {

    let string = arr[0].split('');
    let uniqueChars = string.filter((value, index, array) => array.indexOf(value) === index);
    let resultObj = {};

    for (let i = 0; i < uniqueChars.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (uniqueChars[i] === string[j]) {
                if (!resultObj.hasOwnProperty(uniqueChars[i])) {
                    resultObj[uniqueChars[i]] = [];
                }
                resultObj[uniqueChars[i]].push(j);
            }
        }
    }
    for (const key in resultObj) {
        console.log(`${key}:${resultObj[key].join('/')}`);
    }
}

serializeString(["avjavamsdmcalsdm"]);