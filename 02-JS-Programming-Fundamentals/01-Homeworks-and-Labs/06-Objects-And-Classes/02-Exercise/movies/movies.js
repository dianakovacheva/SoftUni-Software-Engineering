function movies(arr) {
   
    let movies = [];

    arr.forEach(currentRow => {
        if(currentRow.includes("addMovie")) {
            let name = currentRow.split('addMovie ')[1];
            movies.push({name: name});
        } else if(currentRow.includes("directedBy")) {
            let [name, director] = currentRow.split(' directedBy ');
            let doesTheMovieExist = movies.find(el => el.name === name);

            if(doesTheMovieExist) {
                doesTheMovieExist.director = director;
            };

        } else if(currentRow.includes("onDate")) {
            let [name, date] = currentRow.split(' onDate ');
            let doesTheMovieExist = movies.find(el => el.name === name);

            if(doesTheMovieExist) {
                doesTheMovieExist.date = date;
            };
        }
    });

    movies.forEach(movie => {
        if(movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    });
  
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    );