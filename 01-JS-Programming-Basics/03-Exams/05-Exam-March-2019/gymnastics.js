function gymnastics(input) {
    let country = input[0];
    let tool = input[1];

    switch (tool) {
        case "ribbon":
            switch (country) {
                case "Russia":
                    levelOfDifficaltyNote = 9.100;
                    performanceNote = 9.400;
                    break;
                case "Bulgaria":
                    levelOfDifficaltyNote = 9.600;
                    performanceNote = 9.400;
                    break;
                case "Italy":
                    levelOfDifficaltyNote = 9.200;
                    performanceNote = 9.500;
                    break;
            }
            break;
        case "hoop":
            switch (country) {
                case "Russia":
                    levelOfDifficaltyNote = 9.300;
                    performanceNote = 9.800;
                    break;
                case "Bulgaria":
                    levelOfDifficaltyNote = 9.550;
                    performanceNote = 9.750;
                    break;
                case "Italy":
                    levelOfDifficaltyNote = 9.450;
                    performanceNote = 9.350;
                    break;
            }
            break;
        case "rope":
            switch (country) {
                case "Russia":
                    levelOfDifficaltyNote = 9.600;
                    performanceNote = 9.000;
                    break;
                case "Bulgaria":
                    levelOfDifficaltyNote = 9.500;
                    performanceNote = 9.400;
                    break;
                case "Italy":
                    levelOfDifficaltyNote = 9.700;
                    performanceNote = 9.150;
                    break;
            }
            break;
    }

    let totalPoints = levelOfDifficaltyNote + performanceNote;
    let notEnoughtPoints = 20 - totalPoints;
    let percentageNotEnoughtPoints = notEnoughtPoints / 20 * 100;

    console.log(`The team of ${country} get ${totalPoints.toFixed(3)} on ${tool}.`);
    console.log(`${percentageNotEnoughtPoints.toFixed(2)}%`);
}

gymnastics(["Italy",
    "hoop"])

