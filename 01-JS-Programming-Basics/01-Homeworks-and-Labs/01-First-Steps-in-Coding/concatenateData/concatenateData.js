function concatenateData(information) {
    let firstName = information[0];
    let lastName = information[1];
    let age = Number(information[2]);
    let town = information[3];

    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
}

concatenateData(["Veronika", "Georgieva", 20, "Burgas"]);