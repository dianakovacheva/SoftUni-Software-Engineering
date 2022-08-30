function harvest(input) {
    let grapesArea = Number(input[0]);
    let grapesQuantityPerQuadrateMeter = Number(input[1]);
    let neededLitersWine = Number(input[2]);
    let workersCounr = Number(input[3]);

    let neededGrapesForOneLiterWine = 2.5;
    let totalGrapesQuantity = grapesArea * grapesQuantityPerQuadrateMeter;
    let producedLitersWine = totalGrapesQuantity * 0.40 / neededGrapesForOneLiterWine;

    let diff = Math.abs(neededLitersWine - producedLitersWine);
    let litersWinePerPerson = diff / workersCounr;
    
    if (producedLitersWine < neededLitersWine) {
        console.log(`It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`);
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(producedLitersWine)} liters.`);
        console.log(`${Math.ceil(diff)} liters left -> ${Math.ceil(litersWinePerPerson)} liters per person.`);
    }
}

harvest(["1020", "1.5", "425", "4"])