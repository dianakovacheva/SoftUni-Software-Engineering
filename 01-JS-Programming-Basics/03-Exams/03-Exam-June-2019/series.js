function series(input) {
    let budget = Number(input[0]);
    let movieCount = Number(input[1]);
    let moviesPrice = 0;

    for (let i = 2; i < input.length; i += 2) {
        let currentMovieName = input[i];
        let currentMoviePrice = Number(input[i + 1]);
        switch (currentMovieName) {
            case "Thrones":
                moviesPrice += currentMoviePrice * 0.50;
                break;
            case "Lucifer":
                moviesPrice += currentMoviePrice * 0.60;
                break;
            case "Protector":
                moviesPrice += currentMoviePrice * 0.70;
                break;
            case "TotalDrama":
                moviesPrice += currentMoviePrice * 0.80;
                break;
            case "Area":
                moviesPrice += currentMoviePrice * 0.90;
                break;
        }

        if (currentMovieName !== "Thrones" && currentMovieName !== "Lucifer" && currentMovieName !== "Protector" && currentMovieName !== "TotalDrama" && currentMovieName !== "Area") {
            moviesPrice += currentMoviePrice;
        }
    }

    let diff = Math.abs(budget - moviesPrice);

    if (budget >= moviesPrice) {
        console.log(`You bought all the series and left with ${diff.toFixed(2)} lv.`);
    } else {
        console.log(`You need ${diff.toFixed(2)} lv. more to buy the series!`);
    }
}

series(["25",
    "6",
    "Teen Wolf",
    "8",
    "Protector",
    "5",
    "TotalDrama",
    "5",
    "Area",
    "4",
    "Thrones",
    "5",
    "Lucifer",
    "9"])


