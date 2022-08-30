function fitnessCenter(input) {
    let peopleCount = Number(input[0]);

    let peopleCountWorkOutBack = 0;
    let peopleCountWorkOutChest = 0;
    let peopleCountWorkOutLegs = 0;
    let peopleCountWorkOutAbs = 0;
    let peopleCountBoughtProteinShake = 0;
    let peopleCountBoughtProteinBar = 0;

    for (let i = 1; i < input.length; i++) {
        let activity = input[i];

        switch (activity) {
            case "Back":
                peopleCountWorkOutBack++;
                break;
            case "Chest":
                peopleCountWorkOutChest++;
                break;
            case "Legs":
                peopleCountWorkOutLegs++;
                break;
            case "Abs":
                peopleCountWorkOutAbs++;
                break;
            case "Protein shake":
                peopleCountBoughtProteinShake++;
                break;
            case "Protein bar":
                peopleCountBoughtProteinBar++;
                break;
        }
    }

    let totalPeopleCountWhoWorkedOut = peopleCountWorkOutBack + peopleCountWorkOutChest
    + peopleCountWorkOutLegs + peopleCountWorkOutAbs;
    let percentagePeopleWorkedOut = totalPeopleCountWhoWorkedOut / peopleCount * 100;
    let peopleCountWhoBoughtProtein = peopleCount - totalPeopleCountWhoWorkedOut;
    let percentagePeopleWhoBoughtProtein = peopleCountWhoBoughtProtein / peopleCount * 100;

    console.log(`${peopleCountWorkOutBack} - back`);
    console.log(`${peopleCountWorkOutChest} - chest`);
    console.log(`${peopleCountWorkOutLegs} - legs`);
    console.log(`${peopleCountWorkOutAbs} - abs`);
    console.log(`${peopleCountBoughtProteinShake} - protein shake`);
    console.log(`${peopleCountBoughtProteinBar} - protein bar`);
    console.log(`${percentagePeopleWorkedOut.toFixed(2)}% - work out`);
    console.log(`${percentagePeopleWhoBoughtProtein.toFixed(2)}% - protein`);
}

fitnessCenter(["7",
"Chest",
"Back",
"Legs",
"Legs",
"Abs",
"Protein shake",
"Protein bar"])

