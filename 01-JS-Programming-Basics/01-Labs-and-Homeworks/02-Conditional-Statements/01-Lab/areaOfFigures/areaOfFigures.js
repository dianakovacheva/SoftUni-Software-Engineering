function areaOfFigures(input) {

    let shape = String(input[0]);

    if(shape === "square") {
        let side = Number(input[1]);
        let area = side * side;
        console.log(area);
    } else if(shape === "rectangle") {
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        let area = sideA * sideB;
        console.log(area);
    } else if(shape === "circle") {
        let radius = Number(input[1]);
        let area = radius * radius * Math.PI;
        console.log(area);
    } else if (shape === "triangle") {
        let base = Number(input[1]);
        let height = Number(input[2]);
        let area = base * height / 2;
        console.log(area);
    }
}

areaOfFigures(["square", "5"]);
areaOfFigures(["rectangle", "7", "2.5"]);
areaOfFigures(["circle", "6"]);
areaOfFigures(["triangle", "4.5", "20"]);