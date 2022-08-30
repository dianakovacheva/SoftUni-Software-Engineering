function rectangleOfNXNStars(input) {
    let numberStars = Number(input[0]);
    let starCount = 0;
    let star = "";

    for (let i = 1; i <= numberStars; i++) {
        starCount++;
        star += "*";
        for (let j = 1; j <= numberStars; j++) {
            if (starCount === numberStars) {
                console.log(star);
            }
        }
    }
}


rectangleOfNXNStars(["4"]);