/*
function coins(input) {
    let moneyLeftToReturn = Number(input[0] * 100);
    let coinsCounter = 0;
    while (moneyLeftToReturn - 200 >= 0) {
        moneyLeftToReturn -= 200;
        coinsCounter++;
    }
    while (moneyLeftToReturn - 100 >= 0) {
        moneyLeftToReturn -= 100;
        coinsCounter++;
    }
    while (moneyLeftToReturn - 50 >= 0) {
        moneyLeftToReturn -= 50;
        coinsCounter++;
    }
    while (moneyLeftToReturn - 20 >= 0) {
        moneyLeftToReturn -= 20;
        coinsCounter++;
    }
    while (moneyLeftToReturn - 10 >= 0) {
        moneyLeftToReturn -= 10;
        coinsCounter++;
    }
    while (moneyLeftToReturn - 5 >= 0) {
        moneyLeftToReturn -= 5;
        coinsCounter++;
    }
    while (moneyLeftToReturn - 2 >= 0) {
        moneyLeftToReturn -= 2;
        coinsCounter++;
    }
    while (moneyLeftToReturn - 1 >= 0) {
        moneyLeftToReturn -= 1;
        coinsCounter++;
    }

    console.log(coinsCounter);
}

//coins(["50"])
*/

function coins(input) {
    let changeLeftToReturn = Math.round(Number(input[0]) * 100);
    let coinsCounter = 0;

    while (changeLeftToReturn > 0) {
        coinsCounter++;

        if (changeLeftToReturn >= 200) {
            changeLeftToReturn -= 200;
        } else if (changeLeftToReturn >= 100) {
            changeLeftToReturn -= 100;
        } else if (changeLeftToReturn >= 50) {
            changeLeftToReturn -= 50;
        } else if (changeLeftToReturn >= 20) {
            changeLeftToReturn -= 20;
        } else if (changeLeftToReturn >= 10) {
            changeLeftToReturn -= 10;
        } else if (changeLeftToReturn >= 5) {
            changeLeftToReturn -= 5;
        } else if (changeLeftToReturn >= 2) {
            changeLeftToReturn -= 2;
        } else {
            changeLeftToReturn -= 1;
        }
    }
    console.log(coinsCounter);
}

coins(["0.56"])
