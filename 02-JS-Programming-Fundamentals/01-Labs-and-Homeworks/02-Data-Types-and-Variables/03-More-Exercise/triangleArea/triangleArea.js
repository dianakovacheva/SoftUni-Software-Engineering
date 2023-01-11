function triangleArea(firstSide, secondSide, thirdSide) {
    let semiParameter = (firstSide + secondSide + thirdSide) / 2;
    let area = Math.sqrt(semiParameter * (semiParameter - firstSide) * (semiParameter - secondSide) * (semiParameter - thirdSide));

    console.log(area);
}

triangleArea(3, 5.5, 4);