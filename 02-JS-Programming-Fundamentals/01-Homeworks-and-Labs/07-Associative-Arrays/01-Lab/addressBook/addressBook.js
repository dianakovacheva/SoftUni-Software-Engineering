function addressBook(arr) {
    let addressBookObj = {};
    // Iterating through the properties of the array
    // Creating two variables (day, name), using destructuring
    for (const currentLine of arr) {
        let [name, address] = currentLine.split(':');
        addressBookObj[name] = address;
    }
    // The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
    let addressBookEntries = Object.entries(addressBookObj);
    let sortedNames = addressBookEntries.sort((a, b) => a[0].localeCompare(b[0]));
    for (const [name, address] of sortedNames) {
        console.log(`${name} -> ${address}`);
    }
}

addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
);