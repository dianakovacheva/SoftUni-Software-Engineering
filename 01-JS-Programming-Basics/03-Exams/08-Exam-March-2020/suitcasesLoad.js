function suitcasesLoad(input) {
    let trunkCapacity = Number(input[0]);
    let loadedLaguage = 0;

    for (let i = 1; i < input.length; i++) {
        if (input[i] === "End") {
            console.log("Congratulations! All suitcases are loaded!");
            break;
        }

        let currentLaguageVolume = Number(input[i]);
        trunkCapacity -= currentLaguageVolume;
        loadedLaguage++;

        if (trunkCapacity <= 0) {
            console.log("No more space!");
            loadedLaguage--;
        }
        if (currentLaguageVolume % 3 === 0) {
            currentLaguageVolume *= 1.10;
        }

    }

    console.log(`Statistic: ${loadedLaguage} suitcases loaded.`);
}

suitcasesLoad(["550",
    "100",
    "252",
    "72",
    "End"])