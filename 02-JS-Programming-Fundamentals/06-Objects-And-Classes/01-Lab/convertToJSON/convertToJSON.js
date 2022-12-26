function convertToJSON(firstName, lastName, hairColor) {

    let personInfo = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor,
    }
    console.log(JSON.stringify(personInfo));
}

convertToJSON('Peter', 'Smith', 'Blond');