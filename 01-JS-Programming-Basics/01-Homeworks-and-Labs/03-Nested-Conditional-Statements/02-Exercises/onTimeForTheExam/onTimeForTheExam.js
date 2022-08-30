function onTimeForTheExam(input) {
    let examBeginHH = Number(input[0]);
    let examBeginMM = Number(input[1]);
    let arrivingHH = Number(input[2]);
    let arrivingMM = Number(input[3]);

    let examBeginInMunutes = examBeginHH * 60 + examBeginMM;
    let arrivingTimeInMinuters = arrivingHH * 60 + arrivingMM;

    let timeDifference = Math.abs(arrivingTimeInMinuters - examBeginInMunutes);

    let HH = Math.floor(timeDifference / 60);
    let MM = timeDifference % 60;

    if (examBeginInMunutes < arrivingTimeInMinuters) {
        console.log("Late");
        if (timeDifference >= 60) {
            if (MM < 10) {
                console.log(`${HH}:0${MM} hours after the start`);
            } else {
                console.log(`${HH}:${MM} hours after the start`);
            }
        } else {
            console.log(`${MM} minutes after the start`);
        }
    } else if (examBeginInMunutes - arrivingTimeInMinuters <= 30 || examBeginInMunutes === arrivingTimeInMinuters) {
        console.log("On time");
        if (timeDifference > 0) {
            console.log(`${MM} minutes before the start`);
        }
    } else {
        console.log("Early");
        if (HH > 0) {
            if (MM < 10) {
                console.log(`${HH}:0${MM} hours before the start`);
            } else {
                console.log(`${HH}:${MM} hours before the start`);
            }
        } else {
            console.log(`${MM} minutes before the start`);
        }
    }
}

onTimeForTheExam(["11",
"30",
"12",
"29"])





