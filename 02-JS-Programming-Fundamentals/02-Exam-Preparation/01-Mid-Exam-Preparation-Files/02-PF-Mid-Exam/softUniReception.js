function softUniReception(arrayOfNumbers) {
    let firstEmployeeEfficiencyPerHour = Number(arrayOfNumbers.shift());
    let secondEmployeeEfficiencyPerHour = Number(arrayOfNumbers.shift());
    let thirdEmployeeEfficiencyPerHour = Number(arrayOfNumbers.shift());
    let studentsCount = Number(arrayOfNumbers.shift());

    let totalStudentsCountPerHour = firstEmployeeEfficiencyPerHour + secondEmployeeEfficiencyPerHour + thirdEmployeeEfficiencyPerHour;
    let neededTime = 0;

    while (studentsCount > 0) {
        neededTime++;
        studentsCount -= totalStudentsCountPerHour;

        if (neededTime % 4 === 0) {
            neededTime++;
        }
    }

    console.log(`Time needed: ${neededTime}h.`);
}

softUniReception(['1', '2', '3', '45']);