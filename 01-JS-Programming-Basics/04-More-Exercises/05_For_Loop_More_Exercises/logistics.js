function logistics(input) {
    let numLoadsToTransport = Number(input[0]);
    let price = 0;
    let tonLoadsBus = 0;
    let tonLoadsTruck = 0;
    let tonLoadsTrain = 0;
    let totalLoadsToTransport = 0;
    let averageTonPriceBus = 0;
    let averageTonPriceTruck = 0;
    let averageTonPriceTrain = 0;

    for (let i = 1; i <= numLoadsToTransport; i++) {
        let currentTonOfLoads = Number(input[i]);

        if (currentTonOfLoads <= 3) {
            price = 200;
            tonLoadsBus += currentTonOfLoads;
            averageTonPriceBus += currentTonOfLoads * price;
        } else if (currentTonOfLoads >= 4 && currentTonOfLoads <= 11) {
            price = 175;
            tonLoadsTruck += currentTonOfLoads;
            averageTonPriceTruck += currentTonOfLoads * price;
        } else {
            price = 120;
            tonLoadsTrain += currentTonOfLoads;
            averageTonPriceTrain += currentTonOfLoads * price;
        }

        totalLoadsToTransport += currentTonOfLoads;

    }

    let totalAverageTonPrice = (averageTonPriceBus + averageTonPriceTruck + averageTonPriceTrain) / totalLoadsToTransport;
    let percentageTonLoadsBus = (tonLoadsBus / totalLoadsToTransport) * 100;
    let percentageTonLoadsTruck = (tonLoadsTruck / totalLoadsToTransport) * 100;
    let percentageTonLoadsTrain = (tonLoadsTrain / totalLoadsToTransport) * 100;

    console.log(totalAverageTonPrice.toFixed(2));
    console.log(`${percentageTonLoadsBus.toFixed(2)}%`);
    console.log(`${percentageTonLoadsTruck.toFixed(2)}%`);
    console.log(`${percentageTonLoadsTrain.toFixed(2)}%`);
}

logistics(["5", "2", "10", "20", "1", "7"]);