function suppliesForSchool(input) {

    const PENPRICE = 5.80;
    const MARKERPRICE = 7.20;
    const DETERGENTPRICE = 1.20;

    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let cleaningDetergent = Number(input[2]);
    let discount = Number(input[3]);

    let sum = pens * PENPRICE + markers * MARKERPRICE + cleaningDetergent * DETERGENTPRICE;
    let total = sum - (sum * discount / 100);

    console.log(total);
}

suppliesForSchool(["4 ",
"2 ",
"5 ",
"13 "]
);