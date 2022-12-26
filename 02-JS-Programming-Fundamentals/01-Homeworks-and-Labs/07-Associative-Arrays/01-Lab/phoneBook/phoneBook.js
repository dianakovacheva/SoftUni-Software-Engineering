function phoneBook(arrayOfStrings) {

    let phoneBook = {};
    let namesArr = [];

    for (let i = 0; i < arrayOfStrings.length; i++) {
        let currentPerson = arrayOfStrings[i].split(' ');
        let personName = currentPerson[0];
        let personNumber = currentPerson[1];

        if (!namesArr.includes(personName)) {
            console.log(`${personName} -> ${personNumber}`);
        } else {
            let indexOfDoppelName = namesArr.indexOf(personName);
            namesArr.splice(indexOfDoppelName + 1, 1, personNumber);
            console.log(`${personName} -> ${personNumber}`);
        }

        namesArr.push(personName);
    }
}



phoneBook(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']
);