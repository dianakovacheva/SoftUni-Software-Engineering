function readText(input) {

    let index = 0;
    let currentWord = input[index];

    while (currentWord !== "Stop") {
        console.log(currentWord);
        index++;
        currentWord = input[index];


    }
}

readText(["Sofia",
"Berlin",
"Moscow",
"Athens",
"Madrid",
"London",
"Paris",
"Stop",
"AfterStop"])