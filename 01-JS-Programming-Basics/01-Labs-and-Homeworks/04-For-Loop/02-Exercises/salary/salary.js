function salary(input) {
    let countOpneTabs = Number(input[0]);
    let monthlySalary = Number(input[1]);

    for (let i = 2; i < countOpneTabs + 2; i++) {
        let webSite = input[i];
        let fine = 0;

        switch (webSite) {
            case "Facebook":
                fine = 150;
                break;
            case "Instagram":
                fine = 100;
                break;
            case "Reddit":
                fine = 50;
                break;
        }

        monthlySalary -= fine;
    }

    if ( monthlySalary <= 0) {
        console.log("You have lost your salary." );
    } else {
        console.log(monthlySalary);
    }
}

salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"]);