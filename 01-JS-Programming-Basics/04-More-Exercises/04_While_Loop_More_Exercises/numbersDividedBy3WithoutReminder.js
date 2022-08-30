function numbersDividedBy3WithoutReminder() {
let number = 1;

    while(number <= 100) {
        if(number % 3 === 0) {
            console.log(number);
        }
        number++;
    }
}

numbersDividedBy3WithoutReminder();