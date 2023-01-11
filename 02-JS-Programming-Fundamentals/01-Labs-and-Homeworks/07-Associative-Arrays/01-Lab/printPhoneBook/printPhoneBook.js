function printPhoneBook(arr) {
    let phoneBookObj = {};
    // Iterating through the properties of the array
    // Creating two variables (name, phoneNumber), using destructuring
    for (const currentLine of arr) {
        let [name, phoneNumber] = currentLine.split(' ');
        phoneBookObj[name] = phoneNumber;
    }
    // Using the "for in" loop to print out the keys and values of the object
    for (const key in phoneBookObj) {
        console.log(`${key} -> ${phoneBookObj[key]}`);
    }
}

printPhoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);