function trainingLab(input) {
    let lengthInMeters = Number(input[0]);
    let widthInMeters = Number(input[1]);
    let roomWidthWithoutCorridor = (widthInMeters * 100) - 100
    let workingSpacesCount = Math.floor(roomWidthWithoutCorridor / 70);
    let workingSpacesRowCount = Math.floor((lengthInMeters * 100) / 120);
    let totalSpacesCount = workingSpacesCount * workingSpacesRowCount - 3;

    console.log(totalSpacesCount);
}

trainingLab(["8.4", "5.2"])