function housePainting(input) {
    let heigthOfHouse = Number(input[0]);
    let lengthSideWall = Number(input[1]);
    let heigthTrianglePartOfRoof = Number(input[2]);
    // Walls Size Calculations
    let sideWallSize = heigthOfHouse * lengthSideWall;
    let windowSize = 1.5 * 1.5;
    let totalSizeSideWall = 2 * sideWallSize - 2 * windowSize;
    let backSideSize = heigthOfHouse * heigthOfHouse;
    let doorSize = 1.2 * 2;
    let totalFrontAndBackSide = 2 * backSideSize - doorSize;
    let totalArea = totalSizeSideWall + totalFrontAndBackSide;
    let greenPaintQuantityInLiters = totalArea / 3.4;

    // Roof Size Calculations
    let squarePartOfRoof = 2 * (heigthOfHouse * lengthSideWall);
    let triangelPartOfRoof = 2 * (heigthOfHouse * heigthTrianglePartOfRoof / 2);
    let totalAreaRoof = squarePartOfRoof + triangelPartOfRoof;
    let redPaintQuantityInLiters = totalAreaRoof / 4.3;

    console.log(greenPaintQuantityInLiters.toFixed(2));
    console.log(redPaintQuantityInLiters.toFixed(2));
}

housePainting(["10.25", "15.45", "8.88"])