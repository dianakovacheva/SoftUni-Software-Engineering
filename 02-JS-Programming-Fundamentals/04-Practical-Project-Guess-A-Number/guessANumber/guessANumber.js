function guessANumber(guess) {

    // in this case 50 is the max random number
    let randomNumber = Math.floor(Math.random() * 10);
    let isGuessed = false;
    let attemptCount = 0;
    let maxAttempts = 5;

    console.log(randomNumber);

    while (attemptCount < maxAttempts) {
        attemptCount++;
    }

    if (guess < randomNumber) {
        console.log("The guess is too low!");
    } else if (guess > randomNumber) {
        console.log("The guess is too high!");
    } else if (guess === randomNumber) {
        console.log("You guessed it! You win!");
        isGuessed = true;
    } else {
        console.log("Invalid input! Try again...");
    }
}

guessANumber(5);