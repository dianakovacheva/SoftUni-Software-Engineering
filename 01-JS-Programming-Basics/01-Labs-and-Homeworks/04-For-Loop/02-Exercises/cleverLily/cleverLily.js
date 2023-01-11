function cleverLily(input) {
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let toyCount = 0;
    let savedMoney = 0;
    let toReciveMoney = 10;

    for (let i = 1; i <= age; i++) {
        if( i % 2 !== 0) {
            toyCount++;
        } else {
            savedMoney += toReciveMoney;
            toReciveMoney += 10;
            savedMoney--;
        }
    }

    savedMoney += toyCount * toyPrice;

    let diff = Math.abs(savedMoney - washingMachinePrice);

    if(savedMoney >= washingMachinePrice) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}

cleverLily(["21",
"1570.98",
"3"])

