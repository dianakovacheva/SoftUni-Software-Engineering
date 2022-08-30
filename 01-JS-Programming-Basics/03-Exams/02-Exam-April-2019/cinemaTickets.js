function cinemaTickets(input) {
    let numberTotalTickets = 0;
    let numberStudentTickets = 0;
    let numberStandardTickets = 0;
    let numberKidTickets = 0;
    let i = 0;
    while (input[i] !== 'Finish') {
        let tempMovieName = input[i + 0];
        let tempSeatsAvailable = Number(input[i + 1]);
        let j = 2;

        // varialbe to store tickets count by type
        let tempNumberStudentTickets = 0;
        let tempNumberStandardTickets = 0;
        let tempNumberKidTickets = 0;
        let tempTotalTickets = 0;

        while (input[i + j] !== 'End' && input[i + j] !== 'Finish') {
            let ticketType = input[i + j];
            if (tempSeatsAvailable > tempTotalTickets) {
                switch (ticketType) {
                    case "student":
                        tempNumberStudentTickets++;
                        tempTotalTickets++;
                        break;
                    case "standard":
                        tempNumberStandardTickets++;
                        tempTotalTickets++;
                        break;
                    case "kid":
                        tempNumberKidTickets++;
                        tempTotalTickets++;
                        break;
                }
            }
            j++;
        }


        // add to globals
        numberTotalTickets += tempTotalTickets;
        numberStudentTickets += tempNumberStudentTickets;
        numberStandardTickets += tempNumberStandardTickets;
        numberKidTickets += tempNumberKidTickets;

        tempPercentageTakeSeats = (tempTotalTickets / tempSeatsAvailable * 100).toFixed(2);
        console.log(`${tempMovieName} - ${tempPercentageTakeSeats}% full.`);

        if (input[i + j] === 'Finish') {
            break;
        }
        i = i + j + 1;
    }

    // prepare values for output
    let percantageStudentTickets = (numberStudentTickets / numberTotalTickets * 100).toFixed(2);
    let percantageStandardtTickets = (numberStandardTickets / numberTotalTickets * 100).toFixed(2);
    let percantageKidTickets = (numberKidTickets / numberTotalTickets * 100).toFixed(2);

    console.log(`Total tickets: ${numberTotalTickets}`);
    console.log(`${percantageStudentTickets}% student tickets.`);
    console.log(`${percantageStandardtTickets}% standard tickets.`);
    console.log(`${percantageKidTickets}% kids tickets.`);

}

cinemaTickets(["Taxi",
    "1",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "1",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])
