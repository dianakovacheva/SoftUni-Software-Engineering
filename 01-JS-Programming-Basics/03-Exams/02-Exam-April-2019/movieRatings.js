function movieRatings(input) {
    let moviesCount = Number(input[0]);
    let highestMovieRating = 0;
    let lowestMovieRating = 0;
    let averageMovieRating = 0;
    let movieName = "";
    let totalMovieRating = 0;

    for (let i = 1; i < input.length; i += 2) {
        movieName = input[i];
        let tempMovieRating = Number(input[i + 1]);
        totalMovieRating += tempMovieRating;

        if (highestMovieRating < tempMovieRating) {
            highestMovieRating += tempMovieRating;
            console.log(`${movieName} is with highest rating: ${highestMovieRating.toFixed(1)}`);
        }
        if (tempMovieRating < lowestMovieRating) {
            lowestMovieRating += tempMovieRating;
            console.log(`${movieName} is with lowest rating: ${lowestMovieRating.toFixed(1)}`);
        }
    }

    averageMovieRating = totalMovieRating / moviesCount;
    console.log(`Average rating: ${averageMovieRating.toFixed(1)}`);
}

movieRatings(["3",
    "Interstellar",
    "8.5",
    "Dangal",
    "8.3",
    "Green Book",
    "8.2"])