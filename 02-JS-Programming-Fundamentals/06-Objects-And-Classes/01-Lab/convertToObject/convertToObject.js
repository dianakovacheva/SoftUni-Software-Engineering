function printObject(jsonString) {

    // Convert a JSON formated string in to an object
    let personInfo = JSON.parse(jsonString);

    for (let key of Object.keys(personInfo)) {
        console.log(`${key}: ${personInfo[key]}`);
    }
}

printObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');