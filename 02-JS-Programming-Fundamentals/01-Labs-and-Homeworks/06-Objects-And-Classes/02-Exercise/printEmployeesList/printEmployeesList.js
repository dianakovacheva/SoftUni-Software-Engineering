function printEmployeesList(arrayOfNames) {

    for(let fullname of Object.values(arrayOfNames)) {
        let personalNumber = fullname.length;
        console.log(`Name: ${fullname} -- Personal Number: ${personalNumber}`);
    }

}

printEmployeesList([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
);