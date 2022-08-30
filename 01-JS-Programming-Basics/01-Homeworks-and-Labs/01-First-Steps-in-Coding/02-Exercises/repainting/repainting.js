function repainting(input) {

    const NYLON_PRICE = 1.5;
    const PAINT_PRICE = 14.5;
    const DILUENT_PRICE = 5;
    const BAG = 0.4;

    let neededNylon = Number(input[0]);
    let neededPaint = Number(input[1]);
    let neededDiluent = Number(input[2]);
    let hoursWork = Number(input[3]);


    let totalNylon = neededNylon + 2;
    let totalPaint = neededPaint * 1.1;
    let materialsTotal = totalNylon * NYLON_PRICE + totalPaint * PAINT_PRICE + neededDiluent * DILUENT_PRICE + BAG;
    let workerMoney = materialsTotal * 0.3 * hoursWork;
    let total = materialsTotal + workerMoney;

    console.log(total);
}

repainting(["10",
    "11",
    "4",
    "8"]
);