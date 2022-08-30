function newHouse(input) {
    let kindOfFlower = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);

    let price = 0;

    switch(kindOfFlower) {
        case "Roses":
            price = flowerCount * 5.00;
            if(flowerCount > 80) {
                price = price * 0.90;
            }
            break;
        case "Dahlias":
            price = flowerCount * 3.80;
            if(flowerCount > 90) {
                price = price * 0.85;
            }
            break;
        case "Tulips":
            price = flowerCount * 2.80;
            if( flowerCount > 80) {
                price = price * 0.85;
            }
            break;
        case "Narcissus":
             price = flowerCount * 3.00;
             if( flowerCount < 120) {
                 price = price * 1.15;
             }
             break;
        case "Gladiolus":
            price = flowerCount * 2.50;
            if(flowerCount < 80) {
                price = price * 1.20;
            }
            break;
    }

    let difference = Math.abs(budget - price);

    if(budget >= price) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${kindOfFlower} and ${difference.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${difference.toFixed(2)} leva more.`);
    }

}

newHouse(["Narcissus",
"119",
"360"])


