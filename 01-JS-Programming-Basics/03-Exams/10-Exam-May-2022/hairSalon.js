function hairSalon(input) {

    let targetMoney = Number(input[0]);
    let index = 1;
    let command = input[index];
    index++;
    let earnedMoney = 0;
    let service = input[index];
    index++;
    let servicePrice = 0;
    let isTargetReached = false;

    switch (service) {
        case "haircut":
            if (haircut === "mens") {
                servicePrice = 15.00;
            } else if (haircut === "ladies") {
                servicePrice = 20.00;
            } else {
                servicePrice = 10.00;
            }
            break;
        case "color":
            if (color === "touch up") {
                servicePrice = 20.00;
            } else {
                servicePrice = 30.00;
            }
            break;
    }

    while (command !== "closed" || isTargetReached !== false) {
        earnedMoney += service * servicePrice;
    }


    let diff = targetMoney - earnedMoney;

    if (earnedMoney >= targetMoney) {
        isTargetReached = true;
        console.log("You have reached your target for the day!");
        break;
    } else {
        console.log(`Target not reached! You need ${diff}lv. more.`);
    }

    console.log(`Earned money: ${earnedMoney}lv.`);

}

hairSalon(["300",
    "haircut",
    "ladies",
    "haircut",
    "kids",
    "color",
    "touch up",
    "closed"])