function personInfo(firstName, lastName, age) {

    const person = {
        firstName: firstName,
        lastName: lastName,
        age: Number(age),
    }
    return person;
}

personInfo("Peter",
    "Pan",
    "20"
);