function hairSalon(input) {
    let target = Number(input[0]);
    let totalEarnedMoney = 0;

    for (let i = 1; i <= input.length; i += 2) {
        let service = input[i + 1];

        if (input[i] === "closed") {
            break;
        }

        switch (service) {
            case "mens":
                totalEarnedMoney += 15;
                break;
            case "ladies":
                totalEarnedMoney += 20;
                break;
            case "kids":
                totalEarnedMoney += 10;
                break;
            case "touch up":
                totalEarnedMoney += 20;
                break;
            case "full color":
                totalEarnedMoney += 30;
                break;
        }
    }

    let diff = Math.abs(target - totalEarnedMoney);

    if (totalEarnedMoney >= target) {
        console.log("You have reached your target for the day!");
    } else {
        console.log(`Target not reached! You need ${diff}lv. more.`);
    }

    console.log(`Earned money: ${totalEarnedMoney}lv.`);
}

hairSalon(["50",
"color",
"full color",
"haircut",
"ladies"])
