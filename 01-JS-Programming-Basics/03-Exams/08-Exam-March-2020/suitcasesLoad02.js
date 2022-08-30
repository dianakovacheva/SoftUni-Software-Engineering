function suitCasesLoad(input) {
    let trunkCapacity = Number(input[0]);
    let countLoadedLaguage = 0;

    for (let i = 1; i < input.length; i++) {
        if (input[i] === "End") {
            console.log("Congratulations! All suitcases are loaded!");
            break;
        }

        let laguageVolume = Number(input[i]);
        if (i % 3 === 0) {
            laguageVolume *= 1.10;
        }

        if (laguageVolume > trunkCapacity) {
            console.log("No more space!");
            break;
        }
        trunkCapacity -= laguageVolume;
        countLoadedLaguage++;
    }
    console.log(`Statistic: ${countLoadedLaguage} suitcases loaded.`);
}

suitCasesLoad(["550",
"100",
"252",
"72",
"End"])




