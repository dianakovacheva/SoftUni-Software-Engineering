function timePlus15Minutes(input) {

    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let newMinutes = minutes + 15;

    if (newMinutes > 59) {
        hours += 1;
        newMinutes = newMinutes - 60;

        if (hours > 23) {
            hours = 0;
        }
    }

    if (newMinutes < 10) {
        console.log(`${hours}:0${newMinutes}`);
    } else {
        console.log(`${hours}:${newMinutes}`);
    }
}


timePlus15Minutes(["12", "49"]);



/*if (newMinutes < 10) {
        var minutesString = "0" + newMinutes.toString();
    } else {
        var minutesString = newMinutes.toString();
    }

    console.log(`${hours}:${minutesString}`); */