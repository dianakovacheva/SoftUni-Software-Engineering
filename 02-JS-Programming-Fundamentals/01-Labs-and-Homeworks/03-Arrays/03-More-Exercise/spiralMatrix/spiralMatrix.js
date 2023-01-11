function spiralMatrix(numberOfRows, numberOfColumns) {

    let maxNumber = numberOfRows * numberOfColumns;
    let left = 0;
    let top = 0;
    let right = numberOfColumns - 1;
    let bottom = numberOfRows - 1;
    
    // arr = [_,_,_]
    //       [[],_,_]
    //       [[],[],_]
    //       [[_,_,_],[_,_,_],[_,_,_]]

    let arr = Array(numberOfRows);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Array(numberOfColumns);
    }

    let ins = 1;

    while (ins <= maxNumber) {
        for (let i = left; i <= right && ins <= maxNumber; i++) {
            arr[top][i] = ins++;
        }
        top++;

        for (let i = top; i <= bottom && ins <= maxNumber; i++) {
            arr[i][right] = ins++;
        }
        right--;

        for (let i = right; i >= left && ins <= maxNumber; i--) {
            arr[bottom][i] = ins++;
        }
        bottom--;

        for (let i = bottom; i >= top; i--) {
            arr[i][left] = ins++;
        }
        left++;
    }

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].join(" "));
    }
}
spiralMatrix(5, 2);