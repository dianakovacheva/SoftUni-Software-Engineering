function cinemaTickets(input) {
    let index = 0;
    let command = input[index];
    index++;

    let studentTicketCounter = 0;
    let standardTicketCounter = 0;
    let kidTicketCounter = 0;

    while(command !== "Finish") {
        let movieName = command;
        let freeSpace = Number(input[index]);
        index++;
        let secondCommand = input[index];
        index++;

        let soldTickets = 0;
        while(secondCommand !== "End") {
            let ticketType = secondCommand;
            soldTickets++;

            switch(ticketType) {
                case "student":
                    studentTicketCounter++;
                    break;
                case "standard":
                    standardTicketCounter++;
                    break;
                case "kid":
                    kidTicketCounter++;
                    break;
            }

            if(freeSpace <= soldTickets) {
                break;
            }

            secondCommand = input[index];
            index++;
        }

        let percentFullSpace = soldTickets / freeSpace * 100;
        console.log(`${movieName} - ${percentFullSpace.toFixed(2)}% full.`);
        
        command = input[index];
        index++;
    }
    let totalTickets = studentTicketCounter + standardTicketCounter + kidTicketCounter;
    let percentStudentTickets = studentTicketCounter / totalTickets * 100;
    let percentStandardTickets = standardTicketCounter / totalTickets * 100;
    let percentKidTickets = kidTicketCounter / totalTickets * 100;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${percentStudentTickets.toFixed(2)}% student tickets.`);
    console.log(`${percentStandardTickets.toFixed(2)}% standard tickets.`);
    console.log(`${percentKidTickets.toFixed(2)}% kids tickets.`);
}

cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])
