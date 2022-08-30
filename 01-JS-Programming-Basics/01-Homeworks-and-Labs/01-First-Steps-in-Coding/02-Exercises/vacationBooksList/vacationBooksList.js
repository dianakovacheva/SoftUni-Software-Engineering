function vacationBooksList(input) {

    let numberOfPages = Number(input[0]);
    let pagesProHour = Number(input[1]);
    let days = Number(input[2]);

    let readingTime = numberOfPages / pagesProHour;
    let neededHoursProDay = readingTime / days;

    console.log(neededHoursProDay);
}

vacationBooksList(["212", "20", "2"]);