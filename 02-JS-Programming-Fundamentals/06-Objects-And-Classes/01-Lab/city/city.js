function printCity(cityInfo) {

    for (let key of Object.keys(cityInfo)) {
        console.log(`${key} -> ${cityInfo[key]}`);
        
    }
}

printCity({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
}
);