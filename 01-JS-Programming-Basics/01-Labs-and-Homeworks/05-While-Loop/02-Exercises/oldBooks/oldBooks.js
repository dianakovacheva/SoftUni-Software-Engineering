function oldBooks(input) {
    let wishedBook = input[0];
    let bookIsFound = false;
    let i = 1;

    while (!bookIsFound && input !== "No More Books" && i<input.length ) {
        if (input[i] === wishedBook) {
            bookIsFound = true;
        }
        i++;
    }
    if (bookIsFound === false) {
        console.log("The book you search is not here!");
        console.log(`You checked ${i - 2} books.`);
    } else {
        console.log(`You checked ${i - 1} books and found it.`);
    }
}
oldBooks(["Bourne",
    "True Story",
    "Forever",
    "Bournea"])