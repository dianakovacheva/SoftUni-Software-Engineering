function traveling(input) {
    for (let i = 0; i < input.length; i++) {
        // curr is the current value from the input array
        let curr = input[i];
        if (isNaN(curr) && curr !== 'End') {
            // if the current value is Not a Number and is not 'End', 
            //then it is a destination
            console.log(`Going to ${curr}!`);
        } else if (curr === 'End') {
            // else if the current value is 'End', we want to stop the iteration
            break;
        }
    }
}

traveling(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"])

