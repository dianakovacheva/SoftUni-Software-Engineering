function hairSalon(input) {
    dayGoal = Number(input[0]);
    totalForDay = 0;
    for (let i = 1; i < input.length; i += 2) {
        if (input[i] === 'closed') {
            break;
        }
        service = input[i + 1];
        switch (service) {
            case 'mens':
                totalForDay += 15;
                break;
            case 'ladies':
                totalForDay += 20;
                break;
            case 'kids':
                totalForDay += 10
                break;
            case 'touch up':
                totalForDay += 20;
                break;
            case 'full color':
                totalForDay += 30;
                break;
        }
        if (totalForDay >= dayGoal) {
            break;
        }
    }
    if (totalForDay >= dayGoal) {
        console.log(`You have reached your target for the day!\nEarned money: ${totalForDay}lv.`);
    }
    else {
        console.log(`Target not reached! You need ${dayGoal - totalForDay}lv. more.\nEarned money: ${totalForDay}lv.`);
    }
}

hairSalon(["300",
    "haircut",
    "ladies",
    "haircut",
    "kids",
    "color",
    "touch up",
    "closed"])

