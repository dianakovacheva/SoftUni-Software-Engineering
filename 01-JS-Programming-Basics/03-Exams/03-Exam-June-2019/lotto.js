function checkLottoTicket(playedNumbers, winNumbers, totalMoneyPrize) {

    let guessedNumbersCount = 0;
    let guessedNumbers = "";
    let playersPrize = 0;

    for (let i = 0; i < playedNumbers.length; i++) {
        for (let j = 0; j < winNumbers.length; j++) {
            if (playedNumbers[i] === winNumbers[j]) {
                guessedNumbersCount++;
                guessedNumbers += `${playedNumbers[i]} `;
            }
        }

    }

    if (guessedNumbersCount === 6) {
        playersPrize = totalMoneyPrize * 0.60;
    } else if (guessedNumbersCount === 5) {
        playersPrize = totalMoneyPrize * 0.30;
    } else if (guessedNumbersCount === 4) {
        playersPrize = totalMoneyPrize * 0.001;
    } else if (guessedNumbersCount === 3) {
        playersPrize = totalMoneyPrize * 0.00001;
    }

    console.log(`You have guessed the numbers: ${guessedNumbers}`);
    console.log(`Your prize is: ${playersPrize} EUR.`);
}

let playedNumbers = [2, 3, 4, 5, 6, 7];
let winNumbers = [2, 3, 4, 5, 6, 7];

checkLottoTicket(playedNumbers, winNumbers, 1000000);