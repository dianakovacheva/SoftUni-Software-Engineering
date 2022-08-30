function tradeCommissions(input) {

    let city = input[0];
    let sells = Number(input[1]);
    let commission = 0;

    switch (city) {
        case "Sofia":
            if (sells < 0) {
                commission = undefined;
            } else if (sells >= 0 && sells <= 500) {
                commission = 0.05;
            } else if (sells > 500 && sells <= 1000) {
                commission = 0.07;
            } else if (sells > 1000 && sells <= 10000) {
                commission = 0.08;
            } else {
                commission = 0.12;
            }
            break;
        case "Varna":
            if (sells < 0) {
                commission = undefined;
            } else if (sells >= 0 && sells <= 500) {
                commission = 0.045;
            } else if (sells > 500 && sells <= 1000) {
                commission = 0.075;
            } else if (sells > 1000 && sells <= 10000) {
                commission = 0.10;
            } else {
                commission = 0.13;
            }
            break;
        case "Plovdiv":
            if (sells < 0) {
                commission = undefined;
            } else if (sells >= 0 && sells <= 500) {
                commission = 0.055;
            } else if (sells > 500 && sells <= 1000) {
                commission = 0.08;
            } else if (sells > 1000 && sells <= 10000) {
                commission = 0.12;
            } else {
                commission = 0.145;
            }
            break;
        default:
            commission = undefined;
            break;
    }

    if (commission === undefined) {
        console.log("error");
    } else {
        let total = Math.abs(sells * commission);
        console.log(total.toFixed(2));
    }
}

tradeCommissions(["Sofia",
"1500"])

